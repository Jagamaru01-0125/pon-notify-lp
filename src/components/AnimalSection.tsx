import Image from "next/image";
import { PawPrint } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { animals } from "@/constants/animals";
import { imageAssets } from "@/constants/assets";

export function AnimalSection() {
  return (
    <section className="bg-[#fffdf9] px-5 py-16 sm:px-8 lg:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="相棒"
            title="最初は犬。これから増える相棒たち"
            description="まずは犬から。走る、しっぽを振る、前足でちょんちょん。関係性に合う相棒を選べる楽しさも、少しずつ広げていきます。"
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {animals.map((animal, index) => (
              <div
                key={animal.name}
                className={`rounded-lg border px-4 py-4 shadow-[0_8px_22px_rgba(109,63,37,0.05)] ${
                  index === 0
                    ? "border-[#f0c5a8] bg-[#fff3e7]"
                    : "border-[#efd8c6] bg-white/82"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-lg shadow-sm">
                    {animal.icon}
                  </span>
                  <div>
                    <p className="font-black text-[#2b211b]">{animal.name}</p>
                    <p className="text-xs font-bold text-[#9a5633]">
                      {animal.status}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 flex items-start gap-2 rounded-lg border border-[#e6d6c9] bg-[#fff8ef] p-4 text-sm font-medium leading-7 text-[#66564c] shadow-sm">
            <PawPrint
              className="mt-1 h-5 w-5 shrink-0 text-[#9a5633]"
              aria-hidden="true"
            />
            最初の体験は犬を中心に。猫、うさぎ、くまは、これからの相棒候補として少し控えめに見せています。
          </p>
        </div>

        <div className="premium-card-strong relative overflow-hidden p-3">
          <Image
            src={imageAssets.animalsLineup}
            alt="犬、猫、うさぎ、くまの相棒候補のラインアップ"
            width={1536}
            height={1024}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-auto w-full rounded-lg object-cover"
          />
          <div className="absolute bottom-5 left-5 rounded-full bg-white/86 px-4 py-2 text-sm font-black text-[#7a482b] shadow-[0_10px_24px_rgba(109,63,37,0.1)] backdrop-blur">
            犬からはじめて、相棒は少しずつ。
          </div>
        </div>
      </div>
    </section>
  );
}
