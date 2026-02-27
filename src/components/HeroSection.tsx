import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Star, Phone, MessageSquare, Calendar, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onBookDemo?: () => void;
}

/* ── Chat messages for the phone mockup ── */
const chatMessages = [
  { role: "patient", text: "Hi, I'd like to schedule a cleaning please.", delay: 0.8 },
  { role: "ai", text: "Of course! I have openings this Thursday at 2 PM or Friday at 10 AM. Which works best?", delay: 2.2 },
  { role: "patient", text: "Thursday at 2 works great!", delay: 4.0 },
  { role: "ai", text: "Perfect! You're confirmed for Thursday at 2 PM with Dr. Smith. I'll send a reminder! 😊", delay: 5.4 },
];

/* ── Word-by-word headline component ── */
const AnimatedHeadline = ({ line, delay = 0, gradient = false }: { line: string; delay?: number; gradient?: boolean }) => {
  const words = line.split(" ");
  return (
    <span className="inline">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.08,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className={`inline-block mr-[0.3em] ${gradient ? "bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-300" : ""}`}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

/* ── Phone Mockup ── */
const PhoneMockup = ({ mouseX, mouseY }: { mouseX: ReturnType<typeof useSpring>; mouseY: ReturnType<typeof useSpring> }) => {
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const translateX = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const translateY = useTransform(mouseY, [-0.5, 0.5], [-15, 15]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        rotateX,
        rotateY,
        x: translateX,
        y: translateY,
        perspective: 1000,
      }}
      className="relative"
    >
      {/* Phone frame */}
      <div className="relative w-[280px] sm:w-[300px] h-[560px] sm:h-[600px] rounded-[40px] bg-gradient-to-b from-gray-800 to-gray-900 p-[3px] shadow-2xl shadow-black/40">
        <div className="w-full h-full rounded-[38px] bg-gradient-to-b from-gray-900 to-[#1a1a2e] overflow-hidden flex flex-col">
          {/* Notch */}
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-24 h-6 bg-black rounded-full" />
          </div>

          {/* Chat header */}
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Breeh AI</p>
              <p className="text-green-400 text-[10px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Online now
              </p>
            </div>
          </div>

          {/* Chat messages */}
          <div className="flex-1 px-4 py-4 space-y-3 overflow-hidden">
            {chatMessages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: msg.delay, ease: "easeOut" }}
                className={`flex ${msg.role === "patient" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-2xl text-[11px] leading-relaxed ${msg.role === "patient"
                      ? "bg-purple-500 text-white rounded-br-md"
                      : "bg-white/10 text-white/90 rounded-bl-md"
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
              transition={{ delay: 6.8 }}
              className="flex justify-start"
            >
              <div className="bg-white/10 px-4 py-2.5 rounded-2xl rounded-bl-md flex gap-1.5">
                {[0, 1, 2].map((dot) => (
                  <span
                    key={dot}
                    className="w-1.5 h-1.5 bg-white/60 rounded-full"
                    style={{
                      animation: `typing-dot 1.4s ease-in-out ${dot * 0.2}s infinite`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <div className="px-4 py-3 border-t border-white/10 flex items-center gap-2">
            <div className="flex-1 h-8 bg-white/5 rounded-full px-3 flex items-center">
              <span className="text-white/30 text-[10px]">Type a message...</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-purple-500/60 flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating icons around phone */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-6 w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-400/80 to-purple-600/80 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-purple-500/30"
      >
        <Calendar className="w-5 h-5 text-white" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-2 -left-8 w-11 h-11 rounded-2xl bg-gradient-to-br from-teal-400/80 to-teal-600/80 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-teal-500/30"
      >
        <MessageSquare className="w-5 h-5 text-white" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 -left-10 w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400/60 to-purple-500/60 backdrop-blur-sm flex items-center justify-center shadow-lg"
      >
        <Phone className="w-4 h-4 text-white" />
      </motion.div>
    </motion.div>
  );
};

/* ═══════════════════════════ HERO SECTION ═══════════════════════════ */
const HeroSection = ({ onBookDemo }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  const mouseX = useSpring(rawMouseX, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(rawMouseY, { stiffness: 100, damping: 30 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      rawMouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      rawMouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [rawMouseX, rawMouseY]
  );

  /* Animated counter */
  const [count, setCount] = useState(0);
  useEffect(() => {
    let frame: number;
    const target = 200;
    const dur = 2000; // ms
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      setCount(Math.floor(t * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    const timer = setTimeout(() => {
      frame = requestAnimationFrame(tick);
    }, 1200);
    return () => { clearTimeout(timer); cancelAnimationFrame(frame); };
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden hero-gradient-mesh"
    >
      {/* ── Animated gradient orbs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-40"
          style={{
            background: "radial-gradient(circle, hsla(260, 80%, 75%, 0.6), transparent 70%)",
            filter: "blur(80px)",
            animation: "orb-drift-1 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[-15%] left-[-10%] w-[450px] h-[450px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, hsla(330, 60%, 70%, 0.5), transparent 70%)",
            filter: "blur(80px)",
            animation: "orb-drift-2 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[30%] left-[40%] w-[350px] h-[350px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, hsla(200, 70%, 70%, 0.4), transparent 70%)",
            filter: "blur(80px)",
            animation: "orb-drift-3 22s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-24 md:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* LEFT — Text (55%) */}
          <div className="lg:w-[55%] text-center lg:text-left">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-white/80 uppercase">
                AI-Powered Dental Receptionist
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.05] tracking-tight text-white mb-6">
              <AnimatedHeadline line="Never Miss a" delay={0.15} />
              <br />
              <AnimatedHeadline line="Patient Call" delay={0.4} gradient />
              <br />
              <AnimatedHeadline line="Again" delay={0.65} />
            </h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="text-base md:text-lg text-white/60 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Breeh AI answers, schedules, and follows up with patients 24/7 —
              so your team can focus on delivering exceptional care.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Primary CTA */}
              <button
                onClick={onBookDemo}
                className="group relative font-semibold rounded-full px-10 py-4 text-sm tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/40" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book a Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onBookDemo}
                className="font-semibold rounded-full px-10 py-4 text-sm tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20"
              >
                Watch Demo
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              {/* Star rating */}
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    style={{
                      animation: `star-pop 0.4s ease-out ${1.5 + i * 0.12}s both`,
                    }}
                  />
                ))}
              </div>
              <p className="text-sm text-white/60">
                Trusted by <span className="text-white font-semibold">{count}+</span> dental practices
              </p>
            </motion.div>
          </div>

          {/* RIGHT — Phone Mockup (45%) */}
          <div className="lg:w-[45%] flex justify-center lg:justify-end">
            <PhoneMockup mouseX={mouseX} mouseY={mouseY} />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
};

export default HeroSection;
