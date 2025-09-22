import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, ExternalLink } from 'lucide-react';

export default function Hero() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/inoh',
      icon: Github,
    },
    {
      name: 'Zenn',
      url: 'https://zenn.dev/ino_h',
      icon: ExternalLink,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* スキップリンク */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50"
      >
        メインコンテンツにスキップ
      </a>
      
      <section 
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-gray-100"
        aria-label="ヒーローセクション"
      >
      <motion.div
        className="container mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          variants={itemVariants} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
            井上 <span className="text-primary-600">裕之</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 font-medium">
            フリーランス フルスタックエンジニア
          </h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed px-4 sm:px-0"
        >
          25年の経験を持つフルスタックエンジニアとして、
          <br className="hidden sm:block" />
          Ruby on Rails、AWS、React/Reduxを軸に
          <br className="hidden sm:block" />
          スケーラブルなWebアプリケーションを設計・開発しています。
        </motion.p>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12 px-4 sm:px-0"
        >
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.name}のプロフィールページを開く（新しいタブで開きます）`}
                className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium min-w-[140px] justify-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-5 h-5 mr-2" />
                {link.name}
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
    </>
  );
}