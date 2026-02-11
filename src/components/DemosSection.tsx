import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import demoAnalytics from "@/assets/product-hero.jpg";
import demoCallHandling from "@/assets/product-connection.jpg";
import demoScheduler from "@/assets/product-integration.jpg";

const demos = [
  {
    title: "Call Analytics Dashboard",
    description: "Discover powerful analytics for AI agent optimization in your dental practice",
    image: demoAnalytics,
  },
  {
    title: "AI Call Handling",
    description: "Unleash the true potential of automated patient communication via Agentic AI",
    image: demoCallHandling,
  },
  {
    title: "Appointment Scheduler",
    description: "Smart scheduling that syncs with your PMS and fills your calendar automatically",
    image: demoScheduler,
  },
];

const DemosSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % demos.length);
  const prev = () => setCurrent((prev) => (prev - 1 + demos.length) % demos.length);

  return (
    <section className="py-24 lg:py-32 section-alt relative overflow-hidden" id="demos">
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
          <div className="flex items-center justify-center min-h-[420px] md:min-h-[480px]">
            {demos.map((demo, index) => {
              const offset = index - current;
              const isCenter = index === current;

              return (
                <motion.div
                  key={index}
                  animate={{
                    scale: isCenter ? 1 : 0.82,
                    opacity: isCenter ? 1 : 0.4,
                    x: offset * 100,
                    zIndex: isCenter ? 10 : 1,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`absolute w-full max-w-2xl ${isCenter ? "" : "pointer-events-none"
                    }`}
                >
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-border bg-secondary">
                    {/* Image container */}
                    <div className="relative aspect-video bg-foreground/5 cursor-pointer group" onClick={() => window.open("https://calendly.com/breeh-ai/30min", "_blank")}>
                      <img
                        src={demo.image}
                        alt={demo.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                      {/* Play overlay */}
                      {isCenter && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            className="w-20 h-20 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center shadow-lg cursor-pointer"
                          >
                            <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                          </motion.div>
                        </div>
                      )}
                    </div>

                    {/* Caption */}
                    {isCenter && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-6 text-center bg-card"
                      >
                        <h3 className="font-display font-bold text-lg text-foreground mb-1">
                          <span className="text-accent">{demo.title}</span>
                        </h3>
                        <p className="text-sm text-muted-foreground">{demo.description}</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors bg-background shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {demos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === current
                    ? "w-10 bg-accent"
                    : "w-4 bg-border hover:bg-muted-foreground/30"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors bg-background shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemosSection;
