import Link from "next/link"
import { BrandMark } from "@/components/brand-mark"
import { Reveal } from "@/components/reveal"
import { companyInfo, navLinks } from "@/components/site-content"

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-[#eff3ec] py-10 sm:py-12">
      <div className="section-shell">
        <Reveal className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.8fr] lg:items-start" y={18}>
          <div className="max-w-sm">
            <BrandMark className="-ml-2 h-[170px] w-[170px] sm:h-[186px] sm:w-[186px]" />
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Landing institucional orientada a vender servicios integrales con una presentación más moderna, clara y comercial.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Navegación</p>
            <nav className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Contacto</p>
            <div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              <p>{companyInfo.phoneLabel}</p>
              <p>{companyInfo.emailLabel}</p>
              <p>{companyInfo.location}</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 border-t border-border/70 pt-6">
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            © {new Date().getFullYear()} {companyInfo.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
