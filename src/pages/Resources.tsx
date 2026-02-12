import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlaybookModal from "@/components/PlaybookModal";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/config";
import {
  ArrowRight, Calendar, Clock, FileText, BookOpen,
  Mail, ChevronRight
} from "lucide-react";

type Category = "all" | "case-study" | "blog";

const featuredArticle = {
  category: "Case Study" as const,
  title: "Zen Dentistry: 17× ROI After Failed AI Vendors — DSO Case Study",
  excerpt:
    "Zen Dentistry tried 2 AI vendors that failed. Breeh AI delivered 16-23 new patients monthly per location, 17× ROI across 24 locations. \"110% recommend.\"",
  date: "Jan 10",
  readTime: "11 min read",
};

const articles = [
  {
    type: "blog" as const,
    title: "Dentisoft Integration With AI Receptionist",
    excerpt:
      "Integrate Dentisoft Office Cloud with an AI dental receptionist to capture missed calls, engage after-hours patients, and automate scheduling.",
    date: "Feb 5",
    readTime: "9 min read",
  },
  {
    type: "blog" as const,
    title: "iDentalSoft Integration With AI Receptionist",
    excerpt:
      "Integrate iDentalSoft with an AI dental receptionist to capture missed calls, engage after-hours patients, and streamline operations.",
    date: "Feb 5",
    readTime: "9 min read",
  },
  {
    type: "blog" as const,
    title: "MacPractice Integration With AI Receptionist",
    excerpt:
      "Learn how MacPractice integrates with AI receptionist technology to capture missed calls, automate patient communication, and boost revenue.",
    date: "Feb 5",
    readTime: "9 min read",
  },
  {
    type: "case-study" as const,
    title: "Allied OMS: How a Multi-Location Practice Scaled With AI",
    excerpt:
      "Allied OMS deployed Breeh AI across 8 locations and saw a 40% increase in new patient bookings within the first quarter.",
    date: "Jan 22",
    readTime: "8 min read",
  },
  {
    type: "blog" as const,
    title: "tab32 Integration With AI Receptionist",
    excerpt:
      "Learn how tab32 integration with AI receptionists helps dental practices capture missed calls, automate scheduling, and improve patient retention.",
    date: "Feb 5",
    readTime: "9 min read",
  },
  {
    type: "case-study" as const,
    title: "Danville Pediatric Dentistry: Weekend Call Recovery Success",
    excerpt:
      "With Breeh AI handling weekend and after-hours calls, Danville Pediatric Dentistry recovered 23 new patients in the first month alone.",
    date: "Jan 15",
    readTime: "7 min read",
  },
  {
    type: "blog" as const,
    title: "ACE Dental Integration With AI Receptionist",
    excerpt:
      "Discover how ACE Dental integration with AI receptionists helps practices capture missed calls, automate workflows, and grow revenue.",
    date: "Feb 5",
    readTime: "9 min read",
  },
  {
    type: "blog" as const,
    title: "ABELDent Integration With AI Receptionist",
    excerpt:
      "Learn how ABELDent integration with AI receptionists helps dental practices capture missed calls, automate patient outreach, and increase bookings.",
    date: "Feb 5",
    readTime: "9 min read",
  },
  {
    type: "case-study" as const,
    title: "TManagement Group: Centralized AI for 12 Locations",
    excerpt:
      "TManagement Group standardized patient communication across 12 locations, reducing missed calls by 78% and saving 120+ staff hours per month.",
    date: "Dec 18",
    readTime: "10 min read",
  },
];

