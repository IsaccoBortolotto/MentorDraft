"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { courses } from "@/lib/tutor-data"
import {
  ImagePlus, X, Bot, Zap, ExternalLink,
  AlertCircle, Info, ChevronDown, ChevronUp, FlaskConical
} from "lucide-react"

interface ExerciseLauncherProps {
  selectedCourse: string | null
  selectedCategory: string | null
}

export function ExerciseLauncher({ selectedCourse, selectedCategory }: ExerciseLauncherProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [input, setInput] = useState("")
  const [open, setOpen] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const course = courses.find(c => c.id === selectedCourse)
  const category = course?.categories.find(c => c.id === selectedCategory)
  const isConfigured = !!category && category.status === "active"

  const handleImageFile = (file: File) => {
    if (!file.type.startsWith("image/")) return
    const reader = new FileReader()
    reader.onloadend = () => setImagePreview(reader.result as string)
    reader.readAsDataURL(file)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleImageFile(file)
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    for (const item of Array.from(e.clipboardData.items)) {
      if (item.type.startsWith("image/")) {
        e.preventDefault()
        const file = item.getAsFile()
        if (file) handleImageFile(file)
        return
      }
    }
  }

  const handleLaunch = (platform: "gpt" | "gem") => {
    if (!category?.links) return
    const url = category.links[platform]
    if (url) window.open(url, "_blank", "noopener,noreferrer")
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
              "Apri il tutor su ChatGPT o Gemini",
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
        {/* Istruzioni */}
        <div className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 flex items-start gap-3">
          <Info className="h-4 w-4 text-primary mt-0.5 shrink-0" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Seleziona la piattaforma per aprire il tutor. Una volta nella chat,
            inserisci il tuo esercizio e inizia la sessione guidata.
          </p>
        </div>

        {/* Bottoni launch */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={() => handleLaunch("gpt")}
            className="gap-2 h-12 shadow-md shadow-primary/20"
          >
            <ExternalLink className="h-4 w-4" />
            Apri in ChatGPT
          </Button>
          <Button
            onClick={() => handleLaunch("gem")}
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

        {/* Sezione futura collassabile */}
        <div className="rounded-xl border-2 border-dashed border-primary/20 overflow-hidden">
          <button
            onClick={() => setOpen(o => !o)}
            className="w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-primary/5 transition-colors"
          >
            <div className="flex items-center gap-2">
              <FlaskConical className="h-4 w-4 text-primary/60" />
              <span className="font-medium text-muted-foreground">Inserimento guidato esercizio</span>
              <Badge variant="outline" className="text-[10px] px-1.5 border-primary/30 text-primary/60">
                In sviluppo
              </Badge>
            </div>
            {open
              ? <ChevronUp className="h-4 w-4 text-muted-foreground" />
              : <ChevronDown className="h-4 w-4 text-muted-foreground" />
            }
          </button>

          {open && (
            <div className="px-4 pb-4 pt-1 flex flex-col gap-3 border-t border-primary/10">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Questa funzione permetterà di inserire l&apos;esercizio direttamente nel sito
                e inviarlo al tutor tramite integrazione API, senza necessità di copiare e incollare.
                Attualmente in fase di sviluppo.
              </p>

              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onPaste={handlePaste}
                placeholder="Anteprima futura — inserimento esercizio diretto..."
                className="min-h-[120px] resize-none border-primary/20 focus-visible:ring-primary/20 text-sm opacity-75"
              />

              <div className="flex items-center gap-3">
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
                        className="h-14 rounded-lg border-2 border-primary/20 object-cover opacity-75"
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
                      Funzione non ancora attiva
                    </p>
                  </div>
                ) : (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => fileInputRef.current?.click()}
                    className="gap-2 border-primary/20 text-muted-foreground opacity-75"
                  >
                    <ImagePlus className="h-4 w-4" />
                    Carica immagine
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
