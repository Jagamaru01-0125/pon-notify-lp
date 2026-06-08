import Image from "next/image";
import { Settings2, Smartphone, Watch } from "lucide-react";

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
    <section className="noise px-5 py-14 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Send from"
          title="どこから送れる？"
          description="主役はApple Watchやスマートウォッチ。ロック画面からも、スマホを開かずに肉球だけ押せる構想です。"
          align="center"
        />

        <div className="grid gap-4 md:grid-cols-3">
          {sendSources.map(({ title, description, detail, icon: Icon, image, alt, size }) => (
            <article
              key={title}
              className="rounded-lg border border-[#efd8c6] bg-white/92 p-5 shadow-[0_12px_30px_rgba(109,63,37,0.08)]"
            >
              <div className="mb-4 flex items-center gap-2 text-sm font-bold text-[#8a4c2c]">
                <Icon className="h-4 w-4" aria-hidden="true" />
                {description}
              </div>

              <div className="relative mb-4 grid min-h-52 place-items-center overflow-hidden rounded-lg bg-[#fff7ec]">
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

              <h3 className="text-lg font-black leading-7 text-[#2b211b]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#66564c]">{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
