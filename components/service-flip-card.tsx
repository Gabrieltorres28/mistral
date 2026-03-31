"use client"

import { useState } from "react"
import { ArrowRightLeft, Drill, Paintbrush, RotateCcw, Settings2, Wrench } from "lucide-react"
import { cn } from "@/lib/utils"

const icons = {
  drill: Drill,
  wrench: Wrench,
  paintbrush: Paintbrush,
  settings: Settings2,
} as const

type ServiceFlipCardProps = {
  index: number
  title: string
  description: string
  detailTitle: string
  detailItems: string[]
  iconKey: keyof typeof icons
}

export function ServiceFlipCard({ index, title, description, detailTitle, detailItems, iconKey }: ServiceFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const Icon = icons[iconKey]

  return (
    <div className="group h-[340px] [perspective:1400px] sm:h-[360px]">
      <div
        className={cn(
          "relative h-full w-full rounded-[1.75rem] transition-transform duration-700 [transform-style:preserve-3d] lg:group-hover:[transform:rotateY(180deg)]",
          isFlipped ? "[transform:rotateY(180deg)]" : "",
        )}
      >
        <article className="industrial-panel absolute inset-0 flex h-full flex-col p-6 [backface-visibility:hidden] sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary surface-glow">
              <Icon className="h-5 w-5" />
            </div>
            <span className="rounded-full border border-primary/10 bg-white/72 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground/80">
              0{index + 1}
            </span>
          </div>

          <div className="mt-5 rounded-[1.4rem] bg-[linear-gradient(135deg,rgba(18,146,74,0.09),rgba(201,58,47,0.04))] px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Servicio</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">{title}</h3>
          </div>

          <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">{description}</p>

          <div className="mt-auto flex items-center justify-between gap-3 pt-5 lg:hidden">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Detalle técnico</span>
            <button
              type="button"
              onClick={() => setIsFlipped(true)}
              className="inline-flex items-center gap-2 rounded-full border border-primary/18 bg-white px-4 py-2 text-sm font-semibold text-primary"
            >
              Ver más detalle
              <ArrowRightLeft className="h-4 w-4" />
            </button>
          </div>
        </article>

        <article className="industrial-panel absolute inset-0 flex h-full flex-col justify-between overflow-hidden p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-7">
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(18,146,74,0.14),rgba(255,255,255,0.9),rgba(201,58,47,0.06))]" />
          <div className="relative z-10">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_14px_28px_rgba(18,146,74,0.2)]">
                <Icon className="h-5 w-5" />
              </div>
              <span className="rounded-full border border-primary/12 bg-white/78 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Detalle
              </span>
            </div>

            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">{detailTitle}</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">{title}</h3>

            <div className="mt-5 grid gap-3">
              {detailItems.map((item) => (
                <div key={item} className="rounded-[1rem] border border-white/70 bg-white/82 px-4 py-3 text-sm leading-6 text-foreground shadow-[0_10px_24px_rgba(23,34,28,0.04)]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-5 flex items-center justify-between gap-3 lg:hidden">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Volver al frente</span>
            <button
              type="button"
              onClick={() => setIsFlipped(false)}
              className="inline-flex items-center gap-2 rounded-full border border-primary/18 bg-white px-4 py-2 text-sm font-semibold text-primary"
            >
              Volver
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </article>
      </div>
    </div>
  )
}
