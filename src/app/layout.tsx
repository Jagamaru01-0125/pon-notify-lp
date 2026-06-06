import type { Metadata, Viewport } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pon-notify-lp.vercel.app"),
  title: "ぽん通知 LP | ワンタップ合図アプリ（仮称）",
  description:
    "Apple Watchやロック画面から肉球ボタンをワンタップ。小さな動物が親しい相手へ軽い合図を届ける、需要検証中のLPです。",
  openGraph: {
    title: "ぽん通知 LP | ワンタップ合図アプリ（仮称）",
    description:
      "LINEを開くほどじゃない合図を、腕やロック画面からワンタップで届けるコンセプト検証LP。",
    url: "/",
    siteName: "ぽん通知 LP",
    images: ["/ogp.png"],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ぽん通知 LP | ワンタップ合図アプリ（仮称）",
    description:
      "肉球ボタンを押すだけ。動物のジェスチャーで軽い合図を届けるアプリ構想です。",
    images: ["/ogp.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#fff7ec",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
