# 井上裕之 ポートフォリオサイト制作指示書

## 1. プロジェクト概要

### 1.1 基本情報
- **クライアント名**: 井上 裕之
- **サイトの目的**: 個人ブランディング・情報発信の拠点として、25年のエンジニア経験と技術力を効果的に伝える
- **ターゲットユーザー**: 
  - 技術コミュニティのメンバー
  - 潜在的なビジネスパートナー
  - 技術に興味がある企業の採用担当者
  - エンジニアを探している企業

### 1.2 必須要件
- レスポンシブデザイン（モバイルファースト）
- 高速なページロード（Lighthouse スコア 90以上）
- モダンブラウザ対応（Chrome, Firefox, Safari, Edge の最新2バージョン）
- SEO最適化
- アクセシビリティ対応（WCAG 2.1 AA準拠）

## 2. デザイン仕様

### 2.1 デザインコンセプト
**「モダン＆ミニマル」** - シンプルで洗練された、無駄のないデザイン

### 2.2 カラーパレット

```css
/* Primary Colors */
--color-background: #FFFFFF;
--color-text-primary: #111827;
--color-text-secondary: #6B7280;
--color-text-tertiary: #9CA3AF;

/* Accent Colors */
--color-accent-primary: #F97316;
--color-accent-hover: #EA580C;
--color-accent-light: #FED7AA;

/* Neutral Colors */
--color-gray-50: #F9FAFB;
--color-gray-100: #F3F4F6;
--color-gray-200: #E5E7EB;
--color-gray-900: #111827;
```

### 2.3 タイポグラフィ

```css
/* Font Family */
--font-sans: 'Inter', 'Noto Sans JP', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

### 2.4 スペーシング

```css
/* Spacing Scale */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### 2.5 レイアウト
- **最大幅**: 1200px（デスクトップ）
- **グリッドシステム**: 12カラムグリッド
- **ブレークポイント**:
  - Mobile: 0 - 639px
  - Tablet: 640px - 1023px
  - Desktop: 1024px以上

## 3. サイト構造

### 3.1 ページ構成
単一ページアプリケーション（SPA）として実装

### 3.2 セクション詳細

#### 3.2.1 ヒーローセクション

**要素**:
- 背景: 白ベースに微細なグラデーションまたはパターン
- 名前: 「井上 裕之」（大きく表示）
- 肩書き: 「フルスタックエンジニア」
- キャッチコピー: 「25年の経験を持つフルスタックエンジニア」
- サブテキスト: 「Ruby on Rails、AWS、Reactを中心に、ビジネス価値を生む技術選定と実装を行っています」
- ソーシャルリンク: GitHub、Zenn のアイコン
- スクロールインジケーター: 下向き矢印のアニメーション

**デザイン指示**:
- 高さ: 100vh
- テキストは左寄せまたは中央配置
- アニメーション: ページロード時にフェードイン
- フォントサイズ:
  - 名前: 48px (Desktop) / 36px (Mobile)
  - キャッチコピー: 24px (Desktop) / 20px (Mobile)
  - サブテキスト: 18px (Desktop) / 16px (Mobile)

#### 3.2.2 About セクション

**要素**:
- セクションタイトル: 「About」
- プロフィール概要（3-4段落）
- 経験年数の視覚化
- 主な実績ハイライト（3-4項目）

**コンテンツ例**:
```
2000年より25年以上にわたり、エンジニアとして幅広い分野で活動してきました。
金融系パッケージ開発から始まり、現在はWebアプリケーション開発を中心に、
フロントエンドからバックエンド、インフラまで一貫した開発を行っています。

特にRuby on Railsでの開発は10年以上の経験があり、
AWSを活用したサーバーレスアーキテクチャの設計・構築を得意としています。

現在は株式会社Brushupで開発リーダーとして、
10万アカウント規模のサービスのインフラ改善とプロダクト開発を担当しています。
```

**実績ハイライト**:
- ✅ AWS月間コスト100万円削減を実現
- ✅ 10万アカウント規模のサービス運用
- ✅ 500-2000rpsの高負荷処理システム構築
- ✅ IPO準備に向けたセキュリティ対策実施

