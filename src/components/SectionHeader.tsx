type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto mb-10 max-w-2xl text-center sm:mb-12"
          : "mb-8 max-w-2xl sm:mb-10"
      }
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-black tracking-[0.08em] text-[#b8754f]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-[1.72rem] font-black leading-[1.34] text-[#2b211b] sm:text-4xl lg:text-[2.55rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base font-medium leading-8 text-[#66564c] sm:text-[1.05rem] sm:leading-9">
          {description}
        </p>
      ) : null}
    </div>
  );
}
