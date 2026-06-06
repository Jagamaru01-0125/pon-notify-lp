import { Mail, Send } from "lucide-react";

import {
  animalOptions,
  FORM_ACTION_URL,
  partnerOptions,
  senderOptions,
  signalOptions,
} from "@/constants/form";

export function SignupSection() {
  return (
    <section id="signup" className="bg-[#2b211b] px-5 py-16 text-white sm:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div>
          <p className="mb-3 text-sm font-bold text-[#ffc9a8]">Pre-register</p>
          <h2 className="text-3xl font-bold leading-[1.35] sm:text-4xl">
            開発通知を受け取る
          </h2>
          <p className="mt-4 text-base leading-8 text-[#eadcd2] sm:text-lg">
            使ってみたい相手、送信方法、好きな動物を教えてください。
            外部フォームに差し替えやすい仮フォームとして実装しています。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#signup-form"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#f08a4b] px-5 py-3 font-bold text-[#2b211b] transition hover:bg-[#ff9f66]"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              開発通知を受け取る
            </a>
            <a
              href="#signup-form"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#f1c7ad] px-5 py-3 font-bold text-white transition hover:bg-white/10"
            >
              <Send className="h-5 w-5" aria-hidden="true" />
              使ってみたい
            </a>
          </div>
        </div>

        <form
          id="signup-form"
          action={FORM_ACTION_URL}
          method="get"
          target="_blank"
          className="rounded-lg border border-white/14 bg-white p-5 text-[#2b211b] shadow-[0_20px_60px_rgba(0,0,0,0.22)] sm:p-6"
        >
          <div className="grid gap-5">
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
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#6d3f25] px-5 py-3 font-bold text-white transition hover:bg-[#55311d]"
            >
              <Send className="h-5 w-5" aria-hidden="true" />
              開発通知を受け取る
            </button>

            <p className="text-xs leading-6 text-[#7d6d62]">
              送信先は仮のTally URLです。READMEの手順に沿ってGoogleフォームやTallyのURLへ差し替えできます。
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
