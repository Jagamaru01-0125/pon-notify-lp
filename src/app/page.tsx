"use client";
import { useEffect, useState } from "react";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { GestureCards } from "@/components/GestureCards";
import { SendSourcesSection } from "@/components/SendSourcesSection";
import { ReasonSection } from "@/components/ReasonSection";
import { AnimalSection } from "@/components/AnimalSection";
import { SafetySection } from "@/components/SafetySection";
import { SignupSection } from "@/components/SignupSection";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/Modal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.10, rootMargin: "0px 0px -6% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Header onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <HowItWorksSection />
        <GestureCards />
        <SendSourcesSection />
        <ReasonSection />
        <AnimalSection />
        <SafetySection />
        <SignupSection onOpenModal={openModal} />
      </main>
      <Footer />
      <Modal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
