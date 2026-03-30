import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'S.V.M. Servicios Integrales | Industria, Hotelería e Infraestructura',
  description:
    'Servicios integrales para industria, hotelería e infraestructura: montajes, instalaciones, mantenimiento, pintura, revestimientos y soporte técnico.',
  icons: {
    icon: '/logo-ofiicial.png',
    shortcut: '/logo-ofiicial.png',
    apple: '/logo-ofiicial.png',
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
