import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlaybookModal from "@/components/PlaybookModal";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/config";
import { getArticleBySlug, articles as allArticles } from "@/lib/articles";
import { ArrowLeft, Calendar, Clock, Share2, ChevronRight } from "lucide-react";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const [playbookOpen, setPlaybookOpen] = useState(false);
  const article = getArticleBySlug(slug || "");

  const openCalendly = () => {
    window.open(SITE_CONFIG.calendlyUrl, "_blank");
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar onBookDemo={openCalendly} onOpenPlaybook={() => setPlaybookOpen(true)} />
        <div className="pt-32 pb-20 px-6 text-center">
          <h1 className="font-display font-bold text-4xl text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/resources" className="btn-primary inline-flex items-center gap-2 px-6 py-3">
            <ArrowLeft className="w-4 h-4" /> Back to Resources
          </Link>
        </div>
        <Footer onOpenPlaybook={() => setPlaybookOpen(true)} onBookDemo={openCalendly} />
        <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
      </div>
    );
  }

  // Get 3 related articles (exclude current)
  const related = allArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar onBookDemo={openCalendly} onOpenPlaybook={() => setPlaybookOpen(true)} />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8 section-lavender">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Resources
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              {article.type === "case-study" ? "Case Study" : "Blog Article"}
            </span>
            <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-5xl text-foreground mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> {article.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {article.content.map((paragraph, i) => (
              <p
                key={i}
                className={`text-muted-foreground leading-relaxed ${
                  i === 0 ? "text-lg font-medium text-foreground" : "text-base"
                } ${paragraph.startsWith('"') ? "italic border-l-4 border-primary/30 pl-6 py-2 text-foreground/80" : ""}`}
              >
                {paragraph}
              </p>
            ))}
          </motion.article>

          {/* Share + CTA */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                }}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Share2 className="w-4 h-4" /> Copy link to share
              </button>
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl p-8 md:p-12 text-center"
              style={{
                background: "linear-gradient(135deg, hsl(244 50% 22%) 0%, hsl(244 58% 40%) 50%, hsl(244 58% 55%) 100%)",
              }}
            >
              <h3 className="font-display font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
                Ready to Stop Missing Calls?
              </h3>
              <p className="text-primary-foreground/60 mb-8 max-w-lg mx-auto">
                See how Breeh AI can recover lost patients and revenue for your practice.
              </p>
              <button onClick={openCalendly} className="bg-primary-foreground text-foreground font-semibold rounded-full px-8 py-4 hover:bg-primary-foreground/90 transition-colors">
                Book a Demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-16 px-6 lg:px-8 section-alt">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-2xl text-foreground mb-8">Related Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((item, i) => (
                <Link
                  key={i}
                  to={`/resources/${item.slug}`}
                  className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:-translate-y-1 transition-all"
                >
                  <span className="inline-block px-2.5 py-1 rounded-md bg-secondary text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                    {item.type === "case-study" ? "Case Study" : "Blog"}
                  </span>
                  <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{item.excerpt}</p>
                  <span className="text-primary text-xs font-bold flex items-center gap-1">
                    Read <ChevronRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer onOpenPlaybook={() => setPlaybookOpen(true)} onBookDemo={openCalendly} />
      <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
    </div>
  );
};

export default Article;
