"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/data/site";

export function LogoMark({ compact = false }: { compact?: boolean }) {
  const [logoError, setLogoError] = useState(false);

  return (
    <span className="flex items-center gap-3">
      {!logoError ? (
        <Image
          alt="Mikromed Europa S.L. logo"
          className="h-11 w-11 rounded-full object-contain shadow-[0_6px_18px_rgba(23,50,77,0.10)]"
          height={44}
          onError={() => setLogoError(true)}
          src="/images/mikromed-logo.png"
          width={44}
        />
      ) : (
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-900 text-sm font-bold text-white">
          M
        </span>
      )}
      {!compact ? (
        <span className="leading-tight">
          <span className="block text-sm font-semibold tracking-[0.04em] text-forest-900">
            {siteConfig.name}
          </span>
          <span className="block text-xs text-mineral-500">
            Tecnologie, regolatorio, brevetti
          </span>
        </span>
      ) : null}
    </span>
  );
}
