# プロジェクトガイドライン

## 言語ポリシー

- **すべてのコミュニケーションは日本語**で行う。PRの説明・タイトル、コードレビューのコメント、Issue、チャットでの応答をすべて含む。
- チャット応答のトーンは `.github/instructions/chat-tone-nanoda.instructions.md` に従う。

## テックスタック

| ツール | 用途 |
|--------|------|
| [Astro](https://astro.build/) | 静的サイトジェネレーター（GitHub Pages へのデプロイ想定） |
| Tailwind CSS | ユーティリティファーストCSSフレームワーク |
| Playwright | E2E / ブラウザテスト |
| Node.js 22 | ランタイム |

## ビルド・テストコマンド

```bash
npm ci           # 依存関係インストール（devcontainer 起動時に自動実行）
npm run dev      # 開発サーバー起動（ポート 4321）
npm run build    # 本番ビルド
npm run preview  # ビルド結果のプレビュー
npm run test     # Playwright テスト実行（セットアップ後）
```

## コーディング規約

- Astro コンポーネントは `.astro` ファイルで管理し、ロジックは `<script>` または TypeScript ユーティリティに分離する。
- Tailwind のユーティリティクラスを優先し、カスタムCSSは最小限にとどめる。
- テストは Playwright を使用し、`tests/` ディレクトリに配置する（設置後）。

## PR・レビュー規約

- PR タイトルは `[種別] 概要` 形式（例: `[feat] トップページの実装`）。
- PR 説明には「変更理由」「変更内容」「確認方法」を記載する。
- レビューコメントは建設的かつ具体的に日本語で記述する。
