import Image from "next/image"
import { cn } from "@/lib/utils"

type BrandMarkProps = {
  className?: string
  compact?: boolean
}

export function BrandMark({ className, compact = false }: BrandMarkProps) {
  return (
    <div
      className={cn(
        "relative shrink-0",
        compact ? "h-[52px] w-[190px] sm:h-[56px] sm:w-[220px]" : "h-[64px] w-[240px] sm:h-[72px] sm:w-[300px]",
        className,
      )}
    >
      <Image
        src="/logomistral-horizontal.png"
        alt="Logo de Mistral Servicios Metalúrgicos"
        fill
        priority
        sizes={compact ? "(max-width: 640px) 190px, 220px" : "(max-width: 640px) 240px, 300px"}
        className="object-contain"
      />
    </div>
  )
}
