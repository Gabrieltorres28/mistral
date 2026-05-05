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
    <header className="sticky top-0 z-50 w-full overflow-visible border-b border-border/80 bg-background/95 shadow-[0_1px_0_rgba(31,31,31,0.03)] backdrop-blur-md supports-[backdrop-filter]:bg-background/90">
      <div className="mx-auto w-full overflow-visible px-3 py-0 sm:px-5 lg:px-8 2xl:px-10">
        <div className="flex min-h-[88px] items-center justify-between gap-2 overflow-visible sm:min-h-[104px] sm:gap-3 lg:min-h-[108px] lg:gap-5 xl:min-h-[118px] xl:gap-6">
          <Link href="/" className="-my-2 min-w-0 flex-1 overflow-visible sm:-my-4 lg:mr-4 lg:flex-none xl:mr-6">
            <BrandMark
              variant="header"
              className="h-[110px] w-[min(78vw,330px)] max-w-full sm:h-[132px] sm:w-[420px] lg:h-[118px] lg:w-[370px] xl:h-[136px] xl:w-[440px] 2xl:h-[150px] 2xl:w-[500px]"
            />
          </Link>

          <div className="hidden min-w-0 shrink items-center gap-2 rounded-[1.2rem] border border-border bg-white/95 px-2.5 py-1.5 shadow-[0_14px_30px_rgba(31,31,31,0.06)] lg:flex xl:gap-4 xl:px-3.5">
            <nav className="flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap rounded-full px-2.5 py-1.5 text-sm font-medium text-foreground/86 transition-colors hover:bg-surface-soft hover:text-secondary xl:px-3"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="h-6 w-px bg-border" />

            <Button asChild className="hidden h-9 shrink-0 rounded-full px-3 text-sm font-semibold shadow-[0_14px_30px_rgba(217,31,38,0.18)] hover:shadow-[0_16px_32px_rgba(217,31,38,0.22)] xl:inline-flex xl:px-4">
              <Link href="/contacto">
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
                  className="h-12 w-12 rounded-full border border-border bg-white text-graphite shadow-[0_12px_24px_rgba(31,31,31,0.08)]"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[min(360px,100vw)] overflow-x-hidden border-l border-border bg-[linear-gradient(180deg,rgba(248,248,245,0.99),rgba(241,242,238,0.99))] px-4 sm:px-5"
              >
                <div className="flex h-full flex-col gap-6 pt-5">
                  <div className="min-w-0 rounded-[1.45rem] border border-border bg-white/96 p-4 shadow-[0_16px_36px_rgba(31,31,31,0.06)]">
                    <BrandMark
                      variant="header"
                      mobile
                      className="h-[104px] w-[min(100%,320px)] sm:h-[110px] sm:w-[320px]"
                    />
                    <div className="mt-4 rounded-[1.1rem] border border-secondary/15 bg-secondary-soft px-4 py-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary">Respuesta operativa</p>
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
                        className="rounded-[1.1rem] border border-border bg-white px-4 py-3.5 text-base font-medium text-graphite transition-colors hover:border-secondary/20 hover:bg-surface-soft hover:text-secondary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="rounded-[1.35rem] border border-border bg-white/94 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Contacto rápido</p>
                    <div className="mt-3 grid gap-2.5 text-sm">
                      <Link
                        href={companyInfo.phoneHref}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex min-w-0 items-center gap-3 rounded-[1rem] border border-border bg-surface-soft px-3.5 py-3 font-medium text-graphite transition-colors hover:border-primary/20 hover:bg-white hover:text-primary"
                      >
                        <Phone className="h-4 w-4 shrink-0 text-secondary" />
                        {companyInfo.phoneLabel}
                      </Link>
                      <Link
                        href={companyInfo.emailHref}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex min-w-0 items-center gap-3 rounded-[1rem] border border-border bg-surface-soft px-3.5 py-3 font-medium text-graphite transition-colors hover:border-primary/20 hover:bg-white hover:text-primary"
                      >
                        <Mail className="h-4 w-4 shrink-0 text-secondary" />
                        <span className="truncate">{companyInfo.emailLabel}</span>
                      </Link>
                    </div>
                  </div>

                  <div className="mt-auto grid gap-3 pb-6">
                    <Button asChild className="h-12 w-full rounded-full text-sm font-semibold shadow-[0_14px_30px_rgba(217,31,38,0.18)] hover:shadow-[0_16px_32px_rgba(217,31,38,0.22)]">
                      <Link href="/contacto" onClick={() => setIsOpen(false)}>
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
