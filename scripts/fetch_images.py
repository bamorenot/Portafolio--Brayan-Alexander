"""Descarga las imágenes decorativas (NASA, CERN vía Wikimedia Commons), las optimiza
a WebP en public/stock/ y escribe sus créditos en src/data/image-credits.json.

Uso:  bun run images   (o: python -I scripts/fetch_images.py)
"""

from __future__ import annotations

import io
import json
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "stock"
CREDITS = ROOT / "src" / "data" / "image-credits.json"
HEADERS = {"User-Agent": "portfolio-image-fetch/1.0"}
MAX_SIDE = 1920

# clave -> ("nasa", nasa_id) | ("commons", "File:...")
SOURCES: dict[str, tuple[str, str]] = {
    "hero-cosmic-cliffs": ("nasa", "carina_nebula"),
    # Nebulosas usadas como marca de agua en las páginas de proyecto.
    "nebula-crab": ("nasa", "PIA03606"),
    "nebula-helix": ("nasa", "PIA15658"),
    "nebula-orion": ("nasa", "PIA01322"),
    "nebula-bubble": ("nasa", "GSFC_20171208_Archive_e000382"),
    # Galaxias usadas como marca de agua en la página principal.
    "galaxy-whirlpool": ("nasa", "PIA04230"),
    "galaxy-sombrero": ("nasa", "PIA15226"),
    "galaxy-andromeda": ("nasa", "PIA04921"),
    "galaxy-pinwheel": ("nasa", "PIA14403"),
    "galaxy-sunflower": ("nasa", "GSFC_20171208_Archive_e000615"),
    "webb-cryo-chamber": ("nasa", "GSFC_20171208_Archive_e000745"),
    "cern-cms": ("commons", "File:CERN LHC CMS 02.jpg"),
    "cern-computer-center": ("commons", "File:CERN Computer Center 13.jpg"),
    "ibm-quantum": ("commons", "File:IBM Q system (Fraunhofer 2).jpg"),
}


def get(url: str, attempts: int = 5) -> bytes:
    for i in range(attempts):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=HEADERS), timeout=60) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code != 429 or i == attempts - 1:
                raise
            wait = int(e.headers.get("Retry-After") or 0) or 10 * (i + 1)
            print(f"  429, reintento en {wait}s")
            time.sleep(wait)
    raise RuntimeError("unreachable")


def clean(html: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", html)).strip()


def from_nasa(nasa_id: str) -> tuple[bytes, dict]:
    meta = json.loads(get(f"https://images-api.nasa.gov/search?nasa_id={urllib.parse.quote(nasa_id)}"))
    data = meta["collection"]["items"][0]["data"][0]
    files = json.loads(get(f"https://images-api.nasa.gov/asset/{urllib.parse.quote(nasa_id)}"))
    hrefs = [i["href"] for i in files["collection"]["items"]]
    pick = next((h for h in hrefs if "~large" in h), None) or next(h for h in hrefs if "~orig" in h)
    credit = {
        "title": data["title"],
        "author": f"NASA{(' / ' + data['center']) if data.get('center') else ''}",
        "license": "Public domain (NASA)",
        "source": f"https://images.nasa.gov/details/{nasa_id}",
    }
    return get(pick.replace("http://", "https://")), credit


def from_commons(title: str) -> tuple[bytes, dict]:
    q = urllib.parse.urlencode({
        "action": "query", "format": "json", "titles": title, "prop": "imageinfo",
        "iiprop": "url|extmetadata", "iiurlwidth": 1280,
    })
    page = next(iter(json.loads(get(f"https://commons.wikimedia.org/w/api.php?{q}"))["query"]["pages"].values()))
    info = page["imageinfo"][0]
    m = info["extmetadata"]
    credit = {
        "title": title.removeprefix("File:").rsplit(".", 1)[0],
        "author": clean(m.get("Artist", {}).get("value", "Unknown")),
        "license": clean(m.get("LicenseShortName", {}).get("value", "")),
        "source": info["descriptionurl"],
    }
    return get(info.get("thumburl") or info["url"]), credit


def main() -> int:
    OUT.mkdir(parents=True, exist_ok=True)
    CREDITS.parent.mkdir(parents=True, exist_ok=True)
    credits: dict[str, dict] = json.loads(CREDITS.read_text("utf-8")) if CREDITS.exists() else {}
    for key, (kind, ref) in SOURCES.items():
        if key in credits and (OUT / f"{key}.webp").exists():
            continue
        raw, credit = from_nasa(ref) if kind == "nasa" else from_commons(ref)
        im = Image.open(io.BytesIO(raw)).convert("RGB")
        im.thumbnail((MAX_SIDE, MAX_SIDE))
        im.save(OUT / f"{key}.webp", quality=78, method=6)
        credits[key] = {**credit, "width": im.width, "height": im.height}
        print(f"{key:22s} {im.width}x{im.height}  {credit['license']}")
        # Se guarda tras cada imagen para poder reanudar si el servidor limita las descargas.
        CREDITS.write_text(json.dumps(credits, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        time.sleep(2)
    return 0


if __name__ == "__main__":
    sys.exit(main())
