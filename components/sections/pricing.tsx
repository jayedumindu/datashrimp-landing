"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const features = [
  "Custom Design System",
  "Core Features Implementation",
  "Mobile Responsive",
  "Database Integration",
  "API Development",
  "Deployment & Hosting Setup",
  "1 Month Priority Support",
  "Source Code Ownership",
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to launch your product. No hidden fees.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative flex flex-col md:flex-row p-8 md:p-12 rounded-3xl border bg-zinc-900/50 border-primary shadow-[0_0_30px_rgba(1,95,232,0.15)] transition-all duration-300">
            <div className="flex-1 mb-8 md:mb-0 md:mr-12">
              <h3 className="text-2xl font-medium text-white mb-4">Get Started</h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Perfect for validating ideas or scaling your existing product. We handle the tech, you focus on the business.
              </p>

            </div>

            <div className="flex-1 flex flex-col justify-between">
              <ul className="space-y-4 mb-8">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base text-zinc-300">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="w-full rounded-full py-6 text-lg bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
              >
                <a 
                  href={process.env.NEXT_PUBLIC_CAL_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Start Your Project
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
