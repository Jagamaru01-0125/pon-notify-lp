import Image from "next/image";
import { PawPrint } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { animals } from "@/constants/animals";
import { imageAssets } from "@/constants/assets";

export function AnimalSection() {
  return (
    <section className="bg-[#fffdf9] px-5 py-14 sm:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Animals"
            title="最初は犬。これから増える相棒たち"
            description="まずは犬から。将来的には猫、うさぎ、くまなど、相手や関係性に合わせて“合図を届ける動物”を選べる体験も検討しています。"
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {animals.map((animal, index) => (
              <div
                key={animal.name}
                className="rounded-lg border border-[#efd8c6] bg-white px-4 py-4 shadow-[0_8px_22px_rgba(109,63,37,0.05)]"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#fff0e6] text-lg">
                    {animal.icon}
                  </span>
                  <div>
                    <p className="font-black text-[#2b211b]">{animal.name}</p>
                    <p className="text-xs font-bold text-[#9a5633]">
                      {index === 0 ? "初期MVPの主役" : animal.status}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 flex items-start gap-2 rounded-lg border border-[#e6d6c9] bg-[#fff8ef] p-4 text-sm leading-7 text-[#66564c]">
            <PawPrint
              className="mt-1 h-5 w-5 shrink-0 text-[#9a5633]"
              aria-hidden="true"
            />
            初期MVPは犬を中心に進めます。ただしLPの世界観としては、動物たちがふたりだけの合図を届ける体験として見せます。
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-[#efd8c6] bg-white shadow-[0_16px_42px_rgba(109,63,37,0.08)]">
          <Image
            src={imageAssets.animalsLineup}
            alt="犬、猫、うさぎ、くまの相棒候補のラインアップ"
            width={1536}
            height={1024}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
