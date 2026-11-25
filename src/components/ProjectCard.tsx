import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Project } from "@/data/projects";
import { resolveImage } from "@/lib/images";
import { routes } from "@/lib/format";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  cta: string;
}

export function ProjectCard({ project, locale, cta }: ProjectCardProps) {
  const cover = resolveImage(project.cover);
  return (
    <article className="glass group relative flex flex-col overflow-hidden transition hover:-translate-y-1 hover:border-cyan/40">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={cover.src}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-800 via-space-800/20 to-transparent" aria-hidden="true" />
        <span className="chip absolute left-4 top-4 bg-space-950/70">{project.category[locale]}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold leading-snug">
          <Link href={routes.project(locale, project.slug)} className="after:absolute after:inset-0">
            {project.title[locale]}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted">{project.summary[locale]}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tags">
          {project.tags.slice(0, 3).map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-cyan">
          {cta}
          <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}
