import { ImageWithFallback } from "@/components/image-with-fallback"
import { Reveal } from "@/components/reveal"
import { vehicles } from "@/data/operational-capacity"

export function OperationalCapacity() {
  return (
    <section id="moviles" className="bg-[#202322] py-16 text-white sm:py-20 lg:py-24">
      <div className="section-shell">
        <Reveal className="max-w-3xl" y={18}>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary-soft">
            Móviles operativos
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Registro de unidades
          </h2>

          <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
            Unidades destinadas a supervisión, asistencia técnica, logística operativa, izaje y soporte en campo.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {vehicles.map((asset, index) => (
            <Reveal key={asset.image} delay={index * 80} y={22}>
              <article className="overflow-hidden rounded-xl border border-white/12 bg-white/6">
                <ImageWithFallback
                  src={asset.image}
                  alt={asset.title}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  fallbackLabel={asset.title}
                  fallbackDetail="Imagen de móvil pendiente"
                  wrapperClassName="aspect-[4/3]"
                />

                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary-soft">
                    {asset.tag}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {asset.title}
                  </h3>

                  {"plate" in asset && asset.plate && (
                    <p className="mt-1 text-sm text-white/55">
                      Patente:{" "}
                      <span className="font-semibold text-white/85">
                        {asset.plate}
                      </span>
                    </p>
                  )}

                  <p className="mt-3 text-sm leading-6 text-white/64">
                    {asset.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}