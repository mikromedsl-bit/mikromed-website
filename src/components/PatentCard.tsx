import { Badge } from "@/components/Badge";
import { ButtonLink } from "@/components/ButtonLink";
import type { PatentItem } from "@/data/types";

function getPublicationNumber(patent: PatentItem) {
  const value = patent.publicationOrGrant.trim();
  return value.startsWith("IT") ? value : null;
}

export function PatentCard({ patent }: { patent: PatentItem }) {
  const isGranted = patent.status === "Concesso";
  const publicationNumber = getPublicationNumber(patent);

  return (
    <article className="premium-card rounded-lg p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge tone={isGranted ? "success" : "warning"}>{patent.status}</Badge>
            <Badge tone="muted">{patent.internalId}</Badge>
            <Badge tone="muted">{patent.applicationNumber}</Badge>
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-forest-900">
            {patent.internalId} - {isGranted ? "Brevetto concesso" : "Tecnologia in valutazione"}
          </h3>
        </div>
        <div className="shrink-0 rounded-lg border border-mineral-200/75 bg-[linear-gradient(180deg,#F7F9FA,#EDF1F4)] p-4 text-sm text-mineral-700 lg:w-72">
          <p>
            <span className="font-semibold text-forest-900">
              {isGranted ? "Numero brevetto:" : "Numero domanda:"}
            </span>{" "}
            {patent.applicationNumber}
          </p>
          {publicationNumber ? (
            <p className="mt-2">
              <span className="font-semibold text-forest-900">Numero pubblicazione:</span>{" "}
              {publicationNumber}
            </p>
          ) : null}
          {isGranted ? (
            <p className="mt-2">
              <span className="font-semibold text-forest-900">Data concessione:</span>{" "}
              {patent.grantDate}
            </p>
          ) : (
            <p className="mt-2">
              <span className="font-semibold text-forest-900">Stato:</span> {patent.status}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-mineral-200/70 bg-[linear-gradient(180deg,#FFFFFF,#F7F9FA)] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mineral-500">
            Titolo ufficiale
          </p>
          <p className="mt-2 text-sm font-semibold text-forest-900">{patent.officialTitle}</p>
        </div>
        <div className="rounded-lg border border-mineral-200/70 bg-[linear-gradient(180deg,#FFFFFF,#F7F9FA)] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mineral-500">
            Titolo breve
          </p>
          <p className="mt-2 text-sm font-semibold text-forest-900">{patent.shortTitle}</p>
        </div>
      </div>

      {isGranted ? (
        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mineral-500">
            Descrizione
          </p>
          <p className="mt-3 text-sm leading-6 text-mineral-700">{patent.summary}</p>
        </div>
      ) : null}

      {isGranted ? (
        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mineral-500">
            Opportunita
          </p>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-mineral-700 sm:grid-cols-2">
            {patent.opportunities.map((opportunity) => (
              <li key={opportunity}>{opportunity}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mt-6 rounded-lg border border-mineral-200/70 bg-mineral-50 p-4 text-sm leading-6 text-mineral-700">
          {patent.publicNote}
        </p>
      )}

      {isGranted ? (
        <div className="mt-6 flex border-t border-mineral-200 pt-5">
          <ButtonLink href="/contact" variant="secondary">
            Parla di questa tecnologia
          </ButtonLink>
        </div>
      ) : null}
    </article>
  );
}
