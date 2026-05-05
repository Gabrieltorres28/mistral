import Link from "next/link"
import { ArrowRight, Building2, MapPin, ShieldCheck } from "lucide-react"
import { BackButton } from "@/components/back-button"
import { companyInfo } from "@/components/site-content"
import { serviceBlocks } from "@/data/services"

export default function EmpresaPage() {
  return (
    <main className="bg-background">
      <section className="relative overflow-hidden bg-[#171a19] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(213,37,43,0.18),transparent_30%),linear-gradient(135deg,rgba(23,26,25,1),rgba(39,43,41,0.94)_56%,rgba(23,26,25,1))]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
        <div className="section-shell relative grid gap-8 py-10 sm:py-14 lg:grid-cols-[1fr_360px] lg:items-end lg:py-16">
          <header>
            <BackButton
              fallbackHref="/"
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/16 bg-white/8 px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm transition hover:border-secondary/45 hover:bg-white/12"
            />
            <div className="mt-8 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-md border border-white/14 bg-primary/16 text-primary">
                <Building2 className="h-6 w-6" />
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary-soft">Empresa</p>
            </div>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Blessed Soluciones Integrales
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/74">
              Empresa de servicios tecnicos con base operativa en Wanda, Misiones, orientada a mantenimiento, montajes,
              limpieza industrial y asistencia operativa en campo.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/servicios"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[0_14px_34px_rgba(213,37,43,0.22)] transition hover:bg-primary/90"
              >
                Ver servicios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/capacidad-operativa"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/18 bg-white/8 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/12"
              >
                Capacidad operativa
              </Link>
            </div>
          </header>

          <aside className="rounded-xl border border-white/12 bg-white/8 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm">
            <MapPin className="h-5 w-5 text-secondary-soft" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-soft">Base operativa</p>
            <p className="mt-3 text-sm leading-7 text-white/70">{companyInfo.location}</p>
            <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <p className="mt-3 text-sm font-semibold text-white">Perfil tecnico y operativo</p>
              <p className="mt-2 text-sm leading-6 text-white/62">
                Coordinacion de recursos, movilidad y tareas tecnicas para servicios programados y asistencia en campo.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-shell grid gap-8 py-12 lg:grid-cols-[1fr_0.75fr] lg:py-16">
        <article className="rounded-xl border border-border bg-white p-6 shadow-[0_16px_38px_rgba(31,31,31,0.05)]">
          <p className="section-kicker">Perfil operativo</p>
          <h2 className="mt-3 text-2xl font-semibold text-graphite">Servicios tecnicos para operacion y mantenimiento</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            La actividad se organiza alrededor de mantenimiento, montajes, limpieza industrial y soporte para espacios gastronomicos, con coordinacion de recursos, movilidad y tareas tecnicas.
          </p>
          <div className="mt-6">
            <Link href="/servicios" className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white">
              Ver servicios
            </Link>
          </div>
        </article>

        <aside className="rounded-xl border border-border bg-surface-soft p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">Base</p>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{companyInfo.location}</p>
          <div className="mt-6 grid gap-2 text-sm text-muted-foreground">
            {serviceBlocks.map((block) => (
              <Link key={block.slug} href={`/servicios/${block.slug}`} scroll className="rounded-md border border-border bg-white px-3 py-2 font-medium text-graphite">
                {block.title}
              </Link>
            ))}
          </div>
        </aside>
      </section>

      <section id="capacidad-operativa" className="section-band scroll-mt-28 py-12 lg:py-16">
        <div className="section-shell">
          <div className="industrial-panel p-6 sm:p-8">
            <p className="section-kicker">Capacidad operativa</p>
            <h2 className="section-title mt-3">Moviles, herramientas y logistica de trabajo</h2>
            <p className="section-copy mt-4">
              La version completa de capacidad operativa se encuentra en una ruta dedicada para mantener la navegacion clara.
            </p>
            <div className="mt-6">
              <Link href="/capacidad-operativa" className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white">
                Ver capacidad operativa
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
