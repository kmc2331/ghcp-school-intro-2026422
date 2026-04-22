# Requirements - 神山まるごと高専 紹介サイト

## 概要

神山まるごと高専（KAMIYAMA COLLEGE）の魅力を伝える非公式の紹介サイトを GitHub Pages 上に公開する。

> **注意**: 本サイトは学習・デモ目的の非公式紹介ページであり、公式情報は [https://kamiyama.ac.jp/](https://kamiyama.ac.jp/) を参照すること。

## ステークホルダー

- **訪問者**: 中学生・保護者・教育関係者・地域の人。
- **制作者**: GitHub Copilot 学習用のデモ実装。

## 機能要件（EARS 記法）

### コンテンツ

- WHEN ユーザーがサイトにアクセスした時、THE SYSTEM SHALL ヒーローセクションでキャッチコピーとメインビジュアルを表示する。
- WHEN ユーザーがトップページをスクロールした時、THE SYSTEM SHALL 以下のセクションを順に表示する: 学校概要 / カリキュラム / キャンパス / 教員 / 学生生活・寮 / ニュース / アクセス。
- WHEN ユーザーがアクセスセクションを表示した時、THE SYSTEM SHALL Google Maps の埋め込みと公式サイトへのリンクを表示する。
- WHEN ニュース記事が `src/content/news/` に追加された時、THE SYSTEM SHALL 新着順にニュース一覧へ表示する。

### 国際化

- WHEN ユーザーが `/en/` 配下のページにアクセスした時、THE SYSTEM SHALL 英語コンテンツを表示する。
- WHEN ユーザーが言語切替リンクを押下した時、THE SYSTEM SHALL もう一方の言語の同等ページへ遷移する。

### デザイン

- THE SYSTEM SHALL 自然・温かみを感じる配色（緑/木/霧）を基調とする。
- THE SYSTEM SHALL モバイル（375px〜）からデスクトップ（1440px〜）まで崩れず表示する。

### デプロイ

- WHEN `main` ブランチに push された時、THE SYSTEM SHALL GitHub Actions で自動ビルド・GitHub Pages へデプロイする。

## 非機能要件

- パフォーマンス: 初回表示で Lighthouse Performance 90 以上を目標。
- アクセシビリティ: 主要セクションで WAI-ARIA ランドマークを使用、コントラスト比 AA 準拠。
- 保守性: セクションは独立した Astro コンポーネント、コピーは i18n 辞書に集約。

## スコープ外

- お問い合わせフォームのバックエンド送信（外部公式サイトへのリンクで代替）。
- 学生・教員の実在個人情報の掲載（プレースホルダ表示）。
