import type { NavItem } from "@/data/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Brevetti e Tecnologie", href: "/patents" },
  { label: "Applicazioni", href: "/applications" },
  { label: "Prodotti e Opportunita", href: "/products-projects" },
  { label: "Collabora con noi", href: "/collaborate" },
  {
    label: "Servizi",
    href: "/services",
    children: [
      { label: "Consulenza Regolatoria", href: "/regulatory-claims" },
      { label: "Sviluppo Prodotto", href: "/product-development" },
      { label: "Scrittura Brevetti", href: "/patent-writing" }
    ]
  },
  { label: "Partnership", href: "/partnerships" },
  { label: "Contatti", href: "/contact" }
];
