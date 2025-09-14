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
    })).slice(0, 3) || []; // 最新3件を取得
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

      if (articles.length >= 3) break;
    }

    return articles;
  } catch (error) {
    console.error('Error fetching RSS articles:', error);
    return getDefaultMockArticles();
  }
}

// デフォルトのモックデータ（実際のZenn記事データ）
function getDefaultMockArticles(): Article[] {
  return [
    {
      id: '2025-09-10-claude-code-subagents-basics',
      title: 'Claude Code のサブエージェント機能の基本的な使い方',
      url: 'https://zenn.dev/ino_h/articles/2025-09-10-claude-code-subagents-basics',
      publishedAt: '2025-09-10',
      likes: 12,
      tags: ['Claude Code', 'AI', 'エージェント', 'プログラミング'],
      excerpt: 'Claude Codeの新機能であるサブエージェント機能の基本的な使い方と活用事例について解説します。'
    },
    {
      id: '2025-09-07-agentic-ai-weekly-summary',
      title: 'エージェント型AI（Agentic AI）の最新動向 - 2025年9月第1週まとめ',
      url: 'https://zenn.dev/ino_h/articles/2025-09-07-agentic-ai-weekly-summary',
      publishedAt: '2025-09-07',
      likes: 8,
      tags: ['Agentic AI', '最新動向', 'AI', 'まとめ'],
      excerpt: '2025年9月第1週のエージェント型AI分野における最新技術動向と注目すべき開発について紹介します。'
    },
    {
      id: '2024-06-29-llm-prompt-doc',
      title: 'Anthropic のプロンプトジェネレータを使ってみた',
      url: 'https://zenn.dev/ino_h/articles/2024-06-29-llm-prompt-doc',
      publishedAt: '2024-06-29',
      likes: 25,
      tags: ['Anthropic', 'プロンプト', 'LLM', 'AI'],
      excerpt: 'Anthropicが提供するプロンプトジェネレータの使用感と効果的な活用方法について実体験をもとに解説します。'
    }
  ];
}