import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, AlertCircle, MessageSquare, RotateCcw, Check } from "lucide-react";

interface Scenario {
    id: string;
    icon: typeof Phone;
    title: string;
    desc: string;
    messages: { from: "patient" | "ai"; text: string }[];
    outcome: { title: string; detail: string; stat: string; statLabel: string };
}

const scenarios: Scenario[] = [
    {
        id: "booking",
        icon: Phone,
        title: "New Patient Booking",
        desc: "First-time patient wants to schedule a cleaning",
        messages: [
            { from: "patient", text: "Hi, I'd like to schedule my first appointment for a cleaning." },
            { from: "ai", text: "Welcome! I'd love to help you get started. We have openings this Thursday at 10 AM or Friday at 3 PM. Do either of those work for you?" },
            { from: "patient", text: "Thursday 10 AM works!" },
            { from: "ai", text: "Wonderful! I've booked you for Thursday at 10 AM with Dr. Martinez. I'll send a confirmation text with our office address and new patient forms. See you then! 😊" },
        ],
        outcome: { title: "Appointment Booked!", detail: "Thursday 10 AM — Dr. Martinez", stat: "1:42", statLabel: "Call duration" },
    },
    {
        id: "reschedule",
        icon: Calendar,
        title: "Reschedule Visit",
        desc: "Existing patient needs to change their appointment",
        messages: [
            { from: "patient", text: "I need to reschedule my appointment tomorrow. Something came up." },
            { from: "ai", text: "No problem at all! I can see your appointment for tomorrow at 2 PM. Let me check available slots. How about next Monday at 11 AM or Wednesday at 4 PM?" },
            { from: "patient", text: "Wednesday 4 PM please." },
            { from: "ai", text: "Done! Your appointment has been moved to Wednesday at 4 PM. I'll send an updated confirmation. Is there anything else I can help with?" },
        ],
        outcome: { title: "Rescheduled!", detail: "Wednesday 4 PM — Updated", stat: "0:58", statLabel: "Call duration" },
    },
    {
        id: "emergency",
        icon: AlertCircle,
        title: "Emergency Call",
        desc: "Patient with urgent dental issue after hours",
        messages: [
            { from: "patient", text: "I have a really bad toothache and my face is swelling. Can I come in today?" },
            { from: "ai", text: "I'm sorry you're in pain! That sounds like it needs attention right away. I'm flagging this as urgent for Dr. Smith. We have an emergency slot at 4:30 PM today. Can you make it?" },
            { from: "patient", text: "Yes, I'll be there!" },
            { from: "ai", text: "You're all set for 4:30 PM today. Take ibuprofen for the pain and apply a cold compress. If the swelling gets worse before your visit, please go to the ER. See you soon! 🏥" },
        ],
        outcome: { title: "Emergency Handled!", detail: "4:30 PM today — Urgent slot", stat: "1:15", statLabel: "Call duration" },
    },
    {
        id: "followup",
        icon: MessageSquare,
        title: "Insurance Question",
        desc: "Patient asks about insurance and pricing",
        messages: [
            { from: "patient", text: "Do you accept Delta Dental insurance?" },
            { from: "ai", text: "Yes, we accept Delta Dental! We're in-network for both PPO and Premier plans. Would you like me to help verify your coverage before your visit?" },
            { from: "patient", text: "That would be great. I also need a crown — what's the typical cost?" },
            { from: "ai", text: "With Delta Dental PPO, a crown typically runs $200–$400 out of pocket after coverage. I'll have our billing team verify your exact benefits. Want me to schedule a consultation?" },
        ],
        outcome: { title: "Info Provided!", detail: "Insurance verified — Consultation offered", stat: "2:10", statLabel: "Call duration" },
    },
];

