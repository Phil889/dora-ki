import './styles/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DORA KI von ADVISORI FTC - GenAI revolutioniert Ihr Compliance-Management',
  description: 'DORA KI bietet die Lösung für die Herausforderungen der DORA-Regulierung. Entdecken Sie, wie GenAI Ihr Compliance-Management revolutioniert.',
  keywords: 'DORA KI, ADVISORI FTC, Compliance-Management, GenAI, DORA-Regulierung, Finanzunternehmen',
  icons: {
    icon: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oT3LdksJSxTOAkXjTiViJVc57B6juc.png',
        type: 'image/png',
      },
    ],
    shortcut: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oT3LdksJSxTOAkXjTiViJVc57B6juc.png',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oT3LdksJSxTOAkXjTiViJVc57B6juc.png',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    title: 'DORA KI von ADVISORI FTC - GenAI revolutioniert Ihr Compliance-Management',
    description: 'DORA KI bietet die Lösung für die Herausforderungen der DORA-Regulierung. Entdecken Sie, wie GenAI Ihr Compliance-Management revolutioniert.',
    images: [{ url: 'https://example.com/og-image.jpg', width: 1200, height: 630, alt: 'DORA KI Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DORA KI von ADVISORI FTC - GenAI revolutioniert Ihr Compliance-Management',
    description: 'DORA KI bietet die Lösung für die Herausforderungen der DORA-Regulierung. Entdecken Sie, wie GenAI Ihr Compliance-Management revolutioniert.',
    images: ['https://example.com/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}

