import { PawIcon } from "@/components/PawIcon";
import { PawDecor } from "@/components/PawDecor";

export function SendSourcesSection() {
  return (
    <section className="section bg-b">
      <PawDecor
        marks={[
          { size: 36, style: { right: "4%", top: "14%", opacity: .10, transform: "rotate(16deg)" } },
          { size: 22, style: { left: "4%", bottom: "14%", opacity: .09, transform: "rotate(-12deg)" } },
        ]}
      />

      <div className="wrap">
        <div className="s-head reveal">
          <span className="eyebrow">
            <PawIcon size={17} color="#E6854D" className="pw" />WHERE TO SEND
          </span>
          <h2>スマホを開かなくても、合図は送れる。</h2>
          <p className="lead">主役は、腕とロック画面。スマホを開かなくても、肉球はいつでもすぐそこに。</p>
        </div>

        <div className="sources">
          <div className="src main reveal">
            <span className="badge">
              <PawIcon size={13} color="#E6854D" />いちばん手軽
            </span>
            <h3>Apple Watch ／<br />スマートウォッチ</h3>
            <p>腕からすぐに、ふたりの合図。歩きながらでも、ぽんと。</p>
            <div className="media watch">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/watch-paw.png" alt="Watch肉球ボタン" />
            </div>
          </div>

          <div className="src reveal" style={{ transitionDelay: ".1s" }}>
            <span className="badge">
              <PawIcon size={13} color="#E6854D" />開かず押せる
            </span>
            <h3>ロック画面<br />ウィジェット</h3>
            <p>スマホを開かずに、肉球だけ押せる。</p>
            <div className="media phone">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/phone-lock.png" alt="ロック画面ウィジェット" />
            </div>
          </div>

          <div className="src reveal" style={{ transitionDelay: ".2s" }}>
            <span className="badge">
              <PawIcon size={13} color="#E6854D" />受け取る側
            </span>
            <h3>相手のWatchに<br />しぐさで届く</h3>
            <p>ウォッチの画面に、かわいいしぐさのアニメーションが届きます。</p>
            <div className="media recv">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/receive-wave.png" alt="しぐさで届く通知" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
