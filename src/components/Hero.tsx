import { PawIcon } from "@/components/PawIcon";
import { PawDecor } from "@/components/PawDecor";

export function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="hero" id="top">
      <PawDecor
        marks={[
          { size: 46, style: { left: "3%",  top: "58%", opacity: .12, transform: "rotate(-20deg)" } },
          { size: 28, style: { left: "10%", top: "78%", opacity: .10, transform: "rotate(10deg)" } },
          { size: 22, style: { left: "7%",  top: "18%", opacity: .08, transform: "rotate(6deg)" } },
        ]}
      />

      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-app-badge">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/logo.png" alt="" width={28} height={28} style={{ width: 28, height: 28, objectFit: "contain" }} />
              <span className="badge-name">ぽん通知</span>
              <span className="badge-sub">ワンタップ合図アプリ</span>
            </div>

            <h1>
              動物たちのかわいい合図を、<br />
              <span className="q">&ldquo;ワン&rdquo;</span>タップで。
            </h1>
            <p className="sub">
              胸からでも、ロック画面からでも。肉球ボタンを押すだけで、あなたが選んだ相棒が、ふたりだけの合図を届けます。
            </p>
            <p className="note">
              文字を添えても、添えなくても。合図の意味は、ふたりで自由に決められます。
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={onOpenModal}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="pawicon" src="/assets/paw.png" alt="" />
                肉球を押して、開発通知を受け取る
              </button>
              <a className="btn btn-ghost" href="#how">使ってみたい</a>
            </div>
          </div>

          <div className="hero-visual">
            {/* Watch: send via paw button */}
            <div className="hv-watch-s">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/watch-paw.png" alt="Watch肉球ボタン" />
            </div>

            {/* Dog running */}
            <div className="hv-dog">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/dog-run-hero.png" alt="走る相棒" />
            </div>

            {/* Phone: lockscreen widget */}
            <div className="hv-phone">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/phone-lock.png" alt="ロック画面から送る" />
            </div>

            {/* Watch: receiving gesture */}
            <div className="hv-watch-r">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/watch-wave.png" alt="しぐさで届く" />
            </div>

            {/* Floating labels */}
            <div className="hv-lbl hv-lbl-1">
              <span className="hvl-act"><PawIcon size={9} color="#DB7740" />送る</span>
              <span className="hvl-txt">肉球を押すだけ</span>
            </div>
            <div className="hv-lbl hv-lbl-2">
              <span className="hvl-act"><PawIcon size={9} color="#DB7740" />送る</span>
              <span className="hvl-txt">ロック画面から</span>
            </div>
            <div className="hv-lbl hv-lbl-3">
              <span className="hvl-act"><PawIcon size={9} color="#DB7740" />届く</span>
              <span className="hvl-txt">しぐさで伝える</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
