import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function BBHero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Ken Burns animated background */}
      <div
        className="absolute inset-0"
        style={{ animation: "kenBurns 20s ease-in-out infinite" }}
      >
        <Image
          src="/images/beholding-beloved/hero.jpg"
          alt="Beholding Beloved — Devadasi women ministry"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="max-w-[1400px] mx-auto px-6 pb-24 w-full">
          <p className="text-accent-gold text-xs font-semibold tracking-[0.4em] uppercase mb-6">
            New Mercy Ministry
          </p>
          <h1 className="bb-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.9] mb-6 uppercase">
            Beholding Beloved
          </h1>
          <div className="w-12 h-px bg-accent-gold/60 mb-5" />
          <p className="text-white/70 text-base tracking-wide max-w-md">
            A journey of love &amp; faith for Devadasi women in Karnataka.
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
