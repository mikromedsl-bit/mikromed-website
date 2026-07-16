import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ProductGrid } from "@/components/ProductGrid";
import { Section } from "@/components/Section";
import { productGroups } from "@/data/products";
import { pages } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const page = pages["products-projects"];

export const metadata: Metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/products-projects",
  keywords: page.keywords
});

export default function ProductsProjectsPage() {
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
        title="Panoramica"
        description={`${page.intro} La disponibilita commerciale, eventuali esclusive territoriali e modelli di partnership vengono valutati caso per caso. I partner esistenti non vengono divulgati pubblicamente. Alcuni prodotti sono formulazioni esistenti o concept sviluppati, ma non devono essere presentati come prodotti gia commercializzati se non esiste una prova commerciale verificata.`}
      />

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
    </>
  );
}
