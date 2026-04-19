import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Ken Burns animated background */}
      <div className="absolute inset-0" style={{ animation: "kenBurns 20s ease-in-out infinite" }}>
        <Image
          src="/images/hero.jpg"
          alt="Project Aasare - community in India"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

      {/* Content — Z-pattern: title top-left focal point, tagline anchors bottom */}
      <div className="absolute inset-0 flex items-end">
        <div className="max-w-[1400px] mx-auto px-6 pb-24 w-full">
          <p className="text-accent-gold text-xs font-semibold tracking-[0.4em] uppercase mb-6">
            Vision &amp; Work
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal leading-[0.9] mb-2">
            Project Aasare
          </h1>
          <p className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl md:text-4xl text-white/40 font-normal mb-8">
            (ಆಸರೆ)
          </p>
          <div className="w-12 h-px bg-accent-gold/60 mb-5" />
          <p className="text-white/70 text-base tracking-wide max-w-sm">
            Support. Refuge. Reliance.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
        style={{ animation: "scrollPulse 2s ease-in-out infinite" }}
      >
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
