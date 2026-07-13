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
  "Disponibile per confronto"
];

export const developedProducts: ProductItem[] = [
  {
    title: "MikroMosquito",
    description: "Prodotto consumer outdoor basato su un approccio fisico di superficie.",
    field: "Outdoor consumer",
    badges: ["Prodotto sviluppato", "Mercato attivo", "Territori disponibili"],
    icon: Waves
  },
  {
    title: "MikroPaint",
    description: "Additivo funzionale per idropitture e applicazioni su superfici.",
    field: "Superfici e coatings",
    badges: ["Prodotto sviluppato", "Disponibile per confronto", "Partnership aperta"],
    icon: Paintbrush
  },
  {
    title: "Sterilnova HH",
    description: "Formulazione funzionale orientata ad applicazioni su superfici.",
    field: "Formulazioni per superfici",
    badges: ["Prodotto sviluppato", "Territori selezionati disponibili", "Possibili esclusive territoriali"],
    icon: Layers3
  }
];

export const agriculturalPlatforms: ProductItem[] = [
  {
    title: "Hydronica Root",
    description: "Piattaforma tecnologica per applicazioni agricole e gestione fisica dell'acqua nella rizosfera.",
    field: "Agricoltura e suolo",
    badges: ["In sviluppo", "Partnership aperta", "Disponibile per confronto"],
    icon: Sprout
  },
  {
    title: "Hydronica Foliar",
    description: "Piattaforma tecnologica agricola orientata ad applicazioni fogliari.",
    field: "Agricoltura",
    badges: ["In sviluppo", "Disponibile per confronto"],
    icon: Sprout
  }
];

export const openDevelopmentAreas: ProductItem[] = [
  {
    title: "Tecnologie per lettiere animali",
    description: "Formulazioni minerali per gestione fisica dell'umidità e controllo fisico degli odori.",
    field: "Animal care",
    badges: ["In sviluppo", "Partnership aperta"],
    icon: Beaker
  },
  {
    title: "Concept minerali per mangimi",
    description: "Percorsi minerali per mangimi e additivi, valutati in base ai quadri regolatori applicabili.",
    field: "Mangimi e additivi",
    badges: ["Disponibile per confronto", "Partnership aperta"],
    icon: Beaker
  },
  {
    title: "Formulazioni funzionali per superfici",
    description: "Formulazioni orientate alle superfici, adattabili a diversi canali e applicazioni.",
    field: "Superfici",
    badges: ["Territori selezionati disponibili", "Partnership aperta"],
    icon: Layers3
  },
  {
    title: "Progetti R&D su misura",
    description: "Sviluppo tecnico dedicato per partner con obiettivi di mercato o funzione specifici.",
    field: "R&D industriale",
    badges: ["Disponibile per confronto", "In sviluppo"],
    icon: Beaker
  }
];

export const productGroups: ProductGroup[] = [
  {
    title: "Prodotti e concept sviluppati",
    description: "Prodotti e concept sviluppati da Mikromed, valutabili per mercati, distribuzione o partnership selezionate.",
    items: developedProducts
  },
  {
    title: "Piattaforme agricole",
    description: "Piattaforme tecnologiche agricole basate sul know-how Mikromed e adattabili al territorio.",
    items: agriculturalPlatforms
  },
  {
    title: "Aree aperte di sviluppo",
    description: "Campi applicativi su cui valutare co-sviluppo, licenza, distribuzione o R&D su misura.",
    items: openDevelopmentAreas
  }
];
