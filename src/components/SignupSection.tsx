import Image from "next/image";
import { PawPrint } from "lucide-react";

import { imageAssets } from "@/constants/assets";
import { FORM_LINK_PROPS } from "@/constants/site";
import { PawButton } from "@/components/PawButton";

export function SignupSection() {
  return (
    <section
      id="signup"
      className="relative scroll-mt-8 overflow-hidden bg-[#fff1e6] px-5 py-16 text-[#2b211b] sm:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(255,255,255,0.54),transparent_22rem),radial-gradient(circle_at_84%_24%,rgba(246,174,188,0.2),transparent_24rem)]" />
      <div className="section-shell relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="eyebrow-pill mb-4">開発準備中</p>
          <h2 className="text-[2rem] font-black leading-[1.28] sm:text-4xl lg:text-[2.65rem]">
            僕の肉球、触ってほしいワン。
          </h2>
          <p className="mt-4 max-w-xl text-base font-medium leading-8 text-[#66564c] sm:text-lg sm:leading-9">
            ぽん通知は、ただいま開発準備中です。気になった方には、
            リリース前のお知らせをお届けします。
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              {...FORM_LINK_PROPS}
              className="cta-paw-primary inline-flex w-full items-center justify-center gap-2 px-5 py-3 text-center font-black text-white sm:w-auto sm:px-6"
            >
              <PawPrint className="h-5 w-5" aria-hidden="true" />
              肉球を押して、開発通知を受け取る
            </a>
          </div>

          <p className="mt-4 text-xs font-bold leading-6 text-[#8a7669]">
            外部フォームが開きます。リリース前のお知らせと、小さなアンケートに使います。
          </p>
        </div>

        <div className="premium-card-strong relative overflow-hidden bg-white/76 p-4 sm:p-5">
          <div className="absolute left-6 top-6 z-10">
            <PawButton label="ぽん" size="md" className="scale-90" />
          </div>
          <div className="grid gap-5 sm:grid-cols-[1fr_0.72fr] sm:items-end">
            <div className="overflow-hidden rounded-lg bg-[#fff8ef]">
              <Image
                src={imageAssets.ctaDog}
                alt="手紙をくわえて走る犬"
                width={1536}
                height={1024}
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
            <div className="rounded-lg border border-[#efd8c6] bg-white/82 p-5 text-sm font-bold leading-7 text-[#7a482b] shadow-sm">
              <p>文字を長く書かなくても、</p>
              <p>肉球ひとつで、気持ちは届く。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
