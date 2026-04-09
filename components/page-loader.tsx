"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

function waitForDocumentReady() {
  return new Promise<void>((resolve) => {
    if (document.readyState === "interactive" || document.readyState === "complete") {
      resolve()
      return
    }

    const onReady = () => {
      if (document.readyState === "interactive" || document.readyState === "complete") {
        resolve()
        document.removeEventListener("readystatechange", onReady)
      }
    }

    document.addEventListener("readystatechange", onReady)
  })
}

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    document.body.style.overflow = "hidden"

    const run = async () => {
      await Promise.all([
        Promise.race([
          waitForDocumentReady(),
          new Promise<void>((resolve) => window.setTimeout(resolve, 420)),
        ]),
        new Promise<void>((resolve) => window.setTimeout(resolve, 320)),
      ])

      setIsClosing(true)
      window.setTimeout(() => {
        setIsVisible(false)
        document.body.style.overflow = ""
      }, 180)
    }

    run()

    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-[120] flex items-center justify-center bg-[linear-gradient(180deg,rgba(248,250,246,0.96),rgba(239,244,237,0.98))] transition-opacity duration-200",
        isClosing ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      <div className="relative flex h-16 w-16 items-center justify-center">
        <span className="absolute inset-0 rounded-full border-[3px] border-primary/14" />
        <span className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-primary border-r-primary animate-spin" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_0_10px_rgba(18,146,74,0.08)]" />
      </div>
    </div>
  )
}
