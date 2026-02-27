import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const stories = [
    {
        practice: "Metro Dental Group",
        headline: "How Metro Dental automated 90% of scheduling with 3 integrations",
        before: ["20 voicemails daily", "40% calls missed", "Staff overtime every week"],
        after: ["0 missed appointments", "99% answer rate", "Staff leaves on time"],
        metrics: ["↑ 150% bookings", "↓ 20 hrs/week", "Break-even in 3 weeks"],
        stack: ["🦷 Dentrix", "📧 RevenueWell", "📅 Google Calendar"],
        quote: "This integration stack runs our entire front office. I couldn't imagine going back.",
        author: "Sarah K., Office Manager",
    },
    {
        practice: "SmileCraft Ortho",
        headline: "SmileCraft reduced no-shows by 30% using automated recall reminders",
        before: ["30% no-show rate", "Manual reminder calls", "Lost revenue quarterly"],
        after: ["21% no-show rate", "Auto SMS reminders", "+$8K/month recovered"],
        metrics: ["↓ 30% no-shows", "↑ $96K/year", "2 hrs saved daily"],
        stack: ["🔗 Open Dental", "📧 RevenueWell", "📱 Weave"],
        quote: "Treatment compliance went up the moment Breeh started handling our follow-ups.",
        author: "Dr. Kim, Orthodontist",
    },
];

const stackFlow = [
    { emoji: "📞", label: "Phone" },
    { emoji: "🤖", label: "Breeh AI" },
    { emoji: "🦷", label: "Dentrix" },
    { emoji: "📧", label: "RevenueWell" },
];

const perf = [
    { val: "2M+", label: "API calls/day" },
    { val: "50ms", label: "Avg response time" },
    { val: "99.99%", label: "Uptime" },
    { val: "0", label: "Data breaches" },
];

const IntegrationStories = () => {
    return (
        <section className="py-28 px-6 lg:px-8 section-alt">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                        Success Stories
                    </motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">See integrations in action</motion.h2>
                </div>

                {/* Story cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {stories.map((story, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all">
                            <div className="p-8">
                                <h3 className="font-bold text-lg text-foreground mb-4">{story.headline}</h3>
                                <div className="grid grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <p className="text-[10px] font-bold text-red-500 uppercase tracking-wider mb-2">Before</p>
                                        {story.before.map((b) => <p key={b} className="text-xs text-muted-foreground flex items-center gap-1.5 mb-1"><span className="text-red-400">•</span> {b}</p>)}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-2">After</p>
                                        {story.after.map((a) => <p key={a} className="text-xs text-foreground flex items-center gap-1.5 mb-1"><span className="text-green-500">•</span> {a}</p>)}
                                    </div>
                                </div>
                                <div className="flex gap-2 flex-wrap mb-4">
                                    {story.metrics.map((m) => (
                                        <span key={m} className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">{m}</span>
                                    ))}
                                </div>
                                <div className="flex gap-2 flex-wrap mb-5">
                                    {story.stack.map((s) => <span key={s} className="text-xs bg-muted px-3 py-1 rounded-full text-foreground">{s}</span>)}
                                </div>
                                <blockquote className="text-sm italic text-muted-foreground border-l-2 border-primary pl-3">"{story.quote}"</blockquote>
                                <p className="text-xs text-muted-foreground mt-2">— {story.author}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stack spotlight */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="bg-card rounded-2xl p-8 border border-border mb-12">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-4">The Perfect Stack</span>
                    <h3 className="font-bold text-lg text-foreground mb-6">"This integration stack runs our entire front office"</h3>

                    {/* Animated data flow */}
                    <div className="flex items-center justify-center gap-0 flex-wrap">
                        {stackFlow.map((step, i) => (
                            <div key={step.label} className="flex items-center">
                                <div className="text-center px-4">
                                    <span className="text-3xl block mb-1">{step.emoji}</span>
                                    <span className="text-xs text-muted-foreground">{step.label}</span>
                                </div>
                                {i < stackFlow.length - 1 && (
                                    <motion.div animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }}>
                                        <ArrowRight className="w-5 h-5 text-primary mx-2" />
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Metrics bar */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="bg-card rounded-2xl p-8 border border-border grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {perf.map((p) => (
                        <div key={p.label}>
                            <p className="font-display font-bold text-3xl text-primary">{p.val}</p>
                            <p className="text-sm text-muted-foreground">{p.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default IntegrationStories;
