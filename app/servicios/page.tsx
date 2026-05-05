import Link from "next/link"
import { ArrowRight, CheckCircle2, Factory, MessageCircle, Utensils, Wrench } from "lucide-react"
import { BackButton } from "@/components/back-button"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { companyInfo } from "@/components/site-content"
import { serviceBlocks } from "@/data/services"

const serviceIcons = {
  "mantenimiento-y-montajes": Wrench,
  "limpieza-industrial": Factory,
  "mantenimiento-gastronomico": Utensils,
} as const

const serviceTags = {
  "mantenimiento-y-montajes": "Mantenimiento tecnico",
  "limpieza-industrial": "Limpieza operativa",
  "mantenimiento-gastronomico": "Soporte gastronomico",
} as const

export default function ServiciosPage() {
  return (
    <main className="bg-background">
      <section className="relative overflow-hidden bg-[#171a19] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(213,37,43,0.18),transparent_30%),linear-gradient(135deg,rgba(23,26,25,1),rgba(39,43,41,0.94)_56%,rgba(23,26,25,1))]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_360px] lg:items-end lg:py-16">
          <header>
            <BackButton
              fallbackHref="/"
              className="mb-8 inline-flex min-h-10 items-center gap-2 rounded-full border border-white/16 bg-white/8 px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm transition hover:border-secondary/45 hover:bg-white/12"
            />
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary-soft">Blessed Soluciones Integrales</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Servicios tecnicos para operacion industrial, comercial e institucional
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/72">
              Servicios organizados por bloques operativos para responder a necesidades de mantenimiento, montaje,
              limpieza tecnica y soporte especializado en empresas, industrias, comercios e instituciones.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[0_14px_34px_rgba(213,37,43,0.22)] transition hover:bg-primary/90"
              >
                Solicitar evaluacion tecnica
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href={companyInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/18 bg-white/8 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/12"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Link>
            </div>
          </header>

          <aside className="rounded-xl border border-white/12 bg-white/[0.06] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary-soft">Bloques operativos</p>
            <div className="mt-4 grid gap-3">
              {serviceBlocks.map((block) => {
                const Icon = serviceIcons[block.slug]

                return (
                  <Link
                    key={block.slug}
                    href={`/servicios/${block.slug}`}
                    scroll
                    className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3 transition hover:border-primary/45 hover:bg-white/[0.08]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/16 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-white">{block.title}</span>
                      <span className="mt-0.5 block text-xs text-white/58">{serviceTags[block.slug]}</span>
                    </span>
                    <ArrowRight className="ml-auto h-4 w-4 text-white/45 transition group-hover:translate-x-0.5 group-hover:text-secondary-soft" />
                  </Link>
                )
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="section-band py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="section-kicker">Alcance operativo</p>
            <h2 className="section-title mt-2">Tres lineas de servicio para sostener instalaciones y continuidad de trabajo</h2>
            <p className="section-copy mt-4">
              Cada bloque concentra tareas, recursos y aplicaciones frecuentes para coordinar intervenciones tecnicas con un
              alcance claro desde el primer relevamiento.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {serviceBlocks.map((block) => {
              const Icon = serviceIcons[block.slug]

              return (
                <article
                  key={block.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white shadow-[0_18px_48px_rgba(31,31,31,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(31,31,31,0.11)]"
                >
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/12 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/18 bg-black/32 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                      <Icon className="h-4 w-4 text-secondary-soft" />
                      {serviceTags[block.slug]}
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
                      href={`/servicios/${block.slug}`}
                      scroll
                      className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md border border-primary/20 bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                    >
                      Ver detalle
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-10 rounded-xl border border-border bg-white p-6 shadow-[0_18px_48px_rgba(31,31,31,0.06)] lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">Coordinacion tecnica</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-graphite">Definir alcance, prioridad y recursos antes de intervenir</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
                Blessed coordina servicios a partir del relevamiento del lugar, la criticidad operativa y las condiciones reales
                de acceso, seguridad y continuidad de uso.
              </p>
            </div>
            <Link
              href="/contacto"
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-graphite px-5 py-2 text-sm font-semibold text-white transition hover:bg-graphite/90 lg:mt-0"
            >
              Coordinar relevamiento
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
