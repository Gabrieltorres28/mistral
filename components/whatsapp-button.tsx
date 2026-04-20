"use client"

import Image from "next/image"
import Link from "next/link"
import { companyInfo } from "@/components/site-content"

export function WhatsAppButton() {
  return (
    <Link
      href={companyInfo.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-white shadow-[0_18px_34px_rgba(31,31,31,0.16)] transition-all hover:-translate-y-0.5 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary/70 focus:ring-offset-2 sm:bottom-5 sm:right-5"
      aria-label="Contactar por WhatsApp"
    >
      <Image
        src="/whatsapp_101778.png"
        alt="WhatsApp"
        width={56}
        height={56}
        className="h-14 w-14 rounded-full object-contain"
      />
    </Link>
  )
}
