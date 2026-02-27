import { motion } from "framer-motion";
import { Plug, Settings, RefreshCw, Rocket, ShieldCheck, Check, Mail, Phone, Users } from "lucide-react";

const steps = [
    { day: "Day 1", title: "Discovery", icon: Users, desc: "Understanding your workflows", activities: ["Call flow audit", "PMS review", "Staff interviews"], deliverable: "Custom configuration plan" },
    { day: "Day 2", title: "Setup", icon: Plug, desc: "Technical integration", activities: ["PMS connection", "Call routing setup", "AI training"], deliverable: "Working test environment" },
    { day: "Day 3", title: "Training", icon: Settings, desc: "Staff onboarding", activities: ["Dashboard walkthrough", "Best practices", "Q&A session"], deliverable: "Trained team + documentation" },
    { day: "Day 4", title: "Testing", icon: RefreshCw, desc: "Go-live preparation", activities: ["Parallel running", "Call quality review", "Fine-tuning"], deliverable: "Validated system" },
    { day: "Day 5", title: "Launch", icon: Rocket, desc: "You're live!", activities: ["Full cutover", "24/7 monitoring", "Celebration 🎉"], deliverable: "AI answering active", highlight: true },
];

const supportTiers = [
    { tier: "Essentials", features: ["Email support", "24h response", "Knowledge base", "Community forum"], icon: Mail },
    { tier: "Professional", features: ["Priority chat", "4h response", "Dedicated CSM", "Weekly reviews"], icon: Phone },
    { tier: "Enterprise", features: ["Phone support", "1h response", "Onsite training", "Custom SLAs"], icon: Users },
];

const ImplementationTimeline = () => {
    return (
        <section className="py-28 px-6 lg:px-8 section-alt">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                        Implementation
                    </motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
                        Go live in 5 days, not 5 months
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="text-lg text-muted-foreground">White-glove onboarding included with every plan.</motion.p>
                </div>

                {/* Timeline */}
                <div className="max-w-3xl mx-auto relative mb-16">
                    {/* Vertical line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

                    {steps.map((step, i) => (
                        <motion.div key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12 }}
                            className={`relative flex items-start gap-6 mb-8 md:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                } md:items-center`}
                        >
                            {/* Dot */}
                            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${step.highlight
                                        ? "bg-primary border-primary text-white shadow-lg shadow-primary/30"
                                        : "bg-card border-border text-primary"
                                    }`}>
                                    <step.icon className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                                }`}>
                                <div className={`p-5 rounded-xl ${step.highlight ? "bg-primary/5 border border-primary/20" : "bg-card border border-border"}`}>
                                    <div className="flex items-center gap-2 mb-1 md:justify-start">
                                        <span className="text-xs font-bold text-primary">{step.day}</span>
                                        <span className="text-xs text-muted-foreground">·</span>
                                        <span className="font-bold text-sm text-foreground">{step.title}</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-2">{step.desc}</p>
                                    <div className="space-y-1">
                                        {step.activities.map((a, j) => (
                                            <p key={j} className="text-xs text-foreground flex items-center gap-1">
                                                <Check className="w-3 h-3 text-primary shrink-0" /> {a}
                                            </p>
                                        ))}
                                    </div>
                                    <p className="text-[10px] text-muted-foreground mt-2 border-t border-border pt-2">
                                        Deliverable: {step.deliverable}
                                    </p>
                                </div>
                            </div>

                            {/* Spacer for alternating */}
                            <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                        </motion.div>
                    ))}
                </div>

                {/* Success guarantee */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="bg-card rounded-2xl p-8 border border-border text-center mb-12">
                    <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">100% Go-Live Guarantee</h3>
                    <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                        If we don't get you live in 5 days, we work free until you are. Average time to value: <span className="font-bold text-foreground">48 hours</span>.
                    </p>
                </motion.div>

                {/* Support tiers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {supportTiers.map((tier, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-card rounded-xl p-6 border border-border">
                            <tier.icon className="w-6 h-6 text-primary mb-3" />
                            <h4 className="font-bold text-sm text-foreground mb-3">{tier.tier} Support</h4>
                            <div className="space-y-2">
                                {tier.features.map((f, j) => (
                                    <p key={j} className="text-xs text-muted-foreground flex items-center gap-1.5">
                                        <Check className="w-3 h-3 text-primary shrink-0" /> {f}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImplementationTimeline;
