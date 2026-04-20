import Link from "next/link"
import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { companyInfo } from "@/components/site-content"
import { cn } from "@/lib/utils"

const mapQuery = encodeURIComponent(companyInfo.location)
const mapEmbedSrc = `https://maps.google.com/maps?q=${mapQuery}&t=m&z=15&output=embed`
const mapOpenHref = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`

const contactItems = [
  {
    icon: Phone,
    label: "Teléfono",
    value: companyInfo.phoneLabel,
    href: companyInfo.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: companyInfo.emailLabel,
    href: companyInfo.emailHref,
  },
]

export function Contact() {
  return (
    <section id="contacto" className="py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <Reveal className="industrial-panel overflow-hidden" y={24}>
          <div className="grid gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1fr_0.95fr] lg:gap-10 lg:px-10 lg:py-12">
            <div className="min-w-0">
              <p className="section-kicker">Contacto</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-graphite sm:text-4xl">
                Coordinemos una solución a medida para tu operación
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                Canales de contacto directos para consultas, presupuestos y coordinación operativa, con información clara y acceso inmediato.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="h-auto min-h-12 w-full whitespace-normal rounded-full px-5 py-3 text-center text-sm font-semibold text-primary-foreground shadow-[0_16px_36px_rgba(217,31,38,0.22)] hover:bg-primary/92 hover:shadow-[0_18px_40px_rgba(217,31,38,0.26)] sm:w-auto"
                >
                  <Link href={companyInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 shrink-0" />
                    Solicitar presupuesto
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-auto min-h-12 w-full whitespace-normal rounded-full border-graphite/15 bg-white px-5 py-3 text-center text-sm font-semibold text-graphite hover:border-secondary/25 hover:bg-surface-soft hover:text-graphite sm:w-auto"
                >
                  <Link href={companyInfo.emailHref}>Enviar consulta por email</Link>
                </Button>
              </div>

              <div className="mt-8 rounded-[1.6rem] border border-border bg-white/94 p-3 shadow-[0_20px_44px_rgba(31,31,31,0.06)] sm:p-4">
                <div className="relative aspect-[16/11] overflow-hidden rounded-[1.2rem] border border-border/80 bg-surface-soft sm:aspect-[16/10]">
                  <iframe
                    title="Ubicación de Blessed Soluciones Integrales"
                    src={mapEmbedSrc}
                    className="h-full w-full"
                    loading="eager"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="mt-4 flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Ubicación</p>
                    <p className="mt-2 break-words text-sm font-medium leading-6 text-graphite sm:text-base">{companyInfo.location}</p>
                  </div>
                  <Link
                    href={mapOpenHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-graphite transition-colors hover:border-secondary/25 hover:bg-surface-soft hover:text-secondary"
                  >
                    Ver en Google Maps
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid min-w-0 content-start gap-4">
              {contactItems.map((item, index) => (
                <Reveal key={item.label} delay={index * 80} y={18}>
                  <Link
                    href={item.href}
                    className="flex min-w-0 items-start gap-4 rounded-[1.5rem] border border-border bg-white/92 p-5 transition-colors hover:border-secondary/20 hover:bg-surface-soft"
                  >
                    <div
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white",
                        index === 0 && "bg-secondary shadow-[0_12px_24px_rgba(19,138,54,0.18)]",
                        index === 1 && "bg-primary shadow-[0_12px_24px_rgba(217,31,38,0.18)]",
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">{item.label}</p>
                      <p className="mt-2 break-words text-sm font-medium leading-6 text-graphite sm:text-base">{item.value}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}

              <Reveal delay={160} y={18}>
                <div className="corporate-dark-panel p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/12 text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary/80">Cobertura</p>
                      <p className="mt-2 break-words text-sm font-medium leading-6 text-white/78 sm:text-base">
                        Base operativa en Wanda, Misiones, con atención a industria, hotelería e infraestructura en la región.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
