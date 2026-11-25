# Portafolio · Brayan Alexander Moreno Trullo

Next.js 16 (App Router) + TypeScript + Tailwind CSS 4, bilingüe (ES/EN), tipografía Poppins.

```bash
bun install
bun run dev        # http://localhost:3000  (redirige a /es o /en según el navegador)
bun run build      # build de producción
bun run lint       # ESLint
bun run typecheck  # TypeScript
```

## Estructura

```
src/
  app/[lang]/                 páginas (inicio, proyectos/[slug], creditos)
  components/                 secciones de la página
    project/                  figuras, tablas y matriz de confusión de cada proyecto
  data/                       TODO el contenido editable
    profile.ts                nombre, correo, LinkedIn, foto y CV
    projects/                 un archivo por proyecto + index.ts (orden y proyectos pendientes)
    current-projects.ts       proyectos actuales privados (con candado)
    certificates.ts           logros y cursos
    skills.ts                 habilidades
    image-credits.json        créditos de imágenes de banco (generado)
    image-manifest.json       ancho/alto de las imágenes propias (generado)
  i18n/                       idiomas y textos de la interfaz
  proxy.ts                    redirección de "/" al idioma
public/
  perfil/photo-alexander.png  foto de perfil
  cv/brayan-alexander-moreno.pdf
  proyectos/<slug>/           imágenes y resultados de cada proyecto
  certificados/               certificados con la cédula tapada (generados)
  stock/                      imágenes de NASA/CERN usadas como portada provisional
scripts/
  redact_certificates.py      tapa la cédula y copia los certificados a public/
  fetch_images.py             descarga las imágenes de banco (public/stock/)
  project_images.py           importa resultados de simulación y genera image-manifest.json
```

## Cómo completar un proyecto

1. Guarda sus imágenes en `public/proyectos/<slug>/` con nombres descriptivos (`matriz-correlacion.png`).
2. Ejecuta `bun run images:projects` para registrar sus dimensiones.
3. Crea `src/data/projects/<slug>.ts` (usa `emociones-voz.ts` como modelo): `cover`, `facts`
   (ficha técnica) y `sections` con párrafos, términos, figuras, tablas o matriz de confusión,
   todo en español e inglés. Luego reemplaza el proyecto en `src/data/projects/index.ts`.

## Certificados

Los originales de `CERTIFICADOS/` **no se publican** (contienen la cédula y están en `.gitignore`).
Si agregas uno nuevo, regístralo en `scripts/redact_certificates.py` y en `src/data/certificates.ts`, y ejecuta:

```bash
bun run redact
```

Revisa la copia en `public/certificados/` antes de publicar: el script verifica el texto, pero
si la cédula está dentro de una imagen hay que indicar las coordenadas a mano (ver `IMAGES`).

## Imágenes

`bun run images` descarga las imágenes de banco de NASA (dominio público) y Wikimedia Commons
(CERN, IBM) a `public/stock/` y actualiza los créditos, que se muestran en `/es/creditos`.