const Resources = () => {
  const [playbookOpen, setPlaybookOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const openCalendly = () => {
    window.open(SITE_CONFIG.calendlyUrl, "_blank");
  };

  const filteredArticles =
    activeFilter === "all"
      ? articles
      : articles.filter((a) => a.type === activeFilter);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-body">
      <Navbar
        onBookDemo={openCalendly}
        onOpenPlaybook={() => setPlaybookOpen(true)}
      />

      {/* ── Hero ── */}
      <section className="pt-32 pb-16 px-6 lg:px-8 section-lavender">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            {...fadeInUp}
            className="font-display font-bold text-5xl md:text-7xl text-foreground mb-6 leading-tight"
          >
            Resources & <br />
            Knowledge Hub
          </motion.h1>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            Case studies, integration guides, and expert insights to help you
            get the most out of your AI dental receptionist.
          </motion.p>
        </div>
      </section>

      {/* ── Featured Article ── */}
      <section className="px-6 lg:px-8 pb-20 section-lavender">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border bg-card shadow-sm"
          >
            {/* Image placeholder */}
            <div className="bg-secondary flex items-center justify-center min-h-[280px] md:min-h-[360px]">
              <div className="text-center p-8">
                <FileText className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                <p className="text-muted-foreground text-sm">Featured Image</p>
              </div>
            </div>
            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-block self-start px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                {featuredArticle.category}
              </span>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4 leading-snug">
                {featuredArticle.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {featuredArticle.date}
                </span>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {featuredArticle.readTime}
                </span>
              </div>
              <button className="self-start btn-primary flex items-center gap-2 text-sm px-6 py-3">
                Read Article <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── All Posts ── */}
      <section className="py-20 px-6 lg:px-8 section-alt">
        <div className="max-w-6xl mx-auto">
          {/* Header + Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <h2 className="font-display font-bold text-3xl text-foreground">
              All Posts
            </h2>
            <div className="flex gap-2">
              {(
                [
                  { key: "all", label: "All" },
                  { key: "case-study", label: "Case Studies" },
                  { key: "blog", label: "Blog" },
                ] as const
              ).map((f) => (
                <button
                  key={f.key}
                  onClick={() => {
                    setActiveFilter(f.key);
                    setVisibleCount(6);
                  }}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                    activeFilter === f.key
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-foreground border-border hover:border-primary/40"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(0, visibleCount).map((article, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="group bg-card rounded-3xl border border-border overflow-hidden hover:border-primary/30 hover:-translate-y-1 transition-all shadow-sm"
              >
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-secondary flex items-center justify-center relative overflow-hidden">
                  <BookOpen className="w-12 h-12 text-primary/20" />
                  {/* Decorative corner accent */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/10" />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-primary/5" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-secondary text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                    {article.type === "case-study"
                      ? "Case Study"
                      : "Blog Article"}
                  </span>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {article.date}
                    </span>
                    <span>|</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load more */}
          {visibleCount < filteredArticles.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleCount((c) => c + 6)}
                className="px-8 py-3 rounded-full border border-border text-sm font-semibold text-foreground hover:border-primary/40 hover:bg-card transition-all"
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-20 px-6 lg:px-8 section-lavender">
        <div className="max-w-3xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="bg-card rounded-3xl p-10 md:p-16 text-center border border-border shadow-sm"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <h2 className="font-display font-bold text-3xl text-foreground mb-3">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8 text-sm">
              Stay updated on AI dental receptionist insights, success stories,
              and product updates.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="example@email.com"
                className="flex-1 bg-background border border-border rounded-full px-6 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none text-foreground"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground font-semibold rounded-full px-8 py-3 text-sm hover:bg-primary/90 transition-colors"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 px-6 lg:px-8 section-alt">
        <div className="max-w-5xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="bg-foreground rounded-3xl p-10 md:p-16 overflow-hidden relative shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-xs font-bold uppercase tracking-wider mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Ready to Get Started
                </span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4 leading-tight">
                  Have Questions? <br /> We're Here to Help
                </h2>
                <p className="text-primary-foreground/60 mb-8">
                  Connect with our team for personalized guidance
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() =>
                      (window.location.href = "mailto:hello@breehai.com")
                    }
                    className="bg-primary text-primary-foreground font-semibold rounded-full px-8 py-3 text-sm hover:bg-primary/90 transition-colors"
                  >
                    Contact Our Experts
                  </button>
                  <button
                    onClick={openCalendly}
                    className="border border-primary-foreground/30 text-primary-foreground font-semibold rounded-full px-8 py-3 text-sm hover:bg-primary-foreground/10 transition-colors"
                  >
                    Schedule Demo
                  </button>
                </div>
                <p className="text-primary-foreground/40 text-xs mt-4">
                  No setup fees, cancel anytime.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer
        onOpenPlaybook={() => setPlaybookOpen(true)}
        onBookDemo={openCalendly}
      />
      <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
    </div>
  );
};

export default Resources;
