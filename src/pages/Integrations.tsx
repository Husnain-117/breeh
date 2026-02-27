import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlaybookModal from "@/components/PlaybookModal";
import { SITE_CONFIG } from "@/lib/config";

import IntegrationsHero from "@/components/integrations/IntegrationsHero";
import IntegrationDirectory from "@/components/integrations/IntegrationDirectory";
import IntegrationCategories from "@/components/integrations/IntegrationCategories";
import BuildYourStack from "@/components/integrations/BuildYourStack";
import APISection from "@/components/integrations/APISection";
import IntegrationStories from "@/components/integrations/IntegrationStories";
import SetupResources from "@/components/integrations/SetupResources";
import IntegrationRoadmap from "@/components/integrations/IntegrationRoadmap";
import IntegrationsFinalCTA from "@/components/integrations/IntegrationsFinalCTA";

const Integrations = () => {
    const [playbookOpen, setPlaybookOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const openCalendly = () => {
        window.open(SITE_CONFIG.calendlyUrl, "_blank");
    };

    // Handle Cmd+K global listener (optional but requested in prompt hint)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                const input = document.querySelector('input[placeholder*="Search integrations"]') as HTMLInputElement;
                input?.focus();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="min-h-screen bg-background overflow-x-hidden font-body text-foreground">
            <Navbar onBookDemo={openCalendly} onOpenPlaybook={() => setPlaybookOpen(true)} />

            {/* 1. HERO — Search, Pills, Spotlight */}
            <IntegrationsHero
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />

            {/* 2. DIRECTORY — Grid with filtering */}
            <IntegrationDirectory
                category={activeCategory}
                searchQuery={searchQuery}
            />

            {/* 3. CATEGORIES — Browse by Need */}
            <IntegrationCategories onCategoryChange={setActiveCategory} />

            {/* 4. BUILD YOUR STACK — Interactive tool */}
            <BuildYourStack />

            {/* 5. API & CUSTOM — For Developers */}
            <APISection />

            {/* 6. SUCCESS STORIES — Real Connections */}
            <IntegrationStories />

            {/* 7. SETUP RESOURCES — Get Connected Fast */}
            <SetupResources />

            {/* 8. ROADMAP — Coming Soon */}
            <IntegrationRoadmap />

            {/* 9. FINAL CTA — Start Connecting */}
            <IntegrationsFinalCTA />

            <Footer onOpenPlaybook={() => setPlaybookOpen(true)} onBookDemo={openCalendly} />
            <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
        </div>
    );
};

export default Integrations;
