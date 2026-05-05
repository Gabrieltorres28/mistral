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
    title: "Herramientas eléctricas",
    description: "Herramientas de apoyo para tareas de montaje, perforación, corte, fijación y mantenimiento.",
    items: ["Herramientas manuales y eléctricas", "Elementos de medición", "Accesorios de instalación"],
  },
  {
    title: "Metalmecánica",
    description: "Recursos para fabricación, ajuste, reparación y montaje de soluciones metálicas.",
    items: ["Herramientas de corte y ajuste", "Elementos de montaje", "Insumos de reparación"],
  },
  {
    title: "Limpieza técnica",
    description: "Equipamiento e insumos destinados a limpieza de oficinas, áreas técnicas y sectores industriales.",
    items: ["Elementos de limpieza técnica", "Insumos operativos", "Recursos para intervenciones programadas"],
  },
  {
    title: "Climatización",
    description: "Herramientas y elementos de soporte para instalación, revisión y mantenimiento de equipos.",
    items: ["Herramientas de instalación", "Elementos de control", "Insumos de mantenimiento"],
  },
  {
    title: "Mantenimiento gastronómico",
    description: "Recursos para intervenciones en cocinas, salones, áreas de servicio y espacios de atención.",
    items: ["Herramientas de mantenimiento", "Elementos de adecuación", "Soporte para reparaciones"],
  },
  {
    title: "Elementos de seguridad",
    description: "Elementos de protección y apoyo para ejecutar tareas en condiciones de trabajo controladas.",
    items: ["Personal capacitado", "Señalización de trabajo", "Uso de EPP obligatorio"],
  },
  {
    title: "Insumos y apoyo operativo",
    description: "Materiales y recursos auxiliares para sostener tareas en campo y resolver necesidades puntuales.",
    items: ["Insumos generales", "Materiales auxiliares", "Recursos de apoyo logístico"],
  },
] satisfies EquipmentCategory[]

export const logistics = [
  {
    title: "Coordinación de tareas",
    description: "Organización de recursos, horarios y prioridades según el tipo de servicio solicitado.",
  },
  {
    title: "Traslado de equipos e insumos",
    description: "Movilidad preparada para transportar herramientas, materiales y elementos de trabajo.",
  },
  {
    title: "Intervenciones programadas",
    description: "Planificación de tareas para reducir interferencias con la operación del cliente.",
  },
  {
    title: "Respuesta en campo",
    description: "Soporte operativo para mantenimiento, montajes, limpieza técnica y servicios gastronómicos.",
  },
] satisfies LogisticsPoint[]
