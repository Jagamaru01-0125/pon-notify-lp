import { Settings2, Smartphone, Watch } from "lucide-react";

import { PawButton } from "@/components/PawButton";
import { SectionHeader } from "@/components/SectionHeader";

const sendSources = [
  {
    title: "Apple Watch / スマートウォッチ",
    description: "腕からすぐ送れる",
    detail: "手がふさがっていても、親しい相手へワンタップ。",
    icon: Watch,
    tone: "bg-[#11100f] text-[#ffe0a9]",
  },
  {
    title: "ロック画面ウィジェット",
    description: "スマホを開かずに送れる",
    detail: "Apple Watchを持っていない人にも伝わる入口に。",
    icon: Smartphone,
    tone: "bg-[#e9f6ef] text-[#315f52]",
  },
  {
    title: "スマホアプリ",
    description: "相手登録や設定をする",
    detail: "合図の相手、通知、動物の設定を補助する画面。",
    icon: Settings2,
    tone: "bg-[#fff0e6] text-[#8a4c2c]",
  },
] as const;

export function SendSourcesSection() {
  return (
    <section className="noise px-5 py-14 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Send from"
          title="どこから送れる？"
          description="主役はApple Watchやスマートウォッチ。スマホのロック画面ウィジェットからも、肉球ボタンで送れる構想です。"
          align="center"
        />

        <div className="grid gap-4 md:grid-cols-3">
          {sendSources.map(({ title, description, detail, icon: Icon, tone }) => (
            <article
              key={title}
              className="rounded-lg border border-[#efd8c6] bg-white/90 p-5 shadow-[0_12px_30px_rgba(109,63,37,0.08)]"
            >
              <div className={`mb-4 flex min-h-36 items-center justify-center rounded-lg ${tone}`}>
                <div className="text-center">
                  <Icon className="mx-auto mb-3 h-7 w-7" aria-hidden="true" />
                  {title.includes("スマホアプリ") ? (
                    <div className="mx-auto w-24 rounded-lg bg-white p-3 text-left text-[#7a482b] shadow-sm">
                      <div className="mb-2 h-2 w-10 rounded-full bg-[#ffb58d]" />
                      <div className="mb-2 h-2 rounded-full bg-[#f1d8c8]" />
                      <div className="mb-2 h-2 rounded-full bg-[#f1d8c8]" />
                      <div className="h-2 w-14 rounded-full bg-[#f1d8c8]" />
                    </div>
                  ) : (
                    <PawButton label="ぽん" size="sm" className="mx-auto" />
                  )}
                </div>
              </div>
              <h3 className="text-lg font-black leading-7 text-[#2b211b]">
                {title}
              </h3>
              <p className="mt-2 text-base font-bold text-[#f07945]">
                {description}
              </p>
              <p className="mt-3 text-sm leading-7 text-[#66564c]">{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
