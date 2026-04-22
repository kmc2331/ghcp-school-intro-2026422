---
name: github-pages-deploy
description: "GitHub Pages への Astro サイトのデプロイを支援するスキル。Use when: GitHub Pages の設定、GitHub Actions ワークフローの作成、Astro の静的サイトを公開、デプロイエラーの解決、astro.config の base/site 設定などを行うとき。"
argument-hint: "デプロイ先のリポジトリ名など（省略可）"
---

# GitHub Pages × Astro デプロイスキル

## このスキルの目的

Astro で作成した静的サイトを GitHub Pages に公開するための手順を案内する。

## 参考ドキュメント

- [GitHub Pages 公式ドキュメント（日本語）](https://docs.github.com/ja/pages)
- [GitHub Pages の概要](https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages)
- [公開ソースの設定](https://docs.github.com/ja/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Astro × GitHub Pages デプロイガイド（日本語）](https://docs.astro.build/ja/guides/deploy/github/)

## 手順

### 1. `astro.config.mjs` の設定

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://<ユーザー名>.github.io',
  base: '/<リポジトリ名>',  // サブパスにデプロイする場合のみ
});
```

- `site`: GitHub Pages の公開 URL（`https://<user>.github.io/<repo>` または カスタムドメイン）
- `base`: リポジトリ名サブパスへのデプロイ時に設定（ルートなら不要）

---

### 2. GitHub Actions ワークフローの作成

`.github/workflows/deploy.yml` を以下の内容で作成する。

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

---

### 3. GitHub リポジトリの設定

1. リポジトリの **Settings → Pages** を開く
2. **Source** を `GitHub Actions` に変更する

---

### 4. デプロイの実行

```bash
git add .
git commit -m "[feat] GitHub Pages デプロイ設定を追加"
git push origin main
```

push 後に Actions タブでビルド状況を確認する。

---

## よくあるエラーと対処

| 症状 | 原因 | 対処 |
|------|------|------|
| ページが 404 | `base` の設定漏れ | `astro.config.mjs` に `base` を追加 |
| CSS/JS が読み込まれない | `site` の URL が違う | `site` を正確な公開 URL に修正 |
| Actions が失敗する | `permissions` 不足 | ワークフローに `pages: write` / `id-token: write` を追加 |
| ブランチが見つからない | `on.push.branches` 設定ミス | デフォルトブランチ名を確認（`main` vs `master`） |

## チェックリスト

- [ ] `astro.config.mjs` の `site` を設定した
- [ ] リポジトリがサブパス公開の場合は `base` も設定した
- [ ] `.github/workflows/deploy.yml` を作成した
- [ ] GitHub Settings → Pages の Source を `GitHub Actions` にした
- [ ] `main` ブランチへの push で Actions が起動することを確認した
