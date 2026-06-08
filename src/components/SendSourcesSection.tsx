import Image from "next/image";
import { Settings2, Smartphone, Watch } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { imageAssets } from "@/constants/assets";

const sendSources = [
  {
    title: "Apple Watch / スマートウォッチ",
    description: "腕からすぐに、ふたりの合図を送れる",
    detail: "手元の肉球を押すだけ。言葉にする前の気持ちを、すぐに届けられます。",
    icon: Watch,
    image: imageAssets.watchPawTap,
    alt: "Apple Watchの肉球ボタンを指で押している様子",
    size: "large",
  },
  {
    title: "ロック画面ウィジェット",
    description: "スマホを開かずに、肉球だけ押せる",
    detail: "アプリを探さなくても、ロック画面の肉球からそのまま合図を送れます。",
    icon: Smartphone,
    image: imageAssets.lockscreenWidget,
    alt: "ロック画面に肉球ウィジェットが表示されているスマホ",
    size: "large",
  },
  {
    title: "スマホアプリ",
    description: "相手登録や、合図の意味をカスタマイズ",
    detail: "相手や合図の意味を整える場所。送る瞬間の主役は、腕とロック画面です。",
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
      <div className="section-shell">
        <SectionHeader
          eyebrow="送れる場所"
          title="どこから送れる？"
          description="スマホを開く前に、合図だけをそっと送れるように。主役はApple Watchとロック画面の肉球です。"
          align="center"
        />

        <div className="grid gap-4 lg:grid-cols-[1.15fr_1fr] lg:items-stretch">
          {sendSources.slice(0, 2).map(({ title, description, detail, icon: Icon, image, alt }, index) => (
            <article
              key={title}
              className="premium-card relative overflow-hidden bg-white/88 p-5"
            >
              <div className="mb-4 flex items-center gap-2 text-sm font-black text-[#8a4c2c]">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#fff0e6] text-[#f07945]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {description}
              </div>

              <div
                className={`relative mb-5 grid place-items-center overflow-hidden rounded-lg bg-[#fff7ec] shadow-inner ${
                  index === 0 ? "min-h-72" : "min-h-64"
                }`}
              >
                <Image
                  src={image ?? imageAssets.watchPawTap}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-center"
                />
              </div>

              <h3 className="text-xl font-black leading-8 text-[#2b211b]">
                {title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-7 text-[#66564c]">
                {detail}
              </p>
            </article>
          ))}

          <article className="premium-card flex flex-col justify-between gap-5 bg-white/72 p-5 lg:col-span-2 lg:grid lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-black text-[#8a4c2c]">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#fff0e6] text-[#f07945]">
                  <Settings2 className="h-4 w-4" aria-hidden="true" />
                </span>
                {sendSources[2].description}
              </div>
              <h3 className="text-xl font-black leading-8 text-[#2b211b]">
                {sendSources[2].title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-7 text-[#66564c]">
                {sendSources[2].detail}
              </p>
            </div>
            <div className="rounded-lg border border-[#efd8c6] bg-[#fff8ef]/78 p-5">
              <PhoneSettingsMock />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
