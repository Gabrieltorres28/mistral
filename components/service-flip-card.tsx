"use client"

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
  isFlipped?: boolean
  onFlip?: () => void
  onReset?: () => void
}

export function ServiceFlipCard({
  index,
  title,
  description,
  detailTitle,
  detailItems,
  iconKey,
  isFlipped = false,
  onFlip,
  onReset,
}: ServiceFlipCardProps) {
  const Icon = icons[iconKey]

  return (
    <div className="group h-[580px] overflow-hidden [perspective:1400px] sm:h-[500px] lg:h-[390px]">
      <div
        className={cn(
          "relative h-full w-full rounded-[1.75rem] transition-transform duration-700 [transform-style:preserve-3d] lg:group-hover:[transform:rotateY(180deg)]",
          isFlipped ? "[transform:rotateY(180deg)]" : "",
        )}
      >
        <article className="absolute inset-0 flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/90 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(247,249,246,0.98))] p-5 shadow-[0_24px_64px_rgba(23,34,28,0.08)] [backface-visibility:hidden] sm:p-6 lg:p-7">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,rgba(18,146,74,0.95),rgba(18,146,74,0.35),rgba(201,58,47,0.18))]" />

          <div className="flex items-start justify-between gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.82)]">
              <Icon className="h-5 w-5" />
            </div>
            <span className="rounded-full border border-primary/12 bg-primary/[0.05] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/85">
              0{index + 1}
            </span>
          </div>

          <div className="mt-5 rounded-[1.35rem] border border-border/80 bg-white px-4 py-4 shadow-[0_12px_26px_rgba(23,34,28,0.04)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Servicio</p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground sm:text-xl">{title}</h3>
          </div>

          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">{description}</p>

          <div className="mt-auto flex items-center justify-between gap-3 pt-5 lg:hidden">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Detalle técnico</span>
            <button
              type="button"
              onClick={onFlip}
              className="inline-flex items-center gap-2 rounded-full border border-primary/18 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-[0_10px_24px_rgba(18,146,74,0.08)]"
            >
              Ver más detalle
              <ArrowRightLeft className="h-4 w-4" />
            </button>
          </div>
        </article>

        <article className="absolute inset-0 flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[rgba(20,31,26,0.18)] bg-[linear-gradient(165deg,rgba(24,36,29,0.98),rgba(32,47,38,0.98))] p-5 shadow-[0_24px_64px_rgba(18,27,22,0.18)] [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-6 lg:p-7">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(18,146,74,0.26),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(201,58,47,0.14),transparent_22%)]" />
          <div className="relative z-10 flex h-full min-h-0 flex-col">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
                <Icon className="h-5 w-5" />
              </div>
              <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/82">
                Detalle
              </span>
            </div>

            <div className="mt-4 rounded-[1.25rem] border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">{detailTitle}</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-white sm:text-xl">{title}</h3>
            </div>

            <div className="mt-3 grid gap-2 sm:mt-4 sm:gap-2.5">
              {detailItems.map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-white/10 bg-white/96 px-4 py-3 text-sm leading-5 text-slate-800 shadow-[0_10px_24px_rgba(5,8,6,0.1)] sm:leading-6"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between gap-3 pt-5 lg:hidden">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/58">Vista principal</span>
              <button
                type="button"
                onClick={onReset}
                className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm"
              >
                Volver
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
