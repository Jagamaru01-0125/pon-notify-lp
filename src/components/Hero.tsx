import Image from "next/image";
import { BellRing, PawPrint, Send, Sparkles } from "lucide-react";

import { imageAssets } from "@/constants/assets";
import { FORM_LINK_PROPS } from "@/constants/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fff7ec] px-5 pb-12 pt-8 sm:px-8 lg:min-h-[88svh] lg:pb-16 lg:pt-10">
      <Image
        src={imageAssets.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 hidden object-cover object-[68%_center] opacity-95 lg:block"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,247,236,0.98)_0%,rgba(255,247,236,0.78)_56%,rgba(255,247,236,0.92)_100%)] lg:bg-[linear-gradient(90deg,rgba(255,247,236,0.99)_0%,rgba(255,247,236,0.94)_38%,rgba(255,247,236,0.18)_78%,rgba(255,247,236,0.5)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-[#fffdf9] to-transparent" />

      <div className="mx-auto flex max-w-6xl flex-col lg:min-h-[78svh] lg:justify-center">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#ffb563] text-white shadow-[0_12px_24px_rgba(240,138,75,0.24)]">
              <PawPrint className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xl font-bold leading-none text-[#2b211b]">
                ぽん通知
              </p>
              <p className="mt-1 text-xs font-bold text-[#7a482b]">
                ワンタップ合図アプリ
              </p>
            </div>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#f4c7a6] bg-white/82 px-3 py-2 text-sm font-bold text-[#8a4c2c] shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Apple Watch・ロック画面から使う未来を検証中
          </p>

          <h1 className="mt-5 text-[2.35rem] font-black leading-[1.2] tracking-normal text-[#2b211b] sm:text-5xl lg:text-[4rem]">
            動物たちの
            <span className="block">かわいい合図を、</span>
            <span className="block text-[#f07945]">“ワン”タップで。</span>
          </h1>

          <p className="mt-5 max-w-lg text-base font-medium leading-8 text-[#5d5149] sm:text-xl sm:leading-9">
            腕からでも、ロック画面からでも。肉球ボタンを押すだけで、
            あなたが選んだ動物たちが、ふたりだけの合図を届けます。
          </p>

          <p className="mt-4 max-w-md rounded-lg border border-[#f4d6c4] bg-white/72 px-4 py-3 text-sm font-bold leading-7 text-[#7a482b] shadow-sm backdrop-blur">
            文字を添えても、添えなくても。合図の意味は、ふたりで自由に決められます。
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              {...FORM_LINK_PROPS}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#ff7f5f] px-5 py-3 text-base font-bold text-white shadow-[0_14px_28px_rgba(225,89,62,0.26)] transition hover:-translate-y-0.5 hover:bg-[#ee6e4f]"
            >
              <BellRing className="h-5 w-5" aria-hidden="true" />
              開発通知を受け取る
            </a>
            <a
              href="#signup"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#e8b596] bg-white/92 px-5 py-3 text-base font-bold text-[#7a482b] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#fff1e6]"
            >
              <Send className="h-5 w-5" aria-hidden="true" />
              使ってみたい
            </a>
          </div>

          <p className="mt-4 max-w-md text-sm leading-7 text-[#7d6d62]">
            Apple Watch / スマートウォッチ / ロック画面ウィジェット対応は、
            需要を見ながら優先度を決めます。
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border border-[#f1d8c8] bg-white/70 shadow-[0_18px_42px_rgba(109,63,37,0.12)] lg:hidden">
          <Image
            src={imageAssets.hero}
            alt="Apple Watchの肉球ボタンを押すと、犬が走ってスマホとApple Watchに合図が届くイメージ"
            width={1717}
            height={916}
            priority
            sizes="100vw"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="mt-7 grid gap-3 text-sm font-bold text-[#7a482b] sm:grid-cols-3 lg:max-w-2xl">
          {["肉球を押す", "動物が走る", "しぐさで届く"].map((label) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-lg border border-[#efd8c6] bg-white/72 px-3 py-3 shadow-sm backdrop-blur"
            >
              <PawPrint className="h-4 w-4 text-[#f07945]" aria-hidden="true" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
