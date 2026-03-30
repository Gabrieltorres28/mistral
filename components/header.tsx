"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { BrandMark } from "@/components/brand-mark"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks } from "@/components/site-content"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full overflow-visible border-b border-border/70 bg-background/96 backdrop-blur-md supports-[backdrop-filter]:bg-background/92">
      <div className="section-shell flex min-h-[96px] items-center justify-between gap-4 py-1 overflow-visible">
        <Link href="/" className="relative z-10 -my-8 shrink-0 sm:-my-9">
          <BrandMark compact />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="h-11 rounded-full px-5 text-sm font-semibold shadow-[0_12px_26px_rgba(18,146,74,0.18)]">
            <Link href="#contacto">Solicitar presupuesto</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Abrir menú"
              className="h-11 w-11 rounded-full border border-border bg-card/70"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] border-l border-border bg-background px-6">
            <div className="flex h-full flex-col gap-8 pt-6">
              <BrandMark compact className="h-[160px] w-[160px]" />

              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-2xl border border-transparent px-4 py-3 text-base font-medium text-foreground transition-colors hover:border-border hover:bg-secondary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto space-y-3 pb-6">
                <p className="text-sm leading-6 text-muted-foreground">
                  Soluciones integrales para industria, hotelería e infraestructura con atención personalizada y respuesta operativa.
                </p>
                <Button asChild className="h-12 w-full rounded-full text-sm font-semibold">
                  <Link href="#contacto" onClick={() => setIsOpen(false)}>
                    Solicitar presupuesto
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
