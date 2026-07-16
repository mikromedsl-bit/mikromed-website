import { SectionHeader } from "@/components/SectionHeader";

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
    muted: "premium-section-muted text-mineral-900",
    dark: "gradient-navy text-white"
  };

  return (
    <section className={`relative overflow-hidden ${tones[tone]} ${className}`}>
      {tone === "dark" ? (
        <div className="absolute inset-0 technical-grid-dark opacity-50" aria-hidden="true" />
      ) : null}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeader
          dark={tone === "dark"}
          description={description}
          eyebrow={eyebrow}
          title={title}
        />
        {children ? <div className="relative mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
