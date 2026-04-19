import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { VideoSection } from "@/components/sections/VideoSection";
import { GetInvolvedCard } from "@/components/sections/GetInvolvedCard";
import { DonationProgress } from "@/components/sections/DonationProgress";
import { VisionSection } from "@/components/sections/VisionSection";
import { AbodeGallery } from "@/components/sections/AbodeGallery";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <VideoSection />

        <GetInvolvedCard
          image="/images/beholding-beloved.jpg"
          imageAlt="Beholding Beloved — Devadasi women ministry"
          title="Beholding Beloved"
          description="A journey of love & faith. New Mercy's vision for the 80,000 Devadasi women in Karnataka. Partner with us as we seek to help fund some of their most pressing needs."
          ctaText="Support"
          ctaLink="https://pushpay.com/g/newmercy"
          learnMoreLink="/beholding-beloved"
          variant="dark"
        />

        <GetInvolvedCard
          image="/images/goat-sponsorship.jpg"
          imageAlt="Goat Sponsorship — livelihood support"
          title="Goat Sponsorship"
          description="Seeding appreciating assets for additional income streams. Sponsoring goats to impact a family's future and provide sustainable livelihood opportunities."
          ctaText="Sponsor a Goat"
          ctaLink="https://pushpay.com/g/newmercy"
          reversed
          variant="light"
        />

        <DonationProgress />
        <VisionSection />
        <AbodeGallery />
      </main>
      <Footer />
    </>
  );
}
