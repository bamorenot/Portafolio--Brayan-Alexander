import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, GraduationCap, Mail, MapPin } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { currentProjects } from "@/data/current-projects";
import { certificateCount } from "@/data/certificates";
import { siteImage } from "@/lib/images";
import { routes } from "@/lib/format";
import { LinkedInIcon } from "./icons";
import { ProfilePhoto } from "./ProfilePhoto";

interface HeroProps {
  locale: Locale;
  t: Dictionary;
}

export function Hero({ locale, t }: HeroProps) {
  const background = siteImage("hero-cosmic-cliffs");
  const stats = [
    { value: projects.length, label: t.stats.projects },
    { value: currentProjects.length, label: t.stats.current },
    { value: certificateCount, label: t.stats.certificates },
    { value: locale === "es" ? "8.º" : "8th", label: t.stats.cansat },
  ];

  return (
    <section className="relative isolate overflow-hidden pt-16">
      <Image
        src={background.src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-top opacity-45"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-space-950/30 via-space-950/70 to-space-950" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1.4fr_1fr] md:py-28">
        <div>
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="text-gradient">{profile.name.split(" ").slice(2).join(" ")}</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-ink/90 sm:text-xl">{t.hero.role}</p>
          <p className="mt-4 max-w-xl text-muted">{t.hero.intro}</p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            <li className="flex items-center gap-1.5">
              <GraduationCap className="size-4 text-cyan" aria-hidden="true" />
              {profile.university}
            </li>
            <li className="flex items-center gap-1.5">
              <MapPin className="size-4 text-cyan" aria-hidden="true" />
              {profile.location}
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={routes.section(locale, "projects")} className="btn-primary">
              {t.hero.viewProjects}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a href={profile.cv} download className="btn-ghost">
              <Download className="size-4" aria-hidden="true" />
              {t.hero.downloadCv}
            </a>
            <a href={`mailto:${profile.email}`} className="btn-ghost px-3" aria-label={profile.email}>
              <Mail className="size-4" aria-hidden="true" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost px-3" aria-label="LinkedIn">
              <LinkedInIcon className="size-4" />
            </a>
          </div>
        </div>

        <ProfilePhoto />
      </div>

      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 pb-16 sm:px-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="glass p-5">
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="text-gradient text-3xl font-bold">{stat.value}</span>
              <span className="mt-1 block text-xs text-muted">{stat.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
