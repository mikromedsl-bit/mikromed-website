import {
  BadgeCheck,
  Beaker,
  ClipboardCheck,
  FileLock2,
  Layers3,
  PenTool,
  ShieldCheck,
  TestTube2
} from "lucide-react";
import type { CardItem, PageContent } from "@/data/types";

export const regulatoryCards: CardItem[] = [
  {
    title: "Strategia claim",
    description: "Scrittura e revisione di claim utilizzabili, coerenti con categoria, funzione tecnica e canale.",
    icon: ClipboardCheck
  },
  {
    title: "Revisione etichette",
    description: "Controllo di testi, gerarchia informativa, segnali di categoria e wording commerciale.",
    icon: BadgeCheck
  },
  {
    title: "Posizionamento prodotto",
    description: "Definizione della categoria più coerente per ridurre ambiguità prima del lancio.",
    icon: Layers3
  },
  {
    title: "Documentazione tecnica",
    description: "Struttura di documenti tecnici, dossier interni e materiali a supporto dei partner.",
    icon: FileLock2
  },
  {
    title: "Valutazione borderline",
    description: "Analisi di possibili aree sensibili tra detergente, cosmetico, biocida, mangimi o altri ambiti.",
    icon: ShieldCheck
  },
  {
    title: "Riduzione del rischio comunicativo",
    description: "Check pre-lancio su claim, etichetta, comunicazione commerciale e percorso regolatorio.",
    icon: TestTube2
  }
];

export const productDevelopmentCards: CardItem[] = [
  {
    title: "Valutazione dell'idea",
    description: "Analisi iniziale di mercato, funzione tecnica, vincoli e obiettivo commerciale.",
    icon: ClipboardCheck
  },
  {
    title: "Percorso formulativo",
    description: "Definizione di una logica di formula basata su tecnologie, ingredienti e campo applicativo.",
    icon: TestTube2
  },
  {
    title: "Selezione ingredienti e tecnologie",
    description: "Scelta delle piattaforme funzionali più adatte al target prodotto e al canale.",
    icon: Layers3
  },
  {
    title: "Logica del prototipo",
    description: "Struttura tecnica per arrivare a un concept valutabile da partner o mercato.",
    icon: Beaker
  },
  {
    title: "Documentazione tecnica",
    description: "Materiali ordinati per sostenere sviluppo, discussione partner e passaggi commerciali.",
    icon: FileLock2
  },
  {
    title: "Etichetta e claim",
    description: "Allineamento tra formula, posizionamento, comunicazione e percorso regolatorio.",
    icon: ShieldCheck
  }
];

export const patentWritingCards: CardItem[] = [
  {
    title: "Strutturazione dell'idea tecnica",
    description: "Analisi dell'idea, del problema tecnico e degli elementi che possono sostenere la bozza.",
    icon: ClipboardCheck
  },
  {
    title: "Logica inventiva",
    description: "Costruzione del razionale tecnico e della differenza rispetto alle soluzioni note.",
    icon: Layers3
  },
  {
    title: "Scrittura della bozza brevettuale",
    description: "Supporto tecnico alla prima bozza, con descrizione ordinata e linguaggio coerente.",
    icon: PenTool
  },
  {
    title: "Supporto a descrizione e rivendicazioni",
    description: "Aiuto nella struttura tecnica di descrizione, esempi e logica delle rivendicazioni.",
    icon: FileLock2
  },
  {
    title: "Esempi tecnici e forme di realizzazione",
    description: "Preparazione di esempi, varianti e applicazioni utili alla documentazione tecnica.",
    icon: Beaker
  },
  {
    title: "Revisioni durante l'esame",
    description: "Supporto tecnico nelle revisioni e nel coordinamento con professionisti brevettuali, se necessario.",
    icon: ShieldCheck
  }
];

export const serviceOverviewCards: CardItem[] = [
  {
    title: "Consulenza regolatoria",
    description:
      "Claim, etichette, posizionamento prodotto, documentazione tecnica e check pre-lancio.",
    icon: ShieldCheck
  },
  {
    title: "Sviluppo prodotto",
    description:
      "Valutazione dell'idea, percorso formulativo, logica del prototipo e concept partner-ready.",
    icon: Beaker
  },
  {
    title: "Scrittura brevetti",
    description:
      "Supporto tecnico alla bozza brevettuale, alla logica inventiva e al percorso verso la concessione.",
    icon: PenTool
  }
];

