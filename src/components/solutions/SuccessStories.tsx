import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

function useCountUp(target: number, duration = 2000, inView = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const inc = target / (duration / 16);
        const id = setInterval(() => {
            start += inc;
            if (start >= target) { setCount(target); clearInterval(id); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(id);
    }, [inView, target, duration]);
    return count;
}

const filters = ["All", "Single Location", "Multi-Location", "DSO"];

const stories = [
    { name: "Bright Smile Dental", type: "Single Location", result: "40% more bookings", quote: "Breeh has completely transformed our Monday mornings. What used to take hours of callbacks is now handled automatically.", author: "Dr. Martinez", tags: ["After-hours", "Scheduling"] },
    { name: "Danville Pediatric", type: "Single Location", result: "Saved 20 hrs/week", quote: "Parents love the instant response, and our staff loves the quiet phones.", author: "Pamela W.", tags: ["Peak hours", "Patient experience"] },
    { name: "Allied OMS", type: "Multi-Location", result: "8 locations unified", quote: "Finally, I can see what's happening at every office from one screen.", author: "Brent A.", tags: ["Multi-location", "Operations"] },
    { name: "Zen Dentistry", type: "Single Location", result: "25% more referrals", quote: "We never miss a referral call now, and the intake is flawless.", author: "Dr. Arshjot A.", tags: ["Referrals", "Intake"] },
    { name: "SmileCraft Ortho", type: "Multi-Location", result: "30% fewer no-shows", quote: "Treatment compliance went up after Breeh started handling our follow-ups.", author: "Dr. Kim", tags: ["Orthodontics", "Follow-ups"] },
    { name: "Family Dental Group", type: "DSO", result: "99.7% answer rate", quote: "Best investment we've made this year. The AI handles emergency calls perfectly.", author: "Dr. Michael R.", tags: ["Emergency", "ROI"] },
];

const carouselQuotes = [
    { text: "The email our office receives with a summary of the calls we missed over the weekend is a game changer.", author: "Patricia W.", role: "Director of Operations, TManagement" },
    { text: "It has made a huge impact on Monday morning. What used to take a few hours is now an effective schedule builder.", author: "Pamela W.", role: "Office Manager, Danville Pediatric" },
    { text: "We went from missing 30% of calls to answering 100%. The ROI was obvious within the first week.", author: "Dr. Arshjot A.", role: "DDS, FCAD, Zen Dentistry" },
];

const SuccessStories = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [quoteIdx, setQuoteIdx] = useState(0);
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.2 });
        obs.observe(el); return () => obs.disconnect();
    }, []);

    // Auto-rotate carousel
    useEffect(() => {
        const id = setInterval(() => setQuoteIdx((p) => (p + 1) % carouselQuotes.length), 5000);
        return () => clearInterval(id);
    }, []);

    const filtered = activeFilter === "All" ? stories : stories.filter((s) => s.type === activeFilter);
    const metrics = [
        { value: 200, suffix: "+", label: "Practices" },
        { value: 2, suffix: "M+", label: "Calls handled" },
        { value: 10, suffix: "M+", label: "Revenue recovered" },
        { value: 98, suffix: "%", label: "Satisfaction" },
    ];
    const counts = metrics.map((m) => useCountUp(m.value, 2000, inView));

    return (
        <section className="py-28 px-6 lg:px-8 bg-background" ref={ref}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                        Success Stories
                    </motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">Real practices, real results</motion.h2>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {metrics.map((m, i) => (
                        <div key={i} className="text-center">
                            <p className="font-display font-bold text-3xl text-primary">{counts[i].toLocaleString()}{m.suffix}</p>
                            <p className="text-sm text-muted-foreground">{m.label}</p>
                        </div>
                    ))}
                </div>

                {/* Filters */}
                <div className="flex justify-center gap-2 mb-10 flex-wrap">
                    {filters.map((f) => (
                        <button key={f} onClick={() => setActiveFilter(f)}
                            className="relative px-4 py-2 rounded-full text-sm font-medium transition-all">
                            {activeFilter === f && (
                                <motion.span layoutId="ssFilt" transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    className="absolute inset-0 bg-primary rounded-full" />
                            )}
                            <span className={`relative z-10 ${activeFilter === f ? "text-white" : "text-muted-foreground hover:text-foreground"}`}>{f}</span>
                        </button>
                    ))}
                </div>

                {/* Story cards */}
                <AnimatePresence mode="wait">
                    <motion.div key={activeFilter} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {filtered.map((s, i) => (
                            <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                whileHover={{ y: -4 }}
                                className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all">
                                <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}</div>
                                <h4 className="font-bold text-sm text-foreground mb-1">{s.name}</h4>
                                <p className="text-xs italic text-muted-foreground mb-4 line-clamp-3">"{s.quote}"</p>
                                <p className="text-xs text-muted-foreground mb-3">— {s.author}</p>
                                <span className="inline-block bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full text-xs font-bold mb-3">{s.result}</span>
                                <div className="flex gap-1.5 flex-wrap">
                                    {s.tags.map((t) => <span key={t} className="px-2 py-0.5 rounded bg-muted text-[10px] text-muted-foreground">{t}</span>)}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Quote carousel */}
                <div className="max-w-3xl mx-auto text-center relative">
                    <Quote className="w-10 h-10 text-primary/10 mx-auto mb-4" />
                    <AnimatePresence mode="wait">
                        <motion.div key={quoteIdx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                            <p className="text-lg italic text-foreground mb-3">"{carouselQuotes[quoteIdx].text}"</p>
                            <p className="text-sm font-semibold text-foreground">{carouselQuotes[quoteIdx].author}</p>
                            <p className="text-xs text-muted-foreground">{carouselQuotes[quoteIdx].role}</p>
                        </motion.div>
                    </AnimatePresence>
                    <div className="flex justify-center gap-2 mt-4">
                        {carouselQuotes.map((_, i) => (
                            <button key={i} onClick={() => setQuoteIdx(i)} className={`w-2 h-2 rounded-full transition-colors ${i === quoteIdx ? "bg-primary" : "bg-border"}`} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
