export type ServiceArea = {
  title: string
  summary: string
}

export type BlessedService = {
  slug: string
  title: string
  summary: string
  description: string
  image?: string
  gallery?: string[]
  areas: ServiceArea[]
  subservices: string[]
  tasks: string[]
  applications: string[]
  ctaLabel: string
}

export type ServiceBlock = {
  slug: string
  title: string
  summary: string
  image: string
  imageAlt: string
  heroImage: string
  gallery?: string[]
  services: BlessedService[]
}

export type OperationalAsset = {
  src: string
  title: string
  summary: string
}

export const serviceBlocks = [
  {
    slug: "mantenimiento-y-montajes",
    title: "Mantenimiento y Montajes",
    summary:
      "Intervenciones preventivas y correctivas sobre infraestructura edilicia, instalaciones eléctricas, climatización y soluciones metalmecánicas para sostener espacios operativos.",
    image: "/images/servicios/mantenimiento-montaje1.webp",
    imageAlt: "Equipo de Blessed realizando trabajos de mantenimiento, montaje industrial, electricidad y metalmecánica en planta",
    heroImage: "/images/servicios/mantenimiento-montaje1.webp",
    gallery: [
      "/images/servicios/mantenimiento-montaje2.webp",
      "/images/servicios/mantenimiento-moontaje3.webp",
      "/images/servicios/mantenimiento-edilicio.webp",
      "/images/servicios/mantenimiento-electrico.webp",
      "/images/servicios/mantenimiento-aire.webp",
      "/images/servicios/mantenimiento-mecanico.webp",
    ],
    services: [
      {
        slug: "mantenimiento-edilicio",
        title: "Mantenimiento edilicio",
        summary:
          "Mantenimiento preventivo y correctivo para edificios, áreas operativas e instalaciones de uso intensivo.",
        description:
          "Intervenciones orientadas a conservar infraestructura, resolver fallas, ejecutar reparaciones y sostener condiciones seguras de funcionamiento en espacios corporativos, industriales, institucionales y comerciales.",
        image: "/images/servicios/mantenimiento-edilicio.webp",
        areas: [
          {
            title: "Mantenimiento preventivo",
            summary: "Rutinas de inspección, control y corrección temprana para reducir paradas y deterioro.",
          },
          {
            title: "Mantenimiento correctivo",
            summary: "Respuesta técnica ante fallas, roturas, filtraciones, desgaste o deterioros de uso.",
          },
          {
            title: "Adecuaciones edilicias",
            summary: "Mejoras, reparaciones y adaptaciones de espacios según necesidad operativa.",
          },
        ],
        subservices: [
          "Reparaciones generales",
          "Mantenimiento de cubiertas y cerramientos",
          "Terminaciones y mejoras de espacios",
          "Intervenciones en áreas operativas",
        ],
        tasks: [
          "Relevar el estado de instalaciones y superficies.",
          "Ejecutar reparaciones preventivas y correctivas.",
          "Coordinar intervenciones por prioridad operativa.",
          "Realizar seguimiento de tareas y necesidades detectadas.",
        ],
        applications: [
          "Industrias",
          "Hoteles",
          "Oficinas",
          "Locales comerciales",
          "Instituciones",
          "Edificios operativos",
        ],
        ctaLabel: "Solicitar mantenimiento edilicio",
      },
      {
        slug: "montaje-y-mantenimiento-electrico",
        title: "Montaje y mantenimiento eléctrico",
        summary:
          "Montajes, adecuaciones y mantenimiento de instalaciones eléctricas para entornos operativos y productivos.",
        description:
          "Servicio orientado a instalaciones eléctricas nuevas, ampliaciones, mantenimiento preventivo, corrección de fallas y adecuaciones técnicas en obras, plantas, edificios y espacios de servicio.",
        image: "/images/servicios/mantenimiento-electrico.webp",
        areas: [
          {
            title: "Montajes eléctricos",
            summary: "Ejecución de instalaciones, canalizaciones, tableros y tendidos según alcance requerido.",
          },
          {
            title: "Mantenimiento eléctrico",
            summary: "Control, diagnóstico y corrección de fallas para continuidad operativa.",
          },
          {
            title: "Adecuaciones técnicas",
            summary: "Mejoras y adaptaciones de instalaciones existentes para nuevos usos o requerimientos.",
          },
        ],
        subservices: [
          "Instalaciones eléctricas",
          "Canalizaciones y tendidos",
          "Mantenimiento de tableros",
          "Diagnóstico y corrección de fallas",
        ],
        tasks: [
          "Relevar requerimientos eléctricos del espacio.",
          "Ejecutar montajes y adecuaciones técnicas.",
          "Controlar estado de instalaciones existentes.",
          "Resolver fallas y necesidades de mantenimiento.",
        ],
        applications: [
          "Plantas industriales",
          "Hoteles",
          "Locales gastronómicos",
          "Oficinas",
          "Edificios institucionales",
          "Obras y ampliaciones",
        ],
        ctaLabel: "Consultar por montaje eléctrico",
      },
      {
        slug: "aire-acondicionado",
        title: "Aire acondicionado",
        summary:
          "Instalación, mantenimiento y asistencia técnica para sistemas de climatización en espacios corporativos, comerciales e industriales.",
        description:
          "Servicio para sostener el rendimiento de equipos de climatización, mejorar condiciones de confort y resolver necesidades de instalación, limpieza, mantenimiento o reparación según el tipo de espacio.",
        image: "/images/servicios/mantenimiento-aire.webp",
        areas: [
          {
            title: "Instalación",
            summary: "Montaje de equipos y puesta en servicio según condiciones del lugar.",
          },
          {
            title: "Mantenimiento",
            summary: "Limpieza, control y tareas preventivas para conservar rendimiento.",
          },
          {
            title: "Servicio técnico",
            summary: "Diagnóstico y corrección de fallas en equipos y sistemas instalados.",
          },
        ],
        subservices: [
          "Instalación de equipos",
          "Limpieza y mantenimiento preventivo",
          "Revisión de funcionamiento",
          "Diagnóstico de fallas",
        ],
        tasks: [
          "Evaluar condiciones del ambiente y requerimientos de uso.",
          "Instalar o adecuar equipos de climatización.",
          "Limpiar componentes y verificar funcionamiento.",
          "Resolver fallas detectadas en servicio.",
        ],
        applications: [
          "Oficinas",
          "Hoteles",
          "Locales comerciales",
          "Áreas administrativas",
          "Espacios gastronómicos",
          "Ambientes de trabajo",
        ],
        ctaLabel: "Solicitar servicio de climatización",
      },
      {
        slug: "metalmecanica",
        title: "Metalmecánica",
        summary:
          "Fabricación, montaje y mantenimiento de soluciones metálicas para infraestructura, industria y espacios operativos.",
        description:
          "Servicio enfocado en estructuras, soportes, reparaciones, piezas y montajes metálicos que requieren ejecución práctica, criterio técnico y adaptación a las condiciones reales del lugar.",
        image: "/images/servicios/mantenimiento-mecanico.webp",
        areas: [
          {
            title: "Fabricación",
            summary: "Construcción de piezas, estructuras y soluciones metálicas según necesidad.",
          },
          {
            title: "Montaje",
            summary: "Instalación en sitio de estructuras, soportes y componentes metálicos.",
          },
          {
            title: "Mantenimiento metálico",
            summary: "Reparación, refuerzo y adecuación de elementos existentes.",
          },
        ],
        subservices: [
          "Estructuras metálicas",
          "Soportes y herrería técnica",
          "Reparaciones metálicas",
          "Montajes en sitio",
        ],
        tasks: [
          "Relevar medidas, uso y condiciones de montaje.",
          "Fabricar componentes o estructuras requeridas.",
          "Montar y ajustar soluciones en obra o planta.",
          "Reparar, reforzar o adecuar elementos metálicos existentes.",
        ],
        applications: [
          "Industria",
          "Infraestructura",
          "Depósitos",
          "Áreas de servicio",
          "Edificios operativos",
          "Obras de mejora",
        ],
        ctaLabel: "Consultar por metalmecánica",
      },
    ],
  },
  {
    slug: "limpieza-industrial",
    title: "Limpieza Industrial",
    summary:
      "Limpieza profesional para oficinas, áreas técnicas y entornos industriales que requieren higiene operativa, orden de trabajo y continuidad de uso.",
    image: "/images/servicios/limpieza-tecnica-industrial.webp",
    imageAlt: "Equipo de Blessed realizando limpieza técnica industrial en una planta productiva",
    heroImage: "/images/servicios/limpieza-tecnica-industrial.webp",
    gallery: [
      "/images/servicios/limpieza-oficina.webp",
      "/images/servicios/limpiezaoficina-image.png",
      "/images/servicios/limpieza-tecnica-industrial.webp",
    ],
    services: [
      {
        slug: "limpieza-de-oficinas",
        title: "Limpieza de oficinas",
        summary:
          "Servicio de limpieza para espacios administrativos, comerciales y corporativos con rutinas adaptadas al uso diario.",
        description:
          "Limpieza planificada para mantener oficinas, áreas comunes, salas de reunión y espacios de atención en condiciones prolijas, higiénicas y funcionales.",
        image: "/images/servicios/limpieza-oficina.webp",
        areas: [
          {
            title: "Rutinas programadas",
            summary: "Frecuencias de limpieza organizadas según circulación, horarios y necesidades del cliente.",
          },
          {
            title: "Áreas comunes",
            summary: "Atención de espacios compartidos, accesos, sanitarios y zonas de trabajo.",
          },
          {
            title: "Soporte operativo",
            summary: "Refuerzos o intervenciones puntuales para eventos, cambios de uso o necesidades especiales.",
          },
        ],
        subservices: [
          "Limpieza diaria o periódica",
          "Sanitarios y áreas comunes",
          "Puestos de trabajo",
          "Vidrios, accesos y circulaciones",
        ],
        tasks: [
          "Organizar rutinas por sector y frecuencia.",
          "Limpiar superficies, mobiliario y áreas de uso común.",
          "Mantener sanitarios y espacios de circulación.",
          "Realizar controles de orden e higiene.",
        ],
        applications: [
          "Oficinas administrativas",
          "Empresas",
          "Instituciones",
          "Locales comerciales",
          "Recepciones",
          "Salas de reunión",
        ],
        ctaLabel: "Solicitar limpieza de oficinas",
      },
      {
        slug: "limpieza-tecnica-industrial",
        title: "Limpieza técnica industrial",
        summary:
          "Limpieza especializada para plantas, sectores productivos, áreas técnicas y espacios con requerimientos operativos.",
        description:
          "Intervenciones de limpieza orientadas a entornos industriales donde se requiere planificación, cuidado de instalaciones, coordinación con operaciones y ejecución según condiciones de seguridad y uso.",
        image: "/images/servicios/limpieza-tecnica-industrial.webp",
        areas: [
          {
            title: "Sectores productivos",
            summary: "Limpieza de áreas de trabajo, circulación y soporte a la operación.",
          },
          {
            title: "Áreas técnicas",
            summary: "Intervenciones cuidadas en espacios con instalaciones, equipos o requerimientos específicos.",
          },
          {
            title: "Limpiezas puntuales",
            summary: "Acciones intensivas por mantenimiento, obra, puesta a punto o necesidades operativas.",
          },
        ],
        subservices: [
          "Limpieza de áreas industriales",
          "Limpieza post obra o post mantenimiento",
          "Ordenamiento de sectores técnicos",
          "Intervenciones programadas en planta",
        ],
        tasks: [
          "Relevar sectores, riesgos y condiciones de trabajo.",
          "Planificar la intervención con criterio operativo.",
          "Ejecutar limpieza técnica por área y prioridad.",
          "Entregar sectores en condiciones de uso.",
        ],
        applications: [
          "Plantas industriales",
          "Depósitos",
          "Talleres",
          "Áreas técnicas",
          "Líneas de trabajo",
          "Espacios post obra",
        ],
        ctaLabel: "Coordinar limpieza industrial",
      },
    ],
  },
  {
    slug: "mantenimiento-gastronomico",
    title: "Mantenimiento Gastronómico",
    summary:
      "Soporte técnico para cocinas comerciales, comedores, bares, restaurantes e instituciones que necesitan instalaciones funcionales, limpias y operativas.",
    image: "/images/servicios/mantenimiento-gastronomico-image.webp",
    imageAlt: "Equipo de Blessed realizando mantenimiento técnico en cocina industrial y equipamiento gastronómico",
    heroImage: "/images/servicios/mantenimiento-gastronomico-image.webp",
    gallery: [
      "/images/servicios/mantenimiento-gastronomico-image.webp",
      "/images/servicios/gastronomia-image.webp",
    ],
    services: [
      {
        slug: "mantenimiento-gastronomico",
        title: "Mantenimiento Gastronómico",
        summary:
          "Servicio integral para restaurantes, cocinas, bares y áreas de servicio gastronómico.",
        description:
          "Mantenimiento orientado a sostener la operación diaria de espacios gastronómicos mediante reparaciones, adecuaciones, limpieza técnica, soporte edilicio y coordinación de intervenciones con baja interferencia operativa.",
        image: "/images/servicios/gastronomia-image.webp",
        areas: [
          {
            title: "Cocinas y áreas de producción",
            summary: "Intervenciones en sectores de trabajo intensivo con foco en continuidad y orden.",
          },
          {
            title: "Salón y áreas de atención",
            summary: "Mantenimiento de espacios visibles donde la presentación y el funcionamiento son críticos.",
          },
          {
            title: "Soporte técnico general",
            summary: "Resolución de necesidades edilicias, eléctricas, metálicas y de climatización asociadas al local.",
          },
        ],
        subservices: [
          "Mantenimiento edilicio gastronómico",
          "Soporte eléctrico y de instalaciones",
          "Climatización y ventilación",
          "Reparaciones y adecuaciones operativas",
        ],
        tasks: [
          "Relevar puntos críticos del local y su operación.",
          "Ejecutar tareas preventivas y correctivas.",
          "Coordinar intervenciones según horarios de servicio.",
          "Resolver reparaciones urgentes o mejoras programadas.",
        ],
        applications: [
          "Restaurantes",
          "Bares",
          "Cocinas industriales",
          "Hoteles con servicio gastronómico",
          "Comedores",
          "Locales de atención al público",
        ],
        ctaLabel: "Solicitar mantenimiento gastronómico",
      },
    ],
  },
] satisfies ServiceBlock[]

export const services = serviceBlocks.flatMap((block) => block.services)

export type ServiceSlug = (typeof services)[number]["slug"]
export type ServiceBlockSlug = (typeof serviceBlocks)[number]["slug"]

export function getServiceBlockBySlug(slug: ServiceBlockSlug) {
  return serviceBlocks.find((block) => block.slug === slug)
}
