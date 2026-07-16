import {
  Beaker,
  Droplets,
  Layers3,
  Paintbrush,
  Sprout,
  SunMedium,
  Waves
} from "lucide-react";
import type { ProductGroup, ProductItem } from "@/data/types";

export const productBadges = [
  "Formulazione esistente",
  "Prodotto definito",
  "In sviluppo",
  "Solo idea",
  "Documentazione tecnica disponibile",
  "Documento tecnico-commerciale",
  "Collegamento da verificare",
  "Pronto per qualifica B2B",
  "Licensing",
  "White label",
  "Distribuzione B2B",
  "Partnership industriale",
  "Territori da valutare",
  "Sotto NDA",
  "Regolatorio da verificare"
];

export const surfaceProducts: ProductItem[] = [
  {
    title: "MikroPaint Concentrato",
    description:
      "Additivo funzionale per idropitture, coating e matrici vernicianti. Da presentare come opportunita B2B, senza dichiarare vendita attiva se non documentata.",
    field: "Superfici, coating e prodotti tecnici",
    badges: [
      "Formulazione esistente",
      "Documentazione tecnica disponibile",
      "B2B coating",
      "White label",
      "Partnership industriale"
    ],
    patentRefs: ["B01 - 102021000004580"],
    icon: Paintbrush
  },
  {
    title: "Sterilnova HH RTU",
    description:
      "Formulazione funzionale pronta all'uso per applicazioni professionali su superfici compatibili. Claim e categoria devono essere verificati prima di ogni uso commerciale.",
    field: "Facility / professional care",
    badges: [
      "Prodotto definito",
      "Pronto per qualifica B2B",
      "Regolatorio da verificare"
    ],
    patentRefs: ["B01 - 102021000004580"],
    icon: Layers3
  },
  {
    title: "Sterilnova Concentrato",
    description:
      "Versione concentrata per applicazioni tecniche e professionali, con documentazione controllata ed etichetta in sviluppo.",
    field: "B2B tecnico",
    badges: ["Documentazione controllata", "Etichetta in sviluppo", "B2B tecnico"],
    patentRefs: ["B01 - 102021000004580"],
    icon: Layers3
  },
  {
    title: "High Hygienic",
    description:
      "Prodotto tecnico per superfici e igiene tecnica, con collegamento brevettuale da verificare prima di ogni comunicazione specifica.",
    field: "Superfici professionali",
    badges: ["Etichetta definita", "Collegamento da verificare", "Documentazione tecnica"],
    patentRefs: ["B01 - collegamento da verificare"],
    icon: Waves
  }
];

export const agriculturalPlatforms: ProductItem[] = [
  {
    title: "Agro Soil / Mikro Soil",
    description:
      "Formulazione idroritentiva per applicazioni agricole, substrati, serre e vivai, orientata alla gestione fisica dell'acqua.",
    field: "Agricoltura e gestione idrica",
    badges: [
      "Formulazione esistente",
      "Prospect da qualificare",
      "Agricoltura / serre",
      "Distribuzione B2B"
    ],
    patentRefs: ["B04 - 102023000025887"],
    icon: Sprout
  },
  {
    title: "Mikro Earth",
    description:
      "Concept tecnico per suolo e substrati, orientato alla gestione fisica dell'acqua e allo sviluppo con partner agricoli.",
    field: "Florovivaismo / substrati",
    badges: ["In sviluppo", "Documento tecnico", "Collegamento da verificare"],
    patentRefs: ["B04 - collegamento probabile/da verificare"],
    icon: Sprout
  },
  {
    title: "Hydronica Root",
    description:
      "Piattaforma tecnologica per applicazioni agricole e gestione fisica dell'acqua nella zona radicale.",
    field: "Applicazione radicale",
    badges: [
      "Piattaforma agricola",
      "Partnership industriale",
      "Test agronomici da sviluppare"
    ],
    patentRefs: ["B04 - 102023000025887"],
    icon: Droplets
  },
  {
    title: "Hydronica Foliar",
    description:
      "Piattaforma agricola orientata ad applicazioni fogliari e sviluppo di formulazioni funzionali. Il collegamento brevettuale diretto resta da verificare.",
    field: "Agricoltura",
    badges: ["Piattaforma agricola", "Collegamento da verificare", "In sviluppo"],
    patentRefs: ["Piattaforma agricola separata - collegamento da verificare"],
    icon: Sprout
  }
];

