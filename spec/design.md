# Design - 神山まるごと高専 紹介サイト

## アーキテクチャ

- **静的サイトジェネレーター**: Astro 5（`output: 'static'`）。
- **スタイリング**: Tailwind CSS v4（`@tailwindcss/vite` プラグイン）。
- **ホスティング**: GitHub Pages（`gh-pages` ではなく Actions の Pages デプロイ）。
- **ベースパス**: リポジトリ名 `ghcp-school-intro-2026422` をサブパス公開（`base: '/ghcp-school-intro-2026422'`）。

## ディレクトリ構成

```text
src/
  components/
    Header.astro
    Footer.astro
    Hero.astro
    About.astro
    Curriculum.astro
    Campus.astro
    Faculty.astro
    StudentLife.astro
    News.astro
    Access.astro
    LanguageSwitcher.astro
  content/
    news/
      2026-04-01-welcome.md
    config.ts
  i18n/
    ja.ts
    en.ts
    index.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro       # 日本語トップ
    en/
      index.astro     # 英語トップ
  styles/
    global.css
public/
  favicon.svg
  og-image.svg
```

## i18n 戦略

- 軽量な辞書ベース。`src/i18n/index.ts` から `useTranslations(lang)` を返す。
- ルートは `/`（ja）と `/en/`（en）の 2 ロケール。
- 言語切替リンクは `LanguageSwitcher` で固定相互リンク。

## デザインシステム

| トークン | 値 | 用途 |
|----------|----|------|
| `forest-50` 〜 `forest-900` | カスタム緑系パレット | 背景・アクセント |
| `mist` | `#f3f6f4` | セクション背景 |
| `bark` | `#3f2d20` | テキスト見出し |
| `accent` | `#f6b042`（柚子色） | CTA |
| Font: Noto Sans JP / Inter | Google Fonts | 本文・英文 |

雰囲気: 「自然・霧がかった山の中」をイメージし、ヒーローには SVG/グラデーションで霧のレイヤーを重ねる。

## ニュース Content Collection

```ts
// src/content/config.ts
const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['ja', 'en']).default('ja'),
    summary: z.string().optional(),
  }),
});
```

`News.astro` で `getCollection('news')` し、対象言語のものを新着 3 件表示。

## デプロイフロー（GitHub Actions）

1. `actions/checkout`
2. `actions/setup-node@v4` (Node 22)
3. `npm ci`
4. `npm run build`
5. `actions/upload-pages-artifact@v3` (`./dist`)
6. `actions/deploy-pages@v4`

## エラー処理

| ケース | 対応 |
|--------|------|
| ニュース記事が 0 件 | 「準備中」メッセージを表示 |
| 言語辞書キー未定義 | `key` 文字列をそのまま返す（フォールバック） |
| 画像読み込み失敗 | `loading="lazy"` + `alt` 必須 |

## テスト戦略

- 本フェーズでは Playwright セットアップのみ準備（テスト実装はスコープ外、tasks に将来用として残す）。
- `npm run build` がエラー無く完了することを最低保証ラインとする。
