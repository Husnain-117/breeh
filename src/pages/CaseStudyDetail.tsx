import { useState, useEffect, useRef, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlaybookModal from "@/components/PlaybookModal";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/config";
import {
    getCaseStudyBySlug,
    getRelatedCaseStudies,
} from "@/data/caseStudies";
import {
    ChevronRight,
    Calendar,
    Clock,
    ArrowRight,
    Quote,
    CheckCircle2,
    Send,
    ChevronLeft,
    ChevronRight as ChevronRightIcon,
} from "lucide-react";

/* ────────────────────────────── helpers ────────────────────────────── */

const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55 },
};

/* ────────────────────────────── component ─────────────────────────── */

const CaseStudyDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [playbookOpen, setPlaybookOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("");
    const [testimonialIdx, setTestimonialIdx] = useState(0);
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    const caseStudy = useMemo(
        () => (slug ? getCaseStudyBySlug(slug) : undefined),
        [slug]
    );
    const related = useMemo(
        () => (slug ? getRelatedCaseStudies(slug) : []),
        [slug]
    );

    const openCalendly = () => window.open(SITE_CONFIG.calendlyUrl, "_blank");

    /* ── SEO meta ── */
    useEffect(() => {
        if (!caseStudy) return;
        document.title = caseStudy.seo.title;
        const setMeta = (name: string, content: string) => {
            let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
            if (!tag) {
                tag = document.createElement("meta");
                tag.name = name;
                document.head.appendChild(tag);
            }
            tag.content = content;
        };
        const setOg = (property: string, content: string) => {
            let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
            if (!tag) {
                tag = document.createElement("meta");
                tag.setAttribute("property", property);
                document.head.appendChild(tag);
            }
            tag.content = content;
        };
        setMeta("description", caseStudy.seo.description);
        setOg("og:title", caseStudy.seo.title);
        setOg("og:description", caseStudy.seo.description);
        if (caseStudy.seo.ogImage) setOg("og:image", caseStudy.seo.ogImage);
        setOg("og:type", "article");
    }, [caseStudy]);

    /* ── Intersection Observer for TOC ── */
    useEffect(() => {
        if (!caseStudy) return;
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                }
            },
            { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
        );
        Object.values(sectionRefs.current).forEach((el) => {
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [caseStudy]);

    /* ── Scroll to top on slug change ── */
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [slug]);

    /* ── testimonial auto-rotate ── */
    useEffect(() => {
        if (!caseStudy || caseStudy.testimonials.length <= 1) return;
        const iv = setInterval(
            () => setTestimonialIdx((i) => (i + 1) % caseStudy.testimonials.length),
            5000
        );
        return () => clearInterval(iv);
    }, [caseStudy]);

    /* ── 404 guard ── */
    if (!caseStudy) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Navbar onBookDemo={openCalendly} onOpenPlaybook={() => setPlaybookOpen(true)} />
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="font-display font-bold text-4xl text-foreground mb-4">
                            Case Study Not Found
                        </h1>
                        <p className="text-muted-foreground mb-8">
                            The case study you're looking for doesn't exist.
                        </p>
                        <Link to="/case-studies" className="btn-primary inline-flex items-center gap-2">
                            Browse Case Studies <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
                <Footer onOpenPlaybook={() => setPlaybookOpen(true)} onBookDemo={openCalendly} />
            </div>
        );
    }

    const scrollToId = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="min-h-screen bg-background overflow-x-hidden font-body">
            <Navbar onBookDemo={openCalendly} onOpenPlaybook={() => setPlaybookOpen(true)} />

            {/* ═══════════════════ 1. Breadcrumb ═══════════════════ */}
            <section className="pt-28 pb-4 px-6 lg:px-8 section-lavender">
                <div className="max-w-6xl mx-auto">
                    <nav className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                        <Link to="/resources" className="hover:text-primary transition-colors">
                            Resources
                        </Link>
                        <ChevronRight className="w-3.5 h-3.5" />
                        <Link to="/case-studies" className="hover:text-primary transition-colors">
                            Case Studies
                        </Link>
                        <ChevronRight className="w-3.5 h-3.5" />
                        <span className="text-foreground font-medium truncate max-w-xs lg:max-w-lg">
                            {caseStudy.title}
                        </span>
                    </nav>
                </div>
            </section>

            {/* ═══════════════════ 2. Hero ═══════════════════ */}
            <section className="pb-12 px-6 lg:px-8 section-lavender">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-5 gap-10 items-start">
                        {/* Left — title */}
                        <motion.div {...fadeIn} className="lg:col-span-3">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                                {caseStudy.category}
                            </span>
                            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
                                {caseStudy.title}
                            </h1>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" /> {caseStudy.date}
                                </span>
                                <span>|</span>
                                <span className="flex items-center gap-1.5">
                                    <Clock className="w-4 h-4" /> {caseStudy.readTime}
                                </span>
                            </div>
                        </motion.div>

                        {/* Right — stats */}
                        <motion.div
                            {...fadeIn}
                            transition={{ delay: 0.15, duration: 0.55 }}
                            className="lg:col-span-2 grid grid-cols-2 gap-4"
                        >
                            {caseStudy.heroStats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="bg-card rounded-2xl p-6 border border-border shadow-sm text-center"
                                >
                                    <p className="font-display font-bold text-3xl md:text-4xl text-primary mb-1">
                                        {stat.value}
                                    </p>
                                    <p className="text-sm text-muted-foreground font-medium">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ 3. Hero Image ═══════════════════ */}
            <section className="px-6 lg:px-8 pb-16 section-lavender">
                <motion.div
                    {...fadeIn}
                    className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-secondary border border-border"
                >
                    <div className="aspect-[21/9] flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                <Quote className="w-10 h-10 text-primary/30" />
                            </div>
                            <p className="text-muted-foreground text-sm">Case Study Hero Image</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ═══════════════════ 4-16. Two-Column: TOC + Content ═══════════════════ */}
            <section className="py-16 px-6 lg:px-8 bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* ── Sticky TOC (desktop) ── */}
                        <aside className="hidden lg:block lg:col-span-3">
                            <div className="sticky top-28">
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">
                                    Table of Contents
                                </p>
                                <nav className="space-y-1">
                                    {caseStudy.sections.map((sec) => (
                                        <button
                                            key={sec.id}
                                            onClick={() => scrollToId(sec.id)}
                                            className={`block w-full text-left pl-4 py-2 text-sm rounded-lg transition-all border-l-2 ${activeSection === sec.id
                                                ? "border-primary text-primary font-semibold bg-primary/5"
                                                : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                                                }`}
                                        >
                                            {sec.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* ── Main Content ── */}
                        <div className="lg:col-span-9 space-y-16">
                            {/* Article sections */}
                            {caseStudy.sections.map((sec, idx) => (
                                <motion.div
                                    key={sec.id}
                                    id={sec.id}
                                    ref={(el) => { sectionRefs.current[sec.id] = el; }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.05 }}
                                >
                                    <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-5">
                                        {sec.title}
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed text-base mb-4">
                                        {sec.content}
                                    </p>
                                    {sec.bullets && (
                                        <ul className="space-y-3 mt-4">
                                            {sec.bullets.map((b, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                                    <span className="text-muted-foreground leading-relaxed">
                                                        {b}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {/* ── 30-Day Results → inject metrics grid ── */}
                                    {sec.id === "30-day-results" && (
                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
                                            {caseStudy.metricsCards.map((m) => (
                                                <div
                                                    key={m.label}
                                                    className="feature-card text-center py-6"
                                                >
                                                    <p className="font-display font-bold text-2xl md:text-3xl text-primary mb-1">
                                                        {m.value}
                                                    </p>
                                                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                                                        {m.label}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* ── Quote block after "What Leadership Says" ── */}
                                    {sec.id === "what-leadership-says" && (
                                        <div className="section-dark rounded-2xl p-8 md:p-10 mt-8">
                                            <Quote className="w-8 h-8 text-primary-foreground/30 mb-4" />
                                            <p className="text-lg md:text-xl text-primary-foreground leading-relaxed mb-6 italic">
                                                "{caseStudy.quote.text}"
                                            </p>
                                            <div>
                                                <p className="text-primary-foreground font-semibold">
                                                    {caseStudy.quote.author}
                                                </p>
                                                <p className="text-primary-foreground/50 text-sm">
                                                    {caseStudy.quote.role}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}

                            {/* ═══════════════════ 17. Lead Capture Form ═══════════════════ */}
                            <motion.div
                                {...fadeIn}
                                className="bg-card rounded-3xl border border-border p-8 md:p-12 shadow-sm"
                            >
                                <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                                    Want results like these?
                                </h3>
                                <p className="text-muted-foreground text-sm mb-8">
                                    Get a personalized demo and see how Breeh AI can transform
                                    your practice.
                                </p>
                                <form
                                    onSubmit={(e) => e.preventDefault()}
                                    className="grid md:grid-cols-3 gap-4"
                                >
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="bg-background border border-border rounded-xl px-5 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none text-foreground"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Work Email"
                                        className="bg-background border border-border rounded-xl px-5 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none text-foreground"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Company Size"
                                        className="bg-background border border-border rounded-xl px-5 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none text-foreground"
                                    />
                                    <div className="md:col-span-3">
                                        <button
                                            type="submit"
                                            className="btn-primary inline-flex items-center gap-2 text-sm w-full md:w-auto justify-center"
                                        >
                                            <Send className="w-4 h-4" /> Experience Breeh AI
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ 18. Similar Articles ═══════════════════ */}
            {related.length > 0 && (
                <section className="py-20 px-6 lg:px-8 section-alt">
                    <div className="max-w-6xl mx-auto">
                        <motion.h2
                            {...fadeIn}
                            className="font-display font-bold text-3xl text-foreground mb-12 text-center"
                        >
                            More Case Studies
                        </motion.h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {related.map((cs, i) => (
                                <motion.div
                                    key={cs.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                >
                                    <Link
                                        to={`/case-studies/${cs.slug}`}
                                        className="group block bg-card rounded-3xl border border-border overflow-hidden hover:border-primary/30 hover:-translate-y-1 transition-all shadow-sm"
                                    >
                                        <div className="aspect-[4/3] bg-secondary flex items-center justify-center relative overflow-hidden">
                                            <Quote className="w-12 h-12 text-primary/20" />
                                            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/10" />
                                            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-primary/5" />
                                        </div>
                                        <div className="p-6">
                                            <span className="inline-block px-2.5 py-1 rounded-md bg-secondary text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                                                Case Study
                                            </span>
                                            <h3 className="font-display font-bold text-lg text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                                                {cs.title}
                                            </h3>
                                            <div className="flex items-center justify-between mt-4">
                                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" /> {cs.date}
                                                    </span>
                                                    <span>|</span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-3 h-3" /> {cs.readTime}
                                                    </span>
                                                </div>
                                                <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                                    Read <ArrowRight className="w-3 h-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ═══════════════════ 19. Testimonial Carousel ═══════════════════ */}
            {caseStudy.testimonials.length > 0 && (
                <section className="py-20 px-6 lg:px-8 section-lavender">
                    <div className="max-w-4xl mx-auto">
                        <motion.h2
                            {...fadeIn}
                            className="font-display font-bold text-3xl text-foreground mb-12 text-center"
                        >
                            What Our Clients Say
                        </motion.h2>
                        <div className="relative">
                            <div className="bg-card rounded-3xl border border-border p-8 md:p-12 shadow-sm text-center min-h-[220px] flex flex-col items-center justify-center">
                                <Quote className="w-10 h-10 text-primary/20 mb-6" />
                                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic max-w-2xl">
                                    "{caseStudy.testimonials[testimonialIdx].quote}"
                                </p>
                                <p className="font-display font-semibold text-foreground">
                                    {caseStudy.testimonials[testimonialIdx].name}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {caseStudy.testimonials[testimonialIdx].role},{" "}
                                    {caseStudy.testimonials[testimonialIdx].company}
                                </p>
                            </div>
                            {caseStudy.testimonials.length > 1 && (
                                <div className="flex items-center justify-center gap-4 mt-6">
                                    <button
                                        onClick={() =>
                                            setTestimonialIdx(
                                                (i) =>
                                                    (i - 1 + caseStudy.testimonials.length) %
                                                    caseStudy.testimonials.length
                                            )
                                        }
                                        className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:border-primary/40 transition-colors"
                                    >
                                        <ChevronLeft className="w-4 h-4 text-foreground" />
                                    </button>
                                    <div className="flex gap-2">
                                        {caseStudy.testimonials.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setTestimonialIdx(i)}
                                                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === testimonialIdx ? "bg-primary" : "bg-border"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <button
                                        onClick={() =>
                                            setTestimonialIdx(
                                                (i) => (i + 1) % caseStudy.testimonials.length
                                            )
                                        }
                                        className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:border-primary/40 transition-colors"
                                    >
                                        <ChevronRightIcon className="w-4 h-4 text-foreground" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* ═══════════════════ 20. CTA Section ═══════════════════ */}
            <section className="py-20 px-6 lg:px-8 section-alt">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        {...fadeIn}
                        className="rounded-3xl p-10 md:p-16 overflow-hidden relative shadow-2xl"
                        style={{
                            background:
                                "linear-gradient(135deg, hsl(244 58% 52%) 0%, hsl(244 58% 61%) 50%, hsl(244 55% 67%) 100%)",
                        }}
                    >
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
                        <div className="relative z-10 text-center max-w-2xl mx-auto">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-xs font-bold uppercase tracking-wider mb-6">
                                <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
                                Ready to Get Started
                            </span>
                            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4 leading-tight">
                                Ready to Automate Your Calls with Breeh AI?
                            </h2>
                            <p className="text-primary-foreground/60 mb-8">
                                Join hundreds of practices already using Breeh AI to capture
                                every call and fill their schedules.
                            </p>
                            <button
                                onClick={openCalendly}
                                className="inline-block bg-primary-foreground text-foreground font-semibold rounded-full px-10 py-4 text-base transition-all duration-300 hover:bg-primary-foreground/90 hover:-translate-y-0.5 hover:shadow-lg"
                            >
                                Book a Demo
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer onOpenPlaybook={() => setPlaybookOpen(true)} onBookDemo={openCalendly} />
            <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
        </div>
    );
};

export default CaseStudyDetail;
