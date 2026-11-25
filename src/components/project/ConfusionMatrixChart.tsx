import type { Locale } from "@/i18n/config";
import type { ConfusionMatrix } from "@/data/projects";

/**
 * Matriz de confusión como mapa de calor secuencial de un solo tono. La intensidad es la
 * fracción de la fila (recall por clase), así las clases con pocas muestras se leen igual.
 */
export function ConfusionMatrixChart({ matrix, locale }: { matrix: ConfusionMatrix; locale: Locale }) {
  const axes = matrix.axes[locale];
  return (
    <figure>
      <div className="overflow-x-auto">
        <table className="mx-auto border-separate border-spacing-[3px] text-center text-xs tabular-nums sm:text-sm">
          <thead>
            <tr>
              <th scope="col" />
              <th scope="colgroup" colSpan={matrix.labels.length} className="pb-2 text-xs font-light text-muted">
                {axes.predicted}
              </th>
            </tr>
            <tr>
              <th scope="col" className="pr-3 text-right text-xs font-light text-muted">
                {axes.actual}
              </th>
              {matrix.labels.map((label) => (
                <th key={label} scope="col" className="w-10 pb-1 font-light text-muted sm:w-12">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrix.values.map((row, i) => {
              const total = row.reduce((sum, value) => sum + value, 0) || 1;
              return (
                <tr key={matrix.labels[i]}>
                  <th scope="row" className="pr-3 text-right font-light text-muted">
                    {matrix.labels[i]}
                  </th>
                  {row.map((value, j) => {
                    const share = value / total;
                    return (
                      <td
                        key={j}
                        title={`${axes.actual} ${matrix.labels[i]} → ${axes.predicted} ${matrix.labels[j]}: ${value} (${Math.round(share * 100)} %)`}
                        className={`h-10 rounded-[4px] transition hover:outline hover:outline-1 hover:outline-white/60 sm:h-12 ${i === j ? "font-semibold" : "font-light"} ${share > 0.4 ? "text-space-950" : "text-ink/80"}`}
                        style={{ backgroundColor: `rgb(56 217 245 / ${(0.04 + share * 0.96).toFixed(3)})` }}
                      >
                        {value}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <figcaption className="mt-5 text-sm font-light leading-relaxed text-muted">{matrix.caption[locale]}</figcaption>
    </figure>
  );
}
