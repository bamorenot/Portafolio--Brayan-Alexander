import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { profile } from "@/data/profile";

/** Botón que abre el CV en PDF (public/cv/) en una pestaña nueva. */
export function CvSection({ t }: { t: Dictionary["cv"] }) {
  return (
    <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3 text-base">
      {t.open}
      <ArrowUpRight className="size-5" aria-hidden="true" />
    </a>
  );
}
