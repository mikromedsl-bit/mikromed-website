import { productStatusLegend } from "@/data/products";
import type { ProductOpportunityStatus } from "@/data/types";

const legendStyles: Record<ProductOpportunityStatus, string> = {
  active: "border-[#BEC6CD] bg-[#D8DEE3] text-[#17324D]",
  limited: "border-[#2E4C68]/35 bg-[#EEF4F8] text-[#17324D]",
  open: "border-[#2E4C68] bg-[#17324D] text-white",
  development: "border-dashed border-[#BEC6CD] bg-white text-[#2E4C68]",
  nda: "border-[#17324D] bg-[#0F263D] text-white"
};

export function ProductStatusLegend() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {productStatusLegend.map((item) => (
        <div
          className={`rounded-lg border p-4 ${legendStyles[item.status]}`}
          key={item.status}
        >
          <p className="text-sm font-semibold">{item.label}</p>
          <p className="mt-2 text-xs leading-5 opacity-85">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
