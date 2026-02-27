import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

function useCountUp(target: number, duration = 2000, inView = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const inc = target / (duration / 16);
        const id = setInterval(() => {
            start += inc;
            if (start >= target) { setCount(target); clearInterval(id); } else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(id);
    }, [inView, target, duration]);
    return count;
}

const categories = ["All", "Practice Management", "Communication", "Analytics", "Marketing", "Payment", "Imaging"];

const featured = [
    { name: "Dentrix Enterprise", desc: "Deep two-way sync with automatic appointment reconciliation", emoji: "🦷" },
    { name: "Open Dental", desc: "Real-time schedule sync and patient data bi-directional flow", emoji: "🔗" },
    { name: "Curve Dental", desc: "Cloud-native integration with zero-latency scheduling", emoji: "☁️" },
];

const IntegrationsHero = ({ activeCategory, onCategoryChange, searchQuery, onSearchChange }: {
    activeCategory: string;
    onCategoryChange: (cat: string) => void;
    searchQuery: string;
    onSearchChange: (q: string) => void;
}) => {
    const [inView, setInView] = useState(false);
    const [featuredIdx, setFeaturedIdx] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.2 });
        obs.observe(el); return () => obs.disconnect();
    }, []);

    useEffect(() => {
        const id = setInterval(() => setFeaturedIdx((p) => (p + 1) % featured.length), 10000);
        return () => clearInterval(id);
    }, []);

    const integrations = useCountUp(50, 2000, inView);
    const apiConns = useCountUp(200, 2000, inView);

    return (
        <section ref={ref} className="min-h-[70vh] flex flex-col justify-center relative overflow-hidden pt-28 pb-16 px-6 lg:px-8">
            {/* Background mesh */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[160px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-purple-400/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-5xl mx-auto text-center relative z-10">
                {/* Eyebrow */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    50+ Native Integrations
                </motion.div>

                {/* Headline */}
                <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="font-display font-bold text-4xl md:text-5xl lg:text-7xl text-foreground leading-tight mb-6">
                    Connects with{" "}
                    <span className="gradient-text">everything</span>{" "}
                    you use
                </motion.h1>

                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                    Native integrations with the tools you already love. No coding required. Set up in minutes, not months.
                </motion.p>

                {/* Stats */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                    className="flex justify-center gap-10 mb-10">
                    {[
                        { val: `${integrations}+`, label: "Native Integrations" },
                        { val: `${apiConns}+`, label: "API Connections" },
                        { val: "5 min", label: "Avg Setup Time" },
                    ].map((s) => (
                        <div key={s.label} className="text-center">
                            <p className="font-display font-bold text-2xl text-primary">{s.val}</p>
                            <p className="text-xs text-muted-foreground">{s.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Search bar */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                    className="max-w-2xl mx-auto relative mb-8">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Search integrations (e.g., 'Dentrix', 'scheduling')..."
                        className="w-full pl-12 pr-16 py-4 rounded-xl bg-card border border-border shadow-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground bg-muted px-2 py-1 rounded font-mono">⌘K</span>
                </motion.div>

                {/* Category pills */}
                <div className="flex justify-center gap-2 flex-wrap">
                    {categories.map((cat) => (
                        <button key={cat} onClick={() => onCategoryChange(cat)}
                            className="relative px-4 py-2 rounded-full text-sm font-medium transition-all">
                            {activeCategory === cat && (
                                <motion.span layoutId="intCatPill" transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/25" />
                            )}
                            <span className={`relative z-10 ${activeCategory === cat ? "text-white" : "text-muted-foreground hover:text-foreground"}`}>{cat}</span>
                        </button>
                    ))}
                </div>

                {/* Featured spotlight */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                    className="mt-10 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl p-5 border border-primary/20 max-w-3xl mx-auto flex items-center gap-5">
                    <span className="text-4xl">{featured[featuredIdx].emoji}</span>
                    <div className="text-left flex-1">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Featured Integration</span>
                        <p className="font-bold text-foreground">{featured[featuredIdx].name}</p>
                        <p className="text-xs text-muted-foreground">{featured[featuredIdx].desc}</p>
                    </div>
                    <a href="#directory" className="text-sm text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap">
                        View <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>

                {/* Request CTA */}
                <p className="mt-5 text-sm text-muted-foreground">
                    Don't see your tool?{" "}
                    <button onClick={() => window.open(SITE_CONFIG.calendlyUrl, "_blank")} className="text-primary font-semibold hover:underline">
                        Request an integration →
                    </button>
                </p>
            </div>
        </section>
    );
};

export default IntegrationsHero;
