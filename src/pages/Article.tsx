import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlaybookModal from "@/components/PlaybookModal";
import BlogCard from "@/components/BlogCard";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { SITE_CONFIG } from "@/lib/config";
import { getArticleBySlug, articles as allArticles } from "@/lib/articles";
import {
  ArrowLeft,
  Calendar,
  Clock,

  Heart,
  Bookmark,
  ArrowRight,
  Copy,
  Check,
  Linkedin,
  Twitter,
  ArrowUp,
} from "lucide-react";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const [playbookOpen, setPlaybookOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const article = getArticleBySlug(slug || "");

  const openCalendly = () => {
    window.open(SITE_CONFIG.calendlyUrl, "_blank");
  };

  // Reading progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Show floating actions after scrolling 10%
  useEffect(() => {
    const handler = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setShowActions(total > 0 && scrolled / total > 0.1);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Copy link handler
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.includes("@")) {
      setNewsletterSuccess(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Related articles (same category, exclude current)
  const related = useMemo(() => {
    if (!article) return [];
    return allArticles
      .filter(
        (a) =>
          a.slug !== article.slug &&
          (a.category === article.category || a.type === article.type)
      )
      .slice(0, 2);
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar
          onBookDemo={openCalendly}
          onOpenPlaybook={() => setPlaybookOpen(true)}
        />
        <div className="pt-32 pb-20 px-6 text-center">
          <h1 className="font-display font-bold text-4xl text-foreground mb-4">
            Article Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link
            to="/blog"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
        <Footer
          onOpenPlaybook={() => setPlaybookOpen(true)}
          onBookDemo={openCalendly}
        />
        <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Reading progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar
        onBookDemo={openCalendly}
        onOpenPlaybook={() => setPlaybookOpen(true)}
      />

      {/* ═══════════════════════════════════════
          HERO HEADER
         ═══════════════════════════════════════ */}
      <section className="pt-32 pb-8 md:pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-block text-primary text-xs font-semibold uppercase tracking-[0.2em] hover:underline mb-6"
            >
              {article.category}
            </Link>

            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-foreground leading-[1.1] tracking-tight mb-6">
              {article.title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Author bar */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold ring-2 ring-border">
                  {article.author.name.charAt(0)}
                </div>
                <div className="text-left">
                  <span className="block font-semibold text-foreground text-sm">
                    {article.author.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {article.author.role} at Breeh AI
                  </span>
                </div>
              </div>
              <span className="w-px h-4 bg-border hidden md:block" />
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> {article.date}
              </span>
              <span className="w-px h-4 bg-border hidden md:block" />
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> {article.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURED IMAGE
         ═══════════════════════════════════════ */}
      <section className="px-6 lg:px-8 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-5xl mx-auto aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          ARTICLE CONTENT
         ═══════════════════════════════════════ */}
      <section className="px-6 lg:px-8 pb-12">
        <div className="max-w-3xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {article.content.map((paragraph, i) => {
              const isQuote = paragraph.startsWith('"');

              if (isQuote) {
                return (
                  <motion.blockquote
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="border-l-4 border-primary pl-6 md:pl-8 py-4 my-10 bg-primary/5 rounded-r-xl italic text-lg md:text-xl text-foreground/80 leading-relaxed"
                  >
                    {paragraph}
                  </motion.blockquote>
                );
              }

              return (
                <p
                  key={i}
                  className={`leading-[1.85] ${i === 0
                    ? "text-lg md:text-xl font-medium text-foreground"
                    : "text-base md:text-lg text-muted-foreground"
                    }`}
                >
                  {i === 0 && (
                    <span className="font-display font-bold text-5xl md:text-6xl float-left mr-3 mt-1 leading-none text-primary">
                      {paragraph.charAt(0)}
                    </span>
                  )}
                  {i === 0 ? paragraph.slice(1) : paragraph}
                </p>
              );
            })}
          </motion.article>

          {/* ═══════════════════════════════════════
              AUTHOR BIO
             ═══════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pt-10 border-t border-border"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-20 h-20 rounded-full bg-primary/10 ring-4 ring-card shadow-lg flex items-center justify-center text-primary text-2xl font-bold shrink-0">
                {article.author.name.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Written by
                </p>
                <h3 className="text-xl font-bold text-foreground mb-1 hover:text-primary transition-colors cursor-pointer">
                  {article.author.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {article.author.role} at Breeh AI
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                  Building the future of dental patient communication with AI
                  that sounds human, acts smart, and grows revenue.
                </p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════
              INLINE NEWSLETTER
             ═══════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/5 via-purple-500/5 to-primary/3 rounded-2xl p-8 md:p-10 mt-16 border border-primary/10 text-center relative overflow-hidden"
          >
            {/* Decorative blobs */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-purple-500/5 rounded-full blur-xl" />

            <div className="relative z-10">
              {newsletterSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-4"
                >
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-1">
                    You're in!
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Check your inbox for weekly dental AI insights.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                    Enjoyed this article?
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    Get weekly insights on AI and dental practice growth. Join
                    2,000+ practice owners.
                  </p>
                  <form
                    onSubmit={handleNewsletterSubmit}
                    className="max-w-md mx-auto flex gap-2"
                  >
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    />
                    <button
                      type="submit"
                      className="bg-primary text-white rounded-lg px-5 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════
              CTA CARD
             ═══════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 md:p-12 text-center mt-16 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, hsl(244 58% 52%) 0%, hsl(244 58% 61%) 50%, hsl(244 55% 67%) 100%)",
            }}
          >
            {/* Decorative circles */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/5 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-white/5 rounded-full" />

            <div className="relative z-10">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
                Ready to Stop Missing Calls?
              </h3>
              <p className="text-white/60 mb-8 max-w-lg mx-auto">
                See how Breeh AI can recover lost patients and revenue for your
                practice.
              </p>
              <button
                onClick={openCalendly}
                className="bg-white text-foreground font-semibold rounded-full px-8 py-4 hover:bg-white/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Book a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FLOATING ACTIONS BAR
         ═══════════════════════════════════════ */}
      <AnimatePresence>
        {showActions && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-xl border border-border/50 rounded-full px-5 py-2.5 shadow-2xl flex items-center gap-4 z-40"
          >
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-1 text-sm transition-all hover:scale-110 ${liked
                ? "text-red-500"
                : "text-muted-foreground hover:text-red-500"
                }`}
              aria-label={liked ? "Unlike" : "Like"}
            >
              <Heart
                className={`w-[18px] h-[18px] ${liked ? "fill-current" : ""}`}
              />
            </button>

            <button
              onClick={() => setSaved(!saved)}
              className={`flex items-center gap-1 text-sm transition-all hover:scale-110 ${saved
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
                }`}
              aria-label={saved ? "Unsave" : "Save"}
            >
              <Bookmark
                className={`w-[18px] h-[18px] ${saved ? "fill-current" : ""}`}
              />
            </button>

            <div className="w-px h-5 bg-border" />

            <button
              onClick={handleCopy}
              className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
              aria-label="Copy link"
            >
              {copied ? (
                <Check className="w-[18px] h-[18px] text-green-500" />
              ) : (
                <Copy className="w-[18px] h-[18px]" />
              )}
            </button>

            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.href : ""
              )}&text=${encodeURIComponent(article.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#1DA1F2] transition-all hover:scale-110"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-[18px] h-[18px]" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.href : ""
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#0A66C2] transition-all hover:scale-110"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-[18px] h-[18px]" />
            </a>

            <div className="w-px h-5 bg-border" />

            <button
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-[18px] h-[18px]" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════
          RELATED ARTICLES
         ═══════════════════════════════════════ */}
      {related.length > 0 && (
        <section className="py-20 px-6 lg:px-8 section-alt">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display font-bold text-2xl text-foreground">
                Continue Reading
              </h2>
              <Link
                to="/blog"
                className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
              >
                All articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((item, i) => (
                <BlogCard key={item.slug} article={item} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer
        onOpenPlaybook={() => setPlaybookOpen(true)}
        onBookDemo={openCalendly}
      />
      <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
    </div>
  );
};

export default Article;
