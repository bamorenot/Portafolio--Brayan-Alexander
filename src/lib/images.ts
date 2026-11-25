import credits from "@/data/image-credits.json";
import manifest from "@/data/image-manifest.json";

export type ImageKey = keyof typeof credits;

export type ImageCredit = (typeof credits)[ImageKey];

export interface SiteImage {
  src: string;
  width: number;
  height: number;
  credit?: ImageCredit;
}

const STOCK_DIR = "/stock/";

/** Imagen de banco (NASA, CERN...) descargada por scripts/fetch_images.py, con su crédito. */
export function siteImage(key: ImageKey): SiteImage {
  const credit = credits[key];
  return { src: `${STOCK_DIR}${key}.webp`, width: credit.width, height: credit.height, credit };
}

/**
 * Resuelve cualquier imagen del sitio a partir de su ruta pública:
 * las de /stock/ llevan crédito; las propias (/proyectos/, /perfil/) toman sus
 * dimensiones de src/data/image-manifest.json (scripts/project_images.py).
 */
export function resolveImage(src: string): SiteImage {
  if (src.startsWith(STOCK_DIR)) {
    const key = src.slice(STOCK_DIR.length).replace(/\.webp$/, "");
    if (key in credits) return siteImage(key as ImageKey);
  }
  const size = (manifest as Record<string, { width: number; height: number }>)[src];
  if (!size) throw new Error(`Imagen sin dimensiones en image-manifest.json: ${src} (ejecuta bun run images:projects)`);
  return { src, ...size };
}

export function allCredits(): [ImageKey, ImageCredit][] {
  return Object.entries(credits) as [ImageKey, ImageCredit][];
}
