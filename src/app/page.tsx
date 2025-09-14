import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';

// 動的インポートで初期読み込み時間を最適化
const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const Skills = dynamic(() => import('@/components/sections/Skills'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const Articles = dynamic(() => import('@/components/sections/Articles'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const Footer = dynamic(() => import('@/components/common/Footer'), {
  loading: () => <div className="h-64 bg-gray-900 animate-pulse" />
});

export default function Home() {
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
}
