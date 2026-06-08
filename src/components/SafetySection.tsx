import {
  BellOff,
  Link2Off,
  MapPinOff,
  ShieldCheck,
  UserRoundX,
  UsersRound,
} from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";

const safetyItems = [
  { label: "最初は親しい1人だけ", icon: UsersRound },
  { label: "チャットなし", icon: Link2Off },
  { label: "通知オン/オフ", icon: BellOff },
  { label: "ペア解除", icon: UserRoundX },
  { label: "ブロック", icon: ShieldCheck },
  { label: "位置情報は使いません", icon: MapPinOff },
] as const;

export function SafetySection() {
  return (
    <section className="bg-[#fffdf9] px-5 py-14 sm:px-8 lg:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            eyebrow="安心設計"
            title="親しい人と、安心して使えるように"
            description="小さな合図だからこそ、届く相手は近い人だけに。気軽さと安心感のバランスを大切にします。"
            align="center"
          />
        </div>

        <div className="premium-card-strong bg-[#fbfffc] p-4 sm:p-5">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {safetyItems.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex min-h-20 items-center gap-3 rounded-lg border border-[#d9e9e3] bg-white/78 px-4 py-4 shadow-[0_8px_20px_rgba(49,95,82,0.04)]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#dceee8] text-[#315f52] shadow-sm">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-bold leading-7 text-[#33423d]">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 rounded-lg bg-white/70 px-4 py-3 text-xs font-bold leading-6 text-[#315f52]">
            ぽん通知は開発準備中です。位置情報共有、チャット、ログイン、課金機能はこのLPでは扱いません。
          </p>
        </div>
      </div>
    </section>
  );
}