export const photoactiveProducts: ProductItem[] = [
  {
    title: "Fotonika",
    description:
      "Piattaforma fotoattivabile basata su formulazione + attivazione luminosa per applicazioni tecniche in acqua, superfici e gestione tecnica degli odori.",
    field: "Sistemi fotoattivabili",
    badges: [
      "Prodotto definito",
      "Documento tecnico-commerciale",
      "Formula + luce",
      "Partnership industriale"
    ],
    patentRefs: ["B03 - 102023000019734"],
    icon: SunMedium
  },
  {
    title: "Kit Fotonika LED",
    description:
      "Concept di sistema integrato composto da formulazione e dispositivo di attivazione luminosa, disponibile per sviluppo con partner industriale.",
    field: "Sistema formula + device",
    badges: ["Da sviluppare", "Sistema formula + device", "Partnership industriale"],
    patentRefs: ["B03 - 102023000019734"],
    icon: SunMedium
  }
];

export const oralCareConcepts: ProductItem[] = [
  {
    title: "Gel dentinale professionale",
    description:
      "Concept professionale basato su delivery system per ipersensibilita dentinale, da sviluppare con validazione safety e regolatoria.",
    field: "Oral care e dental",
    badges: ["Solo idea", "Licensing", "Regolatorio da verificare"],
    patentRefs: ["B02 - 102020000008134"],
    icon: Beaker
  },
  {
    title: "Dentifricio desensibilizzante white label",
    description:
      "Concept consumer oral care da sviluppare con partner industriale o brand del settore dental.",
    field: "Dental consumer",
    badges: ["Solo idea", "White label", "Claim da validare"],
    patentRefs: ["B02 - 102020000008134"],
    icon: Beaker
  },
  {
    title: "Gel orale anti-biofilm",
    description:
      "Concept per applicazione locale in ambito oral care, da sviluppare con attenzione a safety, claim e categoria regolatoria.",
    field: "Oral care",
    badges: ["Solo idea", "Applicazione da validare", "Licensing"],
    patentRefs: ["B05 - 102023000020343"],
    icon: Beaker
  },
  {
    title: "Collutorio tecnico",
    description:
      "Concept liquido per oral care, da validare tecnicamente e regolatoriamente prima di qualsiasi posizionamento commerciale.",
    field: "Oral care",
    badges: ["Solo idea", "White label", "Regolatorio da verificare"],
    patentRefs: ["B05 - 102023000020343"],
    icon: Beaker
  }
];

export const unmappedProducts: ProductItem[] = [
  {
    title: "MikroMosquito",
    description:
      "Prodotto consumer outdoor basato su approccio fisico di superficie. Non viene collegato forzatamente a un brevetto se la mappa non lo indica.",
    field: "Outdoor consumer",
    badges: [
      "Prodotto sviluppato",
      "Collegamento brevettuale non indicato nella mappa",
      "Partnership / distribuzione da valutare"
    ],
    patentRefs: ["Collegamento brevettuale non indicato nella mappa"],
    icon: Waves
  },
  {
    title: "Tecnologie per lettiere animali",
    description:
      "Concept minerali per gestione fisica dell'umidita e controllo fisico degli odori, da trattare come area separata se non collegata direttamente ai brevetti.",
    field: "Animal care",
    badges: ["In sviluppo", "Partnership industriale", "Regolatorio da verificare"],
    patentRefs: ["Area applicativa da valutare"],
    icon: Beaker
  }
];

export const homepageProducts = [
  surfaceProducts[0],
  surfaceProducts[1],
  photoactiveProducts[0],
  agriculturalPlatforms[2],
  agriculturalPlatforms[0]
];

export const developedProducts = [
  ...surfaceProducts,
  ...photoactiveProducts,
  ...oralCareConcepts,
  ...unmappedProducts
];

export const productGroups: ProductGroup[] = [
  {
    title: "Superfici, coating e prodotti tecnici",
    description:
      "Formulazioni e piattaforme collegate principalmente a B01, con claim commerciali da verificare in base al canale e all'uso previsto.",
    items: surfaceProducts
  },
  {
    title: "Agricoltura e gestione idrica",
    description:
      "Piattaforme idroritentive e agricole per suolo, substrati, radici, serre e vivai.",
    items: agriculturalPlatforms
  },
  {
    title: "Sistemi fotoattivabili",
    description:
      "Piattaforme basate su formulazione + attivazione luminosa, orientate a sistemi tecnici e collaborazioni industriali.",
    items: photoactiveProducts
  },
  {
    title: "Oral care e dental",
    description:
      "Concept e opportunita di licensing in area dental e oral care, da sviluppare con validazione tecnica, safety e regolatoria.",
    items: oralCareConcepts
  },
  {
    title: "Prodotti non direttamente mappati nel file brevetti",
    description:
      "Prodotti e concept gia presenti nel perimetro Mikromed, mantenuti senza collegamenti brevettuali forzati.",
    items: unmappedProducts
  }
];
