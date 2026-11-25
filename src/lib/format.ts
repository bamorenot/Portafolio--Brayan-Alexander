import type { Locale } from "@/i18n/config";

const BCP47: Record<Locale, string> = { es: "es-CO", en: "en-US" };

/** "2025" -> "2025"; "2025-10-24" -> "oct 2025" / "Oct 2025". */
export function formatDate(date: string, locale: Locale): string {
  if (/^\d{4}$/.test(date)) return date;
  const [year, month] = date.split("-").map(Number);
  return new Intl.DateTimeFormat(BCP47[locale], { month: "short", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(year ?? 1970, (month ?? 1) - 1, 1)),
  );
}

/** Rutas del sitio con el prefijo del idioma. */
export const routes = {
  home: (locale: Locale) => `/${locale}`,
  section: (locale: Locale, id: string) => `/${locale}#${id}`,
  project: (locale: Locale, slug: string) => `/${locale}/proyectos/${slug}`,
  credits: (locale: Locale) => `/${locale}/creditos`,
};
