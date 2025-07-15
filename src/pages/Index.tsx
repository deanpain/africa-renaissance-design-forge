import React from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { ImpactSection } from "@/components/ImpactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <Header />
      <HeroSection />
      <div className="w-full max-w-[1440px]">
        <MissionSection />
        <ImpactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
