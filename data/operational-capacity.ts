export type OperationalVehicle = {
  title: string
  plate?: string
  description: string
  image: string
  tag: string
}

export type EquipmentCategory = {
  title: string
  description: string
  items: string[]
}

export type LogisticsPoint = {
  title: string
  description: string
}

export const vehicles = [
  {
    title: "Chevrolet S10",
    plate: "AC992YA",
    description: "Unidad destinada a supervisión, coordinación operativa y logística liviana en campo.",
    image: "/images/vehiculos/movil-01.webp",
    tag: "Supervisión",
  },
  {
    title: "Fiat Ducato con grúa",
    plate: "CIF511",
    description: "Unidad equipada con grúa de 1.000 tonelámetro para trabajos de izaje, asistencia técnica y apoyo operativo.",
    image: "/images/vehiculos/movil-06.webp",
    tag: "Izaje",
  },
  {
    title: "Renault Kangoo",
    plate: "IZJ873",
    description: "Unidad de soporte técnico para traslado de herramientas, insumos y asistencia en servicios programados.",
    image: "/images/vehiculos/kangoo.webp",
    tag: "Soporte técnico",
  },
  {
    title: "Peugeot Partner",
    plate: "AA071DS",
    description: "Unidad afectada a operaciones diarias, logística operativa y asistencia en tareas de mantenimiento.",
    image: "/images/vehiculos/movil-02.webp",
    tag: "Logística",
  },
  {
    title: "Renault Duster Oroch Outsider",
    plate: "AB827QE",
    description: "Unidad preparada para acceso a terrenos exigentes, relevamientos y asistencia en zonas de difícil ingreso.",
    image: "/images/vehiculos/movil-04.webp",
    tag: "Terreno",
  },
  {
    title: "Peugeot Partner",
    plate: "AA071DT",
    description: "Unidad de refuerzo logístico para intervenciones en campo, traslado de personal y apoyo operativo.",
    image: "/images/vehiculos/movil-03.webp",
    tag: "Refuerzo logístico",
  },
] ;



export const equipmentCategories = [
  {
    title: "Herramientas electricas",
    description: "Herramientas de apoyo para tareas de montaje, perforacion, corte, fijacion y mantenimiento.",
    items: ["Herramientas manuales y electricas", "Elementos de medicion", "Accesorios de instalacion"],
  },
  {
    title: "Metalmecanica",
    description: "Recursos para fabricacion, ajuste, reparacion y montaje de soluciones metalicas.",
    items: ["Herramientas de corte y ajuste", "Elementos de montaje", "Insumos de reparacion"],
  },
  {
    title: "Limpieza tecnica",
    description: "Equipamiento e insumos destinados a limpieza de oficinas, areas tecnicas y sectores industriales.",
    items: ["Elementos de limpieza tecnica", "Insumos operativos", "Recursos para intervenciones programadas"],
  },
  {
    title: "Climatizacion",
    description: "Herramientas y elementos de soporte para instalacion, revision y mantenimiento de equipos.",
    items: ["Herramientas de instalacion", "Elementos de control", "Insumos de mantenimiento"],
  },
  {
    title: "Mantenimiento gastronomico",
    description: "Recursos para intervenciones en cocinas, salones, areas de servicio y espacios de atencion.",
    items: ["Herramientas de mantenimiento", "Elementos de adecuacion", "Soporte para reparaciones"],
  },
  {
    title: "Elementos de seguridad",
    description: "Elementos de proteccion y apoyo para ejecutar tareas en condiciones de trabajo controladas.",
    items: ["Personal capacitado", "Senalizacion de trabajo", "Uso de EPP obligatorio"],
  },
  {
    title: "Insumos y apoyo operativo",
    description: "Materiales y recursos auxiliares para sostener tareas en campo y resolver necesidades puntuales.",
    items: ["Insumos generales", "Materiales auxiliares", "Recursos de apoyo logistico"],
  },
] satisfies EquipmentCategory[]

export const logistics = [
  {
    title: "Coordinacion de tareas",
    description: "Organizacion de recursos, horarios y prioridades segun el tipo de servicio solicitado.",
  },
  {
    title: "Traslado de equipos e insumos",
    description: "Movilidad preparada para transportar herramientas, materiales y elementos de trabajo.",
  },
  {
    title: "Intervenciones programadas",
    description: "Planificacion de tareas para reducir interferencias con la operacion del cliente.",
  },
  {
    title: "Respuesta en campo",
    description: "Soporte operativo para mantenimiento, montajes, limpieza tecnica y servicios gastronomicos.",
  },
] satisfies LogisticsPoint[]
