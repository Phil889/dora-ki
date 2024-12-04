import { ArrowRight } from 'lucide-react'

const workflows = [
  "Automatische Erkennung relevanter Klauseln",
  "Kontinuierliche Überwachung von Verträgen",
  "Sofortige Identifizierung von Anpassungsbedarf",
  "Intelligente Verknüpfung mit DORA-Anforderungen"
]

export default function AutomatedWorkflows() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Automatisierte Workflows für maximale Effektivität</h2>
        <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
          Mit DORA KI wandeln Sie zeitaufwändige manuelle Prozesse in effiziente automatisierte Workflows um.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workflows.map((workflow, index) => (
            <div key={index} className="flex items-center bg-gray-50 p-6 rounded-lg">
              <ArrowRight className="text-green-600 mr-4 flex-shrink-0" />
              <span className="text-lg">{workflow}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

