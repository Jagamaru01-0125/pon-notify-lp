import { AnimalSection } from "@/components/AnimalSection";
import { GestureCards } from "@/components/GestureCards";
import { Hero } from "@/components/Hero";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { MotionSection } from "@/components/MotionSection";
import { ReasonSection } from "@/components/ReasonSection";
import { SafetySection } from "@/components/SafetySection";
import { SendSourcesSection } from "@/components/SendSourcesSection";
import { SignupSection } from "@/components/SignupSection";

export default function Home() {
  return (
    <main className="pb-20 sm:pb-0">
      <Hero />
      <HowItWorksSection />
      <SendSourcesSection />
      <GestureCards />
      <MotionSection />
      <AnimalSection />
      <ReasonSection />
      <SafetySection />
      <SignupSection />
      <MobileStickyCta />
    </main>
  );
}
