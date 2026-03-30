import Link from "next/link"
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { companyInfo } from "@/components/site-content"

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
  {
    icon: MapPin,
    label: "Ubicación",
    value: companyInfo.location,
    href: "#contacto",
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
            </div>

            <div className="grid gap-4 min-w-0">
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
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
