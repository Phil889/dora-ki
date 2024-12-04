import { Metadata } from 'next'
import Script from 'next/script'
import Header from './components/Header'
import Hero from './components/Hero'
import VideoDemo from './components/VideoDemo'
import Benefits from './components/Benefits'
import GenAITechnology from './components/GenAITechnology'
import AutomatedWorkflows from './components/AutomatedWorkflows'
import ConvincingStats from './components/ConvincingStats'
import FAQ from './components/FAQ'
import ExpertAdvice from './components/ExpertAdvice'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'DORA KI von ADVISORI FTC - GenAI revolutioniert Ihr Compliance-Management',
  description: 'DORA KI bietet die Lösung für die Herausforderungen der DORA-Regulierung. Entdecken Sie, wie GenAI Ihr Compliance-Management revolutioniert.',
}

export default function SalesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Hero />
        <VideoDemo />
        <Benefits />
        <GenAITechnology />
        <AutomatedWorkflows />
        <ConvincingStats />
        <FAQ />
        <ExpertAdvice />
        <CallToAction />
      </main>
      <Footer />
      <Script id="structured-data" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "DORA KI",
            "description": "GenAI-basierte Lösung für DORA-Compliance in Finanzunternehmen",
            "brand": {
              "@type": "Brand",
              "name": "ADVISORI FTC"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://www.advisori.de/dora-ki",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock"
            }
          }
        `}
      </Script>
    </>
  )
}

