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
    <section className="bg-[#fffdf9] px-5 py-14 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="How it works"
          title="使い方は、たった3ステップ"
          description="送る操作は肉球を押すだけ。あなたが選んだ動物が、ふたりで決めた合図をしぐさで届けます。"
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
                <h3 className="text-xl font-black text-[#2b211b]">
                  {step.title}
                </h3>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#fff7ec]">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className={`object-cover ${step.objectPosition}`}
                />
              </div>

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
