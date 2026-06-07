import { AnimalSection } from "@/components/AnimalSection";
import { GestureCards } from "@/components/GestureCards";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ReasonSection } from "@/components/ReasonSection";
import { SafetySection } from "@/components/SafetySection";
import { SignupSection } from "@/components/SignupSection";
import { SolutionSection } from "@/components/SolutionSection";
import { UseCaseSection } from "@/components/UseCaseSection";
import { ValidationSection } from "@/components/ValidationSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <GestureCards />
      <AnimalSection />
      <UseCaseSection />
      <ReasonSection />
      <SafetySection />
      <ValidationSection />
      <SignupSection />
    </main>
  );
}
