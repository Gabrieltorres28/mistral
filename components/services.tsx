import { Building2, Cog, Layers, Ruler, Settings, Wrench } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"

const services = [
  {
    icon: Wrench,
    title: "Fabricación metálica",
    description: "Piezas, estructuras y componentes fabricados según planos o especificaciones del cliente.",
  },
  {
    icon: Layers,
    title: "Soldaduras y montajes",
    description: "Soldadura MIG, TIG y electrodo. Montaje en planta o en obra con personal calificado.",
  },
  {
    icon: Settings,
    title: "Mantenimiento industrial",
    description: "Reparación de equipos, maquinaria y estructuras con enfoque preventivo y correctivo.",
  },
  {
    icon: Building2,
    title: "Estructuras metálicas",
    description: "Soluciones para galpones, entrepisos, escaleras, cerramientos y soportes industriales.",
  },
  {
    icon: Ruler,
    title: "Trabajos a medida",
    description: "Desarrollos especiales adaptados a la necesidad funcional y operativa de cada cliente.",
  },
  {
    icon: Cog,
    title: "Reformas técnicas",
    description: "Adecuaciones, ampliaciones y mejoras sobre instalaciones existentes para ganar rendimiento.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center" y={18}>
          <p className="section-kicker">Servicios</p>
          <h2 className="section-title mt-3">Capacidad técnica para resolver cada etapa del trabajo</h2>
          <p className="section-copy mt-4">
            La propuesta combina fabricación, montaje y mantenimiento con una estética más institucional,
            preparada para presentar la empresa con mayor solidez frente al cliente.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 70} y={22}>
              <Card className="industrial-panel h-full rounded-[1.6rem] border-border/80 bg-card/90 transition-all hover:-translate-y-1 hover:border-primary/35">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <CardTitle className="pt-5 text-xl font-semibold tracking-tight text-card-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
