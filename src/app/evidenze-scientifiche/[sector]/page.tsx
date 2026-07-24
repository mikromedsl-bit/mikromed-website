import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { EvidenceArticleList } from "@/components/EvidenceArticleList";
import { Section } from "@/components/Section";
import {
  emptyEvidenceDetail,
  emptyEvidenceMessage,
  evidenceNatureNote,
  evidenceSectors,
  getArticlesForSector,
  getEvidenceSector
} from "@/data/scientificEvidence";
import type { EvidenceSectorSlug } from "@/data/scientificEvidence";
import { createMetadata } from "@/lib/metadata";

type SectorPageProps = {
  params: Promise<{
    sector: string;
  }>;
};

export function generateStaticParams() {
  return evidenceSectors.map((sector) => ({
    sector: sector.slug
  }));
}

export async function generateMetadata({
  params
}: SectorPageProps): Promise<Metadata> {
  const { sector: sectorSlug } = await params;
  const sector = getEvidenceSector(sectorSlug);

  if (!sector) {
    return {};
  }

  return createMetadata({
    title: `Evidenze scientifiche - ${sector.title}`,
    description: sector.description,
    path: `/evidenze-scientifiche/${sector.slug}`,
    keywords: [
      "evidenze scientifiche",
      "pubblicazioni scientifiche",
      ...sector.keywords
    ]
  });
}

export default async function EvidenceSectorPage({ params }: SectorPageProps) {
  const { sector: sectorSlug } = await params;
  const sector = getEvidenceSector(sectorSlug);

  if (!sector) {
    notFound();
  }

  const articles = getArticlesForSector(sector.slug as EvidenceSectorSlug);
  const Icon = sector.icon;

  return (
    <>
      <section className="relative overflow-hidden gradient-navy text-white">
        <div className="absolute inset-0 technical-grid-dark opacity-45" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-mineral-200">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link className="hover:text-white" href="/">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link className="hover:text-white" href="/evidenze-scientifiche">
                  Evidenze scientifiche
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                {sector.title}
              </li>
            </ol>
          </nav>
          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start">
            <span className="premium-icon-dark inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-mineral-100">
              <Icon aria-hidden="true" className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-200">
                Evidenze scientifiche
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
                {sector.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-mineral-100">
                {sector.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="Pubblicazioni e documentazione tecnica"
        description="L'elenco sara aggiornato progressivamente con riferimenti bibliografici, sintesi originali e link alle fonti disponibili."
      >
        <EvidenceArticleList
          articles={articles}
          emptyDescription={`${emptyEvidenceMessage} ${emptyEvidenceDetail}`}
          emptyTitle="Nessuna pubblicazione ancora inserita"
        />
      </Section>

      <Section
        title="Nota sulla pertinenza delle fonti"
        description={evidenceNatureNote}
        tone="muted"
      >
        <ButtonLink href="/evidenze-scientifiche" variant="secondary">
          Torna a Evidenze scientifiche
        </ButtonLink>
      </Section>
    </>
  );
}
