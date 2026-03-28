import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Brain,
  BookOpen,
  ImageIcon,
  MessageSquare,
  Sparkles
} from "lucide-react"
import { GithubIcon } from "@/components/icons/github"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section - Clean, branded, focused */}
        <section className="py-28 lg:py-40 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent pointer-events-none" />
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 mb-10">
                <Badge className="bg-primary/15 text-primary hover:bg-primary/20 border border-primary/25 px-4 py-1.5 text-sm font-medium">
                  <GithubIcon className="h-3.5 w-3.5 mr-1.5" />
                  Open Source
                </Badge>
              </div>
              
              {/* Large MentorDraft Logo */}
              <div className="flex items-center justify-center gap-5 mb-10">
                <div className="h-24 w-24 lg:h-28 lg:w-28 rounded-3xl bg-primary flex items-center justify-center shadow-2xl shadow-primary/30">
                  <Brain className="h-12 w-12 lg:h-14 lg:w-14 text-primary-foreground" />
                </div>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight mb-8 text-primary">
                MentorDraft
              </h1>
              
              <p className="text-xl lg:text-2xl text-foreground/80 mb-4 font-medium text-balance leading-relaxed">
                Piattaforma open source per la risoluzione guidata di esercizi di ingegneria.
              </p>
              
              <p className="text-base lg:text-lg text-muted-foreground mb-12 max-w-xl mx-auto text-pretty leading-relaxed">
                Il primo modulo attivo è dedicato all&apos;Elettrotecnica, con estensioni future ad altri corsi dell&apos;ingegneria industriale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2 h-14 px-10 text-base shadow-xl shadow-primary/25 bg-primary hover:bg-primary/90">
                  <Link href="/tutor">
                    Inizia a Studiare
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-10 text-base border-2 border-primary/30 hover:bg-primary/10 hover:text-primary hover:border-primary/50">
                  <Link href="/project">
                    Scopri il Progetto
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Come Funziona Section - 4 steps as specified */}
        <section className="py-24 bg-primary/[0.04] border-y border-primary/15">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-primary">Come Funziona</h2>
                <p className="text-muted-foreground text-lg">
                  Quattro semplici passi per iniziare
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StepCard 
                  number={1}
                  icon={BookOpen}
                  title="Seleziona il corso"
                  description="Scegli tra i corsi disponibili"
                />
                <StepCard 
                  number={2}
                  icon={Sparkles}
                  title="Seleziona la tipologia"
                  description="Scegli il tipo di esercizio"
                />
                <StepCard 
                  number={3}
                  icon={ImageIcon}
                  title="Carica l&apos;esercizio"
                  description="Testo o immagine del problema"
                />
                <StepCard 
                  number={4}
                  icon={MessageSquare}
                  title="Risoluzione interattiva"
                  description="Guida passo-passo alla soluzione"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="h-20 w-20 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/25">
                <Brain className="h-10 w-10 text-primary-foreground" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-5 text-primary">
                Pronto a iniziare?
              </h2>
              <p className="text-muted-foreground mb-10 text-lg">
                Inizia la tua prima sessione di tutoring. Gratuito e open source.
              </p>
              <Button asChild size="lg" className="gap-2 h-14 px-12 text-base shadow-xl shadow-primary/25">
                <Link href="/tutor">
                  Vai al Tutor
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-primary/15 py-8 bg-primary/[0.03]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center shadow-md shadow-primary/20">
                <Brain className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg text-primary">MentorDraft</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Progetto open source per l&apos;educazione ingegneristica.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/project" className="hover:text-primary transition-colors font-medium">
                Progetto
              </Link>
              <Link href="/open-source" className="hover:text-primary transition-colors font-medium">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function StepCard({ 
  number,
  icon: Icon, 
  title, 
  description 
}: { 
  number: number
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string 
}) {
  return (
    <div className="text-center group">
      <div className="relative inline-block mb-5">
        <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-xl group-hover:shadow-primary/30 transition-shadow">
          <Icon className="h-7 w-7 text-primary-foreground" />
        </div>
        <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-background border-2 border-primary flex items-center justify-center">
          <span className="text-xs font-bold text-primary">{number}</span>
        </div>
      </div>
      <h3 className="font-semibold text-base mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
