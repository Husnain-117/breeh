import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import demoAnalytics from "@/assets/demo-analytics.mp4";
import demoCallHandling from "@/assets/demo-call-handling.mp4";
import demoScheduler from "@/assets/demo-scheduler.mp4";

const demos = [
  {
    title: "Call Analytics Dashboard",
    description: "Discover powerful analytics for AI agent optimization in your dental practice",
    video: demoAnalytics,
  },
  {
    title: "AI Call Handling",
    description: "Unleash the true potential of automated patient communication via Agentic AI",
    video: demoCallHandling,
  },
  {
    title: "Appointment Scheduler",
    description: "Smart scheduling that syncs with your PMS and fills your calendar automatically",
    video: demoScheduler,
  },
];

const DemosSection = () => {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const next = () => setCurrent((prev) => (prev + 1) % demos.length);
  const prev = () => setCurrent((prev) => (prev - 1 + demos.length) % demos.length);

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    if (playing === index) {
      video.pause();
      setPlaying(null);
    } else {
      // Pause any other playing video
      videoRefs.current.forEach((v, i) => {
        if (v && i !== index) v.pause();
      });
      video.play();
      setPlaying(index);
    }
  };

  // Pause video when sliding away
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (v && i !== current) {
        v.pause();
        v.currentTime = 0;
      }
    });
    if (playing !== null && playing !== current) {
      setPlaying(null);
    }
  }, [current]);

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
                  className={`absolute w-full max-w-2xl ${
                    isCenter ? "" : "pointer-events-none"
                  }`}
                >
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-border bg-secondary">
                    {/* Video container */}
                    <div className="relative aspect-video bg-foreground/5">
                      <video
                        ref={(el) => { videoRefs.current[index] = el; }}
                        src={demo.video}
                        className="w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        onEnded={() => setPlaying(null)}
                      />

                      {/* Play/Pause overlay */}
                      {isCenter && (
                        <button
                          onClick={() => togglePlay(index)}
                          className="absolute inset-0 flex items-center justify-center bg-foreground/10 hover:bg-foreground/20 transition-colors group"
                        >
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                          >
                            {playing === index ? (
                              <Pause className="w-6 h-6 text-accent-foreground" fill="currentColor" />
                            ) : (
                              <Play className="w-6 h-6 text-accent-foreground ml-1" fill="currentColor" />
                            )}
                          </motion.div>
                        </button>
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
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === current
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
