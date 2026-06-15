# デプロイ & フォーム設定手順

## 構成

```
訪問者
  → GitHub Pages（静的ホスティング）
  → contact.html のフォーム送信
  → Formspree（フォーム処理サービス）
  → Gmail に通知メール
```

---

## STEP 1 — Formspree の設定（Gmail 連携）

### 1-1. アカウント作成
1. [https://formspree.io](https://formspree.io) にアクセス
2. 「Get Started」→ Gmail アドレスでサインアップ

### 1-2. フォーム作成
1. ダッシュボードで **「+ New Form」** をクリック
2. フォーム名を入力（例：`TechBridge カジュアル面談`）
3. 作成すると **エンドポイントURL** が発行される
   ```
   例: https://formspree.io/f/xpzgkqrb
   ```

### 1-3. contact.html にエンドポイントを設定
`src/contact.html` の以下の行を編集する：

```html
<!-- 変更前 -->
<form action="https://formspree.io/f/XXXXXXXX" method="POST">

<!-- 変更後（自分のエンドポイントに置き換え）-->
<form action="https://formspree.io/f/xpzgkqrb" method="POST">
```

### 1-4. 通知先メールの確認
- Formspree ダッシュボード → フォーム設定 → **Notifications**
- 通知先に Gmail アドレスが設定されているか確認
- 確認メールが届いたら承認する

### 1-5. 動作確認
- ローカルで `contact.html` を開いてフォームを送信
- Formspree ダッシュボードの **Submissions** タブに届いているか確認
- Gmail に通知メールが届いているか確認

---

## STEP 2 — GitHub Pages でのホスティング

### 2-1. GitHub リポジトリを作成
1. [https://github.com](https://github.com) でログイン
2. 右上の **「+」→「New repository」**
3. リポジトリ名を入力（例：`techbridge-recruit`）
4. **Public** を選択（GitHub Pages 無料枠）
5. **「Create repository」** をクリック

### 2-2. ファイルをアップロード
**方法A: GitHub のブラウザUI（簡単）**
1. リポジトリページで **「Add file」→「Upload files」**
2. `src/` フォルダの中身を全て選択してドラッグ＆ドロップ
   ```
   index.html
   contact.html
   style.css
   images/ （フォルダごと）
   ```
3. **「Commit changes」** をクリック

**方法B: Git コマンド**
```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/ユーザー名/techbridge-recruit.git
git push -u origin main
```

### 2-3. GitHub Pages を有効化
1. リポジトリの **「Settings」** タブを開く
2. 左メニュー **「Pages」** をクリック
3. **Source** で `Deploy from a branch` を選択
4. Branch: **`main`** / Folder: **`/ (root)`** を選択
5. **「Save」** をクリック

### 2-4. 公開 URL の確認
数分後、以下の URL でアクセスできる：
```
https://ユーザー名.github.io/techbridge-recruit/
```

---

## STEP 3 — 動作確認チェックリスト

- [ ] `https://ユーザー名.github.io/techbridge-recruit/` が開く
- [ ] `index.html` の CTAボタンをクリックすると `contact.html` に遷移する
- [ ] フォームを送信すると「申し込みを受け付けました」画面が表示される
- [ ] Gmail に通知メールが届く
- [ ] Formspree ダッシュボードに送信データが記録される

---

## STEP 4 — WordPress への移行（将来）

WordPress 移行時のフォーム対応方法：

| 方法 | 概要 | 難易度 |
|---|---|---|
| Contact Form 7 | 定番プラグイン。Gmail 送信は SMTP 設定が必要 | ★☆☆ |
| WPForms | ドラッグ＆ドロップで作成。Gmail 連携が簡単 | ★☆☆ |
| Formspree そのまま維持 | WordPress のページに `<form>` タグを埋め込む | ★★☆ |

**推奨:** WordPress に移行後も Formspree のエンドポイントをそのまま使い続けることができる。`contact.html` の `<form>` タグをそのまま WordPress のカスタム HTML ブロックに貼り付けるだけで動作する。

---

## Formspree 無料プランの制限

| 項目 | 無料 | 有料（$10/月〜） |
|---|---|---|
| 月間送信数 | 50件 | 1,000件〜 |
| スパムフィルター | ◯ | ◯ |
| ファイル添付 | ✕ | ◯ |
| カスタムメール | ✕ | ◯ |

採用応募が月50件を超える場合は有料プランへのアップグレードを検討。
