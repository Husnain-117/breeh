import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneOff, Users, DollarSign, Phone, Check, X, AlertTriangle } from "lucide-react";

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

const ProblemSolution = () => {
    const [showSolution, setShowSolution] = useState(false);
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const missedCalls = useCountUp(35, 2000, inView);
    const patientsLeave = useCountUp(72, 2000, inView);
    const revenueLoss = useCountUp(120, 2000, inView);

    const withoutBreeh = [
        { icon: X, text: "Calls go to voicemail during busy hours", color: "text-red-500" },
        { icon: X, text: "Patients leave for faster-responding providers", color: "text-red-500" },
        { icon: X, text: "Admin staff overwhelmed with repetitive tasks", color: "text-red-500" },
        { icon: X, text: "Revenue leaks from missed appointments", color: "text-red-500" },
    ];
    const withBreeh = [
        { icon: Check, text: "Every call answered in under 1 second", color: "text-green-600" },
        { icon: Check, text: "24/7 availability across all departments", color: "text-green-600" },
        { icon: Check, text: "Staff focuses on in-person patient care", color: "text-green-600" },
        { icon: Check, text: "Revenue grows with zero missed inquiries", color: "text-green-600" },
    ];

    return (
        <section className="py-20 px-6 lg:px-8 section-alt relative" ref={ref}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider mb-5">
                        The Problem
                    </motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="font-display font-bold text-3xl md:text-5xl text-foreground max-w-3xl mx-auto leading-tight mb-4">
                        Healthcare organizations lose significant revenue to missed patient calls
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Every unanswered call is a patient who schedules with another provider instead.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className="space-y-5">
                        {[
                            { icon: PhoneOff, value: `${missedCalls}%`, label: "of patient calls go unanswered during peak hours", iconColor: "text-red-500", bgColor: "bg-red-50" },
                            { icon: Users, value: `${patientsLeave}%`, label: "of patients book with whoever responds first", iconColor: "text-amber-500", bgColor: "bg-amber-50" },
                            { icon: DollarSign, value: `$${revenueLoss}K+`, label: "average annual revenue loss per organization", iconColor: "text-red-500", bgColor: "bg-red-50" },
                        ].map((stat, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                                className="flex items-center gap-5 bg-card rounded-2xl p-5 border border-border shadow-sm hover:shadow-md transition-shadow">
                                <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center ${stat.iconColor} shrink-0`}>
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-display font-bold text-2xl text-foreground">{stat.value}</p>
                                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}

                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
                            className="bg-card border-l-4 border-red-400 p-5 rounded-r-xl">
                            <p className="text-muted-foreground italic text-sm leading-relaxed mb-2">
                                "We were losing dozens of patient inquiries every week simply because our front desk couldn't keep up with the call volume."
                            </p>
                            <p className="text-xs font-semibold text-foreground">— Operations Director, Regional Health System</p>
                        </motion.div>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                        className="bg-card rounded-2xl p-7 shadow-xl border border-border">
                        <div className="relative flex bg-muted rounded-full p-1 mb-7">
                            <button onClick={() => setShowSolution(false)}
                                className={`flex-1 relative z-10 py-2.5 text-sm font-semibold rounded-full transition-colors ${!showSolution ? "text-white" : "text-muted-foreground"}`}>
                                Without Breeh
                            </button>
                            <button onClick={() => setShowSolution(true)}
                                className={`flex-1 relative z-10 py-2.5 text-sm font-semibold rounded-full transition-colors ${showSolution ? "text-white" : "text-muted-foreground"}`}>
                                With Breeh
                            </button>
                            <motion.div layout
                                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full ${showSolution ? "bg-primary" : "bg-red-500"}`}
                                style={{ left: showSolution ? "calc(50% + 2px)" : "2px" }}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div key={showSolution ? "with" : "without"} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-4">
                                <div className={`flex items-center gap-3 p-4 rounded-xl ${showSolution ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
                                    {showSolution ? <Phone className="w-7 h-7 text-green-600" /> : <AlertTriangle className="w-7 h-7 text-red-500" />}
                                    <div>
                                        <p className={`font-semibold text-sm ${showSolution ? "text-green-700" : "text-red-700"}`}>
                                            {showSolution ? "All calls answered instantly" : "35% of calls going to voicemail"}
                                        </p>
                                        <p className="text-xs text-muted-foreground mt-0.5">
                                            {showSolution ? "AI assistant active 24/7" : "During peak hours across departments"}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-2">
                                    {(showSolution ? withBreeh : withoutBreeh).map((item, i) => (
                                        <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} className="flex items-center gap-3">
                                            <item.icon className={`w-5 h-5 ${item.color} shrink-0`} />
                                            <span className="text-sm text-foreground">{item.text}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className={`mt-6 p-4 rounded-xl text-center ${showSolution ? "bg-primary/5" : "bg-red-50"}`}>
                                    <p className={`font-display font-bold text-2xl ${showSolution ? "text-primary" : "text-red-500"}`}>
                                        {showSolution ? "+40% Efficiency" : "-$120K/yr"}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {showSolution ? "Average operational improvement" : "Average revenue loss"}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
