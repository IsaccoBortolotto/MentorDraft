"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { CourseSelector } from "@/components/tutor/course-selector"
import { CategorySelector } from "@/components/tutor/category-selector"
import { ExerciseLauncher } from "@/components/tutor/exercise-launcher"
import { Brain } from "lucide-react"

export default function TutorPage() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleCourseChange = (courseId: string) => {
    setSelectedCourse(courseId)
    setSelectedCategory(null)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/25">
              <Brain className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-primary">Tutor AI</h1>
              <p className="text-sm text-muted-foreground">Risoluzione guidata passo-passo</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-8">
          <aside className="space-y-6">
            <CourseSelector
              selectedCourse={selectedCourse}
              onSelectCourse={handleCourseChange}
            />
            <CategorySelector
              selectedCourse={selectedCourse}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </aside>

          <div className="lg:min-h-[600px]">
            <ExerciseLauncher
              selectedCourse={selectedCourse}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
      </main>

      <footer className="border-t border-primary/15 py-6 mt-8 bg-primary/[0.03]">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <span className="font-semibold text-primary">UniMIND</span> — Progetto open source per l&apos;educazione ingegneristica.
        </div>
      </footer>
    </div>
  )
}
