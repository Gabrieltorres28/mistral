import Link from "next/link"
import type { ReactNode } from "react"
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  Hammer,
  MessageCircle,
  Search,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Utensils,
  Wrench,
  Zap,
} from "lucide-react"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { Reveal } from "@/components/reveal"
import { companyInfo } from "@/components/site-content"
import type { BlessedService, ServiceBlock } from "@/data/services"

type ServiceBlockPageProps = {
  block: ServiceBlock
}

const sections = [
  { id: "resumen", label: "Resumen" },
  { id: "areas", label: "Áreas" },
  { id: "detalle", label: "Detalle técnico" },
  { id: "aplicaciones", label: "Aplicaciones" },
  { id: "galeria", label: "Galería" },
  { id: "proceso", label: "Proceso" },
  { id: "contacto", label: "Contacto" },
]

const blockIcons = {
  "mantenimiento-y-montajes": Wrench,
  "limpieza-industrial": Factory,
  "mantenimiento-gastronomico": Utensils,
} as const

const serviceIcons = {
  "mantenimiento-edilicio": Building2,
  "montaje-y-mantenimiento-electrico": Zap,
  "aire-acondicionado": Snowflake,
  metalmecanica: Hammer,
  "limpieza-de-oficinas": Sparkles,
  "limpieza-tecnica-industrial": Factory,
  "mantenimiento-gastronomico": Utensils,
} as const

const workflowSteps = [
  {
    title: "Relevamiento",
    description: "Análisis del lugar, actividad, condiciones de acceso y necesidades técnicas del servicio.",
    icon: Search,
  },
  {
    title: "Diagnóstico",
    description: "Definición de prioridades, riesgos operativos y alcance de la intervención requerida.",
    icon: ClipboardCheck,
  },
  {
    title: "Propuesta",
    description: "Organización de recursos, tiempos, tareas y criterios de ejecución para el trabajo.",
    icon: ShieldCheck,
  },
  {
    title: "Ejecución",
    description: "Intervención en campo con coordinación operativa y seguimiento de avances.",
    icon: Wrench,
  },
  {
    title: "Control",
    description: "Verificación final, comunicación de resultados y registro de necesidades detectadas.",
    icon: CheckCircle2,
  },
]

function uniqueItems(items: string[]) {
  return Array.from(new Set(items))
}

function getBlockItems(block: ServiceBlock, key: "applications" | "tasks") {
  return uniqueItems(block.services.flatMap((service) => service[key]))
}

