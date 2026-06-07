import {
  CheckCircle2,
  MessageCircleOff,
  PhoneOff,
  ShieldCheck,
  Smartphone,
  TimerReset,
} from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";

const reasons = [
  { label: "文章を考えなくていい", icon: MessageCircleOff },
  { label: "電話ほど強くない", icon: PhoneOff },
  { label: "返信を求めない", icon: TimerReset },
  { label: "親しい相手にだけ届く", icon: ShieldCheck },
  { label: "LINEを開く前の軽い合図に", icon: CheckCircle2 },
  { label: "スマホを開かなくてもいい", icon: Smartphone },
  { label: "チャットを増やさない", icon: MessageCircleOff },
];

export function ReasonSection() {
  return (
    <section className="px-5 py-14 sm:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeader
          eyebrow="Light signal"
          title="親しい人に、軽く届ける。"
          description="連絡というより、そっと合図を置く感覚。文章を打つ前の気持ちを、犬のジェスチャーで渡します。"
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
              <span className="font-bold leading-7 text-[#3a2b24]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
