import { Beaker, Droplets, Factory, Leaf, Paintbrush, PawPrint, Sprout, SunMedium } from "lucide-react";
import type { ApplicationArea } from "@/data/types";

export const applications: ApplicationArea[] = [
  {
    title: "Superfici, ambienti tecnici e facility",
    description:
      "Applicazioni professionali su superfici e ambienti tecnici, con claim e categoria da valutare in base al contesto d'uso.",
    icon: Factory,
    linkedPatents: ["B01", "B03", "B05 solo per applicazioni locali/professionali da validare"],
    applicationExamples: [
      "trattamento tecnico superfici",
      "superfici professionali",
      "facility / cleaning B2B",
      "superfici illuminabili con formula + luce",
      "formulazioni locali da validare"
    ],
    linkedProducts: [
      "Sterilnova HH RTU",
      "Sterilnova Concentrato",
      "High Hygienic",
      "Fotonika"
    ],
    note: "Non usare claim sanitari, biocidi o terapeutici nella comunicazione commerciale."
  },
  {
    title: "Rivestimenti, vernici e coating",
    description:
      "Uso della piattaforma rame/argento come base tecnica per additivi, matrici vernicianti e supporti trattati.",
    icon: Paintbrush,
    linkedPatents: ["B01"],
    applicationExamples: [
      "additivo per pitture",
      "incorporazione in matrice verniciante",
      "coating tecnico su supporti",
      "materiali trattati"
    ],
    linkedProducts: ["MikroPaint Concentrato"]
  },
  {
    title: "Agricoltura, suolo e gestione idrica",
    description:
      "Tecnologie per gestione fisica dell'acqua nel substrato, radici, trapianto, serre, vivai e trasporto piante.",
    icon: Sprout,
    linkedPatents: [
      "B04",
      "D03 come domanda in valutazione",
      "B01 solo se collegato ad applicazioni da verificare"
    ],
    applicationExamples: [
      "gestione fisica dell'acqua nel substrato",
      "rilascio progressivo dell'acqua",
      "radici e trapianto",
      "florovivaismo",
      "serre e vivai",
      "trasporto piante"
    ],
    linkedProducts: [
      "Agro Soil / Mikro Soil",
      "Mikro Earth",
      "Hydronica Root",
      "Hydronica Foliar, collegamento da verificare"
    ]
  },
  {
    title: "Oral care, odontoiatria e biofilm",
    description:
      "Ambiti dental e oral care da sviluppare con particolare attenzione a safety, claim e categoria regolatoria.",
    icon: Beaker,
    linkedPatents: ["B02", "B05", "D02 come domanda in valutazione"],
    applicationExamples: [
      "delivery system dentinale",
      "gel o trattamento professionale",
      "dentifricio o prodotto orale",
      "collutorio tecnico",
      "gel orale",
      "licensing dental/oral care"
    ],
    linkedProducts: [
      "Gel dentinale professionale",
      "Dentifricio desensibilizzante white label",
      "Gel orale anti-biofilm",
      "Collutorio tecnico"
    ],
    note: "Le applicazioni oral care non devono essere presentate come prodotti medicali pronti."
  },
  {
    title: "Acqua, odori e sistemi fotoattivabili",
    description:
      "Sistemi formula + luce per applicazioni tecniche in acqua, liquidi, serbatoi, superfici illuminabili e gestione tecnica degli odori.",
    icon: SunMedium,
    linkedPatents: ["B03"],
    applicationExamples: [
      "trattamento tecnico acqua/liquidi",
      "serbatoi",
      "gestione tecnica odori",
      "formula + attivazione luminosa",
      "sistema formula + device"
    ],
    linkedProducts: ["Fotonika", "Kit Fotonika LED"]
  },
  {
    title: "Animal care e zootecnia",
    description:
      "Applicazioni su superfici di ambienti animali e concept separati per gestione fisica di umidita e odori.",
    icon: PawPrint,
    linkedPatents: [
      "B01 per superfici ambienti animali",
      "B05 solo per oral care animale da validare",
      "concept non ancora collegati ai brevetti"
    ],
    applicationExamples: [
      "superfici di ambienti zootecnici",
      "attrezzature e ambienti tecnici",
      "oral care animale da validare",
      "lettiere e gestione fisica umidita/odori"
    ],
    linkedProducts: ["Tecnologie per lettiere animali", "Concept separati da valutare"],
    note: "Non fare claim veterinari, terapeutici o biocidi."
  },
  {
    title: "Progetti su misura",
    description:
      "Percorsi dedicati per partner che portano mercato, canale, brand o necessita tecnica e richiedono adattamento formulativo.",
    icon: Leaf,
    linkedPatents: ["Accesso al portafoglio sotto NDA se necessario"],
    applicationExamples: [
      "sviluppo prodotto",
      "claim strategy",
      "documentazione tecnica",
      "co-sviluppo industriale",
      "licensing e white label"
    ],
    linkedProducts: ["Da definire in base al progetto"],
    note: "Le informazioni tecniche dettagliate vengono condivise dentro un percorso strutturato."
  }
];

export const applicationHighlights = [
  {
    title: "Gestione idrica",
    description: "Suolo, substrati, radici, serre e vivai.",
    icon: Droplets
  },
  {
    title: "Superfici e coating",
    description: "Formulazioni funzionali per supporti e matrici.",
    icon: Paintbrush
  },
  {
    title: "Sistemi fotoattivabili",
    description: "Formula + luce per applicazioni tecniche.",
    icon: SunMedium
  }
];
