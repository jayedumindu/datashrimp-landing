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
          
          <div className="md:w-1/2 relative hidden md:block">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 blur-[80px] rounded-full pointer-events-none" />
             <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-6 rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div className="flex">
                    <span className="text-purple-400 mr-2">const</span>
                    <span className="text-blue-400 mr-2">buildFuture</span>
                    <span className="text-zinc-400">=</span>
                    <span className="text-zinc-400">()</span>
                    <span className="text-zinc-400 ml-2">=&gt;</span>
                    <span className="text-zinc-400 ml-2">{`{`}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400 mr-2">return</span>
                    <span className="text-green-400">"Innovation"</span>
                  </div>
                  <div className="text-zinc-400">{`}`}</div>
                  <div className="h-4" />
                  <div className="flex">
                    <span className="text-purple-400 mr-2">async</span>
                    <span className="text-purple-400 mr-2">function</span>
                    <span className="text-blue-400">deploy</span>
                    <span className="text-zinc-400">()</span>
                    <span className="text-zinc-400 ml-2">{`{`}</span>
                  </div>
                  <div className="pl-4 flex">
                    <span className="text-purple-400 mr-2">await</span>
                    <span className="text-blue-400">launchNextBigThing</span>
                    <span className="text-zinc-400">()</span>
                  </div>
                   <div className="text-zinc-400">{`}`}</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
