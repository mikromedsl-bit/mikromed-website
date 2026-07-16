import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { navItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";

const areas = [
  "Agricoltura e suolo",
  "Animal care e lettiere",
  "Mangimi e additivi minerali",
  "Superfici e coatings",
  "Home & Professional Care",
  "R&D industriale",
  "Scrittura brevetti"
];

export function Footer() {
  const footerLinks = navItems.slice(1).flatMap((item) => [
    item,
    ...(item.children ?? [])
  ]);

  return (
    <footer className="relative overflow-hidden border-t border-mineral-200 gradient-navy text-white">
      <div className="absolute inset-0 technical-grid-dark opacity-35" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="relative md:col-span-2">
          <div className="inline-flex rounded-lg bg-white px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
            <LogoMark />
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-forest-100">
            Tecnologie brevettate, formulazioni funzionali, consulenza
            regolatoria e supporto tecnico alla scrittura brevettuale.
          </p>
          <p className="mt-5 text-sm text-mineral-200">
            {siteConfig.address}
          </p>
        </div>
        <div className="relative">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-200">
            Aree
          </h2>
          <ul className="mt-4 space-y-2">
            {areas.map((area) => (
              <li className="text-sm text-forest-100" key={area}>
                {area}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-mineral-200">
            Link rapidi
          </h2>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link
                  className="text-sm text-forest-100 transition hover:text-white"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-sm text-mineral-200 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <span>(c) {new Date().getFullYear()} {siteConfig.name}. Tutti i diritti riservati.</span>
          <span>{siteConfig.contactEmail} - {siteConfig.contactPhone}</span>
        </div>
      </div>
    </footer>
  );
}
