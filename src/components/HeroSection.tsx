import { motion } from "framer-motion";
import { Phone, MessageSquare, Calendar, ArrowRight, Clock, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  onBookDemo?: () => void;
}

/* ── Phone Mockup ── */
const PhoneMockup = () => {
  const messages = [
    { role: "patient" as const, text: "Hi, I need to reschedule my appointment with Dr. Patel.", time: "9:41 AM" },
    { role: "ai" as const, text: "Of course! Dr. Patel has availability Thursday at 2:00 PM or Friday at 10:30 AM. Which works for you?", time: "9:41 AM" },
    { role: "patient" as const, text: "Friday at 10:30 please.", time: "9:42 AM" },
    { role: "ai" as const, text: "Done — you're confirmed for Friday at 10:30 AM. A reminder will be sent 24 hours before.", time: "9:42 AM" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      className="relative w-[270px] sm:w-[290px]"
    >
      {/* Phone shell */}
      <div className="rounded-[32px] border border-border/60 bg-card shadow-xl shadow-primary/5 overflow-hidden">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1 bg-primary/[0.03]">
          <span className="text-[10px] font-medium text-foreground/70">9:41</span>
          <div className="w-16 h-[18px] bg-foreground/10 rounded-full" />
          <div className="flex items-center gap-1">
            <div className="w-3.5 h-2 border border-foreground/40 rounded-sm relative">
              <div className="absolute inset-[1px] right-[2px] bg-foreground/40 rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* Chat header */}
        <div className="px-4 py-3 border-b border-border/50 flex items-center gap-3 bg-card">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Phone className="w-3.5 h-3.5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-foreground">Breeh AI Assistant</p>
            <p className="text-[10px] text-muted-foreground flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              Active now
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="px-3 py-4 space-y-2.5 bg-muted/30 min-h-[320px]">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.8 + i * 0.6 }}
              className={`flex ${msg.role === "patient" ? "justify-end" : "justify-start"}`}
            >
              <div className="max-w-[82%]">
                <div
                  className={`px-3 py-2 rounded-2xl text-[11px] leading-relaxed ${
                    msg.role === "patient"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-card border border-border/50 text-foreground rounded-bl-md shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
                <p className={`text-[9px] text-muted-foreground mt-0.5 ${msg.role === "patient" ? "text-right" : ""} px-1`}>
                  {msg.time}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input bar */}
        <div className="px-3 py-2.5 border-t border-border/50 flex items-center gap-2 bg-card">
          <div className="flex-1 h-8 bg-muted rounded-full px-3 flex items-center">
            <span className="text-muted-foreground text-[10px]">Type a message…</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
            <ArrowRight className="w-3 h-3 text-primary-foreground" />
          </div>
        </div>
      </div>

    </motion.div>
  );
};

/* ═══════════════════════════ HERO SECTION ═══════════════════════════ */
const HeroSection = ({ onBookDemo }: HeroSectionProps) => {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20 md:pt-36 md:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-10">
          {/* LEFT — Copy */}
          <div className="lg:w-[55%] text-center lg:text-left">
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/60 mb-5"
            >
              AI-Powered Healthcare Platform
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-3xl sm:text-4xl md:text-[44px] leading-[1.15] tracking-tight text-primary-foreground mb-5"
            >
              Streamline Your Healthcare Operations with AI
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm md:text-base text-primary-foreground/70 max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Reduce administrative burden, improve patient communication, and scale operations across every specialty and care setting — around the clock.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <button
                onClick={onBookDemo}
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-full px-8 py-3 text-sm bg-card text-primary hover:bg-card/90 transition-colors shadow-md"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onBookDemo}
                className="inline-flex items-center justify-center font-semibold rounded-full px-8 py-3 text-sm text-primary-foreground border border-primary-foreground/25 hover:bg-primary-foreground/10 transition-colors"
              >
                See How It Works
              </button>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 text-xs text-primary-foreground/50"
            >
              Trusted by healthcare organizations across the country
            </motion.p>
          </div>

          {/* RIGHT — Phone Mockup */}
          <div className="lg:w-[45%] flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
