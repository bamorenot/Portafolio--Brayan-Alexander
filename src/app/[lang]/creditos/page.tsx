import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { allCredits, siteImage } from "@/lib/images";
import { routes } from "@/lib/format";

export async function generateMetadata({ params }: PageProps<"/[lang]/creditos">): Promise<Metadata> {
  const { lang } = await params;
  return isLocale(lang) ? { title: getDictionary(lang).credits.title } : {};
}

export default async function CreditsPage({ params }: PageProps<"/[lang]/creditos">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang).credits;

  return (
    <div className="mx-auto max-w-4xl px-5 pb-20 pt-32 sm:px-8">
      <Link href={routes.home(lang)} className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">
        <ArrowLeft className="size-4" aria-hidden="true" />
        {t.back}
      </Link>
      <h1 className="mt-6 text-3xl font-semibold">{t.title}</h1>
      <p className="mt-3 text-muted">{t.subtitle}</p>
      <ul className="mt-10 divide-y divide-white/5">
        {allCredits().map(([key, credit]) => (
          <li key={key} className="flex items-center gap-4 py-4">
            <Image
              src={siteImage(key).src}
              alt=""
              width={96}
              height={64}
              className="h-16 w-24 shrink-0 rounded-lg object-cover"
            />
            <div className="min-w-0 text-sm">
              <p className="truncate font-medium">{credit.title}</p>
              <p className="text-muted">
                {credit.author} · {credit.license} ·{" "}
                <a href={credit.source} target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">
                  {t.source}
                </a>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
