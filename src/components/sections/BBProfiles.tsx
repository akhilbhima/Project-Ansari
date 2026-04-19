"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface BelovedProfile {
  name: string;
  title: string;
  description: string;
  goal: number;
  image: string;
  goalMet: boolean;
}

const profiles: BelovedProfile[] = [
  {
    name: "Yasoda",
    title: "Tailoring Business",
    description:
      "Yasoda dreams of starting her own tailoring business to provide for her family and gain financial independence. Your support will help her purchase a sewing machine and materials to get started.",
    goal: 3528,
    image: "/images/beholding-beloved/yasoda.png",
    goalMet: true,
  },
  {
    name: "Daisy",
    title: "Small Business Support",
    description:
      "Daisy is working to establish a small business that will sustain her household and give her children access to better opportunities through education.",
    goal: 1176,
    image: "/images/beholding-beloved/daisy.jpg",
    goalMet: false,
  },
  {
    name: "Kavitha",
    title: "Business & Education",
    description:
      "Kavitha needs support to fund both a small business venture and her children's education, creating a pathway out of the cycle of poverty for her entire family.",
    goal: 2352,
    image: "/images/beholding-beloved/kavitha.jpg",
    goalMet: false,
  },
  {
    name: "Mala",
    title: "Livelihood Support",
    description:
      "Mala seeks to build a sustainable livelihood that will allow her to support her family with dignity and break free from the constraints of her past.",
    goal: 1070,
    image: "/images/beholding-beloved/mala.jpg",
    goalMet: true,
  },
  {
    name: "Renuka",
    title: "Business Startup",
    description:
      "Renuka has a vision for a small business that will provide steady income for her household and create opportunities for her children's future.",
    goal: 1655,
    image: "/images/beholding-beloved/renuka.jpg",
    goalMet: false,
  },
  {
    name: "Savetri",
    title: "Business & Stability",
    description:
      "Savetri is determined to build a stable future for her family through a small business. Your partnership can help make her dream of financial independence a reality.",
    goal: 2352,
    image: "/images/beholding-beloved/savetri.jpg",
    goalMet: false,
  },
  {
    name: "Shoba",
    title: "Family Support",
    description:
      "Shoba needs support to establish a sustainable source of income that will allow her to care for her family and invest in her children's education.",
    goal: 2800,
    image: "/images/beholding-beloved/shoba.jpg",
    goalMet: false,
  },
  {
    name: "Sharada",
    title: "Small Business",
    description:
      "Sharada is working toward financial independence through a small business that will enable her to provide for her family and build a brighter future.",
    goal: 1176,
    image: "/images/beholding-beloved/shape-element.jpg",
    goalMet: false,
  },
  {
    name: "Seema",
    title: "Nursing Education",
    description:
      "Seema was sponsored through the Beholding Beloved program to complete her Masters in Nursing — transforming her life and empowering her to serve her community.",
    goal: 1500,
    image: "/images/beholding-beloved/seema-success.jpg",
    goalMet: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Carousel Card  (image-focused, for stacked view)                   */
/* ------------------------------------------------------------------ */

function CarouselCard({
  profile,
  isCenter,
}: {
  profile: BelovedProfile;
  isCenter: boolean;
}) {
  return (
    <div
      className={cn(
        "bg-white h-full rounded-2xl overflow-hidden select-none flex flex-col",
        isCenter
          ? "ring-2 ring-accent-gold/20"
          : "",
        "shadow-[0_8px_30px_rgba(0,0,0,0.25),0_4px_10px_rgba(0,0,0,0.15)]"
      )}
    >
      {/* Full-bleed photo with text overlaid at bottom */}
      <div className="relative h-full">
        <Image
          src={profile.image}
          alt={profile.name}
          fill
          className="object-cover object-top scale-[1.45]"
          sizes="320px"
        />
        {/* White fade + text at bottom */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white from-45% to-transparent pt-16 px-6 pb-5">
          <h3 className="bb-heading text-2xl text-gray-900 mb-1">
            {profile.name}
          </h3>
          <p className="text-accent-gold-dark text-xs font-semibold tracking-wider uppercase">
            {profile.title}
          </p>
          <p className="text-gray-400 text-xs mt-2 tracking-wide">
            Goal: ${profile.goal.toLocaleString()}
          </p>
        </div>
        {/* Goal Met badge */}
        {profile.goalMet && (
          <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-lg z-10">
            <CheckCircle className="w-3.5 h-3.5" />
            Goal Met!
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Grid Card  (full detail, for expanded view)                        */
/* ------------------------------------------------------------------ */

function GridCard({ profile }: { profile: BelovedProfile }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });
  const percentage = profile.goalMet ? 100 : 0;

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-warm-gray-100 group h-full flex flex-col"
    >
      {/* Portrait photo with fade blending into content */}
      <div className="relative aspect-[4/5] overflow-hidden flex-shrink-0">
        <Image
          src={profile.image}
          alt={profile.name}
          fill
          className="object-cover object-top scale-[1.45] group-hover:scale-[1.5] transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
        {profile.goalMet && (
          <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-lg z-10">
            <CheckCircle className="w-3.5 h-3.5" />
            Goal Met!
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 -mt-4 relative flex-1 flex flex-col">
        <h3 className="bb-heading text-2xl text-gray-900 mb-1">
          {profile.name}
        </h3>
        <p className="text-accent-gold-dark text-xs font-semibold tracking-wider uppercase mb-4">
          {profile.title}
        </p>
        <p className="text-gray-500 text-sm leading-[1.8] mb-6 flex-1">
          {profile.description}
        </p>

        {/* Goal */}
        <p className="text-xs text-gray-400 mb-3 tracking-wide">
          Goal:{" "}
          <span className="font-bold text-gray-900">
            ${profile.goal.toLocaleString()}
          </span>
        </p>

        {/* Progress bar */}
        <div className="h-2.5 rounded-full bg-warm-gray-100 overflow-hidden mb-2">
          <div
            className="h-full rounded-full transition-all duration-[1500ms] ease-out"
            style={{
              width: isVisible ? `${percentage}%` : "0%",
              background: profile.goalMet
                ? "linear-gradient(90deg, oklch(0.70 0.15 155), oklch(0.75 0.18 150))"
                : "linear-gradient(90deg, oklch(0.75 0.12 85), oklch(0.80 0.15 75))",
            }}
          />
        </div>

        <p className="text-right text-xs text-gray-400 mb-6">
          {profile.goalMet ? (
            <span className="font-bold text-emerald-600 text-sm">
              100% funded
            </span>
          ) : (
            <span className="font-bold text-accent-gold-dark text-sm">
              Needs support
            </span>
          )}
        </p>

        {/* CTA */}
        {profile.goalMet ? (
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-700 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase">
            <CheckCircle className="w-3.5 h-3.5" />
            Fully Funded
          </div>
        ) : (
          <a
            href="https://pushpay.com/g/newmercy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-light text-gray-950 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Donate Now
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Section                                                       */
/* ------------------------------------------------------------------ */

export function BBProfiles() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const total = profiles.length;

  /* Responsive spacing */
  const [cardWidth, setCardWidth] = useState(300);
  const [cardSpacing, setCardSpacing] = useState(200);
  const [maxVisible, setMaxVisible] = useState(2);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setCardWidth(240);
        setCardSpacing(140);
        setMaxVisible(1);
      } else if (w < 1024) {
        setCardWidth(280);
        setCardSpacing(180);
        setMaxVisible(2);
      } else {
        setCardWidth(300);
        setCardSpacing(220);
        setMaxVisible(2);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* Wrapping offset */
  const getOffset = useCallback(
    (i: number) => {
      let off = i - activeIndex;
      const half = Math.ceil(total / 2);
      if (off > half) off -= total;
      if (off < -half) off += total;
      return off;
    },
    [activeIndex, total]
  );

  const next = useCallback(
    () => setActiveIndex((p) => (p + 1) % total),
    [total]
  );
  const prev = useCallback(
    () => setActiveIndex((p) => (p - 1 + total) % total),
    [total]
  );

  /* Keyboard navigation */
  useEffect(() => {
    if (expanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded, next, prev]);

  return (
    <section className="bg-warm-gray-50 py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* -------- Header -------- */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-16">
            <div>
              <p className="text-accent-gold-dark text-xs font-semibold tracking-[0.4em] uppercase mb-4">
                Meet the Women
              </p>
              <h2 className="bb-heading text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight uppercase">
                Support a Beloved Woman
              </h2>
            </div>
            <motion.button
              onClick={() => setExpanded((v) => !v)}
              className="shrink-0 px-6 py-3 rounded-full border-2 border-gray-900 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 hover:bg-gray-900 hover:text-white"
              whileTap={{ scale: 0.95 }}
            >
              {expanded ? "\u2190 Back" : "See all"}
            </motion.button>
          </div>
        </ScrollReveal>

        {/* -------- Cards -------- */}
        {expanded ? (
          /* ============ GRID VIEW ============ */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {profiles.map((profile, i) => (
              <motion.div
                key={profile.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: "easeOut",
                }}
              >
                <GridCard profile={profile} />
              </motion.div>
            ))}
          </div>
        ) : (
          /* ============ CAROUSEL VIEW ============ */
          <div className="relative" style={{ height: 480 }}>
            {/* Cards stack */}
            <div className="absolute inset-0">
              {profiles.map((profile, i) => {
                const offset = getOffset(i);
                const absOff = Math.abs(offset);
                const visible = absOff <= maxVisible;

                return (
                  <motion.div
                    key={profile.name}
                    className={cn(
                      "absolute",
                      offset === 0
                        ? "cursor-default"
                        : "cursor-pointer"
                    )}
                    style={{
                      width: cardWidth,
                      height: 420,
                      left: "50%",
                      marginLeft: -(cardWidth / 2),
                      top: 20,
                    }}
                    animate={{
                      x: offset * cardSpacing,
                      scale: visible ? 1 - absOff * 0.06 : 0.75,
                      opacity: visible ? 1 : 0,
                      zIndex: 30 - absOff * 10,
                      rotateY: offset * -3,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    onClick={() => {
                      if (offset !== 0) setActiveIndex(i);
                    }}
                    whileHover={
                      offset === 0 ? { scale: 1.03 } : undefined
                    }
                  >
                    <CarouselCard
                      profile={profile}
                      isCenter={offset === 0}
                    />
                  </motion.div>
                );
              })}
            </div>

              {/* Left arrow */}
              <motion.button
                onClick={prev}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-900 hover:bg-accent-gold hover:text-white transition-colors duration-300"
                whileTap={{ scale: 0.9 }}
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              {/* Right arrow */}
              <motion.button
                onClick={next}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-900 hover:bg-accent-gold hover:text-white transition-colors duration-300"
                whileTap={{ scale: 0.9 }}
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>

              {/* Dot indicators */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 z-40">
                {profiles.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to ${profiles[i].name}`}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      i === activeIndex
                        ? "w-7 bg-accent-gold"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    )}
                  />
                ))}
              </div>
            </div>
          )}

        {/* -------- Bottom CTA -------- */}
        <ScrollReveal delay={300}>
          <div className="text-center mt-20">
            <div className="w-10 h-px bg-accent-gold/50 mx-auto mb-8" />
            <p className="text-gray-500 text-base leading-[1.8] max-w-lg mx-auto mb-8">
              Want to make a general donation to the Beholding Beloved ministry?
              Every gift helps us reach more women.
            </p>
            <a
              href="https://pushpay.com/g/newmercy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-light text-gray-950 px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-lg shadow-accent-gold/20 hover:shadow-accent-gold/30"
            >
              Give to Beholding Beloved
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
