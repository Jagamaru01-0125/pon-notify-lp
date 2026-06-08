import Image from "next/image";

import { SectionHeader } from "@/components/SectionHeader";
import { gestures } from "@/constants/gestures";

export function GestureCards() {
  return (
    <section className="bg-[#fffdf9] px-5 py-14 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Gestures"
          title="合図は、しぐさで届く"
          description="文字はつけても、つけなくてもOK。「帰るよ」「大丈夫？」みたいな意味も、ふたりで自由に変えられます。"
          align="center"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gestures.map((gesture) => (
            <article
              key={gesture.label}
              className="rounded-lg border border-[#efd8c6] bg-white p-4 shadow-[0_10px_28px_rgba(109,63,37,0.07)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#fff7ec]">
                <Image
                  src={gesture.image}
                  alt={`${gesture.motion}犬の合図`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-black text-[#9a5633]">
                    {gesture.motion}
                  </p>
                  <h3 className="mt-1 text-2xl font-black text-[#2b211b]">
                    例 {gesture.label}
                  </h3>
                </div>
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-xl ${gesture.tone}`}
                  aria-hidden="true"
                >
                  {gesture.icon}
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-[#66564c]">
                {gesture.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-center text-xs font-bold leading-6 text-[#8a7669]">
          ※表示例です。合図の文字や意味は、ふたりで自由に設定できる想定です。
        </p>
      </div>
    </section>
  );
}
