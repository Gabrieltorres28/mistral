import Link from "next/link"
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { companyInfo } from "@/components/site-content"

const contactItems = [
  {
    icon: Phone,
    label: "Teléfono",
    value: companyInfo.phone,
    href: `tel:${companyInfo.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
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
        <Reveal className="overflow-hidden rounded-[2rem] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(241,245,238,0.98))] shadow-[0_28px_80px_rgba(20,31,26,0.08)]" y={24}>
          <div className="grid gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1fr_0.95fr] lg:gap-10 lg:px-10 lg:py-12">
            <div>
              <p className="section-kicker">Contacto</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Hablemos de su próximo proyecto metalúrgico
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                Dejé el cierre comercial con base clara, mejor lectura y el verde del logo reservado para acciones, íconos y acentos.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_14px_34px_rgba(41,179,92,0.24)] hover:bg-primary/92"
                >
                  <Link href={companyInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Escribir por WhatsApp
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-primary/25 bg-white px-6 text-sm font-semibold text-foreground hover:bg-secondary hover:text-foreground"
                >
                  <Link href={`mailto:${companyInfo.email}`}>Enviar consulta por email</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {contactItems.map((item, index) => (
                <Reveal key={item.label} delay={index * 80} y={18}>
                  <Link
                    href={item.href}
                    className="flex items-start gap-4 rounded-[1.5rem] border border-border bg-white/90 p-5 transition-colors hover:bg-secondary/55"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm font-medium leading-6 text-foreground sm:text-base">{item.value}</p>
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
