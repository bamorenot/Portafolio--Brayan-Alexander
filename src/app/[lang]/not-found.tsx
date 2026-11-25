import Link from "next/link";
import { getDictionary } from "@/i18n/dictionaries";
import { defaultLocale } from "@/i18n/config";

export default function NotFound() {
  const t = getDictionary(defaultLocale).notFound;
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-5 pt-16 text-center">
      <p className="text-gradient text-7xl font-bold">404</p>
      <h1 className="mt-4 text-2xl font-semibold">{t.title}</h1>
      <p className="mt-2 text-muted">{t.body}</p>
      <Link href={`/${defaultLocale}`} className="btn-primary mt-8">
        {t.home}
      </Link>
    </div>
  );
}
