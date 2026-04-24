import { Header } from "@/components/sections/Header";
import { GoatHero } from "@/components/sections/GoatHero";
import { GoatIntro } from "@/components/sections/GoatIntro";
import { GoatWhySection } from "@/components/sections/GoatWhySection";
import { GoatProgramSection } from "@/components/sections/GoatProgramSection";
import { GoatSeedingSection } from "@/components/sections/GoatSeedingSection";
import { GoatAccountability } from "@/components/sections/GoatAccountability";
import { GoatBetaUpdate } from "@/components/sections/GoatBetaUpdate";
import { GoatFAQ } from "@/components/sections/GoatFAQ";
import { Footer } from "@/components/sections/Footer";

export default function TheGoats() {
  return (
    <>
      <Header />
      <main>
        <GoatHero />
        <GoatIntro />
        <GoatWhySection />
        <GoatProgramSection />
        <GoatSeedingSection />
        <GoatAccountability />
        <GoatBetaUpdate />
        <GoatFAQ />
      </main>
      <Footer />
    </>
  );
}
