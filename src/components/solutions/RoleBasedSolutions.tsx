import { motion } from "framer-motion";
import { Briefcase, Headphones, Smile, Shield, Check, ArrowRight } from "lucide-react";

const personas = [
    {
        icon: Briefcase,
        title: "Practice Owner",
        focus: "Growth & Revenue",
        gradient: true,
        pains: ["Missing new patient opportunities", "Rising staffing costs", "No visibility into front desk"],
        benefits: ["Capture 35% more leads", "Reduce overhead by $50K/year", "Real-time performance dashboard"],
        cta: "Owner's guide to AI",
    },
    {
        icon: Headphones,
        title: "Office Manager",
        focus: "Operations & Efficiency",
        gradient: false,
        pains: ["Constantly putting out fires", "Staff turnover and training", "Patient complaints about hold times"],
        benefits: ["Automate routine tasks", "Consistent patient experience", "Focus on complex issues"],
        cta: "See admin dashboard",
    },
    {
        icon: Smile,
        title: "Front Desk Team",
        focus: "Workload & Satisfaction",
        gradient: false,
        pains: ["Overwhelmed by call volume", "Multitasking chaos", "Stress and burnout"],
        benefits: ["AI handles routine calls", "Focus on in-office patients", "Better work-life balance"],
        cta: "Staff testimonials",
    },
    {
        icon: Shield,
        title: "IT Director",
        focus: "Security & Integration",
        gradient: false,
        pains: ["Data security concerns", "Integration complexity", "Compliance requirements"],
        benefits: ["HIPAA-compliant by design", "50+ native integrations", "No infrastructure to manage"],
        cta: "Security documentation",
    },
];

const beforeAfter = [
    { time: "8:00 AM", before: "20 voicemails from overnight", after: "0 voicemails — all handled by Breeh" },
    { time: "10:00 AM", before: "3 calls on hold, 2 patients waiting", after: "Routine calls auto-handled, staff focuses on patients" },
    { time: "12:00 PM", before: "Lunch rush chaos, missed calls spike", after: "AI handles peak volume seamlessly" },
    { time: "3:00 PM", before: "Playing phone tag with 8 patients", after: "Follow-ups sent automatically via SMS" },
    { time: "5:00 PM", before: "Staff exhausted, tomorrow's calls already piling", after: "Staff leaves on time, Breeh takes over" },
];

const RoleBasedSolutions = () => {
    return (
        <section className="py-28 px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                        By Role
                    </motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
                        Built for every member of your team
                    </motion.h2>
                </div>

                {/* Persona cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
                    {personas.map((p, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className={`rounded-2xl p-6 transition-all ${p.gradient ? "bg-gradient-to-b from-primary/5 to-transparent border border-primary/20" : "bg-card border border-border hover:border-primary/20"
                                }`}>
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${p.gradient ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                                <p.icon className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-lg text-foreground">{p.title}</h3>
                            <p className="text-xs text-primary font-semibold mb-4">{p.focus}</p>

                            <div className="space-y-2 mb-4">
                                <p className="text-[10px] font-bold text-red-500 uppercase tracking-wider">Pain Points</p>
                                {p.pains.map((pain, j) => (
                                    <p key={j} className="text-xs text-muted-foreground flex items-start gap-1.5">
                                        <span className="text-red-400 mt-0.5">•</span> {pain}
                                    </p>
                                ))}
                            </div>

                            <div className="space-y-2 mb-5">
                                <p className="text-[10px] font-bold text-green-600 uppercase tracking-wider">Benefits</p>
                                {p.benefits.map((b, j) => (
                                    <p key={j} className="text-xs text-foreground flex items-start gap-1.5">
                                        <Check className="w-3 h-3 text-green-600 shrink-0 mt-0.5" /> {b}
                                    </p>
                                ))}
                            </div>

                            <a href="#" className="text-xs font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                                {p.cta} <ArrowRight className="w-3 h-3" />
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Day-in-the-life comparison */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="bg-card rounded-3xl p-8 border border-border overflow-hidden">
                    <h3 className="font-display font-bold text-xl text-foreground text-center mb-8">A Day in the Life: Before vs. After</h3>
                    <div className="space-y-0">
                        {beforeAfter.map((row, i) => (
                            <div key={i} className={`grid grid-cols-[80px_1fr_1fr] gap-4 py-3 ${i !== beforeAfter.length - 1 ? "border-b border-border" : ""}`}>
                                <span className="text-xs font-bold text-foreground">{row.time}</span>
                                <div className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                                    <p className="text-xs text-muted-foreground">{row.before}</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                                    <p className="text-xs text-foreground">{row.after}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-6 mt-6 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-400" /> Before Breeh</span>
                        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500" /> With Breeh</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default RoleBasedSolutions;
