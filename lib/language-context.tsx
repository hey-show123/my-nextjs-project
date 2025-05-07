"use client"

import { createContext, useContext, useState } from "react"
import { translations, type Language } from "./translations"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (section: keyof typeof translations.en, key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (section: keyof typeof translations.en, key: string): string => {
    return translations[language][section]?.[key as keyof typeof translations.en[typeof section]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}