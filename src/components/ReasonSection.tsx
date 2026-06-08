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
    <section className="px-5 py-16 sm:px-8 lg:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="premium-card-strong relative min-h-[26rem] overflow-hidden bg-[#fff8ef]">
          <Image
            src={imageAssets.roomBackground}
            alt=""
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-center opacity-[0.86]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,239,0.12)_0%,rgba(255,248,239,0.78)_100%)]" />
          <div className="absolute inset-x-5 bottom-5 rounded-lg border border-[#efd8c6] bg-white/86 p-5 text-sm font-bold leading-8 text-[#7a482b] shadow-[0_14px_30px_rgba(109,63,37,0.1)] backdrop-blur">
            <p>「このしぐさは、気にしてる合図」</p>
            <p>「ハートなら、思い出したってこと」</p>
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow="ふたりの意味"
            title="言葉にしない、ふたりの合図で届く"
            description="そのしぐさにどんな意味を込めるかは、ふたり次第。言葉にしなくても分かる小さな合図を、動物たちに託せます。"
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex min-h-24 items-center gap-3 rounded-lg border border-[#efd8c6] bg-white/88 px-4 py-4 shadow-[0_8px_22px_rgba(109,63,37,0.05)]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#ffeaf0] text-[#9b4d66] shadow-sm">
                  <Icon className="h-5 w-5" aria-hidden="true" />
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
