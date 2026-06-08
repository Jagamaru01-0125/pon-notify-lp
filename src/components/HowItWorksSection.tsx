import Image from "next/image";
import { ArrowRight, PawPrint } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { imageAssets } from "@/constants/assets";

const steps = [
  {
    title: "肉球を押す",
    description: "腕時計やロック画面から、ぷにっとワンタップ。",
    image: imageAssets.watchPawTap,
    alt: "Apple Watchの肉球ボタンを指で押している様子",
    objectPosition: "object-center",
  },
  {
    title: "動物が走る",
    description: "あなたが選んだ相棒が、合図を届けに行く。",
    image: imageAssets.dogRunning,
    alt: "小さな犬が走っているイメージ",
    objectPosition: "object-center",
  },
  {
    title: "相手にしぐさで届く",
    description: "相手のスマホやApple Watchに、動物のジェスチャーで合図が届く。",
    image: imageAssets.receiveDevices,
    alt: "スマホとApple Watchに犬の合図が届くイメージ",
    objectPosition: "object-center",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-[#fffdf9] px-5 py-16 sm:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-8 h-40 bg-[radial-gradient(circle_at_50%_50%,rgba(255,190,130,0.16),transparent_38rem)]" />
      <div className="section-shell relative">
        <SectionHeader
          eyebrow="How it works"
          title="使い方は、たった3ステップ"
          description="送る操作は肉球を押すだけ。あなたが選んだ動物が、ふたりで決めた合図をしぐさで届けます。"
          align="center"
        />

        <div className="premium-card-strong relative overflow-hidden p-3 sm:p-4 lg:p-5">
          <Image
            src={imageAssets.motionDivider}
            alt=""
            width={1536}
            height={1024}
            sizes="100vw"
            className="pointer-events-none absolute inset-x-0 top-[42%] hidden h-28 w-full object-cover opacity-20 lg:block"
          />
          <div className="relative grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-lg border border-[#f0d8c6] bg-white/90 p-4 shadow-[0_12px_30px_rgba(109,63,37,0.07)] backdrop-blur"
            >
              <div className="mb-4 flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#ff8f68] text-sm font-black text-white shadow-[0_8px_18px_rgba(240,122,82,0.24)]">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-black text-[#2b211b]">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm font-bold leading-6 text-[#8a4c2c]">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#fff7ec] shadow-inner">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className={`object-cover ${step.objectPosition} transition duration-500 hover:scale-[1.03]`}
                />
              </div>

              {index < steps.length - 1 ? (
                <ArrowRight
                  className="absolute -right-3 top-1/2 z-10 hidden h-7 w-7 rounded-full bg-white p-1 text-[#ff8f68] shadow-sm lg:block"
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
      </div>
    </section>
  );
}
