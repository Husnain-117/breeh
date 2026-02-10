import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import WhyBreehSection from "@/components/WhyBreehSection";
import MissionSection from "@/components/MissionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DemosSection from "@/components/DemosSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import PlaybookModal from "@/components/PlaybookModal";
import { SITE_CONFIG } from "@/lib/config";

const Index = () => {
  const [playbookOpen, setPlaybookOpen] = useState(false);

  const openCalendly = () => {
    window.open(SITE_CONFIG.calendlyUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar onBookDemo={openCalendly} onOpenPlaybook={() => setPlaybookOpen(true)} />
      <HeroSection onBookDemo={openCalendly} />
      <TrustedBy />
      <WhyBreehSection />
      <MissionSection />
      <HowItWorksSection onBookDemo={openCalendly} />
      <DemosSection />
      <FAQSection />
      <CTASection onBookDemo={openCalendly} />
      <Footer onOpenPlaybook={() => setPlaybookOpen(true)} onBookDemo={openCalendly} />
      <FloatingCallButton />
      <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
    </div>
  );
};

export default Index;
