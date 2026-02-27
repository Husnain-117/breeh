import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, Check } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const IntegrationsFinalCTA = () => {
    return (
        <section className="py-32 bg-gradient-to-b from-background to-primary/10 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                    Get Started
                </motion.span>

                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="font-display font-bold text-4xl md:text-6xl text-foreground leading-tight mb-6">
                    Ready to connect <br className="hidden sm:block" /> your tools?
                </motion.h2>

                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                    Join 200+ practices with integrated workflows. Set up in minutes, scale in days.
                </motion.p>

                {/* Personalized Recommendation placeholder */}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                    className="bg-card rounded-2xl p-6 border border-border inline-block max-w-lg mb-10 text-left shadow-xl">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-2">Recommended for you</p>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex -space-x-1">
                            {["🦷", "📧", "📅"].map((l, i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs shadow-sm">{l}</div>
                            ))}
                        </div>
                        <div>
                            <p className="text-sm font-bold text-foreground">Standard Practice Stack</p>
                            <p className="text-[10px] text-muted-foreground">Estimated setup: 15 minutes</p>
                        </div>
                    </div>
                    <button onClick={() => window.open(SITE_CONFIG.calendlyUrl, "_blank")}
                        className="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                        Start with this stack <ArrowRight className="w-3 h-3" />
                    </button>
                </motion.div>

                {/* CTAs */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                    <button onClick={() => window.open(SITE_CONFIG.calendlyUrl, "_blank")}
                        className="bg-primary text-white px-10 py-5 rounded-xl text-lg font-bold shadow-xl shadow-primary/25 hover:scale-105 active:scale-95 transition-all">
                        Browse all integrations
                    </button>
                    <button onClick={() => window.open(SITE_CONFIG.calendlyUrl, "_blank")}
                        className="bg-card border-2 border-border px-10 py-5 rounded-xl text-lg font-bold hover:border-primary transition-all">
                        Talk to specialist
                    </button>
                </motion.div>

                {/* Trust elements */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
                    {["Free setup assistance", "24/7 integration support", "99.99% uptime"].map((t) => (
                        <div key={t} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary" /> {t}</div>
                    ))}
                </div>

                {/* Support floating style */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                    className="mt-16 inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 border border-border shadow-lg">
                    <div className="relative">
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white absolute bottom-0 right-0 z-10" />
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <MessageSquare className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="text-left py-1">
                        <p className="text-sm font-bold text-foreground leading-tight">Integration specialists online</p>
                        <p className="text-[10px] text-muted-foreground">Ready to help with your custom setup</p>
                    </div>
                    <button onClick={() => window.open(SITE_CONFIG.calendlyUrl, "_blank")}
                        className="bg-primary/10 text-primary px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-primary hover:text-white transition-colors">Start chat</button>
                </motion.div>
            </div>
        </section>
    );
};

export default IntegrationsFinalCTA;
