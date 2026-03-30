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
        "relative shrink-0 overflow-visible",
        compact ? "h-[148px] w-[148px] sm:h-[160px] sm:w-[160px]" : "h-[168px] w-[168px] sm:h-[184px] sm:w-[184px]",
        className,
      )}
    >
      <Image
        src="/logo-ofiicial.png"
        alt="Logo de S.V.M. Servicios Integrales"
        fill
        priority
        sizes={compact ? "(max-width: 640px) 148px, 160px" : "(max-width: 640px) 168px, 184px"}
        className="object-contain"
      />
    </div>
  )
}
