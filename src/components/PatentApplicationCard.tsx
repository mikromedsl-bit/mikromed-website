import { Badge } from "@/components/Badge";
import { ButtonLink } from "@/components/ButtonLink";
import type { PatentApplicationItem, PendingApplicationItem } from "@/data/types";

function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 grid gap-2 text-sm leading-6 text-mineral-700 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function PatentApplicationCard({ item }: { item: PatentApplicationItem }) {
  return (
    <article className="premium-card rounded-lg p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge tone="success">{item.patentId}</Badge>
            <Badge tone="muted">Brevetto {item.patentNumber}</Badge>
            {item.publicationNumber ? (
              <Badge tone="muted">{item.publicationNumber}</Badge>
            ) : null}
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-forest-900">{item.shortTitle}</h3>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-mineral-700">
            {item.description}
          </p>
        </div>
        <ButtonLink href="/contact" variant="secondary">
          Valuta questa applicazione
        </ButtonLink>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mineral-500">
            Settori applicativi possibili
          </p>
          <DetailList items={item.possibleSectors} />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mineral-500">
            Applicazioni sviluppabili
          </p>
          <DetailList items={item.developableApplications} />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mineral-500">
            Partner potenzialmente interessati
          </p>
          <DetailList items={item.potentialPartners} />
        </div>
      </div>

      <p className="mt-6 border-t border-mineral-200 pt-4 text-sm leading-6 text-mineral-600">
        {item.regulatoryNote}
      </p>
    </article>
  );
}

export function PendingApplicationCard({ item }: { item: PendingApplicationItem }) {
  return (
    <article className="rounded-lg border border-mineral-200 bg-white/80 p-5">
      <div className="flex flex-wrap gap-2">
        <Badge tone="warning">{item.patentId}</Badge>
        <Badge tone="muted">{item.applicationNumber}</Badge>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-forest-900">{item.shortTitle}</h3>
      <dl className="mt-4 grid gap-3 text-sm leading-6 text-mineral-700 sm:grid-cols-3">
        <div>
          <dt className="font-semibold text-forest-900">Stato</dt>
          <dd>{item.status}</dd>
        </div>
        <div>
          <dt className="font-semibold text-forest-900">Area possibile</dt>
          <dd>{item.interestArea}</dd>
        </div>
        <div>
          <dt className="font-semibold text-forest-900">Nota</dt>
          <dd>{item.note}</dd>
        </div>
      </dl>
    </article>
  );
}
