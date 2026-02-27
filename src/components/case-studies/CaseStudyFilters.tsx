import { motion } from "framer-motion";
import { Search, LayoutGrid, List } from "lucide-react";
import { useState } from "react";

interface CaseStudyFiltersProps {
    categories: string[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
    viewMode: "grid" | "list";
    onViewModeChange: (mode: "grid" | "list") => void;
}

const CaseStudyFilters = ({
    categories,
    activeCategory,
    onCategoryChange,
    searchQuery,
    onSearchChange,
    viewMode,
    onViewModeChange,
}: CaseStudyFiltersProps) => {
    return (
        <div className="sticky top-20 z-30 bg-background/95 backdrop-blur-xl border-y border-border py-4">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Category Pills */}
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => onCategoryChange(cat)}
                                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${activeCategory === cat
                                        ? "text-primary-foreground"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                    }`}
                            >
                                {activeCategory === cat && (
                                    <motion.div
                                        layoutId="activeFilter"
                                        className="absolute inset-0 bg-primary rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        {/* Search Input */}
                        <div className="relative flex-1 md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search stories..."
                                value={searchQuery}
                                onChange={(e) => onSearchChange(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                        </div>

                        {/* View Toggle */}
                        <div className="flex items-center bg-muted p-1 rounded-xl border border-border">
                            <button
                                onClick={() => onViewModeChange("grid")}
                                className={`p-1.5 rounded-lg transition-all ${viewMode === "grid" ? "bg-white shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                <LayoutGrid className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => onViewModeChange("list")}
                                className={`p-1.5 rounded-lg transition-all ${viewMode === "list" ? "bg-white shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                <List className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyFilters;
