import Link from "next/link"
import { ArrowRight, CircleDot, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { companyInfo } from "@/components/site-content"

const highlights = [
  "Fabricación y montaje en obra",
  "Mantenimiento industrial programado",
  "Respuesta ágil para pedidos a medida",
]

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(41,179,92,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(236,76,76,0.06),transparent_20%)]" />
      <div className="section-shell relative">
        <Reveal className="max-w-4xl" y={18}>
          <p className="section-kicker">Mistral Servicios Metalúrgicos</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Soluciones metalúrgicas confiables para industria, obras y mantenimiento.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Ejecutamos trabajos con criterio técnico, tiempos claros y foco en la durabilidad de cada entrega.
            La propuesta ahora se apoya en una base neutra y en el verde del logo como acento principal.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_14px_34px_rgba(41,179,92,0.24)] hover:bg-primary/92"
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

          <ul className="mt-8 grid max-w-3xl gap-3 text-sm text-foreground sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, index) => (
              <Reveal key={item} delay={120 + index * 80} y={16}>
                <li className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-[0_10px_24px_rgba(27,40,32,0.04)]">
                  <CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
