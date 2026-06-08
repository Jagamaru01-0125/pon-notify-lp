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

export function SignupSection() {
  return (
    <section
      id="signup"
      className="scroll-mt-8 bg-[#fff1e6] px-5 py-14 text-[#2b211b] sm:px-8 lg:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-3 text-sm font-bold text-[#9a5633]">Final CTA</p>
          <h2 className="text-3xl font-black leading-[1.35] sm:text-4xl">
            僕の肉球、触ってほしいワン。
          </h2>
          <p className="mt-4 text-base leading-8 text-[#66564c] sm:text-lg">
            ぽん通知は、ただいま開発準備中です。気になった方には、
            リリース前のお知らせをお届けします。
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              {...FORM_LINK_PROPS}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#ff7f5f] px-5 py-3 font-bold text-white shadow-[0_14px_28px_rgba(225,89,62,0.22)] transition hover:-translate-y-0.5 hover:bg-[#ee6e4f]"
            >
              <PawPrint className="h-5 w-5" aria-hidden="true" />
              肉球を押して、開発通知を受け取る
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-[1fr_0.7fr] sm:items-end">
            <div className="overflow-hidden rounded-lg border border-[#efd8c6] bg-white/65 shadow-[0_14px_34px_rgba(109,63,37,0.08)]">
              <Image
                src={imageAssets.ctaDog}
                alt="手紙をくわえて走る犬"
                width={1536}
                height={1024}
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="mx-auto max-w-40">
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
          className="rounded-lg border border-[#efd8c6] bg-white p-4 text-[#2b211b] shadow-[0_20px_48px_rgba(109,63,37,0.12)] sm:p-6"
        >
          <div className="grid gap-4 sm:gap-5">
            <a
              {...FORM_LINK_PROPS}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#ff7f5f] px-5 py-3 text-center font-bold text-white transition hover:bg-[#ee6e4f]"
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
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#6d3f25] px-5 py-3 font-bold text-white transition hover:bg-[#55311d]"
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
