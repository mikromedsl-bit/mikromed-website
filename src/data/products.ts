import { Beaker, Layers3, Paintbrush, Sprout, Waves } from "lucide-react";
import type { ProductGroup, ProductItem } from "@/data/types";

export const productBadges = [
  "Prodotto sviluppato",
  "Mercato attivo",
  "Territori selezionati disponibili",
  "Territori disponibili",
  "Partnership aperta",
  "Possibili esclusive territoriali",
  "In sviluppo",
  "Disponibile per confronto",
  "Collegamento brevettuale documentato",
  "Piattaforma in domanda"
];

export const developedProducts: ProductItem[] = [
  {
    title: "MikroMosquito",
    description:
      "Prodotto consumer outdoor basato su un approccio fisico di superficie. Il report locale non ha trovato un numero di brevetto collegato in modo affidabile.",
    field: "Outdoor consumer",
    badges: ["Prodotto sviluppato", "Mercato attivo", "Territori disponibili"],
    patentRefs: ["Collegamento brevettuale non trovato nel report"],
    icon: Waves
  },
  {
    title: "MikroPaint",
    description:
      "Additivo funzionale per idropitture e applicazioni su superfici, collegato nei documenti locali al brevetto 102021000004580.",
    field: "Superfici e coatings",
    badges: ["Prodotto sviluppato", "Collegamento brevettuale documentato", "Partnership aperta"],
    patentRefs: ["102021000004580"],
    icon: Paintbrush
  },
  {
    title: "Sterilnova HH",
    description:
      "Formulazione funzionale orientata ad applicazioni su superfici, collegata nei documenti locali al brevetto 102021000004580.",
    field: "Formulazioni per superfici",
    badges: ["Prodotto sviluppato", "Collegamento brevettuale documentato", "Possibili esclusive territoriali"],
    patentRefs: ["102021000004580"],
    icon: Layers3
  },
  {
    title: "MikroMold / Mikromold",
    description:
      "Concept orientato alle superfici basato sulla piattaforma rame/argento; il numero brevettuale non è sempre riportato nei materiali.",
    field: "Superfici e ambienti umidi",
    badges: ["Prodotto sviluppato", "Disponibile per confronto"],
    patentRefs: ["Piattaforma collegata a 102021000004580 nei documenti locali, non sempre esplicitata"],
    icon: Layers3
  },
  {
    title: "Fotonika",
    description:
      "Piattaforma collegata nei documenti commerciali al brevetto concesso 102023000019734, basata su composizione ad attivazione fotodinamica.",
    field: "Superfici e formulazioni fotoattive",
    badges: ["Prodotto sviluppato", "Collegamento brevettuale documentato"],
    patentRefs: ["102023000019734"],
    icon: Waves
  }
];

export const agriculturalPlatforms: ProductItem[] = [
  {
    title: "Hydronica Root",
    description:
      "Piattaforma tecnologica per applicazioni agricole e gestione fisica dell'acqua nella rizosfera, collegata all'area idroritentiva.",
    field: "Agricoltura e suolo",
    badges: ["In sviluppo", "Partnership aperta", "Piattaforma in domanda"],
    patentRefs: ["102023000025887", "102026000014101"],
    icon: Sprout
  },
  {
    title: "Hydronica Foliar",
    description:
      "Piattaforma tecnologica agricola orientata ad applicazioni fogliari, collegata all'area Hydronica nei documenti locali.",
    field: "Agricoltura",
    badges: ["In sviluppo", "Disponibile per confronto", "Piattaforma in domanda"],
    patentRefs: ["102023000025887", "102026000014101"],
    icon: Sprout
  },
  {
    title: "Mikro Earth / Mikro Soil",
    description:
      "Area tecnica per suolo e gestione fisica dell'acqua, collegata nei documenti a composizioni idroritentive.",
    field: "Suolo e root zone",
    badges: ["In sviluppo", "Collegamento brevettuale documentato", "Partnership aperta"],
    patentRefs: ["102023000025887", "102026000014101"],
    icon: Sprout
  }
];

export const openDevelopmentAreas: ProductItem[] = [
  {
    title: "Tecnologie per lettiere animali",
    description: "Formulazioni minerali per gestione fisica dell'umidità e controllo fisico degli odori.",
    field: "Animal care",
    badges: ["In sviluppo", "Partnership aperta"],
    patentRefs: ["Area applicativa da valutare"],
    icon: Beaker
  },
  {
    title: "Concept minerali per mangimi",
    description: "Percorsi minerali per mangimi e additivi, valutati in base ai quadri regolatori applicabili.",
    field: "Mangimi e additivi",
    badges: ["Disponibile per confronto", "Partnership aperta"],
    patentRefs: ["Area applicativa da valutare"],
    icon: Beaker
  },
  {
    title: "Formulazioni funzionali per superfici",
    description:
      "Formulazioni orientate alle superfici, coatings e applicazioni tecniche basate sulle piattaforme rame/argento e fotoattive.",
    field: "Superfici",
    badges: ["Territori selezionati disponibili", "Partnership aperta"],
    patentRefs: ["102021000004580", "102023000019734", "102023000020343"],
    icon: Layers3
  },
  {
    title: "Progetti R&D su misura",
    description:
      "Sviluppo tecnico dedicato per partner con obiettivi di mercato o funzione specifici, anche su nuove idee brevettuali.",
    field: "R&D industriale",
    badges: ["Disponibile per confronto", "In sviluppo"],
    patentRefs: ["Nuovi progetti brevettuali"],
    icon: Beaker
  }
];

export const productGroups: ProductGroup[] = [
  {
    title: "Prodotti e concept sviluppati",
    description: "Prodotti e concept sviluppati da Mikromed, con collegamenti brevettuali dove documentati.",
    items: developedProducts
  },
  {
    title: "Piattaforme agricole",
    description:
      "Piattaforme tecnologiche agricole basate su composizioni idroritentive, gestione fisica dell'acqua e know-how minerale.",
    items: agriculturalPlatforms
  },
  {
    title: "Aree aperte di sviluppo",
    description: "Campi applicativi su cui valutare co-sviluppo, licenza, distribuzione o R&D su misura.",
    items: openDevelopmentAreas
  }
];
