import { Clock, Target, UserCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"

const highlights = [
  {
    icon: UserCheck,
    title: "Atención personalizada",
    description: "Seguimiento directo y coordinación clara desde la consulta inicial hasta la entrega.",
  },
  {
    icon: Clock,
    title: "Cumplimiento operativo",
    description: "Compromiso con tiempos pactados y organización de trabajo para cada frente.",
  },
  {
    icon: Target,
    title: "Soluciones a medida",
    description: "Cada proyecto se aborda según el entorno industrial, la exigencia técnica y el uso final.",
  },
]

export function About() {
  return (
    <section id="nosotros" className="py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-10">
          <Reveal className="industrial-panel rounded-[2rem] p-6 sm:p-8" y={20}>
            <p className="section-kicker">Quiénes somos</p>
            <h2 className="section-title mt-3">Una empresa orientada al trabajo técnico, la prolijidad y la confianza</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
              <p>
                Mistral Servicios Metalúrgicos trabaja en fabricación, soldaduras, estructuras y mantenimiento para clientes que necesitan un proveedor serio, ordenado y resolutivo.
              </p>
              <p>
                El enfoque está puesto en entregar soluciones funcionales, con criterio industrial y comunicación clara durante todo el proceso. Esa combinación es la que buscamos reflejar también en la presentación digital.
              </p>
            </div>
            <div className="mt-8 grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Perfil de trabajo</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Proyectos para industria, obras, reformas y soporte técnico con criterio práctico.
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Relación con clientes</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Trato directo, definición de alcances y seguimiento para reducir desvíos y demoras.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 80}
                className="industrial-panel flex items-start gap-4 rounded-[1.8rem] border-l-4 border-l-primary p-5 sm:p-6"
                y={20}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_10px_24px_rgba(79,148,108,0.2)]">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
