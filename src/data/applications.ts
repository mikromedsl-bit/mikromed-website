import { Droplets, Paintbrush, SunMedium } from "lucide-react";
import type { PendingApplicationItem, PatentApplicationItem } from "@/data/types";

export const patentApplications: PatentApplicationItem[] = [
  {
    patentId: "B01",
    patentNumber: "102021000004580",
    shortTitle: "Composizione acquosa rame/argento per superfici e matrici",
    description:
      "Tecnologia acquosa basata su componenti metallici, utilizzabile come piattaforma funzionale per superfici, matrici tecniche, rivestimenti e prodotti professionali. Il posizionamento commerciale e regolatorio deve essere valutato in base all'applicazione e ai claim utilizzati.",
    possibleSectors: [
      "superfici professionali",
      "ambienti sanitari ad alto requisito igienico",
      "aree ospedaliere e sale operatorie, solo previa validazione e corretto inquadramento regolatorio",
      "superfici in ambienti animali e zootecnici",
      "rivestimenti tecnici",
      "idropitture e coating",
      "materiali trattati",
      "filtri",
      "tessili tecnici",
      "supporti porosi",
      "attrezzature professionali",
      "ambienti industriali",
      "facility management",
      "cleaning professionale B2B"
    ],
    developableApplications: [
      "formulazioni tecniche per superfici",
      "additivi per pitture e rivestimenti",
      "trattamenti superficiali per supporti tecnici",
      "soluzioni per ambienti professionali",
      "formulazioni per ambienti animali",
      "integrazione in materiali o matrici",
      "coating funzionali",
      "sviluppo B2B a marchio partner"
    ],
    potentialPartners: [
      "produttori di pitture e coating",
      "aziende facility management",
      "distributori professionali",
      "aziende animal care",
      "produttori di materiali tecnici",
      "aziende cleaning B2B",
      "produttori di filtri o tessili tecnici",
      "partner industriali con rete commerciale"
    ],
    regulatoryNote:
      "Le applicazioni su superfici, ambienti professionali o sanitari richiedono una valutazione accurata di destinazione d'uso, claim, etichettatura e categoria prodotto. Eventuali termini presenti nel titolo ufficiale del brevetto non devono essere automaticamente usati come claim commerciale."
  },
  {
    patentId: "B02",
    patentNumber: "102020000008134",
    shortTitle: "Delivery system per ipersensibilita dentinale",
    description:
      "Tecnologia di formulazione e rilascio locale destinata all'ambito dentale/orale, con potenziale sviluppo in prodotti professionali o consumer dental care. Eventuali claim, classificazione e categoria regolatoria devono essere valutati caso per caso.",
    possibleSectors: [
      "odontoiatria professionale",
      "oral care",
      "dental care consumer",
      "prodotti per studi dentistici",
      "formulazioni locali",
      "prodotti a rilascio controllato",
      "igiene orale professionale",
      "licensing nel settore dentale",
      "prodotti white label per brand oral care"
    ],
    developableApplications: [
      "gel professionali",
      "trattamenti locali",
      "formulazioni per dentifrici",
      "prodotti orali a rilascio locale",
      "formulazioni per uso professionale",
      "prodotti consumer da sviluppare con partner",
      "linee dental care a marchio partner"
    ],
    potentialPartners: [
      "aziende oral care",
      "brand dentali",
      "produttori conto terzi",
      "reti odontoiatriche",
      "laboratori specializzati",
      "aziende con competenze regolatorie nel settore orale",
      "partner interessati a licensing tecnologico"
    ],
    regulatoryNote:
      "Le applicazioni in ambito orale richiedono particolare attenzione a safety, destinazione d'uso, categoria prodotto, claim e documentazione tecnica."
  },
  {
    patentId: "B03",
    patentNumber: "102023000019734",
    publicationNumber: "IT202300019734A1",
    shortTitle: "Composizione fotoattivabile",
    description:
      "Tecnologia basata sull'abbinamento tra formulazione e attivazione luminosa. Puo essere presentata come piattaforma tecnica per applicazioni in acqua, superfici, ambienti professionali e sistemi integrati formula + dispositivo, con posizionamento regolatorio da definire in base all'uso previsto.",
    possibleSectors: [
      "acqua e liquidi tecnici",
      "serbatoi",
      "superfici illuminabili",
      "ambienti professionali",
      "sistemi formula + luce",
      "gestione tecnica di ristagni",
      "gestione tecnica degli odori",
      "dispositivi LED",
      "applicazioni industriali",
      "facility management",
      "sistemi integrati B2B",
      "ambienti chiusi o controllati"
    ],
    developableApplications: [
      "sistema composto da formula + sorgente luminosa",
      "formulazioni fotoattivabili",
      "protocolli tecnici con attivazione luminosa",
      "soluzioni per serbatoi",
      "applicazioni su superfici illuminabili",
      "sistemi integrati con device LED",
      "progetti industriali su misura"
    ],
    potentialPartners: [
      "aziende trattamento acqua",
      "produttori di dispositivi",
      "aziende LED o device tecnici",
      "aziende facility",
      "distributori B2B",
      "partner industriali",
      "produttori di sistemi professionali"
    ],
    regulatoryNote:
      "Ogni utilizzo deve essere valutato in base a protocollo, intensita luminosa, tempo di esposizione, destinazione d'uso, claim e mercato di riferimento."
  },
  {
    patentId: "B04",
    patentNumber: "102023000025887",
    publicationNumber: "IT202300025887A1",
    shortTitle: "Composizione idroritentiva per suolo, substrati e radici",
    description:
      "Tecnologia idroritentiva orientata alla gestione fisica dell'acqua in substrati, suolo e zona radicale. Le possibili applicazioni agricole devono essere sviluppate con attenzione a test, modalita d'uso, categoria prodotto e claim ammessi.",
    possibleSectors: [
      "agricoltura",
      "florovivaismo",
      "serre",
      "vivai",
      "substrati",
      "terricci",
      "trapianto",
      "zona radicale",
      "colture in vaso",
      "gestione fisica dell'acqua",
      "trasporto piante",
      "packaging vivaistico",
      "premiscele agricole",
      "substrati professionali",
      "agritech",
      "giardinaggio tecnico"
    ],
    developableApplications: [
      "granuli idroritentivi",
      "premiscele per substrati",
      "prodotti per trapianto",
      "supporti per radici",
      "soluzioni per vivai e serre",
      "sistemi per trasporto piante",
      "formulazioni per gestione fisica dell'acqua",
      "prodotti a marchio partner per il settore agricolo"
    ],
    potentialPartners: [
      "distributori agricoli",
      "vivai",
      "serre",
      "produttori di substrati",
      "aziende florovivaistiche",
      "agronomi",
      "aziende agritech",
      "brand agricoli",
      "produttori di terricci",
      "partner per test agronomici"
    ],
    regulatoryNote:
      "I claim agronomici devono essere supportati da test e valutati in base alla categoria prodotto applicabile, al mercato di destinazione e alle modalita d'uso."
  },
  {
    patentId: "B05",
    patentNumber: "102023000020343",
    publicationNumber: "IT202300020343A1",
    shortTitle: "Composizione per biofilm e applicazioni locali",
    description:
      "Tecnologia formulativa con interesse per applicazioni locali, oral care, biofilm e ambiti professionali da validare. Lo sviluppo commerciale richiede particolare attenzione a safety, claim, destinazione d'uso e classificazione regolatoria.",
    possibleSectors: [
      "oral care",
      "dental care",
      "formulazioni locali",
      "prodotti professionali da validare",
      "applicazioni tecniche su mucose, solo con percorso regolatorio dedicato",
      "applicazioni tecniche su derma, solo con percorso regolatorio dedicato",
      "biofilm, solo con claim e validazioni adeguate",
      "ambiti professionali B2B",
      "applicazioni veterinarie/oral care animale, solo da validare"
    ],
    developableApplications: [
      "gel orali",
      "formulazioni locali",
      "collutori tecnici",
      "prodotti oral care a marchio partner",
      "formulazioni professionali da validare",
      "soluzioni white label oral care",
      "progetti B2B con validazione safety",
      "applicazioni locali con percorso regolatorio dedicato"
    ],
    potentialPartners: [
      "aziende oral care",
      "brand dental",
      "laboratori di sviluppo prodotto",
      "produttori conto terzi",
      "partner con competenze regolatorie",
      "aziende interessate a licensing",
      "produttori con rete professionale",
      "partner B2B in ambito tecnico-specialistico"
    ],
    regulatoryNote:
      "Le applicazioni locali, orali, cutanee o veterinarie richiedono particolare attenzione a safety, claim, destinazione d'uso, categoria prodotto e documentazione tecnica. Non utilizzare claim medicali, terapeutici o biocidi senza percorso regolatorio adeguato."
  }
];

export const pendingApplications: PendingApplicationItem[] = [
  {
    patentId: "D01",
    shortTitle: "Domanda in area nutrizione / integrazione",
    applicationNumber: "102023000008709",
    status: "Domanda pubblicata / stato da verificare",
    interestArea: "nutrizione, integrazione e supporto formulativo",
    note: "stato ufficiale da verificare"
  },
  {
    patentId: "D02",
    shortTitle: "Domanda in area cosmesi / igiene orale",
    applicationNumber: "102024000022623",
    status: "Domanda pubblicata / in esame",
    interestArea: "cosmesi, igiene orale e formulazioni tecniche",
    note: "stato ufficiale da verificare"
  },
  {
    patentId: "D03",
    shortTitle: "Domanda in area agricoltura / gestione risorse idriche",
    applicationNumber: "102026000014101",
    status: "Domanda pubblicata / stato da verificare",
    interestArea: "suolo, zona radicale e gestione fisica dell'acqua",
    note: "stato ufficiale da verificare"
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
