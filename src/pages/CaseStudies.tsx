import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlaybookModal from "@/components/PlaybookModal";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/config";
import { caseStudies } from "@/data/caseStudies";
import {
    ArrowRight,
    Calendar,
    Clock,
    ChevronRight,
} from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
};

const CaseStudies = () => {
    const [playbookOpen, setPlaybookOpen] = useState(false);

    const openCalendly = () => window.open(SITE_CONFIG.calendlyUrl, "_blank");

    const featured = caseStudies[0];
    const rest = caseStudies.slice(1);

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
                        Case Studies
                    </motion.h1>
                    <motion.p
                        {...fadeInUp}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-lg text-muted-foreground max-w-2xl"
                    >
                        Real results from real practices. See how dental organizations are
                        using Breeh AI to automate calls, increase bookings, and grow
                        revenue.
                    </motion.p>
                </div>
            </section>

            {/* ── Featured Article ── */}
            <section className="px-6 lg:px-8 pb-20 section-lavender">
                <div className="max-w-5xl mx-auto">
                    <Link to={`/case-studies/${featured.slug}`}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border bg-card shadow-sm group hover:border-primary/30 transition-all"
                        >
                            {/* Featured image */}
                            <div className="relative min-h-[280px] md:min-h-[360px] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop&q=80"
                                    alt={featured.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-card/20 to-transparent" />
                            </div>
                            {/* Content */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <span className="inline-block self-start px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                                    {featured.category}
                                </span>
                                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4 leading-snug group-hover:text-primary transition-colors">
                                    {featured.title}
                                </h2>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    {featured.sections[0]?.content.slice(0, 200)}...
                                </p>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-6">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3.5 h-3.5" /> {featured.date}
                                    </span>
                                    <span>|</span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5" /> {featured.readTime}
                                    </span>
                                </div>
                                <span className="self-start btn-primary inline-flex items-center gap-2 text-sm px-6 py-3">
                                    Read Case Study <ChevronRight className="w-4 h-4" />
                                </span>
                            </div>
                        </motion.div>
                    </Link>
                </div>
            </section>

            {/* ── All Case Studies Grid ── */}
            <section className="py-20 px-6 lg:px-8 section-alt">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-display font-bold text-3xl text-foreground mb-12">
                        All Case Studies
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {rest.map((cs, i) => (
                            <motion.div
                                key={cs.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (i % 3) * 0.1 }}
                            >
                                <Link
                                    to={`/case-studies/${cs.slug}`}
                                    className="group block bg-card rounded-3xl border border-border overflow-hidden hover:border-primary/30 hover:-translate-y-1 transition-all shadow-sm"
                                >
                                    {/* Case study image */}
                                    <div className="aspect-[4/3] overflow-hidden relative">
                                        <img
                                            src={[
                                                'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&h=375&fit=crop&q=80',
                                                'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=375&fit=crop&q=80',
                                                'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=500&h=375&fit=crop&q=80',
                                                'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=375&fit=crop&q=80',
                                                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=375&fit=crop&q=80',
                                            ][i % 5]}
                                            alt={cs.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-card/30 to-transparent" />
                                    </div>
                                    <div className="p-6">
                                        <span className="inline-block px-2.5 py-1 rounded-md bg-secondary text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                                            Case Study
                                        </span>
                                        <h3 className="font-display font-bold text-lg text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                                            {cs.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                                            {cs.sections[0]?.content.slice(0, 150)}...
                                        </p>
                                        <div className="flex items-center justify-between">
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

            {/* ── CTA ── */}
            <section className="py-20 px-6 lg:px-8 section-lavender">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        {...fadeInUp}
                        className="rounded-3xl p-10 md:p-16 overflow-hidden relative shadow-2xl"
                        style={{
                            background:
                                "linear-gradient(135deg, hsl(244 58% 52%) 0%, hsl(244 58% 61%) 50%, hsl(244 55% 67%) 100%)",
                        }}
                    >
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
                        <div className="relative z-10 text-center max-w-2xl mx-auto">
                            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4 leading-tight">
                                Ready to See These Results for Your Practice?
                            </h2>
                            <p className="text-primary-foreground/60 mb-8">
                                Book a demo and discover how Breeh AI can transform your patient
                                communication.
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

            <Footer
                onOpenPlaybook={() => setPlaybookOpen(true)}
                onBookDemo={openCalendly}
            />
            <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
        </div>
    );
};

export default CaseStudies;
