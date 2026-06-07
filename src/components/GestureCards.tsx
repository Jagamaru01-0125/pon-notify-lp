import { SectionHeader } from "@/components/SectionHeader";
import { gestures } from "@/constants/gestures";

export function GestureCards() {
  return (
    <section className="bg-[#fffdf9] px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Gestures"
          title="使える合図の例"
          description="メッセージは主役ではなく、動物の動きに意味を添える短いラベルとして扱います。"
          align="center"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gestures.map((gesture) => (
            <article
              key={gesture.label}
              className="rounded-lg border border-[#efd8c6] bg-white p-5 shadow-[0_10px_28px_rgba(109,63,37,0.07)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[#9a5633]">{gesture.motion}</p>
                  <h3 className="mt-2 text-2xl font-bold text-[#2b211b]">
                    {gesture.label}
                  </h3>
                </div>
                <span
                  className={`grid h-14 w-14 shrink-0 place-items-center rounded-full text-2xl ${gesture.tone}`}
                >
                  {gesture.icon}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#66564c]">
                {gesture.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
