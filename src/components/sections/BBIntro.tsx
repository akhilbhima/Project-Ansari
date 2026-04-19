"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

export function BBIntro() {
  return (
    <section className="bg-warm-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left" className="lg:w-5/12">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/beholding-beloved/shape-element.jpg"
                alt="Beloved leaders — Devadasi women in Karnataka"
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
                Our Mission
              </p>
              <h2 className="bb-heading text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight mb-8 uppercase">
                Beloved Leaders in Karnataka
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="w-10 h-px bg-accent-gold/50 mb-8" />
              <p className="text-gray-500 text-lg leading-[1.8] mb-6">
                In the heart of Karnataka, India, there are an estimated 80,000 women
                known as Devadasi &mdash; women who were dedicated to temple service as
                young girls and have faced a lifetime of exploitation and marginalization.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-gray-500 text-lg leading-[1.8] mb-6">
                New Mercy&rsquo;s Beholding Beloved ministry partners with local churches to
                walk alongside these women, offering practical support, discipleship, and
                the transformative love of Christ. Each woman has unique needs &mdash; from
                business funding to education sponsorships &mdash; and every contribution
                makes a real difference in her journey toward dignity and hope.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <blockquote className="border-l-4 border-accent-gold pl-8 py-4 mt-8">
                <p className="bb-heading text-2xl md:text-3xl text-gray-900 italic leading-snug">
                  Every woman is seen, known, and loved.
                </p>
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
