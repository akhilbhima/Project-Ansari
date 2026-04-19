"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

interface DonationGoal {
  label: string;
  current: number;
  goal: number;
  ctaLink: string;
}

function ProgressCard({
  goal,
  delay,
}: {
  goal: DonationGoal;
  delay: number;
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const percentage = Math.min(
    Math.round((goal.current / goal.goal) * 100),
    100
  );

  return (
    <ScrollReveal delay={delay}>
      <div
        ref={ref}
        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-warm-gray-100"
      >
        <h3 className="font-[family-name:var(--font-serif)] text-xl text-gray-900 mb-1">
          {goal.label}
        </h3>
        <p className="text-xs text-gray-400 mb-6 tracking-wide">
          ${goal.current.toLocaleString()} of ${goal.goal.toLocaleString()}{" "}
          raised
        </p>

        {/* Progress bar — primary visual indicator */}
        <div className="h-2.5 rounded-full bg-warm-gray-100 overflow-hidden mb-2">
          <div
            className="h-full rounded-full transition-all duration-[1500ms] ease-out"
            style={{
              width: isVisible ? `${percentage}%` : "0%",
              background:
                "linear-gradient(90deg, oklch(0.75 0.12 85), oklch(0.80 0.15 75))",
            }}
          />
        </div>

        <p className="text-right text-xs text-gray-400 mb-8">
          <span className="font-bold text-accent-gold-dark text-sm">{percentage}%</span>{" "}
          funded
        </p>

        {/* CTA — strongest visual weight in the card */}
        <a
          href={goal.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-light text-gray-950 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md"
        >
          Donate Now
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </ScrollReveal>
  );
}

const goals: DonationGoal[] = [
  {
    label: "Goat Sponsorship Fund",
    current: 18750,
    goal: 25000,
    ctaLink: "https://pushpay.com/g/newmercy",
  },
  {
    label: "Abode of Peace Construction",
    current: 42000,
    goal: 60000,
    ctaLink: "https://pushpay.com/g/newmercy",
  },
  {
    label: "Beloved Conference 2025",
    current: 8500,
    goal: 15000,
    ctaLink: "https://pushpay.com/g/newmercy",
  },
];

export function DonationProgress() {
  return (
    <section className="bg-warm-gray-50 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <p className="text-accent-gold-dark text-xs font-semibold tracking-[0.4em] uppercase mb-6 text-center">
            Make an Impact
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl lg:text-5xl text-gray-900 text-center leading-tight mb-16">
            Help Us Reach Our Goals
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, i) => (
            <ProgressCard key={goal.label} goal={goal} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