**デザイン指示**:
- 最大幅: 800px
- パディング: 80px 0 (Desktop) / 60px 0 (Mobile)
- 実績は左にアイコン、右にテキストのリスト形式

#### 3.2.3 Skills セクション

**メインスキル（カード形式で表示）**:

1. **Ruby on Rails**
   - 経験年数: 10年以上
   - レベル: Expert
   - 詳細: 大規模サービスからスタートアップまで幅広い開発経験

2. **AWS**
   - 経験年数: 5年以上
   - レベル: Advanced
   - 詳細: サーバーレス、CDK、インフラ構築、コスト最適化
   - 資格: AWS認定ソリューションアーキテクト - アソシエイト

3. **React / Redux**
   - 経験年数: 4年以上
   - レベル: Advanced
   - 詳細: SPA開発、Next.js、モダンフロントエンド

**サブスキル（タグ形式で表示）**:
- Python
- FastAPI
- Docker
- TypeScript
- Vue.js
- Java
- マイクロサービス
- DDD
- 生成AI (LangChain)
- Git
- Linux

**デザイン指示**:
- カードは横並び（デスクトップ）、縦並び（モバイル）
- カードサイズ: 350px × 200px
- ホバー時: transform: translateY(-4px)、box-shadow追加
- スキルレベルは5段階の星またはプログレスバーで表示
- タグはオレンジ色の枠線、背景は白

#### 3.2.4 Articles セクション

**要素**:
- セクションタイトル: 「Technical Articles」
- Zenn記事の自動取得・表示（最新6記事）
- 記事カード内容:
  - タイトル
  - 公開日
  - いいね数
  - 記事の冒頭テキスト（100文字程度）
  - タグ
- 「View all articles on Zenn →」リンク

**デザイン指示**:
- 3カラムグリッド（デスクトップ）、1カラム（モバイル）
- カードデザインでホバー時にシャドウ
- いいね数はオレンジ色のハートアイコンで表示
- 日付はグレーテキスト
- タイトルは2行で省略

### 3.3 フッター

**要素**:
- コピーライト: © 2025 Hiroyuki Inoue. All rights reserved.
- ソーシャルリンク（GitHub、Zenn）
- 「Built with Next.js & Tailwind CSS」表記

## 4. 技術仕様

### 4.1 技術スタック

- **フレームワーク**: Next.js 14以上
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **アイコン**: Heroicons または Lucide React
- **フォント**: Google Fonts (Inter, Noto Sans JP)
- **API連携**: Zenn API (RSS or スクレイピング)
- **ホスティング**: Vercel
- **バージョン管理**: Git/GitHub

### 4.2 パフォーマンス要件

- First Contentful Paint (FCP): < 1.0秒
- Largest Contentful Paint (LCP): < 2.5秒
- First Input Delay (FID): < 100ミリ秒
- Cumulative Layout Shift (CLS): < 0.1
- 画像フォーマット: WebP、AVIF対応
- 画像の遅延読み込み実装

### 4.3 SEO要件

- メタタグ設定
  - title: 井上裕之 - フリーランス フルスタックエンジニア
  - description: 25年の経験を持つフリーランスエンジニア。Ruby on Rails、AWS、Reactを中心に技術課題の解決をサポートします。
- OGP設定
- 構造化データ (JSON-LD)
- sitemap.xml生成
- robots.txt設定

## 5. アニメーション仕様

### 5.1 全体的な方針
- 控えめで洗練されたアニメーション
- ユーザーの操作を妨げない
- パフォーマンスに配慮

### 5.2 具体的なアニメーション

**スクロールアニメーション**:
- 各セクションはスクロール時にフェードイン
- duration: 0.6秒
- easing: ease-out

**ホバーアニメーション**:
- ボタン: scale(1.05)
- カード: translateY(-4px) + shadow
- リンク: オレンジ色に変化
- duration: 0.2秒

**ローディングアニメーション**:
- 初回読み込み時のプログレスバー
- 記事取得時のスケルトンスクリーン

## 6. レスポンシブ対応

### 6.1 ブレークポイント別の対応

