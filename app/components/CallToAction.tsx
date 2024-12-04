'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function CallToAction() {
  return (
    <section className="py-12 bg-green-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Jetzt DORA KI erleben</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Kontaktieren Sie ADVISORI FTC noch heute für eine Demo von DORA KI und erfahren Sie, 
          wie Sie Ihre Compliance-Prozesse revolutionieren können.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="lg" variant="secondary" asChild className="relative">
            <motion.a 
              href="mailto:info@advisori.de?subject=Anfrage%20DORA%20KI%20TOOL&body=Hallo%20ADVISORI-Team%2C%0A%0Aich%20interessiere%20mich%20f%C3%BCr%20Ihr%20DORA%20KI%20TOOL%20und%20m%C3%B6chte%20gerne%20mehr%20erfahren.%0ABitte%20kontaktieren%20Sie%20mich%20innerhalb%20der%20n%C3%A4chsten%2024%20Stunden.%0A%0ATelefonnummer%20(Optional)%3A%0A%0AMit%20Freundlichen%20Gr%C3%BC%C3%9Fen"
              className="relative z-10"
            >
              Jetzt DORA KI testen
            </motion.a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

