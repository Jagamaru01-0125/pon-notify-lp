import { PawIcon } from "@/components/PawIcon";
import { PawDecor } from "@/components/PawDecor";

export function ReasonSection() {
  return (
    <section className="section bg-e">
      <PawDecor
        marks={[
          { size: 36, style: { right: "5%", top: "18%", opacity: .10, transform: "rotate(14deg)" } },
          { size: 22, style: { right: "12%", bottom: "16%", opacity: .09, transform: "rotate(-8deg)" } },
        ]}
      />

      <div className="wrap">
        <div className="rel">
          <div className="txt reveal">
            <span className="eyebrow">
              <PawIcon size={17} color="#E6854D" className="pw" />YOUR OWN MEANING
            </span>
            <h2>言葉にしない、<br />ふたりだけの合図で届く。</h2>
            <div className="quote-list">
              <div className="quote">「このしぐさが来たら、帰ってくる合図」</div>
              <div className="quote">「首をかしげたら、ちょっと気にしてる合図」</div>
              <div className="quote">「ハートをくわえてきたら、思い出したってこと」</div>
            </div>
            <p className="close">そんな小さな意味を、動物たちのしぐさに込めて届けられます。</p>
          </div>

          <div className="rel-cards reveal" style={{ transitionDelay: ".1s" }}>
            <div className="rcard">
              <div className="ic">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/safe-person.png" alt="" style={{width:32,height:32,objectFit:"contain"}} />
              </div>
              <h4>ふたりだけの意味で使える</h4>
              <p>同じしぐさでも、意味は自由に決められる。</p>
            </div>
            <div className="rcard">
              <div className="ic">
                <PawIcon size={28} color="#E6854D" />
              </div>
              <h4>文字なしでも伝わる</h4>
              <p>あえて言葉にしない合図も送れる。</p>
            </div>
            <div className="rcard">
              <div className="ic">
                <svg viewBox="0 0 24 24" style={{ width: "26px", height: "26px" }} fill="none" stroke="#E6854D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
              </div>
              <h4>短い文字も添えられる</h4>
              <p>必要なときだけ、ひと言を追加。</p>
            </div>
            <div className="rcard">
              <div className="ic">
                <svg viewBox="0 0 24 24" style={{ width: "26px", height: "26px" }} fill="none" stroke="#E6854D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" />
                </svg>
              </div>
              <h4>返信を求めすぎない</h4>
              <p>ただ気持ちだけ、そっと届く。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
