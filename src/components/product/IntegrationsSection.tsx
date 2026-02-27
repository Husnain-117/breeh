import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plug, Clock, ArrowRight, Check } from "lucide-react";

const categories = ["All", "Practice Management", "Communication", "Analytics"];

const integrations = [
    { name: "Dentrix", category: "Practice Management", setup: "5 min", logo: "🦷" },
    { name: "Eaglesoft", category: "Practice Management", setup: "5 min", logo: "🦅" },
    { name: "Open Dental", category: "Practice Management", setup: "3 min", logo: "🔓" },
    { name: "Curve Dental", category: "Practice Management", setup: "5 min", logo: "📈" },
    { name: "Denticon", category: "Practice Management", setup: "5 min", logo: "🏥" },
    { name: "PracticeWorks", category: "Practice Management", setup: "5 min", logo: "⚙️" },
    { name: "Twilio", category: "Communication", setup: "2 min", logo: "📞" },
    { name: "RingCentral", category: "Communication", setup: "3 min", logo: "💬" },
    { name: "Google Voice", category: "Communication", setup: "2 min", logo: "📱" },
    { name: "Slack", category: "Communication", setup: "1 min", logo: "💡" },
    { name: "Google Analytics", category: "Analytics", setup: "2 min", logo: "📊" },
    { name: "HubSpot", category: "Analytics", setup: "3 min", logo: "🧲" },
];

const setupSteps = [
    { step: "1", title: "Connect", desc: "Link your PMS account", icon: Plug },
    { step: "2", title: "Configure", desc: "Set your preferences", icon: "⚙️" },
    { step: "3", title: "Sync", desc: "Import existing data", icon: "🔄" },
    { step: "4", title: "Go Live", desc: "Start answering calls", icon: Check },
];

const IntegrationsSection = () => {
    const [activeCat, setActiveCat] = useState("All");
    const filtered = activeCat === "All" ? integrations : integrations.filter((i) => i.category === activeCat);

    return (
        <section className="py-28 px-6 lg:px-8 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                        Integrations
                    </motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
                        Connects with your existing stack
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        50+ pre-built integrations. Set up in minutes, not months.
                    </motion.p>
                </div>

                {/* Category filter */}
                <div className="flex justify-center gap-2 mb-12 flex-wrap">
                    {categories.map((cat) => (
                        <button key={cat} onClick={() => setActiveCat(cat)} className="relative px-5 py-2 rounded-full text-sm font-medium transition-all">
                            {activeCat === cat && (
                                <motion.span layoutId="intCatPill" transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/20" />
                            )}
                            <span className={`relative z-10 ${activeCat === cat ? "text-white" : "text-muted-foreground hover:text-foreground"}`}>{cat}</span>
                        </button>
                    ))}
                </div>

                {/* Integration grid */}
                <AnimatePresence mode="wait">
                    <motion.div key={activeCat} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
                        {filtered.map((item, i) => (
                            <motion.div key={item.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                                transition={{ delay: i * 0.04 }} whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className="group bg-card rounded-2xl p-5 border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center cursor-default">
                                <div className="text-3xl mb-3">{item.logo}</div>
                                <p className="text-sm font-medium text-foreground">{item.name}</p>
                                <p className="text-[10px] text-muted-foreground mt-1">{item.category}</p>
                                <div className="flex items-center justify-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Clock className="w-3 h-3 text-primary" />
                                    <span className="text-[10px] text-primary font-medium">{item.setup} setup</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Featured integration */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-3xl p-8 md:p-10 border border-primary/20 mb-16">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-4xl">🦷</span>
                                <div>
                                    <h3 className="font-display font-bold text-xl text-foreground">Dentrix Integration</h3>
                                    <p className="text-sm text-muted-foreground">Two-way sync with Dentrix Enterprise &amp; G6</p>
                                </div>
                            </div>
                            <div className="space-y-3 mt-6">
                                {["Automatic appointment syncing", "Patient data import", "Treatment plan integration", "Real-time availability checks"].map((f, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-primary shrink-0" />
                                        <span className="text-sm text-foreground">{f}</span>
                                    </div>
                                ))}
                            </div>
                            <a href="/integrations" className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-6 hover:gap-2 transition-all">
                                View documentation <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                        <div className="bg-card/80 rounded-xl p-5 border border-border font-mono text-xs leading-relaxed overflow-hidden">
                            <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                <span className="ml-2">setup.ts</span>
                            </div>
                            <pre className="text-muted-foreground whitespace-pre-wrap">
                                {`import { Breeh } from '@breeh/sdk';

const client = new Breeh({
  apiKey: 'your-api-key',
  pms: 'dentrix'
});

await client.connect();
// ✅ Syncing appointments...`}
                            </pre>
                            <div className="mt-3 inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-sans font-semibold">
                                <Clock className="w-3 h-3" /> Setup time: 5 minutes
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Setup timeline */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
                    <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20" />
                    {setupSteps.map((s, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }} className="flex flex-col items-center text-center relative z-10">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 text-2xl">
                                {typeof s.icon === "string" ? s.icon : <s.icon className="w-6 h-6" />}
                            </div>
                            <p className="font-semibold text-sm text-foreground">{s.title}</p>
                            <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IntegrationsSection;
