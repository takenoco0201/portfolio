# 焙煎珈琲処 香舎（こうしゃ）— ランディングページ

架空の珈琲専門店「焙煎珈琲処 香舎」のランディングページ。HTML + CSS のみで実装。

## ディレクトリ構成

```
LP/
├── index.html          # TOP
├── about.html          # こだわり
├── menu.html           # メニュー
├── origin.html         # 産地インフォグラフィック
├── css/
│   ├── reset.css       # モダンリセットCSS
│   ├── variables.css   # デザイントークン（CSS変数）
│   ├── common.css      # 共通スタイル・コンポーネント
│   ├── header.css      # 追従ヘッダー
│   └── footer.css      # フッター
├── images/             # 画像格納ディレクトリ
└── README.md
```

## デザイン仕様

### カラーパレット

| 変数名 | 値 | 用途 |
|-------|-----|------|
| `--color-bg` | `#F5F0E8` | 生成り（ページ背景） |
| `--color-text` | `#2B1F1A` | 焙煎色（本文） |
| `--color-accent` | `#6B4423` | 中煎り（アクセント） |
| `--color-sub` | `#7A8471` | オリーブ（サブカラー） |
| `--color-line` | `#D4C9B8` | 罫線 |
| `--color-white` | `#FFFCF7` | オフホワイト |

### フォント（Google Fonts CDN）

| 用途 | ファミリー |
|------|-----------|
| 見出し（明朝） | Shippori Mincho / 游明朝 |
| 本文 | Noto Sans JP |
| 英字 | Cormorant Garamond |

### ブレークポイント

| 名称 | 幅 |
|------|----|
| タブレット | 768px |
| スマートフォン | 480px |

## 開発メモ

- JavaScript は最小限（ヘッダー縮小のスクロール検知のみ）
- モバイルナビはチェックボックスハック（CSS のみ）
- `1rem = 10px` 換算（`html { font-size: 62.5% }`）
- 画像なしで成立するデザイン。`images/` に実画像を追加後、CSSの `background-image` を差し替え
