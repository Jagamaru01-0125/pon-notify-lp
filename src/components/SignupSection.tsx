import Image from "next/image";
import { PawDecor } from "@/components/PawDecor";

export function SignupSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="final">
      <PawDecor
        marks={[
          { size: 46, style: { left: "7%", top: "18%", opacity: .14, transform: "rotate(-20deg)" } },
          { size: 30, style: { left: "15%", top: "42%", opacity: .11, transform: "rotate(10deg)" } },
          { size: 38, style: { right: "8%", top: "22%", opacity: .12, transform: "rotate(18deg)" } },
          { size: 24, style: { right: "14%", top: "48%", opacity: .10, transform: "rotate(-8deg)" } },
        ]}
      />

      <div className="wrap">
        <div className="final-card reveal">
          <div className="dogwrap">
            <Image
              className="final-dog"
              src="/assets/dog-wag-tail-standing.png"
              alt="しっぽを振る犬"
              width={180}
              height={220}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="bubble2">僕の肉球、触ってほしいワン。</div>
          <p>ぽん通知は、ただいま開発準備中です。気になった方には、リリース前のお知らせをお届けします。</p>
          <button className="btn btn-primary btn-lg" onClick={onOpenModal}>
            <Image className="pawicon" src="/assets/paw.png" alt="" width={28} height={28} />
            肉球を押して、開発通知を受け取る
          </button>
        </div>
      </div>
    </section>
  );
}
