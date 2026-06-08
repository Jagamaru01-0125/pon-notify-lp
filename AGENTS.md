# AGENTS.md

This file defines the working rules for Codex agents editing this repository.

## ぽん通知LP制作ベース方針

このリポジトリは「ぽん通知」の需要検証LP専用です。今後このLPを修正・改善するときは、添付された最新LPカンプ画像、特に `ChatGPT Image 2026年6月8日 03_20_03.png` の構成と雰囲気を参考にしてください。

LPの主役は「登録した動物たちが、ふたりで決めた合図をジェスチャーで届ける体験」です。カードや長いメッセージ、LINE風チャット、大きな通知カード、スマホアプリ画面を主役にした管理アプリへ寄せないでください。

「帰るよ」「大丈夫？」「見て」などの文字は、あくまで意味を補助するラベルです。文字はありでもなしでも使える想定で、文字内容や合図の意味はユーザーが自由に変えられる想定です。

LPでは以下を主役にしてください。

- 動物のしぐさ
- ふたりだけの合図
- 肉球を押す体験
- Apple Watch / スマートウォッチから送る軽さ
- ロック画面ウィジェットから送れる気軽さ

## Repository Scope

This repository is dedicated to the demand-validation landing page for "ぽん通知".

Do not add production app code or backend/product features here. This is not the React Native / Expo app repository.

Never add:

- App implementation code
- Push notification implementation
- Apple Watch / watchOS implementation
- iOS lock screen widget / WidgetKit implementation
- Login or authentication
- Pair-registration flows as a real product feature
- Payment or subscription code
- Chat features
- Location sharing
- SNS timeline features
- LINE-like UI

Use the attached LP comp image, especially `ChatGPT Image 2026年6月8日 03_20_03.png`, as the structural and visual reference for future LP improvements.

## Tech Stack

Keep the current stack:

- Next.js
- TypeScript
- Tailwind CSS
- Vercel deployment target

Maintain a passing `npm run build` before finishing implementation work. For TSX/UI edits, also run `npm run lint` when practical.

## Product Summary

"ぽん通知" is an app concept where animal characters deliver cute, small signals to important people with one "ワン" tap.

The expected experience:

- User presses a paw button from Apple Watch / smartwatch.
- User can also press a paw button from a lock screen widget without opening the phone.
- A registered animal appears on the recipient's phone or Apple Watch.
- The animal delivers a pre-agreed signal through a gesture.
- Text labels may be shown or hidden.
- Signal meanings and label text are assumed to be customizable by users.
- The target audience is couples, family members, and close relationships.

This LP exists before full product development. Its purpose is to validate whether users want this experience.

## Core Concept

This is not an app where cards or long messages arrive.

The main experience is:

"Registered animals deliver gestures that mean something only the two people have agreed on."

The animal gestures are the product:

- Running toward the recipient
- Wagging its tail
- Tapping with a front paw
- Tilting its head
- Carrying a heart
- Curling up to rest

Text such as "帰るよ", "大丈夫？", or "見て" is only a supplemental label. It is not the main content. The LP should communicate:

- Animal gestures
- Private signals between two people
- The tactile paw-button action

Do not frame the product as a message app, notification-card app, sticker app, or chat alternative.

## Avoid These Directions

Do not make the LP look like:

- LINE-style chat UI
- Large notification-card delivery app
- Message sending app
- Smartphone-app-first management tool
- Location sharing app
- Family management app
- Childish animal app
- Sticker sending app
- SNS timeline

Smartphone app screens are only for partner settings and signal customization. They should be secondary and should not become the hero of the LP.

## Visual Direction

Use:

- Pale beige, cream, orange, brown, and soft pink
- Warm, gentle tone for couples, family, and close relationships
- Rounded card UI
- Generous spacing
- Soft, tactile paw buttons
- Semi-realistic small dogs with visible fur texture
- Subtle paw prints, stars, hearts, and light trails
- Japanese LP copy in HTML text
- Mobile-first layouts

Avoid:

- Overly childish styling
- Toy-like or plush-like animal imagery as the main visual
- Heavy animation
- Copy that depends on text embedded inside images

Important copy must be rendered as HTML text, not as image text.

## Base LP Structure

Future LP changes should follow this structure unless the user explicitly asks otherwise.

### 1. First View

Purpose:

Show the flow at a glance:

Apple Watch / smartwatch paw button tap -> animal runs -> signal arrives on the recipient's phone or Apple Watch.

Main copy:

```text
動物たちのかわいい合図を、
“ワン”タップで。
```

Subcopy:

```text
腕からでも、ロック画面からでも。
肉球ボタンを押すだけで、あなたが選んだ動物たちが、ふたりだけの合図を届けます。
```

Supplement:

```text
文字を添えても、添えなくても。
合図の意味は、ふたりで自由に決められます。
```

CTA:

- 開発通知を受け取る
- 使ってみたい

Visual:

- Hand pressing an Apple Watch paw button
- Running dog
- Recipient phone and Apple Watch showing the animal signal
- Do not make the smartphone app screen the main hero visual

