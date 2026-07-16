type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export function SectionHeader({ eyebrow, title, description, dark = false }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-copper-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-normal text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-lg leading-8 ${dark ? "text-forest-100" : "text-mineral-700"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
