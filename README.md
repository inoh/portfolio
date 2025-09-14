# 井上裕之 ポートフォリオサイト

25年の経験を持つフリーランス フルスタックエンジニアのポートフォリオサイトです。

## 🚀 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React
- **デプロイ**: Vercel
- **外部API**: Zenn API (記事取得)

## 📋 機能

- **レスポンシブデザイン**: モバイル、タブレット、デスクトップ対応
- **パフォーマンス最適化**: 動的インポート、画像最適化、コード分割
- **アクセシビリティ**: WCAG準拠、スクリーンリーダー対応
- **SEO最適化**: メタタグ、OGP、構造化データ
- **Zenn記事連携**: 実際のZenn記事を動的取得・表示

## 🏗️ セクション構成

1. **Hero** - 名前、肩書き、ソーシャルリンク
2. **About** - プロフィール、経験年数、主な実績
3. **Skills** - 技術スキル、経験年数、資格情報
4. **Articles** - Zenn記事の動的表示
5. **Footer** - 連絡先、著作権情報

## 🛠️ 開発環境

### 前提条件
- Node.js 18.x以上
- npm, yarn, pnpm, bunのいずれか

### セットアップ

```bash
# リポジトリをクローン
git clone <repository-url>
cd portfolio

# 依存関係をインストール
npm install

# 環境変数を設定
cp .env.example .env.local

# 開発サーバーを起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

### 環境変数

```env
# サイトのベースURL
NEXT_PUBLIC_SITE_URL=https://ino-h.net

# Zennのユーザー名
NEXT_PUBLIC_ZENN_USERNAME=hiroyuki_inoue
```

## 📦 ビルド・デプロイ

### 本番ビルド
```bash
npm run build
npm run start
```

### Vercelへのデプロイ
1. Vercelアカウントでプロジェクトをインポート
2. 環境変数を設定
3. 自動デプロイが実行される

## 🎨 カスタマイズ

### プロフィール情報の更新
- `src/components/sections/` 内の各コンポーネントを編集
- `src/types/index.ts` でデータ型を確認

### スタイルの変更
- `src/app/globals.css` でカラーパレット調整
- Tailwindのカスタムクラスを追加

### Zenn記事の設定
- `src/lib/zenn.ts` でユーザー名を変更
- APIエラー時のフォールバック動作をカスタマイズ

## 🔧 パフォーマンス

- **Lighthouse スコア**: 90以上を目標
- **First Contentful Paint**: 1.0秒未満
- **Largest Contentful Paint**: 2.5秒未満
- **Cumulative Layout Shift**: 0.1未満

## 🎯 アクセシビリティ

- スキップリンク実装
- ARIAラベル適切に設定
- キーボードナビゲーション対応
- 適切なコントラスト比確保

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。
