"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "30%", label: "Calls go unanswered" },
  { value: "78%", label: "Book with first responder" },
  { value: "100%", label: "Available 24/7" },
];

const MissionSection = () => {
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
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="text-sm font-semibold text-primary tracking-wide">
                Our Mission
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] text-foreground leading-tight mb-8">
              <span className="text-primary">30%</span> of dental practice calls
              go unanswered, and{" "}
              <span className="text-primary">78%</span> of patients book with
              the first practice that responds.
            </h2>

            {/* Body */}
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Our AI dental receptionist instantly responds to missed callers
              through text or voice with empathetic, human-like messages that
              feel genuine and book appointments 24/7. Unlike traditional virtual
              receptionists, our dental AI never sleeps.{" "}
              <span className="font-bold text-foreground">
                Always On. Always Caring.
              </span>
            </p>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold rounded-full px-8 py-4 text-sm transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
            >
              Read Case Studies
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right Stats Cards */}
          <div className="flex flex-col gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-secondary border border-border rounded-2xl p-8 md:p-10"
              >
                <p className="font-display font-bold text-4xl md:text-5xl text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
