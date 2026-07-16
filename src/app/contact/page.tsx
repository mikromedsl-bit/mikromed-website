import type { Metadata } from "next";
import { FileText, Mail, PenTool, Send, ShieldCheck, TestTube2 } from "lucide-react";
import { CardGrid } from "@/components/CardGrid";
import { Section } from "@/components/Section";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contatti",
  description:
    "Racconta a Mikromed cosa vuoi costruire: prodotto, consulenza regolatoria, scrittura brevetti, sviluppo o partnership.",
  path: "/contact",
  keywords: ["sviluppo prodotto", "consulenza regolatoria", "scrittura brevetti", "tecnologie brevettate"]
});

const contactRoutes = [
  {
    title: "Creare un prodotto con tecnologia Mikromed",
    description: "Parti da mercato, brand o rete commerciale e costruisci un percorso prodotto.",
    icon: TestTube2
  },
  {
    title: "Consulenza regolatoria",
    description: "Claim, etichette, posizionamento prodotto e check comunicativo pre-lancio.",
    icon: ShieldCheck
  },
  {
    title: "Scrittura brevetti",
    description: "Supporto tecnico alla bozza brevettuale, descrizione, esempi e revisioni.",
    icon: PenTool
  },
  {
    title: "Sviluppo prodotto",
    description: "Valutazione dell'idea, percorso formulativo, prototipo e documentazione tecnica.",
    icon: FileText
  }
];

const needOptions = [
  "Creare un prodotto con tecnologia Mikromed",
  "Consulenza regolatoria",
  "Scrittura brevetti",
  "Sviluppo prodotto",
  "Distribuzione / partnership",
  "Altro"
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden gradient-navy text-white">
        <div className="absolute inset-0 technical-grid-dark opacity-45" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-200">
            Contatti
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
            Raccontaci cosa vuoi costruire.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-mineral-100">
            Usa il form per descrivere prodotto, tecnologia, esigenza regolatoria,
            progetto brevettuale o opportunità di partnership. Mikromed valuterà
            il percorso più adatto.
          </p>
        </div>
      </section>

      <Section
        title="Avvia la conversazione giusta"
        description="Indica l'area di interesse: prodotto, regolatorio, brevetti, sviluppo o partnership commerciale."
        tone="muted"
      >
        <CardGrid items={contactRoutes} columns="four" />
      </Section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-500">
              Form di contatto
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-forest-900">
              Condividi obiettivo, mercato e applicazione
            </h2>
            <p className="mt-5 text-lg leading-8 text-mineral-700">
              Il form è statico e pronto per essere collegato a endpoint, CRM o
              servizio email. I dettagli tecnici possono essere gestiti sotto NDA.
            </p>
            <div className="mt-8 rounded-lg border border-mineral-200 bg-mineral-50 p-6 shadow-[0_10px_32px_rgba(23,50,77,0.06)]">
              <div className="flex items-start gap-3">
                <Mail aria-hidden="true" className="mt-1 h-5 w-5 text-forest-900" />
                <div>
                  <p className="font-semibold text-mineral-900">{siteConfig.contactEmail}</p>
                  <p className="mt-1 text-sm text-mineral-600">{siteConfig.contactPhone}</p>
                </div>
              </div>
            </div>
          </div>

          <form className="rounded-lg border border-mineral-200 bg-white p-6 shadow-[0_20px_52px_rgba(23,50,77,0.10)]">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-mineral-900">
                Nome
                <input
                  className="min-h-12 rounded-lg border border-mineral-200 px-4 text-mineral-900 outline-none transition focus:border-forest-900"
                  name="name"
                  placeholder="Il tuo nome"
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-mineral-900">
                Azienda
                <input
                  className="min-h-12 rounded-lg border border-mineral-200 px-4 text-mineral-900 outline-none transition focus:border-forest-900"
                  name="company"
                  placeholder="Nome azienda"
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-mineral-900">
                Email
                <input
                  className="min-h-12 rounded-lg border border-mineral-200 px-4 text-mineral-900 outline-none transition focus:border-forest-900"
                  name="email"
                  placeholder="nome@azienda.com"
                  type="email"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-mineral-900">
                Paese
                <input
                  className="min-h-12 rounded-lg border border-mineral-200 px-4 text-mineral-900 outline-none transition focus:border-forest-900"
                  name="country"
                  placeholder="Italia, Spagna, Francia..."
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-mineral-900 sm:col-span-2">
                Di cosa hai bisogno?
                <select
                  className="min-h-12 rounded-lg border border-mineral-200 px-4 text-mineral-900 outline-none transition focus:border-forest-900"
                  name="need"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Seleziona un&apos;opzione
                  </option>
                  {needOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-mineral-900 sm:col-span-2">
                Mercato / applicazione
                <input
                  className="min-h-12 rounded-lg border border-mineral-200 px-4 text-mineral-900 outline-none transition focus:border-forest-900"
                  name="market"
                  placeholder="Agricoltura, coatings, animal care, brevetto, regolatorio..."
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-mineral-900 sm:col-span-2">
                Messaggio
                <textarea
                  className="min-h-36 rounded-lg border border-mineral-200 px-4 py-3 text-mineral-900 outline-none transition focus:border-forest-900"
                  name="message"
                  placeholder="Raccontaci cosa vuoi costruire, quale mercato vuoi raggiungere o quale supporto tecnico/regolatorio/brevettuale ti serve."
                />
              </label>
            </div>
            <button
              className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-forest-900 px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(23,50,77,0.18)] transition hover:bg-forest-800"
              type="button"
            >
              Invia richiesta
              <Send aria-hidden="true" className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
