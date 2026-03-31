import { Drill, Paintbrush, Settings2, Wrench } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { serviceGroups } from "@/components/site-content"

const icons = [Drill, Wrench, Paintbrush, Settings2]

export function Services() {
  return (
    <section id="servicios" className="relative py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 section-band opacity-90" />
      <div className="section-shell relative">
        <Reveal className="mx-auto max-w-3xl text-center" y={18}>
          <p className="section-kicker">Servicios</p>
          <h2 className="section-title mt-3">Servicios principales</h2>
          <p className="section-copy mt-4">
            Soluciones integrales presentadas en bloques claros para facilitar la lectura y mostrar con precisión el alcance operativo de la empresa.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-14 lg:gap-6">
          {serviceGroups.map((service, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={service.title} delay={index * 80} y={22}>
                <article className="industrial-panel h-full p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary surface-glow">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-primary/10 bg-white/72 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground/80">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">{service.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