**Mobile (0-639px)**:
- 1カラムレイアウト
- タッチターゲット: 最小44px × 44px
- フォントサイズを調整
- 横スクロールは発生させない

**Tablet (640px-1023px)**:
- 2カラムレイアウト（Skills、Articles）
- パディングを調整

**Desktop (1024px以上)**:
- 最大幅1200pxで中央配置
- 3カラムレイアウト（Skills、Articles）
- ホバーエフェクト有効

## 7. アクセシビリティ

- キーボードナビゲーション対応
- スクリーンリーダー対応
- 適切なARIAラベル
- フォーカス表示の実装
- カラーコントラスト比: AA基準以上

## 8. ブラウザ対応

- Chrome 100以上
- Firefox 100以上
- Safari 15以上
- Edge 100以上
- モバイルブラウザ: iOS Safari、Chrome (Android)

## 9. 納品物

### 9.1 ソースコード
- GitHubリポジトリ
- README.md（セットアップ手順記載）
- 環境変数サンプル（.env.example）

### 9.2 デプロイ
- Vercelへのデプロイ設定
- カスタムドメイン設定（必要に応じて）

### 9.3 ドキュメント
- 技術仕様書
- コンポーネント一覧
- 更新手順書

## 10. スケジュール

### Phase 1: デザイン・設計（1週間）
- ワイヤーフレーム作成
- デザインカンプ作成
- 技術選定・環境構築

### Phase 2: 実装（2週間）
- ヒーローセクション
- Aboutセクション
- Skillsセクション
- Articlesセクション（API連携）

### Phase 3: 調整・最適化（1週間）
- レスポンシブ対応
- パフォーマンス最適化
- SEO対策
- アクセシビリティ対応

### Phase 4: テスト・公開（3日）
- ブラウザテスト
- パフォーマンステスト
- 最終調整
- 本番デプロイ

## 11. 連絡事項

- Zenn APIの利用制限を確認
- GitHub、Zennへのリンクアイコンの表示確認
- 追加したいセクションがあれば検討可能
- アナリティクス設定の要否を確認

---

## 12. 実装完了記録

### 12.1 実装完了項目（2025年1月）
- ✅ Next.js 15プロジェクトセットアップ完了
- ✅ TypeScript設定完了
- ✅ Tailwind CSS設定完了（カスタムカラーパレット含む）
- ✅ Framer Motion アニメーション実装完了
- ✅ レスポンシブデザイン実装完了
- ✅ アクセシビリティ対応実装完了（ARIA labels, skip links等）
- ✅ SEO最適化実装完了（メタデータ、OGP設定）

### 12.2 セクション実装状況
- ✅ **ヒーローセクション**: 完全実装（アニメーション、ソーシャルリンク含む）
- ✅ **Aboutセクション**: 完全実装（実績ハイライト、プロフィール概要含む）
- ✅ **Skillsセクション**: 完全実装（メインスキルカード、サブスキルタグ含む）
- ✅ **Articlesセクション**: 完全実装（Zenn API連携、フォールバック機能含む）
- ✅ **フッター**: 完全実装（ソーシャルリンク、コピーライト含む）

### 12.3 技術実装詳細
- **API連携**: Zenn API + RSS フォールバック + モックデータの3層構成
- **エラーハンドリング**: Error Boundary + Suspense実装
- **パフォーマンス**: Dynamic imports、コード分割実装
- **フォントシステム**: Next.js Font最適化実装
- **アニメーション**: スクロール連動、ホバー効果実装

### 12.4 修正対応履歴
- 2025年1月: CSS @import エラー修正（Next.js Font system移行）
- 2025年1月: GitHub/Zenn URL修正（inoh, ino_h）
- 2025年1月: ビルドエラー修正（Regex互換性対応）

### 12.5 最終確認事項
- ✅ GitHub URL: https://github.com/inoh
- ✅ Zenn URL: https://zenn.dev/ino_h  
- ✅ Zenn API username: ino_h
- ✅ 開発サーバー起動確認済み
- ✅ 全コンポーネント動作確認済み

---

**作成日**: 2025年1月
**実装完了日**: 2025年1月  
**バージョン**: 1.1