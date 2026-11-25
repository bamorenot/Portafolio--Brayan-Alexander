import Image from "next/image";
import { siteImage, type ImageKey } from "@/lib/images";

/** Nebulosas para las páginas de proyecto. */
export const NEBULAE: ImageKey[] = ["nebula-crab", "nebula-helix", "nebula-orion", "nebula-bubble", "hero-cosmic-cliffs"];

/** Galaxias para la página principal (distintas de las de los proyectos). */
export const GALAXIES: ImageKey[] = ["galaxy-whirlpool", "galaxy-sombrero", "galaxy-andromeda", "galaxy-pinwheel", "galaxy-sunflower"];

interface WatermarkProps {
  index: number;
  images?: ImageKey[];
}

/**
 * Imagen astronómica de fondo como marca de agua: muy tenue, difuminada en los bordes
 * y alternando de lado según el índice de la sección.
 */
export function NebulaWatermark({ index, images = NEBULAE }: WatermarkProps) {
  const image = siteImage(images[index % images.length] ?? "nebula-crab");
  const right = index % 2 === 0;
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-1/2 -z-10 aspect-square w-[42rem] max-w-[90vw] -translate-y-1/2 opacity-[0.22] mix-blend-screen ${right ? "-right-40" : "-left-40"}`}
      style={{ maskImage: "radial-gradient(closest-side, #000 35%, transparent 100%)" }}
    >
      <Image src={image.src} alt="" fill sizes="42rem" className="object-cover" />
    </div>
  );
}
