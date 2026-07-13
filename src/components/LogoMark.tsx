/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";

export function LogoMark({ compact = false }: { compact?: boolean }) {
  const [logoError, setLogoError] = useState(false);

  return (
    <span className="flex items-center gap-3">
      {!logoError ? (
        <img
          alt="Logo Mikromed"
          className="h-10 w-10 rounded-full object-contain"
          onError={() => setLogoError(true)}
          src="/images/micromed-logo.png"
        />
      ) : (
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-900 text-sm font-bold text-white">
          M
        </span>
      )}
      {!compact ? (
        <span className="leading-tight">
          <span className="block text-sm font-semibold text-forest-900">
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
