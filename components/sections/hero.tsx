"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [nextSlot, setNextSlot] = useState<string | null>(null)

  useEffect(() => {
    async function fetchAvailability() {
      try {
        const res = await fetch("/api/availability")
        const data = await res.json()
        if (data.nextSlot) {
          const date = new Date(data.nextSlot)
          setNextSlot(date.toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }))
        }
      } catch (e) {
        console.error("Failed to fetch availability")
      }
    }
    fetchAvailability()
  }, [])

  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20" />

      <div className="container relative z-10 px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-secondary/10 border border-secondary/20 text-secondary-foreground/80 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium">
              {nextSlot ? `Next available: ${nextSlot}` : "Currently accepting new projects"}
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-6 leading-[1.1] flex flex-col items-center justify-center"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="hidden md:block relative w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24">
              <Image 
                src="/logos/android-chrome-512x512.png" 
                alt="Datashrimp Logo" 
                fill
                className="object-contain"
              />
            </div>
            <span>We Turn Ideas Into</span>
          </div>
          <span className="text-primary bg-clip-text">Real, Usable Tech</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
        >
          We’re a consulting-led agency. Less corporate, more collaboration.
          <br className="hidden md:block" /> We build, guide, and grow your digital products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(1,95,232,0.3)]"
          >
            <a 
              href={process.env.NEXT_PUBLIC_CAL_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 px-8 text-lg rounded-full border-zinc-800 hover:bg-zinc-900 text-white transition-all duration-300"
          >
            <a href="#products">View Our Work</a>
          </Button>
        </motion.div>
      </div>
      
      {/* Decorative gradient glowing effect at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-40 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
    </section>
  )
}
