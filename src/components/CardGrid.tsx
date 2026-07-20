import type { CardItem } from "@/data/types";

type CardGridProps = {
  items: CardItem[];
  columns?: "two" | "three" | "four" | "five";
  dark?: boolean;
};

export function CardGrid({ items, columns = "three", dark = false }: CardGridProps) {
  const grid = {
    two: "md:grid-cols-2",
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
            className={`rounded-lg p-6 ${
              dark
                ? "premium-card-dark text-white"
                : "premium-card text-mineral-900"
            }`}
            key={item.title}
          >
            {Icon ? (
              <div
                className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg ${
                  dark ? "premium-icon-dark text-mineral-100" : "premium-icon text-forest-900"
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
