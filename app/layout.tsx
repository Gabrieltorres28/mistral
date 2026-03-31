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
const title = 'Blessed Soluciones Integrales | Servicios para industria, hotelería e infraestructura'
const description =
  'Blessed Soluciones Integrales brinda montajes, mantenimiento, instalaciones, pintura, revestimientos y soporte técnico para industria, hotelería e infraestructura en Misiones.'

export const metadata: Metadata = {
  metadataBase,
  title,
  description,
  applicationName: 'Blessed Soluciones Integrales',
  icons: {
    icon: '/favicon-blessed.png',
    shortcut: '/favicon-blessed.png',
    apple: '/apple-touch-icon-blessed.png',
  },
  openGraph: {
    title,
    description,
    siteName: 'Blessed Soluciones Integrales',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/logo-headerr.png',
        width: 1536,
        height: 1024,
        alt: 'Logo de Blessed Soluciones Integrales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/logo-headerr.png'],
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
