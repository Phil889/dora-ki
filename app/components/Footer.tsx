import Link from 'next/link'
import { Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 ADVISORI FTC. Alle Rechte vorbehalten.</p>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="https://www.linkedin.com/company/advisori-ftc-gmbh/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-green-400">
              <Linkedin className="w-5 h-5 mr-2" />
              ADVISORI FTC auf LinkedIn folgen
            </Link>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
            <Link href="https://www.advisori.de/impressum/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
              Impressum
            </Link>
            <Link href="https://www.advisori.de/datenschutz/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

