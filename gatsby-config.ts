import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  // pathPrefix: "/portfolio", // カスタムドメイン使用時は不要
  siteMetadata: {
    title: "Hiroyuki Inoue | ポートフォリオ",
    description: "エージェンティックAI研究者のHiroyuki Inoueです。AIのポテンシャルを最大限に引き出し、人間の創造性を拡張することを目指しています。",
    author: "Hiroyuki Inoue",
    siteUrl: "https://ino-h.net",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-postcss",
  ],
}

export default config