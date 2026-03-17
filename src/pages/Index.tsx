import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PhilosophySection from "@/components/PhilosophySection";
import ProcessSection from "@/components/ProcessSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ServicesSection from "@/components/ServicesSection";
import SoftwareSection from "@/components/SoftwareSection";
import StartupCTA from "@/components/StartupCTA";
import AISection from "@/components/AISection";
import ManufacturingSection from "@/components/ManufacturingSection";
import IndustriesSection from "@/components/IndustriesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      </AnimatePresence>

      <div className={`scroll-smooth ${loading ? "overflow-hidden h-screen" : ""}`}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <ProcessSection />
        <CapabilitiesSection />
        <ServicesSection />
        <SoftwareSection />
        <StartupCTA />
        <AISection />
        <ManufacturingSection />
        <IndustriesSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
