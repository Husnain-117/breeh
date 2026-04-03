import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Phone, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const roles = [
  {
    id: "owner",
    label: "Administrator",
    eyebrow: "For Administrators",
    headline: "Grow your organization without growing your payroll",
    sub: "Stop losing patients to missed calls. Breeh answers 24/7 so you capture every opportunity.",
    benefits: ["Capture 35% more new patients", "Reduce administrative overhead significantly", "Real-time performance dashboard"],
    cta: "Calculate my ROI",
    chatMessages: [
      { role: "ai" as const, text: "3 new patient inquiries received while your office was closed last night.", time: "7:00 AM" },
      { role: "ai" as const, text: "All 3 have been scheduled for this week. Estimated revenue: $4,200.", time: "7:00 AM" },
    ],
  },
  {
    id: "manager",
    label: "Operations Manager",
    eyebrow: "For Operations Managers",
    headline: "Finally get ahead of the phones",
    sub: "Let Breeh handle routine calls so your team can focus on the patients right in front of them.",
    benefits: ["Automate 80% of routine calls", "Eliminate hold-time complaints", "Consistent patient experience"],
    cta: "See admin dashboard",
    chatMessages: [
      { role: "patient" as const, text: "I need to cancel my appointment tomorrow.", time: "2:15 PM" },
      { role: "ai" as const, text: "Done — your appointment is cancelled. Would you like to reschedule for next week?", time: "2:15 PM" },
    ],
  },
  {
    id: "it",
    label: "IT Director",
    eyebrow: "For IT Directors",
    headline: "Deploy AI without the infrastructure headache",
    sub: "HIPAA-compliant, SOC 2 certified, zero infrastructure to manage. Just works.",
    benefits: ["HIPAA-compliant by design", "50+ native integrations", "No servers to manage"],
    cta: "View security docs",
    chatMessages: [
      { role: "ai" as const, text: "All patient data is encrypted at rest and in transit. HIPAA audit log updated.", time: "11:30 AM" },
      { role: "ai" as const, text: "EHR sync completed — 2,847 records processed with zero errors.", time: "11:31 AM" },
    ],
  },
  {
    id: "exec",
    label: "Health System Executive",
    eyebrow: "For Health System Executives",
    headline: "Standardize patient experience across all locations",
    sub: "One platform, every location. Unified analytics, consistent quality, total control.",
    benefits: ["Unified multi-location dashboard", "Standardized call handling", "Enterprise SLA guarantees"],
    cta: "Schedule executive demo",
    chatMessages: [
      { role: "ai" as const, text: "Weekly report: 12,400 calls handled across 8 locations. 99.2% satisfaction.", time: "8:00 AM" },
      { role: "ai" as const, text: "Downtown clinic saw a 28% increase in bookings this week.", time: "8:00 AM" },
    ],
  },
];

/* ── Phone Mockup ── */
const PhoneMockup = ({ messages }: { messages: { role: "patient" | "ai"; text: string; time: string }[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
    className="relative w-[270px] sm:w-[290px]"
  >
    <div className="rounded-[32px] border border-white/20 bg-card shadow-xl overflow-hidden">
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
      <div className="px-3 py-4 space-y-2.5 bg-muted/30 min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={messages.map(m => m.text).join()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-2.5"
          >
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.2 + i * 0.4 }}
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
          </motion.div>
        </AnimatePresence>
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

const SolutionsHero = () => {
  const [activeRole, setActiveRole] = useState(roles[0]);

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(244 58% 65%), hsl(244 55% 58%))" }}
    >
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20 md:pt-36 md:pb-24">
        {/* Role selector pills */}
        <div className="mb-12">
          <div className="flex justify-center gap-2 flex-wrap max-w-4xl mx-auto">
            {roles.map((r) => (
              <button
                key={r.id}
                onClick={() => setActiveRole(r)}
                className="relative px-5 py-2 rounded-full text-sm font-medium transition-all"
              >
                {activeRole.id === r.id && (
                  <motion.span
                    layoutId="solRolePill"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 bg-card rounded-full shadow-lg"
                  />
                )}
                <span className={`relative z-10 ${activeRole.id === r.id ? "text-primary" : "text-primary-foreground/70 hover:text-primary-foreground"}`}>
                  {r.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-10">
          {/* LEFT — Copy */}
          <div className="lg:w-[55%] text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRole.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/60 mb-5">
                  {activeRole.eyebrow}
                </p>

                <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-[44px] leading-[1.15] tracking-tight text-primary-foreground mb-5">
                  {activeRole.headline}
                </h1>

                <p className="text-sm md:text-base text-primary-foreground/70 max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
                  {activeRole.sub}
                </p>

                <div className="space-y-3 mb-8">
                  {activeRole.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 justify-center lg:justify-start">
                      <Check className="w-4 h-4 text-primary-foreground/80 shrink-0" />
                      <span className="text-sm text-primary-foreground font-medium">{b}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <button
                    onClick={() => window.open(SITE_CONFIG.calendlyUrl, "_blank")}
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-full px-8 py-3 text-sm bg-card text-primary hover:bg-card/90 transition-colors shadow-md"
                  >
                    {activeRole.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT — Phone Mockup */}
          <div className="lg:w-[45%] flex justify-center lg:justify-end">
            <PhoneMockup messages={activeRole.chatMessages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
