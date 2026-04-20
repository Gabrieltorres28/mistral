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
        "fixed inset-0 z-[120] flex items-center justify-center bg-[linear-gradient(180deg,rgba(248,248,245,0.97),rgba(241,242,238,0.99))] transition-opacity duration-200",
        isClosing ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      <div className="relative flex h-16 w-16 items-center justify-center">
        <span className="absolute inset-0 rounded-full border-[3px] border-secondary/16" />
        <span className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent border-r-primary border-t-primary" />
        <span className="h-2.5 w-2.5 rounded-full bg-secondary shadow-[0_0_0_10px_rgba(19,138,54,0.1)]" />
      </div>
    </div>
  )
}
