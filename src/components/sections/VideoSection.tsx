"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CountUp } from "@/components/CountUp";

export function VideoSection() {
  return (
    <section className="bg-cinematic-dark py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Video embed — primary focal point of this section */}
        <ScrollReveal direction="scale">
          <div className="relative max-w-[960px] mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/50 mb-20">
            <Image
              src="/images/hero.jpg"
              alt="Watch Our Story"
              fill
              className="object-cover"
              sizes="(max-width: 960px) 100vw, 960px"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group cursor-pointer">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent-gold/90 flex items-center justify-center group-hover:bg-accent-gold group-hover:scale-110 transition-all duration-300 shadow-lg shadow-accent-gold/20">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-gray-950 ml-1" fill="currentColor" />
              </div>
            </div>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs font-medium tracking-[0.3em] uppercase">
              Watch Our Story
            </p>
          </div>
        </ScrollReveal>

        {/* Stats — secondary supporting content below the video */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          <div className="text-center">
            <p className="font-[family-name:var(--font-serif)] text-5xl md:text-6xl text-white mb-2">
              <CountUp end={2012} duration={2500} />
            </p>
            <p className="text-white/40 text-xs font-semibold tracking-[0.3em] uppercase">
              Serving Since
            </p>
          </div>
          <div className="w-12 h-px md:w-px md:h-12 bg-white/10" />
          <div className="text-center">
            <p className="font-[family-name:var(--font-serif)] text-5xl md:text-6xl text-white mb-2">
              <CountUp end={80000} duration={2500} suffix="+" />
            </p>
            <p className="text-white/40 text-xs font-semibold tracking-[0.3em] uppercase">
              Lives to Reach
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
