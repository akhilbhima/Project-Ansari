"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale";
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  threshold = 0.15,
  once = true,
  className,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold, once });

  return (
    <div
      ref={ref}
      data-direction={direction}
      className={cn(
        isVisible ? "scroll-visible" : "scroll-hidden",
        className
      )}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
