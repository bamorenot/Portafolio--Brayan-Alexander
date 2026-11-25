import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { ProjectFigure as Figure } from "@/data/projects";
import { resolveImage } from "@/lib/images";

interface ProjectFigureProps {
  figure: Figure;
  locale: Locale;
  /** Ocupa todo el ancho de la cuadrícula (figuras panorámicas). */
  wide?: boolean;
}

/** Figura de resultados enmarcada (las gráficas son blancas); clic para verla a tamaño completo. */
export function ProjectFigure({ figure, locale, wide }: ProjectFigureProps) {
  const image = resolveImage(figure.src);
  return (
    <figure className={wide ? "sm:col-span-2" : undefined}>
      <a
        href={image.src}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/50 ring-1 ring-white/15 transition duration-300 hover:-translate-y-0.5 hover:ring-cyan/50"
      >
        <Image
          src={image.src}
          alt={figure.alt[locale]}
          width={image.width}
          height={image.height}
          sizes={wide ? "(min-width: 1024px) 56rem, 100vw" : "(min-width: 1024px) 28rem, (min-width: 640px) 50vw, 100vw"}
          unoptimized={image.src.endsWith(".gif")}
          className="h-auto w-full"
        />
      </a>
      {figure.caption ? (
        <figcaption className="mt-3 border-l border-cyan/40 pl-3 text-sm font-light leading-relaxed text-muted">
          {figure.caption[locale]}
        </figcaption>
      ) : null}
    </figure>
  );
}

/** Una figura es panorámica si es bastante más ancha que alta. */
export function isWideFigure(src: string): boolean {
  const { width, height } = resolveImage(src);
  return width / height > 1.6;
}
