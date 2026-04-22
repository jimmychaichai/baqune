# BAR ズキュン

新宿御苑近くの隠れ家バー「BAR ズキュン」の 1 カラム LP。
Next.js (App Router) + Tailwind CSS + Framer Motion + Lucide React。
Cloudflare Pages での静的配信を想定した構成。

## セットアップ

```bash
npm install
npm run dev
```

`http://localhost:3000` で開発サーバが起動します。

## ビルド（静的エクスポート）

`next.config.js` で `output: 'export'` を有効化しています。

```bash
npm run build
```

ビルド成果物は `out/` に出力されます。

## Cloudflare Pages へのデプロイ

### ダッシュボードから

1. リポジトリを Cloudflare Pages に連携
2. Build command: `npm run build`
3. Build output directory: `out`
4. Framework preset: `Next.js (Static HTML Export)` または None

### Wrangler CLI から

```bash
npx wrangler pages deploy out --project-name bar-zukyun
```

## 構成

```
app/
  layout.tsx       Noto Sans JP・グローバルメタ
  page.tsx         セクションの組み立て
  globals.css      Tailwind + ネオン系ユーティリティ
components/
  Header.tsx       スクロールでブラーする固定ヘッダ
  Hero.tsx         ロゴ（プレースホルダ）+ キャッチ + ふわっと浮く演出
  Cast.tsx         アーチ型の写真枠でキャスト紹介
  News.tsx         最新イベント / お知らせ
  SystemAccess.tsx 料金体系・営業時間・地図プレースホルダ
  SNSLinks.tsx     X / Instagram リンク
  Footer.tsx
```

## カスタマイズ

- **店舗情報** — `components/SystemAccess.tsx` の `HOURS` / `PRICES` と住所、`Footer.tsx`、`app/layout.tsx` の metadata を更新。
- **キャスト** — `components/Cast.tsx` の `CAST` 配列を編集。画像は `public/` に配置し、`<img>` / `next/image` に置き換え。
- **Google Map** — `components/SystemAccess.tsx` のプレースホルダを実際の iframe に置き換え。
- **ロゴ** — `components/Hero.tsx` の丸バッジを SVG / 画像へ差し替え。
- **SNS リンク** — `components/SNSLinks.tsx` の `href` を実 URL に変更。
- **ネオンカラー** — `tailwind.config.ts` の `colors.neon` を調整。
