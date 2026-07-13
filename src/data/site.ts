import {
  BadgeCheck,
  Beaker,
  ClipboardCheck,
  Factory,
  FileLock2,
  Handshake,
  Layers3,
  PenTool,
  ShieldCheck,
  TestTube2
} from "lucide-react";
import { applications } from "@/data/applications";
import { productGroups } from "@/data/products";
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
    "Brevetti, prodotti e collaborazioni per mercati regolati: tecnologie proprietarie, prodotti Mikromed, consulenza regolatoria e supporto tecnico brevettuale.",
  url: "https://mikromed-europa.example",
  contactEmail: "info@mikromed-europa.com",
  contactPhone: "+34 000 000 000",
  address: "Operatività europea - dati di contatto da confermare"
};

export const heroServiceCards: (CardItem & { href: string; label: string })[] = [
  {
    title: "I nostri brevetti",
    description:
      "Mikromed dispone di un portafoglio di brevetti approvati e know-how tecnico protetto, utilizzato come base per prodotti propri e progetti industriali.",
    href: "/patents",
    label: "Brevetti e tecnologie",
    icon: FileLock2
  },
  {
    title: "I nostri prodotti",
    description:
      "Sviluppiamo prodotti, concept e piattaforme tecnologiche per agricoltura, superfici, animal care e applicazioni funzionali.",
    href: "/products-projects",
    label: "Prodotti e opportunità",
    icon: Layers3
  },
  {
    title: "Collaborazioni e servizi",
    description:
      "Collaboriamo con partner industriali per sviluppo prodotto, consulenza regolatoria, strategia claim e supporto alla scrittura brevettuale.",
    href: "/collaborate",
    label: "Partnership e servizi",
    icon: Handshake
  }
];

export const statBlocks: CardItem[] = [
  {
    title: "5 brevetti approvati",
    description: "Proprietà intellettuale sviluppata internamente e applicata a prodotti e progetti.",
    icon: BadgeCheck
  },
  {
    title: "Prodotti e piattaforme proprietarie",
    description: "Soluzioni Mikromed sviluppate per agricoltura, superfici e applicazioni funzionali.",
    icon: Layers3
  },
  {
    title: "Progetti di sviluppo prodotto",
    description: "Percorsi tecnici e formulativi costruiti su know-how proprietario e obiettivi industriali.",
    icon: Beaker
  },
  {
    title: "Strategia regolatoria e claim",
    description: "Posizionamento, etichette, claim e documentazione per progetti interni e partner.",
    icon: ClipboardCheck
  },
  {
    title: "Collaborazioni industriali",
    description: "Partnership, licenze, distribuzione, co-sviluppo e supporto tecnico brevettuale.",
    icon: Handshake
  }
];

export const whatMikromedDoes: CardItem[] = [
  {
    title: "Sviluppiamo brevetti e tecnologie proprie",
    description:
      "Mikromed sviluppa tecnologie funzionali e formulazioni protette da brevetto, con applicazioni in diversi mercati regolati.",
    icon: FileLock2
  },
  {
    title: "Creiamo prodotti e piattaforme",
    description:
      "Trasformiamo le nostre tecnologie in prodotti, concept e piattaforme applicabili ad agricoltura, superfici, animal care e altri settori tecnici.",
    icon: Layers3
  },
  {
    title: "Collaboriamo con aziende e partner",
    description:
      "Mettiamo a disposizione esperienza tecnica, regolatoria e brevettuale per sviluppare nuovi prodotti o nuove proprietà intellettuali insieme ai partner.",
    icon: Factory
  }
];

