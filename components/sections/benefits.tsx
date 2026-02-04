"use client"

import { Zap, DollarSign, Clock, ShieldCheck, Users, Globe } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Strategic Product Ideation",
    description: "We brainstorm with you. Validate ideas, refine pitches, and craft products that sell.",
  },
  {
    icon: DollarSign,
    title: "Revenue-First Development",
    description: "Code with a business mindset. Every feature is designed to acquire users and drive revenue.",
  },
  {
    icon: Clock,
    title: "Rapid Deployment",
    description: "Launch faster with our agile processes and pre-built scalable architecture modules.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Grade Security",
    description: "Security is baked in from day one, ensuring your data and your users' data is always safe.",
  },
  {
    icon: Users,
    title: "Dedicated Tech Team",
    description: "Like an in-house team, but without the overhead. Seamless communication and alignment.",
  },
  {
    icon: Globe,
    title: "Scalable Infrastructure",
    description: "Built to grow. We architect solutions that handle traffic spikes and database growth effortlessly.",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            We're Product Architects, Simply.
          </h2>
          <p className="text-muted-foreground text-lg">
             Your success is built into our DNA. We offer more than just development; we offer a strategic partnership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-primary/50 hover:bg-zinc-900/80 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-white group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
