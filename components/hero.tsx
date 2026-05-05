import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { serviceBlocks } from "@/data/services"
import { companyInfo } from "@/components/site-content"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#202322] py-16 text-white sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,17,16,0.94),rgba(15,17,16,0.76)_45%,rgba(15,17,16,0.36))]" />
      <ImageWithFallback
        src="/images/fondo-hero-desktop.webp"
        alt="Operacion industrial de Blessed Soluciones Integrales"
        fill
        priority
        sizes="100vw"
        fallbackLabel="Blessed Soluciones Integrales"
        fallbackDetail="Hero industrial pendiente"
        wrapperClassName="absolute inset-0"
        className="opacity-55"
      />
      <div className="section-shell relative">
        <div className="max-w-4xl">
          <Reveal y={18}>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary-soft">{companyInfo.name}</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Servicios tecnicos para operaciones industriales, edilicias y gastronomicas.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              Mantenimiento, montajes, limpieza industrial y soporte operativo con estructura preparada para trabajos en campo.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-md px-6 text-sm font-semibold text-primary-foreground shadow-[0_16px_36px_rgba(217,31,38,0.22)] hover:bg-primary/92"
              >
                <Link href={companyInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Solicitar presupuesto
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-md border-white/20 bg-white/10 px-6 text-sm font-semibold text-white hover:bg-white hover:text-graphite"
              >
                <Link href="/servicios">
                  Ver servicios
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {serviceBlocks.map((block) => (
                <Link
                  key={block.slug}
                  href={`/servicios/${block.slug}`}
                  scroll
                  className="group rounded-lg border border-white/14 bg-white/10 p-4 text-left backdrop-blur-sm transition-colors hover:bg-white/16"
                >
                  <p className="text-sm font-semibold text-white">{block.title}</p>
                  <p className="mt-2 text-xs leading-5 text-white/66">{block.summary}</p>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
