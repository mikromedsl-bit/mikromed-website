import {
  Building2,
  Factory,
  HeartPulse,
  Paintbrush,
  Sprout
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type EvidenceSectorSlug =
  | "sanitario"
  | "industriale"
  | "agricolo"
  | "zootecnia"
  | "pitture-rivestimenti";

export type EvidenceStudyType =
  | "Pubblicazione scientifica"
  | "Studio tecnico"
  | "Documentazione tecnica"
  | "Revisione bibliografica"
  | "Altro";

export type EvidencePertinenceLevel =
  | "Prodotto finito"
  | "Formulazione"
  | "Componente"
  | "Materiale"
  | "Matrice"
  | "Meccanismo applicativo";

export type EvidenceSector = {
  slug: EvidenceSectorSlug;
  title: string;
  description: string;
  intro: string;
  icon: LucideIcon;
  keywords: string[];
};

export type ScientificEvidenceArticle = {
  id: string;
  slug: string;
  title: string;
  authors: string[];
  year: number;
  journalOrSource: string;
  doi?: string;
  sourceUrl?: string;
  pdfUrl?: string;
  pdfPublicationAllowed?: boolean;
  sectors: EvidenceSectorSlug[];
  futureSubsector?: string;
  analyzedComponents: string[];
  studyType: EvidenceStudyType;
  summary: string;
  relevance: string;
  limitations: string;
  language: string;
  keywords: string[];
  pertinenceLevel: EvidencePertinenceLevel;
  featured: boolean;
  insertedAt: string;
  updatedAt: string;
};

export type QrRedirect = {
  slug: string;
  destination: string;
  description: string;
};

export const scientificEvidenceIntro =
  "Questa sezione raccoglie pubblicazioni scientifiche, studi e documentazione tecnica relativi ai materiali, ai componenti, ai meccanismi e agli ambiti applicativi delle tecnologie sviluppate da MIKROMED EUROPA S.L.\n\nLe fonti sono organizzate per grandi settori applicativi, in modo da permettere una consultazione semplice, trasparente e progressivamente aggiornabile.";

export const evidenceNatureNote =
  "Le pubblicazioni presenti in questa sezione possono riguardare prodotti finiti, formulazioni, singoli componenti, materiali, matrici o meccanismi applicativi. Per ciascuna fonte sara indicato il relativo livello di pertinenza.";

export const emptyEvidenceMessage =
  "Le pubblicazioni scientifiche relative a questo settore saranno inserite progressivamente.";

export const emptyEvidenceDetail = "La sezione e in fase di aggiornamento.";

export const evidenceSectors: EvidenceSector[] = [
  {
    slug: "sanitario",
    title: "Sanitario",
    description:
      "Pubblicazioni relative all'impiego di materiali, componenti e tecnologie in contesti sanitari, medicali, odontoiatrici e assistenziali.",
    intro:
      "Raccolta di fonti relative a materiali, componenti e tecnologie valutabili in contesti sanitari, medicali, odontoiatrici e assistenziali.",
    icon: HeartPulse,
    keywords: ["sanitario", "medicale", "odontoiatria", "assistenza"]
  },
  {
    slug: "industriale",
    title: "Industriale",
    description:
      "Studi e documentazione relativi alle applicazioni industriali, ai materiali tecnici, alle superfici, ai processi produttivi e alle formulazioni funzionali.",
    intro:
      "Raccolta di fonti relative ad applicazioni industriali, materiali tecnici, superfici, processi produttivi e formulazioni funzionali.",
    icon: Factory,
    keywords: ["industriale", "materiali tecnici", "superfici", "formulazioni"]
  },
  {
    slug: "agricolo",
    title: "Agricolo",
    description:
      "Evidenze scientifiche relative al suolo, alle colture, alla gestione dell'acqua, ai materiali applicati in agricoltura e alle tecnologie per il settore agricolo.",
    intro:
      "Raccolta di fonti relative a suolo, colture, gestione dell'acqua, materiali applicati in agricoltura e tecnologie per il settore agricolo.",
    icon: Sprout,
    keywords: ["agricolo", "suolo", "colture", "gestione acqua"]
  },
  {
    slug: "zootecnia",
    title: "Zootecnia",
    description:
      "Pubblicazioni relative agli ambienti zootecnici, alle superfici, alle lettiere, all'acqua di abbeverata, ai materiali minerali e alle applicazioni destinate agli allevamenti.",
    intro:
      "Raccolta di fonti relative ad ambienti zootecnici, superfici, lettiere, acqua di abbeverata, materiali minerali e applicazioni destinate agli allevamenti.",
    icon: Building2,
    keywords: ["zootecnia", "allevamenti", "lettiere", "materiali minerali"]
  },
  {
    slug: "pitture-rivestimenti",
    title: "Pitture e rivestimenti",
    description:
      "Studi relativi a pitture, rivestimenti, matrici, film, superfici trattate e incorporazione di materiali funzionali all'interno dei supporti.",
    intro:
      "Raccolta di fonti relative a pitture, rivestimenti, matrici, film, superfici trattate e incorporazione di materiali funzionali nei supporti.",
    icon: Paintbrush,
    keywords: ["pitture", "rivestimenti", "matrici", "superfici trattate"]
  }
];

export const scientificEvidenceArticles: ScientificEvidenceArticle[] = [];

export const qrRedirects: QrRedirect[] = [
  {
    slug: "detergenza-rame-argento",
    destination: "/evidenze-scientifiche/industriale",
    description:
      "QR stabile per materiali relativi alla detergenza nel grande settore Industriale."
  }
];

export function getEvidenceSector(slug: string) {
  return evidenceSectors.find((sector) => sector.slug === slug);
}

export function getArticlesForSector(slug: EvidenceSectorSlug) {
  return scientificEvidenceArticles.filter((article) =>
    article.sectors.includes(slug)
  );
}

export function getQrRedirect(slug: string) {
  return qrRedirects.find((redirect) => redirect.slug === slug);
}
