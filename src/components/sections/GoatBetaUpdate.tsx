"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

const families = [
  {
    name: "Lalitha",
    image: "/images/the-goats/lalitha.jpg",
    description:
      "Her goat gave birth to 2 babies, 1 male and 1 female on 5/13.",
  },
  {
    name: "Sumaitra",
    image: "/images/the-goats/sumaitra.jpg",
    description: "Her goat gave birth to one female on 5/12.",
  },
  {
    name: "Kasturi Gasti",
    image: "/images/the-goats/kasturi.jpg",
    description:
      "We got her 2 goats as soon as she came home, her goat gave birth to 2 males.",
  },
  {
    name: "Sumitra",
    image: "/images/the-goats/sumitra.jpg",
    description:
      "These are Sumitra\u2019s goats. One had a baby the same day, giving birth at the marketplace. Each goat has given birth to female kids.",
  },
];

export function GoatBetaUpdate() {
  return (
    <section className="bg-warm-gray-50 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent-gold-dark text-xs font-semibold tracking-[0.4em] uppercase mb-6">
              Progress
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight mb-8">
              Project update: beta test launch
            </h2>
            <div className="w-10 h-px bg-accent-gold/50 mx-auto mb-8" />
            <p className="text-gray-500 text-lg leading-[1.8] max-w-[750px] mx-auto">
              Since the 2025 team came back, New Mercy launched the program in a
              beta test to gather feedback on the goat sponsorship program. In
              the past 3 months, it has proven to be a great success, even
              leading to a 2nd generation of goats!
            </p>
          </div>
        </ScrollReveal>

        {/* Family cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {families.map((family, i) => (
            <ScrollReveal key={family.name} delay={i * 100}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-warm-gray-100 group h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden flex-shrink-0">
                  <Image
                    src={family.image}
                    alt={family.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 -mt-4 relative flex-1 flex flex-col">
                  <h3 className="font-heading text-xl text-gray-900 mb-2">
                    {family.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-[1.8] flex-1">
                    {family.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
