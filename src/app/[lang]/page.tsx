import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { CurrentProjects } from "@/components/CurrentProjects";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { CvSection } from "@/components/CvSection";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { projects } from "@/data/projects";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <Hero locale={lang} t={t} />

      <Section id="projects" index={0} eyebrow={t.projects.eyebrow} title={t.projects.title} subtitle={t.projects.subtitle}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} locale={lang} cta={t.projects.viewDetails} />
          ))}
        </div>
      </Section>

      <Section id="current" index={1} eyebrow={t.current.eyebrow} title={t.current.title} subtitle={t.current.subtitle}>
        <CurrentProjects locale={lang} t={t.current} />
      </Section>

      <Section id="skills" index={2} eyebrow={t.skills.eyebrow} title={t.skills.title} subtitle={t.skills.subtitle}>
        <Skills locale={lang} />
      </Section>

      <Section
        id="achievements"
        index={3}
        eyebrow={t.achievements.eyebrow}
        title={t.achievements.title}
        subtitle={t.achievements.subtitle}
      >
        <Achievements locale={lang} t={t.achievements} />
      </Section>

      <Section id="cv" index={4} eyebrow={t.cv.eyebrow} title={t.cv.title} subtitle={t.cv.subtitle}>
        <CvSection t={t.cv} />
      </Section>
    </>
  );
}
