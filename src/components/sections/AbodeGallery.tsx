"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Lightbox } from "@/components/Lightbox";

const images = [
  { src: "/images/abode-1.jpg", alt: "Abode of Peace School visit" },
  { src: "/images/abode-2.jpg", alt: "Children at Abode of Peace" },
  { src: "/images/abode-3.jpg", alt: "Abode of Peace construction" },
  { src: "/images/abode-4.jpg", alt: "Team at Abode of Peace" },
];

export function AbodeGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <ScrollReveal>
          <p className="text-accent-gold-dark text-xs font-semibold tracking-[0.4em] uppercase mb-6 text-center">
            On the Ground
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl lg:text-5xl text-gray-900 text-center leading-tight mb-8">
            Abode of Peace
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="max-w-[600px] mx-auto text-center text-gray-400 text-base leading-relaxed mb-16">
            New Mercy has partnered in funding projects at Abode of Peace School.
            In 2025, the outreach team visited to see the impact of the 3rd floor
            construction and spend time with the children on site.
          </p>
        </ScrollReveal>

        {/* Asymmetric gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {images.map((img, i) => (
            <ScrollReveal
              key={img.src}
              delay={i * 100}
              className={i === 0 ? "row-span-2" : ""}
            >
              <button
                onClick={() => setLightboxIndex(i)}
                className="group relative w-full h-full rounded-xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes={
                    i === 0
                      ? "(max-width: 768px) 50vw, 33vw"
                      : "(max-width: 768px) 50vw, 33vw"
                  }
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <Expand className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Lightbox
        images={images}
        initialIndex={lightboxIndex ?? 0}
        open={lightboxIndex !== null}
        onOpenChange={(open) => {
          if (!open) setLightboxIndex(null);
        }}
      />
    </section>
  );
}
