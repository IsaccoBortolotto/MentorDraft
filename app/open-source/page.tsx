"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GitPullRequest,
  GitBranch,
  FileText,
  Users,
  Star,
  BookOpen,
  Zap,
  Cog,
  Atom,
  ExternalLink,
  Brain
} from "lucide-react"
import { GithubIcon } from "@/components/icons/github"

export default function OpenSourcePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-primary/3 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="h-20 w-20 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/30">
                <GithubIcon className="h-10 w-10 text-primary-foreground" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-primary">
                Open Source
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                UniMIND è completamente open source. Esplora il codice, contribuisci miglioramenti 
                o fai un fork per la tua istituzione.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 h-12 shadow-lg shadow-primary/25" onClick={() => window.open("https://github.com/IsaccoBortolotto/UniMIND", "_blank")}>
                  <GithubIcon className="h-4 w-4" />
                  Vedi su GitHub
                  <ExternalLink className="h-3 w-3" />
                </Button>
                <Button variant="outline" size="lg" className="gap-2 h-12 border-primary/30 hover:bg-primary/10 hover:text-primary hover:border-primary/50" onClick={() => window.open("https://github.com/IsaccoBortolotto/UniMIND/stargazers", "_blank")}>
                  <Star className="h-4 w-4" />
                  Metti una Stella
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-primary/[0.03] border-y border-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-3 gap-4">
                <Card className="hover:border-primary/40 transition-all cursor-pointer border-2 border-primary/15 hover:shadow-md hover:shadow-primary/10">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-lg bg-primary flex items-center justify-center shadow-md shadow-primary/20">
                        <FileText className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Documentazione</h3>
                        <p className="text-sm text-muted-foreground">Guide di setup e utilizzo</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:border-primary/40 transition-all cursor-pointer border-2 border-primary/15 hover:shadow-md hover:shadow-primary/10">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-lg bg-primary flex items-center justify-center shadow-md shadow-primary/20">
                        <GitPullRequest className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Contribuire</h3>
                        <p className="text-sm text-muted-foreground">Come contribuire</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:border-primary/40 transition-all cursor-pointer border-2 border-primary/15 hover:shadow-md hover:shadow-primary/10">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-lg bg-primary flex items-center justify-center shadow-md shadow-primary/20">
                        <Users className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Community</h3>
                        <p className="text-sm text-muted-foreground">Partecipa alle discussioni</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contribution Guidelines */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold tracking-tight mb-8 text-center text-primary">
                Guida al Contributo
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-primary/15 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-primary">
                      <GitBranch className="h-4 w-4" />
                      Contributi al Codice
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="font-bold text-primary w-5">1.</span>
                        Fai un fork del repository su GitHub
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary w-5">2.</span>
                        Crea un branch per le tue modifiche
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary w-5">3.</span>
                        Scrivi test per le nuove funzionalità
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary w-5">4.</span>
                        Invia una pull request con descrizione chiara
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/15 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-primary">
                      <BookOpen className="h-4 w-4" />
                      Contributi ai Contenuti
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0"></div>
                        Aggiungi nuove categorie di esercizi o corsi
                      </li>
                      <li className="flex gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0"></div>
                        Migliora i prompt e le risposte del tutoring
                      </li>
                      <li className="flex gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0"></div>
                        Traduci i contenuti in altre lingue
                      </li>
                      <li className="flex gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0"></div>
                        Scrivi documentazione e tutorial
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-16 bg-primary/[0.03] border-y border-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold tracking-tight mb-8 text-center text-primary">
                Roadmap
              </h2>
              <div className="space-y-4">
                <RoadmapItem 
                  status="completed"
                  title="Corso di Elettrotecnica"
                  description="Corso iniziale con 4 categorie di esercizi"
                />
                <RoadmapItem 
                  status="in-progress"
                  title="Backend AI Multipli"
                  description="Supporto per GPT, Gemini e modelli custom"
                />
                <RoadmapItem 
                  status="planned"
                  title="Modulo di Fisica"
                  description="Meccanica, termodinamica ed elettromagnetismo"
                />
                <RoadmapItem 
                  status="planned"
                  title="Account Utente"
                  description="Salva progressi, traccia apprendimento e personalizza esperienza"
                />
                <RoadmapItem 
                  status="planned"
                  title="Integrazione Istituzionale"
                  description="Strumenti per università per deploy e personalizzazione"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Future Modules */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold tracking-tight mb-8 text-center text-primary">
                Moduli Futuri
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <ModuleCard 
                  icon={Zap}
                  title="Elettronica"
                  status="Pianificazione"
                />
                <ModuleCard 
                  icon={Atom}
                  title="Fisica"
                  status="Pianificazione"
                />
                <ModuleCard 
                  icon={Cog}
                  title="Meccanica"
                  status="Ricerca"
                />
                <ModuleCard 
                  icon={GitBranch}
                  title="Controlli"
                  status="Ricerca"
                />
              </div>
            </div>
          </div>
        </section>

        {/* License */}
        <section className="py-12 bg-primary/[0.03] border-y border-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl font-bold mb-4 text-primary">Licenza</h2>
              <p className="text-muted-foreground mb-4">
                UniMIND è rilasciato sotto licenza MIT. Sei libero di usare, modificare 
                e distribuire questo software per qualsiasi scopo.
              </p>
              <Badge className="text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">Licenza MIT</Badge>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl font-bold mb-4 text-primary">
                Pronto per iniziare?
              </h2>
              <p className="text-muted-foreground mb-6">
                Prova il tutor o esplora il codice sorgente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="shadow-lg shadow-primary/25">
                  <Link href="/tutor">Prova il Tutor</Link>
                </Button>
                <Button variant="outline" className="gap-2 border-primary/30 hover:bg-primary/10 hover:text-primary hover:border-primary/50" onClick={() => window.open("https://github.com/IsaccoBortolotto/UniMIND", "_blank")}>
                  <GithubIcon className="h-4 w-4" />
                  Clona Repository
                </Button>
              </div>
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

function RoadmapItem({ 
  status, 
  title, 
  description 
}: { 
  status: "completed" | "in-progress" | "planned"
  title: string
  description: string 
}) {
  const statusConfig = {
    completed: { label: "Completato", color: "bg-primary", badgeClass: "bg-primary/10 text-primary border-primary/20" },
    "in-progress": { label: "In Corso", color: "bg-amber-500", badgeClass: "bg-amber-500/10 text-amber-600 border-amber-500/20" },
    planned: { label: "Pianificato", color: "bg-muted-foreground", badgeClass: "border-primary/30 text-primary/60" }
  }

  const config = statusConfig[status]

  return (
    <div className="flex items-start gap-4 p-5 rounded-xl border-2 border-primary/15 bg-background hover:border-primary/25 transition-colors">
      <div className={`h-3.5 w-3.5 rounded-full ${config.color} mt-1.5 shrink-0 shadow-sm`}></div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <h3 className="font-semibold">{title}</h3>
          <Badge variant={status === "planned" ? "outline" : "secondary"} className={config.badgeClass}>
            {config.label}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function ModuleCard({ 
  icon: Icon, 
  title, 
  status 
}: { 
  icon: React.ComponentType<{ className?: string }>
  title: string
  status: string 
}) {
  return (
    <Card className="border-2 border-dashed border-primary/20 bg-primary/[0.02] hover:border-primary/30 transition-colors">
      <CardContent className="pt-6 text-center">
        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Icon className="h-6 w-6 text-primary/60" />
        </div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <Badge variant="outline" className="text-xs border-primary/30 text-primary/70">{status}</Badge>
      </CardContent>
    </Card>
  )
}
