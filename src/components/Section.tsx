type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  tone?: "white" | "muted" | "dark";
  className?: string;
};

export function Section({
  eyebrow,
  title,
  description,
  children,
  tone = "white",
  className = ""
}: SectionProps) {
  const tones = {
    white: "bg-white text-mineral-900",
    muted: "bg-mineral-50 text-mineral-900",
    dark: "bg-forest-900 text-white"
  };

  return (
    <section className={`${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
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
            <p
              className={`mt-5 text-lg leading-8 ${
                tone === "dark" ? "text-forest-100" : "text-mineral-700"
              }`}
            >
              {description}
            </p>
          ) : null}
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
