import React, { Suspense, lazy } from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Hero from '../components/sections/Hero';
import { ErrorBoundary } from '../components/common/ErrorBoundary';

const About = lazy(() => import('../components/sections/About'));
const Skills = lazy(() => import('../components/sections/Skills'));
const Articles = lazy(() => import('../components/sections/Articles'));
const Footer = lazy(() => import('../components/common/Footer'));

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Hero />
      
      <main id="main-content" className="min-h-screen" role="main">
        <ErrorBoundary>
          <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
            <About />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
            <Skills />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
            <Articles />
          </Suspense>
        </ErrorBoundary>
      </main>
      
      <ErrorBoundary>
        <Suspense fallback={<div className="h-64 bg-gray-900 animate-pulse" />}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <html lang="ja" />
      <title>井上 裕之 | フリーランス フルスタックエンジニア</title>
      <meta name="description" content="25年の経験を持つフルスタックエンジニア。Ruby on Rails、AWS、React/Reduxを軸にスケーラブルなWebアプリケーションを開発しています。" />
      <meta name="keywords" content="フリーランス, フルスタックエンジニア, Ruby on Rails, AWS, React, Redux, TypeScript, 井上裕之" />
      <meta name="author" content="井上 裕之" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:url" content="https://inoh.github.io/portfolio" />
      <meta property="og:site_name" content="井上 裕之 | フリーランス フルスタックエンジニア" />
      <meta property="og:title" content="井上 裕之 | フリーランス フルスタックエンジニア" />
      <meta property="og:description" content="25年の経験を持つフルスタックエンジニア。Ruby on Rails、AWS、React/Reduxを軸にスケーラブルなWebアプリケーションを開発しています。" />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="井上 裕之 | フリーランス フルスタックエンジニア" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="井上 裕之 | フリーランス フルスタックエンジニア" />
      <meta name="twitter:description" content="25年の経験を持つフルスタックエンジニア。Ruby on Rails、AWS、React/Reduxを軸にスケーラブルなWebアプリケーションを開発しています。" />
      <meta name="twitter:image" content="/og-image.png" />
      
      {/* Robots */}
      <meta name="robots" content="index, follow" />
      
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </>
  );
};