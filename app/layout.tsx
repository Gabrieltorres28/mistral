import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Mistral Servicios Metalúrgicos | Soluciones Industriales',
  description:
    'Empresa de servicios metalúrgicos especializada en fabricación, estructuras, soldaduras, montajes y mantenimiento industrial.',
  icons: {
    icon: '/logomistral.png',
    shortcut: '/logomistral.png',
    apple: '/logomistral.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#4f946c',
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
