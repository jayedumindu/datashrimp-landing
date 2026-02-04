"use client"

import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "They understood our vision better than we did. The product they built didn't just meet our requirements — it reimagined our entire business model for the better.",
    author: "Sarah Jenks",
    role: "CEO at FintechFlow",
  },
  {
    quote:
      "We needed a partner who could move fast without breaking things. This team delivered a complex healthcare platform in record time with zero critical bugs.",
    author: "Michael Chen",
    role: "CTO at HealthBridge",
  },
  {
    quote:
      "The level of strategic insight they brought to the table was incredible. They aren't just developers; they are true product architects.",
    author: "Elena Rodriguez",
    role: "Founder at EcoSense",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-16 text-center">
          Trusted by Visionaries
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl relative hover:bg-zinc-900 transition-colors duration-300"
            >
              <div className="absolute top-8 right-8 text-primary/20">
                <Quote className="w-10 h-10" />
              </div>
              <p className="text-zinc-300 text-lg leading-relaxed mb-8 pt-4">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-primary text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
