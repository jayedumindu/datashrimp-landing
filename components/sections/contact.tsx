"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion } from "motion/react"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setIsSubmitting(true)
    setStatus("idle")

    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">Let's Build Something Great</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you shortly.
            </p>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-zinc-400">Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="John Doe" 
                    required 
                    className="bg-zinc-950/50 border-zinc-800 focus:border-primary h-12 rounded-xl text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-zinc-400">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="bg-zinc-950/50 border-zinc-800 focus:border-primary h-12 rounded-xl text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-zinc-400">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject" 
                  placeholder="Tell us what you're looking for" 
                  required 
                  className="bg-zinc-950/50 border-zinc-800 focus:border-primary h-12 rounded-xl text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-zinc-400">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Project details, timeline, budget..." 
                  required 
                  className="bg-zinc-950/50 border-zinc-800 focus:border-primary min-h-[150px] rounded-xl text-white resize-none"
                />
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-full bg-primary hover:bg-primary/90 text-white text-lg font-medium transition-all duration-300"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>

              {status === "success" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 justify-center pt-4"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Message sent successfully! We'll be in touch soon.</span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 justify-center pt-4"
                >
                  <AlertCircle className="h-5 w-5" />
                  <span>Oops! Something went wrong. Please try again later.</span>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
