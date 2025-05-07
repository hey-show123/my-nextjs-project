"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Code, Home, Info, Layers, Mail, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { LanguageToggle } from "@/components/layout/language-toggle"

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/skills", label: "Skills", icon: Code },
  { href: "/projects", label: "Projects", icon: Layers },
  { href: "/contact", label: "Contact", icon: Mail },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-8",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b py-3"
          : "bg-transparent py-5"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            hey_show
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <LanguageToggle />
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <LanguageToggle />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="ml-2"
          >
            <Menu className={cn("h-5 w-5", isOpen ? "hidden" : "block")} />
            <X className={cn("h-5 w-5", isOpen ? "block" : "hidden")} />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 w-full bg-background border-b"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container mx-auto py-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center px-4 py-3 hover:bg-accent rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon className="mr-2 h-4 w-4" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}