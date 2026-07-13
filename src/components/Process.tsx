export function Process({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-5">
      {steps.map((step, index) => (
        <li
          className="rounded-lg border border-mineral-200 bg-white p-5 shadow-sm"
          key={step}
        >
          <span className="text-sm font-semibold text-copper-500">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 text-base font-semibold text-mineral-900">{step}</h3>
        </li>
      ))}
    </ol>
  );
}
