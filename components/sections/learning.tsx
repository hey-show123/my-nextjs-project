"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Bot, Brain, Code2, Database, LayoutGrid, Microscope } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedText } from "@/components/ui/animated-text"
import { useLanguage } from "@/lib/language-context"

const learningTopics = [
  {
    icon: Bot,
    key: "ai",
    color: "bg-blue-500/10 dark:bg-blue-500/20",
    iconColor: "text-blue-500",
  },
  {
    icon: Microscope,
    key: "massSpec",
    color: "bg-green-500/10 dark:bg-green-500/20",
    iconColor: "text-green-500",
  },
  {
    icon: Code2,
    key: "nextjs",
    color: "bg-violet-500/10 dark:bg-violet-500/20",
    iconColor: "text-violet-500",
  },
  {
    icon: LayoutGrid,
    key: "swift",
    color: "bg-orange-500/10 dark:bg-orange-500/20",
    iconColor: "text-orange-500",
  },
  {
    icon: Database,
    key: "kotlin",
    color: "bg-teal-500/10 dark:bg-teal-500/20",
    iconColor: "text-teal-500",
  },
]

export function Learning() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-muted/30">
      <motion.div 
        className="container px-4 md:px-6"
        style={{ opacity }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("learning", "title")}
          </h2>
          <AnimatedText 
            text={t("learning", "description")}
            className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 max-w-5xl mx-auto">
          {learningTopics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="transform transition-all duration-300"
            >
              <Card className="border-0 shadow-none glass-effect">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className={cn("p-3 rounded-lg", topic.color)}>
                      <topic.icon className={cn("h-6 w-6", topic.iconColor)} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">
                        {t("learning", `topics.${topic.key}.title`)}
                      </h3>
                      <p className="text-muted-foreground">
                        {t("learning", `topics.${topic.key}.description`)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {t("learning", "philosophy")}
          </p>
        </div>
      </motion.div>
    </section>
  )
}