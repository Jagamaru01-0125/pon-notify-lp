import Image from "next/image";
import { HeartHandshake, MessageCircleOff, PencilLine, TimerReset } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { imageAssets } from "@/constants/assets";

const reasons = [
  { label: "ふたりだけの意味で使える", icon: HeartHandshake },
  { label: "文字なしでも伝わる", icon: MessageCircleOff },
  { label: "短い文字も添えられる", icon: PencilLine },
  { label: "返信を求めすぎない", icon: TimerReset },
] as const;

export function ReasonSection() {
  return (
    <section className="px-5 py-14 sm:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative min-h-[25rem] overflow-hidden rounded-lg border border-[#efd8c6] bg-[#fff8ef] shadow-[0_16px_42px_rgba(109,63,37,0.08)]">
          <Image
            src={imageAssets.roomBackground}
            alt=""
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-center opacity-[0.86]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,239,0.08)_0%,rgba(255,248,239,0.76)_100%)]" />
          <Image
            src={imageAssets.dogSleeping}
            alt="丸まって休む小さな犬"
            width={1024}
            height={1024}
            sizes="(min-width: 1024px) 22vw, 70vw"
            className="dog-float absolute bottom-2 right-2 w-52 max-w-[62%] sm:w-64"
          />
        </div>

        <div>
          <SectionHeader
            eyebrow="Light signal"
            title="言葉にしない、ふたりの合図で届く"
            description="「これが来たら、帰ってくる合図」「このしぐさは、ちょっと気にしてる合図」「ハートをくわえてきたら、思い出したってこと」。そんなふたりだけの意味を、動物たちのしぐさに込めて送れます。"
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-lg border border-[#efd8c6] bg-white px-4 py-4 shadow-[0_8px_22px_rgba(109,63,37,0.05)]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#ffeaf0] text-[#9b4d66]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="font-bold leading-7 text-[#3a2b24]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
