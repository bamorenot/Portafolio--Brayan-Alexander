# Portafolio de Brayan Alexander Moreno Trullo

Sitio web personal de Brayan Alexander Moreno Trullo, estudiante de Ingeniería Física de la Universidad del Cauca (Popayán, Colombia). Reúne su trabajo en física computacional, ciencia de datos, inteligencia artificial y desarrollo aeroespacial, y está disponible en español e inglés.

## Qué muestra el portafolio

- **Proyectos destacados.** Cada proyecto tiene su propia página con la ficha técnica, la metodología, figuras, tablas y resultados. Entre ellos están una simulación Monte Carlo del modelo de Ising aplicada al dióxido de vanadio (VO₂), un motor DFT simplificado para comparar las fases M1 y R del VO₂, un clasificador de emociones en voz entrenado con el corpus RAVDESS y el CanSat TULCAN-SAT, que obtuvo el 8.º lugar en el Mundial CanSat 2025 de la UNAM.
- **Proyectos en curso.** Plataformas de ingeniería de datos e inteligencia artificial que todavía están en desarrollo. Se presentan con su stack tecnológico, pero el código no es público.
- **Habilidades.** Agrupadas en física computacional, ingeniería de datos, inteligencia artificial, nube y DevOps, computación cuántica, y hardware y aeroespacial.
- **Logros y certificados.** Competencias, congresos y cursos (UNAM, IBM Quantum, Microsoft Azure, MathWorks, entre otros). Cada certificado se puede abrir en PDF. Por privacidad, el número de documento aparece oculto en todos.
- **Hoja de vida.** Disponible para descarga desde el sitio.

## Cómo está construido

El sitio usa Next.js 16 con App Router, React 19, TypeScript y Tailwind CSS 4, y se despliega en Vercel. Al entrar a la raíz, el visitante es redirigido a `/es` o `/en` según el idioma de su navegador.

El contenido está separado del diseño: los textos de cada proyecto, certificado y habilidad viven en `src/data/` en los dos idiomas, y los componentes de `src/components/` se encargan solo de presentarlos. Así, agregar un proyecto nuevo no requiere tocar la interfaz.

```
src/
  app/[lang]/        páginas: inicio, detalle de cada proyecto y créditos de imágenes
  components/        secciones de la página y elementos de cada proyecto
  data/              contenido del sitio (perfil, proyectos, certificados, habilidades)
  i18n/              idiomas y textos de la interfaz
public/              imágenes, certificados y hoja de vida
scripts/             utilidades en Python para preparar imágenes y certificados
```

Los scripts de `scripts/` automatizan tareas de apoyo: ocultan el número de documento en los certificados antes de publicarlos, registran las dimensiones de las imágenes de cada proyecto y descargan imágenes de dominio público de NASA y Wikimedia Commons, cuyos créditos aparecen en la página `/creditos`.

## Ejecución local

```bash
bun install
bun run dev      # http://localhost:3000
bun run build    # build de producción
```
