import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
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

      <Section title="Panoramica" description={page.intro} />

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

      <section className="bg-forest-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-200">
              Disponibilità
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-balance">
              {page.cta?.title}
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-mineral-100">
              {page.cta?.description}
            </p>
          </div>
          {page.cta ? (
            <ButtonLink href={page.cta.href} variant="light">
              {page.cta.label}
            </ButtonLink>
          ) : null}
        </div>
      </section>
    </>
  );
}
