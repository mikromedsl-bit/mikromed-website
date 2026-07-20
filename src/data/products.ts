import {
  Beaker,
  Droplets,
  Factory,
  Layers3,
  Paintbrush,
  PawPrint,
  Sprout,
  SunMedium,
  Waves
} from "lucide-react";
import type { ProductGroup, ProductItem } from "@/data/types";

export const productBadges = [
  "Formulazione funzionale",
  "B2B professionale",
  "Claim da valutare",
  "Partnership possibile",
  "Concentrato tecnico",
  "White label",
  "Sotto NDA",
  "Regolatorio da verificare",
  "Coating",
  "Additivo funzionale",
  "B2B industriale",
  "Licensing possibile",
  "Materiali trattati",
  "Supporti tecnici",
  "Co-sviluppo",
  "Test richiesti"
];

export const surfaceProducts: ProductItem[] = [
  {
    title: "Formulazione funzionale per superfici professionali",
    description:
      "Soluzione tecnica sviluppabile per superfici compatibili, ambienti professionali, facility management e applicazioni B2B. Il posizionamento commerciale dipende da destinazione d'uso, claim e categoria prodotto.",
    field: "Superfici, ambienti professionali e facility",
    badges: [
      "Formulazione funzionale",
      "B2B professionale",
      "Claim da valutare",
      "Partnership possibile"
    ],
    patentRefs: ["B01 - 102021000004580"],
    icon: Layers3
  },
  {
    title: "Soluzione concentrata per applicazioni tecniche",
    description:
      "Concept formulativo concentrato per partner professionali, produttori o distributori che necessitano di una base tecnica adattabile a diversi formati e mercati.",
    field: "Superfici, ambienti professionali e facility",
    badges: ["Concentrato tecnico", "White label", "Sotto NDA", "Regolatorio da verificare"],
    patentRefs: ["B01 - 102021000004580"],
    icon: Waves
  }
];

export const coatingPlatforms: ProductItem[] = [
  {
    title: "Additivo funzionale per idropitture e coating",
    description:
      "Piattaforma additiva sviluppabile per idropitture, rivestimenti tecnici e matrici vernicianti. Puo essere valutata con produttori di pitture, coating e materiali trattati.",
    field: "Pitture, rivestimenti e coating",
    badges: ["Coating", "Additivo funzionale", "B2B industriale", "Licensing possibile"],
    patentRefs: ["B01 - 102021000004580"],
    icon: Paintbrush
  },
  {
    title: "Tecnologia per materiali trattati e supporti tecnici",
    description:
      "Soluzione applicabile a supporti, filtri, tessili tecnici o materiali compatibili, da sviluppare con partner industriali e validare in base alla funzione dichiarata.",
    field: "Pitture, rivestimenti e coating",
    badges: ["Materiali trattati", "Supporti tecnici", "Co-sviluppo", "Test richiesti"],
    patentRefs: ["B01 - 102021000004580"],
    icon: Factory
  }
];

export const agriculturalPlatforms: ProductItem[] = [
  {
    title: "Composizione idroritentiva per substrati e radici",
    description:
      "Soluzione orientata alla gestione fisica dell'acqua in substrati, suolo e zona radicale, con potenziale sviluppo per vivai, serre, trapianto, colture in vaso e florovivaismo.",
    field: "Agricoltura, substrati e gestione fisica dell'acqua",
    badges: ["Agricoltura", "Gestione fisica acqua", "Test agronomici", "Distribuzione da valutare"],
    patentRefs: ["B04 - 102023000025887"],
    icon: Sprout
  },
  {
    title: "Premiscela tecnica per terricci e substrati professionali",
    description:
      "Concept sviluppabile per produttori di substrati, terricci e soluzioni professionali per il verde, da adattare a formulazione, dosaggio e mercato di destinazione.",
    field: "Agricoltura, substrati e gestione fisica dell'acqua",
    badges: ["Substrati", "Florovivaismo", "White label", "Partnership aperta"],
    patentRefs: ["B04 - 102023000025887"],
    icon: Sprout
  },
  {
    title: "Soluzione per trasporto e gestione vivaistica",
    description:
      "Piattaforma applicativa per supportare la gestione fisica dell'acqua durante fasi di trapianto, confezionamento o trasporto di piante, da validare con test specifici.",
    field: "Agricoltura, substrati e gestione fisica dell'acqua",
    badges: ["Vivai", "Trasporto piante", "Applicazione da validare", "Co-sviluppo"],
    patentRefs: ["B04 - 102023000025887"],
    icon: Droplets
  }
];

export const photoactiveProducts: ProductItem[] = [
  {
    title: "Sistema fotoattivabile formula + luce",
    description:
      "Piattaforma tecnica basata sull'abbinamento tra formulazione e attivazione luminosa, sviluppabile per applicazioni in acqua, superfici, serbatoi o ambienti controllati.",
    field: "Sistemi fotoattivabili formula + luce",
    badges: ["Formula + luce", "Sistema tecnico", "Device partner", "Protocollo da definire"],
    patentRefs: ["B03 - 102023000019734"],
    icon: SunMedium
  },
  {
    title: "Concept integrato con dispositivo LED",
    description:
      "Soluzione sviluppabile con partner industriali per integrare formulazione e sorgente luminosa in un sistema applicativo completo.",
    field: "Sistemi fotoattivabili formula + luce",
    badges: ["LED", "Sistema integrato", "Partnership industriale", "Sotto NDA"],
    patentRefs: ["B03 - 102023000019734"],
    icon: SunMedium
  }
];

