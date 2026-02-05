import { motion } from "framer-motion";
import { Shield, Lock, FileCheck } from "lucide-react";

const certifications = [
  { icon: Shield, label: "HIPAA" },
  { icon: Lock, label: "ISO 27001" },
  { icon: FileCheck, label: "ISO 27701" },
  { icon: Shield, label: "SOC 2 Type II" },
];

const integrations = ["Dentrix", "Eaglesoft", "Open Dental", "Curve Dental"];

const SecuritySection = () => {
  return (
    <section className="section-lavender py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main gradient card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, hsl(248 65% 55%) 0%, hsl(248 60% 58%) 30%, hsl(217 91% 60%) 60%, hsl(210 100% 80%) 100%)",
          }}
        >
          {/* Header inside gradient */}
          <div className="pt-16 pb-8 px-8 md:px-16">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-accent-foreground italic leading-tight">
              Deploy with confidence,
              <br />
              deliver value faster
            </h2>
          </div>

          {/* Cards grid overlapping the gradient */}
          <div className="px-6 md:px-12 pb-12">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Security Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-background rounded-2xl p-8 md:p-10 shadow-lg"
              >
                <div className="flex gap-5 mb-6">
                  {certifications.map((cert) => (
                    <div key={cert.label} className="text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                        <cert.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-[11px] font-semibold text-foreground">
                        {cert.label}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-foreground/70 leading-relaxed mb-6 text-sm">
                  Our robust guardrails and Responsible AI principles protect
                  sensitive patient data while ensuring industry-leading compliance
                  standards.
                </p>
                <a
                  href="#"
                  className="inline-block bg-foreground text-background rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-foreground/90 transition-colors"
                >
                  Learn more
                </a>
              </motion.div>

              {/* Integrations side */}
              <div className="flex flex-col gap-4">
                {/* Tag */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="gradient-bg-primary rounded-full px-6 py-3 self-start shadow-md"
                >
                  <span className="text-accent-foreground font-semibold text-sm">
                    Go to market faster with 50+ integrations
                  </span>
                </motion.div>

                {/* Integrations Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="bg-background rounded-2xl p-8 md:p-10 shadow-lg flex-1"
                >
                  <div className="flex flex-wrap gap-4 mb-6">
                    {integrations.map((name) => (
                      <span
                        key={name}
                        className="text-sm font-display font-bold text-foreground/80"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                  <p className="text-foreground/70 leading-relaxed mb-6 text-sm">
                    Connect with your existing practice management system via
                    50+ pre-built integrations, including Dentrix, Eaglesoft,
                    Open Dental, and Curve.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-foreground text-background rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-foreground/90 transition-colors"
                  >
                    Learn more
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Bottom security badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6"
            >
              <div className="bg-background/80 backdrop-blur-sm rounded-full px-8 py-4 inline-flex items-center gap-3 shadow-md">
                <Shield className="w-5 h-5 text-accent" />
                <span className="font-semibold text-foreground text-sm">
                  HIPAA-compliant security with Safe AI
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
