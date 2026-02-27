import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlaybookModal from "@/components/PlaybookModal";
import BlogCard from "@/components/BlogCard";
import BlogSearch from "@/components/BlogSearch";
import { SITE_CONFIG } from "@/lib/config";
import {
  featuredArticle,
  articles,
  categories,
  getAllArticles,
} from "@/lib/articles";
import { Clock, X, ArrowRight, Search } from "lucide-react";

/* ── Skeleton card ── */
const SkeletonCard = () => (
  <div className="bg-card rounded-xl overflow-hidden border border-border/50 animate-pulse">
    <div className="aspect-[16/10] bg-muted" />
    <div className="p-6 space-y-3">
      <div className="h-4 bg-muted rounded w-3/4" />
      <div className="h-4 bg-muted rounded w-1/2" />
      <div className="h-3 bg-muted rounded w-full" />
      <div className="h-3 bg-muted rounded w-2/3" />
      <div className="flex justify-between mt-4">
        <div className="h-3 bg-muted rounded w-20" />
        <div className="h-3 bg-muted rounded w-16" />
      </div>
    </div>
  </div>
);

const Blog = () => {
  const [playbookOpen, setPlaybookOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const openCalendly = () => {
    window.open(SITE_CONFIG.calendlyUrl, "_blank");
  };

  // Cmd+K listener to open search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Newsletter scroll trigger (show after 30% scroll)
  useEffect(() => {
    const handler = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0 && scrolled / total > 0.3) {
        setShowNewsletter(true);
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Simulate loading on category change
  const handleCategoryChange = (cat: string) => {
    if (cat === activeCategory) return;
    setIsLoading(true);
    setActiveCategory(cat);
    setTimeout(() => setIsLoading(false), 300);
  };

  const filteredArticles = useMemo(() => {
    let filtered = articles;
    if (activeCategory !== "All") {
      filtered = filtered.filter((a) => a.category === activeCategory);
    }
    return filtered;
  }, [activeCategory]);

  // Trending = first 4
  const trending = articles.slice(0, 4);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.includes("@")) {
      setNewsletterSuccess(true);
      setTimeout(() => setShowNewsletter(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar
        onBookDemo={openCalendly}
        onOpenPlaybook={() => setPlaybookOpen(true)}
      />

      {/* Search Modal */}
      <BlogSearch open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* ═══════════════════════════════════════
          HEADER
         ═══════════════════════════════════════ */}
      <section className="pt-28 pb-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4"
          >
            The Breeh AI Blog
          </motion.p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="font-display font-bold text-4xl md:text-5xl text-foreground max-w-3xl leading-tight mb-4"
              >
                Insights for modern
                <br />
                <span className="gradient-text">dental practices</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-muted-foreground max-w-2xl"
              >
                Expert perspectives on AI, patient experience, and practice
                growth.
              </motion.p>
            </div>

            {/* Search trigger */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground transition-all group w-full lg:w-72 shrink-0"
            >
              <Search className="w-4 h-4" />
              <span className="text-sm flex-1 text-left">Search articles...</span>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 rounded border border-border text-[10px] font-mono bg-muted group-hover:border-primary/30 transition-colors">
                ⌘K
              </kbd>
            </motion.button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CATEGORY FILTER
         ═══════════════════════════════════════ */}
      <div className="sticky top-20 z-30 bg-background/80 backdrop-blur-xl border-y border-border py-3">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav
            className="relative flex gap-1.5 overflow-x-auto no-scrollbar snap-x snap-mandatory"
            aria-label="Article categories"
          >
            {/* Left fade mask */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background/80 to-transparent pointer-events-none z-10 hidden md:block" />

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                data-active={activeCategory === cat}
                className="relative whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 snap-center"
              >
                {activeCategory === cat && (
                  <motion.span
                    layoutId="activeCategoryPill"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                    className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/25"
                  />
                )}
                <span
                  className={`relative z-10 ${activeCategory === cat
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {cat}
                </span>
              </button>
            ))}

            {/* Right fade mask */}
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background/80 to-transparent pointer-events-none z-10 hidden md:block" />
          </nav>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          HERO — Featured + Trending
         ═══════════════════════════════════════ */}
      {activeCategory === "All" && (
        <section className="py-12 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured Article — 8 cols */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8"
            >
              <Link
                to={`/resources/${featuredArticle.slug}`}
                className="group block relative aspect-[16/9] overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={featuredArticle.coverImage}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    {featuredArticle.category}
                  </span>
                  <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-4 group-hover:underline decoration-2 underline-offset-4 leading-snug max-w-2xl">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-white/70 hidden md:block max-w-xl text-sm mb-4 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-xs font-bold">
                        {featuredArticle.author.name.charAt(0)}
                      </div>
                      <span className="font-medium">
                        {featuredArticle.author.name}
                      </span>
                    </div>
                    <span className="w-1 h-1 rounded-full bg-white/50" />
                    <span>{featuredArticle.date}</span>
                    <span className="w-1 h-1 rounded-full bg-white/50" />
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Trending Sidebar — 4 cols */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-4 flex flex-col"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-6">
                Trending Now
              </h3>
              <div className="flex flex-col gap-0 divide-y divide-border">
                {trending.map((article, i) => (
                  <Link
                    key={article.slug}
                    to={`/resources/${article.slug}`}
                    className="flex gap-4 py-5 first:pt-0 group cursor-pointer"
                  >
                    <span className="text-3xl font-bold text-muted-foreground/15 group-hover:text-primary/30 transition-colors duration-300 shrink-0 leading-none tracking-tight font-display">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2 mb-1">
                        {article.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{article.category}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════
          ARTICLE GRID
         ═══════════════════════════════════════ */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <SkeletonCard key={i} />
                ))}
              </motion.div>
            ) : filteredArticles.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <p className="text-muted-foreground text-lg">
                  No articles found for "{activeCategory}".
                </p>
                <button
                  onClick={() => handleCategoryChange("All")}
                  className="text-primary font-medium mt-4 hover:underline"
                >
                  View all articles
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredArticles.map((article, i) => (
                  <BlogCard key={article.slug} article={article} index={i} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          NEWSLETTER BANNER — scroll triggered
         ═══════════════════════════════════════ */}
      <AnimatePresence>
        {showNewsletter && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-xl border-t border-primary/10 p-4 md:p-5 z-40 shadow-2xl shadow-primary/5"
            style={{
              borderImage:
                "linear-gradient(to right, transparent, hsl(244 58% 52% / 0.3), transparent) 1",
            }}
          >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              {newsletterSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 text-green-600"
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-semibold text-sm">
                    You're in! Check your inbox.
                  </span>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-center gap-3 text-center sm:text-left">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-display font-bold text-foreground text-sm">
                        Get weekly dental AI insights
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Join 2,000+ practice owners · No spam, unsubscribe anytime
                      </p>
                    </div>
                  </div>

                  <form
                    onSubmit={handleNewsletterSubmit}
                    className="flex gap-2 w-full sm:w-auto"
                  >
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="flex-1 sm:min-w-[280px] px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    />
                    <button
                      type="submit"
                      className="bg-primary text-white rounded-lg px-5 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap flex items-center gap-2"
                    >
                      Subscribe
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </>
              )}

              <button
                onClick={() => setShowNewsletter(false)}
                className="absolute top-2 right-2 sm:relative sm:top-auto sm:right-auto text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="Close newsletter banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer
        onOpenPlaybook={() => setPlaybookOpen(true)}
        onBookDemo={openCalendly}
      />
      <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
    </div>
  );
};

export default Blog;