export const oralCareConcepts: ProductItem[] = [
  {
    title: "Delivery system per applicazioni dental care",
    description:
      "Tecnologia di formulazione e rilascio locale sviluppabile con partner del settore oral care o dental professionale. Categoria prodotto, claim e safety devono essere valutati caso per caso.",
    field: "Oral care e dental",
    badges: ["Oral care", "Dental", "Licensing possibile", "Safety da validare"],
    patentRefs: ["B02 - 102020000008134"],
    icon: Beaker
  },
  {
    title: "Formulazione locale per oral care professionale",
    description:
      "Concept formulativo per applicazioni locali in ambito orale, da sviluppare con partner specializzati e con adeguato percorso tecnico-regolatorio.",
    field: "Oral care e dental",
    badges: ["Applicazione locale", "Partner specializzato", "Regolatorio da definire", "Sotto NDA"],
    patentRefs: ["B05 - 102023000020343"],
    icon: Beaker
  }
];

export const animalCareConcepts: ProductItem[] = [
  {
    title: "Soluzione tecnica per ambienti animali",
    description:
      "Piattaforma sviluppabile per superfici, attrezzature, box, ambienti zootecnici e gestione tecnica degli spazi animali, con claim e categoria prodotto da valutare.",
    field: "Animal care e ambienti animali",
    badges: ["Animal care", "Ambienti tecnici", "B2B zootecnia", "Claim da valutare"],
    patentRefs: ["B01 - 102021000004580"],
    icon: PawPrint
  },
  {
    title: "Concept per gestione fisica di umidita e odori",
    description:
      "Soluzione tecnica sviluppabile per lettiere, substrati o ambienti animali, basata su approccio fisico e da validare in base all'applicazione finale.",
    field: "Animal care e ambienti animali",
    badges: ["Approccio fisico", "Umidita e odori", "Lettiera / substrati", "Test richiesti"],
    patentRefs: ["Area applicativa da valutare"],
    icon: PawPrint
  }
];

export const customDevelopmentPlatforms: ProductItem[] = [
  {
    title: "Co-sviluppo di formulazioni funzionali",
    description:
      "Percorso di sviluppo con partner industriali che hanno un mercato, un canale distributivo o un'esigenza tecnica e cercano una tecnologia adattabile.",
    field: "Progetti industriali su misura",
    badges: ["Co-sviluppo", "Formulazione", "Partner industriale", "Sotto NDA"],
    patentRefs: ["Portafoglio Mikromed da valutare"],
    icon: Factory
  },
  {
    title: "Licensing e valorizzazione tecnologica",
    description:
      "Valutazione di accesso a tecnologie brevettate o piattaforme applicative attraverso licenza, white label, distribuzione o collaborazione industriale.",
    field: "Progetti industriali su misura",
    badges: ["Licensing", "White label", "Distribuzione", "Opportunita da valutare"],
    patentRefs: ["Portafoglio Mikromed da valutare"],
    icon: Layers3
  }
];

export const homepageProducts = [
  surfaceProducts[0],
  coatingPlatforms[0],
  photoactiveProducts[0],
  agriculturalPlatforms[0],
  oralCareConcepts[0]
];

export const developedProducts = [
  ...surfaceProducts,
  ...coatingPlatforms,
  ...agriculturalPlatforms,
  ...photoactiveProducts,
  ...oralCareConcepts,
  ...animalCareConcepts,
  ...customDevelopmentPlatforms
];

export const productGroups: ProductGroup[] = [
  {
    title: "Superfici, ambienti professionali e facility",
    description:
      "Soluzioni funzionali per superfici compatibili, ambienti professionali, facility management e applicazioni B2B, con claim e categoria da valutare.",
    items: surfaceProducts
  },
  {
    title: "Pitture, rivestimenti e coating",
    description:
      "Piattaforme additive e tecnologie per matrici vernicianti, supporti tecnici e materiali trattati.",
    items: coatingPlatforms
  },
  {
    title: "Agricoltura, substrati e gestione fisica dell'acqua",
    description:
      "Soluzioni idroritentive e concept applicativi per suolo, substrati, radici, serre, vivai e verde professionale.",
    items: agriculturalPlatforms
  },
  {
    title: "Sistemi fotoattivabili formula + luce",
    description:
      "Piattaforme basate su formulazione + attivazione luminosa, orientate a sistemi tecnici e collaborazioni industriali.",
    items: photoactiveProducts
  },
  {
    title: "Oral care e dental",
    description:
      "Tecnologie e concept in area oral care e dental, da sviluppare con validazione tecnica, safety e regolatoria.",
    items: oralCareConcepts
  },
  {
    title: "Animal care e ambienti animali",
    description:
      "Soluzioni tecniche per superfici, attrezzature, substrati e ambienti animali, da validare in base all'applicazione.",
    items: animalCareConcepts
  },
  {
    title: "Progetti industriali su misura",
    description:
      "Percorsi di co-sviluppo, licensing e valorizzazione tecnologica per partner con mercato, canale o bisogno applicativo specifico.",
    items: customDevelopmentPlatforms
  }
];
