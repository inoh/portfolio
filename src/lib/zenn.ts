import { Article } from '@/types';

// Zenn APIの基本URL
const ZENN_API_BASE = 'https://zenn.dev/api';

// Zennのユーザー記事を取得する関数
export async function fetchZennArticles(username: string): Promise<Article[]> {
  try {
    const response = await fetch(`${ZENN_API_BASE}/articles?username=${username}&order=latest`, {
      next: { revalidate: 3600 } // 1時間キャッシュ
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status}`);
    }

    const data = await response.json();
    
    // Zenn APIのレスポンス形式をArticle型に変換
    return data.articles?.map((article: any): Article => ({
      id: article.id,
      title: article.title,
      url: `https://zenn.dev${article.path}`,
      publishedAt: article.published_at,
      likes: article.liked_count,
      tags: article.tags?.map((tag: any) => tag.name) || [],
      excerpt: article.body_letters_count > 100 
        ? `${article.body_updated_at}...` 
        : article.body_updated_at || '記事の詳細を確認してください。'
    })).slice(0, 6) || []; // 最新6件を取得
  } catch (error) {
    console.error('Error fetching Zenn articles:', error);
    
    // エラー時はモックデータを返す
    return getDefaultMockArticles();
  }
}

// RSSフィードを使用してZenn記事を取得する関数（代替手段）
export async function fetchZennArticlesFromRSS(username: string): Promise<Article[]> {
  try {
    const response = await fetch(`https://zenn.dev/${username}/feed`, {
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status}`);
    }

    const text = await response.text();
    
    // 簡易的なRSSパーサー（実際のプロジェクトではxml2jsなどを使用推奨）
    const articles: Article[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const matches = Array.from(text.matchAll(itemRegex));

    for (const match of matches) {
      const item = match[1];
      const title = item.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/)?.[1];
      const link = item.match(/<link>([\s\S]*?)<\/link>/)?.[1];
      const pubDate = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1];
      const description = item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)?.[1];

      if (title && link && pubDate) {
        articles.push({
          id: link.split('/').pop() || '',
          title,
          url: link,
          publishedAt: new Date(pubDate).toISOString(),
          likes: 0, // RSSでは取得できない
          tags: [], // RSSでは取得できない
          excerpt: description ? description.substring(0, 150) + '...' : ''
        });
      }

      if (articles.length >= 6) break;
    }

    return articles;
  } catch (error) {
    console.error('Error fetching RSS articles:', error);
    return getDefaultMockArticles();
  }
}

// デフォルトのモックデータ
function getDefaultMockArticles(): Article[] {
  return [
    {
      id: '1',
      title: 'AWS Lambda と Ruby on Rails で実現するサーバーレス API',
      url: 'https://zenn.dev/ino_h',
      publishedAt: '2024-08-15',
      likes: 45,
      tags: ['AWS', 'Lambda', 'Ruby on Rails', 'サーバーレス'],
      excerpt: 'AWS Lambdaを使用してRuby on Railsアプリケーションをサーバーレス化する手法について詳しく解説します。'
    },
    {
      id: '2',
      title: 'React + Redux Toolkit でのモダンな状態管理パターン',
      url: 'https://zenn.dev/ino_h',
      publishedAt: '2024-08-01',
      likes: 38,
      tags: ['React', 'Redux', 'TypeScript', 'Frontend'],
      excerpt: 'Redux Toolkitを活用した効率的な状態管理の実装方法とベストプラクティスを紹介します。'
    },
    {
      id: '3',
      title: 'PostgreSQL パフォーマンスチューニングの実践テクニック',
      url: 'https://zenn.dev/ino_h',
      publishedAt: '2024-07-20',
      likes: 52,
      tags: ['PostgreSQL', 'データベース', 'パフォーマンス', 'SQL'],
      excerpt: '大規模なWebアプリケーションでのPostgreSQLのパフォーマンス最適化手法を実例とともに解説します。'
    }
  ];
}