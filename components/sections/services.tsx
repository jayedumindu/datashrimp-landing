"use client"

import { Check } from "lucide-react"

const services = [
  "Web Application Development",
  "Mobile App Development (iOS & Android)",
  "UI/UX Design & Prototyping",
  "MVP Development",
  "Cloud Infrastructure & DevOps",
  "AI & Machine Learning Integration",
  "IoT Solutions",
  "Enterprise Software Modernization",
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Full-Cycle Development Services
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              From the first line of code to the final deployment, we handle everything. 
              Our team consists of experts in every layer of the modern tech stack.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-zinc-300">{service}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 blur-[80px] rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
