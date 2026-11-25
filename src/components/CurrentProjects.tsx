import Image from "next/image";
import { Lock, LockKeyhole } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { currentProjects } from "@/data/current-projects";
import { resolveImage } from "@/lib/images";

interface CurrentProjectsProps {
  locale: Locale;
  t: Dictionary["current"];
}

/** Proyectos privados: solo se muestran nombre, resumen y tecnologías, con candado. */
export function CurrentProjects({ locale, t }: CurrentProjectsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {currentProjects.map((project) => {
        const cover = resolveImage(project.cover);
        // Las portadas propias se ven nítidas; las de banco, atenuadas.
        const own = !cover.credit;
        return (
          <article key={project.id} className="glass overflow-hidden">
            <div className={`relative overflow-hidden ${own ? "h-44" : "h-36"}`}>
              <Image src={cover.src} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className={own ? "object-cover object-left" : "object-cover opacity-60 blur-[1px]"} />
              <div className={`absolute inset-0 bg-gradient-to-t ${own ? "from-space-800/90 via-transparent to-transparent" : "from-space-800 to-space-800/10"}`} aria-hidden="true" />
              <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-amber/40 bg-space-950/80 px-3 py-1 text-xs font-medium text-amber">
                <Lock className="size-3.5" aria-hidden="true" />
                {t.privateBadge}
              </span>
            </div>
            <div className="p-6 pt-2">
              <h3 className="text-lg font-semibold">{project.title[locale]}</h3>
              <p className="mt-1 text-sm text-muted">{project.summary[locale]}</p>

              <p className="mt-4 flex items-start gap-2 rounded-lg border border-amber/20 bg-amber/5 p-3 text-xs text-amber/90">
                <LockKeyhole className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {t.privateMessage}
              </p>

              <h4 className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted">{t.stack}</h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {project.stack.map((item) => (
                  <li key={item.name.en} className="flex gap-2 rounded-lg border border-white/5 bg-white/[0.03] p-2.5">
                    <Lock className="mt-0.5 size-3.5 shrink-0 text-amber/80" aria-hidden="true" />
                    <span>
                      <span className="block text-sm font-medium">{item.name[locale]}</span>
                      <span className="block text-xs text-muted">{item.detail[locale]}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
}
