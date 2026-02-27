import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, ArrowRight, Minus } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const plans = [
    {
        name: "Starter",
        desc: "For single-location practices",
        monthly: 299,
        annual: 239,
        popular: false,
        features: ["Up to 500 calls/month", "Basic scheduling", "Email support", "Standard integrations", "Call recording"],
        missing: ["Multi-location support", "Advanced analytics", "Custom AI training"],
        cta: "Start free trial",
    },
    {
        name: "Professional",
        desc: "For growing practices",
        monthly: 599,
        annual: 479,
        popular: true,
        features: ["Unlimited calls", "Smart scheduling", "Priority phone support", "Advanced analytics", "Multi-location (up to 5)", "Custom integrations", "SMS follow-ups"],
        missing: ["Dedicated account manager", "White-label options"],
        cta: "Start free trial",
    },
    {
        name: "Enterprise",
        desc: "For DSOs and large groups",
        monthly: null,
        annual: null,
        popular: false,
        features: ["Everything in Professional", "Unlimited locations", "Dedicated account manager", "SLA guarantees", "Custom AI training", "White-label options", "On-premise deployment", "API access"],
        missing: [],
        cta: "Contact sales",
    },
];

const PricingSection = () => {
    const [annual, setAnnual] = useState(true);

    const openCalendly = () => window.open(SITE_CONFIG.calendlyUrl, "_blank");

    return (
        <section className="py-28 px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                        Pricing
                    </motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
                        Simple, transparent pricing
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        No setup fees. No hidden costs. Cancel anytime.
                    </motion.p>
                </div>

                {/* Billing toggle */}
                <div className="flex justify-center items-center gap-4 mb-12">
                    <span className={`text-sm font-medium ${!annual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
                    <button onClick={() => setAnnual(!annual)}
                        className="relative w-14 h-7 rounded-full bg-muted p-1 transition-colors"
                        style={{ backgroundColor: annual ? "hsl(244 58% 61%)" : "" }}>
                        <motion.div className="w-5 h-5 rounded-full bg-white shadow-md" layout
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            style={{ marginLeft: annual ? "auto" : 0 }} />
                    </button>
                    <span className={`text-sm font-medium ${annual ? "text-foreground" : "text-muted-foreground"}`}>Annual</span>
                    {annual && (
                        <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                            className="bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full text-xs font-bold">
                            Save 20%
                        </motion.span>
                    )}
                </div>

                {/* Pricing cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start max-w-5xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative rounded-2xl p-8 border transition-all ${plan.popular
                                    ? "border-2 border-primary shadow-xl shadow-primary/10 md:scale-105 z-10 bg-card"
                                    : "border-border bg-card hover:border-primary/20"
                                }`}
                        >
                            {plan.popular && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Most Popular
                                </span>
                            )}
                            <h3 className={`font-display font-bold text-xl ${plan.popular ? "text-primary" : "text-foreground"}`}>{plan.name}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{plan.desc}</p>

                            <div className="mt-6 mb-6">
                                {plan.monthly ? (
                                    <>
                                        <span className="font-display font-bold text-4xl text-foreground">
                                            ${annual ? plan.annual : plan.monthly}
                                        </span>
                                        <span className="text-muted-foreground text-sm">/month</span>
                                        {annual && (
                                            <p className="text-xs text-muted-foreground mt-1">
                                                <span className="line-through">${plan.monthly}</span> billed annually
                                            </p>
                                        )}
                                    </>
                                ) : (
                                    <span className="font-display font-bold text-4xl text-foreground">Custom</span>
                                )}
                            </div>

                            <div className="space-y-3 mb-8">
                                {plan.features.map((f, j) => (
                                    <div key={j} className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                        <span className="text-sm text-foreground">{f}</span>
                                    </div>
                                ))}
                                {plan.missing.map((f, j) => (
                                    <div key={j} className="flex items-start gap-2 opacity-40">
                                        <Minus className="w-4 h-4 shrink-0 mt-0.5" />
                                        <span className="text-sm">{f}</span>
                                    </div>
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={openCalendly}
                                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${plan.popular
                                        ? "bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl"
                                        : "border border-border hover:border-primary hover:text-primary"
                                    }`}
                            >
                                {plan.cta} <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                {/* Guarantee */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 text-muted-foreground">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">30-Day Money-Back Guarantee</span>
                        <span className="text-xs">— No questions asked</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingSection;
