# 神山まるごと高専 紹介サイト（非公式）

GitHub Copilot を使った学習プロジェクトとして、徳島県神山町にある「神山まるごと高専」を紹介する非公式の Astro サイトです。

> ⚠️ 本サイトはデモ目的の非公式紹介ページです。最新の正確な情報は[公式サイト](https://kamiyama.ac.jp/)をご確認ください。

## 技術スタック

- [Astro 5](https://astro.build/) — 静的サイトジェネレーター
- [Tailwind CSS v4](https://tailwindcss.com/) — ユーティリティ CSS（`@tailwindcss/vite`）
- Node.js 22 — ランタイム
- GitHub Actions — GitHub Pages へ自動デプロイ

## ディレクトリ構成

```text
spec/                  # 仕様書（要件・設計・タスク）
src/
  components/          # セクションごとの Astro コンポーネント
  content/news/        # ニュース Content Collection (Markdown)
  i18n/                # 多言語辞書（ja / en）
  layouts/             # 共通レイアウト
  pages/               # ルーティング (`/` ja, `/en/` en)
  styles/global.css    # Tailwind + デザイントークン
public/                # favicon 等の静的ファイル
.github/workflows/     # GitHub Pages デプロイ
```

## 開発

```bash
npm ci          # 依存関係インストール
npm run dev     # 開発サーバー (http://localhost:4321/ghcp-school-intro-2026422/)
npm run build   # 本番ビルド
npm run preview # ビルド結果のプレビュー
```

開発サーバー起動後は、Codespaces / dev container ではポート 4321 が自動転送されます。

## デプロイ

`main` ブランチへ push すると、`.github/workflows/deploy.yml` が自動でビルドして GitHub Pages にデプロイします。事前に **Settings → Pages → Build and deployment → Source** を **GitHub Actions** に変更してください。

公開 URL は次の形式になります（`base` を `/ghcp-school-intro-2026422` で固定）。

```text
https://<owner>.github.io/ghcp-school-intro-2026422/
https://<owner>.github.io/ghcp-school-intro-2026422/en/
```

`astro.config.mjs` の `SITE_URL` を実際の GitHub Pages の URL に書き換えてください（OGP / sitemap 用）。

## 多言語

- `/`  → 日本語（既定ロケール）
- `/en/` → 英語

文言は `src/i18n/ja.ts` と `src/i18n/en.ts` を編集してください。両ファイルは同じ型 (`Dict`) を共有するため、キー漏れがあるとビルド時に型エラーになります。

## ニュース追加

`src/content/news/` に Markdown を追加するだけで、トップページの「ニュース」に新着順で 3 件まで表示されます。

```markdown
---
title: "タイトル"
date: 2026-05-01
lang: ja        # ja | en
summary: "概要（任意）"
---

本文を Markdown で書きます。
```

## ライセンス・お断り

- 本リポジトリは学習用デモです。
- 神山まるごと高専および関連する商標は各権利者に帰属します。