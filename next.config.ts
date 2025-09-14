import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // パフォーマンス最適化
  compiler: {
    // 本番環境でconsole.logを削除
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // 画像最適化
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // 圧縮とキャッシュ最適化
  compress: true,
  
  // 実験的機能
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // セキュリティヘッダー
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
