import { CallToAction } from "@/components/CallToAction";
import { CardGrid } from "@/components/CardGrid";
import { Section } from "@/components/Section";
import type { PageContent } from "@/data/types";

export function PageTemplate({ page }: { page: PageContent }) {
  return (
    <>
      <section className="relative overflow-hidden gradient-navy text-white">
        <div className="absolute inset-0 technical-grid-dark opacity-45" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper-300">
            {page.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-forest-100">
            {page.description}
          </p>
        </div>
      </section>

      {page.intro ? (
        <Section title="Panoramica" description={page.intro} />
      ) : null}

      {page.sections.map((section, index) => (
        <Section
          description={section.description}
          key={section.title}
          title={section.title}
          tone={index % 2 === 0 ? "muted" : "white"}
        >
          {section.items.length > 0 ? <CardGrid items={section.items} /> : null}
        </Section>
      ))}

      {page.cta ? <CallToAction {...page.cta} /> : null}
    </>
  );
}
