import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Minus, ArrowRight } from "lucide-react";

type Feature = { name: string; essentials: boolean | "partial"; professional: boolean | "partial"; enterprise: boolean | "partial" };

const categories: { name: string; features: Feature[] }[] = [
    {
        name: "Call Handling",
        features: [
            { name: "24/7 AI answering", essentials: true, professional: true, enterprise: true },
            { name: "Multi-language support", essentials: false, professional: true, enterprise: true },
            { name: "Custom call routing", essentials: "partial", professional: true, enterprise: true },
            { name: "Live call transfer", essentials: true, professional: true, enterprise: true },
        ],
    },
    {
        name: "Scheduling",
        features: [
            { name: "PMS sync", essentials: true, professional: true, enterprise: true },
            { name: "Multi-location scheduling", essentials: false, professional: true, enterprise: true },
            { name: "Automated confirmations", essentials: true, professional: true, enterprise: true },
            { name: "Waitlist management", essentials: false, professional: true, enterprise: true },
        ],
    },
    {
        name: "Intelligence",
        features: [
            { name: "Basic analytics", essentials: true, professional: true, enterprise: true },
            { name: "Advanced analytics", essentials: false, professional: true, enterprise: true },
            { name: "Custom AI training", essentials: false, professional: false, enterprise: true },
            { name: "Custom call scripts", essentials: false, professional: "partial", enterprise: true },
        ],
    },
    {
        name: "Support",
        features: [
            { name: "Email support", essentials: true, professional: true, enterprise: true },
            { name: "Priority chat", essentials: false, professional: true, enterprise: true },
            { name: "Dedicated CSM", essentials: false, professional: false, enterprise: true },
            { name: "Onsite training", essentials: false, professional: false, enterprise: true },
        ],
    },
    {
        name: "Security",
        features: [
            { name: "HIPAA compliant", essentials: true, professional: true, enterprise: true },
            { name: "SOC 2 Type II", essentials: true, professional: true, enterprise: true },
            { name: "Custom contracts", essentials: false, professional: false, enterprise: true },
            { name: "BAA included", essentials: true, professional: true, enterprise: true },
        ],
    },
];

const plans = [
    { name: "Essentials", key: "essentials" as const, price: "$299/mo" },
    { name: "Professional", key: "professional" as const, price: "$599/mo", popular: true },
    { name: "Enterprise", key: "enterprise" as const, price: "Custom" },
];

const wizardQuestions = [
    { q: "How many locations?", options: ["1", "2–5", "6–10", "10+"] },
    { q: "Daily call volume?", options: ["<20", "20–50", "50–100", "100+"] },
    { q: "Need custom integrations?", options: ["No", "Maybe", "Yes"] },
];

function getRecommendation(answers: number[]): string {
    if (answers[0] >= 3 || answers[2] >= 2) return "Enterprise";
    if (answers[0] >= 1 || answers[1] >= 2) return "Professional";
    return "Essentials";
}

function FeatureIcon({ status }: { status: boolean | "partial" }) {
    if (status === true) return <Check className="w-4 h-4 text-primary mx-auto" />;
    if (status === "partial") return <Minus className="w-4 h-4 text-yellow-500 mx-auto" />;
    return <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />;
}

const SolutionsComparison = () => {
    const [answers, setAnswers] = useState<number[]>([-1, -1, -1]);
    const allAnswered = answers.every((a) => a >= 0);
    const recommendation = allAnswered ? getRecommendation(answers) : null;

    return (
        <section className="py-28 px-6 lg:px-8 section-alt">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                        Compare
                    </motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">Find your perfect fit</motion.h2>
                </div>

                {/* Table */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    className="bg-card rounded-2xl border border-border overflow-auto mb-12">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-border bg-muted/50">
                                <th className="text-left p-4 font-medium text-muted-foreground w-48">Feature</th>
                                {plans.map((p) => (
                                    <th key={p.key} className="p-4 text-center w-40">
                                        <p className={`font-bold ${p.popular ? "text-primary" : "text-foreground"}`}>{p.name}</p>
                                        <p className="text-xs text-muted-foreground">{p.price}</p>
                                        {p.popular && <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full">Popular</span>}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((cat) => (
                                <>
                                    <tr key={cat.name + "-h"} className="border-b border-border bg-muted/30">
                                        <td colSpan={4} className="p-3 text-xs font-bold text-foreground uppercase tracking-wider">{cat.name}</td>
                                    </tr>
                                    {cat.features.map((f) => (
                                        <tr key={f.name} className="border-b border-border hover:bg-muted/20 transition-colors">
                                            <td className="p-4 text-foreground">{f.name}</td>
                                            <td className="p-4 text-center"><FeatureIcon status={f.essentials} /></td>
                                            <td className="p-4 text-center"><FeatureIcon status={f.professional} /></td>
                                            <td className="p-4 text-center"><FeatureIcon status={f.enterprise} /></td>
                                        </tr>
                                    ))}
                                </>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                {/* Recommendation wizard */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="bg-card rounded-2xl p-8 border border-border max-w-3xl mx-auto">
                    <h3 className="font-display font-bold text-lg text-foreground text-center mb-6">Not sure which to choose?</h3>
                    <div className="space-y-6">
                        {wizardQuestions.map((wq, qi) => (
                            <div key={qi}>
                                <p className="text-sm font-medium text-foreground mb-2">{wq.q}</p>
                                <div className="flex flex-wrap gap-2">
                                    {wq.options.map((opt, oi) => (
                                        <button key={oi} onClick={() => setAnswers((a) => { const n = [...a]; n[qi] = oi; return n; })}
                                            className={`px-4 py-2 rounded-lg text-sm transition-all ${answers[qi] === oi ? "bg-primary text-white shadow-md" : "bg-muted text-muted-foreground hover:text-foreground"
                                                }`}>{opt}</button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    {recommendation && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                            className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20 text-center">
                            <p className="text-sm text-muted-foreground">We recommend:</p>
                            <p className="font-display font-bold text-xl text-primary mt-1">{recommendation}</p>
                            <button onClick={() => window.open("https://calendly.com", "_blank")}
                                className="mt-3 inline-flex items-center gap-1 text-sm text-primary font-semibold hover:gap-2 transition-all">
                                Get started <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default SolutionsComparison;
