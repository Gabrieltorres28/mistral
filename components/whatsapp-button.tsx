"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { companyInfo } from "@/components/site-content"

export function WhatsAppButton() {
  return (
    <Link
      href={companyInfo.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_28px_rgba(37,211,102,0.32)] transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 sm:bottom-5 sm:right-5"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </Link>
  )
}
