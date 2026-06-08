import Image from "next/image";
import { ArrowRight, Heart, PawPrint, Sparkles } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { PawButton } from "@/components/PawButton";
import { imageAssets } from "@/constants/assets";

const steps = [
  {
    title: "肉球を押す",
    description: "腕時計やロック画面から、ぷにっとワンタップ。",
    visual: "paw",
  },
  {
    title: "動物が走る",
    description: "あなたが選んだ相棒が、合図を届けに行く。",
    visual: "run",
  },
  {
    title: "相手にしぐさで届く",
    description: "相手のスマホやApple Watchに、動物のジェスチャーで合図が届く。",
    visual: "heart",
  },
] as const;

function StepVisual({ visual }: { visual: (typeof steps)[number]["visual"] }) {
  if (visual === "paw") {
    return <PawButton label="ぽん" size="sm" className="scale-90" />;
  }

  if (visual === "run") {
    return (
      <div className="relative grid h-20 w-20 place-items-center rounded-full bg-[#fff4e8] text-[#f07945] shadow-inner">
        <Sparkles className="absolute right-3 top-3 h-4 w-4" aria-hidden="true" />
        <PawPrint className="h-10 w-10" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className="grid h-20 w-20 place-items-center rounded-full bg-[#ffeaf0] text-[#9b4d66] shadow-inner">
      <Heart className="h-9 w-9 fill-current" aria-hidden="true" />
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-[#fffdf9] px-5 py-14 sm:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-8 h-40 bg-[radial-gradient(circle_at_50%_50%,rgba(255,190,130,0.16),transparent_38rem)]" />
      <div className="section-shell relative">
        <SectionHeader
          eyebrow="使い方"
          title="使い方は、たった3ステップ"
          description="操作はとても短く。肉球を押す、その合図を相棒が届ける。画面の中ではなく、しぐさが主役です。"
          align="center"
        />

        <div className="premium-card-strong relative overflow-hidden px-5 py-7 sm:px-8 lg:px-10 lg:py-9">
          <Image
            src={imageAssets.motionDivider}
            alt=""
            width={1536}
            height={1024}
            sizes="100vw"
            className="pointer-events-none absolute inset-x-0 top-1/2 h-28 w-full -translate-y-1/2 object-cover opacity-20"
          />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
            {steps.map((step, index) => (
              <div key={step.title} className="contents">
                <article className="relative rounded-lg border border-[#f0d8c6] bg-white/82 p-5 text-center shadow-[0_12px_30px_rgba(109,63,37,0.06)] backdrop-blur">
                  <span className="mx-auto mb-4 grid h-8 w-8 place-items-center rounded-full bg-[#ff8f68] text-sm font-black text-white shadow-[0_8px_18px_rgba(240,122,82,0.24)]">
                    {index + 1}
                  </span>
                  <div className="mx-auto mb-5 grid h-24 place-items-center">
                    <StepVisual visual={step.visual} />
                  </div>
                  <h3 className="text-xl font-black text-[#2b211b]">{step.title}</h3>
                  <p className="mx-auto mt-2 max-w-64 text-sm font-medium leading-7 text-[#66564c]">
                    {step.description}
                  </p>
                </article>
                {index < steps.length - 1 ? (
                  <ArrowRight
                    className="mx-auto hidden h-8 w-8 rounded-full bg-white p-1.5 text-[#ff8f68] shadow-sm lg:block"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
