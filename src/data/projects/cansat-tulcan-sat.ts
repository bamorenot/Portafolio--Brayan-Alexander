import type { Project } from "./types";

const dir = "/proyectos/cansat-tulcan-sat";

export const cansatTulcanSat: Project = {
  slug: "cansat-tulcan-sat",
  title: {
    es: "TULCAN-SAT: satélite enlatado para el Mundial CanSat 2025",
    en: "TULCAN-SAT: can-sized satellite for the 2025 CanSat World Cup",
  },
  category: { es: "Ingeniería aeroespacial · Trabajo en equipo", en: "Aerospace engineering · Teamwork" },
  summary: {
    es: "Satélite enlatado en formato CubeSat 2U con descenso por autogiro, telemetría LoRa y navegación GPS, desarrollado en equipo para el curso-concurso del Programa Espacial Universitario (PEU) de la UNAM. 8.º lugar y mejor equipo colombiano.",
    en: "Can-sized satellite in a 2U CubeSat format with autogyro descent, LoRa telemetry and GPS navigation, developed as a team for the UNAM University Space Program (PEU) competition. 8th place and best Colombian team.",
  },
  tags: ["STM32", "LoRa", "GPS", "GY-91", "Autogiro", "CubeSat 2U", "Telemetría", "Liderazgo de equipo"],
  cover: `${dir}/estructura-2u-madera.png`,
  year: "2025",
  recognition: {
    es: [
      "8.º lugar en el Mundial CanSat 2025 · Programa Espacial Universitario, UNAM (México)",
      "Mejor equipo colombiano de la competencia",
      "Finalista en el Mundial CanSat 2024 · UNAM",
      "Póster en Ciencia al Parque 2025 · Mesa de Investigaciones Cauca",
    ],
    en: [
      "8th place at the 2025 CanSat World Cup · University Space Program, UNAM (Mexico)",
      "Best Colombian team in the competition",
      "Finalist at the 2024 CanSat World Cup · UNAM",
      "Poster at Ciencia al Parque 2025 · Cauca Research Board",
    ],
  },
  facts: [
    { label: { es: "Resultado", en: "Result" }, value: { es: "8.º lugar · mejor equipo colombiano", en: "8th place · best Colombian team" } },
    { label: { es: "Rol", en: "Role" }, value: { es: "Líder del equipo", en: "Team leader" } },
    { label: { es: "Formato", en: "Form factor" }, value: { es: "CubeSat 2U en madera, < 700 g", en: "Wooden 2U CubeSat, < 700 g" } },
    { label: { es: "Liberación", en: "Release" }, value: { es: "Dron, 300 – 400 m de altura", en: "Drone, 300 – 400 m altitude" } },
    { label: { es: "Descenso", en: "Descent" }, value: { es: "Autogiro desplegado a 200 m, < 18 m/s", en: "Autogyro deployed at 200 m, < 18 m/s" } },
    { label: { es: "Electrónica", en: "Electronics" }, value: "STM32 · LoRa · GPS · GY-91" },
  ],
  sections: [
    {
      id: "equipo",
      title: { es: "Trabajo en equipo", en: "Teamwork" },
      paragraphs: {
        es: [
          "TULCAN-SAT es un proyecto colectivo: un equipo de seis estudiantes de la Universidad del Cauca diseñó, construyó y operó el satélite a lo largo de las cinco etapas del curso-concurso. Brayan Alexander Moreno Trullo lideró el equipo, articulando el trabajo de los subsistemas de estructura, electrónica, telemetría y descenso hasta el día de la liberación en la Ciudad de México.",
          "El resultado fue el 8.º lugar de la clasificación general y la mejor posición entre los equipos colombianos participantes.",
        ],
        en: [
          "TULCAN-SAT is a collective project: a team of six Universidad del Cauca students designed, built and operated the satellite through the five stages of the competition. Brayan Alexander Moreno Trullo led the team, coordinating the structure, electronics, telemetry and descent subsystems up to release day in Mexico City.",
          "The result was 8th place overall and the best ranking among the participating Colombian teams.",
        ],
      },
      figures: [
        {
          src: `${dir}/placa-equipo-ciudad-de-mexico.png`,
          alt: { es: "Placa del equipo TULCAN-SAT en Ciudad de México", en: "TULCAN-SAT team plaque in Mexico City" },
          caption: { es: "Placa del equipo con los nombres de sus integrantes, en Ciudad de México (mayo de 2025).", en: "Team plaque with the members' names, in Mexico City (May 2025)." },
        },
      ],
    },
    {
      id: "mision",
      title: { es: "La misión", en: "The mission" },
      paragraphs: {
        es: [
          "El Mundial CanSat 2025, organizado por el Programa Espacial Universitario (PEU) de la UNAM, plantea simular una misión espacial completa: un satélite del tamaño de una lata que integra los subsistemas de un satélite real (potencia, electrónica, sensores, estructura y telemetría) y que, acompañado de una estación terrena, cumple su misión desde la liberación hasta el aterrizaje.",
          "La edición 2025 se ambientó en el abastecimiento de un invernadero en Marte: el satélite debía transportar y proteger un «tripulante» (un huevo de gallina de 60 ± 10 g), semillas endémicas de la Reserva Ecológica del Pedregal de San Ángel y 125 ml de agua, mientras transmitía datos atmosféricos y de vuelo.",
        ],
        en: [
          "The 2025 CanSat World Cup, organized by UNAM's University Space Program (PEU), simulates a complete space mission: a can-sized satellite integrating the subsystems of a real satellite (power, electronics, sensors, structure and telemetry) that, together with a ground station, fulfils its mission from release to landing.",
          "The 2025 edition was set around supplying a greenhouse on Mars: the satellite had to carry and protect a “crew member” (a 60 ± 10 g hen's egg), native seeds from the Pedregal de San Ángel Ecological Reserve and 125 ml of water, while transmitting atmospheric and flight data.",
        ],
      },
      terms: [
        { term: { es: "Telemetría", en: "Telemetry" }, text: { es: "Presión, temperatura, velocidad, aceleración y CO₂ enviados a la estación terrena desde el despegue hasta 30 s después del aterrizaje.", en: "Pressure, temperature, velocity, acceleration and CO₂ sent to the ground station from lift-off until 30 s after landing." } },
        { term: { es: "Carga útil", en: "Payload" }, text: { es: "Huevo, semillas (≤ 10 cm³) y 125 ml de agua deben llegar intactos; se cargan en menos de 30 minutos el día de la competencia.", en: "Egg, seeds (≤ 10 cm³) and 125 ml of water must arrive intact; loaded in under 30 minutes on competition day." } },
        { term: { es: "Estructura", en: "Structure" }, text: { es: "Envolvente equivalente a 2 unidades CubeSat, fabricada en madera, con superficies continuas y protuberancias de máximo 1 cm.", en: "Envelope equivalent to 2 CubeSat units, built in wood, with continuous surfaces and protrusions of at most 1 cm." } },
        { term: { es: "Masa y potencia", en: "Mass and power" }, text: { es: "Masa total menor a 700 g con la carga útil; alimentación exclusiva con baterías cuadradas de 9 V e interruptor externo.", en: "Total mass under 700 g including payload; powered only by 9 V square batteries with an external switch." } },
        { term: { es: "Liberación", en: "Release" }, text: { es: "Elevado por un dron y liberado entre 300 y 400 m sobre el suelo, sujeto por un orificio central de 9–10 mm.", en: "Lifted by a drone and released between 300 and 400 m above ground, held by a 9–10 mm central hole." } },
        { term: { es: "Descenso", en: "Descent" }, text: { es: "Autogiro sin motor desplegado a 200 m, velocidad de caída menor a 18 m/s y guiado hacia una diana de 3 m de diámetro.", en: "Unpowered autogyro deployed at 200 m, descent rate under 18 m/s and guided toward a 3 m diameter target." } },
      ],
    },
    {
      id: "arquitectura",
      title: { es: "Arquitectura del satélite", en: "Satellite architecture" },
      terms: [
        { term: { es: "Computadora de vuelo · STM32", en: "Flight computer · STM32" }, text: { es: "Microcontrolador STM32 encargado de la adquisición de sensores, el control del despliegue y el empaquetado de la telemetría.", en: "STM32 microcontroller handling sensor acquisition, deployment control and telemetry packaging." } },
        { term: { es: "Telemetría · LoRa", en: "Telemetry · LoRa" }, text: { es: "Enlace de radio LoRa de largo alcance y bajo consumo entre el satélite y la estación terrena.", en: "Long-range, low-power LoRa radio link between the satellite and the ground station." } },
        { term: { es: "Navegación · GPS", en: "Navigation · GPS" }, text: { es: "Módulos GPS para posición y altitud durante el descenso y la localización del satélite tras el aterrizaje.", en: "GPS modules for position and altitude during descent and for locating the satellite after landing." } },
        { term: { es: "Sensores · GY-91", en: "Sensors · GY-91" }, text: { es: "Módulo GY-91 (MPU-9250 + BMP280): aceleración, velocidad angular y campo magnético en 9 ejes, junto con presión y temperatura.", en: "GY-91 module (MPU-9250 + BMP280): 9-axis acceleration, angular rate and magnetic field, plus pressure and temperature." } },
        { term: { es: "Descenso · autogiro", en: "Descent · autogyro" }, text: { es: "Rotor de aspas de madera montado en la cara opuesta a la sujeción, con mecanismo de despliegue accionado por servomotores.", en: "Wooden-blade rotor mounted on the face opposite the attachment, with a servo-driven deployment mechanism." } },
        { term: { es: "Estructura", en: "Structure" }, text: { es: "Chasis 2U en madera cortada y grabada con láser, con compartimentos para la electrónica y la carga útil.", en: "2U chassis in laser-cut and engraved wood, with compartments for the electronics and the payload." } },
      ],
      figures: [
        {
          src: `${dir}/prototipo-mecanismo-autogiro.png`,
          alt: { es: "Prototipo con el mecanismo del autogiro y servomotores", en: "Prototype with the autogyro mechanism and servos" },
          caption: { es: "Prototipo del mecanismo de despliegue del autogiro con servomotores sobre la estructura.", en: "Prototype of the autogyro deployment mechanism with servos on the structure." },
        },
        {
          src: `${dir}/estructura-2u-madera.png`,
          alt: { es: "Estructura 2U de madera grabada", en: "Engraved 2U wooden structure" },
          caption: { es: "Estructura 2U en madera grabada con láser.", en: "Laser-engraved 2U wooden structure." },
        },
        {
          src: `${dir}/logo-mision-rotor-autogiro.png`,
          alt: { es: "Logo de la misión TUL-CAN SAT y aspas del rotor", en: "TUL-CAN SAT mission patch and rotor blades" },
          caption: { es: "Insignia de la misión TUL-CAN SAT y aspas de madera del rotor.", en: "TUL-CAN SAT mission patch and wooden rotor blades." },
        },
      ],
    },
    {
      id: "etapas",
      title: { es: "Etapas del curso-concurso", en: "Competition stages" },
      paragraphs: {
        es: ["El desarrollo siguió la metodología de revisiones de una misión espacial real, con un documento de diseño evaluado en cada etapa."],
        en: ["Development followed the review methodology of a real space mission, with a design document evaluated at each stage."],
      },
      terms: [
        { term: { es: "CoDR · 10 de enero de 2025", en: "CoDR · January 10, 2025" }, text: { es: "Revisión de diseño conceptual: concepto de misión, subsistemas y requisitos.", en: "Conceptual design review: mission concept, subsystems and requirements." } },
        { term: { es: "PDR · 21 de febrero de 2025", en: "PDR · February 21, 2025" }, text: { es: "Revisión de diseño preliminar: selección de componentes y diseño inicial.", en: "Preliminary design review: component selection and initial design." } },
        { term: { es: "CDR · 4 de abril de 2025", en: "CDR · April 4, 2025" }, text: { es: "Revisión de diseño crítico: diseño final listo para fabricación e integración.", en: "Critical design review: final design ready for manufacturing and integration." } },
        { term: { es: "Pruebas · 14 al 24 de abril de 2025", en: "Tests · April 14–24, 2025" }, text: { es: "Pruebas de funcionamiento del satélite y la estación terrena.", en: "Functional tests of the satellite and the ground station." } },
        { term: { es: "Liberación · mayo de 2025", en: "Release · May 2025" }, text: { es: "Lanzamiento desde dron en Ciudad Universitaria (UNAM) y entrega del reporte de análisis de misión.", en: "Drone release at Ciudad Universitaria (UNAM) and delivery of the mission analysis report." } },
        { term: { es: "Premiación · 26 de mayo de 2025", en: "Awards · May 26, 2025" }, text: { es: "8.º lugar general y mejor equipo colombiano.", en: "8th place overall and best Colombian team." } },
      ],
    },
  ],
};
