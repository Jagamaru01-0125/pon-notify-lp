import { ArrowRight, MessageCircleOff } from "lucide-react";

import { PawButton } from "@/components/PawButton";
import { SectionHeader } from "@/components/SectionHeader";

export function MotionSection() {
  return (
    <section className="px-5 py-14 sm:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-lg border border-[#efd8c6] bg-white/90 p-5 shadow-[0_16px_42px_rgba(109,63,37,0.08)] sm:p-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Motion"
            title="合図は、メッセージではなく動きで届く。"
            description="小さな犬が走ってきたり、しっぽを振ったり、前足でちょんちょんしたり。言葉にするほどではない気持ちを、動物のジェスチャーでそっと届けます。文字は、意味を少し添えるだけ。"
          />
          <div className="inline-flex items-center gap-2 rounded-full bg-[#fff0e6] px-3 py-2 text-sm font-bold text-[#7a482b]">
            <MessageCircleOff className="h-4 w-4" aria-hidden="true" />
            チャットを増やさず、合図だけ
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-[0.8fr_auto_1fr_auto_0.9fr] sm:items-center">
          <div className="rounded-lg bg-[#11100f] p-4 text-center text-white">
            <p className="mb-3 text-xs font-bold text-[#ffe0a9]">肉球をタップ</p>
            <PawButton label="ぽん" size="md" className="mx-auto" />
          </div>
          <ArrowRight
            className="mx-auto hidden h-6 w-6 text-[#ff8f68] sm:block"
            aria-hidden="true"
          />
          <div className="rounded-lg bg-[#fff3e8] p-4 text-center">
            <p className="mb-3 text-xs font-bold text-[#7a482b]">犬が走る</p>
            <span className="dog-dash inline-block text-6xl" aria-hidden="true">
              🐕
            </span>
          </div>
          <ArrowRight
            className="mx-auto hidden h-6 w-6 text-[#ff8f68] sm:block"
            aria-hidden="true"
          />
          <div className="rounded-lg bg-[#eef4ee] p-4 text-center">
            <p className="mb-3 text-xs font-bold text-[#315f52]">
              ジェスチャーで届く
            </p>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <span className="text-5xl" aria-hidden="true">
                🐶
              </span>
              <p className="mt-2 rounded-full bg-[#fff0e6] px-3 py-1 text-xs font-bold text-[#7a482b]">
                大丈夫？
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
