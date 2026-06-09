import Image from "next/image";
import { PawIcon } from "@/components/PawIcon";

export function Header({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <header className="site-head">
      <div className="wrap">
        <a className="brand" href="#top">
          <Image src="/assets/logo.png" alt="ぽん通知ロゴ" width={42} height={42} />
          <div>
            <div className="nm">ぽん通知</div>
            <div className="sb">ワンタップ合図アプリ</div>
          </div>
        </a>
        <button className="head-cta" onClick={onOpenModal} aria-label="開発通知を受け取る">
          <PawIcon size={18} color="#fff" />
          <span>開発通知を受け取る</span>
        </button>
      </div>
    </header>
  );
}
