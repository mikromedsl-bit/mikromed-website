import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CardGrid } from "@/components/CardGrid";
import { CTASection } from "@/components/CTASection";
import { ProductGrid } from "@/components/ProductGrid";
import { Section } from "@/components/Section";
import { homepageProducts } from "@/data/products";
import {
  buildWithPatents,
  collaborateCards,
  heroServiceCards,
  statBlocks,
  technologyFields,
  whatMikromedDoes
} from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 technical-grid opacity-70" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-500">
              Mikromed Europa S.L.
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-normal text-forest-900 text-balance sm:text-5xl lg:text-6xl">
              Brevetti approvati, prodotti sviluppati e collaborazioni industriali.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-mineral-700">
              Mikromed Europa valorizza un portafoglio di brevetti concessi e
              tecnologie funzionali, trasformandoli in prodotti, piattaforme
              applicative e opportunita di collaborazione nei settori superfici,
              coating, oral care, agricoltura, gestione idrica e applicazioni
              tecniche.
            </p>
            <p className="mt-4 text-base font-semibold text-forest-800">
              Brevetti approvati, prodotti sviluppati e collaborazioni industriali per mercati regolati.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/patents">Scopri i brevetti</ButtonLink>
              <ButtonLink href="/products-projects" variant="secondary">
                Esplora i prodotti
              </ButtonLink>
              <ButtonLink href="/collaborate" variant="secondary">
                Collabora con noi
              </ButtonLink>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-mineral-200 shadow-soft lg:min-h-[520px]">
            <Image
              alt="Visual di tecnologie minerali e laboratorio"
              className="h-full w-full object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              src="/images/mineral-technology-hero.png"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-forest-900/45 via-transparent to-mineral-200/20" />
          </div>
        </div>
      </section>

      <Section
        eyebrow="Mappa Mikromed"
        title="Proprieta intellettuale, prodotti e collaborazione industriale"
        description="Mikromed non e solo consulenza e non e solo un catalogo prodotti: e una societa tecnologica europea con brevetti propri, prodotti sviluppati e capacita di collaborazione industriale."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {heroServiceCards.map((card) => {
            const Icon = card.icon;
            return (
              <article className="rounded-lg border border-mineral-200 bg-white p-6 shadow-sm" key={card.title}>
                {Icon ? (
                  <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-mineral-50 text-forest-900">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                ) : null}
                <h3 className="text-xl font-semibold text-forest-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-mineral-700">{card.description}</p>
                <Link className="mt-5 inline-flex text-sm font-semibold text-forest-900 hover:text-mineral-700" href={card.href}>
                  {card.label}
                </Link>
              </article>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Credibilita"
        title="Numeri e asset da valorizzare"
        description="Il portafoglio brevettuale Mikromed e la base tecnologica dei prodotti, delle piattaforme e delle collaborazioni con partner selezionati."
        tone="muted"
      >
        <CardGrid items={statBlocks} columns="five" />
      </Section>

      <Section
        eyebrow="Dal brevetto al prodotto"
        title="Una piattaforma, piu percorsi applicativi"
        description="Ogni brevetto Mikromed viene analizzato come piattaforma applicativa: cosa protegge, quali settori puo raggiungere, quali prodotti sono gia collegati e quali opportunita restano aperte."
      >
        <CardGrid items={buildWithPatents} columns="five" />
      </Section>

      <Section
        eyebrow="Le aree principali"
        title="Dove applicare le tecnologie Mikromed"
        description="Le aree applicative vengono sempre trattate con valutazione tecnica, test e posizionamento regolatorio specifico."
        tone="muted"
      >
        <CardGrid items={technologyFields} />
      </Section>

      <Section
        eyebrow="Prodotti sviluppati"
        title="Prodotti e piattaforme principali"
        description="In homepage mostriamo solo i progetti principali. La pagina prodotti contiene la mappa completa con status, brevetti collegati e opportunita."
      >
        <ProductGrid items={homepageProducts} />
        <div className="mt-10">
          <ButtonLink href="/products-projects">Vedi tutti i prodotti e le opportunita</ButtonLink>
        </div>
      </Section>

      <Section
        eyebrow="Cosa fa Mikromed"
        title="Tecnologie proprie, prodotti e servizi collegati"
        description="Il posizionamento Mikromed nasce dall'integrazione tra proprieta intellettuale, sviluppo di piattaforme e lavoro con partner selezionati."
        tone="muted"
      >
        <CardGrid items={whatMikromedDoes} />
      </Section>

      <Section
        eyebrow="Collaborazioni"
        title="Collabora con Mikromed"
        description="Se hai un mercato, un brand, un canale distributivo o un'esigenza tecnica, Mikromed puo valutare l'accesso a tecnologie brevettate, lo sviluppo di prodotti su misura, il licensing o la collaborazione regolatoria."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {collaborateCards.map((card) => {
            const Icon = card.icon;
            return (
              <article className="rounded-lg border border-mineral-200 bg-white p-6 shadow-sm" key={card.title}>
                {Icon ? (
                  <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-mineral-50 text-forest-900">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                ) : null}
                <h3 className="text-xl font-semibold text-forest-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-mineral-700">{card.description}</p>
                <Link className="mt-5 inline-flex text-sm font-semibold text-forest-900 hover:text-mineral-700" href={card.href}>
                  {card.label}
                </Link>
              </article>
            );
          })}
        </div>
      </Section>

      <CTASection
        description="Che tu voglia conoscere una tecnologia, valutare un prodotto sviluppato o proporre una collaborazione, possiamo costruire un percorso tecnico e regolatorio coerente."
        href="/contact"
        label="Contatta Mikromed"
        title="Brevetto, prodotto o collaborazione?"
      />
    </>
  );
}
