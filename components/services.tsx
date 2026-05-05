import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { Reveal } from "@/components/reveal"
import { serviceBlocks } from "@/data/services"

export function Services() {
  return (
    <section id="servicios" className="relative py-16 sm:py-20 lg:py-24">
      <div className="section-shell relative">
        <Reveal className="max-w-3xl" y={18}>
          <p className="section-kicker">Servicios</p>
          <h2 className="section-title mt-3">Bloques principales de trabajo</h2>
          <p className="section-copy mt-4">
            La estructura de servicios se organiza en tres bloques operativos. Cada bloque tiene una página interna con alcance, tareas, aplicaciones y proceso de trabajo.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {serviceBlocks.map((block, index) => (
            <Reveal key={block.slug} delay={index * 80} y={22}>
              <article className="h-full overflow-hidden rounded-xl border border-border bg-white shadow-[0_18px_46px_rgba(31,31,31,0.07)]">
                <ImageWithFallback
                  src={block.image}
                  alt={block.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  fallbackLabel={block.title}
                  fallbackDetail="Imagen pendiente"
                  wrapperClassName="aspect-[4/3]"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-graphite">{block.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{block.summary}</p>
                  <Link
                    href={`/servicios/${block.slug}`}
                    scroll
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    Ver detalle técnico
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
