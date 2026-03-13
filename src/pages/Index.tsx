import { useState } from "react";
import SEOHead, { organizationJsonLd, websiteJsonLd, softwareJsonLd } from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import WhyBreehSection from "@/components/WhyBreehSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import MissionSection from "@/components/MissionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DemosSection from "@/components/DemosSection";
import SecuritySection from "@/components/SecuritySection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FAQSection from "@/components/FAQSection";
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
      <SEOHead
        title="Breeh AI — #1 AI Receptionist for Dental Practices | 24/7 Call Answering"
        description="Breeh AI answers every patient call, schedules appointments, and manages follow-ups 24/7. HIPAA compliant AI receptionist built for dental practices. Start your free trial."
        canonical="/"
        jsonLd={[organizationJsonLd, websiteJsonLd, softwareJsonLd]}
      />
      <Navbar onBookDemo={openCalendly} onOpenPlaybook={() => setPlaybookOpen(true)} />
      <HeroSection onBookDemo={openCalendly} />
      <TrustedBy />
      <WhyBreehSection />
      <DifferentiatorSection />
      <MissionSection />
      <HowItWorksSection onBookDemo={openCalendly} />
      <DemosSection />
      <SecuritySection />
      <CaseStudiesSection />
      <FAQSection />
      <Footer onOpenPlaybook={() => setPlaybookOpen(true)} onBookDemo={openCalendly} />
      <FloatingCallButton />
      <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
    </div>
  );
};

export default Index;
