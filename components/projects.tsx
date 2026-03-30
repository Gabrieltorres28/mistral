import { ArrowUpRight, ImageIcon } from "lucide-react"
import { Reveal } from "@/components/reveal"

const projects = [
  {
    title: "Estructura para galpón industrial",
    category: "Estructuras metálicas",
    detail: "Espacio preparado para sumar fotografía real y breve descripción técnica.",
  },
  {
    title: "Mantenimiento de línea de producción",
    category: "Mantenimiento industrial",
    detail: "La maqueta permite reemplazar el placeholder sin modificar la grilla ni los textos base.",
  },
  {
    title: "Fabricación de piezas especiales",
    category: "Trabajos a medida",
    detail: "La sección ya queda lista para mostrar casos con mejor presentación y orden institucional.",
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between" y={18}>
          <div className="max-w-2xl">
            <p className="section-kicker">Trabajos realizados</p>
            <h2 className="section-title mt-3">Una vitrina preparada para mostrar proyectos reales con mejor presencia</h2>
          </div>
          <p className="section-copy max-w-xl">
            Cada tarjeta ya contempla un contenedor visual sobrio, categoría, título y espacio para una futura imagen de obra, planta o fabricación.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 80}
              className="industrial-panel group overflow-hidden rounded-[1.8rem] border-border/80 bg-card/90"
              y={22}
            >
              <article>
                <div className="industrial-grid relative aspect-[4/3] border-b border-border bg-secondary/50 p-4">
                  <div className="flex h-full flex-col justify-between rounded-[1.3rem] border border-dashed border-primary/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(235,239,231,0.92))] p-5">
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">Proyecto {String(index + 1).padStart(2, "0")}</span>
                      <ImageIcon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Área preparada para imagen real</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Reemplazo simple por fotografía de trabajo terminado, en proceso o detalle técnico.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">{project.category}</p>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold tracking-tight text-card-foreground">{project.title}</h3>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
