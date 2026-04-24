import Image from "next/image";

export function GoatSeedingSection() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/the-goats/seeding-bg.jpg"
          alt="Seeding families with appreciating income producing assets"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6 py-24 text-center">
        <p className="text-accent-gold text-xs font-semibold tracking-[0.4em] uppercase mb-6">
          Our Vision
        </p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-8">
          Seeding families with appreciating income producing assets
        </h2>
        <div className="w-12 h-px bg-accent-gold/60 mx-auto" />
      </div>
    </section>
  );
}
