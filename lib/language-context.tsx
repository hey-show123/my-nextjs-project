"use client"

import { createContext, useContext, useState } from "react"
import { translations, type Language, type TranslationKey } from "./translations"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey, defaultValue: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: TranslationKey, defaultValue: string): string => {
    if (key.includes('.')) {
      const parts = key.split('.')
      let current: any = translations[language]
      for (const part of parts) {
        if (current && current[part]) {
          current = current[part]
        } else {
          return defaultValue
        }
      }
      return current || defaultValue
    }
    return translations[language][key as keyof typeof translations[typeof language]] || defaultValue
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