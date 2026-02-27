import { motion } from "framer-motion";
import { ArrowRight, Calendar, Check } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const FinalCTA = () => {
    const openCalendly = () => window.open(SITE_CONFIG.calendlyUrl, "_blank");

    return (
        <section className="py-28 px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
            {/* Decorative orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-purple-400/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                >
                    Start Today
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6"
                >
                    Transform your practice <br className="hidden sm:block" /> in 5 minutes
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                >
                    Join 200+ practices already using Breeh. No credit card required.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={openCalendly}
                        className="bg-primary text-white px-10 py-5 rounded-xl text-lg font-semibold shadow-xl shadow-primary/30 hover:shadow-2xl transition-all"
                    >
                        Start free trial
                        <span className="block text-xs opacity-80 font-normal mt-0.5">14 days free</span>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={openCalendly}
                        className="bg-card border-2 border-border px-10 py-5 rounded-xl text-lg font-semibold hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
                    >
                        <Calendar className="w-5 h-5" /> Schedule demo
                    </motion.button>
                </motion.div>

                {/* Trust elements */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
                >
                    {["No credit card required", "5-minute setup", "Cancel anytime", "24/7 support"].map((t) => (
                        <div key={t} className="flex items-center gap-1.5">
                            <Check className="w-4 h-4 text-primary" />
                            <span>{t}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Social proof - avatar stack */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-10 flex justify-center items-center gap-3"
                >
                    <div className="flex -space-x-2">
                        {["P", "D", "B", "S", "M"].map((initial, i) => (
                            <div key={i}
                                className="w-9 h-9 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center text-xs font-bold text-primary">
                                {initial}
                            </div>
                        ))}
                    </div>
                    <span className="text-sm text-muted-foreground">Joined by <span className="font-semibold text-foreground">200+</span> practices</span>
                </motion.div>

                {/* Activity ticker */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                    </span>
                    12 practices signed up today
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
