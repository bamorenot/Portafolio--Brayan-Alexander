import Link from "next/link";
import { Mail } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { profile } from "@/data/profile";
import { routes } from "@/lib/format";
import { LinkedInIcon } from "./icons";

interface FooterProps {
  locale: Locale;
  t: Dictionary;
}

export function Footer({ locale, t }: FooterProps) {
  return (
    <footer id="contact" className="border-t border-white/5 bg-space-900/60">
      <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8">
        <h2 className="text-3xl font-semibold">{t.contact.title}</h2>
        <p className="mx-auto mt-3 max-w-lg text-muted">{t.contact.subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            <Mail className="size-4" aria-hidden="true" />
            {t.contact.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <LinkedInIcon className="size-4" />
            LinkedIn
          </a>
        </div>
        <p className="mt-4 text-sm text-muted">{profile.email}</p>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-white/5 px-5 py-6 text-xs text-muted sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. {t.footer.rights}
        </p>
        <Link href={routes.credits(locale)} className="hover:text-ink">
          {t.footer.credits}
        </Link>
      </div>
    </footer>
  );
}
