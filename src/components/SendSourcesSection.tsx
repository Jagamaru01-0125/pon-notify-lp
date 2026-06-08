import Image from "next/image";
import { PawPrint, Settings2, Smartphone, Watch } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { imageAssets } from "@/constants/assets";

const sendSources = [
  {
    title: "Apple Watch / スマートウォッチ",
    description: "腕からすぐに、ふたりの合図を送れる",
    detail: "移動中や家事の途中でも、肉球を押すだけで、ふたりで決めた合図を送る体験を想定しています。",
    icon: Watch,
    image: imageAssets.watchPawTap,
    alt: "Apple Watchの肉球ボタンを指で押している様子",
    size: "large",
  },
  {
    title: "ロック画面ウィジェット",
    description: "スマホを開かずに、肉球だけ押せる",
    detail: "アプリを探さず、ロック画面の肉球ボタンからすぐに送れる未来を検証します。",
    icon: Smartphone,
    image: imageAssets.lockscreenWidget,
    alt: "ロック画面に肉球ウィジェットが表示されているスマホ",
    size: "large",
  },
  {
    title: "スマホアプリ",
    description: "相手登録や、合図の意味をカスタマイズ",
    detail: "主役はWatchやロック画面。スマホアプリは相手登録や合図の意味を変えるための補助画面です。",
    icon: Settings2,
    image: null,
    alt: "",
    size: "small",
  },
] as const;

function PhoneSettingsMock() {
  return (
    <div className="mx-auto w-32 rounded-lg border border-[#ead6c6] bg-[#fffaf3] p-3 text-left shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-[#ffb58d] text-white">
          <Settings2 className="h-4 w-4" aria-hidden="true" />
        </span>
        <div className="h-2 w-14 rounded-full bg-[#d7bba7]" />
      </div>
      <div className="mb-2 h-2 rounded-full bg-[#f1d8c8]" />
      <div className="mb-2 h-2 w-20 rounded-full bg-[#f1d8c8]" />
      <div className="mb-3 h-8 rounded-lg bg-white shadow-inner" />
      <div className="h-7 rounded-lg bg-[#ff8f68]" />
    </div>
  );
}

export function SendSourcesSection() {
  return (
    <section className="noise px-5 py-16 sm:px-8 lg:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Send from"
          title="どこから送れる？"
          description="主役はApple Watchやスマートウォッチ。ロック画面からも、スマホを開かずに肉球だけ押せる構想です。"
          align="center"
        />

        <div className="grid gap-4 lg:grid-cols-[1.08fr_1.08fr_0.84fr]">
          {sendSources.map(({ title, description, detail, icon: Icon, image, alt, size }) => (
            <article
              key={title}
              className={`premium-card relative overflow-hidden p-5 ${
                size === "small" ? "bg-white/80" : "bg-white/90"
              }`}
            >
              {size === "large" ? (
                <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-[#fff0e6] px-3 py-1 text-xs font-black text-[#9a5633]">
                  <PawPrint className="h-3.5 w-3.5" aria-hidden="true" />
                  主役
                </span>
              ) : null}

              <div className="mb-4 flex items-center gap-2 pr-16 text-sm font-black text-[#8a4c2c]">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#fff0e6] text-[#f07945]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {description}
              </div>

              <div
                className={`relative mb-4 grid place-items-center overflow-hidden rounded-lg bg-[#fff7ec] shadow-inner ${
                  size === "small" ? "min-h-44" : "min-h-60"
                }`}
              >
                {image ? (
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={
                      size === "large"
                        ? "object-cover object-center"
                        : "object-contain"
                    }
                  />
                ) : (
                  <PhoneSettingsMock />
                )}
              </div>

              <h3 className="text-xl font-black leading-8 text-[#2b211b]">
                {title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-7 text-[#66564c]">
                {detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
