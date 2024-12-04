import { Brain, Zap, Puzzle } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: "Natürliche Sprachverarbeitung",
    description: "Versteht und interpretiert Verträge wie ein menschlicher Experte."
  },
  {
    icon: Zap,
    title: "Kontinuierliches Lernen",
    description: "Passt sich an neue Regelungen und Anforderungen an."
  },
  {
    icon: Puzzle,
    title: "Schnelle Integration",
    description: "Lässt sich nahtlos in bestehende Systeme einbinden."
  }
]

export default function GenAITechnology() {
  return (
    <section id="technologie" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">GenAI-Technologie: Die Zukunft der Vertragsanalyse</h2>
        <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
          Die GenAI-Technologie ermöglicht es, komplexe IKT-Dienstleisterverträge automatisch zu analysieren. 
          Sie erkennt relevante Klauseln und gleicht sie mit den DORA-Anforderungen ab.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="text-green-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

