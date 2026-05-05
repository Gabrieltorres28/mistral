import Link from "next/link"
import { ClipboardCheck, ShieldCheck, Truck, Utensils, Wrench } from "lucide-react"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { OperationalCapacityHero } from "@/components/sections/operational-capacity-hero"
import { companyInfo } from "@/components/site-content"
import { equipmentCategories, logistics, vehicles } from "@/data/operational-capacity"

const equipmentIcons = [Wrench, Wrench, Wrench, Wrench, Utensils, ShieldCheck, ClipboardCheck]

export default function CapacidadOperativaPage() {
  return (
    <main>
      <OperationalCapacityHero />

      <section id="moviles" className="section-band py-12 lg:py-16">
        <div className="section-shell">
          <div className="flex flex-col gap-3 border-b border-border pb-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-kicker">Móviles operativos</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-graphite">Unidades para trabajo en campo</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              Unidades destinadas a supervisión, asistencia técnica, logística operativa, izaje y soporte en terreno.
            </p>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((vehicle) => (
              <article key={vehicle.image} className="industrial-panel overflow-hidden">
                <ImageWithFallback
                  src={vehicle.image}
                  alt={vehicle.title}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  fallbackLabel={vehicle.title}
                  fallbackDetail="Móvil pendiente"
                  wrapperClassName="aspect-[4/3]"
                />

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">{vehicle.tag}</p>
                    <Truck className="h-5 w-5 text-primary" />
                  </div>

                  <h3 className="mt-2 text-lg font-semibold text-graphite">
                    {vehicle.title}
                  </h3>

                  {"plate" in vehicle && vehicle.plate && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      Patente:{" "}
                      <span className="font-semibold text-graphite">
                        {vehicle.plate}
                      </span>
                    </p>
                  )}

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {vehicle.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="equipamiento" className="py-12 lg:py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section>
            <div className="border-b border-border pb-5">
              <p className="section-kicker">Herramientas y equipamiento</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-graphite">Recursos por tipo de intervención</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                Equipamiento técnico organizado por tipo de intervención para responder a tareas de mantenimiento, montaje,
                limpieza y asistencia operativa.
              </p>
            </div>

            <div className="mt-6 grid gap-4">
              {equipmentCategories.map((category, index) => {
                const Icon = equipmentIcons[index] ?? Wrench
                return (
                <article key={category.title} className="industrial-panel p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-graphite">{category.title}</h3>

                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-3">
                    {category.items.map((item) => (
                      <li key={item} className="rounded-md border border-border bg-white px-3 py-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
                )
              })}
            </div>
          </section>

          <section>
            <div className="border-b border-border pb-5">
              <p className="section-kicker">Logística de trabajo</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-graphite">Organización operativa</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Coordinación de recursos, personal y movilidad para ejecutar trabajos programados y respuestas en campo.
              </p>
            </div>

            <div className="mt-6 grid gap-4">
              {logistics.map((item, index) => (
                <article key={item.title} className="corporate-dark-panel p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/10 text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>

                  <p className="mt-2 text-sm leading-7 text-white/70">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="bg-[#202322] py-14 text-white lg:py-16">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary-soft">Consulta técnica</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Evaluación operativa y presupuesto
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
              Para coordinar una intervención, se releva ubicación, tipo de servicio, condiciones de acceso, criticidad y recursos necesarios.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={companyInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white"
              >
                Contactar por WhatsApp
              </Link>
              <Link
                href="/contacto"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/18 bg-white/8 px-5 py-3 text-sm font-semibold text-white"
              >
                Ver datos de contacto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
