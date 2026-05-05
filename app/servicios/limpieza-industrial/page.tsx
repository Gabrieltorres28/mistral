import { notFound } from "next/navigation"
import { getServiceBlockBySlug } from "@/data/services"
import { ServiceBlockPage } from "../_components/service-block-page"

export default function LimpiezaIndustrialPage() {
  const block = getServiceBlockBySlug("limpieza-industrial")

  if (!block) {
    notFound()
  }

  return <ServiceBlockPage block={block} />
}
