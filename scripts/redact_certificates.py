"""Copia los certificados de CERTIFICADOS/ a public/certificados/ tapando el número de cédula.

Los originales nunca se publican: solo se sirven las copias de public/certificados/.
Uso:  bun run redact   (o: python -I scripts/redact_certificates.py)
"""

from __future__ import annotations

import sys
from pathlib import Path

import pymupdf
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "CERTIFICADOS"
DST = ROOT / "public" / "certificados"

# Texto sensible a tapar en los PDF (número y su etiqueta).
SENSITIVE = ["1000726283"]
# Etiquetas que van solas en su línea (se pueden borrar sin dañar el resto del texto).
LABELS = ["Identificación No.", "IDENTIFICACIÓN NO."]

# Nombre original -> nombre publicado (ASCII, sin espacios).
PDFS = {
    "Mundial_Cansat_2025.pdf": "mundial-cansat-2025.pdf",
    "Mundial_Cansat_2024.pdf": "mundial-cansat-2024.pdf",
    "Zagi_Aess.pdf": "zagi-aess-race-2022.pdf",
    "Quiskit Fall Fest 2026.pdf": "qiskit-fall-fest-2026.pdf",
    "Congreso_Nacional_de_Ing_Física.pdf": "congreso-ingenieria-fisica-2025.pdf",
    "Certificado_Ciencia_para_la_paz.pdf": "ciencia-para-la-paz-2022.pdf",
    "Describir-los-componentes-arquitectónicos-azure.pdf": "azure-componentes-arquitectonicos.pdf",
    "Descripción-de-las-herramientas-de-azurepdf.pdf": "azure-herramientas-supervision.pdf",
    "administración-de-costos-en-Azure.pdf": "azure-administracion-costos.pdf",
    "gobernanza-azure.pdf": "azure-gobernanza-cumplimiento.pdf",
    "herramientas-para-administrar-implementar-azure.pdf": "azure-administrar-implementar.pdf",
    "infraestructura-en-la-nube-descripción-azure.pdf": "azure-infraestructura-gobernanza.pdf",
    "Introducción-a-la-infraestructura-en-la-nube-conceptos.pdf": "azure-conceptos-nube.pdf",
    "MATLAB-Onramp.pdf": "matlab-onramp.pdf",
    "Statistics-Onramp.pdf": "statistics-onramp.pdf",
    "simulink-onramp.pdf": "simulink-onramp.pdf",
    "control-design-onramp-with-simulink.pdf": "control-design-onramp.pdf",
    "exploración-de-datos-con-gráficas-de-MATLAB.pdf": "matlab-exploracion-datos.pdf",
}

# Imágenes: la cédula está dentro de los píxeles, se tapa por coordenadas (x0, y0, x1, y1).
IMAGES = {
    "Ciencia_al_parque.png": ("ciencia-al-parque-2025.png", [(455, 268, 930, 302)]),
}


def redact_pdf(src: Path, dst: Path) -> int:
    doc = pymupdf.open(src)
    count = 0
    for page in doc:
        for needle in SENSITIVE + LABELS:
            for rect in page.search_for(needle):
                # Solo la franja central de la línea: las cajas de las fuentes
                # cursivas son altas y tocarían las líneas vecinas.
                band = pymupdf.Rect(rect.x0 - 1, rect.y0 + rect.height * 0.3,
                                    rect.x1 + 1, rect.y1 - rect.height * 0.15)
                page.add_redact_annot(band, fill=(1, 1, 1))
                count += 1
        page.apply_redactions(images=pymupdf.PDF_REDACT_IMAGE_NONE,
                              graphics=pymupdf.PDF_REDACT_LINE_ART_NONE)
    doc.save(dst, garbage=4, deflate=True)
    doc.close()
    # Verificación: el número no debe quedar en el texto.
    check = pymupdf.open(dst)
    leaked = any(s in p.get_text() for p in check for s in SENSITIVE)
    check.close()
    if leaked:
        raise RuntimeError(f"La cédula sigue visible en {dst.name}")
    return count


def redact_image(src: Path, dst: Path, boxes: list[tuple[int, int, int, int]]) -> None:
    im = Image.open(src).convert("RGB")
    draw = ImageDraw.Draw(im)
    for box in boxes:
        draw.rectangle(box, fill=(255, 255, 255))
    im.save(dst, optimize=True)


def main() -> int:
    DST.mkdir(parents=True, exist_ok=True)
    for name, out in PDFS.items():
        n = redact_pdf(SRC / name, DST / out)
        print(f"{out:45s} {'tapado (' + str(n) + ')' if n else 'sin datos sensibles'}")
    for name, (out, boxes) in IMAGES.items():
        redact_image(SRC / name, DST / out, boxes)
        print(f"{out:45s} tapado (imagen)")
    # Miniaturas para las tarjetas de certificados.
    thumbs = DST / "thumbs"
    thumbs.mkdir(exist_ok=True)
    for out in PDFS.values():
        doc = pymupdf.open(DST / out)
        pix = doc[0].get_pixmap(dpi=60)
        Image.frombytes("RGB", (pix.width, pix.height), pix.samples).save(
            thumbs / out.replace(".pdf", ".webp"), quality=80
        )
        doc.close()
    for out, _ in IMAGES.values():
        im = Image.open(DST / out)
        im.thumbnail((520, 520))
        im.save(thumbs / out.replace(".png", ".webp"), quality=80)
    return 0


if __name__ == "__main__":
    sys.exit(main())
