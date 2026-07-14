import type { PatentItem } from "@/data/types";

export function PatentTable({ patents }: { patents: PatentItem[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-mineral-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-[980px] divide-y divide-mineral-200 text-left text-sm">
          <thead className="bg-mineral-50 text-mineral-900">
            <tr>
              <th className="px-4 py-3 font-semibold">Titolo</th>
              <th className="px-4 py-3 font-semibold">Domanda</th>
              <th className="px-4 py-3 font-semibold">Stato</th>
              <th className="px-4 py-3 font-semibold">Date</th>
              <th className="px-4 py-3 font-semibold">Prodotti collegati</th>
              <th className="px-4 py-3 font-semibold">Link</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-mineral-200">
            {patents.map((patent) => (
              <tr key={patent.applicationNumber}>
                <td className="px-4 py-4 align-top">
                  <p className="font-semibold text-forest-900">{patent.title}</p>
                  <p className="mt-2 text-mineral-600">{patent.summary}</p>
                  <p className="mt-2 text-xs text-mineral-500">
                    Titolare: {patent.holder}
                  </p>
                </td>
                <td className="px-4 py-4 align-top">
                  <p className="font-semibold text-mineral-900">{patent.applicationNumber}</p>
                  <p className="mt-2 text-mineral-600">{patent.publicationOrGrant}</p>
                </td>
                <td className="px-4 py-4 align-top">
                  <span className="rounded-full bg-mineral-50 px-3 py-1 text-xs font-semibold text-forest-900">
                    {patent.status}
                  </span>
                  <p className="mt-2 text-mineral-600">{patent.territories}</p>
                </td>
                <td className="px-4 py-4 align-top text-mineral-700">
                  <p>Deposito: {patent.filingDate}</p>
                  <p>Concessione: {patent.grantDate}</p>
                </td>
                <td className="px-4 py-4 align-top text-mineral-700">
                  {patent.relatedProducts}
                </td>
                <td className="px-4 py-4 align-top">
                  {patent.publicLink ? (
                    <a
                      className="font-semibold text-forest-900 underline-offset-4 hover:underline"
                      href={patent.publicLink}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Scheda pubblica
                    </a>
                  ) : (
                    <span className="text-mineral-500">non trovato</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
