import Image from "next/image";

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <a className="brand" href="#top">
          <Image src="/assets/logo.png" alt="ぽん通知" width={34} height={34} />
          <div className="nm">ぽん通知</div>
        </a>
        <p>動物たちのかわいい合図を、"ワン"タップで。</p>
        <p style={{ marginTop: "8px", fontSize: ".72rem" }}>© 2026 ぽん通知 — このページは需要検証のためのものです。</p>
      </div>
    </footer>
  );
}
