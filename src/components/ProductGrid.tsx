import { ProductCard } from "@/components/ProductCard";
import type { ProductItem } from "@/data/types";

export function ProductGrid({ items }: { items: ProductItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ProductCard item={item} key={item.title} />
      ))}
    </div>
  );
}
