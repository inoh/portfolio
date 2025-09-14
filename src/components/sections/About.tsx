'use client';

import { motion } from 'framer-motion';
import { Calendar, TrendingUp, Shield, Users } from 'lucide-react';

export default function About() {
  const achievements = [
    {
      icon: TrendingUp,
      title: 'AWS月間コスト100万円削減',
      description: 'インフラ最適化とアーキテクチャ改善により大幅なコスト削減を実現',
    },
    {
      icon: Users,
      title: '10万アカウント規模のサービス運用',
      description: '大規模ユーザーベースを支える安定したサービス運用を担当',
    },
    {
      icon: TrendingUp,
      title: '500-2000rpsの高負荷処理システム',
      description: '高トラフィックに対応するスケーラブルなシステム設計・構築',
    },
    {
      icon: Shield,
      title: 'IPO準備セキュリティ対策',
      description: '企業の上場準備におけるセキュリティ基盤の整備・強化',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="py-20 bg-white" aria-labelledby="about-title">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="about-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            25年間のソフトウェア開発経験を通じて、スタートアップから大企業まで
            <br className="hidden md:block" />
            様々な規模のプロジェクトでフルスタック開発を担当してきました。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Calendar className="w-8 h-8 text-primary-600 mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">25年</h3>
                <p className="text-gray-600">ソフトウェア開発経験</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              1998年からソフトウェア開発に携わり、Web技術の進化と共に成長してきました。
              バックエンドからフロントエンド、インフラまで幅広い技術領域をカバーし、
              特にRuby on Rails、AWS、React/Reduxの組み合わせによる
              モダンなWebアプリケーション開発を得意としています。
            </p>
            <p className="text-gray-700 leading-relaxed">
              現在はフリーランスとして、技術コンサルティングから
              実装まで一貫したサービスを提供しています。
              スケーラブルで保守性の高いシステム設計を心がけ、
              ビジネス価値の最大化を目指しています。
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              主な専門分野
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                Ruby on Rails による高速開発
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                AWS クラウドインフラ設計・構築
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                React/Redux による SPA 開発
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                スケーラブルなアーキテクチャ設計
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                パフォーマンス最適化・コスト削減
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            主な実績
          </motion.h3>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {achievement.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}