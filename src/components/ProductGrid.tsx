import type { ProductItem } from "@/data/types";

export function ProductGrid({ items }: { items: ProductItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <article
            className="rounded-lg border border-mineral-200 bg-white p-6 shadow-sm transition hover:shadow-soft"
            key={item.title}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mineral-500">
                  {item.field}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-forest-900">
                  {item.title}
                </h3>
              </div>
              {Icon ? (
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-mineral-50 text-forest-900">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
              ) : null}
            </div>
            <p className="mt-4 text-sm leading-6 text-mineral-700">
              {item.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.badges.map((badge) => (
                <span
                  className="rounded-full border border-mineral-200 bg-mineral-50 px-3 py-1 text-xs font-medium text-forest-900"
                  key={badge}
                >
                  {badge}
                </span>
              ))}
            </div>
            {item.patentRefs && item.patentRefs.length > 0 ? (
              <div className="mt-5 border-t border-mineral-200 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mineral-500">
                  Brevetti / domande collegate
                </p>
                <p className="mt-2 text-sm leading-6 text-mineral-700">
                  {item.patentRefs.join(", ")}
                </p>
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
