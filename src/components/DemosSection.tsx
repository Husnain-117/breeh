import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const demos = [
  {
    title: "Call Analytics Dashboard",
    description: "Discover powerful analytics for AI agent optimization in your dental practice",
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "AI Call Handling",
    description: "Unleash the true potential of automated patient communication via Agentic AI",
    color: "from-accent/20 to-primary/20",
  },
  {
    title: "Appointment Scheduler",
    description: "Smart scheduling that syncs with your PMS and fills your calendar automatically",
    color: "from-primary/20 to-accent/20",
  },
];

const DemosSection = () => {
  const [current, setCurrent] = useState(1);

  const next = () => setCurrent((prev) => (prev + 1) % demos.length);
  const prev = () => setCurrent((prev) => (prev - 1 + demos.length) % demos.length);

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-foreground tracking-wide mb-3">
            On-demand Interactive Demos
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground">
            Experience our AI Dental Platform
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-6 min-h-[400px]">
            {demos.map((demo, index) => {
              const offset = index - current;
              const isCenter = index === current;

              return (
                <motion.div
                  key={index}
                  animate={{
                    scale: isCenter ? 1 : 0.85,
                    opacity: isCenter ? 1 : 0.5,
                    x: offset * 80,
                    zIndex: isCenter ? 10 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute w-full max-w-lg rounded-3xl overflow-hidden shadow-xl ${
                    isCenter ? "" : "pointer-events-none"
                  }`}
                >
                  <div className={`bg-gradient-to-br ${demo.color} border border-border/30 rounded-3xl p-1`}>
                    <div className="bg-accent/10 rounded-2xl p-6 aspect-video flex flex-col items-center justify-center relative">
                      {/* Mockup UI lines */}
                      <div className="w-full space-y-3 mb-auto pt-4">
                        <div className="flex gap-2">
                          <div className="h-2 w-16 rounded-full bg-accent/20" />
                          <div className="h-2 w-24 rounded-full bg-primary/20" />
                          <div className="h-2 w-12 rounded-full bg-accent/20" />
                        </div>
                        <div className="h-20 w-full rounded-xl bg-background/50" />
                        <div className="flex gap-2">
                          <div className="h-16 w-1/2 rounded-xl bg-background/40" />
                          <div className="h-16 w-1/2 rounded-xl bg-background/40" />
                        </div>
                      </div>

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-accent-foreground ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  {isCenter && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-6 text-center"
                    >
                      <h3 className="font-display font-bold text-lg text-foreground mb-2">
                        <span className="text-accent">{demo.title}:</span>{" "}
                        {demo.description}
                      </h3>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors bg-background shadow-sm z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors bg-background shadow-sm z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DemosSection;
