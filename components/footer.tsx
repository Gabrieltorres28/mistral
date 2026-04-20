import Link from "next/link"
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { BrandMark } from "@/components/brand-mark"
import { Reveal } from "@/components/reveal"
import { companyInfo, navLinks } from "@/components/site-content"
import { cn } from "@/lib/utils"

const contactItems = [
  {
    label: "WhatsApp",
    value: "Atención directa para consultas y presupuestos",
    href: companyInfo.whatsapp,
    icon: MessageCircle,
  },
  {
    label: "Teléfono",
    value: companyInfo.phoneLabel,
    href: companyInfo.phoneHref,
    icon: Phone,
  },
  {
    label: "Email",
    value: companyInfo.emailLabel,
    href: companyInfo.emailHref,
    icon: Mail,
  },
  {
    label: "Ubicación",
    value: companyInfo.location,
    href: "#contacto",
    icon: MapPin,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-[linear-gradient(180deg,rgba(238,238,233,0.88),rgba(232,232,228,0.96))] py-12 sm:py-14 lg:py-16">
      <div className="section-shell">
        <Reveal y={18}>
          <div className="corporate-dark-panel overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.45fr_0.62fr_0.83fr] lg:gap-10">
              <div className="min-w-0 max-w-2xl">
                <p className="section-kicker">Blessed Soluciones Integrales</p>
                <BrandMark variant="footer" className="mt-4 h-[210px] w-[460px] sm:h-[228px] sm:w-[510px] lg:h-[248px] lg:w-[560px]" />
                <p className="mt-4 max-w-lg text-sm leading-7 text-white/72 sm:text-[15px]">
                  Servicios para industria, hotelería e infraestructura con foco en ejecución prolija, respuesta operativa y atención personalizada.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="#contacto"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_16px_34px_rgba(217,31,38,0.24)] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Solicitar presupuesto
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={companyInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/16 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-secondary/35 hover:bg-white/10 hover:text-white"
                  >
                    Escribir por WhatsApp
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary">Navegación</p>
                <nav className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm font-medium text-white/88 transition-colors hover:border-secondary/25 hover:bg-white/10 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary">Contacto directo</p>
                <div className="mt-5 grid gap-3">
                  {contactItems.map((item, index) => {
                    const Icon = item.icon

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex min-w-0 items-start gap-3 rounded-[1.25rem] border border-white/10 bg-white/6 px-4 py-4 transition-colors hover:border-white/18 hover:bg-white/10"
                      >
                        <div
                          className={cn(
                            "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white",
                            index === 0 && "bg-secondary",
                            index === 1 && "bg-primary",
                            index > 1 && "bg-white/12",
                          )}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/54">{item.label}</p>
                          <p className="mt-1 break-words text-sm font-medium leading-6 text-white/86">{item.value}</p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.16em] text-white/54 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} {companyInfo.name}. Todos los derechos reservados.</p>
              <p>Misiones, Argentina</p>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