export const collaborateCards: (CardItem & { href: string; label: string })[] = [
  {
    title: "Crea un prodotto con le nostre tecnologie",
    description:
      "Hai un mercato, un brand o una rete commerciale? Possiamo valutare l'adattamento di tecnologie Mikromed a un nuovo prodotto o a un nuovo territorio.",
    href: "/create-your-product",
    label: "Crea il tuo prodotto",
    icon: TestTube2
  },
  {
    title: "Consulenza regolatoria e claim",
    description:
      "Supportiamo il posizionamento del prodotto, la revisione delle etichette, la strategia claim e la riduzione del rischio comunicativo prima del lancio.",
    href: "/regulatory-claims",
    label: "Consulenza regolatoria",
    icon: ShieldCheck
  },
  {
    title: "Scrittura tecnica brevetti",
    description:
      "Affianchiamo aziende e inventori nella strutturazione tecnica del brevetto, dalla prima bozza alla documentazione di supporto per il percorso di concessione.",
    href: "/patent-writing",
    label: "Scrittura brevetti",
    icon: PenTool
  }
];

export const buildWithPatents: CardItem[] = [
  {
    title: "Accesso a tecnologie brevettate",
    description: "Valutazione di brevetti approvati e piattaforme tecnologiche protette come base del progetto.",
    icon: FileLock2
  },
  {
    title: "Adattamento della formulazione",
    description: "Adattamento di formato, funzione tecnica, canale e requisiti applicativi.",
    icon: TestTube2
  },
  {
    title: "Posizionamento regolatorio",
    description: "Allineamento tra claim, etichetta, documentazione tecnica e comunicazione conforme.",
    icon: ShieldCheck
  },
  {
    title: "Valutazione di territori e opportunità",
    description: "Analisi di disponibilità commerciale, canali e possibili accordi territoriali.",
    icon: Factory
  },
  {
    title: "Possibile licenza o partnership",
    description: "Valutazione di licenza, distribuzione, co-sviluppo o collaborazione tecnica.",
    icon: Handshake
  },
  {
    title: "Supporto tecnico sotto NDA",
    description: "Condivisione riservata di informazioni tecniche quando il progetto lo richiede.",
    icon: FileLock2
  }
];

export const patentPortfolioCards: CardItem[] = [
  {
    title: "Brevetti propri Mikromed",
    description: "Portafoglio di brevetti approvati sviluppati e valorizzati da Mikromed.",
    icon: BadgeCheck
  },
  {
    title: "Tecnologie sviluppate internamente",
    description: "Piattaforme tecnologiche proprietarie applicabili a prodotti Mikromed e progetti industriali.",
    icon: Layers3
  },
  {
    title: "Accesso tramite partnership",
    description: "Possibile accesso a tecnologie e know-how tramite accordi strutturati, licenza o co-sviluppo.",
    icon: Handshake
  },
  {
    title: "Supporto a nuovi brevetti",
    description: "Supporto tecnico alla strutturazione di nuove idee brevettabili insieme ai partner.",
    icon: PenTool
  },
  {
    title: "Applicazioni possibili",
    description: "Agricoltura, superfici, animal care, formulazioni funzionali e progetti R&D.",
    icon: Factory
  },
  {
    title: "Accesso tecnico sotto NDA",
    description: "Condivisione tecnica riservata in discussioni di partnership qualificate.",
    icon: ShieldCheck
  }
];

export const technologyFields: CardItem[] = [
  {
    title: "Tecnologie funzionali a base minerale",
    description: "Piattaforme minerali protette per formulazioni funzionali e progetti applicativi.",
    icon: Layers3
  },
  {
    title: "Sistemi a base di zeoliti e chabasite",
    description: "Percorsi tecnologici costruiti intorno a proprietà fisiche e compatibilità formulativa.",
    icon: Beaker
  },
  {
    title: "Formulazioni funzionali con rame e argento",
    description: "Sistemi formulativi da valutare con attenzione tecnica, claim e posizionamento regolatorio.",
    icon: TestTube2
  },
  {
    title: "Approcci fisici orientati alle superfici",
    description: "Formulazioni orientate alle superfici e ai coatings, con comunicazione prudente.",
    icon: ShieldCheck
  },
  {
    title: "Tecnologie per la gestione fisica dell'acqua",
    description: "Piattaforme per applicazioni agricole, suolo e contesti dove la gestione fisica è centrale.",
    icon: Factory
  },
  {
    title: "Know-how formulativo",
    description: "Adattamento della tecnologia a prodotti propri, partner industriali e opportunità di mercato.",
    icon: ClipboardCheck
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
    title: "Coordinamento con professionisti brevettuali dove necessario",
    description:
      "Supporto tecnico alla documentazione e coordinamento con consulenti qualificati per gli aspetti formali.",
    icon: ShieldCheck
  }
];

