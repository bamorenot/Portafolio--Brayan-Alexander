import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { ProjectSection } from "@/data/projects";
import { ProjectFigure, isWideFigure } from "./ProjectFigure";
import { MetricBars } from "./MetricBars";
import { ConfusionMatrixChart } from "./ConfusionMatrixChart";
import { NebulaWatermark } from "./NebulaWatermark";

interface ChapterProps {
  id: string;
  index: number;
  title: string;
  children: ReactNode;
}

/** Banda de ancho completo con número de capítulo, título fijo a la izquierda y nebulosa de fondo. */
export function Chapter({ id, index, title, children }: ChapterProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="relative isolate scroll-mt-16 overflow-hidden border-t border-white/[0.06]">
      <NebulaWatermark index={index} />
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16 lg:py-28">
        <header className="lg:sticky lg:top-28 lg:self-start">
          <span className="text-gradient-accent block text-5xl font-extralight tabular-nums">{String(index + 1).padStart(2, "0")}</span>
          <h2 id={`${id}-title`} className="mt-3 text-2xl font-semibold leading-snug tracking-tight">
            {title}
          </h2>
        </header>
        <div className="min-w-0 space-y-12">{children}</div>
      </div>
    </section>
  );
}

export function ProjectSectionView({ section, index, locale }: { section: ProjectSection; index: number; locale: Locale }) {
  const figures = section.figures ?? [];
  const lone = figures.length === 1 && figures[0] && !isWideFigure(figures[0].src) ? figures[0] : null;

  return (
    <Chapter id={section.id} index={index} title={section.title[locale]}>
      {section.paragraphs ? (
        <div className="max-w-3xl space-y-5">
          {section.paragraphs[locale].map((paragraph) => (
            <p key={paragraph} className="text-[17px] font-light leading-8 text-ink/85">
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}

      {section.terms?.length ? (
        <dl className="grid gap-x-12 sm:grid-cols-2">
          {section.terms.map((item) => {
            const term = typeof item.term === "string" ? item.term : item.term[locale];
            return (
              <div key={term} className="border-t border-white/10 py-5">
                <dt className="font-medium text-ink">{term}</dt>
                <dd className="mt-1.5 text-[15px] font-light leading-7 text-muted">{item.text[locale]}</dd>
              </div>
            );
          })}
        </dl>
      ) : null}

      {section.bars || section.confusionMatrix ? (
        <div className="grid gap-14 xl:grid-cols-2 xl:items-start">
          {section.bars ? <MetricBars bars={section.bars} locale={locale} /> : null}
          {section.confusionMatrix ? <ConfusionMatrixChart matrix={section.confusionMatrix} locale={locale} /> : null}
        </div>
      ) : null}

      {lone ? (
        <div className="max-w-md">
          <ProjectFigure figure={lone} locale={locale} />
        </div>
      ) : figures.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {figures.map((figure) => (
            <ProjectFigure key={figure.src} figure={figure} locale={locale} wide={isWideFigure(figure.src)} />
          ))}
        </div>
      ) : null}
    </Chapter>
  );
}
