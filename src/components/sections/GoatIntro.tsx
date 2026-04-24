"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

export function GoatIntro() {
  return (
    <section className="bg-warm-white py-24 md:py-32">
      <div className="max-w-[900px] mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="text-accent-gold-dark text-xs font-semibold tracking-[0.4em] uppercase mb-6">
            Sponsor a Family
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight mb-8">
            Sponsor a family for $470
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="w-10 h-px bg-accent-gold/50 mx-auto mb-8" />
          <p className="text-gray-500 text-lg leading-[1.8] mb-10">
            Partner with a family by sponsoring a pair of goats. Seeding
            appreciating assets for additional income streams. Sponsoring goats
            to impact a family&rsquo;s future and provide sustainable livelihood
            opportunities.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <a
            href="https://pushpay.com/g/newmercy?fnd=Npu9Az80Qbiok-srysuR-g&fndv=Lock&lang=en&src=pcgl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-light text-gray-950 px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-lg shadow-accent-gold/20 hover:shadow-accent-gold/30"
          >
            Take Part
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-gray-400 text-sm mt-4 italic">
            Please input &ldquo;Goats&rdquo; in memo line.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
