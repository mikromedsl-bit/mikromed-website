import { Beaker, Droplets, Factory, Leaf, Paintbrush, PawPrint, Sprout, SunMedium } from "lucide-react";
import type { ApplicationArea } from "@/data/types";

export const applications: ApplicationArea[] = [
  {
    title: "Superfici professionali e ambienti tecnici",
    description:
      "Area applicativa per superfici, attrezzature, materiali trattati e contesti professionali che richiedono una valutazione tecnica e regolatoria dedicata.",
    icon: Factory,
    linkedPatents: ["B01", "B03", "B05 da validare"],
    applicationExamples: [
      "superfici professionali",
      "ambienti tecnici",
      "ambienti sanitari ad alto requisito igienico, con valutazione regolatoria dedicata",
      "ambienti animali e zootecnici",
      "attrezzature",
      "materiali trattati",
      "supporti tecnici",
      "facility e cleaning professionale"
    ],
    partnerTypes: [
      "aziende facility",
      "distributori professionali",
      "produttori di prodotti tecnici per superfici",
      "operatori B2B",
      "partner industriali con rete commerciale"
    ],
    regulatoryNote:
      "Il posizionamento dei claim e della categoria prodotto deve essere valutato in base all'uso previsto e al mercato di destinazione."
  },
  {
    title: "Rivestimenti, idropitture e coating",
    description:
      "Area per integrazione di piattaforme tecniche in matrici vernicianti, rivestimenti e supporti trattati.",
    icon: Paintbrush,
    linkedPatents: ["B01"],
    applicationExamples: [
      "additivi per idropitture",
      "rivestimenti tecnici",
      "coating funzionali",
      "materiali trattati",
      "integrazione in matrici vernicianti",
      "superfici edilizie",
      "ambienti professionali",
      "superfici in contesti animali o industriali"
    ],
    partnerTypes: [
      "produttori di pitture",
      "produttori di coating",
      "aziende edilizia tecnica",
      "distributori professionali",
      "partner B2B"
    ],
    regulatoryNote:
      "L'integrazione in coating o pitture deve essere valutata in base alla funzione dichiarata, all'etichettatura e ai claim commerciali."
  },
  {
    title: "Agricoltura, suolo e gestione fisica dell'acqua",
    description:
      "Area dedicata alla gestione fisica dell'acqua in substrati, suolo, zona radicale e contesti agricoli da validare con test.",
    icon: Sprout,
    linkedPatents: ["B04", "D03 come domanda in valutazione"],
    applicationExamples: [
      "substrati",
      "terricci",
      "florovivaismo",
      "trapianto",
      "zona radicale",
      "gestione fisica dell'acqua",
      "serre",
      "vivai",
      "colture in vaso",
      "trasporto piante",
      "riduzione stress idrico da verificare con test",
      "premiscele agricole"
    ],
    partnerTypes: [
      "distributori agricoli",
      "vivai",
      "serre",
      "produttori di substrati",
      "agronomi",
      "aziende agritech",
      "brand agricoli"
    ],
    regulatoryNote:
      "I claim agronomici devono essere supportati da test e valutati in base alla categoria prodotto applicabile."
  },
  {
    title: "Oral care, odontoiatria e applicazioni locali",
    description:
      "Area per formulazioni locali, dental care e oral care da sviluppare con partner specializzati e adeguata validazione.",
    icon: Beaker,
    linkedPatents: ["B02", "B05", "D02 come domanda in valutazione"],
    applicationExamples: [
      "dental care professionale",
      "oral care consumer",
      "formulazioni locali",
      "gel",
      "dentifrici",
      "collutori tecnici",
      "prodotti da sviluppare con partner specializzati",
      "applicazioni locali da validare"
    ],
    partnerTypes: [
      "aziende oral care",
      "brand dentali",
      "produttori conto terzi",
      "laboratori specializzati",
      "reti professionali odontoiatriche",
      "partner con competenze regolatorie"
    ],
    regulatoryNote:
      "Le applicazioni in ambito orale richiedono particolare attenzione a safety, destinazione d'uso, categoria prodotto e claim."
  },
  {
    title: "Acqua, serbatoi e sistemi fotoattivabili",
    description:
      "Area tecnica per sistemi formula + luce, liquidi tecnici, serbatoi e integrazione con dispositivi o protocolli industriali.",
    icon: SunMedium,
    linkedPatents: ["B03"],
    applicationExamples: [
      "acqua e liquidi tecnici",
      "serbatoi",
      "sistemi formula + luce",
      "superfici illuminabili",
      "ambienti chiusi",
      "gestione tecnica di ristagni e odori",
      "integrazione con dispositivi LED",
      "protocolli applicativi industriali"
    ],
    partnerTypes: [
      "aziende trattamento acqua",
      "produttori di dispositivi",
      "aziende facility",
      "distributori B2B",
      "partner industriali",
      "produttori di sistemi tecnici"
    ],
    regulatoryNote:
      "Ogni utilizzo deve essere valutato in base a protocollo, esposizione luminosa, destinazione d'uso e comunicazione commerciale."
  },
  {
    title: "Animal care, ambienti animali e zootecnia",
    description:
      "Area per ambienti animali, superfici tecniche e soluzioni fisiche su umidita, odori e supporti da validare.",
    icon: PawPrint,
    linkedPatents: ["B01", "B04", "B05 solo se validato"],
    applicationExamples: [
      "superfici di ambienti animali",
      "box",
      "attrezzature",
      "lettiere e gestione fisica dell'umidita",
      "controllo fisico degli odori",
      "substrati tecnici",
      "ambienti zootecnici",
      "oral care animale solo come applicazione da validare"
    ],
    partnerTypes: [
      "aziende animal care",
      "produttori di lettiere",
      "aziende zootecniche",
      "distributori veterinari/professionali",
      "allevamenti",
      "partner B2B"
    ],
    regulatoryNote:
      "Non devono essere utilizzati claim veterinari, terapeutici o biocidi senza adeguato percorso tecnico e regolatorio."
  },
  {
    title: "Tessili, filtri e materiali trattati",
    description:
      "Area per supporti tecnici, materiali porosi, membrane, tessili e filtri con funzione dichiarata da valutare caso per caso.",
    icon: Droplets,
    linkedPatents: ["B01", "B03 se applicabile"],
    applicationExamples: [
      "supporti tessili",
      "filtri",
      "materiali porosi",
      "membrane",
      "supporti tecnici",
      "materiali per ambienti professionali",
      "integrazione in coating o trattamenti superficiali"
    ],
    partnerTypes: [
      "produttori di materiali tecnici",
      "aziende tessili B2B",
      "produttori di filtri",
      "aziende industriali",
      "partner R&D"
    ],
    regulatoryNote:
      "Il trattamento di materiali e supporti deve essere valutato in base alla funzione dichiarata e al quadro regolatorio applicabile."
  },
  {
    title: "Progetti industriali su misura",
    description:
      "Area per adattare tecnologie, know-how e piattaforme a mercati, partner o percorsi industriali specifici.",
    icon: Leaf,
    linkedPatents: ["B01", "B03", "B04", "B05 secondo valutazione"],
    applicationExamples: [
      "sviluppo di nuova formulazione",
      "adattamento a un mercato specifico",
      "licensing tecnologico",
      "white label",
      "co-sviluppo",
      "prove tecniche",
      "integrazione in prodotti esistenti",
      "costruzione di nuova proprieta intellettuale"
    ],
    partnerTypes: [
      "aziende industriali",
      "startup tecniche",
      "distributori con mercato",
      "laboratori R&D",
      "produttori conto terzi",
      "brand owner"
    ],
    regulatoryNote:
      "Le informazioni tecniche dettagliate vengono condivise sotto NDA o all'interno di un percorso di collaborazione strutturato."
  }
];

export const applicationHighlights = [
  {
    title: "Gestione fisica dell'acqua",
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
