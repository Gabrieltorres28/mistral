import Image from "next/image"
import { cn } from "@/lib/utils"

type BrandMarkProps = {
  className?: string
  variant?: "header" | "footer"
  mobile?: boolean
}

const brandConfig = {
  header: {
    src: "/logo-headerr.webp",
    alt: "Logo de Blessed Soluciones Integrales",
    defaultSize: "h-[126px] w-[396px] sm:h-[142px] sm:w-[448px] lg:h-[176px] lg:w-[560px]",
    mobileSize: "h-[126px] w-[396px]",
    sizes: "(max-width: 640px) 396px, (max-width: 1024px) 448px, 560px",
  },
  footer: {
    src: "/logo-footer.webp",
    alt: "Logo de Blessed Soluciones Integrales con claim institucional",
    defaultSize: "h-[164px] w-[382px] sm:h-[176px] sm:w-[420px] lg:h-[196px] lg:w-[468px]",
    mobileSize: "h-[170px] w-[392px]",
    sizes: "(max-width: 640px) 392px, (max-width: 1024px) 420px, 468px",
  },
} as const

export function BrandMark({ className, variant = "header", mobile = false }: BrandMarkProps) {
  const config = brandConfig[variant]

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-visible",
        mobile ? config.mobileSize : config.defaultSize,
        className,
      )}
    >
      <Image
        src={config.src}
        alt={config.alt}
        fill
        priority={variant === "header" && !mobile}
        sizes={config.sizes}
        className="object-contain object-left"
      />
    </div>
  )
}
