import { ClipboardCheck, Handshake, ScanSearch } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { differentials } from "@/components/site-content"

const icons = [Handshake, ClipboardCheck, ScanSearch]

export function About() {
  return (
    <section id="nosotros" className="py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-10">
          <Reveal className="industrial-panel p-6 sm:p-8 lg:p-10" y={18}>
            <p className="section-kicker">Quiénes somos</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Una empresa de Misiones orientada a resolver necesidades técnicas y operativas con criterio integral
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
              S.V.M. Servicios Integrales es una empresa de Misiones orientada a brindar soluciones técnicas y operativas para industrias, hoteles, empresas e infraestructura en toda la región. Trabajamos con una visión integral, acompañando a cada cliente con servicios que abarcan montajes, mantenimiento, instalaciones, pintura, revestimientos y soporte técnico especializado. Contamos con un equipo comprometido con la calidad de ejecución, el cumplimiento y la atención personalizada, ofreciendo soluciones prácticas, seguras y adaptadas a cada necesidad.
            </p>
          </Reveal>

          <div className="grid gap-4 lg:pt-6">
            {differentials.map((item, index) => {
              const Icon = icons[index]
              return (
                <Reveal key={item.title} delay={index * 80} y={22}>
                  <article className="industrial-panel h-full p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_12px_24px_rgba(18,146,74,0.18)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-foreground">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">{item.description}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
