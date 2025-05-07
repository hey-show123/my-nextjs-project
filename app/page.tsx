import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Projects } from '@/components/sections/projects'
import { Learning } from '@/components/sections/learning'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Learning />
      <Contact />
    </>
  )
}