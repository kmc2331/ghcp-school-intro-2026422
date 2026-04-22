# Plan: 神山まるごと高専 紹介ページ (Astro + GitHub Pages)

## TL;DR
神山まるごと高専（徳島県神山町、2023年開校）の**非公式デモ紹介ページ**を、Astro で構築し GitHub Actions 経由で GitHub Pages に自動デプロイする。デザインは「自然・山・アースカラー」を基調とした有機的な曲線・余白を活かした洗練UI。日本語/英語の i18n 対応、レスポンシブ。コンテンツは公式情報を参考にプレースホルダ＋それらしい紹介文を生成。

---

## Phase 1: プロジェクト初期セットアップ
1. Astro プロジェクトを `npm create astro@latest` ベースで初期化（Minimal テンプレ、TypeScript strict）
2. `package.json` の `name` を `kamiyama-kosen-intro` に、`astro.config.mjs` に `site` と `base` を設定（Pages の URL: `https://kmc2331.github.io/ghcp-school-intro-2026422/`）
3. Tailwind CSS 統合（`@astrojs/tailwind`）。カスタムテーマ（アースカラーパレット、和文フォント `Noto Serif JP` + `Noto Sans JP`、欧文 `Cormorant Garamond` か `Fraunces`）
4. `.gitignore` / `.nvmrc`（Node 20）追加
5. `astro-icon` または `lucide-astro` を導入してアイコンを軽量に扱う

## Phase 2: 共通レイアウト・デザインシステム
6. `src/layouts/BaseLayout.astro` を作成（`<head>`, OGP, favicon, lang 切替、フォント preload）
7. `src/components/Header.astro`（透過→スクロールで白背景に変化、言語トグル `JP/EN`）
8. `src/components/Footer.astro`（コピーライト、SNSアイコン、非公式ページ disclaimer）
9. `src/styles/global.css` でデザイントークン定義：
   - カラー: `--color-bark` (#3F2E1E), `--color-moss` (#5C7A4E), `--color-sand` (#E8DFCF), `--color-mist` (#F5F2EB), `--color-stone` (#7A7466)
   - 角丸はやや大きめ（24px〜）、SVG の有機的な波形セパレーターを各セクション境界に配置
   - スクロール連動の fade-in / parallax は軽量に（`IntersectionObserver` + CSS、JS最小限）

## Phase 3: i18n 基盤
10. Astro の組み込み i18n ルーティング（`astro.config.mjs` の `i18n` 設定、`defaultLocale: 'ja'`, `locales: ['ja','en']`）
11. `src/i18n/ja.json` `src/i18n/en.json` に全テキストを集約。`src/i18n/utils.ts` で `t(key, lang)` ヘルパー
12. URL 設計: `/`（ja）と `/en/`。言語トグルは現在のパスを切り替え

## Phase 4: ページセクション実装
各セクションは `src/components/sections/` 配下にコンポーネント化。`src/pages/index.astro` と `src/pages/en/index.astro` で組み立て。

13. **Hero**: フルビューポート、山並みの SVG イラスト or Unsplash プレースホルダ画像、キャッチコピー（例: 「テクノロジー × デザイン × 起業家精神」）、CTA 2つ
14. **About / Mission**: 学校概要（2023年開校、徳島県神山町、5年制、全寮制、学費実質無償化を目指す等の事実ベース要点）
15. **Curriculum / 特色**: 3カラムカード（テクノロジー / デザイン / 起業家精神）、有機曲線の背景
16. **Campus Gallery**: マソンリーまたは横スクロールギャラリー（プレースホルダ画像 6〜8枚）
17. **Faculty / Staff**: 円形写真＋肩書（架空のプレースホルダ4名、disclaimer 明示）
18. **Admissions / 募集要項**: タイムラインUI（出願〜入学）、要点表
19. **Access**: Google Maps 埋め込み（神山町役場周辺）、住所、アクセス手段
20. **News**: 最新3件のカード（プレースホルダ、`src/content/news/*.md` で Content Collection 管理）
21. **Contact CTA**: 大きなボタン群（メール / SNS / フォーム） — リンクは `#` プレースホルダ

## Phase 5: コンテンツ・SEO
22. Content Collections (`src/content/config.ts`) で news を型付け管理
23. `src/pages/sitemap.xml.ts` 自動生成 or `@astrojs/sitemap` 統合
24. OGP 画像生成（`public/og-image.png` 静的、後で差し替え可）
25. `robots.txt` 配置
26. 各ページに `<title>` `<meta description>` を i18n 対応で設定

## Phase 6: GitHub Pages デプロイ
27. `.github/workflows/deploy.yml` を作成：
    - trigger: `push` to `main`, `workflow_dispatch`
    - `actions/checkout` → `actions/setup-node@v4` (node 20) → `npm ci` → `npm run build` → `actions/upload-pages-artifact` → `actions/deploy-pages`
    - permissions: `pages: write`, `id-token: write`
28. リポジトリ設定で Pages の Source を「GitHub Actions」に切り替える手順を README に明記
29. README.md にローカル開発手順、デプロイ手順、ライセンス、**非公式である旨の disclaimer** を記載

---

## Relevant files (新規作成)
- `package.json`, `astro.config.mjs`, `tsconfig.json`, `tailwind.config.mjs`
- `src/layouts/BaseLayout.astro`
- `src/components/{Header,Footer,LangToggle,SectionDivider}.astro`
- `src/components/sections/{Hero,About,Curriculum,Gallery,Faculty,Admissions,Access,News,ContactCTA}.astro`
- `src/pages/index.astro`, `src/pages/en/index.astro`
- `src/content/config.ts`, `src/content/news/*.md`
- `src/i18n/{ja.json,en.json,utils.ts}`
- `src/styles/global.css`
- `public/{favicon.svg,og-image.png,images/*}`
- `.github/workflows/deploy.yml`
- `README.md`（書き換え）

## Verification
1. `npm run dev` でローカル起動し、`/` `/en/` 双方が表示・言語トグルで往復できる
2. `npm run build` がエラーなく完了し、`dist/` が生成される
3. Lighthouse で Performance ≥ 90 / Accessibility ≥ 95 を目標
4. レスポンシブ確認: 375px / 768px / 1280px / 1920px
5. `main` push 後、Actions が成功し Pages の URL で公開される
6. リンク切れチェック（`npx linkinator dist`）
7. 各セクションのテキストが ja/en で正しく出し分けられている

## Decisions
- リポジトリは公開デモのため、トップとフッターに「**本サイトは非公式のデモであり、神山まるごと高専の公式サイトではありません**」を明記
- 公式の正確な数値（教員数・カリキュラム詳細など）は避け、公開情報レベルに留める or 「※プレースホルダ」と注記
- 写真は Unsplash 等のフリー素材プレースホルダを使用（差し替え前提）
- お問い合わせフォームは作らず、CTA ボタンのみ（`href="#"` プレースホルダ）
- アニメーションは軽量（CSS + IntersectionObserver のみ、追加 JS ライブラリ無し）

## Further Considerations
1. **ドメイン**: `kmc2331.github.io/ghcp-school-intro-2026422/` で良いか、カスタムドメインを使うか？（推奨: 当面はリポジトリ Pages のサブパス）
2. **画像素材の権利**: Unsplash プレースホルダで進めるか、後で差し替え予定の旨だけ明記して空ボックスで進めるか？（推奨: Unsplash）
3. **アナリティクス**: GA4 などを後で入れる想定で `<slot>` 用意するか不要か？（推奨: 当面不要）
