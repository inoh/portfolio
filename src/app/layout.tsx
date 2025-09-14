import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://hiroyuki-inoue.dev'),
  title: "井上 裕之 | フリーランス フルスタックエンジニア",
  description: "25年の経験を持つフルスタックエンジニア。Ruby on Rails、AWS、React/Reduxを軸にスケーラブルなWebアプリケーションを開発しています。",
  keywords: ["フリーランス", "フルスタックエンジニア", "Ruby on Rails", "AWS", "React", "Redux", "TypeScript", "井上裕之"],
  authors: [{ name: "井上 裕之" }],
  creator: "井上 裕之",
  publisher: "井上 裕之",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://hiroyuki-inoue.dev",
    siteName: "井上 裕之 | フリーランス フルスタックエンジニア",
    title: "井上 裕之 | フリーランス フルスタックエンジニア",
    description: "25年の経験を持つフルスタックエンジニア。Ruby on Rails、AWS、React/Reduxを軸にスケーラブルなWebアプリケーションを開発しています。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "井上 裕之 | フリーランス フルスタックエンジニア",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "井上 裕之 | フリーランス フルスタックエンジニア",
    description: "25年の経験を持つフルスタックエンジニア。Ruby on Rails、AWS、React/Reduxを軸にスケーラブルなWebアプリケーションを開発しています。",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${notoSansJP.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
