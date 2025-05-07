"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, BookOpen, Brain, FlaskRound as Flask, Microscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedText } from "@/components/ui/animated-text"
import { useLanguage } from "@/lib/language-context"

const interests = [
  {
    icon: Microscope,
    key: "massSpec"
  },
  {
    icon: Brain,
    key: "ai"
  },
  {
    icon: Flask,
    key: "research"
  },
  {
    icon: BookOpen,
    key: "learning"
  },
]

export function About() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-1/2"
            style={{ opacity, y }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
              {t("about", "title")}
            </h2>
            
            <AnimatedText 
              text={t("about", "description")}
              className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200 mb-6"
            />
            
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-white to-blue-100 mb-4">
              {t("about", "bio")}
            </p>
            
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-white to-blue-100 mb-6">
              {t("about", "philosophy")}
            </p>
            
            <p className="font-medium mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-300">
              {t("about", "dream")}
            </p>
            
            <Button asChild variant="outline" className="glass-effect">
              <a href="/about" className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                {t("about", "learnMore")} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect">
                  <CardContent className="p-6">
                    <interest.icon className="h-10 w-10 mb-4 text-blue-400" />
                    <h3 className="text-lg font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-300">
                      {t("about", `interests.${interest.key}.title`)}
                    </h3>
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-white to-blue-100">
                      {t("about", `interests.${interest.key}.description`)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}