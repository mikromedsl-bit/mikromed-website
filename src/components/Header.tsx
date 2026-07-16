"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogoMark } from "@/components/LogoMark";
import { navItems } from "@/data/navigation";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-mineral-200/80 bg-white/[0.92] shadow-[0_1px_0_rgba(23,50,77,0.03)] backdrop-blur-xl">
      <nav
        aria-label="Navigazione principale"
        className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8"
      >
        <Link className="shrink-0" href="/" onClick={() => setOpen(false)}>
          <LogoMark />
        </Link>
        <button
          aria-expanded={open}
          aria-label="Apri o chiudi navigazione"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-mineral-200 bg-white text-forest-900 shadow-sm lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              Boolean(item.children?.some((child) => pathname === child.href));
            return (
              <div className="group relative" key={item.href}>
                <Link
                  className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-mineral-50 text-forest-900 shadow-[inset_0_0_0_1px_rgba(190,198,205,0.75)]"
                      : "text-mineral-700 hover:bg-mineral-50 hover:text-forest-900"
                  }`}
                  href={item.href}
                >
                  {item.label}
                  {item.children ? <ChevronDown aria-hidden="true" className="h-3.5 w-3.5" /> : null}
                </Link>
                {item.children ? (
                  <div className="invisible absolute left-0 top-full z-50 min-w-64 rounded-lg border border-mineral-200 bg-white p-2 opacity-0 shadow-soft transition group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        className="block rounded-md px-3 py-2 text-sm font-medium text-mineral-700 hover:bg-mineral-50 hover:text-forest-900"
                        href={child.href}
                        key={child.href}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </nav>
      {open ? (
        <div className="border-t border-mineral-200 bg-white lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1 px-5 py-4 sm:px-6">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <div key={item.href}>
                  <Link
                    className={`block rounded-lg px-3 py-3 text-sm font-medium ${
                      active ? "bg-mineral-50 text-forest-900" : "text-mineral-700"
                    }`}
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <div className="ml-4 grid gap-1 border-l border-mineral-200 pl-3">
                      {item.children.map((child) => (
                        <Link
                          className="rounded-lg px-3 py-2 text-sm text-mineral-600"
                          href={child.href}
                          key={child.href}
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
