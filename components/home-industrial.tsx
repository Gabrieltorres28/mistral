import Link from "next/link"
import { ArrowRight, CheckCircle2, ClipboardCheck, Factory, Truck, Utensils, Wrench } from "lucide-react"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { Reveal } from "@/components/reveal"
import { companyInfo, workSamples } from "@/components/site-content"
import { equipmentCategories, logistics, vehicles } from "@/data/operational-capacity"
import { serviceBlocks } from "@/data/services"

const serviceHrefBySlug = {
  "mantenimiento-y-montajes": "/servicios/mantenimiento-y-montajes",
  "limpieza-industrial": "/servicios/limpieza-industrial",
  "mantenimiento-gastronomico": "/servicios/mantenimiento-gastronomico",
} as const

const serviceIconBySlug = {
  "mantenimiento-y-montajes": Wrench,
  "limpieza-industrial": Factory,
  "mantenimiento-gastronomico": Utensils,
} as const

const serviceTagBySlug = {
  "mantenimiento-y-montajes": "Mantenimiento técnico",
  "limpieza-industrial": "Limpieza operativa",
  "mantenimiento-gastronomico": "Soporte gastronómico",
} as const

const capabilityItems = [
  {
    title: "Mantenimiento y soporte en campo",
    text: "Servicios orientados a conservar infraestructura, resolver fallas y sostener continuidad operativa.",
    icon: Wrench,
  },
  {
    title: "Intervenciones en entornos productivos",
    text: "Alcances preparados para plantas, depósitos, sectores técnicos, edificios operativos y espacios de servicio.",
    icon: Factory,
  },
  {
    title: "Coordinación por prioridad",
    text: "Organización de tareas según criticidad, ubicación, condiciones del espacio y horarios disponibles.",
    icon: ClipboardCheck,
  },
  {
    title: "Movilidad operativa documentable",
    text: "Unidades destinadas a supervisión, asistencia técnica, logística operativa, izaje y soporte en terreno.",
    icon: Truck,
  },
]

const processSteps = [
  "Relevamiento del lugar, actividad y necesidad técnica.",
  "Definición del alcance, prioridades y condiciones de intervención.",
  "Coordinación de tareas, recursos y horarios de trabajo.",
  "Ejecución del servicio con seguimiento operativo.",
  "Revisión final y registro de necesidades detectadas.",
]

export function HeroIndustrial() {
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-[#202322] text-white sm:min-h-[640px] lg:min-h-[620px]">
      <ImageWithFallback
        src="/images/fondo-hero-desktop.webp"
        alt="Equipo de Blessed Soluciones Integrales realizando servicios industriales de mantenimiento, montaje, limpieza técnica y soporte operativo"
        fill
        priority
        sizes="100vw"
        fallbackLabel="Blessed Soluciones Integrales"
        fallbackDetail="Imagen pendiente"
        wrapperClassName="absolute inset-0 hidden md:block"
        className="object-[62%_center] opacity-70"
      />
      <ImageWithFallback
        src="/images/fondo-hero-mobile.webp"
        alt="Equipo de Blessed Soluciones Integrales realizando servicios industriales de mantenimiento, montaje, limpieza técnica y soporte operativo"
        fill
        sizes="100vw"
        fallbackLabel="Blessed Soluciones Integrales"
        fallbackDetail="Imagen pendiente"
        wrapperClassName="absolute inset-0 md:hidden"
        className="object-[center_bottom] opacity-72"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,19,18,0.98)_0%,rgba(17,19,18,0.92)_38%,rgba(17,19,18,0.62)_70%,rgba(17,19,18,0.42)_100%)] md:bg-[linear-gradient(90deg,rgba(17,19,18,0.98),rgba(17,19,18,0.88)_40%,rgba(17,19,18,0.42)_74%,rgba(17,19,18,0.2))]" />
      <div className="section-shell relative flex min-h-[680px] items-start py-14 sm:min-h-[640px] sm:py-16 md:items-center lg:min-h-[620px] lg:py-24">
        <Reveal className="max-w-3xl" y={18}>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary-soft">{companyInfo.name}</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Servicios técnicos para mantenimiento, montajes, limpieza industrial y espacios gastronómicos.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
            Estructura operativa organizada en tres bloques de servicio, con páginas internas para revisar alcances, tareas y aplicaciones.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/servicios"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white"
            >
              Ver servicios
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/18 bg-white/10 px-5 py-3 text-sm font-semibold text-white"
            >
              Contacto operativo
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function TrustBar() {
  return (
    <section className="border-b border-border bg-white">
      <div className="section-shell grid gap-4 py-6 md:grid-cols-3">
        <Reveal y={14}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Base operativa</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{companyInfo.location}</p>
        </Reveal>
        <Reveal delay={80} y={14}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Servicios</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">Tres bloques principales con alcance técnico separado.</p>
        </Reveal>
        <Reveal delay={160} y={14}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Documentación visual</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">Móviles, herramientas y logística coordinada para servicios en campo.</p>
        </Reveal>
      </div>
    </section>
  )
}

