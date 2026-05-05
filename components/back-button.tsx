import Link from "next/link"
import { ArrowLeft } from "lucide-react"

type BackButtonProps = {
  label?: string
  fallbackHref?: string
  className?: string
}

export function BackButton({ label = "Volver atrás", fallbackHref = "/", className }: BackButtonProps) {
  return (
    <Link
      href={fallbackHref}
      className={className}
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Link>
  )
}
