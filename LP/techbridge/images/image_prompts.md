# 画像生成プロンプト一覧
**プロジェクト:** 株式会社テックブリッジ 採用LP  
**生成ツール:** GPT Image 2  
**ファイル形式:** PNG  
**画像数:** 13枚

---

## GPT Image 2 サイズ指定

| 指定値 | 比率 | 対象画像 |
|---|---|---|
| `1792x1024` | 16:9 横長 | hero-bg / office / numbers-bg / voices-ambient / cta-bg |
| `1024x1024` | 1:1 正方形 | gallery-1〜4 / member-1〜3 |
| `1024x1792` | 9:16 縦長 | ceo-portrait |

---

## 共通品質指定（全プロンプトに付加）

```
Photorealistic photography style. No illustration, no 3D render, no painting.
People: East Asian / Japanese appearance, natural expressions, no forced smiles.
No text, no watermarks, no logos, no pink or fluorescent colors.
```

---

## 画像一覧

| # | ファイル名 | 配置セクション | サイズ指定 | 主な被写体 |
|---|---|---|---|---|
| 1 | `hero-bg.png` | Hero — 全画面背景 | `1792x1024` | エンジニア2名・コード画面・ネイビーオフィス |
| 2 | `office.png` | Solution — 左パネル | `1792x1024` | オープンフロアオフィス・複数エンジニア |
| 3 | `numbers-bg.png` | Numbers — 全画面背景 | `1792x1024` | チーム会議・ダークトーン |
| 4 | `voices-ambient.png` | Voices — パノラマヘッダー | `1792x1024` | オフィス全景・複数エンジニア |
| 5 | `cta-bg.png` | 最終CTA — 全画面背景 | `1792x1024` | 夜のコード画面・人物なし |
| 6 | `gallery-1.png` | Culture ギャラリー① | `1024x1024` | 空のミニマルワークスペース |
| 7 | `gallery-2.png` | Culture ギャラリー② | `1024x1024` | ビデオ会議中のエンジニア |
| 8 | `gallery-3.png` | Culture ギャラリー③ | `1024x1024` | ペアプログラミング・コードレビュー |
| 9 | `gallery-4.png` | Culture ギャラリー④ | `1024x1024` | 社内技術勉強会・プレゼン |
| 10 | `member-1.png` | Voices アバター① | `1024x1024` | 男性エンジニア 28〜32歳 |
| 11 | `member-2.png` | Voices アバター② | `1024x1024` | エンジニア 25〜30歳（性別不問） |
| 12 | `member-3.png` | Voices アバター③ | `1024x1024` | 男性エンジニア 30〜35歳 |
| 13 | `ceo-portrait.png` | CEO — 左パネル全高 | `1024x1792` | 代表 男性 40代前半 |

---

## 生成プロンプト

---

### 01 `hero-bg.png`
> **サイズ:** `1792x1024` ／ **セクション:** Hero 全画面背景

```
Photorealistic photography. Cinematic wide-angle interior shot of a modern 
software engineering office at dusk. CENTER and RIGHT of frame: two East Asian 
engineers, ages 28–35, working intently at large monitors showing syntax-highlighted 
code. Warm desk lamp and monitor glow illuminate their faces naturally. 
LEFT side intentionally open — dark navy accent wall, minimal decor, 
standing desks visible in soft focus (left area is reserved for text overlay).
Mood: focused, calm, authentic. No eye contact with camera.
Color palette: deep navy, warm amber from monitor glow, subtle teal highlights.
Shallow depth of field. No text, no watermarks. 16:9 landscape.
```

---

### 02 `office.png`
> **サイズ:** `1792x1024` ／ **セクション:** Solution セクション左パネル（縦長トリミングあり）

```
Photorealistic photography. Wide interior photo of a modern open-plan 
software company office in Tokyo. Foreground: clean standing desks, large dual 
monitors, well-managed cables, minimal personal items. Background: 4–5 East Asian 
engineers working quietly — candid, not posed. Deep navy blue accent wall on the 
left. Warm diffused overhead lighting. Potted plants, small whiteboard with diagrams. 
Scandinavian-meets-Japanese minimalist aesthetic. Natural window light from the right 
creating gentle shadows. No logos, no visible text on screens. 16:9 landscape.
```

---

### 03 `numbers-bg.png`
> **サイズ:** `1792x1024` ／ **セクション:** 実績・数字セクション背景（暗いオーバーレイあり）

