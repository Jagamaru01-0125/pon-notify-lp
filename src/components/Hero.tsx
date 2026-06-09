import Image from "next/image";
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
              <Image src="/assets/logo.png" alt="" width={28} height={28} style={{ width: 28, height: 28 }} />
              <span className="badge-name">ぽん通知</span>
              <span className="badge-sub">ワンタップ合図アプリ</span>
            </div>

            <h1>
              動物たちのかわいい合図を、<span className="q">"ワン"</span>タップで。
            </h1>
            <p className="sub">
              胸からでも、ロック画面からでも。肉球ボタンを押すだけで、あなたが選んだ相棒が、ふたりだけの合図を届けます。
            </p>
            <p className="note">
              文字を添えても、添えなくても。合図の意味は、ふたりで自由に決められます。
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={onOpenModal}>
                <Image className="pawicon" src="/assets/paw.png" alt="" width={24} height={24} />
                肉球を押して、開発通知を受け取る
              </button>
              <a className="btn btn-ghost" href="#how">使ってみたい</a>
            </div>
          </div>

          <div className="hero-stage">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="hero-img"
              src="/assets/hero-watch-tap-dog-run-deliver-wide.png"
              alt="Watch肉球ボタン→犬が走る→スマホ・Watchに届く、ぽん通知の全体の流れ"
            />
            <div className="hero-flow-bar">
              <div className="hfb-item">
                <span className="hfb-key">
                  <PawIcon size={11} color="#DB7740" />送る
                </span>
                <span className="hfb-txt">肉球を押すだけ</span>
              </div>
              <span className="hfb-arrow">›</span>
              <div className="hfb-item">
                <span className="hfb-key">
                  <PawIcon size={11} color="#DB7740" />送る
                </span>
                <span className="hfb-txt">ロック画面から</span>
              </div>
              <span className="hfb-arrow">›</span>
              <div className="hfb-item">
                <span className="hfb-key">
                  <PawIcon size={11} color="#DB7740" />届く
                </span>
                <span className="hfb-txt">しぐさで伝える</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