### 2. 使い方は、たった3ステップ

1. 肉球を押す
   腕時計やロック画面から、ぷにっとワンタップ。

2. 動物が走る
   あなたが選んだ相棒が、合図を届けに行く。

3. 相手にしぐさで届く
   相手のスマホやApple Watchに、動物のジェスチャーで合図が届く。

### 3. どこから送れる？

- Apple Watch / スマートウォッチ
  腕からすぐに、ふたりの合図を送れる。

- ロック画面ウィジェット
  スマホを開かずに、肉球だけ押せる。

- スマホアプリ
  相手登録や、合図の意味をカスタマイズ。

### 4. 合図は、しぐさで届く

Supplement:

```text
文字はつけても、つけなくてもOK。
「帰るよ」「大丈夫？」みたいな意味も、ふたりで自由に変えられます。
```

Examples:

- 走ってくる: 例 帰るよ
- しっぽを振る: 例 大丈夫
- 前足でちょんちょん: 例 見て
- 首をかしげる: 例 大丈夫？
- ハートをくわえる: 例 思い出した
- 丸まって休む: 例 今日は疲れた

These are examples, not fixed messages. Users are expected to customize gesture meanings.

### 5. 届くのは、メッセージじゃなくて、あなたたちだけの合図。

Body direction:

Animals run, wag their tails, tap with a paw, or tilt their heads. The meaning of each gesture is decided by the two people. The LP should emphasize signals that can be understood without writing a full message, while allowing short labels when needed.

### 6. 最初は犬。これから増える相棒たち

Body direction:

Start with dogs. In the future, cats, rabbits, bears, and other animals may be considered so users can choose the animal that fits their relationship.

Keep the initial MVP dog-centered, while presenting the LP world as "animal signals".

### 7. 言葉にしない、ふたりの合図で届く

Body direction:

Use examples like:

- "これが来たら、帰ってくる合図"
- "このしぐさは、ちょっと気にしてる合図"
- "ハートをくわえてきたら、思い出したってこと"

Card examples:

- ふたりだけの意味で使える
- 文字なしでも伝わる
- 短い文字も添えられる
- 返信を求めすぎない

In this section, prefer "言葉にしないふたりの合図で気持ちを届ける" over "LINEするほどじゃない".

### 8. 親しい人と、安心して使えるように

Items:

- 最初は親しい1人だけ
- チャットなし
- 通知オン/オフ
- ペア解除
- ブロック
- 位置情報は初期MVPでは使いません

Keep this section soft and warm. Do not let it feel like a heavy security or family-management product.

### 9. Final CTA

Heading:

```text
僕の肉球、触ってほしいワン。
```

Body:

```text
ぽん通知は、ただいま開発準備中です。
気になった方には、リリース前のお知らせをお届けします。
```

CTA:

```text
肉球を押して、開発通知を受け取る
```

Visual:

- Dog looking at the viewer
- Paw button
- Dog carrying a letter

CTA buttons should feel tactile and natural within the dog/paw-button world, not pushy.

## CTA Rules

Primary CTA:

- 開発通知を受け取る

Secondary CTA:

- 使ってみたい

For the final CTA, use copy that blends into the world, such as:

- 肉球を押して、開発通知を受け取る

Keep form URLs and CTA links centralized and easy to replace. Prefer existing constants such as `src/constants/site.ts`.

## Image Rules

When using image assets:

- Review `public/raw-assets/` first.
- Copy adopted images into `public/assets/`.
- Rename adopted images with readable English filenames.
- Prefer `next/image`.
- Do not rely on Japanese text embedded inside images.
- Crop or reduce images when embedded text is too visible.
- Do not use images where dogs or animals are malformed.
- Lower priority for images that look too toy-like or plush-like.
- Prefer semi-realistic small dogs with visible fur.
- Prefer backgroundless or cutout-like dog assets for gesture cards, but verify that they are truly usable; some "transparent-looking" PNGs may include a checkerboard background.
- Prefer wide hero images for the first view.
- Use lock screen widget images for "スマホを開かずに送れる".
- Keep smartphone app images secondary.
- Do not overuse images until the LP looks like an asset catalog.

## Implementation Rules

- Keep the Next.js / TypeScript / Tailwind CSS structure.
- Keep the project Vercel-compatible.
- Keep `npm run build` passing.
- Prioritize mobile layout.
- Do not add heavy animation.
- Do not add external animation libraries.
- Light CSS animation is acceptable.
- Do not implement full scroll-linked animation at this stage.
- Preserve existing user changes in the working tree.
- Use `apply_patch` for manual file edits.
- For frontend changes, verify the page visually when practical.

## Verification

Before finishing implementation work:

- Run `npm run build`.
- Run `npm run lint` when TSX, TypeScript, or styling behavior changed.
- Check mobile rendering first.
- Report any verification that could not be performed.

For documentation-only changes, build is not required unless the user explicitly asks for it.