function SectionHeader({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  children?: ReactNode
}) {
  return (
    <header id={id} className="scroll-mt-28 border-b border-border/80 pb-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-graphite sm:text-3xl">{title}</h2>
      {children ? <div className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">{children}</div> : null}
    </header>
  )
}

function ServiceAreaCards({ services }: { services: BlessedService[] }) {
  return (
    <div className="grid gap-5">
      {services.map((service) => {
        const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] ?? Wrench

        return (
          <article key={service.slug} className="industrial-panel overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[300px_1fr]">
              <div className="relative">
                <ImageWithFallback
                  src={service.image ?? ""}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1023px) 100vw, 300px"
                  fallbackLabel={service.title}
                  fallbackDetail="Imagen pendiente"
                  wrapperClassName="aspect-[4/3] min-h-[220px] lg:h-full lg:aspect-auto"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/48 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-md border border-white/18 bg-black/34 text-secondary-soft backdrop-blur-sm">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary sm:flex">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-graphite">{service.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{service.summary}</p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {service.areas.map((area) => (
                    <section key={area.title} className="rounded-lg border border-border bg-surface-soft p-4">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-secondary" />
                        <h4 className="text-sm font-semibold text-graphite">{area.title}</h4>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{area.summary}</p>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

function TechnicalDetail({ service }: { service: BlessedService }) {
  const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] ?? Wrench

  return (
    <article className="industrial-panel p-5 sm:p-6">
      <div className="flex gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-graphite text-secondary-soft">
          <Icon className="h-5 w-5" />
        </span>
        <div className="max-w-3xl">
          <h3 className="text-xl font-semibold text-graphite">{service.title}</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">{service.description}</p>
        </div>
      </div>

      <div className="mt-5 lg:hidden">
        <details className="rounded-lg border border-border bg-surface-soft">
          <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-graphite">Ver alcance técnico</summary>
          <div className="border-t border-border px-4 py-4">
            <TechnicalDetailBody service={service} />
          </div>
        </details>
      </div>

      <div className="mt-5 hidden lg:block">
        <TechnicalDetailBody service={service} />
      </div>
    </article>
  )
}

function TechnicalDetailBody({ service }: { service: BlessedService }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1fr]">
      <section>
        <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Subservicios</h4>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted-foreground">
          {service.subservices.map((item) => (
            <li key={item} className="flex gap-2">
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-secondary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Tareas incluidas</h4>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted-foreground">
          {service.tasks.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

function SimpleGridList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 rounded-lg border border-border bg-white px-4 py-3 text-sm leading-6 text-muted-foreground shadow-[0_12px_28px_rgba(31,31,31,0.04)]"
        >
          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-secondary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function ServiceBlockPage({ block }: ServiceBlockPageProps) {
  const applications = getBlockItems(block, "applications")
  const BlockIcon = blockIcons[block.slug]

  return (
    <main className="bg-background">
      <section className="relative overflow-hidden bg-[#171a19] text-white">
        <ImageWithFallback
          src={block.heroImage}
          alt={block.imageAlt}
          fill
          priority
          sizes="100vw"
          fallbackLabel={block.title}
          fallbackDetail="Imagen pendiente"
          wrapperClassName="absolute inset-0"
          className="opacity-50"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,21,20,0.98),rgba(18,21,20,0.86)_48%,rgba(18,21,20,0.54)),radial-gradient(circle_at_20%_18%,rgba(213,37,43,0.22),transparent_26%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-16">
          <Reveal y={18}>
          <Link
            href="/servicios"
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/16 bg-white/8 px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm transition hover:border-secondary/45 hover:bg-white/12"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a servicios
          </Link>
          </Reveal>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
            <Reveal className="contents" delay={80} y={18}>
            <header>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-md border border-white/14 bg-primary/16 text-primary">
                  <BlockIcon className="h-6 w-6" />
                </span>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary-soft">Servicio operativo</p>
              </div>
              <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">{block.title}</h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/74">{block.summary}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={companyInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[0_14px_34px_rgba(213,37,43,0.22)] transition hover:bg-primary/90"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Solicitar evaluación
                </Link>
                <a
                  href="#detalle"
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/18 bg-white/8 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/12"
                >
                  Ver detalle técnico
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </header>
            </Reveal>

            <Reveal delay={160} y={18}>
            <aside className="rounded-xl border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
              <p className="text-sm font-semibold text-white">Servicios del bloque</p>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-white/70">
                {block.services.map((service) => {
                  const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] ?? Wrench

                  return (
                    <li key={service.slug} className="flex items-center gap-2">
                      <Icon className="h-4 w-4 shrink-0 text-secondary-soft" />
                      <span>{service.title}</span>
                    </li>
                  )
                })}
              </ul>
            </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="section-band">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[220px_1fr] lg:py-14">
        <aside className="hidden lg:block">
          <nav className="sticky top-28 rounded-xl border border-border bg-white/95 p-4 shadow-[0_16px_38px_rgba(31,31,31,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Índice</p>
            <div className="mt-3 grid gap-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-md px-3 py-2 text-sm font-medium text-graphite hover:bg-surface-soft"
                >
                  {section.label}
                </a>
              ))}
            </div>
          </nav>
        </aside>

        <div className="grid gap-12">
          <Reveal className="grid gap-5" y={18}>
          <section className="grid gap-5">
            <SectionHeader id="resumen" eyebrow="Resumen técnico" title="Alcance del bloque">
              <p>
                Servicios orientados a sostener continuidad operativa, resolver necesidades técnicas concretas y ordenar la
                ejecución de trabajos en empresas, industrias, comercios e instituciones.
              </p>
            </SectionHeader>

            <div className="grid gap-4 md:grid-cols-2">
              {block.services.map((service) => {
                const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] ?? Wrench

                return (
                  <article key={service.slug} className="industrial-panel p-5">
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-graphite">{service.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.summary}</p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
          </Reveal>

          <Reveal className="grid gap-5" y={18}>
          <section className="grid gap-5">
            <SectionHeader id="areas" eyebrow="Subservicios y áreas" title="Áreas de trabajo" />
            <ServiceAreaCards services={block.services} />
          </section>
          </Reveal>

          <Reveal className="grid gap-5" y={18}>
          <section className="grid gap-5">
            <SectionHeader id="detalle" eyebrow="Detalle técnico" title="Detalle por servicio">
              <p>
                Alcance técnico organizado por servicio, con subservicios y tareas visibles para definir prioridades,
                recursos y modalidad de ejecución.
              </p>
            </SectionHeader>

            <div className="grid gap-5">
              {block.services.map((service) => (
                <TechnicalDetail key={service.slug} service={service} />
              ))}
            </div>
          </section>
          </Reveal>

          <Reveal className="grid gap-5" y={18}>
          <section className="grid gap-5">
            <SectionHeader id="aplicaciones" eyebrow="Aplicaciones típicas" title="Entornos de aplicación" />
            <SimpleGridList items={applications} />
          </section>
          </Reveal>

          {block.gallery?.length ? (
            <Reveal className="grid gap-5" y={18}>
            <section className="grid gap-5">
              <SectionHeader id="galeria" eyebrow="Soporte visual" title="Imágenes del servicio">
                <p>Material visual asociado a intervenciones, equipos y tareas vinculadas al alcance del servicio.</p>
              </SectionHeader>
              <div className="grid gap-5 md:grid-cols-3">
                {block.gallery.map((image, index) => (
                  <ImageWithFallback
                    key={image}
                    src={image}
                    alt={`${block.title} ${index + 1}`}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    fallbackLabel={`${block.title} ${index + 1}`}
                    fallbackDetail="Imagen de servicio pendiente"
                    wrapperClassName="aspect-[4/5] rounded-xl border border-border shadow-[0_16px_38px_rgba(31,31,31,0.05)]"
                    className="object-cover object-center"
                  />
                ))}
              </div>
            </section>
            </Reveal>
          ) : null}

          <Reveal className="grid gap-5" y={18}>
          <section className="grid gap-5">
            <SectionHeader id="proceso" eyebrow="Proceso de trabajo" title="Secuencia operativa" />
            <ol className="grid gap-3 lg:grid-cols-5">
              {workflowSteps.map((item, index) => (
                <li key={item.title} className="rounded-xl border border-border bg-white p-4 shadow-[0_12px_28px_rgba(31,31,31,0.04)]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-graphite text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <item.icon className="mt-5 h-5 w-5 text-primary" />
                  <h3 className="mt-3 text-base font-semibold text-graphite">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </li>
              ))}
            </ol>
          </section>
          </Reveal>

          <Reveal y={18}>
          <section id="contacto" className="corporate-dark-panel scroll-mt-28 p-6 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">Contacto</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Solicitar presupuesto o evaluación técnica</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/70">
              Para avanzar, Blessed releva tipo de instalación, ubicación, criticidad operativa y alcance esperado del servicio.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href={companyInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Escribir por WhatsApp
              </Link>
              <Link
                href="/contacto"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/16 bg-white/8 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/12"
              >
                Solicitar contacto
              </Link>
            </div>
          </section>
          </Reveal>
        </div>
      </div>
      </div>
    </main>
  )
}
