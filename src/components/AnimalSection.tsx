import { Footprints, PawPrint } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { animals } from "@/constants/animals";

export function AnimalSection() {
  return (
    <section className="bg-[#fffdf9] px-5 py-14 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Animals"
          title="最初は犬。これから増える相棒たち。"
          description="初期段階では犬からスタート。将来的には、犬種の変更や、猫・うさぎ・くまなどの動物追加も検討中です。"
          align="center"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {animals.map((animal) => (
            <article
              key={animal.name}
              className="rounded-lg border border-[#efd8c6] bg-white p-5 text-center shadow-[0_10px_28px_rgba(109,63,37,0.06)]"
            >
              <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-full bg-[#fff0e6]">
                <span className="text-4xl" aria-hidden="true">
                  {animal.icon}
                </span>
              </div>
              <span className="rounded-md bg-[#fff0e6] px-2.5 py-1 text-xs font-bold text-[#8a4c2c]">
                {animal.status}
              </span>
              <h3 className="mt-3 text-xl font-black text-[#2b211b]">
                {animal.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#66564c]">
                {animal.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 rounded-lg border border-[#e6d6c9] bg-[#fff8ef] p-4 text-sm leading-7 text-[#66564c] sm:flex-row sm:items-center">
          <PawPrint className="h-5 w-5 shrink-0 text-[#9a5633]" aria-hidden="true" />
          <span>
            相手ごとに、合図を届ける動物を選べる体験を目指します。初期MVPでは犬のみになる可能性があります。
          </span>
          <Footprints className="hidden h-5 w-5 shrink-0 text-[#315f52] sm:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
