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
import BookDemoModal from "@/components/BookDemoModal";
import PlaybookModal from "@/components/PlaybookModal";

const Index = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const [playbookOpen, setPlaybookOpen] = useState(false);

  const openDemo = () => setDemoOpen(true);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar onBookDemo={openDemo} />
      <HeroSection onBookDemo={openDemo} />
      <TrustedBy />
      <WhyBreehSection />
      <MissionSection />
      <HowItWorksSection />
      <DemosSection />
      <FAQSection />
      <CTASection onBookDemo={openDemo} />
      <Footer />
      <FloatingCallButton />
      <BookDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
      <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
    </div>
  );
};

export default Index;
