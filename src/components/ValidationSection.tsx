import { FlaskConical, Route, Watch } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";

export function ValidationSection() {
  return (
    <section className="px-5 py-14 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-lg border border-[#efd8c6] bg-white p-6 shadow-[0_16px_40px_rgba(109,63,37,0.08)] sm:p-8">
          <SectionHeader
            eyebrow="Validation"
            title="今は、欲しい人がいるかを検証しています。"
            description="まだ正式リリース前です。反応を見ながらMVPを作り、Apple Watch / スマートウォッチ対応やロック画面ウィジェット対応の優先度を決めます。"
          />

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-[#fff7ec] p-5">
              <FlaskConical className="mb-4 h-6 w-6 text-[#9a5633]" aria-hidden="true" />
              <h3 className="font-bold text-[#2b211b]">正式リリース前</h3>
              <p className="mt-2 text-sm leading-7 text-[#66564c]">
                需要、使いたい相手、押したい合図を先に検証します。
              </p>
            </div>
            <div className="rounded-lg bg-[#f7fffb] p-5">
              <Route className="mb-4 h-6 w-6 text-[#315f52]" aria-hidden="true" />
              <h3 className="font-bold text-[#2b211b]">MVPを段階的に作る</h3>
              <p className="mt-2 text-sm leading-7 text-[#66564c]">
                反応が強い送信方法、犬の動き、合図から優先します。
              </p>
            </div>
            <div className="rounded-lg bg-[#fff1f5] p-5">
              <Watch className="mb-4 h-6 w-6 text-[#9b4d66]" aria-hidden="true" />
              <h3 className="font-bold text-[#2b211b]">開発状況を知らせる</h3>
              <p className="mt-2 text-sm leading-7 text-[#66564c]">
                登録者には進捗とテスト案内を送る想定です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
