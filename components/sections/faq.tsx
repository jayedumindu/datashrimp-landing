"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do you validate product ideas?",
    answer:
      "We use a combination of market research, competitor analysis, and rapid prototyping to test assumptions before writing a single line of production code.",
  },
  {
    question: "What's included in MVP development?",
    answer:
      "Our MVP package includes the core feature set needed to solve the user's primary problem, a custom UI/UX design, and a scalable backend architecture.",
  },
  {
    question: "Can you help with post-launch scaling?",
    answer:
      "Absolutely. We act as your technical partners for the long haul, helping you optimize performance, add new features, and scale infrastructure as your user base grows.",
  },
  {
    question: "What's the difference between tiers?",
    answer:
      "The main differences are in the scope of features, timeline, and level of support. The Growth tier adds advanced integrations and analytics, while Enterprise offers custom SLAs and dedicated teams.",
  },
  {
    question: "Do you offer equity-based pricing?",
    answer:
      "We primarily work on a fee-for-service basis, but for select startups with exceptional potential, we are open to discussing hybrid equity/cash models.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We define success metrics (KPIs) at the start of the project, such as user adoption rates, system uptime, and conversion goals, and track them rigorously.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-zinc-950/50">
      <div className="container px-6 mx-auto max-w-4xl">
        <div className="text-center mb-16">
           <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary border border-primary/20 rounded-full bg-primary/10">
            FAQ's
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Frequently <span className="text-primary bg-clip-text">Asked</span> Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Your roadmap to clarity—answered.
          </p>
        </div>

        <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 md:p-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-zinc-800 last:border-0">
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-primary transition-colors py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
