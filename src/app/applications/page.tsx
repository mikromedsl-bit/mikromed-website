import type { Metadata } from "next";
import { ApplicationCard } from "@/components/ApplicationCard";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { applications } from "@/data/applications";
import { pages } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const page = pages.applications;

export const metadata: Metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/applications",
  keywords: page.keywords
});

export default function ApplicationsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-900 text-white">
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
        title="Macrosettori applicativi"
        description={page.intro}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {applications.map((application) => (
            <ApplicationCard item={application} key={application.title} />
          ))}
        </div>
      </Section>

      <CTASection
        description="Ogni applicazione richiede valutazione tecnica, test e posizionamento regolatorio specifico prima della comunicazione commerciale."
        href="/collaborate"
        label="Valuta una applicazione"
        title="Hai un'applicazione specifica?"
      />
    </>
  );
}
