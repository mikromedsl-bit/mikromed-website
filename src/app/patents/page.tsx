import type { Metadata } from "next";
import { CardGrid } from "@/components/CardGrid";
import { CTASection } from "@/components/CTASection";
import { PatentCard } from "@/components/PatentCard";
import { Section } from "@/components/Section";
import { grantedPatents, patentPortfolioSummary, pendingPatents } from "@/data/patents";
import { pages } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const page = pages.patents;

export const metadata: Metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/patents",
  keywords: page.keywords
});

export default function PatentsPage() {
  const [portfolio] = page.sections;

  return (
    <>
      <section className="relative overflow-hidden gradient-navy text-white">
        <div className="absolute inset-0 technical-grid-dark opacity-45" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-200">
            {page.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-mineral-100">
            {page.description}
          </p>
        </div>
      </section>

      <Section
        title="Numeri del portafoglio"
        description={`${page.intro} Totale attuale: ${patentPortfolioSummary.granted} brevetti concessi e ${patentPortfolioSummary.pending} domande pubblicate o in valutazione.`}
      >
        <CardGrid items={portfolio.items} />
      </Section>

      <Section
        title="Brevetti concessi"
        description="Brevetti approvati presentati in modo tecnico e istituzionale, senza includere aree di utilizzo o nomi di prodotti nelle schede."
        tone="muted"
      >
        <div className="space-y-6">
          {grantedPatents.map((patent) => (
            <PatentCard key={patent.internalId} patent={patent} />
          ))}
        </div>
      </Section>

      <Section
        title="Domande pubblicate e progetti in valutazione"
        description="Oltre ai brevetti concessi, Mikromed monitora domande pubblicate e tecnologie in valutazione. Questi progetti non devono essere presentati come brevetti concessi."
      >
        <div className="space-y-6">
          {pendingPatents.map((patent) => (
            <PatentCard key={patent.internalId} patent={patent} />
          ))}
        </div>
      </Section>

      <CTASection
        description="Possiamo valutare accesso tecnico sotto NDA, licensing o co-sviluppo industriale partendo dalle informazioni essenziali del portafoglio."
        href="/collaborate"
        label="Collabora con noi"
        title="Vuoi approfondire una tecnologia Mikromed?"
      />
    </>
  );
}
