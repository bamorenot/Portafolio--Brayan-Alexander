import type { Locale } from "@/i18n/config";
import type { ProjectBars } from "@/data/projects";

/**
 * Barras horizontales de una métrica por categoría (una sola serie: un solo tono, sin leyenda).
 * Cada fila lleva su valor como etiqueta directa y el detalle (precisión, recall...) en texto atenuado.
 */
export function MetricBars({ bars, locale }: { bars: ProjectBars; locale: Locale }) {
  return (
    <figure>
      <div className="relative">
        <ul className="relative space-y-4">
          {bars.rows.map((row) => {
            const pct = (row.value / bars.max) * 100;
            return (
              <li key={row.label.en} className="group" title={`${row.label[locale]} · ${bars.metric} ${row.value.toFixed(2)} · ${row.details}`}>
                <div className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-sm text-ink/80 sm:w-24">{row.label[locale]}</span>
                  <div className="relative h-2.5 flex-1 rounded-r bg-white/[0.04]">
                    <div
                      className="h-full rounded-r bg-cyan transition group-hover:brightness-125"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="w-10 shrink-0 text-right text-sm font-medium tabular-nums">{row.value.toFixed(2)}</span>
                </div>
                <p className="mt-1 pl-[5.75rem] text-xs font-light tabular-nums text-muted sm:pl-[6.75rem]">{row.details}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <figcaption className="mt-5 text-sm font-light leading-relaxed text-muted">{bars.caption[locale]}</figcaption>
    </figure>
  );
}
