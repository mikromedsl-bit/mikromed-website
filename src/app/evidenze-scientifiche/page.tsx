import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";
import {
  evidenceNatureNote,
  evidenceSectors,
  scientificEvidenceIntro
} from "@/data/scientificEvidence";
import { createMetadata } from "@/lib/metadata";

const pageDescription =
  "Pubblicazioni scientifiche, studi e documentazione tecnica organizzati per grandi settori applicativi delle tecnologie Mikromed.";

export const metadata: Metadata = createMetadata({
  title: "Evidenze scientifiche",
  description: pageDescription,
  path: "/evidenze-scientifiche",
  keywords: [
    "evidenze scientifiche",
    "pubblicazioni scientifiche",
    "documentazione tecnica",
    "studi materiali"
  ]
});

export default function ScientificEvidencePage() {
  return (
    <>
      <section className="relative overflow-hidden gradient-navy text-white">
        <div className="absolute inset-0 technical-grid-dark opacity-45" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-200">
            Documentazione tecnica
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
            Evidenze scientifiche
          </h1>
          <div className="mt-6 grid max-w-4xl gap-4 text-lg leading-8 text-mineral-100">
            {scientificEvidenceIntro.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <Section
        title="Settori applicativi"
        description="Cinque aree principali per consultare fonti, studi e materiali tecnici in modo ordinato e progressivamente aggiornabile."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {evidenceSectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <Link
                aria-label={`Esplora gli studi del settore ${sector.title}`}
                className="group premium-card flex h-full flex-col rounded-lg p-6 text-mineral-900 transition hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper-500"
                href={`/evidenze-scientifiche/${sector.slug}`}
                key={sector.slug}
              >
                <div className="premium-icon mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg text-forest-900">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h2 className="text-xl font-semibold text-forest-900">{sector.title}</h2>
                    <Badge tone="muted">In aggiornamento</Badge>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-6 text-mineral-700">
                    {sector.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest-900 transition group-hover:text-copper-700">
                    Esplora gli studi
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 rounded-lg border border-mineral-200 bg-mineral-50 p-5 text-sm leading-6 text-mineral-700">
          <p className="font-semibold text-forest-900">Nota sulla natura delle evidenze</p>
          <p className="mt-2">{evidenceNatureNote}</p>
        </div>
      </Section>
    </>
  );
}
