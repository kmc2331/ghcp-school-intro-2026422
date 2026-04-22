# 神山まるごと高専 紹介ページ（非公式デモ）

> ⚠️ **このサイトは非公式のデモであり、神山まるごと高専の公式サイトではありません。**
> 掲載内容には公開情報を参考にしたプレースホルダ／架空情報が含まれます。

[Astro](https://astro.build/) + Tailwind CSS で構築し、GitHub Actions で GitHub Pages へ自動デプロイします。
公開URL: https://kmc2331.github.io/ghcp-school-intro-2026422/

## 特徴

- 🎨 アースカラー（樹皮 / 苔 / 砂 / 霧 / 石）と有機的な曲線を活かした和洋折衷の落ち着いたUI
- 🌐 日本語 / 英語の i18n 対応（`/` と `/en/`）
- 🏔 SVG で描かれた山並みヒーロー、`IntersectionObserver` ベースの軽量フェードイン
- 🗞 Astro Content Collections によるニュース管理（`src/content/news/*.md`）
- ⚡ 静的書き出し / 画像は遅延読み込み

## ローカル開発

```bash
npm ci
npm run dev      # http://localhost:4321/ghcp-school-intro-2026422/
npm run build    # dist/ を生成
npm run preview  # ビルド結果のプレビュー
```

> Node.js 20 を推奨（`.nvmrc` 参照）。

## ディレクトリ構成

```
src/
  components/
    Header.astro / Footer.astro / LangToggle.astro / SectionDivider.astro
    sections/
      Hero / About / Curriculum / Gallery / Faculty
      Admissions / Access / News / ContactCTA
  content/
    config.ts
    news/*.md
  i18n/
    ja.json / en.json / utils.ts
  layouts/BaseLayout.astro
  pages/
    index.astro       # 日本語トップ
    en/index.astro    # 英語トップ
  styles/global.css
public/
  favicon.svg / robots.txt
.github/workflows/deploy.yml
```

## デプロイ

1. このリポジトリの **Settings → Pages → Build and deployment → Source** を `GitHub Actions` に設定する。
2. `main` ブランチに push すると `.github/workflows/deploy.yml` が走り、ビルド成果物が Pages に公開されます。
3. 手動実行は GitHub の Actions タブから `Deploy to GitHub Pages` → `Run workflow` でも可能です。

## カスタマイズ

- 文言の編集: `src/i18n/ja.json` / `src/i18n/en.json`
- 配色 / フォント: `tailwind.config.mjs` と `src/styles/global.css`
- セクションの差し替え: `src/pages/index.astro` でコンポーネントの並びを編集
- 新しいニュース: `src/content/news/<slug>-(ja|en).md` を追加

## ライセンス

ソースコードは MIT ライセンスとします。掲載画像は Unsplash 等の差し替え可能なプレースホルダです。
神山まるごと高専および同校に関する商標等の権利は各権利者に帰属します。
