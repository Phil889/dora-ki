import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function VideoDemo() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Erleben Sie DORA KI in Aktion</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-video">
            <iframe 
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/21KI5a0c5T0" 
              title="DORA KI Tool Demonstration"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Warum DORA KI?</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Reduziert Compliance-Risiken um bis zu 95%</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>100% DORA complaint</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Kontinuierliche Anpassung an neue Regulierungen</span>
                  </li>
                </ul>
                <Button size="lg" className="w-full" asChild>
                  <a href="mailto:info@advisori.de?subject=Anfrage%20DORA%20KI%20TOOL&body=Hallo%20ADVISORI-Team%2C%0A%0Aich%20interessiere%20mich%20f%C3%BCr%20Ihr%20DORA%20KI%20TOOL%20und%20m%C3%B6chte%20gerne%20mehr%20erfahren.%0ABitte%20kontaktieren%20Sie%20mich%20innerhalb%20der%20n%C3%A4chsten%2024%20Stunden.%0A%0ATelefonnummer%20(Optional)%3A%0A%0AMit%20Freundlichen%20Gr%C3%BC%C3%9Fen">
                    Jetzt DORA KI testen
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

