'use client';

import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';
import { MainSkill } from '@/types';

export default function Skills() {
  const mainSkills: MainSkill[] = [
    {
      name: 'Ruby on Rails',
      years: 15,
      level: 'Expert' as const,
      description: 'RESTful API設計、バックグラウンドジョブ処理、テスト駆動開発',
      highlights: [
        '大規模ECサイトのバックエンド開発',
        'マイクロサービスアーキテクチャ設計',
        'パフォーマンスチューニング',
      ],
      certifications: ['Ruby Association Certified Ruby Programmer Gold'],
      icon: '💎',
    },
    {
      name: 'AWS',
      years: 12,
      level: 'Expert' as const,
      description: 'インフラ設計、CI/CD構築、コスト最適化、セキュリティ対策',
      highlights: [
        'EC2, RDS, S3, CloudFront等の運用',
        'Auto Scaling設計・構築',
        '月間100万円のコスト削減実績',
      ],
      certifications: ['AWS Solutions Architect Associate'],
      icon: '☁️',
    },
    {
      name: 'React/Redux',
      years: 8,
      level: 'Advanced' as const,
      description: 'SPA開発、状態管理、パフォーマンス最適化、TypeScript活用',
      highlights: [
        '大規模管理画面の設計・開発',
        'リアルタイム機能実装',
        'レスポンシブUI/UX設計',
      ],
      certifications: [],
      icon: '⚛️',
    },
  ];

  const subSkills = [
    'TypeScript', 'JavaScript', 'Node.js', 'PostgreSQL', 'MySQL', 'Redis',
    'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'CircleCI',
    'Nginx', 'ElasticSearch', 'Git', 'Linux', 'HTML5', 'CSS3', 'Sass',
    'Next.js', 'Vue.js', 'GraphQL', 'REST API', 'JSON', 'XML',
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

  const skillLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'text-primary-600';
      case 'Advanced':
        return 'text-blue-600';
      case 'Intermediate':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  const skillLevelStars = (level: string) => {
    const counts = { Expert: 5, Advanced: 4, Intermediate: 3, Beginner: 2 };
    return counts[level as keyof typeof counts] || 1;
  };

  return (
    <section className="py-20 bg-gray-50" aria-labelledby="skills-title">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="skills-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            長年の経験で培った技術スキルと、常に最新技術をキャッチアップする姿勢で
            <br className="hidden md:block" />
            幅広いプロジェクトに対応いたします。
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            メインスキル
          </motion.h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {mainSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {skill.name}
                  </h4>
                  <div className="flex items-center justify-center mb-2">
                    <span className={`text-lg font-semibold ${skillLevelColor(skill.level)} mr-2`}>
                      {skill.level}
                    </span>
                    <div className="flex">
                      {[...Array(skillLevelStars(skill.level))].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600">
                    {skill.years}年の経験
                  </p>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {skill.description}
                </p>

                {skill.certifications && skill.certifications.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <Award className="w-4 h-4 text-primary-600 mr-2" />
                      <span className="text-sm font-semibold text-gray-700">資格</span>
                    </div>
                    {skill.certifications.map((cert, i) => (
                      <span
                        key={i}
                        className="inline-block bg-primary-100 text-primary-800 text-xs px-3 py-1 rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                )}

                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">主な実績</h5>
                  <ul className="space-y-2">
                    {skill.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            サブスキル
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {subSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}