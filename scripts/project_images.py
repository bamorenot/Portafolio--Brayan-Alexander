"""Importa las figuras de resultados de los proyectos de simulación y genera el manifiesto
de dimensiones de todas las imágenes propias (public/proyectos/ y public/perfil/).

- Las figuras se copian desde las carpetas de cada proyecto (PHYSIS) a public/proyectos/<slug>/,
  redimensionadas a un lado máximo de 1800 px y convertidas a WebP.
- El manifiesto (src/data/image-manifest.json) guarda ancho y alto de cada imagen para next/image.

Uso:  bun run images:projects   (o: python -I scripts/project_images.py)
"""

from __future__ import annotations

import json
import shutil
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
MANIFEST = ROOT / "src" / "data" / "image-manifest.json"
PHYSIS = Path.home() / "Documents" / "Physis"
MAX_SIDE = 1800

ISING = PHYSIS / "Dioxido-de-vanadio-insing" / "results_analysis"
DFT = PHYSIS / "VO2-DFT" / "results"

# destino (dentro de public/proyectos/) -> origen
IMPORTS: dict[str, Path] = {
    "modelo-ising-vo2/configuracion-espines-340k.webp": ISING / "1_configuraciones" / "config_T340K.png",
    "modelo-ising-vo2/configuraciones-200k-500k.webp": ISING / "1_configuraciones" / "comparacion_temperaturas.png",
    "modelo-ising-vo2/configuraciones-250k-340k-450k.webp": ISING / "1_configuraciones" / "comparacion.png",
    "modelo-ising-vo2/diagrama-de-fase.webp": ISING / "3_transicion_fase" / "diagrama_fase.png",
    "dft-vo2/bandas-dos-m1.webp": DFT / "electronic" / "m1_combined.png",
    "dft-vo2/bandas-dos-r.webp": DFT / "electronic" / "r_combined.png",
    "dft-vo2/estructura-m1.webp": DFT / "structures" / "m1_structure.png",
    "dft-vo2/estructura-r.webp": DFT / "structures" / "r_structure.png",
    "dft-vo2/dos-proyectada-m1.webp": DFT / "electronic" / "m1_dos.png",
    "dft-vo2/dos-proyectada-r.webp": DFT / "electronic" / "r_dos.png",
    "dft-vo2/propiedades-electromagneticas.webp": DFT / "transition" / "em_properties.png",
    "dft-vo2/animacion-transicion-m1-r.gif": DFT / "animation" / "transition_animation.gif",
}


def import_results() -> None:
    for dest, src in IMPORTS.items():
        out = PUBLIC / "proyectos" / dest
        out.parent.mkdir(parents=True, exist_ok=True)
        if not src.exists():
            print(f"  falta el origen: {src}")
            continue
        if out.suffix == ".gif":
            shutil.copyfile(src, out)
        else:
            im = Image.open(src).convert("RGB")
            im.thumbnail((MAX_SIDE, MAX_SIDE))
            im.save(out, quality=85, method=6)
        print(f"  {dest}")


def build_manifest() -> None:
    manifest: dict[str, dict[str, int]] = {}
    for folder in ("proyectos", "proyectos-actuales", "perfil"):
        for path in sorted((PUBLIC / folder).rglob("*")):
            if path.suffix.lower() not in {".png", ".jpg", ".jpeg", ".webp", ".gif"}:
                continue
            with Image.open(path) as im:
                manifest["/" + path.relative_to(PUBLIC).as_posix()] = {"width": im.width, "height": im.height}
    MANIFEST.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    print(f"  manifiesto: {len(manifest)} imágenes")


def main() -> int:
    if "--manifest-only" not in sys.argv:
        import_results()
    build_manifest()
    return 0


if __name__ == "__main__":
    sys.exit(main())
