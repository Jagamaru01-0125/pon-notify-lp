import {
  MapPinOff,
  MessageCircleOff,
  PawPrint,
  Smartphone,
  UserRoundCheck,
  Watch,
} from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";

const solutions = [
  { label: "Apple Watchから送る", icon: Watch },
  { label: "ロック画面から送る", icon: Smartphone },
  { label: "親しい1人に送る", icon: UserRoundCheck },
  { label: "動物のジェスチャーで伝える", icon: PawPrint },
  { label: "短いラベルで意味が分かる", icon: PawPrint },
  { label: "チャットなし", icon: MessageCircleOff },
  { label: "位置情報なし", icon: MapPinOff },
];

export function SolutionSection() {
  return (
    <section className="noise px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeader
          eyebrow="Solution"
          title="肉球ボタンを押すだけで、合図が届く。"
          description="メッセージを作る前に、まず合図だけを渡す。送る操作も、受け取る体験も軽くします。"
        />

        <div className="grid gap-3 sm:grid-cols-2">
          {solutions.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-lg border border-[#edd5c3] bg-white/84 px-4 py-4"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#dceee8] text-[#315f52]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-bold leading-7 text-[#3a2b24]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
