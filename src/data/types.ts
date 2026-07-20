import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type CardItem = {
  title: string;
  description: string;
  icon?: LucideIcon;
};

export type BadgeTone = "default" | "success" | "warning" | "muted";

export type PageContent = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  intro?: string;
  keywords: string[];
  sections: {
    title: string;
    description?: string;
    items: CardItem[];
  }[];
  cta?: {
    title: string;
    description: string;
    href: string;
    label: string;
  };
};

export type ProductItem = CardItem & {
  field: string;
  badges: string[];
  patentRefs?: string[];
};

export type ProductGroup = {
  title: string;
  description: string;
  items: ProductItem[];
};

export type PatentItem = {
  internalId: string;
  title: string;
  officialTitle: string;
  shortTitle: string;
  applicationNumber: string;
  publicationOrGrant: string;
  holder: string;
  inventors: string;
  filingDate: string;
  grantDate: string;
  status:
    | "Concesso"
    | "Domanda pubblicata"
    | "Domanda pubblicata / in esame"
    | "Domanda pubblicata / stato da verificare";
  territories: string;
  summary: string;
  sectors: string[];
  applicationExamples: string[];
  linkedProducts: string[];
  opportunities: string[];
  publicNote: string;
  applications: string;
  relatedProducts: string;
  publicLink?: string;
  localSource: string;
};

export type ApplicationArea = CardItem & {
  linkedPatents: string[];
  applicationExamples: string[];
  partnerTypes: string[];
  regulatoryNote: string;
};

export type PatentApplicationItem = {
  patentId: string;
  patentNumber: string;
  publicationNumber?: string;
  shortTitle: string;
  description: string;
  possibleSectors: string[];
  developableApplications: string[];
  potentialPartners: string[];
  regulatoryNote: string;
};

export type PendingApplicationItem = {
  patentId: string;
  shortTitle: string;
  applicationNumber: string;
  status: string;
  interestArea: string;
  note: string;
};