```
Photorealistic photography. Overhead wide-angle view of 5–6 East Asian software 
engineers gathered around a large dark conference table. Laptops open, reviewing 
an architecture diagram on a shared screen at the end of the table. 
Moody dramatic overhead lighting — deep shadows, dark navy walls and furniture. 
The image must read clearly through a 75% dark navy overlay on top. 
No text visible on screens. Cinematic and atmospheric tone. 16:9 landscape.
```

---

### 04 `voices-ambient.png`
> **サイズ:** `1792x1024` ／ **セクション:** 社員の声 全幅パノラマヘッダー（上部のみ使用）

```
Photorealistic photography. Wide panoramic interior shot of a lively modern 
tech office. 6–8 East Asian engineers distributed throughout the open space — 
some at standing desks on video calls, some typing, two in quiet discussion. 
Large windows with soft natural daylight filling the space. Indoor plants, 
white walls with deep navy accent panels, warm wood desk surfaces. 
Energetic yet calm atmosphere — everyone absorbed in work, candid and authentic. 
Color tones: warm white, natural wood, navy blue accents. 16:9 ultra-wide landscape.
```

---

### 05 `cta-bg.png`
> **サイズ:** `1792x1024` ／ **セクション:** 最終CTA 全画面背景（濃いオーバーレイあり）

```
Photorealistic photography. Atmospheric close-up of a software developer's 
dual-monitor workstation at night. LEFT monitor shows Go or TypeScript code with 
colorful syntax highlighting — teal, blue, and white text on a dark background. 
RIGHT monitor shows terminal output. Mechanical keyboard in foreground. 
Coffee mug and a small notebook partially visible at the edge. 
Bokeh warm lights in the background suggesting a home office environment. 
No visible human faces. Deep navy and teal-cyan color palette, 
amber highlights from screen glow. Moody and aspirational. 16:9 landscape.
```

---

### 06 `gallery-1.png`
> **サイズ:** `1024x1024` ／ **セクション:** Culture ギャラリー①（空間）

```
Photorealistic photography. Square interior photo of a clean, minimal 
software developer's workspace. Single standing desk with a large ultra-wide 
monitor, small succulent plant in a white pot, mechanical keyboard, neat USB-C 
cable management. Deep navy accent wall visible in background. 
Warm natural daylight from a window off-frame. No people — empty but 
clearly lived-in, a few personal items (sticker on laptop lid, notebook) 
suggest a real person works here. Warm yet professional aesthetic. 1:1 square.
```

---

### 07 `gallery-2.png`
> **サイズ:** `1024x1024` ／ **セクション:** Culture ギャラリー②（チームMTG）

```
Photorealistic photography. Square portrait of an East Asian software engineer, 
age 28–33, engaged in a video call. Looking at a large monitor showing 6 faces 
in a video conference grid layout. Taking handwritten notes in a notebook. 
Home office or modern co-working space background, softly blurred. 
Relaxed, engaged expression — listening attentively. Warm side lighting. 
Authentic and candid, not posed for camera. 1:1 square crop.
```

---

### 08 `gallery-3.png`
> **サイズ:** `1024x1024` ／ **セクション:** Culture ギャラリー③（コードレビュー）

```
Photorealistic photography. Square photo of two East Asian engineers — 
one male, one female, ages 26–32 — side by side, leaning slightly toward 
a large monitor showing a GitHub pull request with green/red diff lines. 
The male engineer points at a specific line of code; the female engineer nods 
thoughtfully. Two mechanical keyboards on the desk, coffee cups, warm indoor 
lighting. Focused and collaborative mood. 1:1 square crop.
```

---

### 09 `gallery-4.png`
> **サイズ:** `1024x1024` ／ **セクション:** Culture ギャラリー④（勉強会）

```
Photorealistic photography. Square photo of an East Asian engineer, age 27–33, 
presenting at a small internal tech talk. Standing confidently in front of a large 
display showing a system architecture diagram with boxes and arrows. 
3–4 colleagues seated in front, laptops open, taking notes. 
Modern casual meeting room, soft warm lighting, relaxed but engaged atmosphere. 
Presenter wears a plain hoodie or t-shirt — not formal. 1:1 square crop.
```

---

### 10 `member-1.png`
> **サイズ:** `1024x1024` ／ **セクション:** 社員の声①アバター（男性・BE・28〜32歳）

```
Photorealistic photography. Close-up portrait of a Japanese male software engineer, 
age 28–32. Expression: calm and quietly confident, a small natural smile — 
not forced. Wearing a plain dark navy or charcoal crew-neck sweatshirt. 
Background: modern tech office softly blurred (bokeh), warm ambient glow. 
Natural side window light. Direct but relaxed eye contact with camera. 
Authentic feel — candid moment, not a studio headshot. 1:1 square, centered composition.
```

