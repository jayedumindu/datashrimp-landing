"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Web Application",
    description: "A comprehensive financial analytics platform processing millions in real-time transactions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", 
    // Using a placeholder from Unsplash that looks technical/dashboard-y
  },
  {
    title: "HealthCore App",
    category: "Mobile Development",
    description: "Patient management system connecting doctors and patients with secure data handling.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "EcoSmart IoT",
    category: "IoT Solution",
    description: "Smart home energy monitoring system intended to reduce carbon footprint.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-zinc-950/50">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Case Studies
            </h2>
            <p className="text-muted-foreground text-lg">
              We don't just write code; we build revenue-generating assets. Take a look at some of our recent work.
            </p>
          </div>
          <Button variant="outline" className="rounded-full border-zinc-700 hover:bg-white hover:text-black">
            View All Projects
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={450}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-sm font-medium text-primary mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-medium text-white">{project.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-zinc-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
