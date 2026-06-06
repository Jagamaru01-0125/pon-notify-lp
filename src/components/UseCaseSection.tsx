import { SectionHeader } from "@/components/SectionHeader";
import { useCases } from "@/constants/useCases";

export function UseCaseSection() {
  return (
    <section className="bg-[#fffdf9] px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Scenes"
          title="使うシーン"
          description="相手との距離が近いほど、軽い合図だけで十分な場面があります。"
          align="center"
        />

        <div className="grid gap-4 md:grid-cols-3">
          {useCases.map((useCase) => (
            <article
              key={useCase.audience}
              className="rounded-lg border border-[#efd8c6] bg-white p-6 shadow-[0_10px_28px_rgba(109,63,37,0.07)]"
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-full bg-[#fff0e6] text-3xl">
                {useCase.icon}
              </div>
              <p className="text-sm font-bold text-[#9a5633]">{useCase.audience}</p>
              <h3 className="mt-2 text-xl font-bold leading-8 text-[#2b211b]">
                {useCase.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#66564c]">
                {useCase.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
