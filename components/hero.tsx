import Link from "next/link"
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { companyInfo, heroHighlights } from "@/components/site-content"
import { cn } from "@/lib/utils"

const operatingScopes = ["Industria", "Hotelería", "Infraestructura", "Mantenimiento"]

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(19,138,54,0.09),transparent_26%),radial-gradient(circle_at_top_right,rgba(217,31,38,0.06),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.16),transparent)]" />
      <div className="section-shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal className="max-w-2xl" y={18}>
            <p className="section-kicker">{companyInfo.name}</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-graphite sm:text-5xl lg:text-6xl">
              Soluciones integrales para industria, hotelería e infraestructura.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Montajes, instalaciones, mantenimiento, pintura, revestimientos y soporte técnico general con foco en cumplimiento, respuesta y atención personalizada.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full px-6 text-sm font-semibold text-primary-foreground shadow-[0_16px_36px_rgba(217,31,38,0.22)] hover:bg-primary/92 hover:shadow-[0_18px_40px_rgba(217,31,38,0.26)]"
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
                className="h-12 rounded-full border-graphite/15 bg-white px-6 text-sm font-semibold text-graphite hover:border-secondary/30 hover:bg-surface-soft hover:text-graphite"
              >
                <Link href="#servicios">
                  Ver servicios
                  <ArrowRight className="h-4 w-4 text-secondary" />
                </Link>
              </Button>
            </div>

            <ul className="mt-8 grid gap-3 text-sm text-graphite sm:grid-cols-2">
              {heroHighlights.map((item, index) => (
                <Reveal key={item} delay={120 + index * 70} y={14}>
                  <li className="flex items-start gap-3 rounded-[1.25rem] border border-border bg-white px-4 py-3 shadow-[0_10px_24px_rgba(31,31,31,0.04)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <Reveal className="industrial-panel overflow-hidden p-4 sm:p-5" delay={140} y={26}>
            <div className="industrial-grid rounded-[1.5rem] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,242,238,0.96))] p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">Capacidad operativa</p>
                  <p className="mt-2 text-lg font-semibold text-graphite">
                    Respuesta integral para entornos que requieren ejecución, mantenimiento y soporte técnico.
                  </p>
                </div>
                <div className="status-pill">
                  <span className="h-2 w-2 rounded-full bg-secondary" />
                  Activo
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {operatingScopes.map((item, index) => (
                  <Reveal key={item} delay={220 + index * 60} y={12}>
                    <span
                      className={cn(
                        "inline-flex rounded-full border px-3 py-2 text-sm font-medium shadow-[0_6px_16px_rgba(31,31,31,0.04)]",
                        index === 0 && "border-secondary/20 bg-secondary-soft text-secondary",
                        index === 2 && "border-primary/15 bg-primary-soft text-primary",
                        index !== 0 && index !== 2 && "border-border bg-white text-graphite",
                      )}
                    >
                      {item}
                    </span>
                  </Reveal>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Reveal delay={360} y={16}>
                  <div className="corporate-dark-panel h-full p-4 sm:p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary/80">Enfoque</p>
                    <p className="mt-2 text-sm leading-6 text-white/78">
                      Soluciones a medida para cada cliente, con criterio práctico y buena coordinación de obra o servicio.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={430} y={16}>
                  <div className="rounded-[1.3rem] border border-border bg-white/96 p-4 shadow-[0_12px_28px_rgba(31,31,31,0.05)] sm:p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Cobertura</p>
                    <p className="mt-2 text-sm leading-6 text-graphite">
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
