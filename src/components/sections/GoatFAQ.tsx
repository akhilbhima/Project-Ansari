"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How much does it cost to sponsor a pair of goats?",
    answer:
      "It will cost \u20B920,000 (~$235) per goat, or $470 to sponsor 1 family with a pair.",
  },
  {
    question: "How will the goats be sourced?",
    answer:
      "Rise India will coordinate the procurement process of sourcing the goats.",
  },
  {
    question:
      "How are the families chosen to be eligible for sponsorship?",
    answer:
      "The administration and organization will be coordinated with Rise India, the local church and pastoral leadership to determine which families are most in need and are most viable for raising goats. Leaders will report on the families and goats to Rise India, and ensure families send pictures with updates.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-warm-gray-100">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-gray-900 text-lg font-medium pr-8 group-hover:text-accent-gold-dark transition-colors">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-96 pb-6" : "max-h-0"
        )}
      >
        <p className="text-gray-500 text-base leading-[1.8]">{answer}</p>
      </div>
    </div>
  );
}

export function GoatFAQ() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[800px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent-gold-dark text-xs font-semibold tracking-[0.4em] uppercase mb-6">
              Questions
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-gray-900 leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div>
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
