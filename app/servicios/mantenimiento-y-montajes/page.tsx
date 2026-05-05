import { notFound } from "next/navigation"
import { getServiceBlockBySlug } from "@/data/services"
import { ServiceBlockPage } from "../_components/service-block-page"

export default function MantenimientoYMontajesPage() {
  const block = getServiceBlockBySlug("mantenimiento-y-montajes")

  if (!block) {
    notFound()
  }

  return <ServiceBlockPage block={block} />
}
