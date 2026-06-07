import { BellOff, Link2Off, ShieldCheck, UserCheck, UserRoundX, UsersRound } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";

const safetyItems = [
  { label: "初期MVPでは位置情報を使わない", icon: ShieldCheck },
  { label: "チャット機能は入れない", icon: Link2Off },
  { label: "複数相手やグループ機能は後回し", icon: UsersRound },
  { label: "通知のオン/オフ", icon: BellOff },
  { label: "ペア解除", icon: UserRoundX },
  { label: "ブロック", icon: UserRoundX },
  { label: "相手の同意を前提にしたペア登録", icon: UserCheck },
];

export function SafetySection() {
  return (
    <section className="bg-[#fffdf9] px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Safety"
          title="位置情報なし。チャットなし。親しい1人だけ。"
          description="最初から何でもできるアプリにせず、軽い合図に必要な範囲だけを検証します。"
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {safetyItems.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-lg border border-[#d9e9e3] bg-[#f7fffb] px-4 py-4"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#dceee8] text-[#315f52]">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="font-bold leading-7 text-[#33423d]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
