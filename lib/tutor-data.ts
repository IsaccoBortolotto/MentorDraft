export type CategoryStatus = "active" | "beta" | "coming-soon"

export type TutorLinks = {
  gpt: string
  gem: string
}

export type Category = {
  id: string
  name: string
  description: string
  status: CategoryStatus
  links?: TutorLinks
}

export type Course = {
  id: string
  name: string
  subtitle: string
  description: string
  categories: Category[]
}

export type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  imageUrl?: string
  timestamp: Date
}

export const courses: Course[] = [
  {
    id: "elettrotecnica",
    name: "Elettrotecnica",
    subtitle: "Ingegneria dell'Energia",
    description: "Analisi di circuiti elettrici con metodi accademici rigorosi",
    categories: [
      {
        id: "regime-stazionario",
        name: "Regime Stazionario",
        description: "Corrente continua, Kirchhoff, potenziali nodali, correnti cicliche, Thévenin/Norton",
        status: "active",
        links: {
          gpt: "https://chatgpt.com/g/g-68ceae3fd0bc8191950f047711823a2b-tutor-circuiti-dc-3-1",
          gem: "https://gemini.google.com/gem/11bmA0jatwsJe2hJyA-2mbDKZWJkFYNk4?usp=sharing",
        },
      },
      {
        id: "regime-sinusoidale",
        name: "Regime Sinusoidale",
        description: "Corrente alternata, fasori, impedenze, potenza complessa, diagrammi fasoriali",
        status: "active",
        links: {
          gpt: "https://chatgpt.com/g/g-6993396576f081919035b2693d6f4d43-tutor-circuiti-ac-2-5",
          gem: "https://gemini.google.com/gem/1M1a_nc-P6HFDlhshlcaH-e6WsY5eQNN2?usp=sharing",
        },
      },
      {
        id: "regime-trifase",
        name: "Regime Trifase",
        description: "Sistemi trifase equilibrati e squilibrati",
        status: "coming-soon",
      },
      {
        id: "regime-variabile",
        name: "Regime Variabile",
        description: "Analisi transitoria RC, RL, RLC",
        status: "coming-soon",
      },
    ],
  },
]

export const suggestedPrompts = [
  "Ho un circuito con i seguenti bipoli e valori...",
  "Devo calcolare la corrente che scorre nel ramo...",
  "Trova il circuito equivalente di Thévenin ai morsetti A-B...",
]
