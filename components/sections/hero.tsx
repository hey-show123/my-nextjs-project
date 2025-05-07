"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/ui/animated-text"
import { useLanguage } from "@/lib/language-context"
import { SparklesCore } from "@/components/ui/sparkles"
import { SplashCursor } from "@/components/ui/splash-cursor"

export function Hero() {
  const { t } = useLanguage()
  
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="rgba(255, 255, 255, 0.3)"
          speed={0.5}
        />
      </div>

      <SplashCursor />

      <div className="container px-4 md:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="relative">
            <motion.h1 
              className="text-5xl md:text-8xl lg:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-br from-blue-500 via-indigo-400 to-violet-500 pb-2"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              hey_show
            </motion.h1>

            <div className="relative w-full h-[2px]">
              <motion.div 
                className="absolute inset-x-[-15%] h-[6px] bg-gradient-to-r from-transparent via-rose-500 to-transparent blur-sm"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.div 
                className="absolute inset-x-[-25%] h-[4px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.6 }}
              />
              <motion.div 
                className="absolute inset-x-[-35%] h-[8px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-md"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.7 }}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 space-y-6"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-300 max-w-[800px] mx-auto">
              {t("hero", "title")}
            </h2>
            
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-white to-blue-100 max-w-[600px] mx-auto">
              {t("hero", "description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                asChild 
                variant="default" 
                size="lg" 
                className="glass-effect relative overflow-hidden group"
              >
                <a href="/contact" className="relative z-10">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                    {t("nav", "contact")}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="glass-effect relative overflow-hidden group"
              >
                <a href="/projects" className="relative z-10">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                    {t("nav", "projects")}
                  </span>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full animate-bounce glass-effect hover:bg-white/10 transition-colors"
            onClick={handleScrollDown}
          >
            <ArrowDown className="h-6 w-6 text-white" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}