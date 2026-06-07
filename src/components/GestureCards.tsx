import { SectionHeader } from "@/components/SectionHeader";
import { gestures } from "@/constants/gestures";

export function GestureCards() {
  return (
    <section className="bg-[#fffdf9] px-5 py-14 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Gestures"
          title="届けられる合図"
          description="主役は犬の動き。短い言葉は、ジェスチャーの意味を少し添えるラベルです。"
          align="center"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gestures.map((gesture) => (
            <article
              key={gesture.label}
              className="rounded-lg border border-[#efd8c6] bg-white p-4 shadow-[0_10px_28px_rgba(109,63,37,0.07)]"
            >
              <div className="grid min-h-36 place-items-center rounded-lg bg-[#fff7ec]">
                <span
                  className={`grid h-20 w-20 place-items-center rounded-full text-4xl ${gesture.tone}`}
                  aria-hidden="true"
                >
                  {gesture.icon}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-sm font-black text-[#9a5633]">
                  {gesture.motion}
                </p>
                <h3 className="mt-1 text-2xl font-black text-[#2b211b]">
                  {gesture.label}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-[#66564c]">
                {gesture.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
