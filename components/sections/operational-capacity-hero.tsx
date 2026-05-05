import { BackButton } from "@/components/back-button"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { Reveal } from "@/components/reveal"

export function OperationalCapacityHero() {
  return (
    <section className="relative overflow-hidden bg-[#202322] text-white">
      <ImageWithFallback
        src="/images/vehiculos/capacidadoperativa-fondo-desktop.webp"
        alt="Móvil operativo de Blessed Soluciones Integrales con herramientas y equipamiento para servicios industriales"
        fill
        priority
        sizes="100vw"
        fallbackLabel="Capacidad operativa"
        fallbackDetail="Imagen pendiente"
        wrapperClassName="absolute inset-0 hidden md:block"
        className="object-[58%_center]"
      />

      <ImageWithFallback
        src="/images/vehiculos/capacidadoperativa-fondo-mobile.webp"
        alt="Móvil operativo de Blessed Soluciones Integrales con herramientas y equipamiento para servicios en campo"
        fill
        sizes="100vw"
        fallbackLabel="Capacidad operativa"
        fallbackDetail="Imagen pendiente"
        wrapperClassName="absolute inset-0 md:hidden"
        className="object-[center_bottom]"
      />

      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(20,23,22,0.98),rgba(20,23,22,0.88)_40%,rgba(20,23,22,0.44)_72%,rgba(20,23,22,0.22))] md:block" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,23,22,0.98)_0%,rgba(20,23,22,0.92)_42%,rgba(20,23,22,0.58)_78%,rgba(20,23,22,0.36)_100%)] md:hidden" />

      <div className="section-shell relative z-10">
        <div className="flex min-h-[620px] items-start py-16 sm:min-h-[640px] md:items-center lg:min-h-[680px] lg:py-20">
          <Reveal className="max-w-3xl" y={18}>
            <BackButton
              fallbackHref="/"
              className="mb-8 inline-flex min-h-10 items-center gap-2 rounded-full border border-white/16 bg-white/8 px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm transition hover:border-secondary/45 hover:bg-white/12"
            />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary-soft">
              Capacidad operativa
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Móviles, herramientas y logística de trabajo
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Blessed cuenta con unidades operativas, herramientas técnicas y recursos de trabajo para asistir servicios de
              mantenimiento, montajes, limpieza industrial, izaje y soporte en campo.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#moviles"
                className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(217,31,38,0.24)] transition hover:bg-primary/90"
              >
                Ver móviles
              </a>

              <a
                href="#equipamiento"
                className="rounded-md border border-white/20 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
              >
                Ver equipamiento
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
