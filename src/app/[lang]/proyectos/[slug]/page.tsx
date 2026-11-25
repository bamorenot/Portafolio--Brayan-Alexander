import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Trophy } from "lucide-react";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getProject, projects } from "@/data/projects";
import { resolveImage } from "@/lib/images";
import { routes } from "@/lib/format";
import { Chapter, ProjectSectionView } from "@/components/project/ProjectSectionView";
import { NebulaWatermark } from "@/components/project/NebulaWatermark";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => projects.map((project) => ({ lang, slug: project.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/proyectos/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!isLocale(lang) || !project) return {};
  return {
    title: project.title[lang],
    description: project.summary[lang],
    alternates: { languages: { es: `/es/proyectos/${slug}`, en: `/en/proyectos/${slug}` } },
    openGraph: { images: [project.cover] },
  };
}

export default async function ProjectPage({ params }: PageProps<"/[lang]/proyectos/[slug]">) {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!isLocale(lang) || !project) notFound();

  const t = getDictionary(lang).project;
  const cover = resolveImage(project.cover);
  const sections = project.sections ?? [];
  const offset = project.recognition ? 1 : 0;
  const index = projects.indexOf(project);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <header className="relative isolate overflow-hidden pt-16">
        {/* Las portadas de banco van de fondo; las propias se ven dentro del contenido. */}
        {cover.credit ? (
          <>
            <Image src={cover.src} alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-50" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-space-950/40 via-space-950/75 to-space-950" aria-hidden="true" />
          </>
        ) : (
          <NebulaWatermark index={4} />
        )}
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 md:pb-20 md:pt-20">
          <Link href={routes.section(lang, "projects")} className="inline-flex items-center gap-1.5 text-sm font-light text-muted hover:text-ink">
            <ArrowLeft className="size-4" aria-hidden="true" />
            {t.back}
          </Link>
          <p className="mt-10 text-sm font-light text-accent">
            {project.category[lang]}
            {project.year ? ` · ${project.year}` : ""}
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{project.title[lang]}</h1>
          <p className="mt-6 max-w-3xl text-lg font-light leading-8 text-ink/80">{project.summary[lang]}</p>
          <p className="mt-8 max-w-3xl text-sm font-light leading-7 text-muted">
            <span className="sr-only">{t.tech}: </span>
            {project.tags.join("  ·  ")}
          </p>
        </div>

        {project.facts?.length ? (
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 border-t border-white/[0.06] px-5 py-10 sm:px-8 md:grid-cols-3">
            {project.facts.map((fact) => (
              <div key={fact.label.en} className="pr-6">
                <dd className="text-xl font-light leading-snug text-ink sm:text-2xl">
                  {typeof fact.value === "string" ? fact.value : fact.value[lang]}
                </dd>
                <dt className="mt-1.5 text-sm font-light text-muted">{fact.label[lang]}</dt>
              </div>
            ))}
          </dl>
        ) : null}
      </header>

      {project.recognition ? (
        <Chapter id="reconocimientos" index={0} title={t.recognition}>
          <ul className="space-y-5">
            {project.recognition[lang].map((item) => (
              <li key={item} className="flex items-start gap-4 text-[17px] font-light leading-8">
                <Trophy className="mt-1.5 size-5 shrink-0 text-amber" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Chapter>
      ) : null}

      {sections.map((section, i) => (
        <ProjectSectionView key={section.id} section={section} index={i + offset} locale={lang} />
      ))}

      {!sections.length && !cover.credit ? (
        // Proyecto que por ahora solo tiene su portada propia: se muestra grande en el cuerpo.
        <div className="mx-auto max-w-6xl border-t border-white/[0.06] px-5 py-16 sm:px-8">
          <a
            href={cover.src}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto block w-fit overflow-hidden rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/15 transition hover:ring-cyan/50"
          >
            <Image
              src={cover.src}
              alt={project.title[lang]}
              width={cover.width}
              height={cover.height}
              sizes="(min-width: 1024px) 64rem, 100vw"
              className="h-auto max-h-[75vh] w-auto max-w-full"
            />
          </a>
        </div>
      ) : !sections.length ? (
        <p className="mx-auto max-w-6xl border-t border-white/[0.06] px-5 py-16 text-[17px] font-light text-muted sm:px-8">{t.pending}</p>
      ) : null}

      {cover.credit ? (
        <p className="mx-auto max-w-6xl px-5 pb-6 text-xs font-light text-muted sm:px-8">
          {t.coverCredit}:{" "}
          <a href={cover.credit.source} target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">
            {cover.credit.author}
          </a>{" "}
          ({cover.credit.license})
        </p>
      ) : null}

      {previous && next ? (
        <nav className="mx-auto flex max-w-6xl justify-between gap-4 border-t border-white/[0.06] px-5 py-10 text-sm sm:px-8" aria-label={t.navLabel}>
          <Link href={routes.project(lang, previous.slug)} className="flex max-w-[45%] items-center gap-3 font-light text-muted hover:text-ink">
            <ArrowLeft className="size-4 shrink-0" aria-hidden="true" />
            <span>
              <span className="block text-xs">{t.previous}</span>
              {previous.title[lang]}
            </span>
          </Link>
          <Link href={routes.project(lang, next.slug)} className="flex max-w-[45%] items-center gap-3 text-right font-light text-muted hover:text-ink">
            <span>
              <span className="block text-xs">{t.next}</span>
              {next.title[lang]}
            </span>
            <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
          </Link>
        </nav>
      ) : null}
    </article>
  );
}
