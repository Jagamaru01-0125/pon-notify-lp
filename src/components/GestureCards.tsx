import Image from "next/image";

import { SectionHeader } from "@/components/SectionHeader";
import { gestures } from "@/constants/gestures";

export function GestureCards() {
  return (
    <section className="bg-[#fffdf9] px-5 py-16 sm:px-8 lg:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="しぐさ"
          title="合図は、しぐさで届く"
          description="文字はつけても、つけなくてもOK。「帰るよ」「大丈夫？」みたいな意味も、ふたりで自由に変えられます。"
          align="center"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gestures.map((gesture) => (
            <article
              key={gesture.label}
              className="premium-card group overflow-hidden bg-white/90 p-3"
            >
              <div className="relative aspect-[1.08/1] overflow-hidden rounded-lg bg-[radial-gradient(circle_at_50%_34%,#fff7ed_0%,#fff2e3_48%,#ffffff_100%)]">
                <span className="absolute left-3 top-3 z-10 rounded-full bg-white/82 px-3 py-1 text-xs font-black text-[#9a5633] shadow-sm">
                  例
                </span>
                <Image
                  src={gesture.image}
                  alt={`${gesture.motion}犬の合図`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-center transition duration-500 group-hover:scale-[1.035]"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3 px-1">
                <div>
                  <p className="text-sm font-black text-[#9a5633]">
                    {gesture.motion}
                  </p>
                  <h3 className="mt-1 text-2xl font-black text-[#2b211b]">
                    例：{gesture.label}
                  </h3>
                </div>
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-xl ${gesture.tone}`}
                  aria-hidden="true"
                >
                  {gesture.icon}
                </span>
              </div>
              <p className="px-1 pt-3 text-sm font-medium leading-7 text-[#66564c]">
                {gesture.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-2xl rounded-full border border-[#efd8c6] bg-white/72 px-4 py-3 text-center text-xs font-bold leading-6 text-[#8a7669] shadow-sm">
          ※固定メッセージではなく表示例です。合図の文字や意味は、ふたりで自由に変えられます。
        </p>
      </div>
    </section>
  );
}