const InteractiveDemo = () => {
    const [activeScenario, setActiveScenario] = useState(scenarios[0]);
    const [visibleMsgs, setVisibleMsgs] = useState(0);
    const [showOutcome, setShowOutcome] = useState(false);

    // Auto-play messages
    useEffect(() => {
        setVisibleMsgs(0);
        setShowOutcome(false);
    }, [activeScenario]);

    useEffect(() => {
        if (visibleMsgs >= activeScenario.messages.length) {
            const timer = setTimeout(() => setShowOutcome(true), 1000);
            return () => clearTimeout(timer);
        }
        const timer = setTimeout(() => setVisibleMsgs((v) => v + 1), 1800);
        return () => clearTimeout(timer);
    }, [visibleMsgs, activeScenario]);

    const reset = () => { setVisibleMsgs(0); setShowOutcome(false); };

    return (
        <section className="py-28 px-6 lg:px-8 section-alt">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5"
                    >
                        Interactive Demo
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4"
                    >
                        Experience Breeh in action
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        See how Breeh handles different patient scenarios in real time.
                    </motion.p>
                </div>

                {/* Demo container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-3xl shadow-2xl border border-border overflow-hidden"
                >
                    <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
                        {/* Scenario selector */}
                        <div className="bg-muted/30 p-5 border-b md:border-b-0 md:border-r border-border">
                            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                                Choose a scenario
                            </p>
                            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible no-scrollbar">
                                {scenarios.map((s) => (
                                    <button
                                        key={s.id}
                                        onClick={() => setActiveScenario(s)}
                                        className={`flex items-center gap-3 p-3 rounded-xl text-left transition-all whitespace-nowrap md:whitespace-normal w-full shrink-0 ${activeScenario.id === s.id
                                                ? "bg-primary/5 border border-primary/30 shadow-sm"
                                                : "hover:bg-muted border border-transparent hover:translate-x-1"
                                            }`}
                                    >
                                        <s.icon className={`w-5 h-5 shrink-0 ${activeScenario.id === s.id ? "text-primary" : "text-muted-foreground"}`} />
                                        <div>
                                            <p className={`text-sm font-medium ${activeScenario.id === s.id ? "text-primary" : "text-foreground"}`}>
                                                {s.title}
                                            </p>
                                            <p className="text-[11px] text-muted-foreground mt-0.5 hidden md:block">{s.desc}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Chat */}
                        <div className="flex flex-col h-[480px]">
                            {/* Header */}
                            <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                                <div className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-sm font-semibold text-foreground">Breeh AI</span>
                                    <span className="text-xs text-muted-foreground">· Active</span>
                                </div>
                                <button onClick={reset} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Reset demo">
                                    <RotateCcw className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto p-5 space-y-3">
                                <AnimatePresence mode="popLayout">
                                    {activeScenario.messages.slice(0, visibleMsgs).map((msg, i) => (
                                        <motion.div
                                            key={`${activeScenario.id}-${i}`}
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                            className={`flex ${msg.from === "ai" ? "justify-end" : "justify-start"}`}
                                        >
                                            <div className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${msg.from === "ai"
                                                    ? "bg-primary/10 border border-primary/20 rounded-2xl rounded-tr-sm"
                                                    : "bg-muted rounded-2xl rounded-tl-sm"
                                                }`}>
                                                {msg.text}
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>

                                {/* Typing indicator */}
                                {visibleMsgs < activeScenario.messages.length && visibleMsgs > 0 && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                        className={`flex ${activeScenario.messages[visibleMsgs].from === "ai" ? "justify-end" : "justify-start"}`}>
                                        <div className="flex gap-1 px-4 py-3">
                                            {[0, 1, 2].map((j) => (
                                                <div key={j} className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: `${j * 0.15}s` }} />
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Outcome */}
                                <AnimatePresence>
                                    {showOutcome && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-4 bg-green-50 border border-green-200 rounded-2xl p-5 text-center"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                                                <Check className="w-5 h-5 text-green-600" />
                                            </div>
                                            <p className="font-bold text-green-700 text-sm">{activeScenario.outcome.title}</p>
                                            <p className="text-xs text-green-600 mt-1">{activeScenario.outcome.detail}</p>
                                            <div className="mt-3 pt-3 border-t border-green-200">
                                                <p className="font-display font-bold text-lg text-green-700">{activeScenario.outcome.stat}</p>
                                                <p className="text-[10px] text-green-600">{activeScenario.outcome.statLabel}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Quick replies */}
                            <div className="px-5 py-3 border-t border-border flex gap-2 overflow-x-auto no-scrollbar">
                                <span className="text-xs text-muted-foreground self-center shrink-0 mr-1">Try:</span>
                                {["I want to book", "What are your hours?", "Emergency"].map((q) => (
                                    <button key={q} className="shrink-0 px-3 py-1.5 rounded-full bg-muted text-xs font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                                        {q}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default InteractiveDemo;
