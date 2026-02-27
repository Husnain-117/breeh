import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUp, Send } from "lucide-react";

const planned = [
    { name: "CareStack", votes: 234, timeline: "Q2 2026" },
    { name: "Tab32", votes: 189, timeline: "Q2 2026" },
    { name: "Patterson Fusion", votes: 156, timeline: "Q3 2026" },
];

const inDev = [
    { name: "Sikka", progress: 60, timeline: "March 2026" },
    { name: "XLDent", progress: 45, timeline: "April 2026" },
];

const beta = [
    { name: "Maxident", logo: "Ⓜ️", users: 12 },
    { name: "Adit", logo: "🅰️", users: 8 },
];

const IntegrationRoadmap = () => {
    const [voted, setVoted] = useState<string[]>([]);
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleVote = (name: string) => {
        if (voted.includes(name)) return;
        setVoted([...voted, name]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");
        setTimeout(() => setFormStatus("success"), 1500);
    };

    return (
        <section className="py-24 px-6 lg:px-8 section-alt">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                        Roadmap
                    </motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
                        What's coming next
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="text-lg text-muted-foreground">Vote on upcoming integrations and request new ones.</motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {/* Planned */}
                    <div className="bg-card rounded-2xl p-6 border border-border">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-foreground">Planned</h3>
                            <span className="bg-muted px-2 py-0.5 rounded text-[10px] font-bold text-muted-foreground">3</span>
                        </div>
                        <div className="space-y-3">
                            {planned.map((p) => (
                                <div key={p.name} className="p-4 rounded-xl bg-muted/50 border border-border flex justify-between items-center">
                                    <div>
                                        <p className="text-sm font-bold text-foreground">{p.name}</p>
                                        <p className="text-[10px] text-muted-foreground">Expected: {p.timeline}</p>
                                    </div>
                                    <button onClick={() => handleVote(p.name)}
                                        className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${voted.includes(p.name) ? "bg-primary text-white" : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary"
                                            }`}>
                                        <ArrowUp className="w-3 h-3" /> {voted.includes(p.name) ? p.votes + 1 : p.votes}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* In Dev */}
                    <div className="bg-card rounded-2xl p-6 border border-border">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-foreground">In Development</h3>
                            <span className="bg-muted px-2 py-0.5 rounded text-[10px] font-bold text-muted-foreground">2</span>
                        </div>
                        <div className="space-y-3">
                            {inDev.map((p) => (
                                <div key={p.name} className="p-4 rounded-xl bg-muted/50 border border-border">
                                    <div className="flex justify-between items-center mb-3">
                                        <p className="text-sm font-bold text-foreground">{p.name}</p>
                                        <span className="text-[10px] font-bold text-primary">{p.progress}%</span>
                                    </div>
                                    <div className="h-1.5 bg-muted rounded-full overflow-hidden mb-1">
                                        <motion.div initial={{ width: 0 }} whileInView={{ width: `${p.progress}%` }} className="h-full bg-primary" />
                                    </div>
                                    <p className="text-[10px] text-muted-foreground">Timeline: {p.timeline}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Beta */}
                    <div className="bg-card rounded-2xl p-6 border-2 border-primary/20 bg-primary/5">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-primary">Beta Available</h3>
                            <span className="bg-primary/20 px-2 py-0.5 rounded text-[10px] font-bold text-primary">2</span>
                        </div>
                        <div className="space-y-3">
                            {beta.map((p) => (
                                <div key={p.name} className="p-4 rounded-xl bg-white border border-primary/20">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xl">{p.logo}</span>
                                        <p className="text-sm font-bold text-foreground">{p.name}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="flex-1 py-1.5 bg-primary text-white rounded text-[10px] font-bold">Try beta</button>
                                        <button className="flex-1 py-1.5 bg-muted text-muted-foreground rounded text-[10px] font-bold">Feedback</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Request form */}
                <div className="max-w-xl mx-auto bg-card rounded-2xl p-8 border border-border">
                    {formStatus === 'success' ? (
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Check className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-lg text-foreground mb-2">Request Submitted!</h3>
                            <p className="text-sm text-muted-foreground">Thanks for the feedback. We'll review your request within 48 hours.</p>
                            <button onClick={() => setFormStatus('idle')} className="mt-6 text-primary font-bold text-sm">Send another request</button>
                        </motion.div>
                    ) : (
                        <>
                            <h3 className="font-bold text-xl text-foreground mb-1 text-center">Don't see your tool?</h3>
                            <p className="text-sm text-muted-foreground mb-8 text-center">Let us know what you'd like to see next.</p>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Software Name</label>
                                        <input required type="text" placeholder="e.g. CareStack" className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Category</label>
                                        <select className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                                            <option>PMS</option>
                                            <option>Communication</option>
                                            <option>Analytics</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Primary Use Case</label>
                                    <textarea required placeholder="How will you use this integration?" rows={3} className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
                                </div>
                                <button disabled={formStatus === 'submitting'} type="submit" className="w-full py-3 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-50">
                                    {formStatus === 'submitting' ? "Submitting..." : <><Send className="w-4 h-4" /> Submit Request</>}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default IntegrationRoadmap;
