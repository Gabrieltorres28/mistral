import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { clients } from "@/components/site-content"

function ClientChip({ name, logo }: { name: string; logo?: string }) {
  return (
    <div className="flex h-24 w-[230px] shrink-0 items-center justify-center rounded-[1.35rem] border border-border bg-white/96 px-5 shadow-[0_10px_26px_rgba(23,34,28,0.05)] sm:h-28 sm:w-[280px] sm:px-6">
      {logo ? (
        <div className="relative h-14 w-full sm:h-16">
          <Image
            src={logo}
            alt={name}
            fill
            sizes="(max-width: 640px) 230px, 280px"
            className="object-contain"
          />
        </div>
      ) : (
        <p className="text-center text-sm font-medium leading-6 text-foreground sm:text-[15px]">{name}</p>
      )}
    </div>
  )
}

export function Clients() {
  const marqueeItems = [...clients, ...clients]

  return (
    <section id="clientes" className="py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <div className="industrial-panel overflow-hidden px-0 py-6 sm:py-8 lg:py-10">
          <Reveal className="px-6 sm:px-8 lg:px-10" y={18}>
            <p className="section-kicker">Clientes destacados</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Quiénes confían en nosotros para ejecutar, mantener y resolver
            </h2>
            <p className="section-copy mt-4 max-w-2xl">
              Una selección de clientes y organizaciones que respaldan el perfil operativo de la empresa en industria, hotelería e infraestructura.
            </p>
          </Reveal>

          <div className="relative mt-8 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[rgba(248,248,245,0.98)] to-transparent sm:w-16" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[rgba(248,248,245,0.98)] to-transparent sm:w-16" />

            <div
              className="flex w-max gap-4 px-4 sm:gap-5 sm:px-6"
              style={{
                animation: 'marquee-x 24s linear infinite',
                willChange: 'transform',
              }}
            >
              {marqueeItems.map((client, index) => (
                <ClientChip key={`${client.name}-${index}`} name={client.name} logo={client.logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
