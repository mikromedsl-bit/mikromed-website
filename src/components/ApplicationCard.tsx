import { Badge } from "@/components/Badge";
import { ButtonLink } from "@/components/ButtonLink";
import type { ApplicationArea } from "@/data/types";

export function ApplicationCard({ item }: { item: ApplicationArea }) {
  const Icon = item.icon;

  return (
    <article className="premium-card rounded-lg p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-forest-900">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-mineral-700">{item.description}</p>
        </div>
        {Icon ? (
          <span className="premium-icon inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-forest-900">
            <Icon aria-hidden="true" className="h-5 w-5" />
          </span>
        ) : null}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.linkedPatents.map((patent) => (
          <Badge key={patent} tone={patent.startsWith("D") ? "warning" : "success"}>
            {patent}
          </Badge>
        ))}
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mineral-500">
            Possibili utilizzi
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-mineral-700">
            {item.applicationExamples.map((application) => (
              <li key={application}>{application}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mineral-500">
            Partner potenzialmente interessati
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-mineral-700">
            {item.partnerTypes.map((partner) => (
              <li key={partner}>{partner}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-4 border-t border-mineral-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-3xl text-sm leading-6 text-mineral-600">
          {item.regulatoryNote}
        </p>
        <ButtonLink href="/contact" variant="secondary">
          Valuta questa applicazione
        </ButtonLink>
      </div>
    </article>
  );
}
