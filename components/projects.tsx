import { Building2, Factory, Hotel, ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { areas } from "@/components/site-content"

const icons = [Factory, Hotel, Building2, ShieldCheck]

export function Projects() {
  return (
    <section id="areas" className="py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between" y={18}>
          <div className="max-w-2xl">
            <p className="section-kicker">Áreas de acción</p>
            <h2 className="section-title mt-3">Sectores donde la empresa puede comunicar experiencia y capacidad operativa</h2>
          </div>
          <p className="section-copy max-w-xl">
            Esta sección presenta los principales entornos donde trabaja la empresa y ayuda a comunicar alcance operativo de forma clara y ordenada.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:gap-6">
          {areas.map((area, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={area.title} delay={index * 80} y={20}>
                <article className="industrial-panel h-full p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-red)]">Operación</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">{area.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">{area.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
