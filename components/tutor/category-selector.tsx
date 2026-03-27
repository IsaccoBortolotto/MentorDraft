"use client"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { courses } from "@/lib/tutor-data"
import { CircuitBoard, Waves, Triangle, Activity, Check, Lock } from "lucide-react"

interface CategorySelectorProps {
  selectedCourse: string | null
  selectedCategory: string | null
  onSelectCategory: (categoryId: string) => void
}

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "regime-stazionario": CircuitBoard,
  "regime-sinusoidale": Waves,
  "regime-trifase": Triangle,
  "regime-variabile": Activity,
}

export function CategorySelector({ 
  selectedCourse, 
  selectedCategory, 
  onSelectCategory 
}: CategorySelectorProps) {
  const course = courses.find(c => c.id === selectedCourse)
  const categories = course?.categories || []

  if (!selectedCourse) {
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-1 rounded-full bg-muted" />
          <h2 className="text-base font-semibold text-muted-foreground">B. Seleziona la Tipologia</h2>
        </div>
        <div className="rounded-xl border-2 border-dashed border-primary/15 p-6 text-center bg-primary/[0.02]">
          <p className="text-sm text-muted-foreground">
            Prima seleziona un corso
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <div className="h-6 w-1 rounded-full bg-primary" />
        <h2 className="text-base font-semibold">B. Seleziona la Tipologia</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        {categories.map((category) => {
          const Icon = categoryIcons[category.id] || CircuitBoard
          const isDisabled = category.status === "coming-soon"
          const isSelected = selectedCategory === category.id

          return (
            <button
              key={category.id}
              onClick={() => !isDisabled && onSelectCategory(category.id)}
              disabled={isDisabled}
              className={cn(
                "relative text-left p-3 rounded-xl border-2 transition-all duration-200 group",
                isDisabled && "opacity-50 cursor-not-allowed",
                isSelected
                  ? "border-primary bg-primary/8 shadow-lg shadow-primary/15"
                  : !isDisabled && "border-primary/20 hover:border-primary/40 hover:bg-primary/5"
              )}
            >
              {isSelected && (
                <div className="absolute top-2 right-2 h-5 w-5 rounded-full bg-primary flex items-center justify-center shadow-sm">
                  <Check className="h-3 w-3 text-primary-foreground" />
                </div>
              )}
              <div className="flex flex-col items-center text-center gap-2">
                <div className={cn(
                  "h-10 w-10 rounded-lg flex items-center justify-center transition-all duration-200",
                  isSelected
                    ? "bg-primary shadow-md shadow-primary/25"
                    : isDisabled
                      ? "bg-muted"
                      : "bg-primary/15 group-hover:bg-primary/25"
                )}>
                  {isDisabled ? (
                    <Lock className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Icon className={cn(
                      "h-4 w-4 transition-colors",
                      isSelected
                        ? "text-primary-foreground"
                        : "text-primary"
                    )} />
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className={cn(
                    "font-semibold text-[11px] tracking-wide uppercase leading-tight mb-1",
                    isDisabled && "text-muted-foreground"
                  )}>
                    {category.name}
                  </h3>
                  {category.status === "beta" && (
                    <Badge className="bg-amber-500/15 text-amber-600 border-amber-500/25 text-[9px] px-1 py-0 font-semibold">
                      BETA
                    </Badge>
                  )}
                  {category.status === "coming-soon" && (
                    <Badge variant="outline" className="text-[9px] px-1 py-0 border-primary/20 text-primary/50">
                      COMING SOON
                    </Badge>
                  )}
                </div>
              </div>
            </button>
          )
        })}
      </div>
      
      {/* Description for selected category */}
      {selectedCategory && (
        <div className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-2">
          <p className="text-xs text-muted-foreground">
            {categories.find(c => c.id === selectedCategory)?.description}
          </p>
        </div>
      )}
    </div>
  )
}
