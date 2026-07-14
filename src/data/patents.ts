import type { PatentItem } from "@/data/types";

export const patentPortfolioSummary = {
  granted: 4,
  pending: 4,
  note:
    "Dati ricavati da documenti locali Mikromed e link pubblici verificati. Le domande in procedura sono indicate separatamente dai brevetti concessi."
};

export const patents: PatentItem[] = [
  {
    title: "Composizione acquosa igienizzante",
    applicationNumber: "102021000004580",
    publicationOrGrant: "Brevetto n. 102021000004580",
    holder: "Inderst Luigi Rosario Franco 50%; Cinti Silvia 50%",
    inventors: "Cinti Silvia",
    filingDate: "01/03/2021",
    grantDate: "22/03/2023",
    status: "Concesso",
    territories: "Italia; licenza commerciale indicata come mondiale nei documenti locali",
    summary:
      "Composizione acquosa a base rame/argento, trattata nel sito come piattaforma tecnica per formulazioni orientate alle superfici e coatings.",
    applications: "Superfici, additivi, coatings, ambienti soggetti a umidità",
    relatedProducts: "Sterilnova, MikroPaint, MikroMold/Mikromold",
    localSource:
      "Desktop/07_BREVETTI/BREVETTI_CONCESSI/certificado de patente concedida.pdf"
  },
  {
    title: "Formulazioni e delivery system per il trattamento della ipersensibilità dentinale",
    applicationNumber: "102020000008134",
    publicationOrGrant: "Brevetto n. 102020000008134",
    holder: "Inderst Luigi Rosario Franco 50%; Cinti Silvia 50%",
    inventors: "Cinti Silvia",
    filingDate: "16/04/2020",
    grantDate: "27/03/2023",
    status: "Concesso",
    territories: "Italia",
    summary:
      "Formulazioni e sistemi di rilascio per applicazioni dentali/orali. Non risultano prodotti Mikromed collegati nel report locale.",
    applications: "Ambito dentale/orale",
    relatedProducts: "non trovato",
    localSource:
      "Desktop/07_BREVETTI/BREVETTI_CONCESSI/TITOLO Formulazioni e delivery system per il trattamento della ipersensibilità dentinale.pdf"
  },
  {
    title: "Composizione ad attivazione fotodinamica",
    applicationNumber: "102023000019734",
    publicationOrGrant: "Brevetto n. 102023000019734",
    holder: "Cinti Silvia 40%; Tomei Leonardo 40%; Inderst Luigi Rosario Franco 20%",
    inventors: "Cinti Silvia; Inderst Luigi Rosario Franco",
    filingDate: "25/09/2023",
    grantDate: "05/12/2025",
    status: "Concesso",
    territories: "Italia",
    summary:
      "Composizione fotoattiva collegata nei documenti commerciali alla piattaforma Fotonika.",
    applications: "Superfici, formulazioni funzionali con componente fotoattiva",
    relatedProducts: "Fotonika",
    publicLink: "https://patents.google.com/patent/IT202300019734A1/en",
    localSource: "Desktop/07_BREVETTI/DOMANDE_E_PROCEDURE/BREVETTO FOTONIKA.pdf"
  },
  {
    title: "Composizione idroritentiva",
    applicationNumber: "102023000025887",
    publicationOrGrant: "Brevetto n. 102023000025887",
    holder: "Brandlift gmbh 50%; Cinti Silvia 20%; Inderst Luigi Rosario Franco 10%; Tomei Leonardo 20%",
    inventors:
      "Inderst Luigi Rosario Franco; Kallaene Luis; Cinti Silvia; Tissen Marius; Tomei Leonardo; Uhlitzsch Manuel",
    filingDate: "04/12/2023",
    grantDate: "07/04/2026",
    status: "Concesso",
    territories: "Italia",
    summary:
      "Composizione idroritentiva basata su matrice minerale e materiale tecnico per gestione fisica dell'acqua in ambito agricolo.",
    applications: "Suolo, radici, gestione fisica dell'acqua, agricoltura e florovivaismo",
    relatedProducts: "Mikro Earth, Hydronica, Hydronica Root, Hydronica Foliar, Mikro Soil",
    publicLink: "https://patents.google.com/patent/IT202300025887A1/en",
    localSource:
      "Desktop/07_BREVETTI/BREVETTI_CONCESSI/Brevetto approvato CHABASITE.FAGGIO.POLI.pdf"
  },
  {
    title: "Composizione idroritentiva",
    applicationNumber: "102026000014101",
    publicationOrGrant: "non trovato",
    holder: "Inderst Luigi Rosario Franco 10%; Cinti Silvia 20%; Tomei Leonardo 20%; Swissbrands Hong Kong Limited 50%",
    inventors: "Inderst Luigi Rosario Franco; Cinti Silvia; Tomei Leonardo",
    filingDate: "15/05/2026",
    grantDate: "non trovato",
    status: "Domanda in procedura",
    territories: "Italia, come domanda UIBM depositata",
    summary:
      "Domanda relativa a composizione idroritentiva con chabasite e SAP secondo i documenti locali.",
    applications: "Suolo, root zone, applicazioni agricole, gestione acqua e nutrienti",
    relatedProducts: "Hydronica, Hydronica Root, Mikro Soil, Mikro Earth",
    localSource: "Desktop/07_BREVETTI/BREVETTI_CONCESSI/DOMANDA BRECETTO CHABA.pdf"
  },
  {
    title: "Composizione per controllo biofilm / composizione per superfici",
    applicationNumber: "102023000020343",
    publicationOrGrant: "non trovato",
    holder: "non trovato",
    inventors: "non trovato",
    filingDate: "non trovato",
    grantDate: "non trovato",
    status: "Interlocutoria",
    territories: "Italia",
    summary:
      "Domanda in esame con interlocutoria UIBM; documenti locali citano rame elementare/colloidale non ionico e D-tagatosio.",
    applications: "Ambito orale, superfici/materiali, umano e veterinario secondo rivendicazioni modificate",
    relatedProducts: "non trovato",
    publicLink: "https://patents.google.com/patent/IT202300020343A1/en",
    localSource:
      "Desktop/07_BREVETTI/DOMANDE_E_PROCEDURE/Domanda__102023000020343_-_Procedimento_d'esame_-_Interlocutoria.pdf"
  },
  {
    title: "Formulazione per idratazione / vitamine idrosolubili",
    applicationNumber: "102023000008709",
    publicationOrGrant: "IT202300008709A1",
    holder: "Richiedente: Luigi Rosario Franco Inderst, et al.",
    inventors: "non trovato",
    filingDate: "03/05/2023",
    grantDate: "non trovato",
    status: "Interlocutoria",
    territories: "Italia",
    summary:
      "Formulazione/integratore per stimolare sete e idratazione volontaria; rapporto di ricerca UIBM del 15/01/2025.",
    applications: "Integratori alimentari, idratazione, anziani, supporto fisiologico",
    relatedProducts: "non trovato",
    publicLink: "https://patents.google.com/patent/IT202300008709A1/en",
    localSource:
      "Desktop/14_DOCUMENTI_GENERICI/7228-REG-1736934872962-102023000008709_250_1736934814754.pdf"
  },
  {
    title: "Composizione orale con carbone di faggio",
    applicationNumber: "102024000022623",
    publicationOrGrant: "non trovato",
    holder: "non trovato",
    inventors: "non trovato",
    filingDate: "non trovato",
    grantDate: "non trovato",
    status: "Interlocutoria",
    territories: "Italia",
    summary:
      "Domanda relativa ad applicazioni orali con carbone derivato da legno di faggio; rapporto/opinione scritta con rilievi di brevettabilità.",
    applications: "Igiene orale, composizioni orali, formulazioni tecniche",
    relatedProducts: "non trovato",
    localSource:
      "Desktop/14_DOCUMENTI_GENERICI/1746544076758_102024000022623-G07-4-28-027.pdf"
  }
];

export const grantedPatents = patents.filter((patent) => patent.status === "Concesso");
export const pendingPatents = patents.filter((patent) => patent.status !== "Concesso");
