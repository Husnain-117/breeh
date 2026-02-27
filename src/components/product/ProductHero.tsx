import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, PlayCircle, ShieldCheck, Star, MessageSquare } from "lucide-react";

const chatMessages = [
    { from: "patient", text: "Hi, can I book a cleaning for next week?" },
    { from: "ai", text: "Of course! I have Tuesday at 2 PM or Thursday at 10 AM. Which works best?" },
    { from: "patient", text: "Tuesday 2 PM please!" },
    { from: "ai", text: "Done! You're booked for Tuesday at 2 PM with Dr. Smith. You'll get a confirmation text shortly. 😊" },
];

interface Props {
    onBookDemo: () => void;
}

const ProductHero = ({ onBookDemo }: Props) => {
    const [visibleMessages, setVisibleMessages] = useState(0);

    useEffect(() => {
        if (visibleMessages >= chatMessages.length) return;
        const timer = setTimeout(() => setVisibleMessages((v) => v + 1), 2000);
        return () => clearTimeout(timer);
    }, [visibleMessages]);

    // Restart chat loop
    useEffect(() => {
        if (visibleMessages >= chatMessages.length) {
            const timer = setTimeout(() => setVisibleMessages(0), 4000);
            return () => clearTimeout(timer);
        }
    }, [visibleMessages]);

    const words = "Never miss a patient call again".split(" ");

    return (
        <section className="pt-28 pb-20 px-6 lg:px-8 relative overflow-hidden min-h-[90vh] flex items-center">
            {/* Animated gradient orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] animate-float" />
                <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-purple-400/8 rounded-full blur-[100px]" style={{ animationDelay: "-3s", animationDuration: "8s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px]" style={{ animationDelay: "-5s" }} />
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
                    {/* Left — Content */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            AI Receptionist for Dental Practices
                        </motion.span>

                        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-foreground leading-[1.1] tracking-tight mb-6">
                            {words.map((word, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                                    className={`inline-block mr-2 ${word === "Never" ? "gradient-text" : ""}`}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="text-xl text-muted-foreground max-w-lg leading-relaxed mb-8"
                        >
                            Breeh AI answers every call, schedules appointments, and follows up
                            automatically—24/7. Your front desk, supercharged.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.85, duration: 0.5 }}
                            className="flex flex-wrap gap-4 mb-12"
                        >
                            <button
                                onClick={onBookDemo}
                                className="btn-primary flex items-center gap-2 px-8 py-4 text-lg hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <Zap className="w-5 h-5" /> Start Free Trial
                            </button>
                            <button className="flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl bg-card border border-border hover:bg-muted transition-all">
                                <PlayCircle className="w-5 h-5 text-primary" /> Watch Demo
                            </button>
                        </motion.div>

                        {/* Trust bar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground"
                        >
                            <div className="flex items-center gap-1.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                                <span className="ml-1 font-semibold text-foreground">4.9</span>
                                <span className="text-xs">from 200+ reviews</span>
                            </div>
                            <span className="w-px h-4 bg-border" />
                            <div className="flex items-center gap-1.5">
                                <ShieldCheck className="w-4 h-4 text-primary" />
                                <span className="text-xs font-semibold">HIPAA Compliant</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right — Chat Demo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="relative"
                        style={{ perspective: "2000px" }}
                    >
                        <div
                            className="bg-card rounded-[2rem] p-4 shadow-2xl shadow-primary/10 border border-border/50 animate-float"
                            style={{ transform: "rotateY(-3deg) rotateX(2deg)" }}
                        >
                            {/* Phone header */}
                            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                                <div className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-xs font-semibold text-foreground">Breeh AI is online</span>
                                </div>
                                <span className="text-[10px] text-muted-foreground">Now</span>
                            </div>

                            {/* Chat messages */}
                            <div className="p-4 space-y-3 min-h-[320px]">
                                {chatMessages.slice(0, visibleMessages).map((msg, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className={`flex ${msg.from === "ai" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div
                                            className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${msg.from === "ai"
                                                    ? "bg-primary/10 border border-primary/20 rounded-2xl rounded-tr-sm text-foreground"
                                                    : "bg-muted rounded-2xl rounded-tl-sm text-foreground"
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Typing indicator */}
                                {visibleMessages < chatMessages.length && visibleMessages > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className={`flex ${chatMessages[visibleMessages].from === "ai" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div className="flex gap-1 px-4 py-3">
                                            {[0, 1, 2].map((j) => (
                                                <div
                                                    key={j}
                                                    className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce"
                                                    style={{ animationDelay: `${j * 0.15}s` }}
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        {/* Floating notification — top right */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2.5, duration: 0.5 }}
                            className="absolute -top-4 -right-4 lg:-right-8 bg-card rounded-xl px-4 py-3 shadow-lg border border-border flex items-center gap-2"
                        >
                            <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-foreground">Appointment booked</p>
                                <p className="text-[10px] text-muted-foreground">Just now</p>
                            </div>
                        </motion.div>

                        {/* Floating stat — bottom left */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 3.5, duration: 0.5 }}
                            className="absolute -bottom-4 -left-4 lg:-left-8 bg-primary text-white rounded-xl px-5 py-3 shadow-lg shadow-primary/30"
                        >
                            <p className="font-display font-bold text-xl">0.5s</p>
                            <p className="text-[10px] text-white/70">Avg answer time</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProductHero;
