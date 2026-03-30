import Link from "next/link"
import { BrandMark } from "@/components/brand-mark"
import { Reveal } from "@/components/reveal"

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-[#eef1ea] py-10 sm:py-12">
      <div className="section-shell">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between" y={18}>
          <div className="max-w-md">
            <BrandMark />
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Presentación institucional orientada a transmitir perfil industrial, orden técnico y una imagen más sólida frente a potenciales clientes.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link, index) => (
              <Reveal key={link.href} delay={index * 60} y={14}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </Reveal>
            ))}
          </nav>
        </Reveal>

        <Reveal delay={120} className="mt-8 border-t border-border/70 pt-6" y={12}>
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            © {new Date().getFullYear()} Mistral Servicios Metalúrgicos. Todos los derechos reservados.
          </p>
        </Reveal>
      </div>
    </footer>
  )
}
