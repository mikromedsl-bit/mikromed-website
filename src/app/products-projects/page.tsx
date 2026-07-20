import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductStatusLegend } from "@/components/ProductStatusLegend";
import { Section } from "@/components/Section";
import { productGroups } from "@/data/products";
import { pages } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const page = pages["products-projects"];

export const metadata: Metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/products-projects",
  keywords: page.keywords,
  includeGlobalKeywords: false
});

export default function ProductsProjectsPage() {
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
        title="Panoramica"
        description={page.intro}
      >
        <ProductStatusLegend />
      </Section>

      {productGroups.map((group, index) => (
        <Section
          description={group.description}
          key={group.title}
          title={group.title}
          tone={index % 2 === 0 ? "muted" : "white"}
        >
          <ProductGrid items={group.items} />
        </Section>
      ))}

      {page.cta ? (
        <CTASection
          description={page.cta.description}
          eyebrow="Disponibilita"
          href={page.cta.href}
          label={page.cta.label}
          title={page.cta.title}
        />
      ) : null}

      <Section
        title="Nota sulle opportunita"
        description="Gli stati indicati hanno finalita orientativa. La disponibilita commerciale, eventuali esclusive territoriali, modelli di licenza, white label, distribuzione o co-sviluppo vengono valutati caso per caso. I partner esistenti, i mercati gia coperti e gli accordi riservati non vengono divulgati pubblicamente."
        tone="muted"
      />
    </>
  );
}
