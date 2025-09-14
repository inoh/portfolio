'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Mail, MapPin } from 'lucide-react';

export default function Footer() {
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">井上 裕之</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              25年の経験を持つフルスタックエンジニア。
              <br />
              Ruby on Rails、AWS、React/Reduxを軸に
              <br />
              スケーラブルなWebアプリケーションを開発。
            </p>
            <div className="flex items-center text-gray-300 mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              <span>日本</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Mail className="w-4 h-4 mr-2" />
              <a 
                href="mailto:syslink.h.inoue@gmail.com" 
                className="hover:text-primary-400 transition-colors"
              >
                syslink.h.inoue@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">スキル</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-primary-400 transition-colors cursor-pointer">
                Ruby on Rails
              </li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">
                AWS (Solutions Architect Pro)
              </li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">
                React / Redux
              </li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">
                TypeScript
              </li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">
                PostgreSQL
              </li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">
                Docker / Kubernetes
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">リンク</h4>
            <div className="space-y-3 mb-6">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-primary-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <IconComponent className="w-5 h-5 mr-3" />
                    {link.name}
                  </motion.a>
                );
              })}
            </div>
            <div className="text-sm text-gray-400">
              <p className="mb-2">お仕事のご依頼・ご相談は</p>
              <p>お気軽にメールでお声がけください</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} 井上 裕之 (Hiroyuki Inoue). All rights reserved.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Built with</span>
              <span className="mx-2 text-primary-400">♥</span>
              <span>using Next.js, TypeScript & Tailwind CSS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}