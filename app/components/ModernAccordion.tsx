'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X } from 'lucide-react'

interface AccordionItem {
  title: string
  content: string
}

const items: AccordionItem[] = [
  {
    title: "Innovative GenAI-Technologie für maximale Effizienz",
    content: "Das ADVISORI DORA KI Tool ist eine hochmoderne Lösung, die von DORA-, Branchen- und KI-Experten entwickelt wurde. Durch den Einsatz modernster GenAI-Technologie revolutioniert es die Art und Weise, wie Finanzunternehmen ihre DORA-Compliance managen. Die KI-gestützte Analyse ermöglicht eine beispiellose Geschwindigkeit und Präzision bei der Überprüfung von IKT-Dienstleisterverträgen."
  },
  {
    title: "Maßgeschneidert für die Finanzbranche",
    content: "Speziell entwickelt für die Anforderungen von Finanzinstituten, berücksichtigt unsere Lösung alle branchenspezifischen Regulierungen und Compliance-Anforderungen. Die KI wurde mit umfangreichen Datensätzen aus der Finanzbranche trainiert."
  },
  {
    title: "Umfassende Automatisierung der Vertragsprüfung",
    content: "Automatisierte Analyse und Bewertung von Verträgen nach DORA-Kriterien, kontinuierliche Überwachung von Änderungen und proaktive Benachrichtigungen bei Handlungsbedarf. Die KI erkennt relevante Klauseln und potenzielle Risiken automatisch."
  }
]

export default function ModernAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={{ backgroundColor: expandedIndex === index ? 'rgba(0, 170, 112, 0.05)' : 'transparent' }}
          className={`rounded-lg overflow-hidden border border-transparent transition-all duration-300 ${
            expandedIndex === index ? 'border-[#00AA70]/30' : 'hover:border-[#00AA70]/10'
          }`}
        >
          <button
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left"
          >
            <span className={`text-lg font-medium transition-colors duration-300 ${
              expandedIndex === index ? 'text-[#00AA70]' : 'text-gray-800'
            }`}>
              {item.title}
            </span>
            <motion.div
              initial={false}
              animate={{ rotate: expandedIndex === index ? 45 : 0 }}
              className={`flex-shrink-0 ml-4 ${
                expandedIndex === index ? 'text-[#00AA70]' : 'text-gray-400'
              }`}
            >
              {expandedIndex === index ? (
                <X className="w-6 h-6" />
              ) : (
                <Plus className="w-6 h-6" />
              )}
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {expandedIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="px-6 pb-4">
                  <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="prose prose-green max-w-none"
                  >
                    <p className="text-gray-600 leading-relaxed">{item.content}</p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

