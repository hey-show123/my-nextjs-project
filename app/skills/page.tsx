"use client"

import { motion } from "framer-motion"
import {
  BrainCircuit,
  Code,
  Database,
  FileCode,
  FileSymlink,
  FolderGit2,
  Globe,
  LineChart,
  Server,
  Settings,
  Smartphone,
  Tablet,
  Terminal,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const skillCategories = {
  languages: [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "HTML/CSS", level: 90 },
    { name: "Java", level: 75 },
    { name: "C/C++", level: 70 },
    { name: "C#", level: 65 },
    { name: "PHP", level: 60 },
    { name: "Ruby", level: 55 },
    { name: "Go", level: 50 },
    { name: "Rust", level: 45 },
    { name: "Swift", level: 40 },
  ],
  frontend: [
    { name: "React", level: 85 },
    { name: "Vue", level: 75 },
    { name: "Angular", level: 65 },
    { name: "Next.js", level: 80 },
    { name: "TailwindCSS", level: 85 },
    { name: "Material UI", level: 75 },
    { name: "SASS/SCSS", level: 80 },
    { name: "Redux", level: 70 },
    { name: "GraphQL Client", level: 65 },
    { name: "Webpack", level: 60 },
    { name: "Jest", level: 70 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Django", level: 85 },
    { name: "Flask", level: 80 },
    { name: "Express", level: 75 },
    { name: "FastAPI", level: 70 },
    { name: "Spring Boot", level: 60 },
    { name: "GraphQL Server", level: 65 },
    { name: "REST API Design", level: 85 },
    { name: "WebSockets", level: 70 },
    { name: "Authentication/JWT", level: 75 },
  ],
  data: [
    { name: "pandas", level: 90 },
    { name: "NumPy", level: 85 },
    { name: "TensorFlow", level: 75 },
    { name: "PyTorch", level: 70 },
    { name: "scikit-learn", level: 85 },
    { name: "Matplotlib", level: 80 },
    { name: "Seaborn", level: 75 },
    { name: "Tableau", level: 65 },
    { name: "D3.js", level: 60 },
    { name: "Jupyter", level: 85 },
    { name: "R", level: 60 },
  ],
  databases: [
    { name: "SQL", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Firebase", level: 70 },
    { name: "Redis", level: 65 },
    { name: "Elasticsearch", level: 60 },
    { name: "GraphQL", level: 70 },
    { name: "ORM Tools", level: 75 },
  ],
  mobile: [
    { name: "React Native", level: 75 },
    { name: "Swift", level: 60 },
    { name: "Kotlin", level: 60 },
    { name: "Flutter", level: 65 },
    { name: "Mobile UI Design", level: 70 },
    { name: "iOS Development", level: 55 },
    { name: "Android Development", level: 60 },
    { name: "Progressive Web Apps", level: 75 },
  ],
  devops: [
    { name: "Git", level: 85 },
    { name: "Docker", level: 70 },
    { name: "CI/CD", level: 65 },
    { name: "AWS", level: 60 },
    { name: "Google Cloud", level: 55 },
    { name: "Linux/Bash", level: 75 },
    { name: "Nginx/Apache", level: 65 },
    { name: "Kubernetes", level: 50 },
  ],
}

const tabIcons = {
  languages: Terminal,
  frontend: Globe,
  backend: Server,
  data: LineChart,
  databases: Database,
  mobile: Smartphone,
  devops: Settings,
}

export default function SkillsPage() {
  const renderSkills = (skills: { name: string; level: number }[]) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <div className="container mx-auto py-24 px-4 md:px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Code className="mr-2 h-5 w-5" />
            Technical Skills
          </h2>

          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="w-full mb-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
              {Object.entries(tabIcons).map(([key, Icon]) => (
                <TabsTrigger key={key} value={key} className="flex items-center">
                  <Icon className="mr-2 h-4 w-4" />
                  <span className="capitalize">{key}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {Object.entries(skillCategories).map(([key, skills]) => (
              <TabsContent key={key} value={key} className="mt-4">
                {renderSkills(skills)}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <Separator className="my-12" />

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <BrainCircuit className="mr-2 h-5 w-5" />
            Other Areas of Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <FileCode className="mr-2 h-5 w-5 text-primary" />
                Scientific Expertise
              </h3>
              <ul className="space-y-2">
                {[
                  "Mass Spectrometry Analysis",
                  "Organic Chemistry",
                  "Physical Chemistry",
                  "Analytical Techniques",
                  "Laboratory Methods",
                  "Data Interpretation",
                  "Research Methodology",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-primary mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <FileSymlink className="mr-2 h-5 w-5 text-primary" />
                Interdisciplinary Knowledge
              </h3>
              <ul className="space-y-2">
                {[
                  "Statistical Analysis",
                  "Financial Modeling",
                  "Psychological Principles",
                  "Economic Theory",
                  "World History",
                  "Technical Writing",
                  "Project Management",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-primary mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <Separator className="my-12" />

        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <FolderGit2 className="mr-2 h-5 w-5" />
            Professional Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Methodical Problem Solving",
                description: "I approach complex problems with a systematic methodology, breaking them down into manageable components.",
              },
              {
                title: "Cross-disciplinary Innovation",
                description: "My diverse background allows me to draw connections between different fields, leading to innovative solutions.",
              },
              {
                title: "Continuous Learning",
                description: "I'm committed to staying current with emerging technologies and methodologies in my fields of interest.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-muted/50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}