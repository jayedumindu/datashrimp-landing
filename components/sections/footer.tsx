"use client"

import Link from "next/link"
import { Linkedin, Instagram, Facebook } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-16">
      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white mb-6 inline-block">
              Datashrimp<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-8">
              We help brands turn ideas into real, usable tech. Less corporate, more collaboration. We build, guide, and grow.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Company</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><Link href="#how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="#products" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Contact</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="mailto:info@thedatashrimp.com" className="hover:text-primary transition-colors">info@thedatashrimp.com</a></li>
              <li><a href="tel:+94772709069" className="hover:text-primary transition-colors">+94 77 270 9069</a></li>
              <li><a href="tel:+94704319505" className="hover:text-primary transition-colors">+94 70 431 9505</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Datashrimp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
