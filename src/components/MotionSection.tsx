import { PawIcon } from "@/components/PawIcon";

export function MotionSection() {
  return (
    <section className="section bg-d">
      <div className="paw-decor" aria-hidden="true">
        <svg className="windline" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ bottom: "6%", height: "90px", opacity: .38 }}>
          <path d="M-20 60 C 320 110, 540 16, 800 70 C 1060 116, 1280 24, 1460 74" stroke="#EF9F62" strokeWidth="3" />
        </svg>
        <svg width="36" height="36" style={{ right: "6%", top: "18%", opacity: .12, fill: "#E6854D", transform: "rotate(16deg)" }} viewBox="0 0 100 100"><ellipse cx="50" cy="62" rx="26" ry="22"/><ellipse cx="22" cy="40" rx="10" ry="13"/><ellipse cx="40" cy="26" rx="10" ry="13"/><ellipse cx="62" cy="25" rx="10" ry="13"/><ellipse cx="80" cy="38" rx="10" ry="13"/></svg>
        <svg width="24" height="24" style={{ left: "4%", bottom: "20%", opacity: .11, fill: "#E0A36B", transform: "rotate(-10deg)" }} viewBox="0 0 100 100"><ellipse cx="50" cy="62" rx="26" ry="22"/><ellipse cx="22" cy="40" rx="10" ry="13"/><ellipse cx="40" cy="26" rx="10" ry="13"/><ellipse cx="62" cy="25" rx="10" ry="13"/><ellipse cx="80" cy="38" rx="10" ry="13"/></svg>
      </div>

      <div className="wrap">
        <div className="showcase">
          <div className="txt reveal">
            <span className="eyebrow">
              <PawIcon size={17} color="#E6854D" className="pw" />NOT A MESSAGE
            </span>
            <h2>届くのは、メッセージじゃなくて、あなたたちだけの合図。</h2>
            <p>動物が走ってきたり、しっぽを振ったり、前足でちょんちょんしたり。そのしぐさに、どんな意味を込めるかはふたり次第。</p>
            <p>文字で説明しなくても伝わる、ふたりだけの小さな合図を届けます。もちろん、必要なら短い文字を添えることもできます。</p>
          </div>

          <div className="flow reveal" style={{ transitionDelay: ".1s" }}>
            <div className="flow-row">
              <div className="cell watch">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/watch-paw.png" alt="肉球を押す" />
                <div className="lbl">肉球を押す</div>
              </div>
              <svg className="ar" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
              <div className="cell dog">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/dog-play.png" alt="動物が走る" />
                <div className="lbl">動物が走る</div>
              </div>
              <svg className="ar" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
              <div className="cell recv">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/receive-wave.png" alt="相手に届く" />
                <div className="lbl">しぐさで届く</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
