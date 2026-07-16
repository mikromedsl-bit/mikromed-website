import { Badge } from "@/components/Badge";
import type { ProductItem } from "@/data/types";

export function ProductCard({ item }: { item: ProductItem }) {
  const Icon = item.icon;

  return (
    <article className="rounded-lg border border-mineral-200/90 bg-white p-6 shadow-[0_10px_32px_rgba(23,50,77,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-mineral-500/45 hover:shadow-[0_20px_46px_rgba(23,50,77,0.10)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mineral-500">
            {item.field}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-forest-900">{item.title}</h3>
        </div>
        {Icon ? (
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-mineral-50 text-forest-900 ring-1 ring-mineral-200/70">
            <Icon aria-hidden="true" className="h-5 w-5" />
          </span>
        ) : null}
      </div>
      <p className="mt-4 text-sm leading-6 text-mineral-700">{item.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.badges.map((badge) => (
          <Badge key={badge}>{badge}</Badge>
        ))}
      </div>
      {item.patentRefs && item.patentRefs.length > 0 ? (
        <div className="mt-5 border-t border-mineral-200 pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mineral-500">
            Brevetti / domande collegate
          </p>
          <p className="mt-2 text-sm leading-6 text-mineral-700">{item.patentRefs.join(", ")}</p>
        </div>
      ) : null}
    </article>
  );
}
