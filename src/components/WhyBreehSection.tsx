import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Calendar, Phone, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Always-On Front Desk",
    description:
      "Every call answered instantly, 24/7. Handles scheduling, questions, and triage — no hold times, no missed revenue.",
    chat: [
      { from: "patient", text: "Hi, I'd like to schedule a cleaning for next week." },
      { from: "ai", text: "Of course! I have Tuesday 2pm or Thursday 10am. Which works?" },
      { from: "patient", text: "Tuesday at 2pm, please." },
      { from: "ai", text: "You're booked! I'll send a confirmation text right away. 😊" },
    ],
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "Book, reschedule, and confirm in real-time. Syncs directly with your PMS so double-bookings never happen.",
    chat: [
      { from: "patient", text: "I need to move my Thursday appointment." },
      { from: "ai", text: "No problem — Friday 3pm or Monday 11am?" },
      { from: "patient", text: "Monday works." },
      { from: "ai", text: "Done! Updated in your calendar. See you Monday at 11." },
    ],
  },
  {
    icon: MessageSquare,
    title: "Automated Follow-Up",
    description:
      "Reminders, recall notices, and post-visit follow-ups via SMS, email, and voice — fully automated.",
    chat: [
      { from: "ai", text: "Hi Sarah, reminder: cleaning tomorrow at 10am with Dr. Smith." },
      { from: "patient", text: "Thanks, I'll be there!" },
      { from: "ai", text: "Great — reply HELP if you need to reschedule. See you soon!" },
    ],
  },
  {
    icon: BarChart3,
    title: "Practice Analytics",
    description:
      "Call volume, booking trends, satisfaction scores, and performance — all in real-time dashboards.",
    chat: [
      { from: "ai", text: "Weekly: 142 calls handled, 95% satisfaction, 23 booked." },
      { from: "patient", text: "Show me the busiest hours." },
      { from: "ai", text: "Peak: Mon & Wed 9–11am. Consider adding capacity." },
    ],
  },
];

const AUTO_ADVANCE_DURATION = 5000;

const WhyBreehSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % features.length);
    setProgress(0);
  }, []);

  const goTo = useCallback(
    (i: number) => {
      setDirection(i > activeIndex ? 1 : -1);
      setActiveIndex(i);
      setProgress(0);
    },
    [activeIndex]
  );

  // Auto-advance timer
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(next, AUTO_ADVANCE_DURATION);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, isPaused, activeIndex]);

  // Progress bar animation
  useEffect(() => {
    if (isPaused) return;
    setProgress(0);
    const interval = 50;
    const step = (interval / AUTO_ADVANCE_DURATION) * 100;
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + step, 100));
    }, interval);
    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [activeIndex, isPaused]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
      rotateY: dir > 0 ? 8 : -8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.9,
      rotateY: dir > 0 ? -8 : 8,
    }),
  };

  return (
    <section
      className="section-lavender py-24 lg:py-32 relative overflow-hidden"
      id="why-breeh"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
            Why Breeh AI
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Your AI Receptionist,
            <br />
            <span className="gradient-text">Seamlessly Integrated</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Delight patients, empower staff, and gain actionable insights with an
            always-on digital front desk.
          </p>
        </motion.div>

        {/* Main grid: tabs + demo card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT — Feature Tabs */}
          <div className="space-y-2">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              const isActive = i === activeIndex;
              return (
                <motion.button
                  key={i}
                  onClick={() => goTo(i)}
                  whileHover={{ x: isActive ? 0 : 4 }}
                  className={`w-full text-left rounded-xl p-5 transition-all duration-300 relative overflow-hidden group ${isActive
                      ? "bg-white shadow-lg shadow-primary/10 border-l-[3px] border-primary"
                      : "bg-transparent hover:bg-white/60 border-l-[3px] border-transparent"
                    }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isActive
                          ? "bg-primary text-white"
                          : "bg-primary/10 text-primary group-hover:bg-primary/20"
                        }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4
                        className={`font-display font-bold text-sm mb-1 transition-colors ${isActive ? "text-foreground" : "text-foreground/70"
                          }`}
                      >
                        {feature.title}
                      </h4>
                      <p
                        className={`text-xs leading-relaxed transition-all duration-300 ${isActive
                            ? "text-muted-foreground max-h-20 opacity-100"
                            : "text-muted-foreground/60 max-h-0 opacity-0 lg:max-h-20 lg:opacity-60"
                          }`}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary/10">
                      <div
                        className="h-full bg-primary transition-none"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT — Demo Card */}
          <div style={{ perspective: 2000 }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="bg-card rounded-2xl shadow-2xl border border-border/50 overflow-hidden"
              >
                {/* Card header */}
                <div
                  className="p-6 pb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(244 55% 62%) 0%, hsl(244 50% 55%) 50%, hsl(244 48% 50%) 100%)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                      {(() => {
                        const Icon = features[activeIndex].icon;
                        return <Icon className="w-4 h-4 text-white" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">
                        {features[activeIndex].title}
                      </h3>
                      <p className="text-white/50 text-[11px]">Live Demo</p>
                    </div>
                  </div>
                </div>

                {/* Chat area */}
                <div className="p-6 space-y-3 min-h-[280px]">
                  {features[activeIndex].chat.map((msg, i) => (
                    <motion.div
                      key={`${activeIndex}-${i}`}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + i * 0.3,
                        ease: "easeOut",
                      }}
                      className={`flex ${msg.from === "patient" ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`max-w-[85%] px-4 py-2.5 text-xs leading-relaxed ${msg.from === "patient"
                            ? "bg-gray-100 text-foreground rounded-2xl rounded-bl-md"
                            : "bg-gradient-to-r from-primary to-purple-500 text-white rounded-2xl rounded-br-md"
                          }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.3 + features[activeIndex].chat.length * 0.3 + 0.3,
                    }}
                    className="flex justify-end"
                  >
                    <div className="bg-gradient-to-r from-primary/20 to-purple-500/20 px-4 py-3 rounded-2xl rounded-br-md flex gap-1.5">
                      {[0, 1, 2].map((d) => (
                        <span
                          key={d}
                          className="w-1.5 h-1.5 bg-primary rounded-full"
                          style={{
                            animation: `typing-dot 1.4s ease-in-out ${d * 0.2}s infinite`,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Card footer */}
                <div className="px-6 py-4 border-t border-border/50 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-[9px] font-bold text-white">B</span>
                  </div>
                  <span className="text-[11px] text-muted-foreground font-medium">
                    Powered by Breeh AI
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBreehSection;
