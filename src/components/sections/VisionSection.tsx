"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

export function VisionSection() {
  const paragraphs = [
    "Since 2012, our church has been faithfully serving in Karnataka, India, with a deep calling to bring the hope of Jesus to the Devadasi women — precious daughters of God who have often been forgotten by the world.",
    "What began as a small outreach has grown into a passionate ministry grounded in love, dignity, and the transforming power of the gospel.",
    "Each year, we host the Beloved Conference, a sacred gathering where Devadasi women are reminded of who they truly are — not defined by their past, but cherished and called by God.",
    "We believe that every woman matters to Jesus, and we carry a bold vision: to reach all 80,000 Devadasi women in Karnataka with the good news of His love. Through long-term relationships, discipleship, and holistic care, we aim to see lives restored, faith awakened, and communities renewed.",
  ];

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed max-md:bg-scroll"
        style={{ backgroundImage: "url(/images/abode-2.jpg)" }}
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative max-w-[720px] mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="text-accent-gold text-xs font-semibold tracking-[0.4em] uppercase mb-6">
            Our Calling
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-14">
            Our Vision for India: Reaching the Beloved
          </h2>
        </ScrollReveal>

        {/* First two paragraphs — setup */}
        <div className="space-y-6 mb-12">
          {paragraphs.slice(0, 2).map((text, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <p className="text-white/50 text-base leading-[1.8]">{text}</p>
            </ScrollReveal>
          ))}
        </div>

        {/* Blockquote — the emotional climax, largest text weight in section */}
        <ScrollReveal delay={400}>
          <div className="my-14">
            <div className="w-16 h-px bg-accent-gold/50 mx-auto mb-10" />
            <blockquote className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl lg:text-4xl text-white italic leading-snug">
              &ldquo;These women are not invisible. They are Beloved.&rdquo;
            </blockquote>
            <div className="w-16 h-px bg-accent-gold/50 mx-auto mt-10" />
          </div>
        </ScrollReveal>

        {/* Final two paragraphs — the resolution */}
        <div className="space-y-6">
          {paragraphs.slice(2).map((text, i) => (
            <ScrollReveal key={i + 2} delay={600 + i * 150}>
              <p className="text-white/50 text-base leading-[1.8]">{text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
