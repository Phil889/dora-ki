import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CheckCircle, Clock, AlertTriangle, EuroIcon } from 'lucide-react'

const stats = [
  { 
    process: "Analysezeit pro Vertrag",
    manual: "5 Stunden",
    withDoraKi: "1 Stunde",
    icon: Clock
  },
  { 
    process: "Fehlerquote",
    manual: "10%",
    withDoraKi: "<1%",
    icon: AlertTriangle
  },
  { 
    process: "Kosten",
    manual: "Hoch",
    withDoraKi: "Niedriger",
    icon: EuroIcon
  }
]

const highlights = [
  "90% Effizienzsteigerung, bei 10% der Kosten",
  "100% DORA konform",
  "GenAI Tech für maximale Effizienz",
  "Garantiert compliant bis 17.01.2025"
]

export default function ConvincingStats() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Zahlen, die überzeugen</h2>
        
        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-green-100">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="font-medium text-gray-800">{highlight}</p>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  )
}

