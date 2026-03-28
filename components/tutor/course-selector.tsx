"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { courses } from "@/lib/tutor-data"
import { Zap, Plus, Check } from "lucide-react"

interface CourseSelectorProps {
  selectedCourse: string | null
  onSelectCourse: (courseId: string) => void
}

export function CourseSelector({ selectedCourse, onSelectCourse }: CourseSelectorProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <div className="h-6 w-1 rounded-full bg-primary" />
        <h2 className="text-base font-semibold">A. Seleziona il Corso</h2>
      </div>
      
      <div className="grid gap-3">
        {courses.map((course) => (
          <button
            key={course.id}
            onClick={() => onSelectCourse(course.id)}
            className={cn(
              "relative text-left p-4 rounded-xl border-2 transition-all duration-200 group",
              selectedCourse === course.id
                ? "border-primary bg-primary/8 shadow-lg shadow-primary/15"
                : "border-primary/20 hover:border-primary/40 hover:bg-primary/5"
            )}
          >
            {selectedCourse === course.id && (
              <div className="absolute top-3 right-3 h-6 w-6 rounded-full bg-primary flex items-center justify-center shadow-md shadow-primary/25">
                <Check className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
            )}
            <div className="flex items-start gap-3">
              <div className={cn(
                "h-12 w-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200",
                selectedCourse === course.id
                  ? "bg-primary shadow-lg shadow-primary/30"
                  : "bg-primary/15 group-hover:bg-primary/25"
              )}>
                <Zap className={cn(
                  "h-6 w-6 transition-colors",
                  selectedCourse === course.id
                    ? "text-primary-foreground"
                    : "text-primary"
                )} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="font-bold">{course.name}</h3>
                  <Badge className="bg-primary/15 text-primary border border-primary/25 text-[10px] px-1.5">
                    Attivo
                  </Badge>
                </div>
                <p className="text-xs text-primary/80 font-medium mb-1">
                  {course.subtitle}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {course.description}
                </p>
              </div>
            </div>
          </button>
        ))}

        {/* Future course placeholder */}
        <Card className="border-2 border-dashed border-primary/15 bg-primary/[0.02]">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                <Plus className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="font-semibold text-muted-foreground">Altri corsi</h3>
                  <Badge variant="outline" className="text-[10px] border-primary/20 text-primary/60">Prossimamente</Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  Enertronica, Fondamenti di Algebra Lineare
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
