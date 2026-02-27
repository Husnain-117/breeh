import { motion } from "framer-motion";
import { ArrowRight, Star, TrendingUp, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudyHero = () => {
    return (
        <section className="relative h-[85vh] min-h-[600px] overflow-hidden flex items-center pt-20">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1629909608115-f93f044922c3?q=80&w=2067&auto=format&fit=crop"
                    alt="Modern Dental Office"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
            </div>

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
                            className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-primary/20"
                        >
                            Featured Case Study
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6"
                        >
                            How Bright Smile Dental <span className="text-primary italic">3X'd</span> their patient bookings
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-white/80 max-w-lg mb-8 leading-relaxed"
                        >
                            Through automated after-hours scheduling and real-time PMS integration, Bright Smile transformed their front office operations.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap items-center gap-6 mb-10 text-white/60 text-sm"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">🦷</div>
                                <span>General Dentistry</span>
                            </div>
                            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                            <span>5 Locations</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                            <span>San Diego, CA</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Link
                                to="/case-studies/bright-smile-dental"
                                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all hover:gap-3"
                            >
                                Read full story <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Floating Stats Cards */}
                    <div className="relative hidden lg:block h-[400px]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 0.8, type: "spring" }}
                            className="absolute top-0 right-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center">
                                    <TrendingUp className="w-6 h-6 text-green-400" />
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-white">300%</p>
                                    <p className="text-white/60 text-sm">Booking Increase</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 1, type: "spring" }}
                            className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                                    <DollarSign className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-white">$450K</p>
                                    <p className="text-white/60 text-sm">Revenue Recovered</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ delay: 1.2, type: "spring" }}
                            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 flex items-center gap-3"
                        >
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                            </div>
                            <span className="text-white font-medium text-sm">"Life changing"</span>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-1 h-12 rounded-full bg-gradient-to-b from-primary to-transparent"
                />
            </motion.div>
        </section>
    );
};

export default CaseStudyHero;
