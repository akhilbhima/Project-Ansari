"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

export function GoatProgramSection() {
  return (
    <section className="bg-warm-gray-50 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left" className="lg:w-5/12">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/the-goats/program-how.jpg"
                alt="How the goat sponsorship program works"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </ScrollReveal>

          {/* Text */}
          <div className="lg:w-7/12">
            <ScrollReveal>
              <p className="text-accent-gold-dark text-xs font-semibold tracking-[0.4em] uppercase mb-6">
                The Program
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-gray-900 leading-tight mb-8">
                How the program will work
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="w-10 h-px bg-accent-gold/50 mb-8" />
              <p className="text-gray-500 text-lg leading-[1.8] mb-6">
                Our goal is to sponsor support for 50 families, where each
                family will be provided a pair of young adult goats. Providing
                vital benefits for the recipient family, the program will also
                facilitate in building community engagement through a model of
                seeding support forward to another family.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-gray-500 text-lg leading-[1.8]">
                When the goats of the primary recipient family produce offspring,
                they will gift the offspring to another family in the local
                village. With gestation being 6 months, the reach of 50 families
                will have expanded to 100 families in just a years time. By
                asking families to seed support forward, those participating in
                the program will be empowering other families as well.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
