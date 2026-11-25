import type { ReactNode } from "react";
import { GALAXIES, NebulaWatermark } from "./project/NebulaWatermark";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Posición de la sección: elige la galaxia de fondo y el lado en que aparece. */
  index: number;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, subtitle, index, children }: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className="relative isolate overflow-hidden">
      <NebulaWatermark index={index} images={GALAXIES} />
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <header className="mb-10 max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={headingId} className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {subtitle ? <p className="mt-3 font-light text-muted">{subtitle}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}
