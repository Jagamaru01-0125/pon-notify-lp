import { PawIcon } from "@/components/PawIcon";
import { PawDecor } from "@/components/PawDecor";

export function AnimalSection() {
  return (
    <section className="section bg-a">
      <PawDecor
        marks={[
          { size: 32, style: { right: "6%", bottom: "20%", opacity: .10, transform: "rotate(14deg)" } },
          { size: 20, style: { left: "4%", top: "22%", opacity: .09, transform: "rotate(-8deg)" } },
        ]}
      />

      <div className="wrap">
        <div className="animals-head reveal">
          <span className="eyebrow">
            <PawIcon size={17} color="#E6854D" className="pw" />PARTNERS
          </span>
          <h2>最初は犬。これから、相棒は増えていくかも。</h2>
          <p className="lead">まずは犬から。将来的には猫、うさぎ、くまなど、あなたと相手の関係性に合わせた相棒を選べる体験も検討しています。</p>
        </div>

        <div className="reveal" style={{ transitionDelay: ".1s" }}>
          <div className="animals-tag-row">
            <div className="now-badge">
              <PawIcon size={13} color="#E6854D" />まずは犬！
            </div>
          </div>

          <div className="animals-lineup">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/animals-lineup-dog-cat-rabbit-bear.png"
              alt="犬・猫・うさぎ・くまの4匹が並ぶイメージ"
            />
          </div>

          <div className="an-labels">
            <div className="an-label-item lead">
              <span className="an-name">犬</span>
              <span className="an-tag">いま使える</span>
            </div>
            <div className="an-label-item">
              <span className="an-name">猫</span>
              <span className="an-tag">検討中</span>
            </div>
            <div className="an-label-item">
              <span className="an-name">うさぎ</span>
              <span className="an-tag">検討中</span>
            </div>
            <div className="an-label-item">
              <span className="an-name">くま</span>
              <span className="an-tag">検討中</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
