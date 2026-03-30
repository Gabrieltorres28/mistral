import Link from "next/link"
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { companyInfo, heroHighlights } from "@/components/site-content"

const operatingScopes = ["Industria", "Hotelería", "Infraestructura", "Mantenimiento"]

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(18,146,74,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(201,58,47,0.06),transparent_22%)]" />
      <div className="section-shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal className="max-w-2xl" y={18}>
            <p className="section-kicker">{companyInfo.name}</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Soluciones integrales para industria, hotelería e infraestructura.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Montajes, instalaciones, mantenimiento, pintura, revestimientos y soporte técnico general con foco en cumplimiento, respuesta y atención personalizada.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_14px_34px_rgba(18,146,74,0.24)] hover:bg-primary/92"
              >
                <Link href={companyInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Solicitar presupuesto
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-primary/25 bg-white px-6 text-sm font-semibold text-foreground hover:bg-secondary hover:text-foreground"
              >
                <Link href="#servicios">
                  Ver servicios
                  <ArrowRight className="h-4 w-4 text-primary" />
                </Link>
              </Button>
            </div>

            <ul className="mt-8 grid gap-3 text-sm text-foreground sm:grid-cols-2">
              {heroHighlights.map((item, index) => (
                <Reveal key={item} delay={120 + index * 70} y={14}>
                  <li className="flex items-start gap-3 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-[0_10px_24px_rgba(23,34,28,0.04)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <Reveal className="industrial-panel overflow-hidden p-4 sm:p-5" delay={140} y={26}>
            <div className="industrial-grid rounded-[1.5rem] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(240,245,238,0.96))] p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Capacidad operativa</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">
                    Respuesta integral para entornos que requieren ejecución, mantenimiento y soporte técnico.
                  </p>
                </div>
                <div className="rounded-full bg-[var(--brand-red)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
                  Activo
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {operatingScopes.map((item, index) => (
                  <Reveal key={item} delay={220 + index * 60} y={12}>
                    <span className="inline-flex rounded-full border border-primary/15 bg-white px-3 py-2 text-sm font-medium text-foreground shadow-[0_6px_16px_rgba(23,34,28,0.04)]">
                      {item}
                    </span>
                  </Reveal>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Reveal delay={360} y={16}>
                  <div className="rounded-[1.3rem] border border-border bg-white/90 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Enfoque</p>
                    <p className="mt-2 text-sm leading-6 text-foreground">
                      Soluciones a medida para cada cliente, con criterio práctico y buena coordinación de obra o servicio.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={430} y={16}>
                  <div className="rounded-[1.3rem] border border-border bg-white/90 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Cobertura</p>
                    <p className="mt-2 text-sm leading-6 text-foreground">
                      Servicios orientados a empresas, hoteles, organismos y operaciones que necesitan respuesta confiable.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