export function ServicePillars() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between" y={18}>
          <div className="max-w-3xl">
            <p className="section-kicker">Servicios principales</p>
            <h2 className="section-title mt-3">Pilares operativos</h2>
            <p className="section-copy mt-4">
              Cada bloque agrupa servicios, áreas de trabajo, tareas y aplicaciones para consulta técnica directa.
            </p>
          </div>
          <Link href="/servicios" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Índice general
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
          {serviceBlocks.map((block, index) => {
            const Icon = serviceIconBySlug[block.slug as keyof typeof serviceIconBySlug] ?? Wrench

            return (
            <Reveal key={block.slug} delay={index * 90} y={24}>
            <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white shadow-[0_18px_48px_rgba(31,31,31,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(31,31,31,0.11)]">
              <div className="relative">
                <ImageWithFallback
                  src={block.image}
                  alt={block.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  fallbackLabel={block.title}
                  fallbackDetail="Imagen pendiente"
                  wrapperClassName="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]"
                  className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/12 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/18 bg-black/32 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                  <Icon className="h-4 w-4 text-secondary-soft" />
                  {serviceTagBySlug[block.slug as keyof typeof serviceTagBySlug]}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-semibold tracking-tight text-graphite">{block.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{block.summary}</p>
                <ul className="mt-5 grid gap-2.5">
                  {block.services.map((service) => (
                    <li key={service.slug} className="flex gap-2 text-sm leading-6 text-graphite/80">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>{service.title}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={serviceHrefBySlug[block.slug as keyof typeof serviceHrefBySlug]}
                  scroll
                  className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-primary/20 bg-primary px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(217,31,38,0.16)] transition hover:bg-primary/90"
                >
                  Ver detalle
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
            </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function CapabilityGrid() {
  const operationalSummary = [
    {
      title: "Móviles operativos",
      text: `${vehicles.length} unidades destinadas a supervisión, asistencia técnica, logística operativa, izaje y soporte en terreno.`,
      icon: Truck,
    },
    {
      title: "Herramientas y equipamiento",
      text: `${equipmentCategories.length} categorías de recursos para mantenimiento, montaje, limpieza y asistencia operativa.`,
      icon: Wrench,
    },
    {
      title: "Logística de trabajo",
      text: `${logistics.length} ejes de coordinación para recursos, personal, movilidad, trabajos programados y respuestas en campo.`,
      icon: ClipboardCheck,
    },
  ]

  return (
    <section className="border-y border-border bg-white py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <Reveal className="max-w-3xl" y={18}>
          <p className="section-kicker">Capacidad operativa</p>
          <h2 className="section-title mt-3">Organización para trabajo técnico</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {capabilityItems.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={index * 70} y={20}>
              <article className="rounded-xl border border-border bg-surface-soft p-5">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-lg font-semibold text-graphite">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.text}</p>
              </article>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {operationalSummary.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={index * 80} y={20}>
              <article className="industrial-panel p-5">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-lg font-semibold text-graphite">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.text}</p>
              </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-8" y={16}>
          <Link href="/capacidad-operativa" className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white">
            Ver capacidad operativa completa
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export function OperationalFleetSection() {
  return (
    <section className="bg-[#202322] py-16 text-white sm:py-20 lg:py-24">
      <div className="section-shell">
        <Reveal className="max-w-3xl" y={18}>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary-soft">Móviles y equipamiento</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Movilidad y recursos para trabajos en campo
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
            Unidades y recursos operativos para asistir servicios técnicos, mantenimiento, montajes, limpieza industrial e izaje.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {vehicles.slice(0, 3).map((asset, index) => (
            <Reveal key={asset.image} delay={index * 80} y={22}>
            <article className="overflow-hidden rounded-xl border border-white/12 bg-white/6">
              <ImageWithFallback
                src={asset.image}
                alt={asset.title}
                fill
                sizes="(max-width: 767px) 100vw, 33vw"
                fallbackLabel={asset.title}
                fallbackDetail="Móvil/equipamiento pendiente"
                wrapperClassName="aspect-[4/3]"
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary-soft">{asset.tag}</p>
                <h3 className="text-lg font-semibold text-white">{asset.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/64">{asset.description}</p>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <Reveal className="max-w-3xl" y={18}>
          <p className="section-kicker">Proceso</p>
          <h2 className="section-title mt-3">Secuencia de trabajo</h2>
        </Reveal>
        <ol className="mt-10 grid gap-3">
          {processSteps.map((step, index) => (
            <Reveal
              key={step}
              as="li"
              delay={index * 70}
              y={18}
              className="grid gap-4 rounded-xl border border-border bg-white p-5 shadow-[0_12px_30px_rgba(31,31,31,0.04)] sm:grid-cols-[52px_1fr]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[#202322] text-sm font-semibold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-7 text-muted-foreground">{step}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function GalleryPreview() {
  return (
    <section className="border-y border-border bg-white py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between" y={18}>
          <div className="max-w-3xl">
            <p className="section-kicker">Trabajos</p>
            <h2 className="section-title mt-3">Registro de intervenciones</h2>
            <p className="section-copy mt-4">Vista previa de intervenciones y servicios realizados en entornos industriales, edilicios y operativos.</p>
          </div>
          <Link href="/trabajos" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Ver trabajos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {workSamples.slice(0, 4).map((work, index) => (
            <Reveal key={work.title} delay={index * 80} y={22}>
            <article className="overflow-hidden rounded-xl border border-border bg-white shadow-[0_18px_46px_rgba(31,31,31,0.07)]">
              <ImageWithFallback
                src={work.image}
                alt={work.title}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                fallbackLabel={work.title}
                fallbackDetail="Imagen de trabajo pendiente"
                wrapperClassName="aspect-[4/3]"
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">{work.category}</p>
                <h3 className="mt-2 text-lg font-semibold text-graphite">{work.title}</h3>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section className="bg-[#202322] py-16 text-white sm:py-20">
      <div className="section-shell">
        <Reveal className="max-w-3xl" y={18}>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary-soft">Contacto</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Coordinar una consulta técnica</h2>
          <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
            Para solicitar una intervención, conviene informar ubicación, tipo de instalación, criticidad operativa y servicio requerido.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/contacto" className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white">
              Contactar
            </Link>
            <Link href="/servicios" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/18 bg-white/10 px-5 py-3 text-sm font-semibold text-white">
              Revisar servicios
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
