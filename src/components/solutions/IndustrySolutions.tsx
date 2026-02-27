import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const specialties = [
    {
        id: "general",
        label: "General Dentistry",
        challenges: "High daily call volume with routine scheduling, recall reminders, and insurance questions.",
        features: ["Automated recall scheduling", "Insurance verification", "New patient intake", "Appointment reminders"],
        caseStudy: { name: "Bright Smile Dental", result: "40% more bookings", quote: "Breeh handles our 50+ daily calls without breaking a sweat." },
    },
    {
        id: "ortho",
        label: "Orthodontics",
        challenges: "Long treatment plans requiring careful scheduling, payment coordination, and progress tracking.",
        features: ["Multi-visit scheduling", "Payment plan coordination", "Treatment progress updates", "Retainer check reminders"],
        caseStudy: { name: "SmileCraft Ortho", result: "30% fewer no-shows", quote: "Treatment compliance went up after Breeh started handling our follow-ups." },
    },
    {
        id: "oral-surgery",
        label: "Oral Surgery",
        challenges: "Complex pre-op consultations, medical history collection, and post-op follow-up requirements.",
        features: ["Pre-op checklist automation", "Medical history intake", "Post-op care instructions", "Insurance pre-authorization"],
        caseStudy: { name: "Allied OMS", result: "8 locations unified", quote: "Standardizing our call handling across all locations was a game changer." },
    },
    {
        id: "pediatric",
        label: "Pediatric Dentistry",
        challenges: "Parent communication, anxious patient management, and family scheduling across siblings.",
        features: ["Family scheduling coordination", "Parent-friendly communication", "Reward program reminders", "Emergency triage for children"],
        caseStudy: { name: "Danville Pediatric", result: "Saved 20 hrs/week", quote: "Parents love the instant response, and our staff loves the quiet phones." },
    },
    {
        id: "perio",
        label: "Periodontics",
        challenges: "Specialized treatment scheduling, referral management, and compliance tracking.",
        features: ["Referral intake automation", "Maintenance scheduling", "Treatment plan follow-ups", "Specialist coordination"],
        caseStudy: { name: "Zen Dentistry", result: "25% more referrals", quote: "We never miss a referral call now, and the intake is flawless." },
    },
];

const IndustrySolutions = () => {
    const [active, setActive] = useState(specialties[0]);

    return (
        <section className="py-28 px-6 lg:px-8 section-alt">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                        Industries
                    </motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
                        Built for dental, ready for healthcare
                    </motion.h2>
                </div>

                {/* Specialty tabs */}
                <div className="flex justify-center gap-2 mb-12 flex-wrap">
                    {specialties.map((s) => (
                        <button key={s.id} onClick={() => setActive(s)}
                            className="relative px-4 py-2 rounded-full text-sm font-medium transition-all">
                            {active.id === s.id && (
                                <motion.span layoutId="indPill" transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/20" />
                            )}
                            <span className={`relative z-10 ${active.id === s.id ? "text-white" : "text-muted-foreground hover:text-foreground"}`}>{s.label}</span>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div key={active.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid lg:grid-cols-2 gap-12 items-start"
                    >
                        <div>
                            <h3 className="font-display font-bold text-2xl text-foreground mb-4">{active.label}</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">{active.challenges}</p>
                            <div className="space-y-3 mb-8">
                                {active.features.map((f, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-primary shrink-0" />
                                        <span className="text-sm text-foreground">{f}</span>
                                    </div>
                                ))}
                            </div>
                            <a href="/solutions" className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all">
                                View {active.label} solutions <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Case study teaser */}
                        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                            <span className="text-xs font-bold text-primary uppercase tracking-wider">Case Study</span>
                            <h4 className="font-display font-bold text-lg text-foreground mt-2 mb-1">
                                How {active.caseStudy.name} achieved {active.caseStudy.result}
                            </h4>
                            <p className="text-sm italic text-muted-foreground mb-4">"{active.caseStudy.quote}"</p>
                            <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                                {active.caseStudy.result}
                            </span>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default IndustrySolutions;
