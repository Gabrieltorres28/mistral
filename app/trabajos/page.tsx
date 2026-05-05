import Link from "next/link"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { Reveal } from "@/components/reveal"
import { workSamples } from "@/components/site-content"
import { services } from "@/data/services"

export default function TrabajosPage() {
  return (
    <main>
      <section className="bg-[#202322] text-white">
        <Reveal className="section-shell py-12 sm:py-16" y={18}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary-soft">Trabajos</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Áreas de aplicación</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">
            Vista preliminar de aplicaciones operativas derivadas de la estructura de servicios. Los casos reales deben cargarse con información verificada.
          </p>
        </Reveal>
      </section>

      <section className="section-shell grid gap-5 py-12 md:grid-cols-2 lg:py-16">
        {workSamples.map((work, index) => (
          <Reveal key={work.title} delay={index * 80} y={22}>
          <article className="overflow-hidden rounded-xl border border-border bg-white shadow-[0_18px_46px_rgba(31,31,31,0.07)]">
            <ImageWithFallback
              src={work.image}
              alt={work.title}
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              fallbackLabel={work.title}
              fallbackDetail="Imagen de trabajo pendiente"
              wrapperClassName="aspect-[4/3]"
            />
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">{work.category}</p>
              <h2 className="mt-2 text-xl font-semibold text-graphite">{work.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{work.description}</p>
            </div>
          </article>
          </Reveal>
        ))}
      </section>

      <section className="section-shell pb-16">
        <Reveal className="rounded-xl border border-border bg-white p-6 shadow-[0_16px_38px_rgba(31,31,31,0.05)]" y={18}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-kicker">Aplicaciones</p>
              <h2 className="mt-3 text-2xl font-semibold text-graphite">Entornos cubiertos por los servicios</h2>
            </div>
            <Link href="/servicios" className="text-sm font-semibold text-primary">Ver servicios</Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.slug} className="rounded-lg border border-border bg-surface-soft p-5">
            <h3 className="text-lg font-semibold text-graphite">{service.title}</h3>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted-foreground">
              {service.applications.map((application) => (
                <li key={application}>{application}</li>
              ))}
            </ul>
          </article>
        ))}
          </div>
        </Reveal>
      </section>
    </main>
  )
}
