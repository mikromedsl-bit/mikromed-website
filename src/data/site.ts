import {
  BadgeCheck,
  Beaker,
  Factory,
  FileLock2,
  Handshake,
  Layers3,
  PenTool,
  ShieldCheck,
  TestTube2
} from "lucide-react";
import { patentPortfolioSummary } from "@/data/patents";
import {
  patentWritingCards,
  productDevelopmentCards,
  regulatoryCards,
  serviceOverviewCards
} from "@/data/services";
import type { CardItem, PageContent } from "@/data/types";

export const siteConfig = {
  name: "Mikromed Europa S.L.",
  description:
    "Brevetti approvati, applicazioni industriali e collaborazioni per mercati regolati.",
  url: "https://mikromed-europa.example",
  contactEmail: "info@mikromed-europa.com",
  contactPhone: "+34 000 000 000",
  address: "Operativita europea - dati di contatto da confermare"
};

export const heroServiceCards: (CardItem & { href: string; label: string })[] = [
  {
    title: "Consulenza regolatoria",
    description:
      "Claim, etichette, classificazione prodotto, documentazione tecnica e posizionamento.",
    href: "/regulatory-claims",
    label: "Richiedi consulenza",
    icon: ShieldCheck
  },
  {
    title: "Tecnologie brevettate",
    description:
      "Brevetti concessi, piattaforme funzionali e applicazioni sviluppabili con partner selezionati.",
    href: "/patents",
    label: "Esplora le tecnologie",
    icon: FileLock2
  },
  {
    title: "Prodotti e formulazioni proprietarie",
    description:
      "Soluzioni sviluppate da Mikromed sulla base di tecnologie, formulazioni e know-how interni.",
    href: "/product-development",
    label: "Sviluppo prodotto",
    icon: Beaker
  }
];

export const collaborateCards: (CardItem & { href: string; label: string })[] = [
  {
    title: "Licensing e accesso a tecnologie brevettate",
    description:
      "Accesso a piattaforme Mikromed con valutazione tecnica, regolatoria e commerciale sotto NDA quando necessario.",
    href: "/collaborate",
    label: "Accedi a una tecnologia",
    icon: FileLock2
  },
  {
    title: "Applicazioni industriali e sviluppo su misura",
    description:
      "Valutazione di applicazioni, sviluppo formulativo e percorsi tecnici con partner selezionati.",
    href: "/applications",
    label: "Esplora le applicazioni",
    icon: TestTube2
  },
  {
    title: "Consulenza regolatoria e scrittura brevetti",
    description:
      "Supporto su claim, etichette, documentazione tecnica e costruzione di nuovi progetti brevettuali.",
    href: "/services",
    label: "Vedi i servizi",
    icon: ShieldCheck
  }
];

export const buildWithPatents: CardItem[] = [
  {
    title: "Brevetto",
    description: "Analisi della tecnologia concessa o della domanda pubblicata, senza confondere gli stati.",
    icon: FileLock2
  },
  {
    title: "Applicazioni",
    description:
      "Valutazione dei settori raggiungibili, degli scenari applicativi e delle possibilità tecniche di utilizzo.",
    icon: Layers3
  },
  {
    title: "Sviluppo",
    description:
      "Traduzione della tecnologia in formulazioni, prototipi, percorsi tecnici e soluzioni applicative sviluppabili.",
    icon: TestTube2
  },
  {
    title: "Regolatorio",
    description: "Claim strategy, categoria prodotto, documentazione tecnica e comunicazione prudente.",
    icon: ShieldCheck
  }
];

export const patentPortfolioCards: CardItem[] = [
  {
    title: "5 brevetti concessi",
    description: `${patentPortfolioSummary.granted} brevetti approvati, presentati in modo istituzionale come basi tecniche proprietarie.`,
    icon: BadgeCheck
  },
  {
    title: "3 domande pubblicate / in valutazione",
    description: `${patentPortfolioSummary.pending} domande da mostrare in una sezione separata, senza presentarle come brevetti concessi.`,
    icon: FileLock2
  },
  {
    title: "Informazioni essenziali",
    description:
      "Numero, stato, data, titolo ufficiale, titolo breve, descrizione prudente e opportunita di valorizzazione.",
    icon: Layers3
  },
  {
    title: "Valorizzazione riservata",
    description:
      "Applicazioni specifiche, settori e sviluppi industriali vengono trattati nelle pagine dedicate o sotto NDA.",
    icon: Factory
  },
  {
    title: "Licensing e co-sviluppo",
    description: "Opportunita di licenza, white label, distribuzione B2B e partnership industriali.",
    icon: Handshake
  }
];

export const patentSupportCards: CardItem[] = [
  {
    title: "Portafoglio brevetti Mikromed",
    description: "Brevetti propri valorizzati come base tecnologica per prodotti e collaborazioni.",
    icon: FileLock2
  },
  ...patentWritingCards.slice(0, 4),
  {
    title: "Coordinamento con professionisti brevettuali",
    description:
      "Supporto tecnico alla documentazione e coordinamento con consulenti qualificati per gli aspetti formali.",
    icon: ShieldCheck
  }
];

