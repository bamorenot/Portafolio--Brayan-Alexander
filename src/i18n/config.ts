export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Texto (o cualquier valor) traducido a todos los idiomas del sitio. */
export type Localized<T = string> = Record<Locale, T>;
