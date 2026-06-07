import { ArrowRight, PawPrint } from "lucide-react";

import { PawButton } from "@/components/PawButton";
import { SectionHeader } from "@/components/SectionHeader";

const steps = [
  {
    title: "肉球を押す",
    description: "Apple Watchやロック画面ウィジェットから、送りたい合図の肉球をワンタップ。",
    visual: "button",
  },
  {
    title: "犬が走る",
    description: "小さな犬がとことこ走って、あなたの気持ちを相手の画面へ運びます。",
    visual: "dog",
  },
  {
    title: "相手に合図が届く",
    description: "受信側では犬がジェスチャー。文字は「帰るよ」などの短い補助ラベルだけ。",
    visual: "stage",
  },
] as const;

function StepVisual({ visual }: { visual: (typeof steps)[number]["visual"] }) {
  if (visual === "button") {
    return (
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-[#191715] p-3 text-center text-white">
          <p className="mb-2 text-[0.65rem] font-bold text-[#ffe0a9]">Watch</p>
          <div className="mx-auto grid h-24 w-20 place-items-center rounded-[1.2rem] border-4 border-[#3b3834] bg-[#11100f]">
            <PawButton label="ぽん" size="sm" />
          </div>
        </div>
        <div className="rounded-lg bg-[#eef4ee] p-3 text-center">
          <p className="mb-2 text-[0.65rem] font-bold text-[#315f52]">Lock</p>
          <div className="mx-auto rounded-lg border border-white/80 bg-white/80 p-2">
            <PawButton label="ぽん" size="sm" />
          </div>
        </div>
      </div>
    );
  }

  if (visual === "dog") {
    return (
      <div className="grid min-h-36 place-items-center rounded-lg bg-[#fff3e8]">
        <div className="flex items-center gap-3">
          <span className="text-[#ffad73]" aria-hidden="true">
            ・・・
          </span>
          <span className="dog-dash text-6xl" aria-hidden="true">
            🐕
          </span>
          <span className="text-[#ffad73]" aria-hidden="true">
            ・・・
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="grid min-h-36 place-items-center rounded-lg bg-[#fff8ef]">
      <div className="rounded-lg border border-[#f0d8c6] bg-white p-4 text-center shadow-sm">
        <span className="text-5xl" aria-hidden="true">
          🐶
        </span>
        <p className="mt-2 rounded-full bg-[#fff0e6] px-3 py-1 text-xs font-bold text-[#7a482b]">
          帰るよ
        </p>
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section className="bg-[#fffdf9] px-5 py-14 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="How it works"
          title="使い方は、かんたん3ステップ"
          description="送る操作は肉球を押すだけ。受け取る側には、犬の動きと短いラベルで合図が届きます。"
          align="center"
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-lg border border-[#f0d8c6] bg-white p-4 shadow-[0_12px_30px_rgba(109,63,37,0.08)]"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#ff8f68] text-sm font-black text-white">
                  {index + 1}
                </span>
                <h3 className="text-xl font-black text-[#2b211b]">{step.title}</h3>
              </div>
              <StepVisual visual={step.visual} />
              <p className="mt-4 text-sm font-medium leading-7 text-[#66564c]">
                {step.description}
              </p>
              {index < steps.length - 1 ? (
                <ArrowRight
                  className="absolute -right-3 top-1/2 hidden h-6 w-6 text-[#ff8f68] lg:block"
                  aria-hidden="true"
                />
              ) : (
                <PawPrint
                  className="absolute right-4 top-4 h-5 w-5 text-[#ffb58d]"
                  aria-hidden="true"
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
