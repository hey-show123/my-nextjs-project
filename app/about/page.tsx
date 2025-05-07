"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Check, ChevronRight, GraduationCap, MessagesSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-24 px-4 md:px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A closer look at my background, philosophy, and what drives me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="hey_show profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Hey, I'm hey_show</h2>
            <p className="text-muted-foreground mb-4">
              I'm a 20-year-old student with a passion for mass spectrometry and coding. What started as a hobby has evolved into professional-level skills, leading me to offer my services as a freelance engineer.
            </p>
            <p className="text-muted-foreground mb-4">
              My academic focus is in chemistry, specifically mass spectrometry, but I believe in exploring multiple disciplines to broaden my horizons and discover innovative connections between fields.
            </p>
            <p className="text-muted-foreground mb-6">
              Currently, I'm exploring how AI and mass spectrometry can work together to create new solutions and insights in chemical analysis.
            </p>
            <div className="flex items-center space-x-4">
              <Button asChild>
                <a href="/contact">Get in touch</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/projects">My work</a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        <Tabs defaultValue="philosophy" className="mb-16">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="philosophy">My Philosophy</TabsTrigger>
            <TabsTrigger value="education">Education & Learning</TabsTrigger>
          </TabsList>
          <TabsContent value="philosophy" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Why I Explore Multiple Disciplines</h3>
                <p className="text-muted-foreground mb-4">
                  At 20 years old, I believe it's crucial not to limit my potential by focusing too narrowly. The most innovative solutions often emerge at the intersection of different fields.
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Cross-disciplinary thinking leads to unique insights",
                    "Technical skills from one field often transfer to others",
                    "Understanding diverse subjects helps in collaborative projects",
                    "The future of science and technology lies in interdisciplinary approaches",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground">
                  This philosophy has guided me to develop skills across AI, chemistry, programming, statistics, and more - creating a unique perspective that I bring to every project.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="education" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Academic Background</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <GraduationCap className="h-5 w-5 text-primary shrink-0 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">Bachelor's in Chemistry (In Progress)</h4>
                      <p className="text-sm text-muted-foreground">Specializing in Mass Spectrometry and Analytical Techniques</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mt-6 mb-4">Self-Learning Journey</h3>
                  <p className="text-muted-foreground mb-4">
                    Beyond formal education, I'm constantly expanding my knowledge through self-directed learning:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "AI & Machine Learning: Deep learning, neural networks, and practical applications",
                      "Programming: Full-stack development, mobile app creation, and data visualization",
                      "Economics & Finance: Understanding market principles and financial analysis",
                      "World History & Psychology: Human behavior and historical patterns",
                      "Statistics & Data Analysis: Extracting meaningful insights from complex datasets",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="bg-muted rounded-xl p-8 text-center">
          <MessagesSquare className="h-10 w-10 mx-auto mb-4 text-primary" />
          <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            I'm always interested in discussing new projects, research opportunities, or just exchanging ideas. Feel free to reach out!
          </p>
          <Button asChild size="lg">
            <a href="/contact">Contact Me</a>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}