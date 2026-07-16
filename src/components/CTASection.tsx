import { ButtonLink } from "@/components/ButtonLink";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  href: string;
  label: string;
};

export function CTASection({
  eyebrow = "Collabora con Mikromed",
  title,
  description,
  href,
  label
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-forest-900 text-white">
      <div className="absolute inset-0 technical-grid-dark opacity-60" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper-300">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-balance">{title}</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-forest-100">{description}</p>
        </div>
        <ButtonLink href={href} variant="light">
          {label}
        </ButtonLink>
      </div>
    </section>
  );
}
