"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BrandMark } from "@/components/brand-mark"

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/96 backdrop-blur-md supports-[backdrop-filter]:bg-background/92">
      <div className="section-shell flex min-h-[86px] items-center justify-between gap-4 py-3">
        <Link href="/" className="min-w-0">
          <BrandMark compact className="max-w-full" />
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

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild className="h-11 rounded-full px-5 text-sm font-semibold shadow-[0_10px_24px_rgba(41,179,92,0.18)]">
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
              <BrandMark className="w-[250px]" />
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
