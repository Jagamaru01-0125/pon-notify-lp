type PawButtonProps = {
  label?: string;
  size?: "sm" | "md" | "lg";
};

export function PawButton({ label = "ぽん", size = "md" }: PawButtonProps) {
  const sizes = {
    sm: "h-16 w-16",
    md: "h-24 w-24",
    lg: "h-32 w-32",
  };

  return (
    <div
      aria-label="肉球ボタン"
      className={`${sizes[size]} paw-shadow relative grid place-items-center rounded-full bg-[#7a482b] text-white`}
    >
      <div className="absolute left-[25%] top-[20%] h-[18%] w-[18%] rounded-full bg-[#ffd3c0]" />
      <div className="absolute right-[25%] top-[20%] h-[18%] w-[18%] rounded-full bg-[#ffd3c0]" />
      <div className="absolute left-[16%] top-[42%] h-[17%] w-[17%] rounded-full bg-[#ffd3c0]" />
      <div className="absolute right-[16%] top-[42%] h-[17%] w-[17%] rounded-full bg-[#ffd3c0]" />
      <div className="grid h-[38%] w-[43%] place-items-center rounded-full bg-[#ffd3c0] text-[0.68rem] font-bold text-[#6d3f25]">
        {label}
      </div>
    </div>
  );
}
