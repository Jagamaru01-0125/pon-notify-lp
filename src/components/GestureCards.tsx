import { PawIcon } from "@/components/PawIcon";
import { PawDecor } from "@/components/PawDecor";

const gestures = [
  { src: "/assets/cta-dog-delivering-letter-wide.png", label: "走ってくる", ex: "帰るよ" },
  { src: "/assets/dog-wag-tail-standing.png", label: "しっぽを振る", ex: "大丈夫" },
  { src: "/assets/dog-tap-paw-card.png", label: "前足でちょんちょん", ex: "見て" },
  { src: "/assets/dog-tilt-head-card.png", label: "首をかしげる", ex: "大丈夫？" },
  { src: "/assets/dog-carrying-heart.png", label: "ハートをくわえる", ex: "思い出した" },
  { src: "/assets/dog-sleeping-curled.png", label: "丸まって休む", ex: "今日は疲れた" },
] as const;

export function GestureCards() {
  return (
    <section className="section bg-c">
      <PawDecor
        marks={[
          { size: 40, style: { left: "4%", top: "20%", opacity: .09, transform: "rotate(-13deg)" } },
          { size: 24, style: { right: "4%", top: "28%", opacity: .10, transform: "rotate(14deg)" } },
          { size: 16, style: { right: "9%", bottom: "16%", opacity: .08, transform: "rotate(-6deg)" } },
        ]}
      />

      <div className="wrap">
        <div className="s-head reveal">
          <span className="eyebrow">
            <PawIcon size={17} color="#E6854D" className="pw" />GESTURES
          </span>
          <h2>合図は、メッセージじゃなくて、しぐさ。</h2>
          <p className="lead">「帰るよ」「大丈夫？」はただの例。どのしぐさに、どんな意味を込めるかは自由です。</p>
        </div>

        <div className="gestures">
          {gestures.map((g, i) => (
            <div key={g.label} className="gcard reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
              <div className="pic">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.src} alt={g.label} />
              </div>
              <h4>{g.label}</h4>
              <p className="ex">例 <b>{g.ex}</b></p>
            </div>
          ))}
        </div>

        <p className="gest-note">※ 表示は一例です。合図の文字や意味は、ふたりで自由に設定できます。</p>
      </div>
    </section>
  );
}
