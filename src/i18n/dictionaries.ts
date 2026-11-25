import type { Locale } from "./config";

const es = {
  meta: {
    title: "Brayan Moreno · Ingeniería Física, Datos e IA",
    description:
      "Portafolio de Brayan Alexander Moreno Trullo: física computacional, ciencia de datos, inteligencia artificial y sistemas aeroespaciales.",
  },
  nav: {
    projects: "Proyectos",
    current: "En curso",
    skills: "Habilidades",
    achievements: "Logros",
    cv: "CV",
    contact: "Contacto",
    menu: "Menú",
    close: "Cerrar",
    switchLanguage: "English",
    switchLanguageLabel: "Ver el sitio en inglés",
  },
  hero: {
    eyebrow: "Portafolio",
    role: "Ingeniería Física · Datos, IA y física computacional",
    intro:
      "Estudiante de 9.º semestre de Ingeniería Física en la Universidad del Cauca. Trabajo entre la física de materiales, el aprendizaje automático, la ingeniería de datos y los sistemas aeroespaciales.",
    viewProjects: "Ver proyectos",
    downloadCv: "Descargar CV",
  },
  stats: {
    projects: "proyectos de investigación e ingeniería",
    current: "plataformas en desarrollo",
    certificates: "certificados y reconocimientos",
    cansat: "lugar en el Mundial CanSat 2025 (UNAM)",
  },
  projects: {
    eyebrow: "Investigación e ingeniería",
    title: "Proyectos destacados",
    subtitle: "De la física del estado sólido a los satélites y la inteligencia artificial.",
    viewDetails: "Ver proyecto",
  },
  current: {
    eyebrow: "En desarrollo",
    title: "Proyectos actuales",
    subtitle: "Plataformas de datos e inteligencia artificial que estoy construyendo ahora.",
    privateBadge: "Privado",
    privateMessage: "Proyecto privado: el código y los detalles no son públicos. Estas son las tecnologías que uso.",
    stack: "Tecnologías",
  },
  skills: {
    eyebrow: "Herramientas",
    title: "Habilidades",
    subtitle: "Lo que uso para modelar, analizar y construir.",
  },
  achievements: {
    eyebrow: "Reconocimientos",
    title: "Logros y certificados",
    subtitle: "Competencias, congresos y formación complementaria.",
    highlights: "Logros destacados",
    courses: "Cursos y certificaciones",
    viewPdf: "Ver certificado",
    privacyNote: "Por privacidad, el número de documento está oculto en todos los certificados.",
  },
  cv: {
    eyebrow: "Hoja de vida",
    title: "Currículum",
    subtitle: "Mi hoja de vida completa en PDF.",
    open: "Ver currículum",
  },
  contact: {
    title: "¿Hablamos?",
    subtitle: "Estoy abierto a prácticas, proyectos de investigación y oportunidades en datos e IA.",
    email: "Escríbeme",
  },
  project: {
    back: "Volver a proyectos",
    facts: "Ficha técnica",
    contents: "Contenido",
    tech: "Tecnologías y métodos",
    recognition: "Reconocimientos",
    pending: "Pronto: descripción técnica, imágenes y resultados del proyecto.",
    coverCredit: "Imagen de portada",
    previous: "Anterior",
    next: "Siguiente",
    navLabel: "Otros proyectos",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    credits: "Créditos de las imágenes",
  },
  credits: {
    title: "Créditos de las imágenes",
    subtitle:
      "Las imágenes decorativas provienen de NASA (dominio público) y de Wikimedia Commons, con las licencias indicadas.",
    back: "Volver al inicio",
    source: "Fuente",
  },
  notFound: {
    title: "Página no encontrada",
    body: "Esta órbita no existe.",
    home: "Volver al inicio",
  },
};

export type Dictionary = typeof es;

const en: Dictionary = {
  meta: {
    title: "Brayan Moreno · Engineering Physics, Data & AI",
    description:
      "Portfolio of Brayan Alexander Moreno Trullo: computational physics, data science, artificial intelligence and aerospace systems.",
  },
  nav: {
    projects: "Projects",
    current: "Current",
    skills: "Skills",
    achievements: "Achievements",
    cv: "Resume",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    switchLanguage: "Español",
    switchLanguageLabel: "View the site in Spanish",
  },
  hero: {
    eyebrow: "Portfolio",
    role: "Engineering Physics · Data, AI & computational physics",
    intro:
      "Ninth-semester Engineering Physics student at Universidad del Cauca (Colombia). I work across materials physics, machine learning, data engineering and aerospace systems.",
    viewProjects: "View projects",
    downloadCv: "Download resume",
  },
  stats: {
    projects: "research and engineering projects",
    current: "platforms in development",
    certificates: "certificates and awards",
    cansat: "place at the 2025 CanSat World Cup (UNAM)",
  },
  projects: {
    eyebrow: "Research & engineering",
    title: "Featured projects",
    subtitle: "From solid-state physics to satellites and artificial intelligence.",
    viewDetails: "View project",
  },
  current: {
    eyebrow: "In progress",
    title: "Current projects",
    subtitle: "Data and AI platforms I am building right now.",
    privateBadge: "Private",
    privateMessage: "Private project: code and details are not public. These are the technologies I use.",
    stack: "Technologies",
  },
  skills: {
    eyebrow: "Toolbox",
    title: "Skills",
    subtitle: "What I use to model, analyze and build.",
  },
  achievements: {
    eyebrow: "Recognition",
    title: "Achievements & certificates",
    subtitle: "Competitions, conferences and additional training.",
    highlights: "Highlights",
    courses: "Courses & certifications",
    viewPdf: "View certificate",
    privacyNote: "For privacy, the ID number is hidden on every certificate.",
  },
  cv: {
    eyebrow: "Resume",
    title: "Resume",
    subtitle: "My full resume as a PDF.",
    open: "View resume",
  },
  contact: {
    title: "Let's talk",
    subtitle: "Open to internships, research projects and data & AI opportunities.",
    email: "Email me",
  },
  project: {
    back: "Back to projects",
    facts: "Key facts",
    contents: "Contents",
    tech: "Technologies & methods",
    recognition: "Recognition",
    pending: "Coming soon: technical description, images and results.",
    coverCredit: "Cover image",
    previous: "Previous",
    next: "Next",
    navLabel: "Other projects",
  },
  footer: {
    rights: "All rights reserved.",
    credits: "Image credits",
  },
  credits: {
    title: "Image credits",
    subtitle:
      "Decorative images come from NASA (public domain) and Wikimedia Commons, under the licenses listed.",
    back: "Back home",
    source: "Source",
  },
  notFound: {
    title: "Page not found",
    body: "This orbit does not exist.",
    home: "Back home",
  },
};

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
