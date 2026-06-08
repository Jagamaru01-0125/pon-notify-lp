import Image from "next/image";
import {
  BellOff,
  Link2Off,
  MapPinOff,
  ShieldCheck,
  UserRoundX,
  UsersRound,
} from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { imageAssets } from "@/constants/assets";

const safetyItems = [
  { label: "最初は親しい1人だけ", icon: UsersRound },
  { label: "チャットなし", icon: Link2Off },
  { label: "通知オン/オフ", icon: BellOff },
  { label: "ペア解除", icon: UserRoundX },
  { label: "ブロック", icon: ShieldCheck },
  { label: "位置情報は初期MVPでは使いません", icon: MapPinOff },
] as const;

export function SafetySection() {
  return (
    <section className="bg-[#fffdf9] px-5 py-14 sm:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Safety"
            title="親しい人と、安心して使えるように"
            description="安心設計は大事にしながら、重く見せすぎない。親しい人へ小さな合図を届けるために必要な範囲だけを検証します。"
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {safetyItems.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-lg border border-[#d9e9e3] bg-[#f7fffb] px-4 py-4 shadow-[0_8px_20px_rgba(49,95,82,0.05)]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#dceee8] text-[#315f52]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="font-bold leading-7 text-[#33423d]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-[#d9e9e3] bg-[#f7fffb] p-4 shadow-[0_16px_42px_rgba(49,95,82,0.08)]">
          <Image
            src={imageAssets.safetyIcons}
            alt="チャットなし、通知設定、ペア解除、位置情報なしなど安心設計を表すアイコン"
            width={1536}
            height={1024}
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="h-auto w-full rounded-lg object-cover"
          />
          <p className="mt-4 rounded-lg bg-white/78 px-4 py-3 text-sm font-bold leading-7 text-[#315f52]">
            初期LPでは、Push通知・Watch本実装・ロック画面ウィジェット本実装・ログイン・課金はまだ扱いません。
          </p>
        </div>
      </div>
    </section>
  );
}
