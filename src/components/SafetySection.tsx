import { PawIcon } from "@/components/PawIcon";
import { PawDecor } from "@/components/PawDecor";

const safetyItems = [
  { src: "/assets/safe-person.png", title: "最初は親しい1人だけ", desc: "信頼できる相手とだけ。" },
  { src: "/assets/safe-nochat.png", title: "チャットなし",         desc: "長い会話に追われない設計。" },
  { src: "/assets/safe-bell.png",   title: "通知オン／オフ",       desc: "受け取り方は自分で選べる。" },
  { src: "/assets/safe-unlink.png", title: "ペア解除",             desc: "いつでも解除できる。" },
  { src: "/assets/safe-block.png",  title: "ブロック",             desc: "しっかり遮断できる。" },
  { src: "/assets/safe-noloc.png",  title: "位置情報は使いません", desc: "初期MVPでは非対応。" },
] as const;

export function SafetySection() {
  return (
    <section className="section bg-c">
      <PawDecor
        marks={[
          { size: 36, style: { left: "3%", bottom: "18%", opacity: .09, transform: "rotate(-13deg)" } },
          { size: 20, style: { right: "4%", top: "20%", opacity: .09, transform: "rotate(12deg)" } },
        ]}
      />

      <div className="wrap">
        <div className="safety-split">
          {/* LEFT: Heading */}
          <div className="safety-txt reveal">
            <span className="eyebrow">
              <PawIcon size={17} color="#E6854D" className="pw" />SAFE &amp; GENTLE
            </span>
            <h2>親しい人と、安心して使えるように。</h2>
            <p className="safety-lead">大切な相手とだけ、やさしく。最初のMVPでは、安心のためにできることをシンプルに。</p>
          </div>

          {/* RIGHT: 3×2 icon grid */}
          <div className="safety-icons">
            {safetyItems.map((item, i) => (
              <div key={item.title} className="sitem reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="ic">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.src} alt="" />
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
