'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="text-center py-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4"
      >
        DORA KI von ADVISORI FTC
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl mb-6"
      >
        GenAI revolutioniert Ihr Compliance-Management
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl mb-12 max-w-2xl mx-auto"
      >
        Die Einhaltung der DORA-Regulierung stellt Finanzunternehmen vor enorme Herausforderungen. 
        DORA KI bietet die Lösung.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Button size="lg" asChild>
          <a href="mailto:info@advisori.de?subject=Anfrage%20DORA%20KI%20TOOL&body=Hallo%20ADVISORI-Team%2C%0A%0Aich%20interessiere%20mich%20f%C3%BCr%20Ihr%20DORA%20KI%20TOOL%20und%20m%C3%B6chte%20gerne%20mehr%20erfahren.%0ABitte%20kontaktieren%20Sie%20mich%20innerhalb%20der%20n%C3%A4chsten%2024%20Stunden.%0A%0ATelefonnummer%20(Optional)%3A%0A%0AMit%20Freundlichen%20Gr%C3%BC%C3%9Fen">
            Jetzt DORA KI testen
          </a>
        </Button>
      </motion.div>
    </section>
  )
}

