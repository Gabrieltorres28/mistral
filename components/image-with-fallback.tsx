import Image, { type ImageProps } from "next/image"
import { existsSync } from "fs"
import path from "path"
import { cn } from "@/lib/utils"

type ImageWithFallbackProps = Omit<ImageProps, "onError"> & {
  fallbackLabel: string
  fallbackDetail?: string
  wrapperClassName?: string
}

export function ImageWithFallback({
  fallbackLabel,
  fallbackDetail = "Imagen institucional pendiente",
  wrapperClassName,
  className,
  alt,
  ...props
}: ImageWithFallbackProps) {
  const src = typeof props.src === "string" ? props.src : ""
  const publicPath = src.startsWith("/") ? path.join(process.cwd(), "public", src) : ""
  const canRenderImage = !src.startsWith("/") || existsSync(publicPath)

  return (
    <div className={cn("relative overflow-hidden bg-[#2f3332]", wrapperClassName)}>
      {canRenderImage ? (
        <Image
          {...props}
          alt={alt}
          className={cn("object-cover", className)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col justify-end bg-[linear-gradient(135deg,#242827,#3a3f3d_48%,#202322)] p-5 text-white">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px] opacity-45" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/58">{fallbackDetail}</p>
            <p className="mt-2 text-lg font-semibold text-white">{fallbackLabel}</p>
          </div>
        </div>
      )}
    </div>
  )
}
