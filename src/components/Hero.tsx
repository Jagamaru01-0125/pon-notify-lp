import Image from "next/image";
import { PawIcon } from "@/components/PawIcon";
import { PawDecor } from "@/components/PawDecor";

export function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="hero" id="top">
      <PawDecor
        marks={[
          { size: 46, style: { left: "3%", top: "58%", opacity: .13, transform: "rotate(-20deg)" } },
          { size: 28, style: { left: "10%", top: "78%", opacity: .11, transform: "rotate(10deg)" } },
          { size: 22, style: { left: "7%", top: "18%", opacity: .09, transform: "rotate(6deg)" } },
          { size: 18, style: { left: "22%", top: "10%", opacity: .12, transform: "rotate(-8deg)" } },
        ]}
      />

      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              <PawIcon size={17} color="#E6854D" className="pw" />
              ことばにしない、ふたりの合図
            </span>
            <h1>
              動物たちの<br />
              かわいい合図を、<br />
              <span className="q">"ワン"</span>タップで。
            </h1>
            <p className="sub">
              腕からでも、ロック画面からでも。肉球ボタンを押すだけで、あなたが選んだ相棒が、ふたりだけの合図を届けます。
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
            <div className="hero-meta">
              <div className="it"><span className="dot" />Apple Watch 対応</div>
              <div className="it"><span className="dot" />ロック画面から</div>
              <div className="it"><span className="dot" />チャットなし</div>
            </div>
          </div>

          <div className="hero-stage">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="hero-img"
              src="/assets/hero-watch-tap-dog-run-deliver-wide.png"
              alt="Watch肉球ボタン→犬が走る→スマホ・Watchに届く、ぽん通知の全体の流れ"
            />
            <div className="hero-badge-row">
              <div className="hero-badge">
                <span className="n">1</span>肉球を押す
              </div>
              <div className="hero-badge">
                <span className="n">2</span>相棒が走る
              </div>
              <div className="hero-badge">
                <span className="n">3</span>しぐさで届く
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
