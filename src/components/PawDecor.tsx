import type { CSSProperties } from "react";

export type PawMark = {
  size: number;
  style: CSSProperties;
};

export function PawDecor({ marks }: { marks: PawMark[] }) {
  return (
    <div
      aria-hidden="true"
      className="paw-decor"
    >
      {marks.map((m, i) => (
        <svg
          key={i}
          width={m.size}
          height={m.size}
          viewBox="0 0 100 100"
          style={{ fill: "#E6854D", position: "absolute", pointerEvents: "none", ...m.style }}
          aria-hidden="true"
        >
          <ellipse cx="50" cy="62" rx="26" ry="22" />
          <ellipse cx="22" cy="40" rx="10" ry="13" />
          <ellipse cx="40" cy="26" rx="10" ry="13" />
          <ellipse cx="62" cy="25" rx="10" ry="13" />
          <ellipse cx="80" cy="38" rx="10" ry="13" />
        </svg>
      ))}
    </div>
  );
}
