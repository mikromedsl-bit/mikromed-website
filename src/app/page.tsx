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
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 technical-grid opacity-55" aria-hidden="true" />
        <div className="absolute -right-28 top-20 h-72 w-72 rounded-full border border-mineral-200/60 bg-white/20" aria-hidden="true" />
        <div className="absolute bottom-16 right-20 h-40 w-40 rounded-full border border-mineral-200/50" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[calc(100vh-4.75rem)] max-w-7xl items-center gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-500">
              Mikromed Europa S.L.
            </p>
            <h1 className="mt-6 max-w-4xl text-[2.55rem] font-semibold leading-[1.04] tracking-normal text-forest-900 text-balance sm:text-5xl lg:text-[3.65rem]">
              Brevetti approvati, prodotti sviluppati e collaborazioni industriali.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-mineral-700">
              Mikromed Europa valorizza un portafoglio di brevetti concessi e
              tecnologie funzionali, trasformandoli in prodotti, piattaforme
              applicative e opportunita di collaborazione nei settori superfici,
              coating, oral care, agricoltura, gestione idrica e applicazioni
              tecniche.
            </p>
            <p className="mt-4 text-base font-semibold text-forest-800">
              Brevetti approvati, prodotti sviluppati e collaborazioni industriali per mercati regolati.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/patents">Scopri i brevetti</ButtonLink>
              <ButtonLink href="/products-projects" variant="secondary">
                Esplora i prodotti
              </ButtonLink>
              <ButtonLink href="/collaborate" variant="secondary">
                Collabora con noi
              </ButtonLink>
            </div>
          </div>
          <div className="hero-logo-orbit relative flex min-h-[320px] items-center justify-center sm:min-h-[420px] lg:min-h-[520px]">
            <div className="absolute h-[18rem] w-[18rem] rounded-full border border-mineral-200/65 bg-white/15 sm:h-[24rem] sm:w-[24rem] lg:h-[30rem] lg:w-[30rem]" aria-hidden="true" />
            <div className="absolute h-[13rem] w-[13rem] rounded-full border border-mineral-200/45 sm:h-[18rem] sm:w-[18rem] lg:h-[23rem] lg:w-[23rem]" aria-hidden="true" />
            <div className="relative h-72 w-72 overflow-hidden rounded-full sm:h-96 sm:w-96 lg:h-[27rem] lg:w-[27rem]">
              <Image
                alt="Mikromed Europa S.L. logo"
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 27rem, 24rem"
                src="/images/mikromed-logo.png"
              />
            </div>
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
              <article className="premium-card rounded-lg p-6" key={card.title}>
                {Icon ? (
                  <span className="premium-icon mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg text-forest-900">
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
        tone="dark"
      >
        <CardGrid items={statBlocks} columns="five" dark />
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
              <article className="premium-card rounded-lg p-6" key={card.title}>
                {Icon ? (
                  <span className="premium-icon mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg text-forest-900">
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
