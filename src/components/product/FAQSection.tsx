import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, X, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const categories = ["All", "Getting Started", "Pricing", "Features", "Security"];

const faqs = [
    { q: "How quickly can I get started with Breeh?", a: "You can set up Breeh in as little as 5 minutes. Just connect your phone system through simple call forwarding, link your PMS, and you're live. No hardware installation required.", cat: "Getting Started" },
    { q: "Does Breeh work with my existing phone system?", a: "Yes! Breeh works with any phone system through simple call forwarding. Whether you use VoIP, landline, or RingCentral, our setup process is universal and takes minutes.", cat: "Getting Started" },
    { q: "What PMS systems does Breeh integrate with?", a: "We integrate with 50+ practice management systems including Dentrix, Eaglesoft, Open Dental, Curve Dental, Denticon, and more. Two-way sync ensures appointments and patient data stay up to date.", cat: "Features" },
    { q: "How does the AI handle complex patient questions?", a: "Breeh AI is trained on dental-specific scenarios and can handle scheduling, insurance questions, emergency triage, and general inquiries. For complex cases beyond its scope, it seamlessly transfers to your team with full context.", cat: "Features" },
    { q: "Is Breeh HIPAA compliant?", a: "Absolutely. Breeh is fully HIPAA compliant with SOC 2 Type II certification. All data is encrypted with AES-256, and we maintain comprehensive audit logs. We also sign BAAs with all healthcare clients.", cat: "Security" },
    { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel anytime with no penalties or hidden fees. We also offer a 30-day money-back guarantee — if you're not satisfied, you get a full refund, no questions asked.", cat: "Pricing" },
    { q: "What happens to my data if I cancel?", a: "Your data is securely exported and provided to you upon request. After 90 days, all data is permanently deleted from our systems in compliance with data retention policies.", cat: "Security" },
    { q: "Is there a free trial available?", a: "Yes! We offer a 14-day free trial with full access to all Professional plan features. No credit card required to start.", cat: "Pricing" },
    { q: "How does Breeh handle after-hours calls?", a: "Breeh operates 24/7/365. After-hours calls are handled with the same quality — AI answers, books appointments, handles emergencies, and sends you a summary for the morning.", cat: "Features" },
    { q: "Can I customize the AI's voice and responses?", a: "Yes, you can customize the AI's greeting, tone, and specific responses. Enterprise plans also include custom AI training on your specific protocols and FAQ.", cat: "Features" },
];

const FAQSection = () => {
    const [search, setSearch] = useState("");
    const [activeCat, setActiveCat] = useState("All");
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const filtered = faqs.filter((faq) => {
        const matchesCat = activeCat === "All" || faq.cat === activeCat;
        const matchesSearch = !search || faq.q.toLowerCase().includes(search.toLowerCase()) || faq.a.toLowerCase().includes(search.toLowerCase());
        return matchesCat && matchesSearch;
    });

    return (
        <section className="py-28 px-6 lg:px-8 bg-background">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                        FAQ
                    </motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
                        Questions? Answers.
                    </motion.h2>
                </div>

                {/* Search */}
                <div className="relative mb-8 max-w-2xl mx-auto">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search questions..."
                        className="w-full pl-12 pr-10 py-4 rounded-xl bg-muted border border-border text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary/40 outline-none text-foreground placeholder:text-muted-foreground/50 transition-all"
                    />
                    {search && (
                        <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </div>

                {/* Category tabs */}
                <div className="flex justify-center gap-2 mb-10 flex-wrap">
                    {categories.map((cat) => (
                        <button key={cat} onClick={() => { setActiveCat(cat); setOpenIndex(null); }}
                            className="relative px-4 py-2 rounded-full text-sm font-medium transition-all">
                            {activeCat === cat && (
                                <motion.span layoutId="faqCatPill" transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    className="absolute inset-0 bg-primary rounded-full" />
                            )}
                            <span className={`relative z-10 ${activeCat === cat ? "text-white" : "text-muted-foreground hover:text-foreground"}`}>{cat}</span>
                        </button>
                    ))}
                </div>

                {/* FAQ list */}
                <div className="space-y-3">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((faq, i) => {
                            const isOpen = openIndex === i;
                            return (
                                <motion.div
                                    key={faq.q}
                                    layout
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="bg-card rounded-xl border border-border overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : i)}
                                        className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-muted/50 transition-colors"
                                    >
                                        <span className="font-medium text-foreground pr-4">{faq.q}</span>
                                        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
                                            <Plus className="w-5 h-5 text-muted-foreground shrink-0" />
                                        </motion.div>
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-12 text-muted-foreground">
                        <p className="text-sm">No questions match your search.</p>
                    </div>
                )}

                {/* Contact CTA */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="mt-12 bg-muted rounded-2xl p-8 text-center border border-border">
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">Still have questions?</h3>
                    <p className="text-sm text-muted-foreground mb-5">Our team is here to help you get started.</p>
                    <button onClick={() => window.open(SITE_CONFIG.calendlyUrl, "_blank")}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all">
                        <MessageSquare className="w-4 h-4" /> Schedule a Call
                    </button>
                    <p className="text-xs text-muted-foreground mt-3">Average response: 2 minutes</p>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
