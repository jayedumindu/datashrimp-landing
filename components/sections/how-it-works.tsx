"use client"

import { FileSearch, Rocket, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: FileSearch,
    title: "Define Your Vision",
    description: "We start by understanding your goals. We clarify requirements and build a roadmap tailored to your success.",
  },
  {
    icon: Rocket,
    title: "Build & Validate",
    description: "Our team develops your MVP using agile methodologies, ensuring rapid delivery and continuous feedback loops.",
  },
  {
    icon: TrendingUp,
    title: "Drive Growth & Revenue",
    description: "We launch your product, monitor performance, and iterate to maximize user adoption and revenue growth.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A simple, transparent process to take you from idea to market leader.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-zinc-800 via-primary/50 to-zinc-800 z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(1,95,232,0.15)] transition-all duration-300">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
