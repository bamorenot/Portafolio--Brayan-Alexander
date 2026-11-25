import type { Localized } from "@/i18n/config";

/** Figura propia del proyecto (ruta dentro de public/proyectos/<slug>/). */
export interface ProjectFigure {
  src: string;
  alt: Localized;
  caption?: Localized;
}

/** Métrica por categoría, dibujada como barras horizontales (0 – max). */
export interface ProjectBars {
  caption: Localized;
  /** Nombre de la métrica que mide la barra (p. ej. "F1"). */
  metric: string;
  max: number;
  rows: { label: Localized; value: number; details: string }[];
}

export interface ConfusionMatrix {
  caption: Localized;
  labels: string[];
  /** values[real][predicción] */
  values: number[][];
  axes: Localized<{ actual: string; predicted: string }>;
}

/** Término con su definición (descriptores, modelos, etapas...). */
export interface ProjectTerm {
  term: string | Localized;
  text: Localized;
}

export interface ProjectSection {
  id: string;
  title: Localized;
  paragraphs?: Localized<string[]>;
  terms?: ProjectTerm[];
  figures?: ProjectFigure[];
  bars?: ProjectBars;
  confusionMatrix?: ConfusionMatrix;
}

export interface ProjectFact {
  label: Localized;
  value: string | Localized;
}

export interface Project {
  slug: string;
  title: Localized;
  category: Localized;
  summary: Localized;
  tags: string[];
  /** Ruta pública de la portada: imagen propia (/proyectos/...) o de banco (/stock/...). */
  cover: string;
  year?: string;
  recognition?: Localized<string[]>;
  facts?: ProjectFact[];
  sections?: ProjectSection[];
}
