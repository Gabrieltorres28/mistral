import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
const metadataBase = siteUrl ? new URL(siteUrl) : undefined
const title = 'S.V.M. Servicios Integrales | Industria, Hotelería e Infraestructura'
const description =
  'Servicios integrales para industria, hotelería e infraestructura: montajes, instalaciones, mantenimiento, pintura, revestimientos y soporte técnico.'

export const metadata: Metadata = {
  metadataBase,
  title,
  description,
  applicationName: 'S.V.M. Servicios Integrales',
  icons: {
    icon: '/logo-ofiicial.png',
    shortcut: '/logo-ofiicial.png',
    apple: '/logo-ofiicial.png',
  },
  openGraph: {
    title,
    description,
    siteName: 'S.V.M. Servicios Integrales',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/logo-ofiicial.png',
        width: 1024,
        height: 1536,
        alt: 'Logo de S.V.M. Servicios Integrales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/logo-ofiicial.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#12924a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