export const pages: Record<string, PageContent> = {
  patents: {
    slug: "patents",
    eyebrow: "Brevetti e tecnologie",
    title: "Brevetti approvati e tecnologie proprietarie",
    description:
      "Mikromed Europa valorizza un portafoglio di brevetti concessi e tecnologie funzionali. Ogni brevetto rappresenta una base tecnica che puo essere sviluppata, concessa in licenza o integrata in progetti industriali selezionati.",
    intro:
      "In questa sezione sono riportate le informazioni essenziali dei brevetti. Le applicazioni specifiche, i settori di utilizzo e gli eventuali prodotti sviluppabili sono descritti nella sezione Applicazioni o approfonditi in fase di confronto diretto.",
    keywords: [
      "brevetti Mikromed",
      "tecnologie brevettate",
      "licensing tecnologia",
      "white label",
      "rame e argento",
      "chabasite"
    ],
    sections: [{ title: "Il portafoglio brevetti Mikromed", items: patentPortfolioCards }],
    cta: {
      title: "Vuoi approfondire una tecnologia Mikromed?",
      description:
        "Possiamo valutare applicazioni possibili, accesso tecnico sotto NDA o nuovi progetti brevettuali con partner.",
      href: "/collaborate",
      label: "Collabora con noi"
    }
  },
  applications: {
    slug: "applications",
    eyebrow: "Applicazioni",
    title: "Applicazioni dei brevetti Mikromed",
    description:
      "Ogni brevetto Mikromed rappresenta una piattaforma tecnologica che puo essere adattata a diversi settori applicativi. Le applicazioni vengono valutate in base a funzione tecnica, destinazione d'uso, test disponibili e posizionamento regolatorio.",
    intro:
      "In questa sezione le applicazioni sono organizzate per brevetto. Per ogni tecnologia vengono indicati i possibili ambiti di utilizzo, le categorie di sviluppo e i partner industriali potenzialmente interessati, senza esporre nomi commerciali o accordi riservati.",
    keywords: ["applicazioni brevetti", "settori applicativi", "sviluppo con partner", "licensing tecnologia"],
    sections: [{ title: "Applicazioni organizzate per brevetto", items: [] }]
  },
  collaborate: {
    slug: "collaborate",
    eyebrow: "Collabora con noi",
    title: "Collabora con Mikromed",
    description:
      "Mikromed collabora con aziende, distributori, laboratori e partner industriali per valutare applicazioni delle proprie tecnologie brevettate, sviluppare nuove formulazioni, definire strategie regolatorie e strutturare nuovi progetti brevettuali.",
    intro:
      "Le informazioni tecniche dettagliate vengono condivise sotto NDA o all'interno di un percorso di collaborazione strutturato.",
    keywords: ["licensing tecnologia", "white label", "distribuzione B2B", "co-sviluppo", "partnership industriali"],
    sections: [
      {
        title: "Percorsi di collaborazione",
        items: [
          {
            title: "Accedi a una tecnologia brevettata",
            description: "Valutiamo accesso, campo applicativo, limiti regolatori e modello di licenza.",
            icon: FileLock2
          },
          {
            title: "Valuta applicazioni industriali",
            description: "Partiamo dal portafoglio brevettuale e da un bisogno applicativo specifico.",
            icon: Layers3
          },
          {
            title: "Valuta distribuzione o partnership territoriale",
            description: "Analizziamo territori, canali e disponibilita caso per caso.",
            icon: Handshake
          },
          {
            title: "Crea un nuovo prodotto in co-sviluppo",
            description: "Costruiamo un percorso formulativo e documentale per un bisogno specifico.",
            icon: TestTube2
          },
          {
            title: "Richiedi supporto regolatorio",
            description: "Claim strategy, etichette, categoria prodotto e documentazione tecnica.",
            icon: ShieldCheck
          },
          {
            title: "Costruisci un nuovo brevetto con supporto tecnico",
            description: "Supporto tecnico a logica inventiva, descrizione, esempi e bozza brevettuale.",
            icon: PenTool
          }
        ]
      }
    ],
    cta: {
      title: "Avvia una collaborazione.",
      description:
        "Raccontaci prodotto, territorio, applicazione o idea tecnica: valuteremo il percorso piu adatto.",
      href: "/contact",
      label: "Contatta Mikromed"
    }
  },
  "regulatory-claims": {
    slug: "regulatory-claims",
    eyebrow: "Consulenza regolatoria",
    title: "Consulenza regolatoria e strategia claim",
    description:
      "Un prodotto deve essere posizionato, etichettato e comunicato correttamente prima di arrivare sul mercato.",
    intro:
      "Mikromed supporta partner e progetti interni nella definizione di claim utilizzabili, etichette coerenti e percorsi regolatori sostenibili.",
    keywords: ["consulenza regolatoria", "strategia claim", "posizionamento regolatorio"],
    sections: [{ title: "Ambiti di supporto", items: regulatoryCards }],
    cta: {
      title: "Richiedi consulenza regolatoria.",
      description: "Porta il tuo prodotto, concept o comunicazione a una revisione prima del lancio.",
      href: "/contact",
      label: "Richiedi consulenza regolatoria"
    }
  },
  "patent-writing": {
    slug: "patent-writing",
    eyebrow: "Scrittura brevetti",
    title: "Scrittura brevetti: dall'idea alla concessione",
    description:
      "Mikromed supporta la strutturazione e la scrittura tecnica di documenti brevettuali, dalla prima idea tecnica al percorso di concessione.",
    intro:
      "Mikromed sviluppa e valorizza il proprio portafoglio brevettuale. Inoltre puo supportare aziende e inventori nella strutturazione tecnica di nuove idee brevettabili. Non opera come studio legale o mandatario brevettuale.",
    keywords: ["scrittura brevetti", "supporto tecnico brevettuale"],
    sections: [{ title: "Brevetti propri e supporto a nuovi progetti", items: patentSupportCards }],
    cta: {
      title: "Parla di un progetto brevettuale.",
      description: "Possiamo aiutarti a organizzare idea, logica inventiva, descrizione tecnica ed esempi.",
      href: "/contact",
      label: "Supporto brevetti"
    }
  },
  services: {
    slug: "services",
    eyebrow: "Servizi",
    title: "Servizi tecnici, regolatori e brevettuali",
    description:
      "I servizi Mikromed completano le attivita su brevetti e applicazioni industriali: consulenza regolatoria, sviluppo prodotto e supporto tecnico brevettuale.",
    intro:
      "Mikromed non e solo una societa di servizi: i servizi sono parte di un ecosistema fatto di proprieta intellettuale, applicazioni industriali e collaborazioni tecniche.",
    keywords: ["consulenza regolatoria", "sviluppo prodotto", "scrittura brevetti"],
    sections: [
      { title: "Consulenza regolatoria", items: regulatoryCards },
      { title: "Sviluppo prodotto", items: productDevelopmentCards },
      { title: "Scrittura brevetti", items: patentWritingCards }
    ],
    cta: {
      title: "Hai bisogno di un servizio tecnico o regolatorio?",
      description:
        "Possiamo valutare se il bisogno riguarda un prodotto Mikromed, una collaborazione o un progetto autonomo.",
      href: "/contact",
      label: "Richiedi una consulenza"
    }
  },
  "product-development": {
    slug: "product-development",
    eyebrow: "Sviluppo prodotto",
    title: "Sviluppo prodotto",
    description:
      "Dall'idea tecnica a un concept pronto per partner o mercato, con formulazione, documentazione e claim allineati.",
    intro:
      "Mikromed supporta valutazione dell'idea, percorso formulativo, selezione ingredienti e tecnologie, logica del prototipo, documentazione tecnica e claim strategy.",
    keywords: ["sviluppo prodotto", "formulazioni funzionali"],
    sections: [{ title: "Percorso di sviluppo", items: productDevelopmentCards }],
    cta: {
      title: "Hai un'idea prodotto da strutturare?",
      description: "Possiamo aiutarti a trasformarla in un concept tecnico, documentato e coerente.",
      href: "/contact",
      label: "Avvia un progetto"
    }
  },
  partnerships: {
    slug: "partnerships",
    eyebrow: "Partnership",
    title: "Partnership tecnologiche, regolatorie e brevettuali",
    description:
      "Mikromed lavora con partner industriali su tecnologie brevettate, applicazioni, licenze, consulenza regolatoria e supporto tecnico brevettuale.",
    intro:
      "Il percorso puo includere primo confronto, NDA, valutazione tecnica, proposta progetto, sviluppo, lancio o supporto al deposito.",
    keywords: ["partnership industriali", "sviluppo prodotto", "consulenza regolatoria", "scrittura brevetti"],
    sections: [
      { title: "Direzioni di partnership", items: collaborateCards },
      { title: "Servizi collegati", items: serviceOverviewCards }
    ],
    cta: {
      title: "Inizia con un primo confronto.",
      description: "Raccontaci il tuo obiettivo: prodotto, territorio, regolatorio, brevetto o partnership.",
      href: "/contact",
      label: "Contatta Mikromed"
    }
  }
};

export const globalKeywords = [
  "brevetti Mikromed",
  "tecnologie brevettate",
  "formulazioni funzionali",
  "applicazioni industriali",
  "licensing tecnologia",
  "white label",
  "consulenza regolatoria",
  "scrittura brevetti",
  "sviluppo prodotto",
  "zeoliti",
  "chabasite",
  "rame e argento",
  "superfici",
  "coating",
  "agricoltura",
  "gestione idrica",
  "oral care"
];
