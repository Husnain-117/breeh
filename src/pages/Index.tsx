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

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <WhyBreehSection />
      <MissionSection />
      <HowItWorksSection />
      <DemosSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