---

### 11 `member-2.png`
> **サイズ:** `1024x1024` ／ **セクション:** 社員の声②アバター（性別不問・25〜30歳）

```
Photorealistic photography. Close-up portrait of a young East Asian software engineer, 
age 25–30. Gender-neutral styling — light gray or off-white minimal hoodie. 
Expression: warm and approachable, genuine relaxed smile. 
Background: blurred warm-lit desk or bookshelf environment. 
Natural window light from the side. Authentic and candid — not a stock photo pose. 
1:1 square, centered composition.
```

---

### 12 `member-3.png`
> **サイズ:** `1024x1024` ／ **セクション:** 社員の声③アバター（男性・FS・30〜35歳）

```
Photorealistic photography. Close-up portrait of a Japanese male software engineer, 
age 30–35. Expression: thoughtful and settled — someone who has found their footing, 
a quiet sense of satisfaction. Wearing a casual open-collar shirt or muted-tone hoodie. 
Slight relaxed posture. Background: cool-toned tech workspace, softly blurred. 
Soft diffused indoor lighting. Candid portrait feel. 1:1 square, centered composition.
```

---

### 13 `member-4.png`（★新規追加）
> **サイズ:** `1024x1024` ／ **セクション:** 社員の声④アバター（女性・インフラ/SRE・27〜31歳）

```
Close-up portrait of a Japanese female software engineer, age 27–31.
Expression: calm, confident, and quietly proud — someone who found her place.
A gentle natural smile, direct but relaxed eye contact with camera.
Wearing a plain white or light gray minimal hoodie or t-shirt.
Background: modern tech office softly blurred (bokeh), warm ambient glow.
Natural side window light. Authentic candid feel — not a stock photo pose.
East Asian appearance. Photorealistic photography, no illustration, no text,
1:1 square, centered composition.
```

---

### 14 `ceo-portrait.png`
> **サイズ:** `1024x1792` ／ **セクション:** CEO セクション左パネル全高

```
Photorealistic photography. Full-length or three-quarter portrait of a Japanese 
male tech entrepreneur, age early 40s. Wearing a well-fitted dark navy t-shirt 
or minimal unstructured casual jacket — absolutely no suit, no tie. 
Standing naturally, arms relaxed at sides or one hand lightly in pocket. 
Expression: confident and direct eye contact with camera, approachable authority — 
the kind of person who codes every day and means what he says. 
Background: modern office environment, slightly blurred — a monitor or MacBook edge 
visible suggesting an active work environment. 
Directional warm lighting from one side creating natural depth and shadow. 
Not corporate, not stiff — genuine, trustworthy, grounded. 
9:16 portrait orientation, full height visible. No text.
```

---

## 生成後の処理

### トリミングが必要な画像

| ファイル名 | 処理内容 |
|---|---|
| `office.png` | 16:9生成 → 中央を縦長（3:4）にトリミング（Solutionパネル用） |
| `voices-ambient.png` | 16:9生成 → 上部340px相当を切り出し（ヘッダー帯用） |

### Pythonサンプル（Pillowを使用）

```python
from PIL import Image

# office.png: 16:9 → 3:4 縦長（中央切り出し）
img = Image.open("office.png")
w, h = img.size
new_w = int(h * 3 / 4)
left = (w - new_w) // 2
img.crop((left, 0, left + new_w, h)).save("office_cropped.png")

# voices-ambient.png: 上部 340px 相当を切り出し
img = Image.open("voices-ambient.png")
w, h = img.size
cut_h = int(h * 0.4)   # 上部40%程度
img.crop((0, 0, w, cut_h)).save("voices-ambient_cropped.png")
```

---

## チェックリスト

- [ ] 全員、日本人らしい（East Asian）外見になっているか
- [ ] テキスト・ロゴ・ウォーターマーク・日本語文字が生成されていないか
- [ ] ピンク・赤・蛍光色が使われていないか
- [ ] ストックフォト的な過度なポーズ・作り笑いがないか
- [ ] member 3名の顔が「同一人物に見えない」多様性があるか
- [ ] hero-bg / numbers-bg / cta-bg はオーバーレイをかけても視覚的に成立するか
- [ ] ceo-portrait は縦長（9:16）で頭頂から足元（または膝上）が収まっているか
- [ ] gallery 4枚のカラートーンが統一感を持っているか
