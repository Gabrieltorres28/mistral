import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { workSamples } from "@/components/site-content"

export function WorkGallery() {
  return (
    <section id="trabajos" className="relative py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.3),rgba(241,242,238,0.7)),radial-gradient(circle_at_bottom_left,rgba(31,31,31,0.04),transparent_26%)]" />
      <div className="section-shell relative">
        <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between" y={18}>
          <div className="max-w-2xl">
            <p className="section-kicker">Trabajos</p>
            <h2 className="section-title mt-3">Trabajos realizados</h2>
          </div>
          <p className="section-copy max-w-2xl">
            Algunos ejemplos de intervenciones y servicios ejecutados por la empresa en entornos industriales, edilicios y operativos.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-6">
          {workSamples.map((work, index) => (
            <Reveal key={work.title} delay={index * 80} y={22}>
              <article className="industrial-panel group overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-soft">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 560px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,31,31,0.18),transparent_28%,rgba(255,255,255,0.02))]" />
                </div>

                <div className="border-t border-border/80 px-5 py-5 sm:px-6 sm:py-6">
                  <div className="min-w-0">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-secondary">{work.category}</p>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-graphite sm:text-[1.35rem]">
                      {work.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-[15px]">{work.description}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
