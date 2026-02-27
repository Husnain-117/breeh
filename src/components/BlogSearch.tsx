import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, Hash, Clock, X, ArrowRight } from "lucide-react";
import { getAllArticles, categories, type Article } from "@/lib/articles";

interface BlogSearchProps {
    open: boolean;
    onClose: () => void;
}

const BlogSearch = ({ open, onClose }: BlogSearchProps) => {
    const [query, setQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const allArticles = getAllArticles();

    // Filter results
    const articleResults = query.trim()
        ? allArticles.filter(
            (a) =>
                a.title.toLowerCase().includes(query.toLowerCase()) ||
                a.excerpt.toLowerCase().includes(query.toLowerCase()) ||
                a.category.toLowerCase().includes(query.toLowerCase())
        )
        : [];

    const categoryResults = query.trim()
        ? categories.filter(
            (c) => c !== "All" && c.toLowerCase().includes(query.toLowerCase())
        )
        : [];

    const recentArticles = query.trim() ? [] : allArticles.slice(0, 3);

    const totalResults =
        articleResults.length +
        categoryResults.length +
        recentArticles.length;

    // Focus input on open
    useEffect(() => {
        if (open) {
            setQuery("");
            setSelectedIndex(0);
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [open]);

    // Keyboard nav
    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelectedIndex((prev) => Math.min(prev + 1, totalResults - 1));
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelectedIndex((prev) => Math.max(prev - 1, 0));
            } else if (e.key === "Enter") {
                e.preventDefault();
                // Navigate to selected result
                let idx = selectedIndex;
                if (recentArticles.length > 0) {
                    if (idx < recentArticles.length) {
                        navigate(`/resources/${recentArticles[idx].slug}`);
                        onClose();
                        return;
                    }
                    idx -= recentArticles.length;
                }
                if (idx < articleResults.length) {
                    navigate(`/resources/${articleResults[idx].slug}`);
                    onClose();
                    return;
                }
                idx -= articleResults.length;
                if (idx < categoryResults.length) {
                    // Navigate to blog with filter — for now just close
                    onClose();
                }
            } else if (e.key === "Escape") {
                onClose();
            }
        },
        [selectedIndex, totalResults, articleResults, categoryResults, recentArticles, navigate, onClose]
    );

    // Global Cmd+K / Ctrl+K listener
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                if (open) onClose();
                // parent handles open
            }
            if (e.key === "Escape" && open) {
                onClose();
            }
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [open, onClose]);

    let runningIndex = 0;

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        className="fixed inset-x-4 top-24 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl z-50 bg-card rounded-xl shadow-2xl border border-border overflow-hidden"
                        role="dialog"
                        aria-label="Search articles"
                    >
                        {/* Input */}
                        <div className="flex items-center gap-3 px-5 border-b border-border">
                            <Search className="w-5 h-5 text-muted-foreground shrink-0" />
                            <input
                                ref={inputRef}
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    setSelectedIndex(0);
                                }}
                                onKeyDown={handleKeyDown}
                                placeholder="Search articles, categories..."
                                className="flex-1 bg-transparent py-4 text-base focus:outline-none placeholder:text-muted-foreground"
                            />
                            <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded border border-border text-[10px] text-muted-foreground font-mono bg-muted">
                                ESC
                            </kbd>
                        </div>

                        {/* Results */}
                        <div className="max-h-[60vh] overflow-y-auto">
                            {/* Recent (when no query) */}
                            {recentArticles.length > 0 && (
                                <div className="py-2">
                                    <h3 className="px-5 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                        Recent
                                    </h3>
                                    {recentArticles.map((article, i) => {
                                        const idx = runningIndex++;
                                        return (
                                            <button
                                                key={article.slug}
                                                onClick={() => {
                                                    navigate(`/resources/${article.slug}`);
                                                    onClose();
                                                }}
                                                className={`w-full flex items-center gap-4 px-5 py-3 text-left transition-all ${selectedIndex === idx
                                                        ? "bg-primary/5 border-l-2 border-primary pl-[18px]"
                                                        : "hover:bg-muted"
                                                    }`}
                                            >
                                                <Clock className="w-4 h-4 text-muted-foreground shrink-0" />
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-medium text-sm text-foreground truncate">
                                                        {article.title}
                                                    </p>
                                                    <p className="text-xs text-muted-foreground">
                                                        {article.readTime}
                                                    </p>
                                                </div>
                                                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100" />
                                            </button>
                                        );
                                    })}
                                </div>
                            )}

                            {/* Articles */}
                            {articleResults.length > 0 && (
                                <div className="py-2">
                                    <h3 className="px-5 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                        Articles
                                    </h3>
                                    {articleResults.map((article) => {
                                        const idx = runningIndex++;
                                        return (
                                            <button
                                                key={article.slug}
                                                onClick={() => {
                                                    navigate(`/resources/${article.slug}`);
                                                    onClose();
                                                }}
                                                className={`w-full flex items-center gap-4 px-5 py-3 text-left transition-all ${selectedIndex === idx
                                                        ? "bg-primary/5 border-l-2 border-primary pl-[18px]"
                                                        : "hover:bg-muted"
                                                    }`}
                                            >
                                                <FileText className="w-4 h-4 text-muted-foreground shrink-0" />
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-medium text-sm text-foreground truncate">
                                                        {article.title}
                                                    </p>
                                                    <p className="text-xs text-muted-foreground">
                                                        {article.category} · {article.readTime}
                                                    </p>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            )}

                            {/* Categories */}
                            {categoryResults.length > 0 && (
                                <div className="py-2">
                                    <h3 className="px-5 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                        Categories
                                    </h3>
                                    {categoryResults.map((cat) => {
                                        const idx = runningIndex++;
                                        return (
                                            <button
                                                key={cat}
                                                onClick={onClose}
                                                className={`w-full flex items-center gap-4 px-5 py-3 text-left transition-all ${selectedIndex === idx
                                                        ? "bg-primary/5 border-l-2 border-primary pl-[18px]"
                                                        : "hover:bg-muted"
                                                    }`}
                                            >
                                                <Hash className="w-4 h-4 text-muted-foreground shrink-0" />
                                                <p className="font-medium text-sm text-foreground">
                                                    {cat}
                                                </p>
                                            </button>
                                        );
                                    })}
                                </div>
                            )}

                            {/* Empty query, no recent (shouldn't happen) */}
                            {query.trim() &&
                                articleResults.length === 0 &&
                                categoryResults.length === 0 && (
                                    <div className="py-16 text-center">
                                        <Search className="w-10 h-10 text-muted-foreground/30 mx-auto mb-4" />
                                        <p className="text-muted-foreground text-sm">
                                            No results found for "{query}"
                                        </p>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            Try different keywords
                                        </p>
                                    </div>
                                )}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center gap-4 px-5 py-3 border-t border-border text-[10px] text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <kbd className="px-1 py-0.5 rounded border border-border bg-muted font-mono">↑</kbd>
                                <kbd className="px-1 py-0.5 rounded border border-border bg-muted font-mono">↓</kbd>
                                Navigate
                            </span>
                            <span className="flex items-center gap-1">
                                <kbd className="px-1.5 py-0.5 rounded border border-border bg-muted font-mono">↵</kbd>
                                Open
                            </span>
                            <span className="flex items-center gap-1">
                                <kbd className="px-1.5 py-0.5 rounded border border-border bg-muted font-mono">Esc</kbd>
                                Close
                            </span>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default BlogSearch;
