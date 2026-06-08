import Image from "next/image";
import { BellRing, PawPrint, Send, Sparkles } from "lucide-react";

import { imageAssets } from "@/constants/assets";
import { FORM_LINK_PROPS } from "@/constants/site";

const heroSignals = ["肉球を押す", "動物が走る", "しぐさで届く"] as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fff7ec] px-5 pb-14 pt-7 sm:px-8 lg:pb-20 lg:pt-10">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_8%,rgba(255,196,137,0.38),transparent_30rem),radial-gradient(circle_at_82%_16%,rgba(246,174,188,0.22),transparent_24rem),linear-gradient(180deg,#fff8ee_0%,#fffdf9_72%,#fff6ed_100%)]" />
      <div className="pointer-events-none absolute left-[8%] top-28 -z-10 h-36 w-36 rounded-full bg-[#ffd8ad]/28 blur-3xl" />
      <div className="pointer-events-none absolute right-[18%] top-20 -z-10 h-44 w-44 rounded-full bg-[#f6b4c2]/18 blur-3xl" />

      <div className="section-shell grid gap-9 lg:min-h-[720px] lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-12">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-[#ffb56b] to-[#f07a52] text-white shadow-[0_14px_28px_rgba(240,122,82,0.24)]">
              <PawPrint className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xl font-black leading-none text-[#2b211b]">
                ぽん通知
              </p>
              <p className="mt-1 text-xs font-bold text-[#7a482b]">
                ワンタップ合図アプリ
              </p>
            </div>
          </div>

          <p className="eyebrow-pill mt-6">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Watchとロック画面から、ふたりだけの合図を
          </p>

          <h1 className="mt-6 text-[2.06rem] font-black leading-[1.2] text-[#2b211b] sm:text-5xl lg:text-[3.35rem] xl:text-[3.75rem]">
            <span className="block">動物たちの</span>
            <span className="block">かわいい合図を、</span>
            <span className="block text-[#f07945]">“ワン”タップで。</span>
          </h1>

          <p className="mt-5 max-w-lg text-base font-medium leading-8 text-[#5d5149] sm:text-xl sm:leading-9">
            腕からでも、ロック画面からでも。肉球ボタンを押すだけで、
            あなたが選んだ動物たちが、ふたりだけの合図を届けます。
          </p>

          <div className="mt-5 grid gap-2 rounded-lg border border-[#f1d8c8] bg-white/68 p-3 text-sm font-bold leading-7 text-[#7a482b] shadow-[0_12px_28px_rgba(109,63,37,0.06)] backdrop-blur sm:max-w-lg">
            <span>文字を添えても、添えなくても。</span>
            <span>合図の意味は、ふたりで自由に決められます。</span>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              {...FORM_LINK_PROPS}
              className="cta-paw-primary inline-flex w-full items-center justify-center gap-2 px-5 py-3 text-center text-base font-black text-white sm:w-auto sm:px-6"
            >
              <PawPrint className="h-5 w-5" aria-hidden="true" />
              開発通知を受け取る
            </a>
            <a
              href="#signup"
              className="cta-paw-secondary inline-flex w-full items-center justify-center gap-2 px-5 py-3 text-center text-base font-bold text-[#7a482b] sm:w-auto sm:px-6"
            >
              <Send className="h-5 w-5" aria-hidden="true" />
              使ってみたい
            </a>
          </div>

          <div className="mt-7 grid gap-2 text-sm font-bold text-[#7a482b] sm:grid-cols-3">
            {heroSignals.map((label) => (
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

        <div className="relative">
          <div className="absolute -left-5 top-9 z-10 hidden rounded-full border border-[#f6cfbd] bg-white/82 px-4 py-2 text-sm font-black text-[#7a482b] shadow-[0_12px_28px_rgba(109,63,37,0.08)] backdrop-blur sm:inline-flex">
            <BellRing className="mr-2 h-4 w-4 text-[#f07945]" aria-hidden="true" />
            しぐさで、そっと届く
          </div>

          <div className="premium-card-strong relative overflow-hidden p-2 sm:p-3">
            <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.28)_0%,transparent_34%,rgba(255,240,230,0.46)_100%)]" />
            <Image
              src={imageAssets.hero}
              alt="Apple Watchの肉球ボタンを押すと、動物が走ってスマホとApple Watchに合図が届くイメージ"
              width={1717}
              height={916}
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>

          <div className="soft-float absolute -bottom-4 right-4 hidden rounded-lg border border-[#efd8c6] bg-white/88 px-4 py-3 text-sm font-bold leading-6 text-[#7a482b] shadow-[0_18px_38px_rgba(109,63,37,0.12)] backdrop-blur sm:block">
            例の文字は、あとから自由に変更。
          </div>
        </div>
      </div>
    </section>
  );
}
