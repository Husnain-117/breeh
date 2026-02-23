import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, ArrowRight, Plug } from "lucide-react";

const certifications = [
  { icon: Shield, label: "HIPAA" },
  { icon: Lock, label: "ISO 27001" },
  { icon: FileCheck, label: "ISO 27701" },
  { icon: Shield, label: "SOC 2 Type II" },
];

const integrations = ["Dentrix", "Eaglesoft", "Open Dental", "Curve Dental"];

const SecuritySection = () => {
  return (
    <section className="section-alt py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Single unified gradient card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] overflow-hidden relative"
          style={{
            background:
              "linear-gradient(135deg, hsl(244 58% 56%) 0%, hsl(244 58% 61%) 40%, hsl(244 55% 65%) 100%)",
          }}
        >
          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 p-10 md:p-16 lg:p-20">
            {/* Header */}
            <div className="mb-14 max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="font-display font-bold text-3xl md:text-5xl text-white italic leading-tight mb-4"
              >
                Deploy with confidence,
                <br />
                deliver value faster
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-white/50 text-lg leading-relaxed"
              >
                Enterprise-grade security, compliance, and 50+ integrations — everything you need to go live with confidence.
              </motion.p>
            </div>

            {/* Single unified content card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md overflow-hidden"
              style={{ background: "linear-gradient(165deg, rgba(255,255,255,0.97) 0%, rgba(245,243,255,0.98) 100%)" }}
            >
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/40">
                {/* Security & Compliance Side */}
                <div className="overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=300&fit=crop&q=80"
                      alt="Enterprise security infrastructure"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                  </div>
                  <div className="p-8 md:p-10 pt-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-foreground">
                        Security & Compliance
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {certifications.map((cert) => (
                        <div
                          key={cert.label}
                          className="flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2"
                        >
                          <cert.icon className="w-4 h-4 text-primary" />
                          <span className="text-xs font-semibold text-foreground/80">
                            {cert.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="text-foreground/60 leading-relaxed text-sm mb-6">
                      Our robust guardrails and Responsible AI principles protect
                      sensitive patient data while ensuring industry-leading
                      compliance standards.
                    </p>

                    <a
                      href="/hipaa"
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm group hover:gap-3 transition-all"
                    >
                      Learn more{" "}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>

                {/* Integrations Side */}
                <div className="overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=300&fit=crop&q=80"
                      alt="Software integrations and connected systems"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                  </div>
                  <div className="p-8 md:p-10 pt-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Plug className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-foreground">
                        50+ Integrations
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {integrations.map((name) => (
                        <span
                          key={name}
                          className="bg-foreground/5 border border-foreground/10 rounded-full px-4 py-2 text-xs font-semibold text-foreground/80"
                        >
                          {name}
                        </span>
                      ))}
                    </div>

                    <p className="text-foreground/60 leading-relaxed text-sm mb-6">
                      Connect with your existing practice management system via
                      50+ pre-built integrations. Go live in minutes, not months.
                    </p>

                    <a
                      href="/integrations"
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm group hover:gap-3 transition-all"
                    >
                      View all integrations{" "}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom trust bar */}
              <div className="border-t border-border/40 px-8 md:px-10 py-4 flex flex-wrap items-center justify-between gap-4 bg-primary/[0.02]">
                <div className="flex items-center gap-2 text-foreground/50 text-xs">
                  <Shield className="w-4 h-4 text-primary/60" />
                  <span className="font-medium">
                    HIPAA-compliant security with Safe AI
                  </span>
                </div>
                <span className="text-foreground/30 text-xs font-medium">
                  Trusted by 200+ dental practices
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySection;
