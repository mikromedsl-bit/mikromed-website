"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/Badge";
import type { ScientificEvidenceArticle } from "@/data/scientificEvidence";

type EvidenceArticleListProps = {
  articles: ScientificEvidenceArticle[];
  emptyTitle: string;
  emptyDescription: string;
};

function uniqueSorted(values: string[]) {
  return Array.from(new Set(values.filter(Boolean))).sort((a, b) =>
    a.localeCompare(b, "it")
  );
}

export function EvidenceArticleList({
  articles,
  emptyTitle,
  emptyDescription
}: EvidenceArticleListProps) {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");
  const [component, setComponent] = useState("");
  const [studyType, setStudyType] = useState("");

  const years = useMemo(
    () => Array.from(new Set(articles.map((article) => article.year))).sort((a, b) => b - a),
    [articles]
  );
  const components = useMemo(
    () => uniqueSorted(articles.flatMap((article) => article.analyzedComponents)),
    [articles]
  );
  const studyTypes = useMemo(
    () => uniqueSorted(articles.map((article) => article.studyType)),
    [articles]
  );

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesQuery =
        !normalizedQuery ||
        [
          article.title,
          article.authors.join(" "),
          article.keywords.join(" "),
          article.summary
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      const matchesYear = !year || String(article.year) === year;
      const matchesComponent =
        !component || article.analyzedComponents.includes(component);
      const matchesStudyType = !studyType || article.studyType === studyType;

      return matchesQuery && matchesYear && matchesComponent && matchesStudyType;
    });
  }, [articles, component, query, studyType, year]);

  const hasArticles = articles.length > 0;

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-mineral-200 bg-white p-5">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <label className="grid gap-2 text-sm font-semibold text-forest-900">
            Ricerca
            <input
              className="min-h-11 rounded-lg border border-mineral-200 bg-white px-3 text-sm font-normal text-mineral-800 outline-none transition focus:border-forest-700 focus:ring-2 focus:ring-mineral-200 disabled:bg-mineral-50 disabled:text-mineral-500"
              disabled={!hasArticles}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Titolo, autore o keyword"
              type="search"
              value={query}
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-forest-900">
            Anno
            <select
              className="min-h-11 rounded-lg border border-mineral-200 bg-white px-3 text-sm font-normal text-mineral-800 outline-none transition focus:border-forest-700 focus:ring-2 focus:ring-mineral-200 disabled:bg-mineral-50 disabled:text-mineral-500"
              disabled={!hasArticles}
              onChange={(event) => setYear(event.target.value)}
              value={year}
            >
              <option value="">Tutti gli anni</option>
              {years.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-forest-900">
            Componente
            <select
              className="min-h-11 rounded-lg border border-mineral-200 bg-white px-3 text-sm font-normal text-mineral-800 outline-none transition focus:border-forest-700 focus:ring-2 focus:ring-mineral-200 disabled:bg-mineral-50 disabled:text-mineral-500"
              disabled={!hasArticles}
              onChange={(event) => setComponent(event.target.value)}
              value={component}
            >
              <option value="">Tutti i componenti</option>
              {components.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-forest-900">
            Tipologia
            <select
              className="min-h-11 rounded-lg border border-mineral-200 bg-white px-3 text-sm font-normal text-mineral-800 outline-none transition focus:border-forest-700 focus:ring-2 focus:ring-mineral-200 disabled:bg-mineral-50 disabled:text-mineral-500"
              disabled={!hasArticles}
              onChange={(event) => setStudyType(event.target.value)}
              value={studyType}
            >
              <option value="">Tutte le tipologie</option>
              {studyTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>
        {!hasArticles ? (
          <p className="mt-4 text-sm leading-6 text-mineral-600">
            I filtri saranno attivati quando saranno presenti pubblicazioni consultabili.
          </p>
        ) : null}
      </div>

      {filteredArticles.length > 0 ? (
        <div className="grid gap-5">
          {filteredArticles.map((article) => (
            <article className="premium-card rounded-lg p-6" key={article.id}>
              <div className="flex flex-wrap gap-2">
                <Badge tone="muted">{article.year}</Badge>
                <Badge tone="muted">{article.studyType}</Badge>
                {article.featured ? <Badge tone="success">In evidenza</Badge> : null}
              </div>
              <h2 className="mt-4 text-xl font-semibold text-forest-900">
                {article.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-mineral-700">
                {article.authors.join(", ")} - {article.journalOrSource}
              </p>
              <p className="mt-4 text-sm leading-6 text-mineral-700">
                {article.summary}
              </p>
              <dl className="mt-5 grid gap-4 text-sm leading-6 text-mineral-700 md:grid-cols-2">
                <div>
                  <dt className="font-semibold text-forest-900">Componenti principali</dt>
                  <dd>{article.analyzedComponents.join(", ")}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-forest-900">Livello di pertinenza</dt>
                  <dd>{article.pertinenceLevel}</dd>
                </div>
              </dl>
              <div className="mt-5 flex flex-wrap gap-3">
                {article.sourceUrl ? (
                  <a
                    className="mikromed-button-secondary inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold"
                    href={article.sourceUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Consulta la fonte
                  </a>
                ) : null}
                {article.doi ? (
                  <a
                    className="mikromed-button-secondary inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold"
                    href={`https://doi.org/${article.doi}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Apri il DOI
                  </a>
                ) : null}
                {article.pdfUrl && article.pdfPublicationAllowed ? (
                  <a
                    className="mikromed-button-secondary inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold"
                    href={article.pdfUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Visualizza il documento
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-mineral-200 bg-mineral-50 p-6">
          <h2 className="text-xl font-semibold text-forest-900">{emptyTitle}</h2>
          <p className="mt-3 text-sm leading-6 text-mineral-700">{emptyDescription}</p>
        </div>
      )}
    </div>
  );
}
