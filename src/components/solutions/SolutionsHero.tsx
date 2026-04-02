import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Calculator } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const roles = [
    {
        id: "owner",
        label: "Administrator",
        eyebrow: "For Administrators",
        headline: "Grow your organization without growing your payroll",
        sub: "Stop losing patients to missed calls. Breeh answers 24/7 so you capture every opportunity.",
        benefits: ["Capture 35% more new patients", "Reduce administrative overhead significantly", "Real-time performance dashboard"],
        cta: "Calculate my ROI",
        visual: "📊",
    },
    {
        id: "manager",
        label: "Operations Manager",
        eyebrow: "For Operations Managers",
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
        id: "exec",
        label: "Health System Executive",
        eyebrow: "For Health System Executives",
        headline: "Standardize patient experience across all locations",
        sub: "One platform, every location. Unified analytics, consistent quality, total control.",
        benefits: ["Unified multi-location dashboard", "Standardized call handling", "Enterprise SLA guarantees"],
        cta: "Schedule executive demo",
        visual: "🏢",
    },
];

const SolutionsHero = () => {
    const [activeRole, setActiveRole] = useState(roles[0]);
    const [calls, setCalls] = useState(30);
    const savedPerMonth = Math.round(calls * 0.25 * 250);

    return (
        <section
            className="relative overflow-hidden pt-32 sm:pt-36 pb-20 px-6 lg:px-8"
            style={{ background: "linear-gradient(135deg, hsl(244 58% 65%), hsl(244 55% 58%))" }}
        >
            {/* Subtle dot overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

            {/* Role selector */}
            <div className="relative z-20 mb-12">
                <div className="flex justify-center gap-2 flex-wrap max-w-4xl mx-auto">
                    {roles.map((r) => (
                        <button key={r.id} onClick={() => setActiveRole(r)}
                            className="relative px-5 py-2 rounded-full text-sm font-medium transition-all">
                            {activeRole.id === r.id && (
                                <motion.span layoutId="solRolePill" transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    className="absolute inset-0 bg-white rounded-full shadow-lg" />
                            )}
                            <span className={`relative z-10 ${activeRole.id === r.id ? "text-primary" : "text-white/70 hover:text-white"}`}>{r.label}</span>
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
                            <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-5">
                                {activeRole.eyebrow}
                            </span>
                            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-[44px] text-white mb-6 leading-[1.15]">
                                {activeRole.headline}
                            </h1>
                            <p className="text-lg text-white/80 max-w-xl mb-8 leading-relaxed">{activeRole.sub}</p>
                            <div className="space-y-3 mb-8">
                                {activeRole.benefits.map((b, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-white shrink-0" />
                                        <span className="text-white font-medium">{b}</span>
                                    </div>
                                ))}
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => window.open(SITE_CONFIG.calendlyUrl, "_blank")}
                                className="bg-white text-primary px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
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
                            className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 shadow-xl relative overflow-hidden"
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
                                            <span className="text-white/70">{m.label}</span>
                                            <span className="font-bold text-white">{m.value}</span>
                                        </div>
                                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${m.bar}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.3 }}
                                                className="h-full bg-white rounded-full"
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
                    className="mt-16 max-w-lg mx-auto bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-6"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Calculator className="w-5 h-5 text-white" />
                        <h3 className="font-bold text-sm text-white">Quick ROI Check</h3>
                    </div>
                    <label className="text-xs text-white/70">Calls per day: <span className="font-bold text-white">{calls}</span></label>
                    <input
                        type="range"
                        min={10}
                        max={100}
                        value={calls}
                        onChange={(e) => setCalls(Number(e.target.value))}
                        className="w-full mt-2 accent-white"
                    />
                    <div className="flex justify-between text-[10px] text-white/50 -mt-1 mb-3">
                        <span>10</span><span>100</span>
                    </div>
                    <p className="text-center">
                        <span className="text-xs text-white/70">You could save </span>
                        <span className="font-display font-bold text-2xl text-white">${savedPerMonth.toLocaleString()}</span>
                        <span className="text-xs text-white/70">/month</span>
                    </p>
                    <a href="#roi" className="block text-center text-xs text-white font-semibold mt-2 hover:underline">Full calculator →</a>
                </motion.div>
            </div>
        </section>
    );
};

export default SolutionsHero;
