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
      "Intervenciones preventivas y correctivas sobre infraestructura edilicia, instalaciones electricas, climatizacion y soluciones metalmecanicas para sostener espacios operativos.",
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
          "Mantenimiento preventivo y correctivo para edificios, areas operativas e instalaciones de uso intensivo.",
        description:
          "Intervenciones orientadas a conservar infraestructura, resolver fallas, ejecutar reparaciones y sostener condiciones seguras de funcionamiento en espacios corporativos, industriales, institucionales y comerciales.",
        image: "/images/servicios/mantenimiento-edilicio.webp",
        areas: [
          {
            title: "Mantenimiento preventivo",
            summary: "Rutinas de inspeccion, control y correccion temprana para reducir paradas y deterioro.",
          },
          {
            title: "Mantenimiento correctivo",
            summary: "Respuesta tecnica ante fallas, roturas, filtraciones, desgaste o deterioros de uso.",
          },
          {
            title: "Adecuaciones edilicias",
            summary: "Mejoras, reparaciones y adaptaciones de espacios segun necesidad operativa.",
          },
        ],
        subservices: [
          "Reparaciones generales",
          "Mantenimiento de cubiertas y cerramientos",
          "Terminaciones y mejoras de espacios",
          "Intervenciones en areas operativas",
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
        title: "Montaje y mantenimiento electrico",
        summary:
          "Montajes, adecuaciones y mantenimiento de instalaciones electricas para entornos operativos y productivos.",
        description:
          "Servicio orientado a instalaciones electricas nuevas, ampliaciones, mantenimiento preventivo, correccion de fallas y adecuaciones tecnicas en obras, plantas, edificios y espacios de servicio.",
        image: "/images/servicios/mantenimiento-electrico.webp",
        areas: [
          {
            title: "Montajes electricos",
            summary: "Ejecucion de instalaciones, canalizaciones, tableros y tendidos segun alcance requerido.",
          },
          {
            title: "Mantenimiento electrico",
            summary: "Control, diagnostico y correccion de fallas para continuidad operativa.",
          },
          {
            title: "Adecuaciones tecnicas",
            summary: "Mejoras y adaptaciones de instalaciones existentes para nuevos usos o requerimientos.",
          },
        ],
        subservices: [
          "Instalaciones electricas",
          "Canalizaciones y tendidos",
          "Mantenimiento de tableros",
          "Diagnostico y correccion de fallas",
        ],
        tasks: [
          "Relevar requerimientos electricos del espacio.",
          "Ejecutar montajes y adecuaciones tecnicas.",
          "Controlar estado de instalaciones existentes.",
          "Resolver fallas y necesidades de mantenimiento.",
        ],
        applications: [
          "Plantas industriales",
          "Hoteles",
          "Locales gastronomicos",
          "Oficinas",
          "Edificios institucionales",
          "Obras y ampliaciones",
        ],
        ctaLabel: "Consultar por montaje electrico",
      },
      {
        slug: "aire-acondicionado",
        title: "Aire acondicionado",
        summary:
          "Instalacion, mantenimiento y asistencia tecnica para sistemas de climatizacion en espacios corporativos, comerciales e industriales.",
        description:
          "Servicio para sostener el rendimiento de equipos de climatizacion, mejorar condiciones de confort y resolver necesidades de instalacion, limpieza, mantenimiento o reparacion segun el tipo de espacio.",
        image: "/images/servicios/mantenimiento-aire.webp",
        areas: [
          {
            title: "Instalacion",
            summary: "Montaje de equipos y puesta en servicio segun condiciones del lugar.",
          },
          {
            title: "Mantenimiento",
            summary: "Limpieza, control y tareas preventivas para conservar rendimiento.",
          },
          {
            title: "Servicio tecnico",
            summary: "Diagnostico y correccion de fallas en equipos y sistemas instalados.",
          },
        ],
        subservices: [
          "Instalacion de equipos",
          "Limpieza y mantenimiento preventivo",
          "Revision de funcionamiento",
          "Diagnostico de fallas",
        ],
        tasks: [
          "Evaluar condiciones del ambiente y requerimientos de uso.",
          "Instalar o adecuar equipos de climatizacion.",
          "Limpiar componentes y verificar funcionamiento.",
          "Resolver fallas detectadas en servicio.",
        ],
        applications: [
          "Oficinas",
          "Hoteles",
          "Locales comerciales",
          "Areas administrativas",
          "Espacios gastronomicos",
          "Ambientes de trabajo",
        ],
        ctaLabel: "Solicitar servicio de climatizacion",
      },
      {
        slug: "metalmecanica",
        title: "Metalmecanica",
        summary:
          "Fabricacion, montaje y mantenimiento de soluciones metalicas para infraestructura, industria y espacios operativos.",
        description:
          "Servicio enfocado en estructuras, soportes, reparaciones, piezas y montajes metalicos que requieren ejecucion practica, criterio tecnico y adaptacion a las condiciones reales del lugar.",
        image: "/images/servicios/mantenimiento-mecanico.webp",
        areas: [
          {
            title: "Fabricacion",
            summary: "Construccion de piezas, estructuras y soluciones metalicas segun necesidad.",
          },
          {
            title: "Montaje",
            summary: "Instalacion en sitio de estructuras, soportes y componentes metalicos.",
          },
          {
            title: "Mantenimiento metalico",
            summary: "Reparacion, refuerzo y adecuacion de elementos existentes.",
          },
        ],
        subservices: [
          "Estructuras metalicas",
          "Soportes y herreria tecnica",
          "Reparaciones metalicas",
          "Montajes en sitio",
        ],
        tasks: [
          "Relevar medidas, uso y condiciones de montaje.",
          "Fabricar componentes o estructuras requeridas.",
          "Montar y ajustar soluciones en obra o planta.",
          "Reparar, reforzar o adecuar elementos metalicos existentes.",
        ],
        applications: [
          "Industria",
          "Infraestructura",
          "Depositos",
          "Areas de servicio",
          "Edificios operativos",
          "Obras de mejora",
        ],
        ctaLabel: "Consultar por metalmecanica",
      },
    ],
  },
  {
    slug: "limpieza-industrial",
    title: "Limpieza Industrial",
    summary:
      "Limpieza profesional para oficinas, areas tecnicas y entornos industriales que requieren higiene operativa, orden de trabajo y continuidad de uso.",
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
          "Limpieza planificada para mantener oficinas, areas comunes, salas de reunion y espacios de atencion en condiciones prolijas, higienicas y funcionales.",
        image: "/images/servicios/limpieza-oficina.webp",
        areas: [
          {
            title: "Rutinas programadas",
            summary: "Frecuencias de limpieza organizadas segun circulacion, horarios y necesidades del cliente.",
          },
          {
            title: "Areas comunes",
            summary: "Atencion de espacios compartidos, accesos, sanitarios y zonas de trabajo.",
          },
          {
            title: "Soporte operativo",
            summary: "Refuerzos o intervenciones puntuales para eventos, cambios de uso o necesidades especiales.",
          },
        ],
        subservices: [
          "Limpieza diaria o periodica",
          "Sanitarios y areas comunes",
          "Puestos de trabajo",
          "Vidrios, accesos y circulaciones",
        ],
        tasks: [
          "Organizar rutinas por sector y frecuencia.",
          "Limpiar superficies, mobiliario y areas de uso comun.",
          "Mantener sanitarios y espacios de circulacion.",
          "Realizar controles de orden e higiene.",
        ],
        applications: [
          "Oficinas administrativas",
          "Empresas",
          "Instituciones",
          "Locales comerciales",
          "Recepciones",
          "Salas de reunion",
        ],
        ctaLabel: "Solicitar limpieza de oficinas",
      },
      {
        slug: "limpieza-tecnica-industrial",
        title: "Limpieza tecnica industrial",
        summary:
          "Limpieza especializada para plantas, sectores productivos, areas tecnicas y espacios con requerimientos operativos.",
        description:
          "Intervenciones de limpieza orientadas a entornos industriales donde se requiere planificacion, cuidado de instalaciones, coordinacion con operaciones y ejecucion segun condiciones de seguridad y uso.",
        image: "/images/servicios/limpieza-tecnica-industrial.webp",
        areas: [
          {
            title: "Sectores productivos",
            summary: "Limpieza de areas de trabajo, circulacion y soporte a la operacion.",
          },
          {
            title: "Areas tecnicas",
            summary: "Intervenciones cuidadas en espacios con instalaciones, equipos o requerimientos especificos.",
          },
          {
            title: "Limpiezas puntuales",
            summary: "Acciones intensivas por mantenimiento, obra, puesta a punto o necesidades operativas.",
          },
        ],
        subservices: [
          "Limpieza de areas industriales",
          "Limpieza post obra o post mantenimiento",
          "Ordenamiento de sectores tecnicos",
          "Intervenciones programadas en planta",
        ],
        tasks: [
          "Relevar sectores, riesgos y condiciones de trabajo.",
          "Planificar la intervencion con criterio operativo.",
          "Ejecutar limpieza tecnica por area y prioridad.",
          "Entregar sectores en condiciones de uso.",
        ],
        applications: [
          "Plantas industriales",
          "Depositos",
          "Talleres",
          "Areas tecnicas",
          "Lineas de trabajo",
          "Espacios post obra",
        ],
        ctaLabel: "Coordinar limpieza industrial",
      },
    ],
  },
  {
    slug: "mantenimiento-gastronomico",
    title: "Mantenimiento Gastronomico",
    summary:
      "Soporte tecnico para cocinas comerciales, comedores, bares, restaurantes e instituciones que necesitan instalaciones funcionales, limpias y operativas.",
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
        title: "Mantenimiento Gastronomico",
        summary:
          "Servicio integral para restaurantes, cocinas, bares y areas de servicio gastronomico.",
        description:
          "Mantenimiento orientado a sostener la operacion diaria de espacios gastronomicos mediante reparaciones, adecuaciones, limpieza tecnica, soporte edilicio y coordinacion de intervenciones con baja interferencia operativa.",
        image: "/images/servicios/gastronomia-image.webp",
        areas: [
          {
            title: "Cocinas y areas de produccion",
            summary: "Intervenciones en sectores de trabajo intensivo con foco en continuidad y orden.",
          },
          {
            title: "Salon y areas de atencion",
            summary: "Mantenimiento de espacios visibles donde la presentacion y el funcionamiento son criticos.",
          },
          {
            title: "Soporte tecnico general",
            summary: "Resolucion de necesidades edilicias, electricas, metalicas y de climatizacion asociadas al local.",
          },
        ],
        subservices: [
          "Mantenimiento edilicio gastronomico",
          "Soporte electrico y de instalaciones",
          "Climatizacion y ventilacion",
          "Reparaciones y adecuaciones operativas",
        ],
        tasks: [
          "Relevar puntos criticos del local y su operacion.",
          "Ejecutar tareas preventivas y correctivas.",
          "Coordinar intervenciones segun horarios de servicio.",
          "Resolver reparaciones urgentes o mejoras programadas.",
        ],
        applications: [
          "Restaurantes",
          "Bares",
          "Cocinas industriales",
          "Hoteles con servicio gastronomico",
          "Comedores",
          "Locales de atencion al publico",
        ],
        ctaLabel: "Solicitar mantenimiento gastronomico",
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
