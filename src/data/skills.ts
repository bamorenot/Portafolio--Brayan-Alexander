import type { Localized } from "@/i18n/config";

export interface SkillGroup {
  id: string;
  title: Localized;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "physics",
    title: { es: "Física computacional", en: "Computational physics" },
    items: ["Modelo de Ising", "Monte Carlo", "DFT", "Física del estado sólido", "MATLAB", "Simulink"],
  },
  {
    id: "data",
    title: { es: "Ingeniería de datos", en: "Data engineering" },
    items: ["ETL / ELT", "Data Lake (Bronze · Silver · Gold)", "Data Warehouse", "Data Quality", "Orquestación", "Observabilidad"],
  },
  {
    id: "ai",
    title: { es: "Inteligencia artificial", en: "Artificial intelligence" },
    items: ["Machine Learning", "Aprendizaje por refuerzo", "LLMs", "RAG · Qdrant", "LangGraph", "MCP", "Graph RAG", "LLMOps"],
  },
  {
    id: "cloud",
    title: { es: "Nube y DevOps", en: "Cloud & DevOps" },
    items: ["Microsoft Azure", "Docker", "CI/CD", "GitHub Actions"],
  },
  {
    id: "quantum",
    title: { es: "Computación cuántica", en: "Quantum computing" },
    items: ["Qiskit", "Simulación de sistemas cuánticos"],
  },
  {
    id: "hardware",
    title: { es: "Hardware y aeroespacial", en: "Hardware & aerospace" },
    items: ["CubeSat / CanSat", "Sistemas embebidos", "UAV de ala volante", "Inducción electromagnética"],
  },
];
