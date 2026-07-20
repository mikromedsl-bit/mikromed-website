import { ProductCard } from "@/components/ProductCard";
import { productStatusOrder } from "@/data/products";
import type { ProductItem } from "@/data/types";

export function ProductGrid({ items }: { items: ProductItem[] }) {
  const sortedItems = [...items].sort(
    (first, second) =>
      productStatusOrder.indexOf(first.status) - productStatusOrder.indexOf(second.status)
  );

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {sortedItems.map((item) => (
        <ProductCard item={item} key={item.title} />
      ))}
    </div>
  );
}
