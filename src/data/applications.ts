import { Beaker, Leaf, Paintbrush, PawPrint, Sprout, Waves } from "lucide-react";
import type { CardItem } from "@/data/types";

export const applications: CardItem[] = [
  {
    title: "Agricoltura, suolo e rizosfera",
    description:
      "Piattaforme Hydronica, Mikro Earth e Mikro Soil collegate all'area idroritentiva: gestione fisica dell'acqua, root zone e applicazioni florovivaistiche.",
    icon: Sprout
  },
  {
    title: "Superfici, coatings e ambienti umidi",
    description:
      "MikroPaint, Sterilnova HH, MikroMold e Fotonika sono collegati a piattaforme per superfici, coatings e formulazioni funzionali.",
    icon: Paintbrush
  },
  {
    title: "Formulazioni rame/argento e fotoattive",
    description:
      "Area tecnica collegata ai brevetti 102021000004580 e 102023000019734, da comunicare con posizionamento regolatorio prudente.",
    icon: Waves
  },
  {
    title: "Animal care e lettiere",
    description:
      "Campo applicativo per formulazioni minerali orientate a gestione fisica dell'umidità e controllo fisico degli odori.",
    icon: PawPrint
  },
  {
    title: "Mangimi e additivi minerali",
    description:
      "Concept minerali da valutare con attenzione a funzione tecnologica, documentazione e quadri regolatori applicabili.",
    icon: Leaf
  },
  {
    title: "R&D, orale e nuove domande brevettuali",
    description:
      "Ambiti emersi dalle domande in procedura: formulazioni orali, idratazione, nuove composizioni tecniche e progetti R&D su misura.",
    icon: Beaker
  }
];
