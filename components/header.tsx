"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Mail, Menu, Phone } from "lucide-react"
import { BrandMark } from "@/components/brand-mark"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { companyInfo, navLinks } from "@/components/site-content"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full overflow-visible border-b border-border/70 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/90">
      <div className="section-shell overflow-visible py-0">
        <div className="flex min-h-[72px] items-center justify-between gap-3 overflow-visible sm:min-h-[86px] lg:min-h-[98px] lg:gap-6">
          <Link href="/" className="-my-2 shrink-0 overflow-visible sm:-my-4 lg:-my-10">
            <BrandMark variant="header" className="h-[78px] w-[246px] sm:h-[112px] sm:w-[352px] lg:h-[176px] lg:w-[560px]" />
          </Link>

          <div className="hidden lg:flex shrink-0 items-center gap-4 rounded-[1.2rem] border border-border/80 bg-white/82 px-3 py-1.5 shadow-[0_10px_22px_rgba(23,34,28,0.05)] xl:px-3.5">
            <nav className="flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="h-6 w-px bg-border/80" />

            <Button asChild className="h-9 rounded-full px-4 text-sm font-semibold shadow-[0_10px_22px_rgba(18,146,74,0.16)]">
              <Link href="#contacto">
                Solicitar presupuesto
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="flex shrink-0 items-center lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Abrir menú"
                  className="h-11 w-11 rounded-full border border-border/90 bg-white/92 text-foreground shadow-[0_10px_24px_rgba(23,34,28,0.08)]"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[min(360px,100vw)] overflow-x-hidden border-l border-border bg-[linear-gradient(180deg,rgba(248,250,246,0.98),rgba(239,244,237,0.98))] px-4 sm:px-5"
              >
                <div className="flex h-full flex-col gap-6 pt-5">
                  <div className="min-w-0 rounded-[1.45rem] border border-border/80 bg-white/90 p-4 shadow-[0_16px_36px_rgba(23,34,28,0.06)]">
                    <BrandMark variant="header" mobile className="h-[88px] w-[278px] sm:h-[96px] sm:w-[304px]" />
                    <div className="mt-4 rounded-[1.1rem] border border-primary/12 bg-primary/[0.04] px-4 py-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Respuesta operativa</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Soluciones para industria, hotelería e infraestructura con atención personalizada y ejecución ordenada.
                      </p>
                    </div>
                  </div>

                  <nav className="grid gap-2.5">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="rounded-[1.1rem] border border-border/80 bg-white/88 px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:border-primary/25 hover:bg-white hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="rounded-[1.35rem] border border-border/80 bg-white/86 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Contacto rápido</p>
                    <div className="mt-3 grid gap-2.5 text-sm">
                      <Link
                        href={companyInfo.phoneHref}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex min-w-0 items-center gap-3 rounded-[1rem] border border-border/80 bg-white px-3.5 py-3 font-medium text-foreground transition-colors hover:border-primary/25 hover:text-primary"
                      >
                        <Phone className="h-4 w-4 shrink-0 text-primary" />
                        {companyInfo.phoneLabel}
                      </Link>
                      <Link
                        href={companyInfo.emailHref}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex min-w-0 items-center gap-3 rounded-[1rem] border border-border/80 bg-white px-3.5 py-3 font-medium text-foreground transition-colors hover:border-primary/25 hover:text-primary"
                      >
                        <Mail className="h-4 w-4 shrink-0 text-primary" />
                        <span className="truncate">{companyInfo.emailLabel}</span>
                      </Link>
                    </div>
                  </div>

                  <div className="mt-auto grid gap-3 pb-6">
                    <Button asChild className="h-12 w-full rounded-full text-sm font-semibold shadow-[0_12px_26px_rgba(18,146,74,0.18)]">
                      <Link href="#contacto" onClick={() => setIsOpen(false)}>
                        Solicitar presupuesto
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
