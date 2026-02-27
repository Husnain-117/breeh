import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlaybookModal from "@/components/PlaybookModal";
import { SITE_CONFIG } from "@/lib/config";
import { caseStudies } from "@/data/caseStudies";

import CaseStudyHero from "@/components/case-studies/CaseStudyHero";
import AggregateMetrics from "@/components/case-studies/AggregateMetrics";
import CaseStudyFilters from "@/components/case-studies/CaseStudyFilters";
import StoryGrid from "@/components/case-studies/StoryGrid";
import CaseStudyFinalCTA from "@/components/case-studies/CaseStudyFinalCTA";

const categories = ["All", "Single Location", "Multi-Location", "DSO", "Dental", "Specialty"];

const CaseStudies = () => {
    const [playbookOpen, setPlaybookOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    const openCalendly = () => window.open(SITE_CONFIG.calendlyUrl, "_blank");

    // Transform case studies data for the grid
    const stories = useMemo(() => {
        return caseStudies.map((cs, i) => ({
            slug: cs.slug,
            title: cs.title,
            category: cs.slug.includes("multi") ? "Multi-Location" : cs.slug.includes("pediatric") ? "Single Location" : "Dental",
            excerpt: cs.sections[0]?.content || "",
            image: [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
                "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
                "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80",
                "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
            ][i % 4],
            date: cs.date,
            readTime: cs.readTime,
            stats: cs.metricsCards.slice(0, 2).map(m => `↑ ${m.value} ${m.label}`),
            author: {
                name: cs.quote.author,
                role: cs.quote.role,
                avatar: `https://i.pravatar.cc/150?u=${cs.slug}`
            },
            size: i === 0 ? "large" : i === 1 ? "medium" : "standard" as "large" | "medium" | "standard"
        }));
    }, []);

    const filteredStories = useMemo(() => {
        return stories.filter(s => {
            const matchesCategory = activeCategory === "All" || s.category === activeCategory;
            const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                s.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [stories, activeCategory, searchQuery]);

    return (
        <div className="min-h-screen bg-background overflow-x-hidden font-body text-foreground">
            <Navbar
                onBookDemo={openCalendly}
                onOpenPlaybook={() => setPlaybookOpen(true)}
            />

            {/* Cinematic Hero */}
            <CaseStudyHero />

            {/* Summary Metrics */}
            <AggregateMetrics />

            {/* Filters */}
            <CaseStudyFilters
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
            />

            {/* Main Editorial Grid */}
            <StoryGrid stories={filteredStories} />

            {/* Newsletter / Final CTA */}
            <CaseStudyFinalCTA />

            <Footer
                onOpenPlaybook={() => setPlaybookOpen(true)}
                onBookDemo={openCalendly}
            />
            <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
        </div>
    );
};

export default CaseStudies;
