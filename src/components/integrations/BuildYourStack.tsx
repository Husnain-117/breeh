import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, AlertTriangle, Sparkles, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const stackCategories = [
    {
        name: "Practice Management",
        options: [
            { name: "Dentrix", emoji: "🦷", price: "Included" },
            { name: "Open Dental", emoji: "🔗", price: "Included" },
            { name: "Eaglesoft", emoji: "🦅", price: "Included" },
            { name: "Curve Dental", emoji: "☁️", price: "Included" },
        ],
    },
    {
        name: "Communication",
        options: [
            { name: "RevenueWell", emoji: "📧", price: "Included" },
            { name: "Weave", emoji: "📞", price: "Included" },
            { name: "Salesforce", emoji: "☁️", price: "+$49/mo" },
            { name: "RingCentral", emoji: "📱", price: "Included" },
        ],
    },
    {
        name: "Other Tools",
        options: [
            { name: "Stripe", emoji: "💳", price: "Included" },
            { name: "Google Calendar", emoji: "📅", price: "Free" },
            { name: "Mailchimp", emoji: "✉️", price: "Included" },
            { name: "Dexis", emoji: "📷", price: "Included" },
        ],
    },
];

const templates = [
    { name: "Starter Stack", picks: ["Dentrix", "Google Calendar", "Stripe"] },
    { name: "Growth Stack", picks: ["Open Dental", "RevenueWell", "Stripe", "Mailchimp"] },
    { name: "Enterprise Suite", picks: ["Dentrix", "Salesforce", "Weave", "Stripe", "Dexis", "Mailchimp"] },
];

const BuildYourStack = () => {
    const [selected, setSelected] = useState<string[]>([]);

    const toggle = (name: string) => {
        setSelected((p) => p.includes(name) ? p.filter((n) => n !== name) : [...p, name]);
    };

    const applyTemplate = (picks: string[]) => setSelected(picks);
    const totalSetup = selected.length * 5;

    return (
        <section className="py-28 px-6 lg:px-8 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                        Stack Builder
                    </motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
                        Build your perfect integration stack
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="text-lg text-muted-foreground">Mix and match integrations. We'll check compatibility and calculate your setup.</motion.p>
                </div>

                {/* Templates */}
                <div className="flex justify-center gap-3 mb-10 flex-wrap">
                    {templates.map((t) => (
                        <button key={t.name} onClick={() => applyTemplate(t.picks)}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-muted text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-all">
                            <Sparkles className="w-3 h-3" /> {t.name}
                        </button>
                    ))}
                </div>

                <div className="grid lg:grid-cols-[1fr_300px] gap-8">
                    {/* Category sections */}
                    <div className="space-y-8">
                        {stackCategories.map((cat) => (
                            <div key={cat.name} className="border-b border-border pb-6 last:border-0">
                                <h3 className="font-bold text-sm text-foreground mb-4">{cat.name}</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {cat.options.map((opt) => {
                                        const isSelected = selected.includes(opt.name);
                                        return (
                                            <motion.button key={opt.name}
                                                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                                onClick={() => toggle(opt.name)}
                                                className={`relative rounded-xl p-4 text-left transition-all ${isSelected ? "border-2 border-primary bg-primary/5 shadow-lg" : "border-2 border-transparent bg-card hover:border-primary/30"
                                                    }`}
                                            >
                                                {isSelected && <Check className="absolute top-2 right-2 w-4 h-4 text-primary" />}
                                                <span className="text-2xl block mb-2">{opt.emoji}</span>
                                                <p className="font-medium text-sm text-foreground">{opt.name}</p>
                                                <p className="text-[10px] text-muted-foreground">{opt.price}</p>
                                            </motion.button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary sidebar */}
                    <div className="lg:sticky lg:top-32 h-fit">
                        <div className="bg-card rounded-2xl p-6 border border-border shadow-xl">
                            <h3 className="font-bold text-sm text-foreground mb-4">Your Stack ({selected.length})</h3>
                            {selected.length === 0 ? (
                                <p className="text-xs text-muted-foreground">Select integrations to build your stack.</p>
                            ) : (
                                <div className="space-y-2 mb-4">
                                    {selected.map((name) => (
                                        <div key={name} className="flex items-center justify-between text-sm">
                                            <span className="text-foreground">{name}</span>
                                            <button onClick={() => toggle(name)} className="text-muted-foreground hover:text-red-500 transition"><X className="w-3 h-3" /></button>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {selected.length > 0 && (
                                <>
                                    <div className="border-t border-border pt-3 space-y-2 text-xs">
                                        <div className="flex justify-between"><span className="text-muted-foreground">Setup time</span><span className="font-semibold text-foreground">~{totalSetup} min</span></div>
                                        <div className="flex justify-between"><span className="text-muted-foreground">Status</span>
                                            <span className="flex items-center gap-1 text-green-600 font-semibold"><Check className="w-3 h-3" /> Compatible</span>
                                        </div>
                                    </div>
                                    <button onClick={() => window.open(SITE_CONFIG.calendlyUrl, "_blank")}
                                        className="w-full mt-4 bg-primary text-white py-3 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center justify-center gap-2">
                                        Install all <ArrowRight className="w-4 h-4" />
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuildYourStack;
