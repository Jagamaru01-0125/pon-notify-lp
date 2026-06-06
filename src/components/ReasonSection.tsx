import {
  CheckCircle2,
  MapPinOff,
  MessageCircleOff,
  PhoneOff,
  Smartphone,
  TimerReset,
} from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";

const reasons = [
  { label: "LINEより軽い", icon: CheckCircle2 },
  { label: "電話より弱い", icon: PhoneOff },
  { label: "既読や返信の圧が少ない", icon: TimerReset },
  { label: "文章を考えなくていい", icon: MessageCircleOff },
  { label: "スマホを開かなくてもいい", icon: Smartphone },
  { label: "チャットを増やさない", icon: MessageCircleOff },
  { label: "位置情報を送らない", icon: MapPinOff },
];

export function ReasonSection() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeader
          eyebrow="Why not chat"
          title="メッセージではなく、合図だから軽い。"
          description="チャットを増やすほどではない瞬間に、動物のジェスチャーだけが届く余白を作ります。"
        />

        <div className="grid gap-3 sm:grid-cols-2">
          {reasons.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-lg border border-[#efd8c6] bg-white/84 px-4 py-4"
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
