import { motion } from "framer-motion";
import { Phone, Building2, Network, Check, ArrowRight, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const solutions = [
    {
        name: "Essentials",
        icon: Phone,
        tagline: "AI answering for single locations",
        bestFor: "1–2 location practices, 5–15 staff",
        price: "$299/month",
        features: ["24/7 call answering", "Smart scheduling", "Basic analytics", "Email support", "Standard integrations"],
        popular: false,
        iconBg: "bg-primary/10 text-primary",
    },
    {
        name: "Professional",
        icon: Building2,
        tagline: "Multi-location management",
        bestFor: "3–10 locations, growing groups",
        price: "$599/month",
        features: ["Everything in Essentials", "Multi-location dashboard", "Advanced analytics", "Priority support", "Custom integrations", "SMS follow-ups"],
        popular: true,
        iconBg: "bg-primary text-white",
    },
    {
        name: "Enterprise",
        icon: Network,
        tagline: "DSO and large group solutions",
        bestFor: "10+ locations, DSOs, PE-backed groups",
        price: "Custom",
        features: ["Everything in Professional", "White-label options", "Dedicated success manager", "SLA guarantees", "Custom AI training", "API access"],
        popular: false,
        iconBg: "bg-purple-500/10 text-purple-500",
    },
];

const SolutionsNavigator = () => {
    const openCalendly = () => window.open(SITE_CONFIG.calendlyUrl, "_blank");

    return (
        <section className="py-28 px-6 lg:px-8 section-alt">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                        Solutions
                    </motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
                        Find your perfect solution
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Every practice is different. Find the setup that works for yours.
                    </motion.p>
                </div>

                {/* Solution cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start max-w-5xl mx-auto">
                    {solutions.map((sol, i) => (
                        <motion.div key={sol.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className={`relative rounded-2xl p-8 transition-all ${sol.popular
                                    ? "border-2 border-primary shadow-xl shadow-primary/10 md:scale-105 z-10 bg-card"
                                    : "bg-card border border-border hover:border-primary/30 hover:shadow-lg"
                                }`}
                        >
                            {sol.popular && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Most Popular
                                </span>
                            )}
                            <div className={`w-12 h-12 rounded-xl ${sol.iconBg} flex items-center justify-center mb-4`}>
                                <sol.icon className="w-6 h-6" />
                            </div>
                            <h3 className={`font-display font-bold text-2xl ${sol.popular ? "text-primary" : "text-foreground"}`}>{sol.name}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{sol.tagline}</p>

                            <div className="mt-3 mb-5">
                                <span className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground">Best for: {sol.bestFor}</span>
                            </div>

                            <p className="font-display font-bold text-2xl text-foreground mb-5">{sol.price}</p>

                            <div className="space-y-3 mb-8">
                                {sol.features.map((f, j) => (
                                    <div key={j} className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                        <span className="text-sm text-foreground">{f}</span>
                                    </div>
                                ))}
                            </div>

                            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={openCalendly}
                                className={`w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${sol.popular ? "bg-primary text-white shadow-lg shadow-primary/25" : "border border-border hover:border-primary hover:text-primary"
                                    }`}>
                                {sol.popular ? "Get started" : sol.price === "Custom" ? "Contact sales" : "Learn more"}
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                {/* Solution wizard CTA */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    className="mt-12 text-center">
                    <p className="text-muted-foreground mb-3">Not sure which fits?</p>
                    <button onClick={openCalendly}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-muted text-foreground text-sm font-semibold hover:bg-primary/10 hover:text-primary transition-all">
                        <Sparkles className="w-4 h-4" /> Take 60-second assessment
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default SolutionsNavigator;
