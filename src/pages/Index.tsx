import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WhyBreehSection from "@/components/WhyBreehSection";
import SecuritySection from "@/components/SecuritySection";
import DemosSection from "@/components/DemosSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <CaseStudiesSection />
      <WhyBreehSection />
      <SecuritySection />
      <DemosSection />
      <CTASection />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
