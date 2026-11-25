import Image from "next/image";
import { Award, FileText, ShieldCheck, Trophy } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { courseGroups, highlights, type Certificate } from "@/data/certificates";
import { formatDate } from "@/lib/format";

interface AchievementsProps {
  locale: Locale;
  t: Dictionary["achievements"];
}

function HighlightCard({ item, locale, cta }: { item: Certificate; locale: Locale; cta: string }) {
  return (
    <article className="glass group relative flex flex-col overflow-hidden transition hover:border-cyan/40">
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        <Image
          src={item.thumb}
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        {item.result ? (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber">
            <Trophy className="size-3.5" aria-hidden="true" />
            {item.result[locale]}
          </span>
        ) : null}
        <h4 className="mt-1.5 text-sm font-semibold leading-snug">
          <a href={item.file} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
            {item.title[locale]}
          </a>
        </h4>
        <p className="mt-1 flex-1 text-xs text-muted">
          {item.issuer} · {formatDate(item.date, locale)}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-cyan">
          <FileText className="size-3.5" aria-hidden="true" />
          {cta}
        </span>
      </div>
    </article>
  );
}

export function Achievements({ locale, t }: AchievementsProps) {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold">
          <Trophy className="size-5 text-amber" aria-hidden="true" />
          {t.highlights}
        </h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <HighlightCard key={item.id} item={item} locale={locale} cta={t.viewPdf} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold">
          <Award className="size-5 text-cyan" aria-hidden="true" />
          {t.courses}
        </h3>
        <div className="grid gap-5 lg:grid-cols-2">
          {courseGroups.map((group) => (
            <section key={group.issuer} className="glass p-5" aria-label={group.issuer}>
              <h4 className="text-sm font-semibold text-violet">{group.issuer}</h4>
              <ul className="mt-3 divide-y divide-white/5">
                {group.items.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-4 py-2.5 text-sm transition hover:text-cyan"
                    >
                      <span>{item.title[locale]}</span>
                      <span className="shrink-0 text-xs text-muted">{formatDate(item.date, locale)}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <p className="flex items-center gap-2 text-xs text-muted">
        <ShieldCheck className="size-4 text-cyan" aria-hidden="true" />
        {t.privacyNote}
      </p>
    </div>
  );
}
