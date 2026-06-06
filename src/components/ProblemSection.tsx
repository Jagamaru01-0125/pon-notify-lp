import { MessageCircle, PhoneOff } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";

const problems = [
  "「今から帰る」だけ送りたい",
  "「大丈夫？」だけ聞きたい",
  "「見て」だけ伝えたい",
  "「思い出した」だけ届けたい",
  "でもLINEを開くと文章を考えてしまう",
  "電話ほど強くはしたくない",
  "既読や返信の圧も少し重い",
];

export function ProblemSection() {
  return (
    <section className="bg-[#fffdf9] px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Problem"
          title="LINEするほどじゃない。でも、何も送らないほどでもない。"
          description="親しい相手ほど、短い気持ちを軽く渡したい瞬間があります。"
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={problem}
              className="rounded-lg border border-[#f0dccd] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(109,63,37,0.06)]"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e6] text-[#9a5633]">
                {index < 4 ? (
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <PhoneOff className="h-4 w-4" aria-hidden="true" />
                )}
              </div>
              <p className="text-base font-bold leading-7 text-[#3b2d25]">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
