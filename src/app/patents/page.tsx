import type { Metadata } from "next";
import { CardGrid } from "@/components/CardGrid";
import { PatentTable } from "@/components/PatentTable";
import { Section } from "@/components/Section";
import { grantedPatents, pendingPatents, patentPortfolioSummary } from "@/data/patents";
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
  const [portfolio, granted, pending, fields] = page.sections;

  return (
    <>
      <section className="bg-forest-900 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
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
        title="Panoramica del portafoglio"
        description={`${page.intro} Totale report: ${patentPortfolioSummary.granted} brevetti concessi e ${patentPortfolioSummary.pending} domande in procedura/interlocutorie.`}
      >
        <CardGrid items={portfolio.items} />
      </Section>

      <Section
        title={granted.title}
        description="Brevetti indicati come concessi nei documenti locali verificati."
        tone="muted"
      >
        <PatentTable patents={grantedPatents} />
      </Section>

      <Section
        title={pending.title}
        description="Domande ancora pendenti o con interlocutorie: non sono presentate come brevetti concessi."
      >
        <PatentTable patents={pendingPatents} />
      </Section>

      <Section
        title={fields.title}
        description="Campi tecnologici e applicativi derivati dai brevetti, dalle domande e dai documenti prodotto collegati."
        tone="muted"
      >
        <CardGrid items={fields.items} />
      </Section>
    </>
  );
}
