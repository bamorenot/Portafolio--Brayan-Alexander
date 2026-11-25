import { Atom, Brain, Cloud, Cpu, Database, Rocket, type LucideIcon } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { skillGroups } from "@/data/skills";

const ICONS: Record<string, LucideIcon> = {
  physics: Atom,
  data: Database,
  ai: Brain,
  cloud: Cloud,
  quantum: Cpu,
  hardware: Rocket,
};

export function Skills({ locale }: { locale: Locale }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group) => {
        const Icon = ICONS[group.id] ?? Atom;
        return (
          <li key={group.id} className="glass p-6">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 text-cyan">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-semibold">{group.title[locale]}</h3>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
