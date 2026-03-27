import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  ArrowRight,
  Brain, 
  Target,
  Users,
  BookOpen,
  Lightbulb,
  TrendingUp,
  Zap,
  GraduationCap,
  AlertTriangle
} from "lucide-react"

export default function ProjectPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-primary/3 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/25">
                  <Brain className="h-6 w-6 text-primary-foreground" />
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary">
                  Il Progetto
                </h1>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                UniMIND è un&apos;iniziativa open-source per creare tutoring AI accessibile e di alta qualità 
                per studenti di ingegneria. Crediamo che ogni studente meriti una guida personalizzata 
                quando impara materie tecniche complesse.
              </p>
            </div>
          </div>
        </section>

        {/* Obiettivo e Contesto Section */}
        <section className="py-16 bg-primary/[0.03] border-y border-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-primary">Obiettivo della Piattaforma</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Democratizzare l&apos;educazione ingegneristica fornendo tutoring AI gratuito 
                    che si adatta alle esigenze di ogni studente. Ci concentriamo sull&apos;insegnamento 
                    della metodologia e delle capacità di problem-solving, non solo sul fornire risposte.
                  </p>
                </div>
                <div>
                  <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-primary">Contesto Accademico</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    UniMIND nasce come progetto universitario per supportare gli studenti di ingegneria 
                    industriale. La piattaforma è progettata per integrarsi con i percorsi formativi 
                    esistenti, offrendo un supporto complementare allo studio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approccio Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold tracking-tight mb-3 text-primary">
                  Approccio di Risoluzione Guidata
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  La metodologia UniMIND si basa su principi pedagogici solidi
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 border-primary/15 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardHeader>
                    <div className="h-11 w-11 rounded-lg bg-primary flex items-center justify-center mb-2 shadow-md shadow-primary/20">
                      <BookOpen className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">Apprendimento Guidato</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      Non diamo mai solo le risposte. I nostri tutor AI accompagnano gli studenti 
                      attraverso ogni passo, spiegando il ragionamento e costruendo la comprensione.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/15 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardHeader>
                    <div className="h-11 w-11 rounded-lg bg-primary flex items-center justify-center mb-2 shadow-md shadow-primary/20">
                      <Lightbulb className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">Metodologia Rigorosa</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      Seguiamo un approccio accademico strutturato: identificazione dei dati, 
                      impostazione del problema, scelta del metodo, risoluzione step-by-step.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/15 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardHeader>
                    <div className="h-11 w-11 rounded-lg bg-primary flex items-center justify-center mb-2 shadow-md shadow-primary/20">
                      <Users className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">Supporto agli Studenti</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      La piattaforma è pensata per accompagnare gli studenti nello studio autonomo, 
                      offrendo spiegazioni chiare e feedback costruttivo.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Current Focus */}
        <section className="py-16 bg-primary/[0.03] border-y border-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold tracking-tight mb-6 text-center text-primary">
                Focus Attuale
              </h2>
              <Card className="border-2 border-primary/25 shadow-lg shadow-primary/10">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/25">
                      <Zap className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">Elettrotecnica</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        Il nostro focus iniziale è sui fondamenti di ingegneria elettrica, specificamente 
                        l&apos;analisi dei circuiti. Questo include problemi in regime stazionario DC, 
                        regime sinusoidale AC, trifase e transitorio. Abbiamo scelto questa materia 
                        perché forma le basi di molte discipline ingegneristiche e presenta tipologie 
                        di problemi consistenti e ben strutturate, ideali per il tutoring AI.
                      </p>
                      <Button asChild size="sm" className="gap-2 shadow-sm">
                        <Link href="/tutor">
                          Prova il Tutor
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold tracking-tight mb-6 text-center text-primary">
                Sviluppo Futuro
              </h2>
              <div className="prose prose-neutral max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  UniMIND è progettato per espandersi. La nostra architettura supporta l&apos;aggiunta 
                  di nuovi corsi, tipologie di esercizi e backend AI senza modifiche sostanziali 
                  alla piattaforma core. Immaginiamo una suite completa di tutor ingegneristici che copra:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary shadow-sm"></div>
                    Fisica: meccanica classica, termodinamica ed elettromagnetismo
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary shadow-sm"></div>
                    Meccanica strutturale: statica, dinamica e resistenza dei materiali
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary shadow-sm"></div>
                    Elettronica: circuiti analogici, sistemi digitali e elaborazione dei segnali
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary shadow-sm"></div>
                    Sistemi di controllo: controllo a feedback e dinamica dei sistemi
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Limiti e Prospettive */}
        <section className="py-16 bg-primary/[0.03] border-y border-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold tracking-tight mb-6 text-center text-primary">
                Limiti Attuali e Prospettive
              </h2>
              <Card className="border-2 border-amber-500/25 bg-amber-500/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-lg bg-amber-500/15 flex items-center justify-center shrink-0">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Stato del Progetto</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        UniMIND è attualmente un prototipo in fase di sviluppo. 
                        Alcune limitazioni attuali includono:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                          Un solo corso attivo (Elettrotecnica)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                          Alcune categorie di esercizi in fase beta o non ancora disponibili
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                          Backend AI in fase di integrazione
                        </li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-4">
                        Stiamo lavorando attivamente per espandere le funzionalità e migliorare l&apos;esperienza utente.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl font-bold mb-4 text-primary">
                Vuoi contribuire?
              </h2>
              <p className="text-muted-foreground mb-6">
                UniMIND è open source. Accogliamo contributi da educatori, 
                ingegneri e sviluppatori.
              </p>
              <Button asChild variant="outline" className="gap-2 border-primary/30 hover:bg-primary/10 hover:text-primary hover:border-primary/50">
                <Link href="/open-source">
                  Vai al Repository
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-primary/15 py-6 bg-primary/[0.02]">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center shadow-sm shadow-primary/20">
              <Brain className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-primary">UniMIND</span>
          </div>
          Progetto open-source per l&apos;educazione ingegneristica.
        </div>
      </footer>
    </div>
  )
}
