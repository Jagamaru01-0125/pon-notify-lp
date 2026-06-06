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
          ? "mx-auto mb-9 max-w-2xl text-center"
          : "mb-9 max-w-2xl"
      }
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold text-[#9a5633]">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-bold leading-[1.35] text-[#2b211b] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-[#66564c] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
