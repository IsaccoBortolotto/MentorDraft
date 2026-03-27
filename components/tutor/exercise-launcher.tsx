"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { courses, suggestedPrompts } from "@/lib/tutor-data"
import { ImagePlus, X, Bot, Zap, ExternalLink, Check, AlertCircle, Info } from "lucide-react"

interface ExerciseLauncherProps {
  selectedCourse: string | null
  selectedCategory: string | null
}

export function ExerciseLauncher({ selectedCourse, selectedCategory }: ExerciseLauncherProps) {
  const [input, setInput] = useState("")
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const course = courses.find(c => c.id === selectedCourse)
  const category = course?.categories.find(c => c.id === selectedCategory)
  const isConfigured = !!category && category.status === "active"
  const hasContent = !!input.trim() || !!imagePreview

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onloadend = () => setImagePreview(reader.result as string)
    reader.readAsDataURL(file)
  }

  const handleLaunch = async (platform: "gpt" | "gem") => {
    if (!category?.links) return
    const url = category.links[platform]
    if (!url) return

    if (input.trim()) {
      await navigator.clipboard.writeText(input.trim())
      setCopied(true)
      setTimeout(() => setCopied(false), 4000)
    }

    window.open(url, "_blank", "noopener,noreferrer")
  }

  if (!isConfigured) {
    return (
      <Card className="flex flex-col h-full border-2 border-primary/20">
        <div className="px-4 py-3 border-b border-primary/15 bg-primary/8 flex items-center gap-3">
          <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center shadow-md shadow-primary/25">
            <Zap className="h-3.5 w-3.5 text-primary-foreground" />
          </div>
          <span className="text-sm font-semibold text-primary">Launcher Tutor</span>
        </div>
        <CardContent className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <div className="w-20 h-20 rounded-2xl bg-primary/15 flex items-center justify-center mb-6">
            <Bot className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-primary">Inizia una sessione</h3>
          <p className="text-sm text-muted-foreground max-w-sm mb-8">
            Seleziona corso e regime per accedere al tutor
          </p>
          <ol className="text-sm text-muted-foreground space-y-3 text-left">
            {[
              "Seleziona il corso",
              "Seleziona il regime",
              "Inserisci il tuo esercizio",
              "Aprilo su ChatGPT o Gemini",
            ].map((step, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold shadow-md shadow-primary/25">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="flex flex-col h-full border-2 border-primary/20 overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-primary/15 bg-primary/8 flex items-center gap-3 flex-wrap">
        <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center shadow-md shadow-primary/25">
          <Zap className="h-3.5 w-3.5 text-primary-foreground" />
        </div>
        <span className="text-sm font-semibold text-primary">Launcher Tutor</span>
        <div className="ml-auto flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{course?.name}</span>
          <span className="text-primary/50">·</span>
          <span>{category.name}</span>
        </div>
      </div>

      <CardContent className="flex-1 flex flex-col p-6 gap-5">
        {/* How it works */}
        <div className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 flex items-start gap-3">
          <Info className="h-4 w-4 text-primary mt-0.5 shrink-0" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Inserisci il tuo esercizio qui sotto, poi scegli la piattaforma.
            Il testo verrà <span className="font-medium text-foreground">copiato automaticamente</span> —
            incollalo nella chat del tutor appena aperta.
          </p>
        </div>

        {/* Exercise input */}
        <div className="flex-1 flex flex-col gap-3">
          <label className="text-sm font-medium">Il tuo esercizio</label>

          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Descrivi il circuito, incolla la netlist o il testo del problema..."
            className="min-h-[180px] resize-none border-primary/25 focus-visible:ring-primary/30"
          />

          {/* Image upload */}
          <div className="flex items-center gap-3 flex-wrap">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            {imagePreview ? (
              <div className="flex items-center gap-3">
                <div className="relative inline-block">
                  <img
                    src={imagePreview}
                    alt="Anteprima"
                    className="h-16 rounded-lg border-2 border-primary/25 object-cover"
                  />
                  <button
                    onClick={() => setImagePreview(null)}
                    className="absolute -top-2 -right-2 p-1 rounded-full bg-destructive text-destructive-foreground shadow-sm"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
                <p className="text-xs text-amber-600 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3 shrink-0" />
                  Ricorda di caricare l&apos;immagine anche nel tutor
                </p>
              </div>
            ) : (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
                className="gap-2 border-primary/25 hover:bg-primary/10 hover:text-primary hover:border-primary/40"
              >
                <ImagePlus className="h-4 w-4" />
                Carica immagine circuito
              </Button>
            )}
          </div>
        </div>

        {/* Launch section */}
        <div className="space-y-3">
          {/* Feedback copiato */}
          {copied && (
            <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg px-3 py-2">
              <Check className="h-4 w-4 shrink-0" />
              Esercizio copiato! Incollalo nella chat del tutor appena aperto.
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => handleLaunch("gpt")}
              disabled={!hasContent}
              className="gap-2 h-12 shadow-md shadow-primary/20"
            >
              <ExternalLink className="h-4 w-4" />
              Apri in ChatGPT
            </Button>
            <Button
              onClick={() => handleLaunch("gem")}
              disabled={!hasContent}
              variant="outline"
              className="gap-2 h-12 border-2 border-primary/30 hover:bg-primary/10 hover:text-primary hover:border-primary/50"
            >
              <ExternalLink className="h-4 w-4" />
              Apri in Gemini
            </Button>
          </div>

          {/* Model hint */}
          <div className="rounded-lg border border-primary/15 bg-primary/[0.03] px-3 py-2 text-xs text-muted-foreground space-y-1">
            <p>
              <span className="font-medium text-foreground">ChatGPT</span> — seleziona manualmente{" "}
              <span className="font-medium text-foreground">GPT-5.4 thinking</span> nella chat
            </p>
            <p>
              <span className="font-medium text-foreground">Gemini</span> — seleziona manualmente{" "}
              <span className="font-medium text-foreground">Gemini 3.1 Pro</span> nella chat
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
