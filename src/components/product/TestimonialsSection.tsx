import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

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

const metrics = [
    { value: 2, suffix: "M+", label: "Patient interactions managed" },
    { value: 98, suffix: "%", label: "Patient satisfaction" },
    { value: 500, suffix: "K+", label: "Appointments scheduled" },
    { value: 40, suffix: "%", label: "Admin time reduction" },
];

const testimonials = [
    {
        quote: "Breeh has completely transformed our operations. What used to take hours of callbacks is now handled automatically across all departments.",
        name: "Patricia W.",
        role: "VP of Operations",
        practice: "Regional Health System",
        result: "40% efficiency gain",
        stars: 5,
    },
    {
        quote: "We went from missing 30% of calls to answering 100%. The ROI was obvious within the first week.",
        name: "Dr. James L.",
        role: "Chief Medical Officer",
        practice: "Multispecialty Group",
        result: "Saved 20 hrs/week",
        stars: 5,
    },
    {
        quote: "Our patients love the instant response. They don't even realize they're talking to AI until we tell them.",
        name: "Pamela W.",
        role: "Practice Manager",
        practice: "Family Medicine Center",
        result: "98% satisfaction rate",
        stars: 5,
    },
    {
        quote: "Managing 8 locations used to be a nightmare. Now Breeh handles all our call routing and scheduling seamlessly.",
        name: "Brent A.",
        role: "Director of Operations",
        practice: "Allied Health Network",
        result: "8 locations unified",
        stars: 5,
    },
    {
        quote: "The integration with our EHR was seamless. We were up and running in literally 10 minutes.",
        name: "Dr. Sarah Chen",
        role: "Medical Director",
        practice: "Sunrise Health Clinic",
        result: "10 min setup",
        stars: 5,
    },
    {
        quote: "Best investment we've made this year. The AI handles urgent triage perfectly and our staff can focus on in-person care.",
        name: "Dr. Michael R.",
        role: "Chief Operating Officer",
        practice: "Metro Urgent Care",
        result: "99.7% answer rate",
        stars: 5,
    },
];

const TestimonialsSection = () => {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.2 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const counts = metrics.map((m) => useCountUp(m.value, 2000, inView));

    return (
        <section className="py-20 px-6 lg:px-8 section-alt" ref={ref}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                        Customer Stories
                    </motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
                        Trusted by many healthcare organizations
                    </motion.h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {metrics.map((m, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }} className="text-center">
                            <p className="font-display font-bold text-4xl text-primary">
                                {m.value >= 100 ? counts[i].toLocaleString() : counts[i]}{m.suffix}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">{m.label}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {testimonials.map((t, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }} whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all">
                            <div className="flex gap-0.5 mb-4">
                                {[...Array(t.stars)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-foreground text-sm leading-relaxed italic mb-5 line-clamp-4">"{t.quote}"</p>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                                    <p className="text-[11px] text-muted-foreground">{t.role}, {t.practice}</p>
                                </div>
                            </div>
                            <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">{t.result}</span>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center items-center gap-8 flex-wrap text-sm text-muted-foreground">
                    {[
                        { label: "G2", rating: "4.9/5" },
                        { label: "Capterra", rating: "Best Ease of Use" },
                        { label: "GetApp", rating: "Category Leader" },
                    ].map((b) => (
                        <div key={b.label} className="flex items-center gap-2">
                            <span className="font-bold text-foreground">{b.label}</span>
                            <span className="text-xs">{b.rating}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
