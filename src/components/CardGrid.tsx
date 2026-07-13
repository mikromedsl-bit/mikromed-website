import type { CardItem } from "@/data/types";

type CardGridProps = {
  items: CardItem[];
  columns?: "three" | "four" | "five";
  dark?: boolean;
};

export function CardGrid({ items, columns = "three", dark = false }: CardGridProps) {
  const grid = {
    three: "lg:grid-cols-3",
    four: "lg:grid-cols-4",
    five: "lg:grid-cols-5"
  };

  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${grid[columns]}`}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <article
            className={`rounded-lg border p-6 transition ${
              dark
                ? "border-white/15 bg-white/5 text-white"
                : "border-mineral-200 bg-white text-mineral-900 shadow-sm hover:shadow-soft"
            }`}
            key={item.title}
          >
            {Icon ? (
              <div
                className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg ${
                  dark ? "bg-white/10 text-copper-300" : "bg-forest-50 text-forest-800"
                }`}
              >
                <Icon aria-hidden="true" className="h-5 w-5" />
              </div>
            ) : null}
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p
              className={`mt-3 text-sm leading-6 ${
                dark ? "text-forest-100" : "text-mineral-700"
              }`}
            >
              {item.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}
