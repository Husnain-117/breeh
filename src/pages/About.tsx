import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlaybookModal from "@/components/PlaybookModal";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/config";
import {
  Heart, Shield, Users, Target, Award, Zap,
  ArrowRight, CheckCircle2, Globe, Clock
} from "lucide-react";

const About = () => {
  const [playbookOpen, setPlaybookOpen] = useState(false);

  const openCalendly = () => {
    window.open(SITE_CONFIG.calendlyUrl, "_blank");
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-body">
      <Navbar onBookDemo={openCalendly} onOpenPlaybook={() => setPlaybookOpen(true)} />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8 section-lavender">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p {...fadeInUp} className="text-primary font-semibold tracking-wide mb-4 text-sm uppercase">
            About Breeh AI
          </motion.p>
          <motion.h1
            {...fadeInUp}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display font-bold text-3xl sm:text-5xl md:text-7xl text-foreground mb-8 leading-tight"
          >
            Redefining Patient <br />
            <span className="text-primary">Communication</span>
          </motion.h1>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            We're on a mission to ensure no dental practice ever loses a patient due to a missed call again. Powered by AI, built for people.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 lg:px-8 section-alt">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              Our Mission
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Every Patient Deserves <br /> a Prompt Response
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Dental practices lose an estimated 35% of new patient calls — and 75% of those callers never call back. That's thousands of dollars in lost revenue and, more importantly, patients who don't get the care they need.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Breeh AI was founded to solve this problem. We combine advanced conversational AI with deep dental industry knowledge to create virtual receptionists that feel genuinely human, respond instantly, and integrate seamlessly with your practice management software.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Heart, label: "Patient-First", desc: "Every interaction prioritizes patient experience" },
              { icon: Shield, label: "HIPAA Compliant", desc: "Enterprise-grade security for all data" },
              { icon: Clock, label: "24/7 Available", desc: "Never miss a call, day or night" },
              { icon: Globe, label: "Multi-Location", desc: "Scales across DSOs and group practices" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border text-center hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 lg:px-8 section-lavender">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span {...fadeInUp} className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            Our Story
          </motion.span>
          <motion.h2 {...fadeInUp} transition={{ delay: 0.1 }} className="font-display font-bold text-3xl md:text-5xl text-foreground mb-8">
            Built by People Who <br /> Understand Dentistry
          </motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground leading-relaxed mb-8">
            Our founding team spent years working alongside dental professionals, witnessing firsthand the frustration of missed calls and lost patients. We saw practices spending thousands on marketing to attract new patients, only to lose them at the very first touchpoint — the phone call.
          </motion.p>
          <motion.p {...fadeInUp} transition={{ delay: 0.3 }} className="text-lg text-muted-foreground leading-relaxed">
            That's why we built Breeh AI — an intelligent, always-on virtual receptionist that doesn't just answer calls, but understands your practice, your patients, and your schedule. We're not replacing your team; we're giving them superpowers.
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-8 section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.span {...fadeInUp} className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              Our Values
            </motion.span>
            <motion.h2 {...fadeInUp} transition={{ delay: 0.1 }} className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6">
              What Drives Us Every Day
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Precision", desc: "We obsess over accuracy. Every appointment booked, every patient detail captured — nothing falls through the cracks." },
              { icon: Users, title: "Empathy", desc: "Technology should feel human. Our AI speaks with warmth, patience, and understanding — just like your best receptionist." },
              { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards of quality, security, and performance. Your patients deserve nothing less." },
              { icon: Zap, title: "Innovation", desc: "We're constantly pushing the boundaries of what AI can do for dental practices, staying ahead of the curve." },
              { icon: Shield, title: "Trust", desc: "Patient data is sacred. We maintain HIPAA compliance and enterprise-grade security at every level." },
              { icon: Heart, title: "Impact", desc: "We measure success by the real impact we make — more patients served, more revenue recovered, happier teams." },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 lg:px-8 section-lavender">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 {...fadeInUp} className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6">
              The Numbers Speak
            </motion.h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "80%", label: "Call Recovery Rate" },
              { value: "24/7", label: "Always Available" },
              { value: "5 min", label: "Setup Time" },
              { value: "30×", label: "Average ROI" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-display font-bold text-4xl md:text-5xl text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8 section-alt">
        <div className="max-w-4xl mx-auto bg-foreground rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <motion.h2 {...fadeInUp} className="font-display font-bold text-3xl md:text-5xl text-primary-foreground mb-6 leading-tight">
              Ready to Transform <br /> Your Practice?
            </motion.h2>
            <motion.p {...fadeInUp} transition={{ delay: 0.1 }} className="text-primary-foreground/60 text-lg mb-10 max-w-xl mx-auto">
              Join the growing number of dental practices using Breeh AI to capture every patient opportunity.
            </motion.p>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={openCalendly} className="btn-primary flex items-center gap-2 text-lg px-10 py-4">
                Book a Demo <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => setPlaybookOpen(true)} className="btn-outline-light flex items-center gap-2">
                Get the Playbook
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer onOpenPlaybook={() => setPlaybookOpen(true)} onBookDemo={openCalendly} />
      <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
    </div>
  );
};

export default About;
