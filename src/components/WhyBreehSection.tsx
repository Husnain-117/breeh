import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Calendar, Phone, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Always-On Front Desk",
    description: "Every call answered instantly, 24/7. Handles scheduling, questions, and triage — no hold times.",
    chat: [
      { from: "patient", text: "Hi, I'd like to schedule a cleaning for next week." },
      { from: "ai", text: "Of course! I have Tuesday 2pm or Thursday 10am. Which works?" },
      { from: "patient", text: "Tuesday at 2pm, please." },
    ],
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Book, reschedule, and confirm in real-time. Syncs directly with your PMS.",
    chat: [
      { from: "patient", text: "I need to move my Thursday appointment." },
      { from: "ai", text: "No problem — Friday 3pm or Monday 11am?" },
      { from: "patient", text: "Monday works." },
    ],
  },
  {
    icon: MessageSquare,
    title: "Automated Follow-Up",
    description: "Reminders, recall notices, and post-visit follow-ups via SMS, email, and voice.",
    chat: [
      { from: "ai", text: "Hi Sarah, reminder: cleaning tomorrow at 10am with Dr. Smith." },
      { from: "patient", text: "Thanks, I'll be there!" },
      { from: "ai", text: "Great — reply HELP if you need to reschedule." },
    ],
  },
  {
    icon: BarChart3,
    title: "Practice Analytics",
    description: "Call volume, booking trends, satisfaction scores, and performance metrics in real-time.",
    chat: [
      { from: "ai", text: "Weekly: 142 calls handled, 95% satisfaction, 23 appointments booked." },
      { from: "patient", text: "Show me the busiest hours." },
      { from: "ai", text: "Peak: Mon & Wed 9–11am. Consider adding capacity." },
    ],
  },
];

const WhyBreehSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % features.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  }, []);

  const goTo = useCallback((i: number) => {
    setDirection(i > activeIndex ? 1 : -1);
    setActiveIndex(i);
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.97 }),
  };

  return (
    <section className="section-lavender py-24 lg:py-32 relative overflow-hidden" id="why-breeh">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-accent tracking-wide mb-3">
            Why Breeh AI
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Your AI Receptionist,
            <br />
            Seamlessly Integrated
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Delight patients, empower staff, and gain actionable insights with an always-on digital front desk.
          </p>
        </motion.div>

        {/* Card */}
        <div className="relative min-h-[380px] md:min-h-[340px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-xl"
            >
              <div
                className="lg:col-span-3 p-10 md:p-12 flex flex-col justify-center"
                style={{
                  background: "linear-gradient(135deg, hsl(244 55% 62%) 0%, hsl(244 50% 55%) 50%, hsl(244 48% 50%) 100%)",
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-6">
                  {(() => {
                    const Icon = features[activeIndex].icon;
                    return <Icon className="w-5 h-5 text-white" />;
                  })()}
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">
                  {features[activeIndex].title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {features[activeIndex].description}
                </p>
              </div>

              <div className="lg:col-span-2 bg-secondary p-8 flex items-center justify-center">
                <div className="bg-card rounded-2xl p-5 w-full max-w-xs shadow-sm border border-border">
                  <div className="space-y-2.5">
                    {features[activeIndex].chat.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
                        className={`${msg.from === "patient"
                          ? "bg-primary/10 rounded-xl rounded-bl-sm"
                          : "bg-accent/10 rounded-xl rounded-br-sm ml-6"
                          } p-3`}
                      >
                        <p className="text-xs text-foreground">{msg.text}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                      <span className="text-[9px] font-bold text-accent-foreground">B</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">Breeh AI</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors bg-background"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex
                  ? "w-8 bg-accent"
                  : "w-3 bg-border hover:bg-muted-foreground/30"
                  }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors bg-background"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyBreehSection;
