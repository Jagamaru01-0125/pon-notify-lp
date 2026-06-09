export function PawIcon({ size = 17, color = "var(--orange-deep)", className = "" }: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ fill: color, display: "inline-block", flexShrink: 0 }}
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="50" cy="62" rx="26" ry="22" />
      <ellipse cx="22" cy="40" rx="10" ry="13" />
      <ellipse cx="40" cy="26" rx="10" ry="13" />
      <ellipse cx="62" cy="25" rx="10" ry="13" />
      <ellipse cx="80" cy="38" rx="10" ry="13" />
    </svg>
  );
}
