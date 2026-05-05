import { notFound } from "next/navigation"
import { getServiceBlockBySlug } from "@/data/services"
import { ServiceBlockPage } from "../_components/service-block-page"

export default function MantenimientoGastronomicoPage() {
  const block = getServiceBlockBySlug("mantenimiento-gastronomico")

  if (!block) {
    notFound()
  }

  return <ServiceBlockPage block={block} />
}
