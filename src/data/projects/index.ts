import type { Project } from "./types";
import { modeloIsingVo2 } from "./modelo-ising-vo2";
import { dftVo2 } from "./dft-vo2";
import { emocionesVoz } from "./emociones-voz";
import { cansatTulcanSat } from "./cansat-tulcan-sat";

export type * from "./types";

/**
 * Proyectos destacados, en el orden en que aparecen.
 * Los que tienen contenido completo viven en su propio archivo; el resto queda pendiente
 * de recibir su información e imágenes (portada provisional de /stock/).
 */
export const projects: Project[] = [
  modeloIsingVo2,
  dftVo2,
  emocionesVoz,
  {
    slug: "web-laboratorio-bajas-temperaturas",
    title: {
      es: "Sitio web del Laboratorio de Bajas Temperaturas",
      en: "Low Temperature Laboratory website",
    },
    category: { es: "Desarrollo web", en: "Web development" },
    summary: {
      es: "Página web del Laboratorio de Bajas Temperaturas de la Universidad del Cauca.",
      en: "Website for the Low Temperature Laboratory at Universidad del Cauca.",
    },
    tags: ["Desarrollo web", "Universidad del Cauca"],
    cover: "/stock/webb-cryo-chamber.webp",
  },
  cansatTulcanSat,
  {
    slug: "dron-ala-zagi",
    title: {
      es: "Dron tipo ala volante Zagi",
      en: "Zagi flying-wing drone",
    },
    category: { es: "Aeronáutica", en: "Aeronautics" },
    summary: {
      es: "Diseño y construcción de un dron de ala volante tipo Zagi para competencia.",
      en: "Design and build of a Zagi-type flying-wing drone for competition.",
    },
    recognition: {
      es: ["Participación con el equipo Herm · 2.ª Zagi AESS Race, Bogotá (2022)"],
      en: ["Competed with team Herm · 2nd Zagi AESS Race, Bogotá (2022)"],
    },
    tags: ["UAV", "Aerodinámica", "Control de vuelo"],
    cover: "/proyectos/dron-ala-zagi/ala-zagi-equipo-herm.png",
    year: "2022",
  },
  {
    slug: "agente-rover-sarsa",
    title: {
      es: "Agente para un rover con el algoritmo SARSA",
      en: "Rover agent with the SARSA algorithm",
    },
    category: { es: "Aprendizaje por refuerzo", en: "Reinforcement learning" },
    summary: {
      es: "Agente de aprendizaje por refuerzo que aprende a navegar un rover usando SARSA.",
      en: "Reinforcement learning agent that learns to drive a rover using SARSA.",
    },
    tags: ["SARSA", "Aprendizaje por refuerzo", "Python"],
    cover: "/proyectos/agente-rover-sarsa/simulacion-navegacion-gps.png",
  },
  {
    slug: "transferencia-energia-inalambrica",
    title: {
      es: "Transferencia de energía inalámbrica por inducción",
      en: "Wireless power transfer by induction",
    },
    category: { es: "Electromagnetismo", en: "Electromagnetism" },
    summary: {
      es: "Sistema de transferencia de energía sin cables basado en inducción electromagnética.",
      en: "Wireless energy transfer system based on electromagnetic induction.",
    },
    tags: ["Inducción electromagnética", "Electrónica", "Bobinas acopladas"],
    cover: "/proyectos/transferencia-energia-inalambrica/diseno-cad-bobinas.png",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
