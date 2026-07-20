import { Badge } from "@/components/Badge";
import { ButtonLink } from "@/components/ButtonLink";
import { productOpportunityStatuses } from "@/data/products";
import type { ProductItem } from "@/data/types";

const statusStyles = {
  active: {
    card: "border-[#BEC6CD] bg-[linear-gradient(180deg,#FFFFFF,#EEF2F5)]",
    panel: "border-[#BEC6CD] bg-[#F7F9FA] text-[#17324D]",
    label: "border-[#BEC6CD] bg-[#D8DEE3] text-[#17324D]"
  },
  limited: {
    card: "border-[#AEBAC4] bg-[linear-gradient(180deg,#FFFFFF,#F2F6F9)]",
    panel: "border-[#BEC6CD] bg-[#EEF4F8] text-[#17324D]",
    label: "border-[#2E4C68]/35 bg-[#D8DEE3] text-[#17324D]"
  },
  open: {
    card: "border-[#2E4C68]/50 bg-[linear-gradient(180deg,#FFFFFF,#EEF5FA)] shadow-[0_18px_42px_rgba(23,50,77,0.10)]",
    panel: "border-[#2E4C68]/40 bg-[#E8F1F7] text-[#0F263D]",
    label: "border-[#2E4C68] bg-[#17324D] text-white"
  },
  development: {
    card: "border-dashed border-[#BEC6CD] bg-[linear-gradient(180deg,#FFFFFF,#F7F9FA)]",
    panel: "border-dashed border-[#BEC6CD] bg-[#F7F9FA] text-[#2E4C68]",
    label: "border-[#BEC6CD] bg-white text-[#2E4C68]"
  },
  nda: {
    card: "border-[#17324D] bg-[linear-gradient(180deg,#FFFFFF,#EEF2F5)]",
    panel: "border-[#17324D] bg-[#17324D] text-white",
    label: "border-[#17324D] bg-[#0F263D] text-white"
  }
};

export function ProductCard({ item }: { item: ProductItem }) {
  const Icon = item.icon;
  const status = productOpportunityStatuses[item.status];
  const styles = statusStyles[item.status];

  return (
    <article className={`premium-card rounded-lg p-6 ${styles.card}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mineral-500">
            {item.field}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-forest-900">{item.title}</h3>
        </div>
        {Icon ? (
          <span className="premium-icon inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-forest-900">
            <Icon aria-hidden="true" className="h-5 w-5" />
          </span>
        ) : null}
      </div>
      <p className="mt-4 text-sm leading-6 text-mineral-700">{item.description}</p>

      <div className={`mt-5 rounded-lg border p-4 ${styles.panel}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] opacity-75">
          Stato opportunita
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${styles.label}`}>
            {status.label}
          </span>
        </div>
        <p className="mt-3 text-sm leading-6">{status.description}</p>
      </div>

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

      <div className="mt-5 flex border-t border-mineral-200 pt-5">
        <ButtonLink href="/contact" variant="secondary">
          {status.cta}
        </ButtonLink>
      </div>
    </article>
  );
}
