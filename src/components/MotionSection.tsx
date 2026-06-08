import Image from "next/image";
import { ArrowRight, MessageCircleOff, PawPrint } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { imageAssets } from "@/constants/assets";

const flowItems = [
  {
    label: "肉球ボタン",
    image: imageAssets.watchPawTap,
    alt: "Apple Watchの肉球ボタンを押す様子",
  },
  {
    label: "動物が走る",
    image: imageAssets.dogRunning,
    alt: "小さな犬が走る様子",
  },
  {
    label: "しぐさで届く",
    image: imageAssets.receiveDevices,
    alt: "スマホとApple Watchに犬の合図が届く様子",
  },
] as const;

export function MotionSection() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:py-24">
      <div className="section-shell premium-card-strong grid gap-8 overflow-hidden p-5 sm:p-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:p-8">
        <div>
          <SectionHeader
            eyebrow="Motion"
            title="届くのは、メッセージじゃなくて、あなたたちだけの合図。"
            description="動物が走ってきたり、しっぽを振ったり、前足でちょんちょんしたり。そのしぐさに、どんな意味を込めるかはふたり次第。もちろん、必要なら短い文字を添えることもできます。"
          />
          <div className="inline-flex items-center gap-2 rounded-full bg-[#fff0e6] px-4 py-2 text-sm font-bold text-[#7a482b]">
            <MessageCircleOff className="h-4 w-4" aria-hidden="true" />
            メッセージではなく、ふたりだけの合図
          </div>
          <div className="mt-5 grid gap-2 text-sm font-bold text-[#7a482b]">
            {["文字なしでも伝わる", "短い文字は添えられる", "意味はふたりで決められる"].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <PawPrint className="h-4 w-4 text-[#f07945]" aria-hidden="true" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-[#efd8c6] bg-white/90 p-4 shadow-[0_16px_42px_rgba(109,63,37,0.08)]">
          <Image
            src={imageAssets.motionDivider}
            alt=""
            width={1536}
            height={1024}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="pointer-events-none absolute inset-x-0 top-1/2 h-28 w-full -translate-y-1/2 object-cover opacity-30"
          />

          <div className="relative z-10 grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
            {flowItems.map((item, index) => (
              <div key={item.label} className="contents">
                <div className="rounded-lg bg-[#fff8ef]/95 p-3 text-center shadow-sm">
                  <p className="mb-2 text-xs font-black text-[#7a482b]">
                    {item.label}
                  </p>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 18vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                {index < flowItems.length - 1 ? (
                  <ArrowRight
                    className="mx-auto hidden h-7 w-7 rounded-full bg-white p-1 text-[#ff8f68] shadow-sm sm:block"
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
