"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

export function GoatWhySection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text */}
          <div className="lg:w-1/2">
            <ScrollReveal>
              <p className="text-accent-gold-dark text-xs font-semibold tracking-[0.4em] uppercase mb-6">
                Why Goats?
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-gray-900 leading-tight mb-8">
                Why goats?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="w-10 h-px bg-accent-gold/50 mb-8" />
              <p className="text-gray-500 text-lg leading-[1.8] mb-6">
                Goats can help a family in many ways. They provide milk, which
                can be used for nourishment and used to mix in teas/chais, and
                can be used for butter, cheese, and supplementing everyday foods.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-gray-500 text-lg leading-[1.8] mb-6">
                These dairy products can also be sold for additional income,
                providing a sustainable revenue stream. As many of these families
                have experience in farming, their knowledge in agriculture will
                also enable the goats to provide fertilizer and encourage better
                crop yields by helping to clear land.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <blockquote className="border-l-4 border-accent-gold pl-8 py-4 mt-8">
                <p className="font-heading text-2xl md:text-3xl text-gray-900 italic leading-snug">
                  Partner with a family and make all the difference.
                </p>
              </blockquote>
            </ScrollReveal>
          </div>

          {/* Images grid */}
          <ScrollReveal direction="right" className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl col-span-2">
                <Image
                  src="/images/the-goats/goat-detail-1.jpg"
                  alt="Goats providing livelihood support"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/the-goats/goat-detail-2.jpg"
                  alt="Goat farming in Karnataka"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/the-goats/goat-detail-3.jpg"
                  alt="Sustainable goat farming"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
