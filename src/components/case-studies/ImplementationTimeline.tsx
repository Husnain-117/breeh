import { motion } from "framer-motion";
import { Check, Calendar, ArrowRight, Flag, Target, Zap } from "lucide-react";

interface Milestone {
    day: number;
    title: string;
    desc: string;
    icon: any;
    quote?: string;
    team?: {
        name: string;
        avatar: string;
    };
}

const milestones: Milestone[] = [
    {
        day: 1,
        title: "Discovery & Setup",
        desc: "Breeh team reviews practice protocols, scripts, and PMS configuration.",
        icon: Target,
        quote: "Actually seeing our practice rules turned into AI logic was fascinating.",
        team: { name: "Sarah, Office Mgr", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" }
    },
    {
        day: 2,
        title: "Voice Customization",
        desc: "Selection of voice persona and custom greeting recordings.",
        icon: Zap
    },
    {
        day: 3,
        title: "Integration Sync",
        desc: "Live two-way sync established with Dentrix/Open Dental.",
        icon: Check
    },
    {
        day: 5,
        title: "Live Deployment",
        desc: "AI handling real patient calls. Real-time dashboard monitoring.",
        icon: Flag,
        quote: "The zero-latency transition to live calls was smoother than we expected.",
        team: { name: "Dr. Miller", avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop" }
    },
];

const ImplementationTimeline = () => {
    return (
        <section className="py-24 px-6 bg-surface/30">
            <div className="container max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                        The Journey
                    </motion.span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">Fast-track to live</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From discovery to active patient engagement in 5 business days.</p>
                </div>

                {/* Desktop Timeline (Horizontal) */}
                <div className="hidden lg:block relative pb-20 mt-20">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

                    <div className="flex justify-between items-stretch gap-6">
                        {milestones.map((m, i) => (
                            <motion.div
                                key={m.day}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex-1 relative"
                            >
                                {/* Milestone Node */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                    <div className="w-12 h-12 rounded-full bg-background border-4 border-primary flex items-center justify-center text-primary shadow-xl">
                                        <m.icon className="w-5 h-5" />
                                    </div>
                                </div>

                                {/* Day Badge */}
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                    Day {m.day}
                                </div>

                                {/* Card */}
                                <div className={`mt-12 bg-card rounded-3xl p-8 border border-border hover:border-primary/30 transition-all group ${i % 2 === 0 ? "translate-y-4" : "-translate-y-32"}`}>
                                    <h4 className="font-bold text-xl mb-3">{m.title}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{m.desc}</p>

                                    {m.quote && (
                                        <div className="pt-6 border-t border-border">
                                            <p className="text-xs italic text-muted-foreground mb-4">"{m.quote}"</p>
                                            {m.team && (
                                                <div className="flex items-center gap-2">
                                                    <div className="w-6 h-6 rounded-full overflow-hidden">
                                                        <img src={m.team.avatar} alt={m.team.name} className="w-full h-full object-cover" />
                                                    </div>
                                                    <span className="text-[10px] font-bold text-foreground">
                                                        — {m.team.name}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile Timeline (Vertical) */}
                <div className="lg:hidden space-y-8 mt-12">
                    {milestones.map((m, i) => (
                        <motion.div
                            key={m.day}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex gap-6"
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-lg">
                                    {m.day}
                                </div>
                                <div className="flex-1 w-0.5 bg-border mt-2" />
                            </div>
                            <div className="flex-1 bg-card rounded-2xl p-6 border border-border">
                                <h4 className="font-bold mb-2">Day {m.day}: {m.title}</h4>
                                <p className="text-sm text-muted-foreground mb-4">{m.desc}</p>
                                {m.quote && <p className="text-xs italic text-muted-foreground border-l-2 border-primary pl-3">"{m.quote}"</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Progress Summary */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-card rounded-3xl border border-border"
                >
                    <div className="flex items-center gap-6">
                        <div className="relative w-24 h-24">
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10" className="text-muted" />
                                <motion.circle
                                    cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10"
                                    className="text-primary"
                                    strokeDasharray="283"
                                    initial={{ strokeDashoffset: 283 }}
                                    whileInView={{ strokeDashoffset: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center font-bold font-display text-xl">100%</div>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Implementation Efficiency</h4>
                            <p className="text-sm text-muted-foreground">98% of practices go live within the 5-day window.</p>
                        </div>
                    </div>

                    <button className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all w-full md:w-auto justify-center">
                        Start your journey <ArrowRight className="w-5 h-5" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default ImplementationTimeline;
