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
      "sale operatorie e aree ospedaliere, solo previa validazione e corretto inquadramento regolatorio",
      "ambulatori, studi medici e studi dentistici, solo con valutazione specifica",
      "RSA, cliniche e ambienti assistenziali",
      "laboratori tecnici e laboratori di analisi",
      "ambienti industriali",
      "ambienti alimentari e HACCP, solo previa valutazione normativa",
      "facility management",
      "cleaning professionale B2B",
      "superfici in ambienti animali",
      "zootecnia",
      "box, stalle, allevamenti e ambienti tecnici per animali",
      "attrezzature professionali",
      "rivestimenti tecnici",
      "idropitture",
      "coating",
      "vernici funzionali",
      "materiali trattati",
      "filtri",
      "tessili tecnici",
      "supporti porosi",
      "membrane",
      "superfici edilizie",
      "superfici per ambienti umidi",
      "supporti plastici, metallici o minerali, se compatibili",
      "prodotti tecnici per manutenzione professionale"
    ],
    developableApplications: [
      "formulazioni funzionali per superfici professionali",
      "additivi per idropitture e rivestimenti",
      "coating funzionali per supporti tecnici",
      "trattamenti superficiali per materiali",
      "formulazioni per ambienti professionali",
      "soluzioni tecniche per ambienti animali",
      "integrazione in materiali, filtri o supporti",
      "prodotti B2B a marchio partner",
      "soluzioni per facility e cleaning professionale",
      "prodotti tecnici per superfici soggette a elevata umidita",
      "formulazioni concentrate o pronte all'uso da valutare caso per caso"
    ],
    potentialPartners: [
      "produttori di pitture e coating",
      "produttori di prodotti professionali per superfici",
      "aziende facility management",
      "distributori professionali",
      "aziende cleaning B2B",
      "aziende animal care",
      "aziende zootecniche",
      "produttori di filtri",
      "produttori di tessili tecnici",
      "produttori di materiali trattati",
      "aziende edilizia tecnica",
      "laboratori di formulazione",
      "produttori conto terzi",
      "partner industriali con rete commerciale"
    ],
    regulatoryNote:
      "Le applicazioni su superfici, ambienti professionali, sanitari o animali richiedono una valutazione accurata di destinazione d'uso, claim, etichettatura e categoria prodotto. Eventuali termini presenti nel titolo ufficiale del brevetto non devono essere automaticamente utilizzati come claim commerciale."
  },
  {
    patentId: "B02",
    patentNumber: "102020000008134",
    shortTitle: "Delivery system per ipersensibilita dentinale",
    description:
      "Tecnologia di formulazione e rilascio locale destinata all'ambito dentale/orale, con potenziale sviluppo in prodotti professionali o consumer dental care. Eventuali claim, classificazione e categoria regolatoria devono essere valutati caso per caso.",
    possibleSectors: [
      "odontoiatria professionale",
      "studi dentistici",
      "igiene orale professionale",
      "oral care consumer",
      "dental care",
      "prodotti per sensibilita dentinale, con claim da validare",
      "prodotti per uso professionale",
      "prodotti per uso domiciliare, se compatibili con la categoria regolatoria",
      "formulazioni locali",
      "delivery system",
      "sistemi a rilascio locale",
      "dentifrici",
      "gel orali",
      "trattamenti locali",
      "prodotti white label per brand oral care",
      "prodotti per farmacie e parafarmacie, con posizionamento da valutare",
      "prodotti per canale dental professionale",
      "licensing nel settore dentale",
      "linee private label oral care"
    ],
    developableApplications: [
      "gel professionali",
      "formulazioni locali per studi dentistici",
      "prodotti orali a rilascio locale",
      "formulazioni per dentifrici",
      "trattamenti tecnici per dental care",
      "prodotti consumer da sviluppare con partner",
      "linee white label per brand oral care",
      "tecnologia concedibile in licenza a partner dental",
      "prodotti professionali da validare tecnicamente e regolatoriamente"
    ],
    potentialPartners: [
      "aziende oral care",
      "brand dentali",
      "produttori di dentifrici",
      "produttori conto terzi oral care",
      "reti odontoiatriche",
      "studi dentistici organizzati",
      "laboratori specializzati",
      "aziende con competenze regolatorie nel settore orale",
      "distributori dental",
      "partner interessati a licensing tecnologico"
    ],
    regulatoryNote:
      "Le applicazioni in ambito orale richiedono particolare attenzione a safety, destinazione d'uso, categoria prodotto, claim e documentazione tecnica. Ogni sviluppo deve essere valutato prima della comunicazione commerciale."
  },
  {
    patentId: "B03",
    patentNumber: "102023000019734",
    publicationNumber: "IT202300019734A1",
    shortTitle: "Composizione fotoattivabile / tecnologia formula + luce",
    description:
      "Tecnologia basata sull'abbinamento tra formulazione e attivazione luminosa. Puo essere presentata come piattaforma tecnica per applicazioni in acqua, superfici, ambienti professionali e sistemi integrati formula + dispositivo, con posizionamento regolatorio da definire in base all'uso previsto.",
    possibleSectors: [
      "acqua e liquidi tecnici",
      "serbatoi",
      "cisterne",
      "contenitori tecnici",
      "circuiti chiusi",
      "vasche",
      "ristagni controllati",
      "superfici illuminabili",
      "superfici tecniche",
      "ambienti professionali",
      "ambienti chiusi o controllati",
      "facility management",
      "gestione tecnica degli odori",
      "gestione tecnica di ristagni",
      "dispositivi LED",
      "sistemi formula + luce",
      "sistemi integrati B2B",
      "trattamento tecnico di liquidi non destinati a uso umano, da valutare",
      "applicazioni industriali",
      "applicazioni in ambienti animali, solo se validate",
      "supporti o superfici attivabili con luce",
      "protocolli tecnici con esposizione luminosa controllata"
    ],
    developableApplications: [
      "sistema composto da formulazione + sorgente luminosa",
      "formulazioni fotoattivabili",
      "protocolli tecnici con attivazione luminosa",
      "soluzioni per serbatoi e ristagni",
      "applicazioni su superfici illuminabili",
      "sistemi integrati con device LED",
      "kit tecnico formula + dispositivo",
      "progetti industriali su misura",
      "applicazioni B2B in ambienti professionali",
      "soluzioni con protocollo operativo dedicato"
    ],
    potentialPartners: [
      "aziende trattamento acqua",
      "produttori di dispositivi",
      "aziende LED",
      "produttori di device tecnici",
      "aziende facility",
      "distributori B2B",
      "partner industriali",
      "produttori di sistemi professionali",
      "aziende con canali tecnici",
      "laboratori di validazione",
      "operatori industriali con esigenze specifiche su acqua, odori o superfici"
    ],
    regulatoryNote:
      "Ogni utilizzo deve essere valutato in base a protocollo, intensita luminosa, tempo di esposizione, destinazione d'uso, sicurezza, claim e mercato di riferimento."
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
      "orticoltura",
      "frutticoltura",
      "viticoltura",
      "olivicoltura",
      "giardinaggio tecnico",
      "verde urbano",
      "alberature",
      "paesaggistica",
      "tappeti erbosi",
      "orti professionali",
      "colture protette",
      "colture ornamentali",
      "gestione fisica dell'acqua",
      "supporto alla riduzione dello stress idrico, solo se validato da test",
      "trasporto piante",
      "packaging vivaistico",
      "premiscele agricole",
      "substrati professionali",
      "applicazioni in vaso",
      "applicazioni in buca",
      "agritech",
      "progetti per aree con limitata disponibilita idrica, con claim da validare"
    ],
    developableApplications: [
      "granuli idroritentivi",
      "premiscele per substrati",
      "prodotti per trapianto",
      "supporti per radici",
      "soluzioni per vivai e serre",
      "prodotti per colture in vaso",
      "sistemi per trasporto piante",
      "formulazioni per gestione fisica dell'acqua",
      "premix per terricci",
      "supporti tecnici per florovivaismo",
      "prodotti a marchio partner per il settore agricolo",
      "soluzioni per verde urbano e paesaggistica",
      "progetti con test agronomici dedicati"
    ],
    potentialPartners: [
      "distributori agricoli",
      "vivai",
      "serre",
      "produttori di substrati",
      "produttori di terricci",
      "aziende florovivaistiche",
      "agronomi",
      "aziende agritech",
      "brand agricoli",
      "consorzi agrari",
      "garden center professionali",
      "aziende paesaggistiche",
      "operatori del verde urbano",
      "produttori conto terzi",
      "partner per test agronomici",
      "universita o centri sperimentali"
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
      "igiene orale professionale",
      "studi dentistici",
      "formulazioni locali",
      "applicazioni tecniche su mucose, solo con percorso regolatorio dedicato",
      "applicazioni tecniche su derma, solo con percorso regolatorio dedicato",
      "biofilm, solo con claim e validazioni adeguate",
      "prodotti professionali da validare",
      "prodotti white label oral care",
      "formulazioni per canale dental",
      "prodotti locali B2B",
      "applicazioni veterinarie/oral care animale, solo da validare",
      "applicazioni professionali specialistiche",
      "prodotti sviluppabili con partner dotati di competenze regolatorie",
      "formulazioni locali con percorso safety dedicato"
    ],
    developableApplications: [
      "gel orali",
      "formulazioni locali",
      "collutori tecnici",
      "prodotti oral care a marchio partner",
      "formulazioni professionali da validare",
      "soluzioni white label oral care",
      "progetti B2B con validazione safety",
      "applicazioni locali con percorso regolatorio dedicato",
      "formulazioni per studi dentistici",
      "prodotti da sviluppare con partner specializzati",
      "concept per oral care animale, solo previa validazione"
    ],
    potentialPartners: [
      "aziende oral care",
      "brand dental",
      "laboratori di sviluppo prodotto",
      "produttori conto terzi",
      "partner con competenze regolatorie",
      "aziende interessate a licensing",
      "produttori con rete professionale",
      "distributori dental",
      "partner B2B in ambito tecnico-specialistico",
      "aziende veterinarie, solo per applicazioni da validare",
      "centri di test safety",
      "laboratori di validazione"
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
