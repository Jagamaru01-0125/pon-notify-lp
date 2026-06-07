import Image from "next/image";
import { BellRing, PawPrint, Send, Sparkles } from "lucide-react";

import { PawButton } from "@/components/PawButton";
import { FORM_LINK_PROPS } from "@/constants/site";

function WatchMock() {
  return (
    <div className="relative mx-auto h-48 w-36">
      <div className="absolute left-1/2 top-0 h-8 w-20 -translate-x-1/2 rounded-t-lg bg-[#4b4540]" />
      <div className="absolute bottom-0 left-1/2 h-8 w-20 -translate-x-1/2 rounded-b-lg bg-[#4b4540]" />
      <div className="absolute inset-x-3 top-6 h-36 rounded-[1.7rem] border-[7px] border-[#292623] bg-[#11100f] p-3 shadow-[0_18px_40px_rgba(45,35,28,0.26)]">
        <div className="flex items-center justify-between text-[0.58rem] font-bold text-[#ffe0a9]">
          <span>ぽん</span>
          <span>10:09</span>
        </div>
        <div className="mt-3 grid place-items-center">
          <PawButton label="ぽん" size="sm" />
        </div>
      </div>
      <div className="absolute right-0 top-20 h-10 w-2 rounded-r-md bg-[#4b4540]" />
    </div>
  );
}

function LockWidgetMock() {
  return (
    <div className="relative mx-auto h-52 w-36 rounded-[1.8rem] border-[7px] border-[#34302d] bg-[#eef4ee] p-3 shadow-[0_18px_40px_rgba(45,35,28,0.22)]">
      <div className="absolute left-1/2 top-2 h-3 w-14 -translate-x-1/2 rounded-full bg-[#24211f]" />
      <div className="mt-5 text-center text-white drop-shadow">
        <p className="text-2xl font-bold leading-none">10:09</p>
        <p className="mt-1 text-[0.58rem] font-bold">5月2日 火曜日</p>
      </div>
      <div className="mt-5 rounded-lg border border-white/70 bg-white/80 p-3 shadow-[0_10px_26px_rgba(109,63,37,0.14)] backdrop-blur">
        <p className="mb-2 text-center text-[0.62rem] font-bold text-[#7a482b]">
          ロック画面ウィジェット
        </p>
        <div className="flex justify-center">
          <PawButton label="ぽん" size="sm" />
        </div>
      </div>
    </div>
  );
}

function ReceiverStage() {
  return (
    <div className="rounded-lg border border-[#f1d8c8] bg-[#fffdf9] p-3 shadow-[0_12px_30px_rgba(109,63,37,0.1)]">
      <p className="mb-2 text-center text-xs font-bold text-[#7a482b]">
        合図が届くと...
      </p>
      <div className="grid min-h-28 place-items-center rounded-lg bg-[linear-gradient(180deg,#fff4df_0%,#f6eadc_100%)] px-4">
        <div className="dog-dash text-5xl" aria-hidden="true">
          🐕
        </div>
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#6d3f25] shadow-sm">
          帰るよ
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fff7ec]">
      <Image
        src="/images/pon-gesture-hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[76%_center] opacity-20 sm:opacity-30 lg:opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,247,236,0.98)_0%,rgba(255,247,236,0.92)_52%,rgba(255,247,236,0.82)_100%)] lg:bg-[linear-gradient(90deg,rgba(255,247,236,0.99)_0%,rgba(255,247,236,0.9)_45%,rgba(255,247,236,0.7)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-[#fffdf9] to-transparent" />

      <div className="mx-auto grid min-h-[calc(100svh-3rem)] max-w-6xl gap-8 px-5 pb-9 pt-8 sm:px-8 lg:min-h-[82svh] lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-10 lg:py-14">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#ffb563] text-white shadow-[0_12px_24px_rgba(240,138,75,0.26)]">
              <PawPrint className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xl font-bold leading-none text-[#2b211b]">
                ぽん通知
              </p>
              <p className="mt-1 text-xs font-bold text-[#7a482b]">
                仮称 / ワンタップ合図アプリ
              </p>
            </div>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#f4c7a6] bg-white/80 px-3 py-2 text-sm font-bold text-[#8a4c2c] shadow-sm">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Apple Watch・スマートウォッチ中心に検証中
          </p>

          <h1 className="mt-5 text-[2.35rem] font-black leading-[1.22] tracking-normal text-[#2b211b] sm:text-5xl lg:text-[4rem]">
            動物たちの
            <span className="block text-[#2b211b]">かわいい合図を、</span>
            <span className="block text-[#f07945]">“ワン”タップで。</span>
          </h1>

          <p className="mt-5 max-w-xl text-base font-medium leading-8 text-[#5d5149] sm:text-xl sm:leading-9">
            <span className="block">腕からでも、ロック画面からでも。</span>
            <span className="block">肉球ボタンを押すだけで、</span>
            <span className="block">小さな犬があなたの気持ちを届けます。</span>
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              {...FORM_LINK_PROPS}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#ff7f5f] px-5 py-3 text-base font-bold text-white shadow-[0_14px_28px_rgba(225,89,62,0.26)] transition hover:bg-[#ee6e4f]"
            >
              <BellRing className="h-5 w-5" aria-hidden="true" />
              開発通知を受け取る
            </a>
            <a
              {...FORM_LINK_PROPS}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#e8b596] bg-white/90 px-5 py-3 text-base font-bold text-[#7a482b] transition hover:bg-[#fff1e6]"
            >
              <Send className="h-5 w-5" aria-hidden="true" />
              使ってみたい
            </a>
          </div>

          <p className="mt-4 text-sm leading-7 text-[#7d6d62]">
            <span className="block">正式名称は未定です。</span>
            <span className="block">Apple Watch / ロック画面対応は</span>
            <span className="block">需要を見ながら優先度を決めます。</span>
          </p>
        </div>

        <div className="rounded-lg border border-[#f0d8c6] bg-white/75 p-3 shadow-[0_22px_60px_rgba(109,63,37,0.12)] backdrop-blur sm:p-5">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-[#fff8ef] px-3 py-4 text-center">
              <p className="mb-2 text-sm font-black text-[#2b211b]">
                腕からでも！
              </p>
              <WatchMock />
            </div>
            <div className="rounded-lg bg-[#fff8ef] px-3 py-4 text-center">
              <p className="mb-2 text-sm font-black text-[#2b211b]">
                ロック画面からでも！
              </p>
              <LockWidgetMock />
            </div>
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[0.62fr_1fr]">
            <div className="rounded-lg border border-[#ffd6bf] bg-[#fff3e8] p-4">
              <p className="text-sm font-black text-[#7a482b]">犬が走る</p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <span className="text-xl text-[#f08a4b]" aria-hidden="true">
                  ・・
                </span>
                <span className="dog-dash text-6xl" aria-hidden="true">
                  🐕
                </span>
                <span className="text-xl text-[#f08a4b]" aria-hidden="true">
                  ・・
                </span>
              </div>
              <p className="mt-3 text-center text-xs font-bold text-[#7d6d62]">
                文字より先に、動きで届く
              </p>
            </div>
            <ReceiverStage />
          </div>
        </div>
      </div>
    </section>
  );
}
