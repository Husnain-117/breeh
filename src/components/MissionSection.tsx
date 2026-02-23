import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import missionImg from "@/assets/hero-dental-1.jpg";

const stats = [
  { value: "30%", label: "Calls go unanswered" },
  { value: "78%", label: "Book with first responder" },
  { value: "24/7", label: "Always available" },
];

const MissionSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 lg:py-32 section-alt relative overflow-hidden" id="mission">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold text-accent tracking-wide mb-4">
              Our Mission
            </p>

            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-foreground leading-tight mb-6">
              <span className="text-primary">30%</span> of dental calls go
              unanswered. <span className="text-primary">78%</span> of patients
              book with whoever responds first.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg text-sm">
              Breeh AI responds instantly through voice and text with natural,
              human-like conversation — booking appointments around the clock.
              <span className="font-semibold text-foreground"> Always on. Always caring.</span>
            </p>

            <button
              onClick={() => navigate("/case-studies")}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold rounded-full px-8 py-3.5 text-sm transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
            >
              Read Case Studies
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right — Image with stat overlay */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={missionImg}
                alt="Modern dental practice"
                className="w-full h-80 lg:h-[420px] object-cover"
              />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -bottom-6 left-4 right-4 flex gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex-1 bg-card/95 backdrop-blur-md border border-border rounded-xl p-4 text-center shadow-lg"
                >
                  <p className="font-display font-bold text-xl text-primary mb-0.5">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-[11px] leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
