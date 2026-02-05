import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Breeh AI transformed our customer support operations. We went from 40% to 90% automation in just 3 months, reducing response times by 80%.",
    author: "Sarah Chen",
    title: "VP of Customer Experience",
    company: "TechFlow Inc.",
    metric: "90% Automation",
  },
  {
    quote: "The voice AI is indistinguishable from human agents. Our customers genuinely can't tell the difference, and our CSAT scores have never been higher.",
    author: "Marcus Rodriguez",
    title: "Head of Digital Transformation",
    company: "Global Retail Corp",
    metric: "4.8 CSAT Score",
  },
  {
    quote: "We saved $4.2M in the first year by deploying Breeh AI across our support channels. The ROI was visible within the first quarter.",
    author: "Priya Sharma",
    title: "CTO",
    company: "FinServ Solutions",
    metric: "$4.2M Saved",
  },
  {
    quote: "Deploying across 12 languages simultaneously was seamless. Breeh AI's multilingual capabilities are best-in-class for enterprise scale.",
    author: "Akira Tanaka",
    title: "Director of Operations",
    company: "Pacific Commerce",
    metric: "12 Languages",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase gradient-bg-primary text-primary-foreground mb-6">
            Customer Stories
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Loved by enterprises
            <br />
            <span className="gradient-text">across the globe</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="glass-card-light rounded-3xl p-10 md:p-14"
              >
                <Quote className="w-10 h-10 text-primary/30 mb-6" />
                
                <p className="text-xl md:text-2xl font-display font-medium text-foreground leading-relaxed mb-8">
                  "{testimonials[current].quote}"
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="font-display font-semibold text-foreground">
                      {testimonials[current].author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[current].title}, {testimonials[current].company}
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-full gradient-bg-primary">
                    <span className="font-display font-bold text-sm text-primary-foreground">
                      {testimonials[current].metric}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-8 gradient-bg-primary"
                        : "bg-border hover:bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
