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
};

export type ProductGroup = {
  title: string;
  description: string;
  items: ProductItem[];
};
