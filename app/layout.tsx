import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
const metadataBase = siteUrl ? new URL(siteUrl) : undefined
const title = 'Blessed Soluciones Integrales | Montajes, mantenimiento e instalaciones en Misiones'
const description =
  'Blessed Soluciones Integrales brinda servicios para industria, hotelería e infraestructura en Misiones: montajes, mantenimiento, instalaciones, pintura, revestimientos y soporte técnico con atención personalizada.'

export const metadata: Metadata = {
  metadataBase,
  title,
  description,
  applicationName: 'Blessed Soluciones Integrales',
  keywords: [
    'Blessed Soluciones Integrales',
    'servicios integrales en Misiones',
    'montajes e instalaciones',
    'mantenimiento integral',
    'pintura y revestimientos',
    'servicios para industria',
    'servicios para hotelería',
    'Wanda Misiones',
  ],
  authors: [{ name: 'Blessed Soluciones Integrales' }],
  creator: 'Blessed Soluciones Integrales',
  publisher: 'Blessed Soluciones Integrales',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/logo-prestania.png', type: 'image/png' },
      { url: '/favicon-blessed.png', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: '/logo-prestania.png',
    apple: '/logo-prestania.png',
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
        alt: 'Blessed Soluciones Integrales',
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
  themeColor: '#1f1f1f',
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
      <body className={`${manrope.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
