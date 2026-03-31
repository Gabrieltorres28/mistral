import Link from "next/link"
import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { companyInfo } from "@/components/site-content"

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
        <Reveal className="overflow-hidden rounded-[2rem] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(242,246,239,0.98))] shadow-[0_28px_80px_rgba(20,31,26,0.08)]" y={24}>
          <div className="grid gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1fr_0.95fr] lg:gap-10 lg:px-10 lg:py-12">
            <div className="min-w-0">
              <p className="section-kicker">Contacto</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Coordinemos una solución a medida para tu operación
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                El cierre comercial apunta a facilitar la consulta: presupuesto, WhatsApp y datos de contacto bien visibles, con una presentación sobria y confiable.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="h-auto min-h-12 w-full whitespace-normal rounded-full px-5 py-3 text-center text-sm font-semibold text-primary-foreground shadow-[0_14px_34px_rgba(18,146,74,0.24)] hover:bg-primary/92 sm:w-auto"
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
                  className="h-auto min-h-12 w-full whitespace-normal rounded-full border-primary/25 bg-white px-5 py-3 text-center text-sm font-semibold text-foreground hover:bg-secondary hover:text-foreground sm:w-auto"
                >
                  <Link href={companyInfo.emailHref}>Enviar consulta por email</Link>
                </Button>
              </div>

              <div className="mt-8 rounded-[1.6rem] border border-border bg-white/92 p-3 shadow-[0_20px_44px_rgba(20,31,26,0.06)] sm:p-4">
                <div className="relative aspect-[16/11] overflow-hidden rounded-[1.2rem] border border-border/80 bg-secondary/40 sm:aspect-[16/10]">
                  <iframe
                    title="Ubicación de Blessed Soluciones Integrales"
                    src={mapEmbedSrc}
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="mt-4 flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Ubicación</p>
                    <p className="mt-2 break-words text-sm font-medium leading-6 text-foreground sm:text-base">{companyInfo.location}</p>
                  </div>
                  <Link
                    href={mapOpenHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/25 hover:text-primary"
                  >
                    Ver en Google Maps
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid gap-4 min-w-0 content-start">
              {contactItems.map((item, index) => (
                <Reveal key={item.label} delay={index * 80} y={18}>
                  <Link
                    href={item.href}
                    className="flex min-w-0 items-start gap-4 rounded-[1.5rem] border border-border bg-white/92 p-5 transition-colors hover:bg-secondary/50"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">{item.label}</p>
                      <p className="mt-2 break-words text-sm font-medium leading-6 text-foreground sm:text-base">{item.value}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}

              <Reveal delay={160} y={18}>
                <div className="rounded-[1.5rem] border border-border bg-white/92 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Cobertura</p>
                      <p className="mt-2 break-words text-sm font-medium leading-6 text-foreground sm:text-base">
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
