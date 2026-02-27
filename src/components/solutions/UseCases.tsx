import { motion } from "framer-motion";
import { Moon, Clock, MapPin, AlertTriangle, TrendingUp, TrendingDown, ArrowRight } from "lucide-react";

const scenarios = [
    {
        badge: "After-Hours Coverage",
        badgeColor: "bg-orange-500/10 text-orange-600",
        title: "Capture every after-hours opportunity",
        problem: "40% of calls come after 5pm. Most go to voicemail and are never recovered.",
        solution: "Breeh answers 24/7, books appointments, and sends you a morning summary.",
        metrics: [
            { icon: TrendingUp, label: "35% more appointments booked", positive: true },
            { icon: TrendingDown, label: "0% missed after-hours calls", positive: true },
        ],
        quote: "We woke up to 12 new appointments. That never happened before.",
        author: "Dr. Martinez, Bright Smile Dental",
        icon: Moon,
    },
    {
        badge: "Peak Hour Management",
        badgeColor: "bg-blue-500/10 text-blue-600",
        title: "Handle the 12pm chaos",
        problem: "Front desk overwhelmed during lunch rush — patients waiting, phones ringing nonstop.",
        solution: "Breeh triages calls, answers routine questions, and schedules follow-ups automatically.",
        metrics: [
            { icon: TrendingDown, label: "60% reduction in hold times", positive: true },
            { icon: TrendingUp, label: "Staff productivity up 40%", positive: true },
        ],
        quote: "Lunch hour used to be pandemonium. Now it runs itself.",
        author: "Pamela W., Danville Pediatric",
        icon: Clock,
    },
    {
        badge: "Multi-Location",
        badgeColor: "bg-purple-500/10 text-purple-600",
        title: "One system, every location",
        problem: "Different processes at each office, no visibility into performance across locations.",
        solution: "Unified dashboard, standardized patient experience, location-by-location analytics.",
        metrics: [
            { icon: TrendingUp, label: "Standardized across 8 locations", positive: true },
            { icon: TrendingUp, label: "Centralized reporting & insights", positive: true },
        ],
        quote: "Finally, I can see what's happening at every office from one screen.",
        author: "Brent A., Allied OMS",
        icon: MapPin,
    },
    {
        badge: "Patient Safety",
        badgeColor: "bg-red-500/10 text-red-600",
        title: "Smart emergency routing",
        problem: "True emergencies mixed with routine calls. Staff stress and delayed responses.",
        solution: "AI triage identifies emergencies, routes immediately, logs everything for compliance.",
        metrics: [
            { icon: TrendingUp, label: "100% emergencies escalated in <30s", positive: true },
            { icon: TrendingDown, label: "Zero missed urgent cases", positive: true },
        ],
        quote: "The peace of mind knowing emergencies are handled instantly is priceless.",
        author: "Dr. Sarah Chen, Family Dental",
        icon: AlertTriangle,
    },
];

const UseCases = () => {
    return (
        <section className="py-28 px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                        Use Cases
                    </motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
                        Solutions for every scenario
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="text-lg text-muted-foreground">See how Breeh solves real practice challenges.</motion.p>
                </div>

                {/* Scenario cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {scenarios.map((s, i) => (
                        <motion.div key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className="bg-card rounded-2xl p-8 border border-border hover:shadow-xl hover:border-primary/20 transition-all group"
                        >
                            <div className="flex items-start gap-4 mb-5">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <s.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold mb-2 ${s.badgeColor}`}>{s.badge}</span>
                                    <h3 className="font-display font-bold text-xl text-foreground">{s.title}</h3>
                                </div>
                            </div>

                            <div className="space-y-3 mb-5">
                                <div>
                                    <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Problem</span>
                                    <p className="text-sm text-muted-foreground mt-1">{s.problem}</p>
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Solution</span>
                                    <p className="text-sm text-foreground mt-1">{s.solution}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 mb-5">
                                {s.metrics.map((m, j) => (
                                    <span key={j} className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2.5 py-1 rounded-full text-xs font-medium">
                                        <m.icon className="w-3 h-3" /> {m.label}
                                    </span>
                                ))}
                            </div>

                            <div className="border-t border-border pt-4">
                                <p className="text-sm italic text-muted-foreground">"{s.quote}"</p>
                                <p className="text-xs text-muted-foreground mt-1">— {s.author}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
