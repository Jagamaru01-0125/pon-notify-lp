import Image from "next/image";
import { PawPrint } from "lucide-react";

import {
  animalOptions,
  partnerOptions,
  senderOptions,
  signalOptions,
} from "@/constants/form";
import { imageAssets } from "@/constants/assets";
import { FORM_LINK_PROPS, FORM_URL } from "@/constants/site";
import { PawButton } from "@/components/PawButton";

export function SignupSection() {
  return (
    <section
      id="signup"
      className="relative scroll-mt-8 overflow-hidden bg-[#fff1e6] px-5 py-16 text-[#2b211b] sm:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(255,255,255,0.54),transparent_22rem),radial-gradient(circle_at_84%_24%,rgba(246,174,188,0.2),transparent_24rem)]" />
      <div className="section-shell relative grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div>
          <p className="eyebrow-pill mb-4">Final CTA</p>
          <h2 className="text-[2rem] font-black leading-[1.28] sm:text-4xl lg:text-[2.75rem]">
            僕の肉球、触ってほしいワン。
          </h2>
          <p className="mt-4 max-w-xl text-base font-medium leading-8 text-[#66564c] sm:text-lg sm:leading-9">
            ぽん通知は、ただいま開発準備中です。気になった方には、
            リリース前のお知らせをお届けします。
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              {...FORM_LINK_PROPS}
              className="cta-paw-primary inline-flex w-full items-center justify-center gap-2 px-5 py-3 text-center font-black text-white sm:w-auto sm:px-6"
            >
              <PawPrint className="h-5 w-5" aria-hidden="true" />
              肉球を押して、開発通知を受け取る
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-[1fr_0.7fr] sm:items-end">
            <div className="premium-card overflow-hidden bg-white/70 p-2">
              <Image
                src={imageAssets.ctaDog}
                alt="手紙をくわえて走る犬"
                width={1536}
                height={1024}
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
            <div className="relative mx-auto grid max-w-44 place-items-center">
              <PawButton label="ぽん" size="sm" className="absolute -left-5 -top-4 z-10 scale-75" />
              <Image
                src={imageAssets.notificationIcon}
                alt="肉球付きの通知封筒アイコン"
                width={1254}
                height={1254}
                sizes="160px"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>

        <form
          id="signup-form"
          action={FORM_URL}
          method="get"
          target="_blank"
          className="premium-card-strong bg-white/95 p-4 text-[#2b211b] sm:p-6"
        >
          <div className="grid gap-4 sm:gap-5">
            <a
              {...FORM_LINK_PROPS}
              className="cta-paw-primary inline-flex items-center justify-center gap-2 px-5 py-3 text-center font-black text-white"
            >
              <PawPrint className="h-5 w-5" aria-hidden="true" />
              肉球を押して、開発通知を受け取る
            </a>

            <label className="grid gap-2">
              <span className="text-sm font-bold">メールアドレス</span>
              <input
                className="field"
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-bold">使いたい相手</span>
              <select className="field" name="partner" defaultValue="">
                <option value="" disabled>
                  選択してください
                </option>
                {partnerOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <fieldset className="grid gap-3">
              <legend className="text-sm font-bold">一番使いたい送信方法</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {senderOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 rounded-lg border border-[#e8d4c5] bg-[#fffaf3] px-3 py-3 text-sm font-bold"
                  >
                    <input type="radio" name="sender" value={option} />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="grid gap-2">
              <span className="text-sm font-bold">好きな動物</span>
              <select className="field" name="animal" defaultValue="">
                <option value="" disabled>
                  選択してください
                </option>
                {animalOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <fieldset className="grid gap-3">
              <legend className="text-sm font-bold">欲しい合図</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {signalOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 rounded-lg border border-[#e8d4c5] bg-[#fffaf3] px-3 py-3 text-sm font-bold"
                  >
                    <input type="checkbox" name="signals" value={option} />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="grid gap-2">
              <span className="text-sm font-bold">自由コメント</span>
              <textarea
                className="field min-h-28 resize-y"
                name="comment"
                placeholder="こんな合図が欲しい、誰と使いたい、など"
              />
            </label>

            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#6d3f25] px-5 py-3 font-bold text-white shadow-[0_12px_26px_rgba(109,63,37,0.18)] transition hover:-translate-y-0.5 hover:bg-[#55311d]"
            >
              <PawPrint className="h-5 w-5" aria-hidden="true" />
              開発通知を受け取る
            </button>

            <p className="text-xs leading-6 text-[#7d6d62]">
              回答内容は開発通知と需要検証の参考にします。
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