export const processSteps = [
  "Primo confronto",
  "NDA se necessario",
  "Valutazione tecnica",
  "Percorso formulativo / regolatorio / brevettuale",
  "Proposta progetto",
  "Sviluppo",
  "Lancio o supporto al deposito"
];

export const pages: Record<string, PageContent> = {
  patents: {
    slug: "patents",
    eyebrow: "Brevetti e tecnologie",
    title: "Brevetti approvati e tecnologie proprietarie",
    description:
      "Mikromed Europa sviluppa e valorizza un portafoglio di brevetti approvati e tecnologie funzionali applicabili a prodotti propri e progetti industriali.",
    intro:
      "La proprietà intellettuale Mikromed non è solo un asset documentale: è la base di prodotti, piattaforme e collaborazioni industriali. Le informazioni tecniche possono essere condivise sotto NDA.",
    keywords: ["brevetti approvati", "tecnologie proprietarie", "tecnologie minerali", "supporto brevettuale"],
    sections: [
      {
        title: "Il portafoglio brevetti Mikromed",
        items: patentPortfolioCards
      },
      {
        title: "Campi tecnologici",
        items: technologyFields
      }
    ],
    cta: {
      title: "Vuoi approfondire una tecnologia Mikromed?",
      description:
        "Possiamo valutare applicazioni possibili, accesso tecnico sotto NDA o nuovi progetti brevettuali con partner.",
      href: "/collaborate",
      label: "Collabora con noi"
    }
  },
  technologies: {
    slug: "patents",
    eyebrow: "Brevetti e tecnologie",
    title: "Brevetti approvati e tecnologie proprietarie",
    description:
      "Mikromed Europa sviluppa e valorizza un portafoglio di brevetti approvati e tecnologie funzionali applicabili a prodotti propri e progetti industriali.",
    keywords: ["brevetti approvati", "tecnologie proprietarie", "tecnologie minerali"],
    sections: [
      {
        title: "Il portafoglio brevetti Mikromed",
        items: patentPortfolioCards
      },
      {
        title: "Campi tecnologici",
        items: technologyFields
      }
    ]
  },
  applications: {
    slug: "applications",
    eyebrow: "Applicazioni",
    title: "Applicazioni delle tecnologie Mikromed",
    description:
      "Le tecnologie Mikromed possono essere adattate a diversi campi applicativi, in base alla funzione tecnica, al percorso regolatorio e all'opportunità di mercato.",
    intro:
      "Mikromed lavora su prodotti e piattaforme proprie, ma può anche valutare applicazioni con partner industriali quando esiste una reale opportunità tecnica o territoriale.",
    keywords: ["animal care", "agricoltura", "superfici", "coatings", "tecnologie minerali"],
    sections: [
      {
        title: "Campi applicativi",
        items: applications
      }
    ],
    cta: {
      title: "Hai un'applicazione specifica?",
      description:
        "Possiamo valutare funzione tecnica, percorso regolatorio e opportunità di partnership.",
      href: "/collaborate",
      label: "Collabora con noi"
    }
  },
  "products-projects": {
    slug: "products-projects",
    eyebrow: "Prodotti e opportunità",
    title: "Prodotti, piattaforme e opportunità",
    description:
      "Mikromed sviluppa prodotti propri, concept e piattaforme tecnologiche. Alcuni progetti sono già attivi in mercati selezionati, mentre altri possono essere adattati tramite partnership, distribuzione o licenza.",
    intro:
      "La disponibilità commerciale, le eventuali esclusive territoriali e i modelli di partnership vengono valutati caso per caso. I partner esistenti non vengono divulgati pubblicamente.",
    keywords: ["prodotti Mikromed", "piattaforme tecnologiche", "partnership industriali", "coatings", "agricoltura"],
    sections: productGroups.map((group) => ({
      title: group.title,
      description: group.description,
      items: group.items
    })),
    cta: {
      title: "Valuta un prodotto, un territorio o una partnership.",
      description:
        "Possiamo discutere disponibilità commerciale, possibili esclusive territoriali e modelli di collaborazione caso per caso.",
      href: "/collaborate",
      label: "Collabora con noi"
    }
  },
  collaborate: {
    slug: "collaborate",
    eyebrow: "Collabora con noi",
    title: "Collabora con Mikromed",
    description:
      "Mikromed collabora con aziende, distributori, laboratori e partner industriali per sviluppare prodotti, tecnologie, strategie regolatorie e nuovi progetti brevettuali.",
    intro:
      "Oltre allo sviluppo dei propri prodotti, Mikromed può valutare nuove collaborazioni industriali, territoriali e tecniche. Le informazioni dettagliate possono essere condivise sotto NDA.",
    keywords: ["collaborazione industriale", "partnership", "sviluppo prodotto", "licenza tecnologica"],
    sections: [
      {
        title: "Percorsi di collaborazione",
        items: [
          {
            title: "Crea un prodotto con tecnologie Mikromed",
            description: "Valutiamo l'adattamento di tecnologie proprietarie a nuovi prodotti, canali o territori.",
            icon: TestTube2
          },
          {
            title: "Valuta una distribuzione o partnership territoriale",
            description: "Analizziamo opportunità commerciali, disponibilità territoriali e possibili esclusive.",
            icon: Handshake
          },
          {
            title: "Sviluppa una nuova formulazione",
            description: "Percorsi tecnici per concept, prototipi, piattaforme applicative e documentazione.",
            icon: Beaker
          },
          {
            title: "Richiedi consulenza regolatoria",
            description: "Claim, etichette, posizionamento e riduzione del rischio comunicativo.",
            icon: ShieldCheck
          },
          {
            title: "Costruisci un nuovo progetto brevettuale",
            description: "Supporto tecnico alla strutturazione dell'idea e alla bozza brevettuale.",
            icon: PenTool
          }
        ]
      }
    ],
    cta: {
      title: "Avvia una collaborazione.",
      description:
        "Raccontaci prodotto, territorio, applicazione o idea tecnica: valuteremo il percorso più adatto.",
      href: "/contact",
      label: "Contatta Mikromed"
    }
  },
  "create-your-product": {
    slug: "create-your-product",
    eyebrow: "Collaborazione prodotto",
    title: "Crea un prodotto con le tecnologie Mikromed",
    description:
      "Quando un partner conosce il proprio mercato ma ha bisogno di una tecnologia protetta, di una formulazione funzionale o di un percorso regolatorio coerente, Mikromed può intervenire come partner tecnico e strategico.",
    intro:
      "Questa pagina descrive una delle possibili forme di collaborazione. Mikromed sviluppa anche prodotti e piattaforme proprie; la creazione di prodotti con partner viene valutata caso per caso.",
    keywords: ["sviluppo prodotto", "tecnologie Mikromed", "licenza tecnologica"],
    sections: [
      {
        title: "Percorso di collaborazione",
        items: buildWithPatents
      }
    ],
    cta: {
      title: "Vuoi valutare un nuovo prodotto o territorio?",
      description:
        "Porta mercato, brand, canale o applicazione: Mikromed può valutare tecnologia, posizionamento e modello di collaborazione.",
      href: "/contact",
      label: "Avvia una collaborazione"
    }
  },
  "regulatory-claims": {
    slug: "regulatory-claims",
    eyebrow: "Consulenza regolatoria",
    title: "Consulenza regolatoria e strategia claim",
    description:
      "Una buona formulazione non basta. Un prodotto deve essere posizionato, etichettato e comunicato correttamente prima di arrivare sul mercato.",
    intro:
      "Mikromed supporta partner e progetti interni nella definizione di claim utilizzabili, etichette coerenti e percorsi regolatori sostenibili. Pareri legali formali, notifiche o autorizzazioni ufficiali possono richiedere professionisti qualificati nei singoli Paesi.",
    keywords: ["consulenza regolatoria", "strategia claim", "posizionamento regolatorio"],
    sections: [
      {
        title: "Ambiti di supporto",
        items: regulatoryCards
      }
    ],
    cta: {
      title: "Richiedi consulenza regolatoria.",
      description:
        "Porta il tuo prodotto, concept o comunicazione a una revisione prima del lancio.",
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
      "Mikromed sviluppa e valorizza il proprio portafoglio brevettuale. Inoltre può supportare aziende e inventori nella strutturazione tecnica di nuove idee brevettabili, nella preparazione della bozza tecnica e nel percorso documentale verso la concessione. Non opera come studio legale o mandatario brevettuale.",
    keywords: ["scrittura brevetti", "supporto tecnico brevettuale"],
    sections: [
      {
        title: "Brevetti propri e supporto a nuovi progetti",
        items: patentSupportCards
      }
    ],
    cta: {
      title: "Parla di un progetto brevettuale.",
      description:
        "Possiamo aiutarti a organizzare idea, logica inventiva, descrizione tecnica, esempi e revisioni.",
      href: "/contact",
      label: "Supporto brevetti"
    }
  },
  services: {
    slug: "services",
    eyebrow: "Servizi",
    title: "Servizi tecnici, regolatori e brevettuali",
    description:
      "I servizi Mikromed completano le attività su brevetti e prodotti propri: consulenza regolatoria, sviluppo prodotto e supporto tecnico brevettuale.",
    intro:
      "Mikromed non è solo una società di servizi: i servizi sono parte di un ecosistema più ampio fatto di proprietà intellettuale, prodotti proprietari e collaborazioni industriali.",
    keywords: ["consulenza regolatoria", "sviluppo prodotto", "scrittura brevetti"],
    sections: [
      {
        title: "Consulenza regolatoria",
        items: regulatoryCards
      },
      {
        title: "Sviluppo prodotto",
        items: productDevelopmentCards
      },
      {
        title: "Scrittura brevetti",
        items: patentWritingCards
      }
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
      "Mikromed supporta valutazione dell'idea, percorso formulativo, selezione ingredienti e tecnologie, logica del prototipo, documentazione tecnica, allineamento etichetta e claim.",
    keywords: ["sviluppo prodotto", "formulazioni funzionali"],
    sections: [
      {
        title: "Percorso di sviluppo",
        items: productDevelopmentCards
      }
    ],
    cta: {
      title: "Hai un'idea prodotto da strutturare?",
      description:
        "Possiamo aiutarti a trasformarla in un concept tecnico, documentato e coerente con il mercato.",
      href: "/contact",
      label: "Avvia un progetto"
    }
  },
  partnerships: {
    slug: "partnerships",
    eyebrow: "Partnership",
    title: "Partnership tecnologiche, regolatorie e brevettuali",
    description:
      "Mikromed lavora con partner industriali su prodotti, licenze, distribuzione, consulenza regolatoria e supporto tecnico brevettuale.",
    intro:
      "Il percorso può includere primo confronto, NDA se necessario, valutazione tecnica, percorso formulativo, regolatorio o brevettuale, proposta progetto, sviluppo, lancio o supporto al deposito.",
    keywords: ["partnership industriali", "sviluppo prodotto", "consulenza regolatoria", "scrittura brevetti"],
    sections: [
      {
        title: "Direzioni di partnership",
        items: collaborateCards
      },
      {
        title: "Servizi collegati",
        items: serviceOverviewCards
      }
    ],
    cta: {
      title: "Inizia con un primo confronto.",
      description:
        "Raccontaci il tuo obiettivo: prodotto, territorio, regolatorio, brevetto o partnership commerciale.",
      href: "/contact",
      label: "Contatta Mikromed"
    }
  }
};

export const globalKeywords = [
  "brevetti Mikromed",
  "prodotti Mikromed",
  "tecnologie proprietarie",
  "tecnologie brevettate",
  "formulazioni funzionali",
  "consulenza regolatoria",
  "strategia claim",
  "scrittura brevetti",
  "sviluppo prodotto",
  "tecnologie minerali",
  "agricoltura",
  "superfici",
  "coatings",
  "animal care",
  "partnership industriali"
];
