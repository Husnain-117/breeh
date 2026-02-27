import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Calculator } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const roles = [
    {
        id: "owner",
        label: "Practice Owner",
        eyebrow: "For Practice Owners",
        headline: "Grow your practice without growing your payroll",
        sub: "Stop losing patients to missed calls. Breeh answers 24/7 so you capture every opportunity.",
        benefits: ["Capture 35% more new patients", "Reduce overhead by $50K/year", "Real-time performance dashboard"],
        cta: "Calculate my ROI",
        visual: "📊",
    },
    {
        id: "manager",
        label: "Office Manager",
        eyebrow: "For Office Managers",
        headline: "Finally get ahead of the phones",
        sub: "Let Breeh handle routine calls so your team can focus on the patients right in front of them.",
        benefits: ["Automate 80% of routine calls", "Eliminate hold-time complaints", "Consistent patient experience"],
        cta: "See admin dashboard",
        visual: "📋",
    },
    {
        id: "it",
        label: "IT Director",
        eyebrow: "For IT Directors",
        headline: "Deploy AI without the infrastructure headache",
        sub: "HIPAA-compliant, SOC 2 certified, zero infrastructure to manage. Just works.",
        benefits: ["HIPAA-compliant by design", "50+ native integrations", "No servers to manage"],
        cta: "View security docs",
        visual: "🛡️",
    },
    {
        id: "dso",
        label: "DSO Executive",
        eyebrow: "For DSO Executives",
        headline: "Standardize patient experience across all locations",
        sub: "One platform, every location. Unified analytics, consistent quality, total control.",
        benefits: ["Unified multi-location dashboard", "Standardized call handling", "Enterprise SLA guarantees"],
        cta: "Schedule DSO demo",
        visual: "🏢",
    },
];

const SolutionsHero = () => {
    const [activeRole, setActiveRole] = useState(roles[0]);
    const [calls, setCalls] = useState(30);
    const savedPerMonth = Math.round(calls * 0.25 * 250);

    return (
        <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden pt-24 pb-16 px-6 lg:px-8">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-400/5 rounded-full blur-[120px]" />
            </div>

            {/* Role selector */}
            <div className="sticky top-20 z-20 bg-background/80 backdrop-blur-xl border-b border-border py-3 -mx-6 px-6 lg:-mx-8 lg:px-8 mb-12">
                <div className="flex justify-center gap-2 flex-wrap max-w-4xl mx-auto">
                    {roles.map((r) => (
                        <button key={r.id} onClick={() => setActiveRole(r)}
                            className="relative px-5 py-2 rounded-full text-sm font-medium transition-all">
                            {activeRole.id === r.id && (
                                <motion.span layoutId="solRolePill" transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/20" />
                            )}
                            <span className={`relative z-10 ${activeRole.id === r.id ? "text-white" : "text-muted-foreground hover:text-foreground"}`}>{r.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left — Dynamic content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeRole.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                                {activeRole.eyebrow}
                            </span>
                            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                                {activeRole.headline}
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">{activeRole.sub}</p>
                            <div className="space-y-3 mb-8">
                                {activeRole.benefits.map((b, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-primary shrink-0" />
                                        <span className="text-foreground font-medium">{b}</span>
                                    </div>
                                ))}
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => window.open(SITE_CONFIG.calendlyUrl, "_blank")}
                                className="btn-primary flex items-center gap-2 px-8 py-4 text-lg"
                            >
                                {activeRole.cta} <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </motion.div>
                    </AnimatePresence>

                    {/* Right — Contextual visual */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeRole.id + "-vis"}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="bg-card rounded-3xl border border-border p-8 shadow-xl relative overflow-hidden"
                        >
                            <div className="text-center text-6xl mb-6">{activeRole.visual}</div>
                            <div className="space-y-4">
                                {[
                                    { label: "Calls Answered", value: "100%", bar: 100 },
                                    { label: "Patient Satisfaction", value: "98%", bar: 98 },
                                    { label: "Staff Time Saved", value: "15 hrs/wk", bar: 75 },
                                ].map((m) => (
                                    <div key={m.label}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-muted-foreground">{m.label}</span>
                                            <span className="font-bold text-foreground">{m.value}</span>
                                        </div>
                                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${m.bar}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.3 }}
                                                className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Quick ROI Calculator */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 max-w-lg mx-auto bg-card rounded-2xl shadow-2xl border border-border p-6"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Calculator className="w-5 h-5 text-primary" />
                        <h3 className="font-bold text-sm text-foreground">Quick ROI Check</h3>
                    </div>
                    <label className="text-xs text-muted-foreground">Calls per day: <span className="font-bold text-foreground">{calls}</span></label>
                    <input
                        type="range"
                        min={10}
                        max={100}
                        value={calls}
                        onChange={(e) => setCalls(Number(e.target.value))}
                        className="w-full mt-2 accent-primary"
                    />
                    <div className="flex justify-between text-[10px] text-muted-foreground -mt-1 mb-3">
                        <span>10</span><span>100</span>
                    </div>
                    <p className="text-center">
                        <span className="text-xs text-muted-foreground">You could save </span>
                        <span className="font-display font-bold text-2xl text-primary">${savedPerMonth.toLocaleString()}</span>
                        <span className="text-xs text-muted-foreground">/month</span>
                    </p>
                    <a href="#roi" className="block text-center text-xs text-primary font-semibold mt-2 hover:underline">Full calculator →</a>
                </motion.div>
            </div>
        </section>
    );
};

export default SolutionsHero;
