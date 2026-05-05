import Link from "next/link"
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { BackButton } from "@/components/back-button"
import { companyInfo } from "@/components/site-content"

export default function ContactoPage() {
  return (
    <main className="bg-background">
      <section className="relative overflow-hidden bg-[#171a19] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(213,37,43,0.18),transparent_30%),linear-gradient(135deg,rgba(23,26,25,1),rgba(39,43,41,0.94)_56%,rgba(23,26,25,1))]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
        <div className="section-shell relative grid gap-8 py-10 sm:py-14 lg:grid-cols-[1fr_360px] lg:items-end lg:py-16">
          <header>
            <BackButton
              fallbackHref="/"
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/16 bg-white/8 px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm transition hover:border-secondary/45 hover:bg-white/12"
            />
            <div className="mt-8 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-md border border-white/14 bg-primary/16 text-primary">
                <MessageCircle className="h-6 w-6" />
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary-soft">Contacto</p>
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Contacto operativo</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/74">
              Canales directos para consultas, coordinacion de tareas y solicitudes de servicio.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href={companyInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[0_14px_34px_rgba(213,37,43,0.22)] transition hover:bg-primary/90"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Escribir por WhatsApp
              </Link>
              <Link
                href={companyInfo.phoneHref}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/18 bg-white/8 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/12"
              >
                Llamar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </header>

          <aside className="rounded-xl border border-white/12 bg-white/8 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm">
            <MapPin className="h-5 w-5 text-secondary-soft" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-soft">Base operativa</p>
            <p className="mt-3 text-sm leading-7 text-white/70">{companyInfo.location}</p>
            <p className="mt-5 text-sm leading-7 text-white/62">
              Para solicitar una intervencion, conviene informar ubicacion, tipo de instalacion, criticidad operativa y servicio requerido.
            </p>
          </aside>
        </div>
      </section>

      <section className="section-shell grid gap-5 py-12 lg:grid-cols-[1fr_0.85fr] lg:py-16">
        <div className="grid gap-4">
          <Link href={companyInfo.phoneHref} className="rounded-xl border border-border bg-white p-5 shadow-[0_16px_38px_rgba(31,31,31,0.05)]">
            <Phone className="h-5 w-5 text-secondary" />
            <span className="mt-4 block text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Telefono</span>
            <span className="mt-2 block text-lg font-semibold text-graphite">{companyInfo.phoneLabel}</span>
          </Link>
          <Link href={companyInfo.emailHref} className="rounded-xl border border-border bg-white p-5 shadow-[0_16px_38px_rgba(31,31,31,0.05)]">
            <Mail className="h-5 w-5 text-primary" />
            <span className="mt-4 block text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Email</span>
            <span className="mt-2 block text-lg font-semibold text-graphite">{companyInfo.emailLabel}</span>
          </Link>
          <Link
            href={companyInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            Escribir por WhatsApp
          </Link>
        </div>

        <aside className="rounded-xl border border-border bg-white p-6 shadow-[0_16px_38px_rgba(31,31,31,0.05)]">
          <MapPin className="h-5 w-5 text-secondary" />
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Ubicacion</p>
          <p className="mt-3 text-base leading-7 text-graphite">{companyInfo.location}</p>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            Para solicitar una intervencion, conviene informar ubicacion, tipo de instalacion, criticidad operativa y servicio requerido.
          </p>
        </aside>
      </section>
    </main>
  )
}
