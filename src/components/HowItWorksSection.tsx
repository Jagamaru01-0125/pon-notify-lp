import { PawIcon } from "@/components/PawIcon";
import { PawDecor } from "@/components/PawDecor";

export function HowItWorksSection() {
  return (
    <section className="section bg-a" id="how">
      <PawDecor
        marks={[
          { size: 38, style: { left: "3%", top: "28%", opacity: .09, transform: "rotate(-15deg)" } },
          { size: 22, style: { right: "4%", top: "18%", opacity: .10, transform: "rotate(14deg)" } },
          { size: 16, style: { right: "12%", bottom: "20%", opacity: .08, transform: "rotate(-6deg)" } },
        ]}
      />
      <div className="wrap">
        <div className="s-head reveal">
          <span className="eyebrow">
            <PawIcon size={17} color="#E6854D" className="pw" />HOW IT WORKS
          </span>
          <h2>送るのは、たったこれだけ</h2>
          <p className="lead">むずかしい操作はありません。肉球をひとつ押すだけで、合図はもう動きはじめています。</p>
        </div>

        <div className="steps">
          <svg className="step-arrow a1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
          <svg className="step-arrow a2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>

          <div className="step reveal">
            <span className="num">1</span>
            <h3>肉球を押す</h3>
            <p>腕時計やロック画面から、ぷにっとワンタップ。</p>
            <div className="vis">
              <div className="vis-duo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/watch-paw.png" alt="Watch肉球ボタン" className="vis-sm" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/phone-lock.png" alt="ロック画面ウィジェット" className="vis-lg" />
              </div>
            </div>
          </div>

          <div className="step reveal" style={{ transitionDelay: ".1s" }}>
            <span className="num">2</span>
            <h3>相棒が走る</h3>
            <p>あなたが選んだ相棒が、合図を届けに行く。</p>
            <div className="vis">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/dog-run-hero.png" alt="走り出す犬" />
            </div>
          </div>

          <div className="step reveal" style={{ transitionDelay: ".2s" }}>
            <span className="num">3</span>
            <h3>しぐさで届く</h3>
            <p>相手のスマホやApple Watchに、動物のしぐさで合図が届く。</p>
            <div className="vis">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/receive-wave.png" alt="相手のデバイスにしぐさで届く" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
