import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/lib/config";
import PlaybookModal from "@/components/PlaybookModal";
import ProductHero from "@/components/product/ProductHero";
import ProblemSolution from "@/components/product/ProblemSolution";
import FeaturesGrid from "@/components/product/FeaturesGrid";
import InteractiveDemo from "@/components/product/InteractiveDemo";
import IntegrationsSection from "@/components/product/IntegrationsSection";
import SecuritySection from "@/components/product/SecuritySection";
import PricingSection from "@/components/product/PricingSection";
import TestimonialsSection from "@/components/product/TestimonialsSection";
import FAQSection from "@/components/product/FAQSection";
import FinalCTA from "@/components/product/FinalCTA";

const Product = () => {
    const [playbookOpen, setPlaybookOpen] = useState(false);

    const openCalendly = () => {
        window.open(SITE_CONFIG.calendlyUrl, "_blank");
    };

    return (
        <div className="min-h-screen bg-background overflow-x-hidden font-body">
            <Navbar onBookDemo={openCalendly} onOpenPlaybook={() => setPlaybookOpen(true)} />

            {/* 1. Hero — "The Aha Moment" */}
            <ProductHero onBookDemo={openCalendly} />

            {/* 2. Problem-Solution — "The Pain Point" */}
            <ProblemSolution />

            {/* 3. Features Grid — "Capability Showcase" */}
            <FeaturesGrid />

            {/* 4. Interactive Demo — "Try It Yourself" */}
            <InteractiveDemo />

            {/* 5. Integrations — "Works With Everything" */}
            <IntegrationsSection />

            {/* 6. Security & Compliance — "Trust Vault" */}
            <SecuritySection />

            {/* 7. Pricing — "Clear Value" */}
            <PricingSection />

            {/* 8. Testimonials — "Real Results" */}
            <TestimonialsSection />

            {/* 9. FAQ — "Objection Handling" */}
            <FAQSection />

            {/* 10. Final CTA — "The Conversion" */}
            <FinalCTA />

            <Footer onOpenPlaybook={() => setPlaybookOpen(true)} onBookDemo={openCalendly} />
            <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
        </div>
    );
};

export default Product;
