import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    PhoneCall, Calendar, Bell, BarChart3, MapPin, Plug,
    MessageSquare, Clock, TrendingUp
} from "lucide-react";

const categories = ["All", "Call Handling", "Scheduling", "Follow-ups", "Analytics"];

const features = [
    {
        title: "Smart Call Answering",
        desc: "AI answers every call with natural conversation. Handles scheduling, questions, and emergencies with infinite patience.",
        icon: PhoneCall,
        category: "Call Handling",
        size: "large", // col-span-2
        gradient: true,
    },
    {
        title: "Intelligent Scheduling",
        desc: "Real-time availability sync across all locations. AI books, rebooks, and manages your entire calendar automatically.",
        icon: Calendar,
        category: "Scheduling",
        size: "tall", // row-span-2
    },
    {
        title: "Automated Follow-ups",
        desc: "Recall notices, confirmations, and post-visit care messages via SMS and email. Never lose a patient to forgetfulness.",
        icon: Bell,
        category: "Follow-ups",
        size: "medium",
    },
    {
        title: "Instant Response",
        desc: "Answer calls in under 500ms. Patients never wait, even during peak hours or after-hours.",
        icon: Clock,
        category: "Call Handling",
        size: "small",
    },
    {
        title: "Analytics Dashboard",
        desc: "Real-time insights into call volume, booking rates, and patient satisfaction. Track ROI with precision.",
        icon: BarChart3,
        category: "Analytics",
        size: "wide", // col-span-2
    },
    {
        title: "Multi-Location",
        desc: "Manage all locations from one dashboard with location-specific protocols.",
        icon: MapPin,
        category: "Analytics",
        size: "small",
    },
    {
        title: "Two-Way SMS",
        desc: "Engage patients in natural text conversations for confirmations, questions, and updates.",
        icon: MessageSquare,
        category: "Follow-ups",
        size: "small",
    },
    {
        title: "PMS Integrations",
        desc: "Works with Dentrix, Eaglesoft, Open Dental, and 30+ other systems out of the box.",
        icon: Plug,
        category: "Scheduling",
        size: "small",
    },
];

const FeaturesGrid = () => {
    const [activeCat, setActiveCat] = useState("All");

    const filtered = activeCat === "All"
        ? features
        : features.filter((f) => f.category === activeCat);

    return (
        <section className="py-28 px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5"
                    >
                        Capabilities
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4"
                    >
                        Everything your front desk needs
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        From call answering to analytics, Breeh handles it all.
                    </motion.p>
                </div>

                {/* Category tabs */}
                <div className="flex justify-center gap-2 mb-12 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCat(cat)}
                            className="relative px-5 py-2 rounded-full text-sm font-medium transition-all"
                        >
                            {activeCat === cat && (
                                <motion.span
                                    layoutId="featureCatPill"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/20"
                                />
                            )}
                            <span className={`relative z-10 ${activeCat === cat ? "text-white" : "text-muted-foreground hover:text-foreground"}`}>
                                {cat}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Bento grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCat}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[180px]"
                    >
                        {filtered.map((feat, i) => {
                            const sizeClasses =
                                feat.size === "large" ? "md:col-span-2 md:row-span-2" :
                                    feat.size === "tall" ? "md:row-span-2" :
                                        feat.size === "wide" ? "md:col-span-2" :
                                            "";

                            return (
                                <motion.div
                                    key={feat.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06 }}
                                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                                    className={`group relative rounded-3xl p-6 border overflow-hidden cursor-default transition-all duration-500 flex flex-col ${sizeClasses} ${feat.gradient
                                            ? "bg-gradient-to-br from-primary/10 to-purple-500/5 border-primary/20 hover:border-primary/40 hover:shadow-xl"
                                            : "bg-card border-border hover:border-primary/20 hover:shadow-lg"
                                        }`}
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${feat.gradient ? "bg-primary/15 text-primary" : "bg-primary/10 text-primary"
                                        }`}>
                                        <feat.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-display font-bold text-lg text-foreground mb-2">{feat.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{feat.desc}</p>

                                    {/* Decorative corner accent */}
                                    {feat.gradient && (
                                        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                                    )}
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default FeaturesGrid;
