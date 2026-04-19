"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

export function StorySection() {
  return (
    <section className="bg-warm-white py-24 md:py-32">
      <div className="max-w-[720px] mx-auto px-6">
        <ScrollReveal>
          <p className="text-accent-gold text-xs font-semibold tracking-[0.4em] uppercase mb-6 text-center">
            Our Story
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl lg:text-5xl text-gray-900 text-center leading-tight mb-12">
            Sustainable Support That Restores Faith &amp; Hope
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-gray-500 text-lg leading-[1.8] mb-8">
            Project Aasare (ಆಸರೆ) takes its name from the word &lsquo;Aasare,&rsquo; meaning
            support, refuge, or reliance. Rooted in this spirit, this project exists to walk
            alongside communities in India with long-term care, offering not just temporary
            help but sustainable support that restores faith and hope.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <blockquote className="border-l-4 border-accent-gold pl-8 py-4 my-12">
            <p className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl text-gray-900 italic leading-snug">
              Empowering local individuals to build stability for themselves.
            </p>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="text-gray-500 text-lg leading-[1.8]">
            Through initiatives like sponsoring goats and other livelihood-focused efforts,
            Project Aasare seeks to empower local individuals to build stability for
            themselves while reflecting God&rsquo;s heart for generosity and faithfulness.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
