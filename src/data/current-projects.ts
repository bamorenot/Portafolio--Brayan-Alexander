import type { Localized } from "@/i18n/config";

export interface StackItem {
  name: Localized;
  detail: Localized;
}

export interface CurrentProject {
  id: string;
  title: Localized;
  summary: Localized;
  /** Ruta pública de la portada: propia (/proyectos-actuales/...) o de banco (/stock/...). */
  cover: string;
  stack: StackItem[];
}

/** Stack de ingeniería de datos compartido por las tres plataformas de datos. */
const dataStack: StackItem[] = [
  {
    name: { es: "ETL y ELT", en: "ETL & ELT" },
    detail: { es: "Ingesta y transformación de datos", en: "Data ingestion and transformation" },
  },
  {
    name: { es: "Data Lake", en: "Data Lake" },
    detail: { es: "Arquitectura Bronze, Silver y Gold", en: "Bronze, Silver and Gold architecture" },
  },
  {
    name: { es: "Data Warehouse", en: "Data Warehouse" },
    detail: {
      es: "Modelo dimensional con tablas de hechos y dimensiones",
      en: "Dimensional model with fact and dimension tables",
    },
  },
  {
    name: { es: "Data Quality", en: "Data Quality" },
    detail: {
      es: "Validación de registros, valores nulos y duplicados",
      en: "Record validation, null values and duplicates",
    },
  },
  {
    name: { es: "Orquestación", en: "Orchestration" },
    detail: { es: "Ejecución automática de pipelines", en: "Automated pipeline execution" },
  },
  {
    name: { es: "CI/CD", en: "CI/CD" },
    detail: {
      es: "Pruebas automáticas y despliegues con GitHub Actions",
      en: "Automated tests and deployments with GitHub Actions",
    },
  },
  {
    name: { es: "Machine Learning", en: "Machine Learning" },
    detail: { es: "Predicción de demanda y ventas", en: "Demand and sales forecasting" },
  },
  {
    name: { es: "Observabilidad", en: "Observability" },
    detail: {
      es: "Logs, errores y monitoreo de ejecuciones",
      en: "Logs, errors and run monitoring",
    },
  },
];

export const currentProjects: CurrentProject[] = [
  {
    id: "ecommerce",
    title: { es: "Ecommer", en: "Ecommer" },
    summary: {
      es: "Plataforma de comercio electrónico.",
      en: "Ecommer platform.",
    },
    cover: "/proyectos-actuales/ecommerce/portada-simetria.png",
    stack: dataStack,
  },
  {
    id: "data-intelligence",
    title: {
      es: "Plataforma de inteligencia de datos para comercio electrónico",
      en: "Data intelligence platform for e-commerce",
    },
    summary: {
      es: "Pipelines, almacén de datos y modelos predictivos para decisiones de negocio.",
      en: "Pipelines, data warehouse and predictive models for business decisions.",
    },
    cover: "/stock/cern-computer-center.webp",
    stack: dataStack,
  },
  {
    id: "quantum-data-lab",
    title: { es: "Quantum Data Lab", en: "Quantum Data Lab" },
    summary: {
      es: "Plataforma de simulación y análisis de sistemas cuánticos.",
      en: "Platform for simulating and analyzing quantum systems.",
    },
    cover: "/stock/ibm-quantum.webp",
    stack: dataStack,
  },
  {
    id: "enterprise-ai",
    title: {
      es: "Enterprise AI Intelligence Platform",
      en: "Enterprise AI Intelligence Platform",
    },
    summary: {
      es: "Plataforma de IA empresarial construida en ocho etapas, del modelo de lenguaje a producción.",
      en: "Enterprise AI platform built in eight stages, from the language model to production.",
    },
    cover: "/stock/cern-cms.webp",
    stack: [
      {
        name: { es: "1 · LLM Foundation", en: "1 · LLM Foundation" },
        detail: {
          es: "Integración de modelos, prompts y respuestas estructuradas",
          en: "Model integration, prompts and structured outputs",
        },
      },
      {
        name: { es: "2 · Advanced RAG", en: "2 · Advanced RAG" },
        detail: {
          es: "Ingesta, embeddings, Qdrant, búsqueda híbrida y reranking",
          en: "Ingestion, embeddings, Qdrant, hybrid search and reranking",
        },
      },
      {
        name: { es: "3 · Agent Engineering", en: "3 · Agent Engineering" },
        detail: { es: "Agentes, LangGraph, herramientas y MCP", en: "Agents, LangGraph, tools and MCP" },
      },
      {
        name: { es: "4 · Memory", en: "4 · Memory" },
        detail: { es: "Memoria conversacional y persistente", en: "Conversational and persistent memory" },
      },
      {
        name: { es: "5 · Knowledge Graph", en: "5 · Knowledge Graph" },
        detail: { es: "Graph RAG y relaciones entre entidades", en: "Graph RAG and entity relationships" },
      },
      {
        name: { es: "6 · LLMOps", en: "6 · LLMOps" },
        detail: {
          es: "Evaluación, tracing, observabilidad y optimización de costos",
          en: "Evaluation, tracing, observability and cost optimization",
        },
      },
      {
        name: { es: "7 · Security", en: "7 · Security" },
        detail: {
          es: "Autenticación, permisos, guardrails y protección de datos",
          en: "Authentication, permissions, guardrails and data protection",
        },
      },
      {
        name: { es: "8 · Production", en: "8 · Production" },
        detail: { es: "Docker, CI/CD, pruebas y despliegue", en: "Docker, CI/CD, testing and deployment" },
      },
    ],
  },
];
