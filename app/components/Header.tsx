'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { useState as benutzeZustand } from 'react'

export default function Header() {
  const [istMobileMenüOffen, setzeMobileMenüZustand] = benutzeZustand(false)

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setzeMobileMenüZustand(false)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-GQQfv788wQwBY1uXxx7Em5o7gPJ3qu.svg"
            alt="ADVISORI FTC Logo"
            width={180}
            height={61}
            priority
            className="h-[40px] w-auto"
          />
          <span className="sr-only">ADVISORI FTC</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#vorteile" onClick={(e) => handleLinkClick(e, '#vorteile')} className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-300">Vorteile</a></li>
            <li><a href="#technologie" onClick={(e) => handleLinkClick(e, '#technologie')} className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-300">Technologie</a></li>
            <li><a href="#funktionen" onClick={(e) => handleLinkClick(e, '#funktionen')} className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-300">Funktionen</a></li>
          </ul>
        </nav>
        <Button variant="outline" className="hidden md:inline-flex hover:bg-green-50 transition-colors duration-300" asChild>
          <a href="mailto:info@advisori.de?subject=Anfrage%20DORA%20KI%20TOOL&body=Hallo%20ADVISORI-Team%2C%0A%0Aich%20interessiere%20mich%20f%C3%BCr%20Ihr%20DORA%20KI%20TOOL%20und%20m%C3%B6chte%20gerne%20mehr%20erfahren.%0ABitte%20kontaktieren%20Sie%20mich%20innerhalb%20der%20n%C3%A4chsten%2024%20Stunden.%0A%0ATelefonnummer%20(Optional)%3A%0A%0AMit%20Freundlichen%20Gr%C3%BC%C3%9Fen">
            Jetzt DORA KI testen
          </a>
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="md:hidden hover:bg-green-50 transition-colors duration-300"
          onClick={() => setzeMobileMenüZustand(!istMobileMenüOffen)}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={istMobileMenüOffen ? "open" : "closed"}
            variants={{
              open: { rotate: 90 },
              closed: { rotate: 0 }
            }}
            transition={{ duration: 0.3 }}
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </motion.svg>
          <span className="sr-only">Menü</span>
        </Button>
      </div>
      <AnimatePresence>
        {istMobileMenüOffen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-white shadow-md py-4 md:hidden"
          >
            <nav>
              <ul className="flex flex-col space-y-2">
                <li><a href="#vorteile" onClick={(e) => handleLinkClick(e, '#vorteile')} className="block px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-300">Vorteile</a></li>
                <li><a href="#technologie" onClick={(e) => handleLinkClick(e, '#technologie')} className="block px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-300">Technologie</a></li>
                <li><a href="#funktionen" onClick={(e) => handleLinkClick(e, '#funktionen')} className="block px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-300">Funktionen</a></li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

