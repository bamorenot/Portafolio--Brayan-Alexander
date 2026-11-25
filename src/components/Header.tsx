"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { profile } from "@/data/profile";
import { routes } from "@/lib/format";

interface HeaderProps {
  locale: Locale;
  nav: Dictionary["nav"];
}

const SECTIONS = ["projects", "current", "skills", "achievements", "cv", "contact"] as const;

export function Header({ locale, nav }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const otherLocale: Locale = locale === "es" ? "en" : "es";
  const switchHref = pathname.replace(/^\/(es|en)(?=\/|$)/, `/${otherLocale}`);

  const links = SECTIONS.map((id) => ({ id, href: routes.section(locale, id), label: nav[id] }));

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-space-950/70 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Principal">
        <Link href={routes.home(locale)} className="flex items-center gap-2 font-semibold" onClick={() => setOpen(false)}>
          <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-cyan to-violet text-xs font-bold text-space-950">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.shortName}</span>
        </Link>

        <ul className="hidden items-center gap-6 text-sm text-muted md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.href} className="transition hover:text-ink">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href={switchHref}
            hrefLang={otherLocale}
            aria-label={nav.switchLanguageLabel}
            className="btn-ghost px-3 py-1.5 text-xs"
          >
            <Globe className="size-4" aria-hidden="true" />
            {nav.switchLanguage}
          </Link>
          <button
            type="button"
            className="btn-ghost px-2.5 py-1.5 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? nav.close : nav.menu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open ? (
        <ul id="mobile-menu" className="border-t border-white/5 px-5 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.href} className="block py-2 text-muted hover:text-ink" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
