import { Footprints, PawPrint } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { animals } from "@/constants/animals";

export function AnimalSection() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Animals"
          title="相手ごとに、合図を届ける動物を選べる。"
          description="通知が来ると、その人が選んだ動物が走ってきます。肉球ボタンや足あとも、動物ごとに変える構想です。"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {animals.map((animal) => (
            <article
              key={animal.name}
              className="rounded-lg border border-[#efd8c6] bg-white/82 p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-4xl" aria-hidden="true">
                  {animal.icon}
                </span>
                <span className="rounded-md bg-[#fff0e6] px-2.5 py-1 text-xs font-bold text-[#8a4c2c]">
                  {animal.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#2b211b]">{animal.name}</h3>
              <p className="mt-3 text-sm leading-7 text-[#66564c]">
                {animal.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 rounded-lg border border-[#e6d6c9] bg-[#fffdf9] p-4 text-sm leading-7 text-[#66564c] sm:flex-row sm:items-center">
          <PawPrint className="h-5 w-5 shrink-0 text-[#9a5633]" aria-hidden="true" />
          <span>
            初期MVPでは犬のみになる可能性があります。猫、うさぎ、くまなどは需要を見ながら優先度を決めます。
          </span>
          <Footprints className="hidden h-5 w-5 shrink-0 text-[#315f52] sm:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
