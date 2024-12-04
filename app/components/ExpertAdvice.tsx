import { AlertTriangle } from 'lucide-react'

export default function ExpertAdvice() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Expertenrat: Warum jetzt handeln?</h2>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <div className="flex items-start mb-4">
            <AlertTriangle className="text-yellow-500 mr-4 flex-shrink-0 mt-1" />
            <p className="text-lg">
              Als Experten für Compliance raten wir dringend dazu, frühzeitig Maßnahmen zur DORA-Konformität zu ergreifen. 
              Die Frist rückt näher, und Verzögerungen können zu erheblichen Risiken führen.
            </p>
          </div>
          <p className="text-lg font-semibold mt-4">
            Unser Tipp: Nutzen Sie die Vorteile von DORA KI, um Ihre Compliance-Prozesse zu optimieren und rechtzeitig alle Anforderungen zu erfüllen.
          </p>
        </div>
      </div>
    </section>
  )
}

