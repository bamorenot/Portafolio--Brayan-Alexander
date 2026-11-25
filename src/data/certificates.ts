import type { Localized } from "@/i18n/config";

export interface Certificate {
  id: string;
  title: Localized;
  issuer: string;
  /** "yyyy" o "yyyy-mm-dd". */
  date: string;
  /** Archivo en public/certificados/ (copia con la cédula tapada, ver scripts/redact_certificates.py). */
  file: string;
  thumb: string;
  result?: Localized;
}

const cert = (file: string) => ({
  file: `/certificados/${file}`,
  thumb: `/certificados/thumbs/${file.replace(/\.(pdf|png)$/, ".webp")}`,
});

/** Logros destacados: competencias, congresos y eventos. */
export const highlights: Certificate[] = [
  {
    id: "cansat-2025",
    title: { es: "Mundial CanSat 2025 · equipo TULCAN-SAT", en: "2025 CanSat World Cup · team TULCAN-SAT" },
    issuer: "UNAM · Programa Espacial Universitario",
    date: "2025",
    result: { es: "8.º lugar", en: "8th place" },
    ...cert("mundial-cansat-2025.pdf"),
  },
  {
    id: "cansat-2024",
    title: { es: "Mundial CanSat 2024 · equipo TUL-CAN SAT", en: "2024 CanSat World Cup · team TUL-CAN SAT" },
    issuer: "UNAM · Programa Espacial Universitario",
    date: "2024",
    result: { es: "Finalista", en: "Finalist" },
    ...cert("mundial-cansat-2024.pdf"),
  },
  {
    id: "qiskit-2026",
    title: { es: "Qiskit Fall Fest 2026", en: "Qiskit Fall Fest 2026" },
    issuer: "IBM Quantum",
    date: "2026-11-09",
    result: { es: "Participación", en: "Participant" },
    ...cert("qiskit-fall-fest-2026.pdf"),
  },
  {
    id: "ciencia-al-parque-2025",
    title: {
      es: "Ciencia al Parque 2025 · póster TULCAN-SAT",
      en: "Ciencia al Parque 2025 · TULCAN-SAT poster",
    },
    issuer: "Mesa de Investigaciones Cauca",
    date: "2025-12-16",
    result: { es: "Ponencia en póster", en: "Poster presentation" },
    ...cert("ciencia-al-parque-2025.png"),
  },
  {
    id: "congreso-ing-fisica-2025",
    title: {
      es: "VIII Congreso Nacional de Ingeniería Física y III International Applied Physics, Engineering and Innovation Conference",
      en: "8th National Engineering Physics Congress & 3rd International Applied Physics, Engineering and Innovation Conference",
    },
    issuer: "Universidad del Cauca",
    date: "2025-10-24",
    result: { es: "Asistente · 40 horas", en: "Attendee · 40 hours" },
    ...cert("congreso-ingenieria-fisica-2025.pdf"),
  },
  {
    id: "zagi-2022",
    title: { es: "2.ª Zagi AESS Race · equipo Herm", en: "2nd Zagi AESS Race · team Herm" },
    issuer: "IEEE AESS Colombia",
    date: "2022-08-27",
    result: { es: "Participación", en: "Participant" },
    ...cert("zagi-aess-race-2022.pdf"),
  },
  {
    id: "ciencia-paz-2022",
    title: {
      es: "Encuentro Internacional de Ciencia para la Paz y el Desarrollo",
      en: "International Meeting on Science for Peace and Development",
    },
    issuer: "Universidad del Cauca · Ingeniería Física",
    date: "2022-11-30",
    result: { es: "Asistente", en: "Attendee" },
    ...cert("ciencia-para-la-paz-2022.pdf"),
  },
];

/** Cursos agrupados por entidad emisora. */
export const courseGroups: { issuer: string; items: Certificate[] }[] = [
  {
    issuer: "Microsoft Learn · Azure",
    items: [
      {
        id: "azure-componentes",
        title: {
          es: "Describir los componentes arquitectónicos principales de Azure",
          en: "Describe the core architectural components of Azure",
        },
        issuer: "Microsoft Learn",
        date: "2026-10-16",
        ...cert("azure-componentes-arquitectonicos.pdf"),
      },
      {
        id: "azure-supervision",
        title: {
          es: "Descripción de las herramientas de supervisión de Azure",
          en: "Describe monitoring tools in Azure",
        },
        issuer: "Microsoft Learn",
        date: "2026-10-06",
        ...cert("azure-herramientas-supervision.pdf"),
      },
      {
        id: "azure-administrar",
        title: {
          es: "Características y herramientas para administrar e implementar recursos de Azure",
          en: "Describe features and tools for managing and deploying Azure resources",
        },
        issuer: "Microsoft Learn",
        date: "2026-10-06",
        ...cert("azure-administrar-implementar.pdf"),
      },
      {
        id: "azure-infra-gobernanza",
        title: {
          es: "Infraestructura en la nube: administración y gobernanza de Azure",
          en: "Cloud infrastructure: Azure management and governance",
        },
        issuer: "Microsoft Learn",
        date: "2026-10-06",
        ...cert("azure-infraestructura-gobernanza.pdf"),
      },
      {
        id: "azure-costos",
        title: {
          es: "Descripción de la administración de costos en Azure",
          en: "Describe cost management in Azure",
        },
        issuer: "Microsoft Learn",
        date: "2026-10-05",
        ...cert("azure-administracion-costos.pdf"),
      },
      {
        id: "azure-gobernanza",
        title: {
          es: "Características y herramientas de Azure para la gobernanza y el cumplimiento",
          en: "Describe Azure features and tools for governance and compliance",
        },
        issuer: "Microsoft Learn",
        date: "2026-10-05",
        ...cert("azure-gobernanza-cumplimiento.pdf"),
      },
      {
        id: "azure-conceptos",
        title: {
          es: "Infraestructura en la nube: descripción de los conceptos de la nube",
          en: "Cloud infrastructure: describe cloud concepts",
        },
        issuer: "Microsoft Learn",
        date: "2026-10-05",
        ...cert("azure-conceptos-nube.pdf"),
      },
    ],
  },
  {
    issuer: "MathWorks · MATLAB & Simulink",
    items: [
      {
        id: "matlab-exploracion",
        title: { es: "Exploración de datos con gráficas de MATLAB", en: "Data exploration with MATLAB plots" },
        issuer: "MathWorks",
        date: "2025-02-24",
        ...cert("matlab-exploracion-datos.pdf"),
      },
      {
        id: "matlab-onramp",
        title: { es: "MATLAB Onramp", en: "MATLAB Onramp" },
        issuer: "MathWorks",
        date: "2025-02-10",
        ...cert("matlab-onramp.pdf"),
      },
      {
        id: "statistics-onramp",
        title: { es: "Statistics Onramp", en: "Statistics Onramp" },
        issuer: "MathWorks",
        date: "2025-02-10",
        ...cert("statistics-onramp.pdf"),
      },
      {
        id: "control-design-onramp",
        title: { es: "Control Design Onramp with Simulink", en: "Control Design Onramp with Simulink" },
        issuer: "MathWorks",
        date: "2024-10-16",
        ...cert("control-design-onramp.pdf"),
      },
      {
        id: "simulink-onramp",
        title: { es: "Simulink Onramp", en: "Simulink Onramp" },
        issuer: "MathWorks",
        date: "2024-08-20",
        ...cert("simulink-onramp.pdf"),
      },
    ],
  },
];

export const certificateCount =
  highlights.length + courseGroups.reduce((total, group) => total + group.items.length, 0);
