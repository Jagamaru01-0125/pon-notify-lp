import {
  BellOff,
  Link2Off,
  MapPinned,
  ShieldCheck,
  UserCheck,
  UserRoundX,
  UsersRound,
} from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";

const safetyItems = [
  { label: "初期MVPでは親しい1人だけ", icon: UsersRound },
  { label: "チャットなし", icon: Link2Off },
  { label: "位置情報なし", icon: ShieldCheck },
  { label: "通知のオン/オフ", icon: BellOff },
  { label: "ペア解除", icon: UserRoundX },
  { label: "ブロック", icon: UserRoundX },
  { label: "相手の同意を前提にしたペア登録", icon: UserCheck },
  { label: "位置情報を使う場合も明確な同意が前提", icon: ShieldCheck },
];

export function SafetySection() {
  return (
    <section className="bg-[#fffdf9] px-5 py-14 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Safety"
          title="位置情報なし。チャットなし。親しい1人だけ。"
          description="最初から何でもできるアプリにせず、軽い合図に必要な範囲だけを検証します。"
          align="center"
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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

        <div className="mt-5 grid gap-4 rounded-lg border border-[#efd8c6] bg-[#fff8ef] p-5 sm:grid-cols-[auto_1fr] sm:items-center">
          <div className="grid h-20 w-20 place-items-center rounded-lg bg-white text-[#f07945] shadow-sm">
            <MapPinned className="h-9 w-9" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg font-black text-[#2b211b]">
              将来的な場所の合図は、同意した相手だけ。
            </h3>
            <p className="mt-2 text-sm leading-7 text-[#66564c]">
              将来的には、犬が小さな地図メモをくわえて走ってくるような、安心感のある表現も検討中です。
              初期MVPでは位置情報を使いません。使う場合も、明確な同意、オン/オフ、相手ごとの許可を前提にします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
