import type { Project } from "./types";

const dir = "/proyectos/modelo-ising-vo2";

export const modeloIsingVo2: Project = {
  slug: "modelo-ising-vo2",
  title: {
    es: "Modelo de Ising 2D para la transición metal–aislante del VO₂",
    en: "2D Ising model for the VO₂ metal–insulator transition",
  },
  category: { es: "Física estadística computacional", en: "Computational statistical physics" },
  summary: {
    es: "Simulación Monte Carlo (Metropolis-Hastings) de un modelo de Ising 2D que representa los estados electrónicos localizados y deslocalizados del vanadio en el VO₂, con análisis termodinámico y cuántico.",
    en: "Monte Carlo (Metropolis-Hastings) simulation of a 2D Ising model representing localized and delocalized vanadium electronic states in VO₂, with thermodynamic and quantum analysis.",
  },
  tags: ["Python", "NumPy", "SciPy", "Monte Carlo", "Metropolis-Hastings", "Matplotlib", "Jupyter"],
  cover: `${dir}/configuracion-espines-340k.webp`,
  facts: [
    { label: { es: "Red", en: "Lattice" }, value: { es: "Cuadrada 50 × 50, condiciones periódicas", en: "Square 50 × 50, periodic boundaries" } },
    { label: { es: "Algoritmo", en: "Algorithm" }, value: "Metropolis-Hastings" },
    { label: { es: "Barridos", en: "Sweeps" }, value: { es: "1 000 de termalización + 5 000 de medición", en: "1,000 thermalization + 5,000 measurement" } },
    { label: { es: "Barrido térmico", en: "Temperature scan" }, value: { es: "280 – 400 K, 30 temperaturas", en: "280 – 400 K, 30 temperatures" } },
    { label: { es: "Referencia experimental", en: "Experimental reference" }, value: "Tc = 340 K" },
    { label: { es: "Máximo de χ", en: "Peak of χ" }, value: "317.9 K" },
  ],
  sections: [
    {
      id: "objetivo",
      title: { es: "Objetivo", en: "Objective" },
      paragraphs: {
        es: [
          "El dióxido de vanadio presenta una transición metal–aislante cerca de 340 K (67 °C), acompañada de un cambio estructural de la fase monoclínica M1 (aislante, dímeros V–V) a la fase rutilo R (metálica). El proyecto modela esta transición con un modelo de Ising 2D en el que cada espín representa el estado electrónico de un átomo de vanadio: s = −1 localizado (aislante) y s = +1 deslocalizado (metálico).",
        ],
        en: [
          "Vanadium dioxide undergoes a metal–insulator transition near 340 K (67 °C), coupled to a structural change from the monoclinic M1 phase (insulating, V–V dimers) to the rutile R phase (metallic). The project models this transition with a 2D Ising model in which each spin represents the electronic state of a vanadium atom: s = −1 localized (insulating) and s = +1 delocalized (metallic).",
        ],
      },
    },
    {
      id: "modelo",
      title: { es: "Modelo y método", en: "Model and method" },
      paragraphs: {
        es: [
          "Hamiltoniano H = −J Σ⟨ij⟩ sᵢsⱼ − h Σᵢ sᵢ sobre una red cuadrada L × L con condiciones de frontera periódicas (L = 50, J = 1, h = 0). El muestreo se realiza con el algoritmo de Metropolis-Hastings con cálculo local de ΔE, termalización de 1 000 barridos y 5 000–8 000 barridos de medición por temperatura.",
          "La implementación (≈ 3 500 líneas en 7 módulos) separa el modelo, el motor Monte Carlo, los observables, la parte cuántica y la visualización, e incluye un notebook interactivo.",
        ],
        en: [
          "Hamiltonian H = −J Σ⟨ij⟩ sᵢsⱼ − h Σᵢ sᵢ on an L × L square lattice with periodic boundary conditions (L = 50, J = 1, h = 0). Sampling uses the Metropolis-Hastings algorithm with local ΔE evaluation, 1,000 thermalization sweeps and 5,000–8,000 measurement sweeps per temperature.",
          "The implementation (≈ 3,500 lines across 7 modules) separates the model, Monte Carlo engine, observables, quantum solver and visualization, and includes an interactive notebook.",
        ],
      },
      terms: [
        { term: { es: "Observables", en: "Observables" }, text: { es: "Magnetización ⟨|M|⟩, energía ⟨E⟩, calor específico C_v = ⟨ΔE²⟩/(k_B T²), susceptibilidad χ = ⟨ΔM²⟩/(k_B T) y cumulante de Binder.", en: "Magnetization ⟨|M|⟩, energy ⟨E⟩, specific heat C_v = ⟨ΔE²⟩/(k_B T²), susceptibility χ = ⟨ΔM²⟩/(k_B T) and Binder cumulant." } },
        { term: { es: "Estadística", en: "Statistics" }, text: { es: "Errores por Jackknife y promedio por bloques, tiempo de autocorrelación integrado.", en: "Jackknife and block-averaging errors, integrated autocorrelation time." } },
        { term: { es: "Correlaciones", en: "Correlations" }, text: { es: "Función de correlación espacial C(r), longitud de correlación y factor de estructura S(k).", en: "Spatial correlation function C(r), correlation length and structure factor S(k)." } },
        { term: { es: "Parte cuántica", en: "Quantum part" }, text: { es: "Ising con campo transversal (Γ = 0,5) resuelto por diagonalización exacta con matrices dispersas para N = 8 espines (2⁸ = 256 estados): espectro, estado base y gap E₁ − E₀.", en: "Transverse-field Ising model (Γ = 0.5) solved by sparse exact diagonalization for N = 8 spins (2⁸ = 256 states): spectrum, ground state and gap E₁ − E₀." } },
      ],
    },
    {
      id: "configuraciones",
      title: { es: "Configuraciones de espines", en: "Spin configurations" },
      paragraphs: {
        es: [
          "Configuraciones de equilibrio de la red para temperaturas entre 200 K y 500 K. Rojo: s = +1 (deslocalizado); gris: s = −1 (localizado).",
        ],
        en: [
          "Equilibrium lattice configurations for temperatures between 200 K and 500 K. Red: s = +1 (delocalized); grey: s = −1 (localized).",
        ],
      },
      figures: [
        {
          src: `${dir}/configuraciones-200k-500k.webp`,
          alt: { es: "Configuraciones de espines de 200 K a 500 K", en: "Spin configurations from 200 K to 500 K" },
          caption: { es: "Red 50 × 50 a 200, 280, 340, 380 y 500 K.", en: "50 × 50 lattice at 200, 280, 340, 380 and 500 K." },
        },
        {
          src: `${dir}/configuraciones-250k-340k-450k.webp`,
          alt: { es: "Configuraciones a 250 K, 340 K y 450 K", en: "Configurations at 250 K, 340 K and 450 K" },
          caption: { es: "Red 30 × 30 a 250, 340 y 450 K.", en: "30 × 30 lattice at 250, 340 and 450 K." },
        },
        {
          src: `${dir}/configuracion-espines-340k.webp`,
          alt: { es: "Configuración de espines a 340 K", en: "Spin configuration at 340 K" },
          caption: { es: "Configuración a T = 340 K (⟨|M|⟩ = 0,027).", en: "Configuration at T = 340 K (⟨|M|⟩ = 0.027)." },
        },
      ],
    },
    {
      id: "diagrama-fase",
      title: { es: "Diagrama de fase", en: "Phase diagram" },
      paragraphs: {
        es: [
          "Barrido de 30 temperaturas entre 280 K y 400 K con los cuatro observables termodinámicos. La susceptibilidad magnética presenta su máximo en T = 317,9 K, frente a la referencia experimental de 340 K. La magnetización se mantiene en ⟨|M|⟩ ≈ 0,025 en todo el intervalo y el calor específico alcanza su valor máximo en el extremo inferior del barrido (280 K).",
        ],
        en: [
          "Scan of 30 temperatures between 280 K and 400 K with the four thermodynamic observables. Magnetic susceptibility peaks at T = 317.9 K, against the 340 K experimental reference. Magnetization stays at ⟨|M|⟩ ≈ 0.025 across the range and specific heat reaches its maximum at the lower end of the scan (280 K).",
        ],
      },
      figures: [
        {
          src: `${dir}/diagrama-de-fase.webp`,
          alt: { es: "Diagrama de fase: magnetización, energía, calor específico y susceptibilidad", en: "Phase diagram: magnetization, energy, specific heat and susceptibility" },
          caption: { es: "Magnetización, energía por espín, calor específico y susceptibilidad frente a la temperatura.", en: "Magnetization, energy per spin, specific heat and susceptibility versus temperature." },
        },
      ],
    },
  ],
};
