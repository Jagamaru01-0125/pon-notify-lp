export const SITE_URL = "https://pon-notify-lp.vercel.app/";

// Replace this with the live Google Forms, Tally, or Formspree URL.
export const FALLBACK_FORM_URL = "https://tally.so/r/replace-pon-notify";

export const FORM_URL =
  process.env.NEXT_PUBLIC_FORM_URL?.trim() || FALLBACK_FORM_URL;

export const FORM_LINK_PROPS = {
  href: FORM_URL,
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export const SOCIAL_TITLE =
  "ぽん通知（仮称） | 動物たちのかわいい合図を、“ワン”タップで";

export const SOCIAL_DESCRIPTION =
  "腕からでも、ロック画面からでも。肉球ボタンを押すだけで、動物たちがふたりだけの合図を届けるアプリです。";
