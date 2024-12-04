'use client'

import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const benefits = [
  "90% mehr Effizienz, bei 10% der Kosten",
  "100% DORA-Konformität: Speziell auf die Anforderungen der DORA-Regulierung zugeschnitten.",
  "Umfassende Risikoanalyse: Erfasst auch Sub-Dienstleister für ein vollständiges Bild.",
  "Höchste Datensicherheit: Verarbeitung in ISO27001-zertifizierter Private Cloud.",
  "Skalierbarkeit: Wächst mit Ihren Anforderungen und passt sich neuen Regelungen an."
]

export default function Benefits() {
  return (
    <section id="vorteile" className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Ihre Vorteile auf einen Blick
      </motion.h2>
      <motion.ul 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {benefits.map((benefit, index) => (
          <motion.li 
            key={index} 
            className="flex items-start gap-4 bg-white/50 rounded-lg p-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
          >
            <CheckCircle className="text-green-600 mr-4 flex-shrink-0 mt-1" />
            <span>{benefit}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}

