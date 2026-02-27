import { motion } from "framer-motion";
import { UserCheck, ShieldCheck, Zap, Lightbulb } from "lucide-react";

const ExpertAnalysis = () => {
    return (
        <section className="py-24 px-6 bg-background">
            <div className="container max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-[40px] p-8 md:p-16 border border-primary/20 relative overflow-hidden"
                >
                    {/* Decorative background quote mark */}
                    <div className="absolute top-10 left-10 text-[180px] font-serif text-primary/5 leading-none pointer-events-none select-none">“</div>

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
                                <img
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&q=80"
                                    alt="Dr. Jennifer Walsh"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <span className="px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider mb-3 inline-block">
                                    Expert Analysis
                                </span>
                                <h3 className="text-3xl font-bold mb-2">Why this worked</h3>
                                <p className="text-muted-foreground font-medium text-lg">
                                    Dr. Jennifer Walsh, Dental Practice Consultant
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {[
                                { icon: Zap, title: "Strategic Timing", desc: "Implementation occurred 4 weeks before their peak seasonal surge." },
                                { icon: UserCheck, title: "Staff Buy-In", desc: "The office manager was part of the initial script design team." },
                                { icon: Lightbulb, title: "Process First", desc: "Waitlists were cleaned manually before AI automation began." }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-foreground">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col lg:flex-row gap-12">
                            {/* Replicability Score */}
                            <div className="flex-1 bg-white rounded-3xl p-8 shadow-xl border border-border">
                                <div className="flex items-center justify-between mb-8">
                                    <h4 className="font-bold">Replicability Score</h4>
                                    <span className="text-primary font-bold text-3xl">94%</span>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { label: "Practice Size", val: 100, status: "Ideal Match" },
                                        { label: "Call Volume", val: 90, status: "High Fit" },
                                        { label: "Staff Ready", val: 85, status: "Assessment Needed" }
                                    ].map((stat, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-xs font-bold mb-2">
                                                <span className="text-muted-foreground uppercase">{stat.label}</span>
                                                <span className="text-foreground">{stat.status}</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${stat.val}%` }}
                                                    className="h-full bg-primary"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-[10px] text-muted-foreground mt-8 text-center uppercase font-bold tracking-widest">
                                    Based on 12 comparable implementations
                                </p>
                            </div>

                            {/* Key Takeaways */}
                            <div className="flex-1 space-y-6">
                                <h4 className="font-bold text-xl flex items-center gap-2">
                                    <ShieldCheck className="w-6 h-6 text-primary" /> Key Takeaways
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        "Start with your busiest hours first to see immediate staff relief.",
                                        "Focus on new patient inquiries as the highest ROI endpoint.",
                                        "Ensure PMS integration is real-time for same-day reconciliation."
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold font-display">
                                                0{i + 1}
                                            </span>
                                            <p className="text-muted-foreground leading-relaxed">{text}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Decorative side shape */}
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
};

export default ExpertAnalysis;
