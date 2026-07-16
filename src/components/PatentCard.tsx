import { ButtonLink } from "@/components/ButtonLink";
import { Badge } from "@/components/Badge";
import type { PatentItem } from "@/data/types";

export function PatentCard({ patent }: { patent: PatentItem }) {
  const isGranted = patent.status === "Concesso";

  return (
    <article className="rounded-lg border border-mineral-200/90 bg-white p-6 shadow-[0_10px_32px_rgba(23,50,77,0.06)] transition duration-200 hover:border-mineral-500/45 hover:shadow-[0_20px_46px_rgba(23,50,77,0.10)]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge tone={isGranted ? "success" : "warning"}>{patent.status}</Badge>
            <Badge tone="muted">{patent.internalId}</Badge>
            <Badge tone="muted">{patent.applicationNumber}</Badge>
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-forest-900">{patent.shortTitle}</h3>
          <p className="mt-3 text-sm leading-6 text-mineral-700">{patent.summary}</p>
        </div>
        <div className="shrink-0 rounded-lg border border-mineral-200/75 bg-mineral-50 p-4 text-sm text-mineral-700 lg:w-64">
          <p>
            <span className="font-semibold text-forest-900">Concessione:</span> {patent.grantDate}
          </p>
          <p className="mt-2">
            <span className="font-semibold text-forest-900">Stato:</span> {patent.status}
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-lg border border-mineral-200/70 bg-mineral-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mineral-500">
          Titolo ufficiale brevetto
        </p>
        <p className="mt-2 text-sm font-semibold text-forest-900">{patent.officialTitle}</p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mineral-500">
            Settori applicativi
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-mineral-700">
            {patent.sectors.map((sector) => (
              <li key={sector}>{sector}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mineral-500">
            Prodotti collegati
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-mineral-700">
            {patent.linkedProducts.map((product) => (
              <li key={product}>{product}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mineral-500">
            Opportunita
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-mineral-700">
            {patent.opportunities.map((opportunity) => (
              <li key={opportunity}>{opportunity}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 border-t border-mineral-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-3xl text-sm leading-6 text-mineral-600">{patent.publicNote}</p>
        <ButtonLink href="/contact" variant="secondary">
          Parla di questa tecnologia
        </ButtonLink>
      </div>
    </article>
  );
}
