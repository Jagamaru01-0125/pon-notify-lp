import Image from "next/image";
import { ArrowRight, MessageCircleOff, PawPrint } from "lucide-react";

import { PawButton } from "@/components/PawButton";
import { SectionHeader } from "@/components/SectionHeader";
import { imageAssets } from "@/constants/assets";

export function MotionSection() {
  return (
    <section className="px-5 py-14 sm:px-8 lg:py-20">
      <div className="section-shell premium-card-strong grid gap-8 overflow-hidden p-5 sm:p-7 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:p-9">
        <div>
          <SectionHeader
            eyebrow="届き方"
            title="届くのは、メッセージじゃなくて、あなたたちだけの合図。"
            description="動物が走る、しっぽを振る、前足でちょんちょんする。そのしぐさにどんな意味を込めるかは、ふたりで決められます。"
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

        <div className="relative min-h-[22rem] overflow-hidden rounded-lg border border-[#efd8c6] bg-[linear-gradient(135deg,#fffaf4_0%,#fff1e5_55%,#fffdf9_100%)] p-5 shadow-[0_16px_42px_rgba(109,63,37,0.08)]">
          <Image
            src={imageAssets.motionDivider}
            alt=""
            width={1536}
            height={1024}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="pointer-events-none absolute inset-x-0 top-1/2 h-32 w-full -translate-y-1/2 object-cover opacity-[0.24]"
          />

          <div className="relative z-10 grid min-h-[20rem] gap-5 sm:grid-cols-[0.72fr_auto_1fr_auto_0.9fr] sm:items-center">
            <div className="grid place-items-center rounded-lg bg-white/72 p-5 shadow-sm">
              <PawButton label="ぽん" size="md" />
              <p className="mt-4 text-sm font-black text-[#7a482b]">肉球を押す</p>
            </div>

            <ArrowRight
              className="mx-auto hidden h-7 w-7 rounded-full bg-white p-1 text-[#ff8f68] shadow-sm sm:block"
              aria-hidden="true"
            />

            <div className="relative min-h-52 overflow-hidden rounded-lg bg-white/46">
              <Image
                src={imageAssets.dogRunning}
                alt="合図を届けに走る犬"
                fill
                sizes="(min-width: 1024px) 28vw, 100vw"
                className="object-cover object-center"
              />
              <p className="absolute left-4 top-4 rounded-full bg-white/86 px-3 py-1 text-xs font-black text-[#7a482b] shadow-sm">
                動物が走る
              </p>
            </div>

            <ArrowRight
              className="mx-auto hidden h-7 w-7 rounded-full bg-white p-1 text-[#ff8f68] shadow-sm sm:block"
              aria-hidden="true"
            />

            <div className="relative min-h-52 overflow-hidden rounded-lg bg-white/70">
              <Image
                src={imageAssets.receiveDevices}
                alt="相手のスマホとApple Watchに犬のしぐさが届く様子"
                fill
                sizes="(min-width: 1024px) 22vw, 100vw"
                className="object-cover object-center"
              />
              <p className="absolute bottom-4 left-4 rounded-full bg-white/86 px-3 py-1 text-xs font-black text-[#7a482b] shadow-sm">
                しぐさで届く
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
