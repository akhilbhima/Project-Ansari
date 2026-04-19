"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollReveal(options?: {
  threshold?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options?.once !== false) {
            observer.unobserve(element);
          }
        } else if (options?.once === false) {
          setIsVisible(false);
        }
      },
      { threshold: options?.threshold ?? 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options?.threshold, options?.once]);

  return { ref, isVisible };
}
