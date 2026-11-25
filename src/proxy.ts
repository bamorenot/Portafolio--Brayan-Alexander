import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales, type Locale } from "@/i18n/config";

/** Elige el idioma a partir de la cabecera Accept-Language del navegador. */
function preferredLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language") ?? "";
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag = "", q] = part.trim().split(";q=");
      return { lang: tag.slice(0, 2).toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  const match = ranked.find(({ lang }) => (locales as readonly string[]).includes(lang));
  return (match?.lang as Locale | undefined) ?? defaultLocale;
}

/** Redirige las rutas sin idioma (por ejemplo "/") a "/es/..." o "/en/...". */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));
  if (hasLocale) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Omite archivos internos de Next y cualquier archivo con extensión (imágenes, PDF, favicon...).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