export const servicePages: Record<string, PageContent> = {
  services: {
    slug: "services",
    eyebrow: "Servizi",
    title: "Servizi tecnici, regolatori e brevettuali",
    description:
      "Mikromed affianca aziende e partner industriali nello sviluppo prodotto, nella strategia claim e nella scrittura tecnica brevettuale.",
    intro:
      "I servizi possono essere attivati come progetto autonomo o come parte di una partnership tecnologica più ampia.",
    keywords: ["consulenza regolatoria", "strategia claim", "sviluppo prodotto", "scrittura brevetti"],
    sections: [
      {
        title: "Aree di servizio",
        items: serviceOverviewCards
      }
    ],
    cta: {
      title: "Raccontaci cosa vuoi costruire.",
      description:
        "Possiamo aiutarti a impostare un percorso tecnico, regolatorio o brevettuale coerente con il tuo mercato.",
      href: "/contact",
      label: "Richiedi una consulenza"
    }
  },
  regulatory: {
    slug: "regulatory-claims",
    eyebrow: "Consulenza regolatoria",
    title: "Consulenza regolatoria e strategia claim",
    description:
      "Un buon prodotto ha bisogno di un posizionamento corretto, claim utilizzabili e documentazione coerente.",
    intro:
      "Mikromed fornisce supporto tecnico e strategico in ambito regolatorio. Pareri legali formali, notifiche o autorizzazioni ufficiali possono richiedere il coinvolgimento di professionisti qualificati nei singoli Paesi.",
    keywords: ["consulenza regolatoria", "strategia claim", "posizionamento regolatorio"],
    sections: [
      {
        title: "Ambiti di supporto",
        items: regulatoryCards
      },
      {
        title: "Esempi di attività",
        description:
          "Revisione etichetta, scrittura claim, classificazione prodotto, posizionamento non biocida, valutazione borderline, struttura del fascicolo tecnico e revisione della comunicazione commerciale.",
        items: []
      }
    ],
    cta: {
      title: "Proteggi i tuoi claim. Proteggi il tuo prodotto.",
      description:
        "Porta il tuo concept a una discussione regolatoria prima di finalizzare etichetta, packaging e comunicazione.",
      href: "/contact",
      label: "Richiedi consulenza regolatoria"
    }
  },
  productDevelopment: {
    slug: "product-development",
    eyebrow: "Sviluppo prodotto",
    title: "Sviluppo prodotto",
    description:
      "Dall'idea tecnica a un concept pronto per partner o mercato, con formulazione, documentazione e claim allineati.",
    intro:
      "Mikromed supporta la costruzione di percorsi prodotto concreti: valutazione dell'idea, selezione delle tecnologie, logica formulativa, prototipo, documentazione tecnica e posizionamento.",
    keywords: ["sviluppo prodotto", "formulazioni funzionali", "progetto partner-ready"],
    sections: [
      {
        title: "Percorso di sviluppo",
        items: productDevelopmentCards
      }
    ],
    cta: {
      title: "Trasforma l'idea in un progetto partner-ready.",
      description:
        "Definiamo insieme funzione tecnica, formula, posizionamento e documentazione del prodotto.",
      href: "/contact",
      label: "Avvia un progetto"
    }
  },
  patentWriting: {
    slug: "patent-writing",
    eyebrow: "Scrittura brevetti",
    title: "Scrittura brevetti: dall'idea alla concessione",
    description:
      "Mikromed supporta la strutturazione e la scrittura tecnica di documenti brevettuali, dalla prima idea tecnica al percorso di concessione.",
    intro:
      "Il supporto riguarda la parte tecnica della bozza brevettuale, la logica inventiva, gli esempi e la documentazione. Mikromed non opera come studio legale o mandatario brevettuale e può coordinarsi con professionisti brevettuali dove necessario.",
    keywords: ["scrittura brevetti", "supporto tecnico brevettuale", "bozza brevetto"],
    sections: [
      {
        title: "Supporto tecnico brevettuale",
        items: patentWritingCards
      },
      {
        title: "Coordinamento professionale",
        description:
          "Dove richiesto, il lavoro tecnico può essere coordinato con consulenti brevettuali o professionisti qualificati per gli aspetti formali e legali.",
        items: []
      }
    ],
    cta: {
      title: "Parla di un progetto brevettuale.",
      description:
        "Possiamo aiutarti a ordinare l'idea tecnica e preparare una bozza strutturata per il percorso successivo.",
      href: "/contact",
      label: "Supporto brevetti"
    }
  }
};
