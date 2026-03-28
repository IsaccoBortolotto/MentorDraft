import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, MousePointerClick, GraduationCap, Brain, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-primary/3 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/25">
                  <BookOpen className="h-6 w-6 text-primary-foreground" />
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary">
                  Documentazione
                </h1>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Guida all&apos;utilizzo della piattaforma MentorDraft.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 border-t border-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8">

              {/* Il Progetto */}
              <Card className="border-2 border-primary/15">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center shrink-0 shadow-md shadow-primary/20">
                      <Brain className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold mb-2 text-primary">Il Progetto</h2>
                      <p className="text-muted-foreground leading-relaxed">
                        MentorDraft nasce con l&apos;idea di creare una piattaforma open source per il tutoraggio
                        universitario di ingegneria. Attraverso l&apos;utilizzo di modelli AI avanzati, la
                        piattaforma guida gli studenti nella risoluzione passo-passo di esercizi tecnici,
                        favorendo la comprensione profonda dei metodi risolutivi.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Come utilizzare il tutor */}
              <Card className="border-2 border-primary/15">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center shrink-0 shadow-md shadow-primary/20">
                      <MousePointerClick className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg font-bold mb-4 text-primary">Come utilizzare il tutor</h2>
                      <ol className="space-y-4">
                        {[
                          {
                            step: 1,
                            title: "Seleziona il corso",
                            description: "Scegli il corso universitario di tuo interesse tra quelli disponibili. Attualmente è attivo il corso di Elettrotecnica."
                          },
                          {
                            step: 2,
                            title: "Seleziona la tipologia di esercizio",
                            description: "Scegli il regime di analisi che devi affrontare: Regime Stazionario (DC) o Regime Sinusoidale (AC)."
                          },
                          {
                            step: 3,
                            title: "Seleziona il tutor",
                            description: "Scegli la piattaforma che preferisci: ChatGPT (richiede account Plus) o Gemini (richiede account Advanced). Il tutor corretto si aprirà automaticamente."
                          },
                          {
                            step: 4,
                            title: "Incolla il tuo esercizio",
                            description: "Nella chat del tutor, incolla il testo del tuo esercizio o carica l'immagine del circuito. Il tutor ti guiderà passo dopo passo verso la soluzione."
                          },
                        ].map(({ step, title, description }) => (
                          <li key={step} className="flex gap-4">
                            <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold shrink-0 shadow-md shadow-primary/25 mt-0.5">
                              {step}
                            </span>
                            <div>
                              <p className="font-semibold text-sm mb-1">{title}</p>
                              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Modelli consigliati */}
              <Card className="border-2 border-primary/15">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center shrink-0 shadow-md shadow-primary/20">
                      <Zap className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold mb-2 text-primary">Modelli consigliati</h2>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Per ottenere i migliori risultati, una volta aperta la chat seleziona manualmente:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                          <span><span className="font-medium text-foreground">ChatGPT</span> — GPT-5.4 thinking</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                          <span><span className="font-medium text-foreground">Gemini</span> — Gemini 3.1 Pro</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Corsi disponibili */}
              <Card className="border-2 border-primary/15">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center shrink-0 shadow-md shadow-primary/20">
                      <GraduationCap className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold mb-2 text-primary">Corsi disponibili</h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        Attualmente è disponibile il corso di <span className="font-medium text-foreground">Elettrotecnica</span> con i seguenti regimi:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                          <span><span className="font-medium text-foreground">Regime Stazionario (DC)</span> — Kirchhoff, nodi, maglie, Thévenin/Norton</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                          <span><span className="font-medium text-foreground">Regime Sinusoidale (AC)</span> — fasori, impedenze, potenza complessa</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* CTA */}
            <div className="max-w-3xl mx-auto mt-12 text-center">
              <Button asChild size="lg" className="gap-2 shadow-lg shadow-primary/25">
                <Link href="/tutor">
                  Vai al Tutor
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-primary/15 py-6 bg-primary/[0.02]">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <span className="font-semibold text-primary">MentorDraft</span> — Progetto open source per l&apos;educazione ingegneristica.
        </div>
      </footer>
    </div>
  )
}
