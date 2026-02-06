import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import MissionSection from "@/components/MissionSection";
import ProblemsSection from "@/components/ProblemsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
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
      <MissionSection />
      <ProblemsSection />
      <HowItWorksSection />
      <div id="faq">
        <FAQSection />
      </div>
      <CTASection />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
