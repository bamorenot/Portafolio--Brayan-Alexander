import type { Project } from "./types";

const dir = "/proyectos/dft-vo2";

export const dftVo2: Project = {
  slug: "dft-vo2",
  title: {
    es: "Estructura electrónica del VO₂ con un motor DFT propio",
    en: "VO₂ electronic structure with an in-house DFT engine",
  },
  category: { es: "Física del estado sólido", en: "Solid-state physics" },
  summary: {
    es: "Implementación propia de un motor DFT simplificado (ciclo SCF de Kohn-Sham) para comparar la estructura electrónica y la respuesta electromagnética de las fases M1 y R del dióxido de vanadio.",
    en: "In-house implementation of a simplified DFT engine (Kohn-Sham SCF cycle) to compare the electronic structure and electromagnetic response of the M1 and R phases of vanadium dioxide.",
  },
  tags: ["Python", "DFT", "Kohn-Sham", "NumPy", "SciPy", "ASE", "Plotly", "Matplotlib"],
  cover: `${dir}/bandas-dos-m1.webp`,
  facts: [
    { label: { es: "Método", en: "Method" }, value: { es: "DFT simplificado, implementación propia", en: "Simplified DFT, in-house implementation" } },
    { label: { es: "Funcional XC", en: "XC functional" }, value: { es: "PBE (GGA, aproximado)", en: "PBE (GGA, approximate)" } },
    { label: { es: "Energía de corte", en: "Cut-off energy" }, value: "400 eV" },
    { label: { es: "Malla k", en: "k-point mesh" }, value: "4 × 4 × 4 Monkhorst-Pack" },
    { label: { es: "Fases", en: "Phases" }, value: "M1 (P2₁/c) · R (P4₂/mnm)" },
  ],
  sections: [
    {
      id: "objetivo",
      title: { es: "Objetivo", en: "Objective" },
      paragraphs: {
        es: [
          "Modelar la transición metal–aislante del VO₂ (Tc ≈ 340 K) desde la estructura electrónica: comparar la fase monoclínica M1, aislante y con dímeros V–V, con la fase rutilo R, metálica y con cadenas V–V lineales, y caracterizar la respuesta electromagnética de una película delgada en ambas fases.",
        ],
        en: [
          "Model the VO₂ metal–insulator transition (Tc ≈ 340 K) from its electronic structure: compare the insulating monoclinic M1 phase with V–V dimers against the metallic rutile R phase with linear V–V chains, and characterize the electromagnetic response of a thin film in both phases.",
        ],
      },
    },
    {
      id: "estructuras",
      title: { es: "Estructuras cristalinas", en: "Crystal structures" },
      terms: [
        { term: "M1", text: { es: "Monoclínica, grupo espacial P2₁/c; a ≈ 5,75 Å, b ≈ 4,53 Å, c ≈ 5,38 Å, β ≈ 122,6°; dimerización V–V.", en: "Monoclinic, space group P2₁/c; a ≈ 5.75 Å, b ≈ 4.53 Å, c ≈ 5.38 Å, β ≈ 122.6°; V–V dimerization." } },
        { term: "R", text: { es: "Tetragonal (rutilo), grupo espacial P4₂/mnm; a = b ≈ 4,55 Å, c ≈ 2,86 Å; cadenas V–V equiespaciadas.", en: "Tetragonal (rutile), space group P4₂/mnm; a = b ≈ 4.55 Å, c ≈ 2.86 Å; equally spaced V–V chains." } },
      ],
      figures: [
        {
          src: `${dir}/estructura-m1.webp`,
          alt: { es: "Estructura cristalina de la fase M1", en: "M1 phase crystal structure" },
          caption: { es: "Celda de la fase M1 (V en azul, O en rojo).", en: "M1 phase cell (V in blue, O in red)." },
        },
        {
          src: `${dir}/estructura-r.webp`,
          alt: { es: "Estructura cristalina de la fase R", en: "R phase crystal structure" },
          caption: { es: "Celda de la fase R.", en: "R phase cell." },
        },
        {
          src: `${dir}/animacion-transicion-m1-r.gif`,
          alt: { es: "Animación de la transición estructural M1 a R", en: "Animation of the M1 to R structural transition" },
          caption: { es: "Evolución estructural M1 → R entre 250 K y 400 K.", en: "M1 → R structural evolution between 250 K and 400 K." },
        },
      ],
    },
    {
      id: "motor-dft",
      title: { es: "Motor DFT", en: "DFT engine" },
      paragraphs: {
        es: [
          "Se implementó en Python un motor DFT simplificado que resuelve de forma autoconsistente las ecuaciones de Kohn-Sham [−ħ²/2mₑ ∇² + V_eff(r)] ψᵢ(r) = εᵢ ψᵢ(r), con V_eff = V_ext + V_H + V_xc.",
        ],
        en: [
          "A simplified DFT engine was implemented in Python to self-consistently solve the Kohn-Sham equations [−ħ²/2mₑ ∇² + V_eff(r)] ψᵢ(r) = εᵢ ψᵢ(r), with V_eff = V_ext + V_H + V_xc.",
        ],
      },
      terms: [
        { term: { es: "Ciclo SCF", en: "SCF cycle" }, text: { es: "Densidad inicial → potencial efectivo → diagonalización de Kohn-Sham → nivel de Fermi y ocupaciones → nueva densidad, con mezcla lineal (α = 0,3) y criterio de convergencia sobre la densidad.", en: "Initial density → effective potential → Kohn-Sham diagonalization → Fermi level and occupations → new density, with linear mixing (α = 0.3) and a density convergence criterion." } },
        { term: { es: "Potenciales", en: "Potentials" }, text: { es: "Externo iónico, Hartree en aproximación de campo medio e intercambio-correlación tipo PBE.", en: "Ionic external, mean-field Hartree and PBE-type exchange-correlation." } },
        { term: { es: "Optimización geométrica", en: "Geometry optimization" }, text: { es: "Relajación de posiciones atómicas a partir de las fuerzas.", en: "Relaxation of atomic positions from forces." } },
        { term: { es: "Propiedades", en: "Properties" }, text: { es: "Bandas sobre caminos de alta simetría (M1: Γ–Y–A–B–Z–Γ; R: Γ–X–M–Γ–Z–R–A–Z), densidad de estados total y proyectada (V 3d, O 2p).", en: "Bands along high-symmetry paths (M1: Γ–Y–A–B–Z–Γ; R: Γ–X–M–Γ–Z–R–A–Z), total and projected density of states (V 3d, O 2p)." } },
      ],
    },
    {
      id: "propiedades-electronicas",
      title: { es: "Propiedades electrónicas", en: "Electronic properties" },
      paragraphs: {
        es: [
          "En la fase M1 el nivel de Fermi queda dentro de una brecha entre las bandas de valencia y de conducción (comportamiento aislante). En la fase R las bandas cruzan el nivel de Fermi y la densidad de estados es finita en él (comportamiento metálico). La DOS proyectada muestra la contribución de los estados V 3d y O 2p.",
        ],
        en: [
          "In the M1 phase the Fermi level lies inside a gap between valence and conduction bands (insulating behavior). In the R phase bands cross the Fermi level and the density of states is finite there (metallic behavior). The projected DOS shows the contribution of V 3d and O 2p states.",
        ],
      },
      figures: [
        {
          src: `${dir}/bandas-dos-m1.webp`,
          alt: { es: "Bandas y densidad de estados de la fase M1", en: "M1 phase bands and density of states" },
          caption: { es: "Fase M1: estructura de bandas y DOS.", en: "M1 phase: band structure and DOS." },
        },
        {
          src: `${dir}/bandas-dos-r.webp`,
          alt: { es: "Bandas y densidad de estados de la fase R", en: "R phase bands and density of states" },
          caption: { es: "Fase R: estructura de bandas y DOS.", en: "R phase: band structure and DOS." },
        },
        {
          src: `${dir}/dos-proyectada-m1.webp`,
          alt: { es: "Densidad de estados total y proyectada, fase M1", en: "Total and projected DOS, M1 phase" },
          caption: { es: "DOS total y proyectada, fase M1.", en: "Total and projected DOS, M1 phase." },
        },
        {
          src: `${dir}/dos-proyectada-r.webp`,
          alt: { es: "Densidad de estados total y proyectada, fase R", en: "Total and projected DOS, R phase" },
          caption: { es: "DOS total y proyectada, fase R.", en: "Total and projected DOS, R phase." },
        },
      ],
    },
    {
      id: "propiedades-em",
      title: { es: "Propiedades electromagnéticas", en: "Electromagnetic properties" },
      paragraphs: {
        es: [
          "A partir de la estructura electrónica se calcularon la conductividad óptica σ(ω), la permitividad dieléctrica compleja ε(ω) y el coeficiente de transmisión de una película de 100 nm. La fase R presenta mayor conductividad y absorción (respuesta tipo Drude) y menor transmisión que la fase M1, lo que sustenta el uso del VO₂ como modulador electromagnético controlado térmicamente.",
        ],
        en: [
          "From the electronic structure, the optical conductivity σ(ω), the complex dielectric permittivity ε(ω) and the transmission coefficient of a 100 nm film were computed. The R phase shows higher conductivity and absorption (Drude-like response) and lower transmission than M1, supporting the use of VO₂ as a thermally controlled electromagnetic modulator.",
        ],
      },
      figures: [
        {
          src: `${dir}/propiedades-electromagneticas.webp`,
          alt: { es: "Conductividad óptica, permitividad y transmisión de M1 y R", en: "Optical conductivity, permittivity and transmission of M1 and R" },
          caption: { es: "Conductividad óptica, permitividad real e imaginaria y transmisión (película de 100 nm).", en: "Optical conductivity, real and imaginary permittivity and transmission (100 nm film)." },
        },
      ],
    },
    {
      id: "visualizacion",
      title: { es: "Visualización interactiva", en: "Interactive visualization" },
      paragraphs: {
        es: [
          "Los resultados se integran en un dashboard web con estructuras cristalinas 3D, bandas y DOS interactivas (Plotly) y una animación de la transición estructural M1 → R.",
        ],
        en: [
          "Results are integrated into a web dashboard with 3D crystal structures, interactive bands and DOS (Plotly) and an animation of the M1 → R structural transition.",
        ],
      },
    },
  ],
};
