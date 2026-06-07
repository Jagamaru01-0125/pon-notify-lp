type PawButtonProps = {
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function PawButton({
  label = "ぽん",
  size = "md",
  className = "",
}: PawButtonProps) {
  const sizes = {
    sm: "h-16 w-16",
    md: "h-24 w-24",
    lg: "h-32 w-32",
  };
  const labelSizes = {
    sm: "text-[0.62rem]",
    md: "text-xs",
    lg: "text-sm",
  };

  return (
    <div
      aria-label="肉球ボタン"
      className={`${sizes[size]} paw-button relative isolate grid place-items-center rounded-full text-white ${className}`}
    >
      <div className="absolute left-[25%] top-[18%] h-[18%] w-[18%] rounded-full bg-[#fff0d2] shadow-[inset_0_2px_4px_rgba(255,255,255,0.92),inset_0_-4px_8px_rgba(235,105,69,0.22)]" />
      <div className="absolute right-[25%] top-[18%] h-[18%] w-[18%] rounded-full bg-[#fff0d2] shadow-[inset_0_2px_4px_rgba(255,255,255,0.92),inset_0_-4px_8px_rgba(235,105,69,0.22)]" />
      <div className="absolute left-[16%] top-[41%] h-[17%] w-[17%] rounded-full bg-[#fff0d2] shadow-[inset_0_2px_4px_rgba(255,255,255,0.92),inset_0_-4px_8px_rgba(235,105,69,0.22)]" />
      <div className="absolute right-[16%] top-[41%] h-[17%] w-[17%] rounded-full bg-[#fff0d2] shadow-[inset_0_2px_4px_rgba(255,255,255,0.92),inset_0_-4px_8px_rgba(235,105,69,0.22)]" />
      <div
        className={`grid h-[38%] w-[43%] place-items-center rounded-full bg-[#fff0d2] font-bold text-[#7a3c20] shadow-[inset_0_2px_5px_rgba(255,255,255,0.94),inset_0_-7px_10px_rgba(235,105,69,0.24)] ${labelSizes[size]}`}
      >
        {label}
      </div>
    </div>
  );
}
