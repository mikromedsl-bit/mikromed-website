import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CardGrid } from "@/components/CardGrid";
import { ProductGrid } from "@/components/ProductGrid";
import { Section } from "@/components/Section";
import { developedProducts, agriculturalPlatforms } from "@/data/products";
import { regulatoryCards } from "@/data/services";
import { patentSupportCards } from "@/data/site";
import {
  buildWithPatents,
  collaborateCards,
  heroServiceCards,
  statBlocks,
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
              Brevetti, prodotti e collaborazioni per mercati regolati.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-mineral-700">
              Mikromed Europa sviluppa tecnologie brevettate e prodotti propri
              nei settori agricoltura, superfici, animal care e formulazioni
              funzionali. Collabora inoltre con aziende e partner industriali
              per creare nuovi prodotti, definire strategie regolatorie e
              sviluppare nuovi brevetti.
            </p>
            <p className="mt-4 text-base font-semibold text-forest-800">
              Dalla proprietà intellettuale allo sviluppo prodotto, dal
              posizionamento regolatorio alla collaborazione industriale.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/patents">Scopri i nostri brevetti</ButtonLink>
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
              alt="Visual astratto di tecnologie minerali e laboratorio"
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
        eyebrow="Aree principali"
        title="Brevetti propri, prodotti Mikromed e collaborazioni industriali"
        description="Mikromed non è solo consulenza e non è un catalogo prodotti. È una società tecnologica europea con proprietà intellettuale, prodotti propri e capacità di collaborazione industriale."
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
        eyebrow="Credibilità"
        title="Proprietà intellettuale, prodotti e competenze applicate"
        description="Il portafoglio brevettuale Mikromed è la base tecnologica dei nostri prodotti e delle collaborazioni sviluppate con partner selezionati."
        tone="muted"
      >
        <CardGrid items={statBlocks} columns="five" />
      </Section>

      <Section
        eyebrow="Cosa fa Mikromed"
        title="Tecnologie proprie, prodotti e collaborazione industriale"
        description="Il posizionamento Mikromed nasce dall'integrazione tra proprietà intellettuale, sviluppo di piattaforme e lavoro con partner selezionati."
      >
        <CardGrid items={whatMikromedDoes} />
      </Section>

      <Section
        eyebrow="I nostri prodotti e piattaforme"
        title="Prodotti e piattaforme sviluppate da Mikromed"
        description="Mikromed sviluppa prodotti, concept e piattaforme tecnologiche basate sul proprio know-how. Alcune soluzioni sono già attive in mercati selezionati, altre sono disponibili per sviluppo, licenza o partnership."
        tone="muted"
      >
        <ProductGrid items={[...developedProducts, ...agriculturalPlatforms]} />
        <p className="mt-6 max-w-4xl text-sm leading-6 text-mineral-600">
          La disponibilità commerciale, eventuali esclusive territoriali e
          modelli di partnership vengono valutati caso per caso. I partner
          esistenti non vengono divulgati pubblicamente.
        </p>
        <div className="mt-10">
          <ButtonLink href="/products-projects">Vedi prodotti e opportunità</ButtonLink>
        </div>
      </Section>

      <Section
        eyebrow="Collabora con Mikromed"
        title="Collaborazioni per nuovi prodotti, nuove soluzioni e nuovi brevetti"
        description="Oltre allo sviluppo dei propri prodotti, Mikromed collabora con aziende, distributori, laboratori e partner industriali per creare nuove soluzioni tecniche, nuovi prodotti e nuovi percorsi brevettuali."
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

      <Section
        eyebrow="Collaborazione tecnica"
        title="Tu hai il mercato. Noi possiamo mettere la tecnologia."
        description="Quando un partner conosce il proprio mercato ma ha bisogno di una tecnologia protetta, di una formulazione funzionale o di un percorso regolatorio coerente, Mikromed può intervenire come partner tecnico e strategico."
        tone="muted"
      >
        <CardGrid items={buildWithPatents} />
        <div className="mt-10">
          <ButtonLink href="/collaborate">Avvia una collaborazione</ButtonLink>
        </div>
      </Section>

      <Section
        eyebrow="Servizi regolatori"
        title="Consulenza regolatoria e strategia claim"
        description="Una buona formulazione non basta. Un prodotto deve essere posizionato, etichettato e comunicato correttamente prima di arrivare sul mercato. Mikromed supporta partner e progetti interni nella definizione di claim utilizzabili, etichette coerenti e percorsi regolatori sostenibili."
      >
        <CardGrid items={regulatoryCards} />
        <div className="mt-10">
          <ButtonLink href="/regulatory-claims">Richiedi consulenza regolatoria</ButtonLink>
        </div>
      </Section>

      <Section
        eyebrow="Brevetti"
        title="Brevetti propri e supporto a nuovi progetti brevettuali"
        description="Mikromed sviluppa e valorizza il proprio portafoglio brevettuale. Inoltre, può supportare aziende e inventori nella strutturazione tecnica di nuove idee brevettabili, nella preparazione della bozza tecnica e nel percorso documentale verso la concessione."
        tone="muted"
      >
        <CardGrid items={patentSupportCards} />
        <div className="mt-10">
          <ButtonLink href="/patent-writing">Parla di un progetto brevettuale</ButtonLink>
        </div>
      </Section>

      <section className="bg-forest-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-200">
              Prossimo passo
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-balance">
              Brevetto, prodotto o collaborazione?
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-mineral-100">
              Che tu voglia conoscere le tecnologie Mikromed, valutare un
              prodotto già sviluppato o proporre una nuova collaborazione,
              possiamo costruire il percorso più adatto.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href="/products-projects" variant="light">
              Scopri i prodotti
            </ButtonLink>
            <ButtonLink href="/collaborate" variant="light">
              Avvia una collaborazione
            </ButtonLink>
            <ButtonLink href="/contact" variant="light">
              Richiedi una consulenza
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
