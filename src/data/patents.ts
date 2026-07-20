import type { PatentItem } from "@/data/types";

export const patentStatusBadges = [
  "Concesso",
  "Domanda pubblicata",
  "Stato da verificare"
];

export const patentPortfolioSummary = {
  granted: 5,
  pending: 3,
  note:
    "I titoli ufficiali possono riportare wording brevettuale sensibile. Le descrizioni commerciali del sito usano formulazioni prudenti e distinguono brevetti concessi da domande pubblicate o in valutazione."
};

export const patents: PatentItem[] = [
  {
    internalId: "B01",
    title: "Composizione acquosa rame/argento per superfici e matrici",
    officialTitle: "COMPOSIZIONE ACQUOSA DISINFETTANTE IGIENIZZANTE",
    shortTitle: "Composizione acquosa rame/argento per superfici e matrici",
    applicationNumber: "102021000004580",
    publicationOrGrant: "Brevetto n. 102021000004580",
    holder: "Inderst Luigi Rosario Franco 50%; Cinti Silvia 50%",
    inventors: "Cinti Silvia",
    filingDate: "01/03/2021",
    grantDate: "22/03/2023",
    status: "Concesso",
    territories: "Italia; eventuali territori e licenze da valutare caso per caso",
    summary:
      "Tecnologia acquosa basata su componenti metallici, utilizzabile come piattaforma funzionale per superfici, matrici tecniche, rivestimenti e prodotti professionali. Il posizionamento commerciale e regolatorio deve essere valutato in base all'applicazione e ai claim utilizzati.",
    sectors: [
      "Superfici professionali",
      "Rivestimenti e coating",
      "Vernici",
      "Zootecnia / superfici ambienti animali",
      "Filtri, tessili e materiali trattati",
      "Prodotti tecnici B2B"
    ],
    applicationExamples: [
      "trattamento tecnico superfici",
      "additivo per pitture e coating",
      "formulazioni per superfici e attrezzature in ambienti tecnici",
      "coating tecnico su supporti",
      "soluzioni professionali B2B"
    ],
    linkedProducts: [
      "MikroPaint Concentrato",
      "Sterilnova HH RTU",
      "Sterilnova Concentrato",
      "High Hygienic",
      "Mikro Evolution"
    ],
    opportunities: [
      "licensing tecnologico",
      "white label",
      "co-sviluppo industriale",
      "integrazione in prodotti esistenti",
      "partnership B2B",
      "valutazione tecnica sotto NDA"
    ],
    publicNote:
      "Non dichiarare contratti firmati o mercato attivo se non verificato. Usare documentazione tecnica disponibile, prodotto definito, in sviluppo o disponibile per confronto.",
    applications: "Superfici, additivi, coatings, ambienti tecnici, supporti trattati",
    relatedProducts:
      "MikroPaint Concentrato; Sterilnova HH RTU; Sterilnova Concentrato; High Hygienic; Mikro Evolution",
    localSource:
      "Desktop/07_BREVETTI/BREVETTI_CONCESSI/certificado de patente concedida.pdf"
  },
  {
    internalId: "B02",
    title: "Delivery system per ipersensibilita dentinale",
    officialTitle:
      "FORMULAZIONI E DELIVERY SYSTEM PER IL TRATTAMENTO DELLA IPERSENSIBILITA DENTINALE",
    shortTitle: "Delivery system per ipersensibilita dentinale",
    applicationNumber: "102020000008134",
    publicationOrGrant: "Brevetto n. 102020000008134",
    holder: "Inderst Luigi Rosario Franco 50%; Cinti Silvia 50%",
    inventors: "Cinti Silvia",
    filingDate: "16/04/2020",
    grantDate: "27/03/2023",
    status: "Concesso",
    territories: "Italia",
    summary:
      "Tecnologia di formulazione e rilascio locale destinata all'ambito dentale/orale, con potenziale sviluppo in prodotti professionali o consumer dental care. Eventuali claim, classificazione e categoria regolatoria devono essere valutati caso per caso.",
    sectors: [
      "Odontoiatria",
      "Oral care",
      "Dental care professionale",
      "Prodotti consumer per igiene orale",
      "Licensing dental"
    ],
    applicationExamples: [
      "gel o trattamento professionale",
      "dentifricio o prodotto orale",
      "formulazione a rilascio locale",
      "licenza a partner del settore dental care"
    ],
    linkedProducts: [
      "Gel dentinale professionale",
      "Dentifricio desensibilizzante white label"
    ],
    opportunities: [
      "licensing tecnologico",
      "sviluppo con partner dental",
      "white label oral care",
      "validazione tecnica e regolatoria",
      "progetto B2B con aziende del settore"
    ],
    publicNote:
      "Non presentare come prodotto medicale gia pronto. Usare tecnologia concedibile in licenza, progetto da sviluppare o applicazione da validare.",
    applications: "Odontoiatria, oral care, dental care professionale",
    relatedProducts:
      "Gel dentinale professionale; Dentifricio desensibilizzante white label",
    localSource:
      "Desktop/07_BREVETTI/BREVETTI_CONCESSI/TITOLO Formulazioni e delivery system per il trattamento della ipersensibilita dentinale.pdf"
  },
  {
    internalId: "B03",
    title: "Composizione fotoattivabile",
    officialTitle: "COMPOSIZIONE DISINFETTANTE IGIENIZZANTE AD ATTIVAZIONE FOTODINAMICA",
    shortTitle: "Composizione fotoattivabile",
    applicationNumber: "102023000019734",
    publicationOrGrant: "IT202300019734A1",
    holder: "Cinti Silvia 40%; Tomei Leonardo 40%; Inderst Luigi Rosario Franco 20%",
    inventors: "Cinti Silvia; Inderst Luigi Rosario Franco",
    filingDate: "25/09/2023",
    grantDate: "05/12/2025",
    status: "Concesso",
    territories: "Italia",
    summary:
      "Tecnologia basata sull'abbinamento tra formulazione e attivazione luminosa. Puo essere presentata come piattaforma tecnica per applicazioni in acqua, superfici e gestione tecnica degli odori, con posizionamento regolatorio da definire in base all'uso previsto.",
    sectors: [
      "Acqua / liquidi",
      "Serbatoi",
      "Superfici tecniche",
      "Ambienti professionali",
      "Odori / ristagni",
      "Applicazioni industriali"
    ],
    applicationExamples: [
      "formula piu attivazione luminosa",
      "trattamento tecnico acqua/liquidi",
      "superfici illuminabili",
      "gestione tecnica odori",
      "kit formula + lampada",
      "sistema prodotto + device"
    ],
    linkedProducts: ["Fotonika", "Kit Fotonika LED"],
    opportunities: [
      "licenza tecnologica",
      "sviluppo sistema formula + dispositivo",
      "co-sviluppo con partner industriale",
      "test operativi",
      "protocollo tecnico sotto NDA",
      "partnership B2B"
    ],
    publicNote:
      "Non usare claim commerciali biocidi. Parlare di attivazione luminosa, tecnologia fotoattivabile, sistema tecnico e applicazione da validare.",
    applications: "Acqua, superfici tecniche, gestione tecnica odori, sistemi formula + luce",
    relatedProducts: "Fotonika; Kit Fotonika LED",
    publicLink: "https://patents.google.com/patent/IT202300019734A1/en",
    localSource: "Desktop/07_BREVETTI/DOMANDE_E_PROCEDURE/BREVETTO FOTONIKA.pdf"
  },
  {
    internalId: "B04",
    title: "Composizione idroritentiva per suolo, substrati e radici",
    officialTitle: "COMPOSIZIONE SANIFICANTE IDRORITENTIVA",
    shortTitle: "Composizione idroritentiva per suolo, substrati e radici",
    applicationNumber: "102023000025887",
    publicationOrGrant: "IT202300025887A1",
    holder:
      "Brandlift gmbh 50%; Cinti Silvia 20%; Inderst Luigi Rosario Franco 10%; Tomei Leonardo 20%",
    inventors:
      "Inderst Luigi Rosario Franco; Kallaene Luis; Cinti Silvia; Tissen Marius; Tomei Leonardo; Uhlitzsch Manuel",
    filingDate: "04/12/2023",
    grantDate: "07/04/2026",
    status: "Concesso",
    territories: "Italia",
    summary:
      "Tecnologia idroritentiva orientata alla gestione fisica dell'acqua in substrati, suolo e zona radicale. Le possibili applicazioni agricole devono essere sviluppate con attenzione a test, modalita d'uso, categoria prodotto e claim ammessi.",
    sectors: [
      "Agricoltura",
      "Suolo",
      "Substrati",
      "Florovivaismo",
      "Trapianto",
      "Apparati radicali",
      "Packaging piante / trasporto vivaistico",
      "Gestione fisica dell'acqua"
    ],
    applicationExamples: [
      "granulo o premiscela idroritentiva",
      "terriccio/premix water-saving",
      "applicazione in buca/radice",
      "gestione della zona radicale",
      "pad o sacchetto idroritentivo per trasporto vivaistico",
      "piattaforme per serre, vivai e agronomi"
    ],
    linkedProducts: [
      "Agro Soil / Mikro Soil",
      "Mikro Earth",
      "Hydronica Root",
      "Hydronica Foliar"
    ],
    opportunities: [
      "licensing tecnologico",
      "distribuzione agraria",
      "white label",
      "test agronomici",
      "co-sviluppo con partner agricoli",
      "partnership con vivai, serre e distributori"
    ],
    publicNote:
      "Non dichiarare accordi o esclusive non verificati. Hydronica Foliar resta piattaforma agricola separata con collegamento brevettuale da verificare.",
    applications: "Agricoltura, suolo, substrati, radici, florovivaismo, gestione idrica",
    relatedProducts: "Agro Soil / Mikro Soil; Mikro Earth; Hydronica Root; Hydronica Foliar",
    publicLink: "https://patents.google.com/patent/IT202300025887A1/en",
    localSource:
      "Desktop/07_BREVETTI/BREVETTI_CONCESSI/Brevetto approvato CHABASITE.FAGGIO.POLI.pdf"
  },
  {
    internalId: "B05",
    title: "Composizione per biofilm e applicazioni locali",
    officialTitle: "COMPOSIZIONE DISINFETTANTE IGIENIZZANTE",
    shortTitle: "Composizione per biofilm e applicazioni locali",
    applicationNumber: "102023000020343",
    publicationOrGrant: "IT202300020343A1",
    holder: "Dato pubblico da verificare nei documenti ufficiali",
    inventors: "Dato pubblico da verificare nei documenti ufficiali",
    filingDate: "Dato da verificare",
    grantDate: "07/07/2026",
    status: "Concesso",
    territories: "Italia",
    summary:
      "Tecnologia formulativa con interesse per applicazioni locali, oral care, biofilm e ambiti professionali da validare. Lo sviluppo commerciale richiede particolare attenzione a safety, claim, destinazione d'uso e classificazione regolatoria.",
    sectors: [
      "Igiene orale",
      "Oral care",
      "Biofilm",
      "Applicazioni locali",
      "Derma/mucose",
      "Veterinaria / oral care animale da validare"
    ],
    applicationExamples: [
      "collutorio, gel o dentifricio",
      "gel o lavanda tecnica",
      "gel orale per animali da validare",
      "prodotto professionale B2B",
      "licensing oral care"
    ],
    linkedProducts: ["Gel orale anti-biofilm", "Collutorio tecnico"],
    opportunities: [
      "licensing tecnologico",
      "white label oral care",
      "collaborazione con brand specializzati",
      "sviluppo B2B",
      "validazione safety e regolatoria",
      "progetto sotto NDA"
    ],
    publicNote:
      "Non usare claim medicali o biocidi. Parlare di formulazione locale, applicazione da validare e posizionamento regolatorio da definire.",
    applications: "Oral care, biofilm, applicazioni locali professionali da validare",
    relatedProducts: "Gel orale anti-biofilm; Collutorio tecnico",
    publicLink: "https://patents.google.com/patent/IT202300020343A1/en",
    localSource:
      "Desktop/07_BREVETTI/DOMANDE_E_PROCEDURE/Domanda__102023000020343_-_Procedimento_d'esame_-_Interlocutoria.pdf"
  },
  {
    internalId: "D01",
    title: "Domanda in area nutrizione / integrazione",
    officialTitle:
      "FORMULAZIONE DI VITAMINE IDROSOLUBILI, MAGNESIO-L PIDOLATO E AMINOACIDI RAMIFICATI IN FORMA LEVO GIRA (BCAA).",
    shortTitle: "Domanda in area nutrizione / integrazione",
    applicationNumber: "102023000008709",
    publicationOrGrant: "IT202300008709A1",
    holder: "Richiedente: Luigi Rosario Franco Inderst, et al.",
    inventors: "Dato da verificare",
    filingDate: "03/05/2023",
    grantDate: "Non concessa / dato da verificare",
    status: "Domanda pubblicata / stato da verificare",
    territories: "Italia",
    summary:
      "Domanda pubblicata in area nutrizione e integrazione. Non deve essere presentata come brevetto concesso.",
    sectors: ["Nutrizione", "Integrazione", "Idratazione", "Supporto formulativo"],
    applicationExamples: [
      "formulazione in area integrazione",
      "sviluppo tecnico da valutare",
      "posizionamento regolatorio da verificare"
    ],
    linkedProducts: ["Nessun prodotto Mikromed collegato in modo documentale certo"],
    opportunities: ["stato da verificare", "valutazione tecnica", "informazioni sotto NDA"],
    publicNote: "Non presentare come brevetto concesso.",
    applications: "Nutrizione, integrazione, idratazione",
    relatedProducts: "non trovato",
    publicLink: "https://patents.google.com/patent/IT202300008709A1/en",
    localSource:
      "Desktop/14_DOCUMENTI_GENERICI/7228-REG-1736934872962-102023000008709_250_1736934814754.pdf"
  },
  {
    internalId: "D02",
    title: "Domanda in area cosmesi / igiene orale",
    officialTitle: "COMPOSIZIONE PER LA COSMESI E L'IGIENE ORALE",
    shortTitle: "Domanda in area cosmesi / igiene orale",
    applicationNumber: "102024000022623",
    publicationOrGrant: "Numero pubblicazione da verificare",
    holder: "Dato da verificare",
    inventors: "Dato da verificare",
    filingDate: "Dato da verificare",
    grantDate: "Non concessa / in esame",
    status: "Domanda pubblicata / in esame",
    territories: "Italia",
    summary:
      "Domanda in area cosmesi e igiene orale. Non deve essere presentata come brevetto concesso.",
    sectors: ["Cosmesi", "Igiene orale", "Oral care", "Formulazioni tecniche"],
    applicationExamples: [
      "composizione orale da valutare",
      "concept cosmetico/oral care",
      "claim e categoria regolatoria da verificare"
    ],
    linkedProducts: ["Nessun prodotto Mikromed collegato in modo documentale certo"],
    opportunities: ["stato da verificare", "valutazione tecnica", "informazioni sotto NDA"],
    publicNote: "Non presentare come brevetto concesso.",
    applications: "Cosmesi, igiene orale, formulazioni tecniche",
    relatedProducts: "non trovato",
    localSource:
      "Desktop/14_DOCUMENTI_GENERICI/1746544076758_102024000022623-G07-4-28-027.pdf"
  },
  {
    internalId: "D03",
    title: "Domanda in area agricoltura / gestione risorse idriche",
    officialTitle: "COMPOSIZIONE IDRORITENTIVA",
    shortTitle: "Domanda in area agricoltura / gestione risorse idriche",
    applicationNumber: "102026000014101",
    publicationOrGrant: "Numero pubblicazione da verificare",
    holder:
      "Inderst Luigi Rosario Franco 10%; Cinti Silvia 20%; Tomei Leonardo 20%; Swissbrands Hong Kong Limited 50%",
    inventors: "Inderst Luigi Rosario Franco; Cinti Silvia; Tomei Leonardo",
    filingDate: "15/05/2026",
    grantDate: "Non concessa / stato da verificare",
    status: "Domanda pubblicata / stato da verificare",
    territories: "Italia, come domanda UIBM depositata",
    summary:
      "Domanda relativa a composizione idroritentiva in area agricoltura e gestione risorse idriche. Non deve essere presentata come brevetto concesso.",
    sectors: ["Agricoltura", "Suolo", "Gestione fisica dell'acqua", "Rizosfera"],
    applicationExamples: [
      "suolo e root zone",
      "applicazioni agricole",
      "gestione acqua e nutrienti",
      "sviluppo da valutare"
    ],
    linkedProducts: ["Hydronica Root", "Mikro Soil", "Mikro Earth"],
    opportunities: ["stato da verificare", "test agronomici", "informazioni sotto NDA"],
    publicNote: "Non presentare come brevetto concesso.",
    applications: "Suolo, root zone, applicazioni agricole, gestione acqua e nutrienti",
    relatedProducts: "Hydronica, Hydronica Root, Mikro Soil, Mikro Earth",
    localSource: "Desktop/07_BREVETTI/BREVETTI_CONCESSI/DOMANDA BRECETTO CHABA.pdf"
  }
];

export const grantedPatents = patents.filter((patent) => patent.status === "Concesso");
export const pendingPatents = patents.filter((patent) => patent.status !== "Concesso");
