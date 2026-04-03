import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, DollarSign, Phone, Star } from "lucide-react";

const CaseStudyHero = () => {
    return (
        <section
            className="relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-28"
            style={{
                background: "linear-gradient(135deg, hsl(244 58% 65%), hsl(244 55% 58%))",
            }}
        >
            {/* Dot pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-white/20"
                        >
                            Success Stories
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl sm:text-4xl md:text-[44px] leading-[1.15] font-bold text-primary-foreground mb-6 font-display"
                        >
                            Real Results from <span className="italic text-white/90">Real Healthcare</span> Organizations
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg text-white/80 max-w-lg mb-8 leading-relaxed"
                        >
                            See how healthcare organizations transformed their patient communication,
                            recovered lost revenue, and improved operational efficiency with Breeh AI.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href="#stories"
                                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-white/95 transition-all hover:gap-3 shadow-lg"
                            >
                                Explore case studies <ArrowRight className="w-5 h-5" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Phone Mockup with Chat */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="relative hidden lg:flex justify-center"
                    >
                        <div className="w-[300px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-3 shadow-2xl">
                            <div className="bg-white rounded-[2rem] overflow-hidden">
                                {/* Phone status bar */}
                                <div className="bg-primary px-5 py-3 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Phone className="w-4 h-4 text-white" />
                                        <span className="text-white text-xs font-semibold">Breeh AI</span>
                                    </div>
                                    <span className="text-white/70 text-[10px]">Live</span>
                                </div>

                                {/* Chat messages */}
                                <div className="p-4 space-y-3 min-h-[320px]">
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1 }}
                                        className="bg-primary/10 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%]"
                                    >
                                        <p className="text-xs text-foreground leading-relaxed">
                                            "Good morning! Thank you for calling Riverside Health System. How can I help you today?"
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.4 }}
                                        className="bg-muted rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%] ml-auto"
                                    >
                                        <p className="text-xs text-foreground leading-relaxed">
                                            "I need to schedule a follow-up with my cardiologist."
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.8 }}
                                        className="bg-primary/10 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%]"
                                    >
                                        <p className="text-xs text-foreground leading-relaxed">
                                            "Of course! I see Dr. Patel has availability this Thursday at 2:00 PM. Shall I book that for you?"
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 2.2 }}
                                        className="flex items-center gap-2 bg-green-50 rounded-xl px-3 py-2 border border-green-200"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                                            <TrendingUp className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-[10px] font-semibold text-green-700">Appointment Booked ✓</span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Floating stat cards */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2, type: "spring" }}
                            className="absolute -left-8 top-12 bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl px-5 py-4 shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-green-400" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">3.4x</p>
                                    <p className="text-white/60 text-[10px]">Avg ROI</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.5, type: "spring" }}
                            className="absolute -right-6 bottom-20 bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl px-5 py-4 shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/30 flex items-center justify-center">
                                    <DollarSign className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">$2.1M+</p>
                                    <p className="text-white/60 text-[10px]">Revenue Recovered</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudyHero;
