"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const preloadAssets = [
  "/logo-prestania.png",
  "/logo-headerr.png",
  "/logo-footer.png",
  "/arauco.png",
  "/aeropuerto.png",
  "/dutyshop.png",
  "/restaurant.png",
  "/muncipalidad.png",
  "/direccionprovincial.png",
  "/services/fabricacion_montaje_industrial.png",
  "/services/intervencion_industrial.png",
  "/services/mantenimiento_edilicio.png",
  "/services/terminaciones_revestimientos.png",
]

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const img = new window.Image()
    img.onload = () => resolve()
    img.onerror = () => resolve()
    img.src = src
  })
}

function waitForWindowLoad() {
  return new Promise<void>((resolve) => {
    if (document.readyState === "complete") {
      resolve()
      return
    }

    const onLoad = () => resolve()
    window.addEventListener("load", onLoad, { once: true })
  })
}

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true)
  const [isClosing, setIsClosing] = useState(false)
  const [dotCount, setDotCount] = useState(1)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDotCount((current) => (current % 3) + 1)
    }, 380)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    document.body.style.overflow = "hidden"

    const run = async () => {
      await Promise.all([
        Promise.all(preloadAssets.map(preloadImage)),
        document.fonts?.ready ?? Promise.resolve(),
        Promise.race([
          waitForWindowLoad(),
          new Promise<void>((resolve) => window.setTimeout(resolve, 2600)),
        ]),
        new Promise<void>((resolve) => window.setTimeout(resolve, 1100)),
      ])

      setIsClosing(true)
      window.setTimeout(() => {
        setIsVisible(false)
        document.body.style.overflow = ""
      }, 420)
    }

    run()

    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-[120] flex items-center justify-center bg-[linear-gradient(180deg,rgba(248,250,246,0.985),rgba(239,244,237,0.99))] px-6 transition-opacity duration-400",
        isClosing ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,246,239,0.98))] px-6 py-10 text-center shadow-[0_32px_90px_rgba(20,31,26,0.14)] sm:px-10 sm:py-12">
        <div className="absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(18,146,74,0.4),transparent)]" />
        <div className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-24 w-24 rounded-full bg-[var(--brand-red)]/10 blur-3xl" />

        <div className="relative mx-auto h-[118px] w-[278px] sm:h-[148px] sm:w-[348px]">
          <Image
            src="/logo-prestania.png"
            alt="Blessed Soluciones Integrales"
            fill
            priority
            sizes="(max-width: 640px) 278px, 348px"
            className="object-contain"
          />
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_0_6px_rgba(18,146,74,0.12)]" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">Inicializando sitio</p>
        </div>

        <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground sm:text-[2rem]">Cargando{".".repeat(dotCount)}</p>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-muted-foreground sm:text-base">
          Soluciones integrales con compromiso, respuesta y atención profesional en cada proyecto.
        </p>

        <div className="mx-auto mt-6 h-1.5 w-full max-w-[240px] overflow-hidden rounded-full bg-primary/10">
          <div className="h-full w-full origin-left rounded-full bg-[linear-gradient(90deg,rgba(18,146,74,0.85),rgba(18,146,74,0.45),rgba(201,58,47,0.3))] animate-[loaderSweep_1.35s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  )
}
