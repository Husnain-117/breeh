import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const CaseStudyFinalCTA = () => {
    return (
        <section className="py-24 px-6 bg-background relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
                <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="container max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-primary to-purple-600 rounded-[48px] p-12 md:p-24 text-center text-white relative shadow-2xl shadow-primary/25"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md">
                            Ready for your own success story?
                        </span>

                        <h2 className="text-4xl md:text-7xl font-bold mb-8 font-display leading-[1.1]">
                            Join <span className="text-white/80 italic">200+</span> practices using Breeh
                        </h2>

                        <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
                            We'll review your specific situation and create a custom implementation plan. No credit card required.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <button
                                onClick={() => window.open(SITE_CONFIG.calendlyUrl, "_blank")}
                                className="w-full sm:w-auto bg-white text-primary px-10 py-5 rounded-2xl text-lg font-bold shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                            >
                                Start free trial <ArrowRight className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => window.open(SITE_CONFIG.calendlyUrl, "_blank")}
                                className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white/10 transition-all"
                            >
                                Schedule consultation
                            </button>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-white/60">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-green-400" /> Setup in 5 days
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-400" /> HIPAA Compliant
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="w-5 h-5 text-green-400" /> No setup fees
                            </div>
                        </div>
                    </motion.div>

                    {/* Animated secondary decorative orbs inside card */}
                    <div className="absolute top-0 left-10 w-32 h-32 bg-white/10 rounded-full blur-[40px] -translate-y-1/2" />
                    <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/20 rounded-full blur-[60px] translate-y-1/2" />
                </motion.div>
            </div>
        </section>
    );
};

export default CaseStudyFinalCTA;
