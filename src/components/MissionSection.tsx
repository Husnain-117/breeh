import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import missionImg from "@/assets/hero-dental-1.jpg";

/* ── Animated counter hook ── */
const useCountUp = (target: number, duration = 2000, suffix = "") => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setValue(Math.floor(eased * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  return { ref, value: `${value}${suffix}` };
};

/* ── Stat card data ── */
const statsData = [
  { target: 30, suffix: "%", label: "Calls go unanswered", position: "top-right" as const },
  { target: 78, suffix: "%", label: "Book with first responder", position: "bottom-left" as const },
  { target: 24, suffix: "/7", label: "Always available", position: "mid-left" as const },
];

/* ── Floating Stat Card ── */
const FloatingStatCard = ({
  target,
  suffix,
  label,
  position,
  delay,
}: {
  target: number;
  suffix: string;
  label: string;
  position: "top-right" | "bottom-left" | "mid-left";
  delay: number;
}) => {
  const counter = useCountUp(target, 2000, suffix);

  const positionClasses = {
    "top-right": "-top-6 -right-6 md:-top-8 md:-right-8",
    "bottom-left": "-bottom-6 -left-4 md:-bottom-8 md:-left-6",
    "mid-left": "top-1/2 -left-6 md:-left-10 -translate-y-1/2",
  };

  const floatDelay = {
    "top-right": 0,
    "bottom-left": 2,
    "mid-left": 1,
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`absolute ${positionClasses[position]} z-20`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          delay: floatDelay[position],
        }}
        className="bg-white/90 backdrop-blur-xl border border-white/40 rounded-2xl px-5 py-4 shadow-xl shadow-primary/10
          min-w-[120px] text-center"
      >
        <p className="font-display font-bold text-3xl md:text-4xl bg-gradient-to-br from-primary to-purple-600 bg-clip-text text-transparent">
          <span ref={counter.ref}>{counter.value}</span>
        </p>
        <p className="text-muted-foreground text-[11px] leading-tight mt-1 font-medium">
          {label}
        </p>
      </motion.div>
    </motion.div>
  );
};

/* ═══════════════════════════ MISSION SECTION ═══════════════════════════ */
const MissionSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);

  /* Parallax on scroll */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const cardY1 = useTransform(scrollYProgress, [0, 1], [60, -30]);
  const cardY2 = useTransform(scrollYProgress, [0, 1], [40, -50]);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 section-alt relative overflow-hidden min-h-[80vh] flex items-center"
      id="mission"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold text-accent tracking-[0.2em] uppercase mb-6">
              Our Mission
            </p>

            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-foreground leading-tight mb-6">
              <span className="bg-primary/10 px-2 py-0.5 rounded-md text-primary inline">
                30%
              </span>{" "}
              of dental calls go unanswered.{" "}
              <span className="bg-primary/10 px-2 py-0.5 rounded-md text-primary inline">
                78%
              </span>{" "}
              of patients book with whoever responds first.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md text-base lg:text-lg">
              Breeh AI responds instantly through voice and text with natural,
              human-like conversation — booking appointments around the clock.
              <br />
              <span className="font-semibold text-foreground mt-2 block">
                Always on. Always caring.
              </span>
            </p>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/case-studies")}
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold rounded-full px-8 py-3.5 text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
            >
              Read Case Studies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* RIGHT — Image with floating stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {/* Image with parallax */}
            <motion.div
              style={{ y: imageY }}
              className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10"
            >
              <img
                src={missionImg}
                alt="Modern dental practice"
                className="w-full h-80 lg:h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-3xl" />
            </motion.div>

            {/* Floating stat cards */}
            <motion.div style={{ y: cardY1 }}>
              <FloatingStatCard
                target={statsData[0].target}
                suffix={statsData[0].suffix}
                label={statsData[0].label}
                position={statsData[0].position}
                delay={0.4}
              />
            </motion.div>

            <motion.div style={{ y: cardY2 }}>
              <FloatingStatCard
                target={statsData[1].target}
                suffix={statsData[1].suffix}
                label={statsData[1].label}
                position={statsData[1].position}
                delay={0.55}
              />
            </motion.div>

            <FloatingStatCard
              target={statsData[2].target}
              suffix={statsData[2].suffix}
              label={statsData[2].label}
              position={statsData[2].position}
              delay={0.7}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
