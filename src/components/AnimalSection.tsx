import { PawIcon } from "@/components/PawIcon";
import { PawDecor } from "@/components/PawDecor";

const animals: { src: string; name: string; tag: string; lead?: boolean }[] = [
  { src: "/assets/an-dog.png",    name: "犬",    tag: "いま使える", lead: true },
  { src: "/assets/an-cat.png",    name: "猫",    tag: "検討中" },
  { src: "/assets/an-rabbit.png", name: "うさぎ", tag: "検討中" },
  { src: "/assets/an-bear.png",   name: "くま",  tag: "検討中" },
];

export function AnimalSection() {
  return (
    <section className="section bg-a">
      <PawDecor
        marks={[
          { size: 32, style: { right: "5%", top: "18%",    opacity: .10, transform: "rotate(14deg)" } },
          { size: 20, style: { left:  "4%", bottom: "20%", opacity: .09, transform: "rotate(-8deg)" } },
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

        <div className="reveal" style={{ transitionDelay: ".08s" }}>
          <div className="animals-tag-row">
            <div className="now-badge">
              <PawIcon size={13} color="#E6854D" />まずは犬！
            </div>
          </div>

          <div className="animals-grid">
            {animals.map((a) => (
              <div key={a.name} className={`an-card${a.lead ? " lead" : ""}`}>
                <div className="an-pic">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.src} alt={a.name} />
                </div>
                <div className="an-name-row">
                  <span className="an-name">{a.name}</span>
                  <span className="an-status">{a.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
