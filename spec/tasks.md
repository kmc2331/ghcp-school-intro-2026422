# Tasks - 神山まるごと高専 紹介サイト

## Phase A: プロジェクト基盤

- [ ] A1. `package.json` / `astro.config.mjs` / `tsconfig.json` / `tailwind` 設定を作成
- [ ] A2. `src/styles/global.css` に Tailwind 取り込み・カスタムトークン定義
- [ ] A3. `BaseLayout.astro` を作成（meta / OGP / フォント / ヘッダ・フッタ）

## Phase B: i18n とコンテンツ

- [ ] B1. `src/i18n/{ja,en,index}.ts` を作成
- [ ] B2. `src/content/config.ts` と日本語ニュース 1 件、英語ニュース 1 件を作成

## Phase C: セクション実装

- [ ] C1. `Header` / `Footer` / `LanguageSwitcher`
- [ ] C2. `Hero`
- [ ] C3. `About`
- [ ] C4. `Curriculum`
- [ ] C5. `Campus`
- [ ] C6. `Faculty`
- [ ] C7. `StudentLife`
- [ ] C8. `News`（Content Collection 連携）
- [ ] C9. `Access`（Google Maps 埋め込み + 公式サイトリンク）

## Phase D: ページ生成

- [ ] D1. `src/pages/index.astro`（ja）
- [ ] D2. `src/pages/en/index.astro`（en）

## Phase E: デプロイ

- [ ] E1. `.github/workflows/deploy.yml` を作成
- [ ] E2. `astro.config.mjs` に `site` / `base` を設定

## Phase F: ドキュメント

- [ ] F1. `README.md` にセットアップ・開発・デプロイ手順を記載

## Future（スコープ外）

- Playwright によるスモークテスト
- お問い合わせフォーム（外部 SaaS との連携）
- ブログ機能の拡充（タグ・著者）
