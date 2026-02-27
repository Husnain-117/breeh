import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlaybookModal from "@/components/PlaybookModal";
import { SITE_CONFIG } from "@/lib/config";

import SolutionsHero from "@/components/solutions/SolutionsHero";
import SolutionsNavigator from "@/components/solutions/SolutionsNavigator";
import UseCases from "@/components/solutions/UseCases";
import IndustrySolutions from "@/components/solutions/IndustrySolutions";
import RoleBasedSolutions from "@/components/solutions/RoleBasedSolutions";
import ImplementationTimeline from "@/components/solutions/ImplementationTimeline";
import ROICalculator from "@/components/solutions/ROICalculator";
import SuccessStories from "@/components/solutions/SuccessStories";
import SolutionsComparison from "@/components/solutions/SolutionsComparison";
import SolutionsFinalCTA from "@/components/solutions/SolutionsFinalCTA";

const Solutions = () => {
    const [playbookOpen, setPlaybookOpen] = useState(false);

    const openCalendly = () => {
        window.open(SITE_CONFIG.calendlyUrl, "_blank");
    };

    return (
        <div className="min-h-screen bg-background overflow-x-hidden font-body">
            <Navbar onBookDemo={openCalendly} onOpenPlaybook={() => setPlaybookOpen(true)} />

            {/* 1. Hero — Role-based selector */}
            <SolutionsHero />

            {/* 2. Navigator — Find your fit */}
            <SolutionsNavigator />

            {/* 3. Use Cases — Scenario stories */}
            <UseCases />

            {/* 4. Industry Solutions — Vertical expertise */}
            <IndustrySolutions />

            {/* 5. Role-Based Solutions — By job function */}
            <RoleBasedSolutions />

            {/* 6. Implementation — 5-day timeline */}
            <ImplementationTimeline />

            {/* 7. ROI Calculator — Build your case */}
            <ROICalculator />

            {/* 8. Success Stories — Proof points */}
            <SuccessStories />

            {/* 9. Solutions Comparison — Feature matrix */}
            <SolutionsComparison />

            {/* 10. Final CTA — Start your transformation */}
            <SolutionsFinalCTA />

            <Footer onOpenPlaybook={() => setPlaybookOpen(true)} onBookDemo={openCalendly} />
            <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
        </div>
    );
};

export default Solutions;
