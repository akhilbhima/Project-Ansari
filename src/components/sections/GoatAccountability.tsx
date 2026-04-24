"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

export function GoatAccountability() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left" className="lg:w-5/12">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/the-goats/accountability-family.jpg"
                alt="Program accountability — local family with goats"
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
                Transparency
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-gray-900 leading-tight mb-8">
                Program accountability
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="w-10 h-px bg-accent-gold/50 mb-8" />
              <p className="text-gray-500 text-lg leading-[1.8] mb-6">
                Sponsors can expect updates from the program with pictures of
                the families, their goats and how they are doing. Local village
                leaders, many of them our own sponsored Beloved Women, will work
                with their local pastors and church networks to organize and
                administer the program to ensure transparency and
                accountability, as well as program feedback.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-gray-500 text-lg leading-[1.8]">
                They will coordinate the acquisition of the livestock, report on
                the family to Rise India, and ensure families send updates in a
                timely manner. A small portion of the program proceeds will go
                to the administration of these activities to ensure it is running
                smoothly.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
