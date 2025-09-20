'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Heart, ExternalLink, Tag } from 'lucide-react';
import { Article } from '@/types';
import { fetchZennArticlesFromRSS, fetchZennArticles } from '@/lib/zenn';

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // フォールバック用モックデータ（実際のZenn記事データ）
  const mockArticles: Article[] = [
    {
      id: '2025-09-10-claude-code-subagents-basics',
      title: 'Claude Code のサブエージェント機能の基本的な使い方',
      url: 'https://zenn.dev/ino_h/articles/2025-09-10-claude-code-subagents-basics',
      publishedAt: '2025-09-10',
      likes: 0,
      tags: ['Claude Code', 'AI', 'エージェント', 'プログラミング'],
      excerpt: 'Claude Codeの新機能であるサブエージェント機能の基本的な使い方と活用事例について解説します。'
    },
    {
      id: '2025-09-07-agentic-ai-weekly-summary',
      title: 'エージェント型AI（Agentic AI）の最新動向 - 2025年9月第1週まとめ',
      url: 'https://zenn.dev/ino_h/articles/2025-09-07-agentic-ai-weekly-summary',
      publishedAt: '2025-09-07',
      likes: 1,
      tags: ['Agentic AI', '最新動向', 'AI', 'まとめ'],
      excerpt: '2025年9月第1週のエージェント型AI分野における最新技術動向と注目すべき開発について紹介します。'
    },
    {
      id: '2024-06-29-llm-prompt-doc',
      title: 'Anthropic のプロンプトジェネレータを使ってみた',
      url: 'https://zenn.dev/ino_h/articles/2024-06-29-llm-prompt-doc',
      publishedAt: '2024-06-29',
      likes: 2,
      tags: ['Anthropic', 'プロンプト', 'LLM', 'AI'],
      excerpt: 'Anthropicが提供するプロンプトジェネレータの使用感と効果的な活用方法について実体験をもとに解説します。'
    }
  ];

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Zenn APIから記事を取得（複数の方法を試行）
        let fetchedArticles: Article[] = [];
        
        try {
          // 最初にZenn APIを試行
          fetchedArticles = await fetchZennArticles('ino_h');
        } catch (apiError) {
          console.warn('Zenn API failed, trying RSS feed:', apiError);
          // API失敗時はRSSフィードを試行
          fetchedArticles = await fetchZennArticlesFromRSS('ino_h');
        }
        
        // 記事が取得できない場合はモックデータを使用
        if (fetchedArticles.length === 0) {
          console.warn('No articles fetched, using mock data');
          fetchedArticles = mockArticles;
        }
        
        setArticles(fetchedArticles);
        setLoading(false);
      } catch (err) {
        console.error('All fetch methods failed:', err);
        setError('記事の取得に失敗しました。モックデータを表示します。');
        setArticles(mockArticles);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Articles
            </h2>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-xl p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Articles
            </h2>
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Zennで技術記事を発信しています。最新3記事をご紹介します。
            <br className="hidden md:block" />
            AI・エージェント技術を中心とした実践的な内容をお届けしています。
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
        >
          {articles.map((article) => (
            <motion.article
              key={article.id}
              variants={itemVariants}
              className="bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(article.publishedAt)}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Heart className="w-4 h-4 mr-1" />
                    {article.likes}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {article.title}
                </h3>

                {article.excerpt && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                  {article.tags.length > 3 && (
                    <span className="text-gray-500 text-xs py-1">
                      +{article.tags.length - 3}
                    </span>
                  )}
                </div>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                >
                  記事を読む
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://zenn.dev/ino_h"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
          >
            View all articles on Zenn
            <ExternalLink className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}