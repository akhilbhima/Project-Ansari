import { Header } from "@/components/sections/Header";
import { BBHero } from "@/components/sections/BBHero";
import { BBIntro } from "@/components/sections/BBIntro";
import { BBSuccessStory } from "@/components/sections/BBSuccessStory";
import { BBProfiles } from "@/components/sections/BBProfiles";
import { Footer } from "@/components/sections/Footer";

export default function BeholdingBeloved() {
  return (
    <>
      <Header />
      <main className="bb-page">
        <BBHero />
        <BBIntro />
        <BBSuccessStory />
        <BBProfiles />
      </main>
      <Footer />
    </>
  );
}
