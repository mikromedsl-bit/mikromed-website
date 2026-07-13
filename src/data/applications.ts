import { Beaker, Leaf, Paintbrush, PawPrint, Sprout, Waves } from "lucide-react";
import type { CardItem } from "@/data/types";

export const applications: CardItem[] = [
  {
    title: "Agricoltura e suolo",
    description:
      "Esigenze legate a suolo, rizosfera e gestione fisica dell'acqua, con percorsi formulativi minerali e attenzione al posizionamento regolatorio.",
    icon: Sprout
  },
  {
    title: "Animal care e lettiere",
    description:
      "Formulazioni per lettiere e ambienti animali orientate a gestione fisica dell'umidità, controllo fisico degli odori e comunicazione conforme.",
    icon: PawPrint
  },
  {
    title: "Mangimi e additivi minerali",
    description:
      "Concept minerali per mangimi e additivi, con valutazione della funzione tecnica, della categoria prodotto e delle opportunità di partnership.",
    icon: Leaf
  },
  {
    title: "Superfici e coatings",
    description:
      "Formulazioni orientate alle superfici, idropitture e coatings, sviluppate con approccio fisico e revisione dei claim utilizzabili.",
    icon: Paintbrush
  },
  {
    title: "Home & Professional Care",
    description:
      "Prodotti consumer o professionali che richiedono formulazione funzionale, etichetta coerente e comunicazione prudente.",
    icon: Waves
  },
  {
    title: "Ricerca e sviluppo industriale",
    description:
      "Progetti R&D su misura per partner industriali che cercano una piattaforma protetta, un prototipo o un percorso partner-ready.",
    icon: Beaker
  }
];
