"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

interface GetInvolvedCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  learnMoreLink?: string;
  reversed?: boolean;
  variant?: "dark" | "light";
}

export function GetInvolvedCard({
  image,
  imageAlt,
  title,
  description,
  ctaText,
  ctaLink,
  learnMoreLink,
  reversed = false,
  variant = "dark",
}: GetInvolvedCardProps) {
  const isDark = variant === "dark";

  return (
    <section className="w-full">
      <div
        className={`flex flex-col ${
          reversed ? "lg:flex-row-reverse" : "lg:flex-row"
        } min-h-[600px]`}
      >
        {/* Image half */}
        <ScrollReveal
          direction={reversed ? "right" : "left"}
          className="lg:w-1/2 relative min-h-[400px] lg:min-h-0"
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </ScrollReveal>

        {/* Content half */}
        <ScrollReveal
          direction={reversed ? "left" : "right"}
          delay={200}
          className={`lg:w-1/2 flex items-center ${
            isDark ? "bg-cinematic-dark" : "bg-warm-white"
          }`}
        >
          <div className="px-8 py-16 md:px-16 lg:px-20 max-w-[560px]">
            <h2
              className={`font-[family-name:var(--font-serif)] text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {title}
            </h2>
            <div className={`w-10 h-px mb-6 ${isDark ? "bg-accent-gold/50" : "bg-accent-gold-dark/40"}`} />
            <p
              className={`text-base leading-relaxed mb-10 ${
                isDark ? "text-white/50" : "text-gray-500"
              }`}
            >
              {description}
            </p>
            {/* CTA isolated with whitespace above for emphasis */}
            <div className="flex flex-wrap items-center gap-5">
              <a
                href={ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-light text-gray-950 px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-lg shadow-accent-gold/20 hover:shadow-accent-gold/30"
              >
                {ctaText}
                <ArrowRight className="w-4 h-4" />
              </a>
              {learnMoreLink && (
                <Link
                  href={learnMoreLink}
                  className={`text-xs font-semibold tracking-wider uppercase underline underline-offset-4 transition-colors ${
                    isDark
                      ? "text-white/30 hover:text-accent-gold"
                      : "text-gray-400 hover:text-accent-gold-dark"
                  }`}
                >
                  Learn more
                </Link>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
