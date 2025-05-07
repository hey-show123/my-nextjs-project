"use client"

import { motion } from "framer-motion"
import { Code, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { AnimatedText } from "@/components/ui/animated-text"
import { useLanguage } from "@/lib/language-context"

const projects = [
  {
    title: "Personal Blog",
    description: "日々の開発記録や技術的な発見、学習過程、そして時には日常生活での出来事まで幅広く共有しています。Next.jsとMDXを使用して、コードのシンタックスハイライトや画像の最適化を実現。",
    image: "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "MDX", "TailwindCSS"],
    sourceCode: "https://github.com",
    liveDemo: "https://example.com",
  },
  {
    title: "Chemistry Data Analyzer",
    description: "質量分析データを解析・可視化するためのツール。Pythonとmatplotlibを使用して、複雑なデータセットのパターンを特定し、インタラクティブな可視化を生成します。",
    image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Python", "pandas", "matplotlib", "scikit-learn"],
    sourceCode: "https://github.com",
    liveDemo: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "React NativeとFirebaseを使用したタスク管理アプリ。タスクの作成、完了トラッキング、期限リマインダー、カテゴリ管理などの機能を実装。",
    image: "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React Native", "Firebase", "Redux"],
    sourceCode: "https://github.com",
    liveDemo: "https://example.com",
  },
]

export function Projects() {
  const { t } = useLanguage()

  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("projects", "title")}
          </h2>
          <AnimatedText 
            text={t("projects", "description")}
            className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto"
          />
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="transform transition-all duration-300"
            >
              <Card className="h-full flex flex-col overflow-hidden glass-effect">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="flex-grow pt-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2 flex justify-between">
                  <Button asChild variant="ghost" size="sm">
                    <a href={project.sourceCode} target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      {t("projects", "viewCode")}
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <a href={project.liveDemo} target="_blank" rel="noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t("projects", "viewDemo")}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Button asChild className="glass-effect">
            <a href="/projects">
              {t("projects", "viewAll")} <Code className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}