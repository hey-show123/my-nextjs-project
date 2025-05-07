"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Server, Smartphone, Terminal } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AnimatedText } from "@/components/ui/animated-text"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const skillCategories = [
  {
    key: "languages",
    icon: Terminal,
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
      { name: "C/C++", level: 75 },
      { name: "C#", level: 70 },
      { name: "Go", level: 65 },
      { name: "Rust", level: 60 },
      { name: "PHP", level: 70 },
      { name: "Ruby", level: 65 },
      { name: "Swift", level: 60 },
      { name: "Kotlin", level: 60 },
      { name: "HTML/CSS", level: 90 },
      { name: "SQL", level: 85 },
      { name: "Dart", level: 55 },
      { name: "R", level: 60 },
      { name: "Scala", level: 50 },
      { name: "Haskell", level: 45 },
      { name: "Lua", level: 50 },
      { name: "Shell Script", level: 75 },
      { name: "PowerShell", level: 70 },
    ],
  },
  {
    key: "frontend",
    icon: Globe,
    skills: [
      { name: "React", level: 85 },
      { name: "Vue", level: 75 },
      { name: "Angular", level: 65 },
      { name: "Next.js", level: 80 },
      { name: "TailwindCSS", level: 85 },
      { name: "Material UI", level: 75 },
      { name: "SASS/SCSS", level: 80 },
    ],
  },
  {
    key: "backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Django", level: 85 },
      { name: "Flask", level: 80 },
      { name: "Express", level: 75 },
      { name: "FastAPI", level: 70 },
      { name: "Spring Boot", level: 60 },
    ],
  },
  {
    key: "data",
    icon: Code,
    skills: [
      { name: "pandas", level: 90 },
      { name: "TensorFlow", level: 75 },
      { name: "PyTorch", level: 70 },
      { name: "scikit-learn", level: 85 },
      { name: "Matplotlib", level: 80 },
      { name: "NumPy", level: 85 },
    ],
  },
  {
    key: "database",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 80 },
      { name: "Redis", level: 70 },
      { name: "Firebase", level: 75 },
      { name: "SQLite", level: 80 },
    ],
  },
  {
    key: "mobile",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: 75 },
      { name: "Flutter", level: 65 },
      { name: "iOS (Swift)", level: 60 },
      { name: "Android (Kotlin)", level: 60 },
      { name: "Expo", level: 70 },
    ],
  },
]

export function Skills() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("skills", "title")}
          </h2>
          <AnimatedText 
            text={t("skills", "description")}
            className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto"
          />
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="transform transition-all duration-300"
            >
              <Card className="glass-effect">
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-2">
                    <category.icon className="h-5 w-5 text-primary" />
                    <CardTitle>{t("skills", `categories.${category.key}`)}</CardTitle>
                  </div>
                  <CardDescription>
                    {category.skills.length} スキル
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="glass-effect">
            <a href="/skills">{t("skills", "viewAll")}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}