import Image from "next/image";
import { BellRing, Send, Smartphone, Sparkles, Watch } from "lucide-react";

import { PawButton } from "@/components/PawButton";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fff7ec]">
      <Image
        src="/images/pon-gesture-hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[68%_center] opacity-80"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,249,240,0.98)_0%,rgba(255,249,240,0.9)_44%,rgba(255,249,240,0.52)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-[#fffdf9] to-transparent" />

      <div className="mx-auto grid min-h-[82svh] max-w-6xl gap-10 px-5 pb-12 pt-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-md border border-[#f0c0a4] bg-white/80 px-3 py-2 text-sm font-bold text-[#7a482b]">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            仮称: ぽん通知 <span className="text-[#9f7560]">/ サブ候補: わん通知</span>
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.22] text-[#2b211b] sm:text-5xl lg:text-6xl">
            LINEを開くほどじゃない合図を、腕からワンタップで。
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-9 text-[#5d5149] sm:text-xl">
            Apple Watchやロック画面から肉球ボタンを押すだけ。
            小さな動物が、大事な人へ合図を届けます。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#signup"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#6d3f25] px-5 py-3 text-base font-bold text-white shadow-[0_14px_28px_rgba(109,63,37,0.24)] transition hover:bg-[#55311d]"
            >
              <BellRing className="h-5 w-5" aria-hidden="true" />
              開発通知を受け取る
            </a>
            <a
              href="#signup"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#e8b596] bg-white/82 px-5 py-3 text-base font-bold text-[#6d3f25] transition hover:bg-[#fff3e9]"
            >
              <Send className="h-5 w-5" aria-hidden="true" />
              使ってみたいと送る
            </a>
          </div>

          <p className="mt-5 text-sm leading-7 text-[#7d6d62]">
            正式名称は未定です。今はコンセプト検証と開発通知登録のためのLPです。
          </p>
        </div>

        <div className="relative mx-auto grid min-h-[380px] w-full max-w-[420px] place-items-center lg:min-h-[520px]">
          <div className="absolute left-0 top-6 h-56 w-44 rotate-[-8deg] rounded-[2rem] border border-white/70 bg-[#2f302f] p-3 shadow-[0_24px_60px_rgba(41,34,30,0.24)]">
            <div className="h-full rounded-[1.35rem] bg-[#fff8f1] p-4">
              <div className="mb-3 flex items-center justify-between text-xs font-bold text-[#7a482b]">
                <span>18:42</span>
                <Smartphone className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="rounded-lg border border-[#eed7c6] bg-white p-3">
                <p className="text-xs font-bold text-[#8a5a3d]">ぽん通知</p>
                <p className="mt-1 text-sm font-bold text-[#2b211b]">帰るよ</p>
                <p className="mt-1 text-xs leading-5 text-[#7d6d62]">
                  犬が走ってきました
                </p>
              </div>
              <div className="mt-5 flex justify-center">
                <PawButton label="ぽん" size="sm" />
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-10 grid h-48 w-48 place-items-center rounded-full border-[10px] border-[#2f302f] bg-[#fef7ef] shadow-[0_20px_55px_rgba(41,34,30,0.2)]">
            <div className="grid h-36 w-36 place-items-center rounded-full bg-[#fffaf3]">
              <Watch className="absolute right-14 top-10 h-5 w-5 text-[#8a5a3d]" aria-hidden="true" />
              <PawButton label="ぽん" size="md" />
            </div>
          </div>

          <div className="absolute bottom-10 left-7 rounded-lg border border-[#ffd9c7] bg-white/88 px-4 py-3 shadow-[0_12px_30px_rgba(109,63,37,0.12)]">
            <p className="text-sm font-bold text-[#6d3f25]">🐕 とことこ...</p>
            <p className="mt-1 text-xs text-[#7d6d62]">動物のジェスチャーで届く</p>
          </div>
        </div>
      </div>
    </section>
  );
}
