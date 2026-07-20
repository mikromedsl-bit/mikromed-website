import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { CardGrid } from "@/components/CardGrid";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { serviceOverviewCards } from "@/data/services";
import {
  buildWithPatents,
  heroServiceCards
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
              Consulenza regolatoria. Tecnologie brevettate. Prodotti e formulazioni proprietarie.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-mineral-700">
              Mikromed Europa integra competenza regolatoria, brevetti concessi e know-how
              formulativo per sviluppare prodotti, formulazioni e soluzioni tecniche applicabili
              a mercati industriali e regolati.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/regulatory-claims">Richiedi consulenza</ButtonLink>
              <ButtonLink href="/patents" variant="secondary">
                Esplora le tecnologie
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

      <section className="bg-white text-mineral-900">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <CardGrid items={heroServiceCards} />
        </div>
      </section>

      <Section
        eyebrow="Dal brevetto all'applicazione"
        title="Una piattaforma, piu percorsi applicativi"
        description="Ogni brevetto Mikromed viene analizzato come piattaforma applicativa: cosa protegge, quali settori puo raggiungere e quali percorsi tecnici possono essere valutati con partner selezionati."
      >
        <CardGrid items={buildWithPatents} columns="two" />
      </Section>

      <Section
        eyebrow="Brevetti e tecnologie"
        title="Brevetti e tecnologie"
        description="Una panoramica essenziale del portafoglio Mikromed, con brevetti concessi e domande pubblicate presentati senza confondere gli stati."
        tone="muted"
      >
        <ButtonLink href="/patents" variant="secondary">
          Vai ai brevetti
        </ButtonLink>
      </Section>

      <Section
        eyebrow="Applicazioni"
        title="Applicazioni"
        description="Le applicazioni sono organizzate per brevetto, con settori possibili, scenari sviluppabili, partner potenzialmente interessati e note regolatorie."
      >
        <ButtonLink href="/applications" variant="secondary">
          Esplora le applicazioni
        </ButtonLink>
      </Section>

      <Section
        eyebrow="Servizi"
        title="Consulenza regolatoria, sviluppo prodotto e scrittura brevetti"
        description="I servizi Mikromed supportano applicazioni e collaborazioni industriali con documentazione tecnica, strategia claim e strutturazione brevettuale."
      >
        <CardGrid items={serviceOverviewCards} />
      </Section>

      <CTASection
        description="Che si tratti di una consulenza regolatoria, di una tecnologia brevettata o dello sviluppo di una formulazione, Mikromed puo valutare il percorso piu adatto."
        href="/contact"
        label="Contattaci"
        title="Raccontaci il tuo progetto."
      />
    </>
  );
}
