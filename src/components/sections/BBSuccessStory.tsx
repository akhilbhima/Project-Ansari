"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

export function BBSuccessStory() {
  return (
    <section className="bg-cinematic-dark py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <p className="text-accent-gold text-xs font-semibold tracking-[0.4em] uppercase mb-6 text-center">
            Success Story
          </p>
          <h2 className="bb-heading text-3xl md:text-4xl lg:text-5xl text-white text-center leading-tight mb-16 uppercase">
            Seema&rsquo;s Journey
          </h2>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Photo */}
          <ScrollReveal direction="left" className="lg:w-5/12">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/beholding-beloved/seema-success.jpg"
                alt="Seema — Masters in Nursing success story"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </ScrollReveal>

          {/* Story content */}
          <div className="lg:w-7/12">
            <ScrollReveal delay={200}>
              <div className="w-10 h-px bg-accent-gold/50 mb-8" />
              <p className="text-white/50 text-lg leading-[1.8] mb-6">
                Seema, the daughter of a Devadasi woman, dreamed of becoming a nurse. Through
                the Beholding Beloved program, she was sponsored to complete her Masters in
                Nursing &mdash; a degree that not only transformed her own life but positioned
                her to serve and uplift her entire community.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <p className="text-white/50 text-lg leading-[1.8] mb-10">
                Today, Seema works as a qualified nursing professional, breaking generational
                cycles of exploitation and poverty. Her story is a testament to what becomes
                possible when faithful partnership meets courageous determination.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <blockquote className="border-l-4 border-accent-gold pl-8 py-4">
                <p className="bb-heading text-2xl md:text-3xl text-white italic leading-snug mb-4">
                  &ldquo;Because someone believed in me, I can now believe in others.&rdquo;
                </p>
                <cite className="text-accent-gold text-sm font-semibold tracking-wider uppercase not-italic">
                  &mdash; Seema
                </cite>
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
