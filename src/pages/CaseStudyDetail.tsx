import { useState, useEffect, useRef, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlaybookModal from "@/components/PlaybookModal";
import { motion, useScroll, useSpring } from "framer-motion";
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
    Share2,
    Download,
    Eye,
    ChevronLeft,
} from "lucide-react";

import ResultsDashboard from "@/components/case-studies/ResultsDashboard";
import BeforeAfterTool from "@/components/case-studies/BeforeAfterTool";
import VideoTestimonial from "@/components/case-studies/VideoTestimonial";
import ExpertAnalysis from "@/components/case-studies/ExpertAnalysis";
import ImplementationTimeline from "@/components/case-studies/ImplementationTimeline";
import CaseStudyFinalCTA from "@/components/case-studies/CaseStudyFinalCTA";

const CaseStudyDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [playbookOpen, setPlaybookOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("overview");
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

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        if (!caseStudy) return;
        document.title = `${caseStudy.title} | Breeh AI Case Study`;
    }, [caseStudy]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
        );

        const currentRefs = sectionRefs.current;
        Object.values(currentRefs).forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [caseStudy]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [slug]);

    if (!caseStudy) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Navbar onBookDemo={openCalendly} onOpenPlaybook={() => setPlaybookOpen(true)} />
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Story Missing</h1>
                        <Link to="/case-studies" className="text-primary font-bold flex items-center justify-center gap-2">
                            <ChevronLeft className="w-4 h-4" /> Return to library
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

    const sidebarLinks = [
        { id: "overview", label: "Overview" },
        { id: "the-problem", label: "The Challenge" },
        { id: "the-solution", label: "The Solution" },
        { id: "30-day-results", label: "Key Results" },
        { id: "expert-analysis", label: "Expert View" },
        { id: "deployment-process", label: "Implementation" },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
            <Navbar onBookDemo={openCalendly} onOpenPlaybook={() => setPlaybookOpen(true)} />

            {/* Progress Bar */}
            <motion.div
                className="fixed top-20 left-0 right-0 h-1 bg-primary origin-left z-50"
                style={{ scaleX }}
            />

            {/* ── Cinematic Hero ── */}
            <section className="relative h-[70vh] min-h-[500px] flex items-end pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1629909608115-f93f044922c3?q=80&w=2067&auto=format&fit=crop"
                        alt={caseStudy.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>

                <div className="container max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-primary/20">
                                {caseStudy.category}
                            </span>
                            <div className="flex items-center gap-2 text-muted-foreground text-xs font-medium">
                                <Calendar className="w-3.5 h-3.5" /> {caseStudy.date}
                                <span className="mx-2">•</span>
                                <Clock className="w-3.5 h-3.5" /> {caseStudy.readTime}
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1]">
                            {caseStudy.title}
                        </h1>
                        <div className="flex flex-wrap gap-4">
                            <button className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all">
                                <Share2 className="w-4 h-4" /> Share Story
                            </button>
                            <button className="flex items-center gap-2 bg-muted text-foreground px-6 py-3 rounded-xl font-bold hover:bg-muted/80 transition-all border border-border">
                                <Download className="w-4 h-4" /> Get PDF
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Main Layout (Content + Sidebar) ── */}
            <section className="py-20 px-6">
                <div className="container max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-16">
                        {/* Sidebar Navigation */}
                        <aside className="hidden lg:block lg:col-span-3">
                            <div className="sticky top-32 space-y-8">
                                <div>
                                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6">Chapter Navigation</p>
                                    <nav className="flex flex-col gap-1">
                                        {sidebarLinks.map((link) => (
                                            <button
                                                key={link.id}
                                                onClick={() => scrollToId(link.id)}
                                                className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between group ${activeSection === link.id
                                                        ? "bg-primary/5 text-primary border-l-2 border-primary"
                                                        : "text-muted-foreground hover:bg-muted hover:text-foreground border-l-2 border-transparent"
                                                    }`}
                                            >
                                                {link.label}
                                                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${activeSection === link.id ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} />
                                            </button>
                                        ))}
                                    </nav>
                                </div>

                                <div className="p-6 bg-surface/50 rounded-3xl border border-border">
                                    <h4 className="font-bold text-sm mb-4">Quick Stats</h4>
                                    <div className="space-y-4">
                                        {caseStudy.heroStats.map((stat, i) => (
                                            <div key={i}>
                                                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Story Content */}
                        <div className="lg:col-span-9 space-y-24">
                            {/* Overview Section */}
                            <article id="overview" ref={(el) => (sectionRefs.current["overview"] = el)} className="scroll-mt-32">
                                <h2 className="text-3xl font-bold mb-8 font-display">The Overview</h2>
                                <div className="prose prose-lg prose-invert max-w-none text-muted-foreground leading-relaxed">
                                    <p className="text-xl text-foreground font-medium mb-8 leading-relaxed">
                                        {caseStudy.sections[0]?.content}
                                    </p>
                                    <p>{caseStudy.sections[1]?.content}</p>
                                </div>
                            </article>

                            {/* Challenge Section */}
                            <article id="the-problem" ref={(el) => (sectionRefs.current["the-problem"] = el)} className="scroll-mt-32">
                                <div className="p-8 md:p-12 bg-surface rounded-[40px] border border-border relative overflow-hidden group">
                                    <h2 className="text-3xl font-bold mb-8 font-display">The Challenge</h2>
                                    <p className="text-muted-foreground leading-relaxed mb-8">
                                        {caseStudy.sections.find(s => s.id === "the-problem")?.content}
                                    </p>
                                    <ul className="grid md:grid-cols-2 gap-4">
                                        {caseStudy.sections.find(s => s.id === "the-problem")?.bullets?.map((bullet, i) => (
                                            <li key={i} className="flex gap-4 p-4 rounded-2xl bg-muted/50 border border-border/50">
                                                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                                                <span className="text-sm font-medium text-foreground">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>

                            {/* Solution Section */}
                            <article id="the-solution" ref={(el) => (sectionRefs.current["the-solution"] = el)} className="scroll-mt-32">
                                <h2 className="text-3xl font-bold mb-8 font-display">The Solution</h2>
                                <div className="space-y-8">
                                    <p className="text-muted-foreground leading-relaxed">
                                        {caseStudy.sections.find(s => s.id === "the-solution")?.content}
                                    </p>

                                    {/* Interactive Transform Tool */}
                                    <BeforeAfterTool
                                        beforeImage="https://images.unsplash.com/photo-1599381413149-62383501f2fb?w=1200"
                                        afterImage="https://images.unsplash.com/photo-1629909608115-f93f044922c3?w=1200"
                                    />
                                </div>
                            </article>

                            {/* Results Section */}
                            <article id="30-day-results" ref={(el) => (sectionRefs.current["30-day-results"] = el)} className="scroll-mt-32">
                                <ResultsDashboard />

                                <div className="mt-12">
                                    <VideoTestimonial />
                                </div>
                            </article>

                            {/* Expert Analysis Section */}
                            <article id="expert-analysis" ref={(el) => (sectionRefs.current["expert-analysis"] = el)} className="scroll-mt-32">
                                <ExpertAnalysis />
                            </article>

                            {/* Deployment Section */}
                            <article id="deployment-process" ref={(el) => (sectionRefs.current["deployment-process"] = el)} className="scroll-mt-32">
                                <ImplementationTimeline />
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Stories */}
            {related.length > 0 && (
                <section className="py-24 bg-surface/30">
                    <div className="container max-w-7xl mx-auto px-6">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-3xl font-bold font-display">Continue Reading</h2>
                            <Link to="/case-studies" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                View library <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {related.map((cs) => (
                                <Link key={cs.slug} to={`/case-studies/${cs.slug}`} className="group p-6 bg-card rounded-3xl border border-border hover:border-primary/30 transition-all">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Eye className="w-4 h-4 text-primary" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{cs.category}</span>
                                    </div>
                                    <h4 className="font-bold text-lg mb-4 group-hover:text-primary transition-colors">{cs.title}</h4>
                                    <div className="flex items-center gap-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                                        <span>{cs.date}</span>
                                        <span>{cs.readTime}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Final CTA */}
            <CaseStudyFinalCTA />

            <Footer onOpenPlaybook={() => setPlaybookOpen(true)} onBookDemo={openCalendly} />
            <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
        </div>
    );
};

export default CaseStudyDetail;
