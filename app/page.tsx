"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { ProductsSection } from "@/components/sections/products"
import { BenefitsSection } from "@/components/sections/benefits"
import { ServicesSection } from "@/components/sections/services"
import { PricingSection } from "@/components/sections/pricing"
import { FAQSection } from "@/components/sections/faq"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { ContactSection } from "@/components/sections/contact"
import { FooterSection } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30 selection:text-white font-sans">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <ProductsSection />
      <BenefitsSection />
      <ServicesSection />
      <PricingSection />
      <FAQSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
