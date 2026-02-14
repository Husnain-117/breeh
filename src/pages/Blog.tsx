import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { SITE_CONFIG } from "@/lib/config";
import PlaybookModal from "@/components/PlaybookModal";
import {
  Calendar,
  Clock,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Shield,
  Zap,
  Users,
  BarChart3,
  MessageSquare,
  PhoneCall,
  Phone,
  Bot,
  HeadphonesIcon,
  Lock,
  Layers,
  Timer,
  DollarSign,
  Mic,
  InfinityIcon,
  Settings,
  Award,
  TrendingUp,
  X,
  Check,
} from "lucide-react";

const Blog = () => {
  const [playbookOpen, setPlaybookOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const openCalendly = () => {
    window.open(SITE_CONFIG.calendlyUrl, "_blank");
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true },
  };

  const staggerChild = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const tableOfContents = [
    { id: "the-problem", label: "The Silent Revenue Killer" },
    { id: "why-breeh", label: "Why Choose Breeh AI" },
    { id: "ten-reasons", label: "10 Reasons to Switch" },
    { id: "comparison", label: "Competitor Comparison" },
    { id: "technical", label: "Technical Architecture" },
    { id: "closing", label: "The Bottom Line" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map((item) => item.id);
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const reasons = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      number: "01",
      title: "We Don't Just Answer Calls — We Recover Lost Patients",
      description:
        "Most tools work only when someone answers the phone. We work when calls are missed, which is where most revenue is lost. Every unanswered ring is a patient walking to your competitor. Breeh intercepts that moment and turns it into a booked appointment.",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      number: "02",
      title: "Built Specifically for Dental Practices",
      description:
        "We're designed only for dental workflows — appointments, urgency detection, patient intent recognition, and insurance verification. Other tools are adapted from generic call centers. Breeh is dental-first, dental-only, dental-always.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      number: "03",
      title: "Works 24/7, Even During Peak Hours",
      description:
        "Peak hours and after-hours are when most calls are missed. Your front desk is overwhelmed at 9 AM and gone at 6 PM. Breeh answers every call, any time, without extra staff — turning your practice into a round-the-clock patient acquisition machine.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      number: "04",
      title: "Direct Impact on Revenue, Not Just Features",
      description:
        "We focus on one thing: turning missed calls into booked appointments and real revenue. While other platforms sell you dashboards and reports, we sell you patients. The ROI isn't theoretical — it shows up in your bank account.",
    },
    {
      icon: <Mic className="w-6 h-6" />,
      number: "05",
      title: "Sounds Human, Not Robotic",
      description:
        "Patients feel like they're talking to a real receptionist, so they're comfortable booking — not hanging up. Our voice AI uses natural cadence, empathetic responses, and dental-specific language that puts anxious patients at ease.",
    },
    {
      icon: <InfinityIcon className="w-6 h-6" />,
      number: "06",
      title: "Handles Unlimited Calls Simultaneously",
      description:
        "Your front desk can handle one call at a time. Breeh handles dozens simultaneously — no hold music, no voicemail, no lost patients. During your busiest Monday morning, every single caller gets answered within seconds.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      number: "07",
      title: "No Change to How Your Team Works",
      description:
        "We fit into your existing system and workflow seamlessly. Your staff focuses on in-office patients while Breeh handles the phones. No new software to learn, no workflows to redesign, no disruption to your practice culture.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      number: "08",
      title: "HIPAA-Compliant and Secure",
      description:
        "Patient data is protected with enterprise-grade encryption, role-based access controls, and full HIPAA compliance. Built for dental practices and DSOs that cannot afford a single data breach. Security isn't an add-on — it's foundational.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "09",
      title: "Proven AI Experience, Not Experimental",
      description:
        "We've been building voice AI for years and deployed it in real businesses generating real revenue. This isn't a beta product or a weekend project — it's production-ready infrastructure trusted by practices across the country.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      number: "10",
      title: "Breeh Pays for Itself",
      description:
        "Even a few recovered patients per month cover the entire cost. Everything after that is pure profit. Most practices see positive ROI within their first 30 days. The question isn't whether you can afford Breeh — it's whether you can afford not to have it.",
    },
  ];

  const comparisonData = [
    {
      feature: "Missed Call Recovery",
      breeh: true,
      generic: false,
      callCenter: false,
    },
    {
      feature: "Dental-Specific AI",
      breeh: true,
      generic: false,
      callCenter: false,
    },
    {
      feature: "24/7 Availability",
      breeh: true,
      generic: true,
      callCenter: true,
    },
    {
      feature: "Sub-2s Voice Response",
      breeh: true,
      generic: false,
      callCenter: false,
    },
    {
      feature: "Unlimited Concurrent Calls",
      breeh: true,
      generic: false,
      callCenter: false,
    },
    {
      feature: "HIPAA Compliance",
      breeh: true,
      generic: false,
      callCenter: true,
    },
    {
      feature: "No Workflow Disruption",
      breeh: true,
      generic: false,
      callCenter: false,
    },
    {
      feature: "Human-Like Voice",
      breeh: true,
      generic: false,
      callCenter: true,
    },
    {
      feature: "Revenue-First Design",
      breeh: true,
      generic: false,
      callCenter: false,
    },
    {
      feature: "PMS Integration",
      breeh: true,
      generic: true,
      callCenter: false,
    },
    {
      feature: "Patient Intent Detection",
      breeh: true,
      generic: false,
      callCenter: false,
    },
    {
      feature: "Self-Paying ROI",
      breeh: true,
      generic: false,
      callCenter: false,
    },
  ];

  const techDetails = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Controlled, Layered Architecture",
      description:
        "Purpose-built for dental workflows with a multi-layer AI pipeline that separates intent recognition, context management, and response generation. Each layer is independently optimizable, ensuring consistent quality across all patient interactions.",
    },
    {
      icon: <Timer className="w-8 h-8" />,
      title: "Sub-2 Second Response Time",
      description:
        "End-to-end response time stays under 1–1.5 seconds for text and sub-2 seconds for voice. We pre-cache common dental intents (appointment booking, emergency triage, insurance queries) and minimize generation latency through edge-deployed inference.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Infrastructure-Grade Reliability",
      description:
        "Built like critical infrastructure, not a chatbot demo. 99.9% uptime SLA, automatic failover, load balancing across regions, and graceful degradation under extreme traffic. Your patients never hear silence.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Healthcare-Grade Compliance from Day One",
      description:
        "HIPAA compliance wasn't bolted on — it was the foundation. End-to-end encryption, audit logging, BAA-ready architecture, PHI isolation, and zero-retention processing ensure patient data is never at risk.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Intelligent Control Layer",
      description:
        "Our strength isn't in the model — it's in the control layer around it. Guardrails prevent hallucination, context managers maintain conversation coherence, and dental-specific validation ensures every response is clinically appropriate and operationally useful.",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-body">
      <Navbar
        onBookDemo={openCalendly}
        onOpenPlaybook={() => setPlaybookOpen(true)}
      />

      {/* ═══════════════════════════════════════════════════
          NEWSPAPER HERO — Editorial Masthead
         ═══════════════════════════════════════════════════ */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-background border-b border-border">
        <div className="max-w-5xl mx-auto text-center">
          {/* Dateline */}
          <motion.div
            {...fadeInUp}
            className="flex items-center justify-center gap-3 text-muted-foreground text-sm mb-8"
          >
            <span className="uppercase tracking-[0.2em] font-semibold text-primary">
              The Breeh AI Journal
            </span>
            <span className="w-1 h-1 rounded-full bg-primary" />
            <span>February 14, 2026</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <Clock className="w-4 h-4" />
            <span>12 min read</span>
          </motion.div>

          {/* Decorative Rule */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.05 }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <div className="h-[2px] w-16 bg-primary" />
            <div className="h-[2px] w-32 bg-primary/60" />
            <div className="h-[2px] w-16 bg-primary" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeInUp}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.08] mb-8 tracking-tight"
          >
            Why Every Dental Practice
            <br />
            <span className="gradient-text">Needs Breeh AI</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10"
          >
            Other tools help manage calls.{" "}
            <strong className="text-foreground">
              Breeh AI makes sure no patient — and no revenue — is ever lost.
            </strong>{" "}
            An in-depth editorial on the technology, philosophy, and undeniable
            results behind the AI receptionist built exclusively for dentistry.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-10"
          >
            {[
              { value: "338+", label: "Missed Calls Recovered" },
              { value: "<2s", label: "Voice Response Time" },
              { value: "24/7", label: "Always Available" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display font-extrabold text-3xl md:text-4xl text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <button
              onClick={openCalendly}
              className="btn-primary inline-flex items-center gap-2 text-lg"
            >
              Book a Demo <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          MAIN CONTENT — Newspaper Two-Column Layout
         ═══════════════════════════════════════════════════ */}
      <section className="py-20 px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* ─── Table of Contents ─── */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <h3 className="font-display font-bold text-sm uppercase tracking-[0.15em] text-muted-foreground mb-6">
                  In This Issue
                </h3>
                <nav className="space-y-1">
                  {tableOfContents.map((item, i) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`group flex items-start gap-3 w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-300 ${
                        activeSection === item.id
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      <span className="font-mono text-xs mt-0.5 opacity-50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </button>
                  ))}
                </nav>

                {/* Newsletter */}
                <div className="mt-10 p-5 rounded-2xl border border-border bg-card">
                  <p className="font-display font-bold text-sm text-foreground mb-2">
                    Subscribe to Our Newsletter
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    Get dental AI insights delivered weekly.
                  </p>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  <button className="w-full btn-primary text-sm py-2.5">
                    Subscribe
                  </button>
                </div>
              </div>
            </aside>

            {/* ─── Article Body ─── */}
            <article className="lg:col-span-9">
              {/* ── Section 1: The Problem ── */}
              <div id="the-problem" className="mb-20 scroll-mt-32">
                <motion.div {...fadeInUp}>
                  <span className="inline-block font-mono text-xs text-primary uppercase tracking-[0.2em] mb-4">
                    Chapter 01
                  </span>
                  <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-8 leading-tight">
                    The Silent Revenue Killer in Every Dental Practice
                  </h2>
                </motion.div>

                <motion.div
                  {...fadeInUp}
                  transition={{ delay: 0.1 }}
                  className="space-y-6 text-muted-foreground text-lg leading-relaxed"
                >
                  <p>
                    <span className="font-display font-bold text-foreground text-5xl float-left mr-3 mt-1 leading-none">
                      E
                    </span>
                    very dental practice has a silent problem. It doesn't announce
                    itself in quarterly reports or staff meetings. It hides in the
                    gap between a phone ringing and no one picking up. It lives in
                    the voicemail that was never returned, the patient who called
                    during lunch and booked with a competitor instead.
                  </p>
                  <p>
                    The average dental practice misses{" "}
                    <strong className="text-foreground">
                      30–40% of incoming calls
                    </strong>
                    . Each missed call represents a potential patient worth{" "}
                    <strong className="text-foreground">$800–$1,200</strong> in
                    lifetime value. For a practice receiving 200 calls per month,
                    that's up to{" "}
                    <strong className="text-foreground">
                      $96,000 in annual lost revenue
                    </strong>{" "}
                    — silently bleeding out through the phone line.
                  </p>
                  <p>
                    Front desk teams are talented, dedicated professionals. But
                    they're human. They can only handle one call at a time. During
                    peak hours — Monday mornings, lunch breaks, after-school rushes
                    — the phone becomes the bottleneck of your entire operation.
                    And after 5 PM? The phone simply doesn't get answered at all.
                  </p>

                  {/* Pull Quote */}
                  <motion.blockquote
                    {...fadeInUp}
                    className="border-l-4 border-primary pl-8 py-6 my-10 bg-primary/5 rounded-r-2xl"
                  >
                    <p className="font-display font-bold text-xl md:text-2xl text-foreground italic leading-snug">
                      "The biggest threat to a dental practice's revenue isn't a
                      competitor down the street — it's the phone call that nobody
                      answered."
                    </p>
                  </motion.blockquote>

                  <p>
                    This is where Breeh AI enters the picture. Not as another piece
                    of software, not as a marketing gimmick — but as the
                    infrastructure layer between your practice and the patients
                    you're currently losing.
                  </p>
                </motion.div>
              </div>

              {/* ── Section 2: Why Breeh ── */}
              <div id="why-breeh" className="mb-20 scroll-mt-32">
                <motion.div {...fadeInUp}>
                  <span className="inline-block font-mono text-xs text-primary uppercase tracking-[0.2em] mb-4">
                    Chapter 02
                  </span>
                  <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-8 leading-tight">
                    Why Choose Breeh AI Over Everything Else?
                  </h2>
                </motion.div>

                <motion.div
                  {...fadeInUp}
                  transition={{ delay: 0.1 }}
                  className="space-y-6 text-muted-foreground text-lg leading-relaxed"
                >
                  <p>
                    The dental AI market is noisy. Dozens of companies promise
                    automation, efficiency, and patient engagement. But here's what
                    they don't tell you: most of them are{" "}
                    <strong className="text-foreground">
                      generic AI platforms
                    </strong>{" "}
                    with a dental label slapped on top. They were built for call
                    centers, adapted for healthcare, and forced into dental.
                  </p>
                  <p>
                    Breeh AI took a different path. It was{" "}
                    <strong className="text-foreground">
                      engineered from the ground up
                    </strong>{" "}
                    for a single purpose: ensuring that no dental practice ever
                    loses a patient due to a missed call. Every line of code, every
                    AI model, every workflow was designed with dentists, hygienists,
                    and front desk teams in mind.
                  </p>
                  <p>
                    The result? A system that doesn't just answer phones — it
                    understands dental context, recognizes patient urgency,
                    schedules appointments in real time, and does it all while
                    sounding like the warmest, most competent receptionist your
                    practice has ever had.
                  </p>
                </motion.div>
              </div>

              {/* ── Section 3: 10 Reasons ── */}
              <div id="ten-reasons" className="mb-20 scroll-mt-32">
                <motion.div {...fadeInUp}>
                  <span className="inline-block font-mono text-xs text-primary uppercase tracking-[0.2em] mb-4">
                    Chapter 03
                  </span>
                  <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-4 leading-tight">
                    10 Reasons Breeh AI is the Best Choice
                  </h2>
                  <p className="text-muted-foreground text-lg mb-12">
                    Not features. Not promises.{" "}
                    <strong className="text-foreground">
                      Reasons backed by architecture, results, and real-world
                      deployment.
                    </strong>
                  </p>
                </motion.div>

                <div className="space-y-8">
                  {reasons.map((reason, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{
                        duration: 0.6,
                        delay: i * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group relative flex gap-6 p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
                    >
                      {/* Number */}
                      <div className="shrink-0">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                          {reason.icon}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-baseline gap-3 mb-2">
                          <span className="font-mono text-xs text-primary/60">
                            {reason.number}
                          </span>
                          <h3 className="font-display font-bold text-lg md:text-xl text-foreground">
                            {reason.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ── Section 4: Comparison Table ── */}
              <div id="comparison" className="mb-20 scroll-mt-32">
                <motion.div {...fadeInUp}>
                  <span className="inline-block font-mono text-xs text-primary uppercase tracking-[0.2em] mb-4">
                    Chapter 04
                  </span>
                  <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-4 leading-tight">
                    How Breeh AI Compares
                  </h2>
                  <p className="text-muted-foreground text-lg mb-12">
                    A transparent, side-by-side comparison against generic AI
                    platforms and traditional call center solutions.
                  </p>
                </motion.div>

                <motion.div
                  {...fadeInUp}
                  transition={{ delay: 0.1 }}
                  className="overflow-hidden rounded-2xl border border-border"
                >
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary text-primary-foreground">
                          <th className="text-left px-6 py-5 font-display font-bold text-base">
                            Capability
                          </th>
                          <th className="text-center px-6 py-5 font-display font-bold text-base">
                            <span className="inline-flex items-center gap-2">
                              <Zap className="w-5 h-5" />
                              Breeh AI
                            </span>
                          </th>
                          <th className="text-center px-6 py-5 font-display font-bold text-base">
                            Generic AI
                          </th>
                          <th className="text-center px-6 py-5 font-display font-bold text-base">
                            Call Centers
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonData.map((row, i) => (
                          <motion.tr
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.03 }}
                            className={`border-b border-border ${
                              i % 2 === 0 ? "bg-card" : "bg-muted/30"
                            } hover:bg-primary/5 transition-colors`}
                          >
                            <td className="px-6 py-4 font-medium text-foreground">
                              {row.feature}
                            </td>
                            <td className="px-6 py-4 text-center">
                              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                                <Check className="w-5 h-5" />
                              </span>
                            </td>
                            <td className="px-6 py-4 text-center">
                              {row.generic ? (
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                                  <Check className="w-5 h-5" />
                                </span>
                              ) : (
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-destructive/10 text-destructive">
                                  <X className="w-5 h-5" />
                                </span>
                              )}
                            </td>
                            <td className="px-6 py-4 text-center">
                              {row.callCenter ? (
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                                  <Check className="w-5 h-5" />
                                </span>
                              ) : (
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-destructive/10 text-destructive">
                                  <X className="w-5 h-5" />
                                </span>
                              )}
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>

                {/* Score summary */}
                <motion.div
                  {...fadeInUp}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-3 gap-4 mt-8"
                >
                  {[
                    { label: "Breeh AI", score: "12/12", color: "primary" },
                    { label: "Generic AI", score: "3/12", color: "muted-foreground" },
                    { label: "Call Centers", score: "3/12", color: "muted-foreground" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`text-center p-5 rounded-xl border ${
                        i === 0
                          ? "border-primary bg-primary/5"
                          : "border-border bg-card"
                      }`}
                    >
                      <div
                        className={`font-display font-extrabold text-2xl mb-1 ${
                          i === 0 ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {item.score}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* ── Section 5: Technical Architecture ── */}
              <div id="technical" className="mb-20 scroll-mt-32">
                <motion.div {...fadeInUp}>
                  <span className="inline-block font-mono text-xs text-primary uppercase tracking-[0.2em] mb-4">
                    Chapter 05
                  </span>
                  <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-4 leading-tight">
                    Under the Hood: Technical Architecture
                  </h2>
                  <p className="text-muted-foreground text-lg mb-12">
                    For the technically curious — here's why Breeh AI performs at a
                    level no generic platform can match.
                  </p>
                </motion.div>

                <div className="space-y-6">
                  {techDetails.map((tech, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: i * 0.08,
                      }}
                      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-primary/30 transition-all duration-500"
                    >
                      {/* Subtle bg gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-700" />

                      <div className="relative flex gap-6 items-start">
                        <div className="shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                          {tech.icon}
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-xl text-foreground mb-3">
                            {tech.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Architecture Highlight */}
                <motion.div
                  {...fadeInUp}
                  className="mt-10 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
                >
                  <div className="flex items-start gap-4">
                    <Zap className="w-8 h-8 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-bold text-xl text-foreground mb-3">
                        The Breeh Difference in One Sentence
                      </h4>
                      <p className="text-lg text-foreground font-medium italic">
                        "Our strength is not in the model — it's in the control
                        layer around the model. The guardrails, the dental context,
                        the patient empathy, the compliance framework. That's what
                        makes Breeh production-ready, not just demo-ready."
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* ── Section 6: Closing ── */}
              <div id="closing" className="mb-16 scroll-mt-32">
                <motion.div {...fadeInUp}>
                  <span className="inline-block font-mono text-xs text-primary uppercase tracking-[0.2em] mb-4">
                    Chapter 06
                  </span>
                  <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-8 leading-tight">
                    The Bottom Line
                  </h2>
                </motion.div>

                <motion.div
                  {...fadeInUp}
                  transition={{ delay: 0.1 }}
                  className="space-y-6 text-muted-foreground text-lg leading-relaxed"
                >
                  <p>
                    The dental industry doesn't need another chatbot. It doesn't
                    need another SaaS dashboard. It doesn't need another tool that
                    promises "AI-powered" anything while delivering generic, one-
                    size-fits-all automation.
                  </p>
                  <p>
                    What it needs is a system that understands the unique rhythm of
                    a dental practice — the Monday morning rush, the after-hours
                    emergency call, the anxious patient who just needs someone to
                    pick up the phone and say{" "}
                    <em className="text-foreground">"We're here for you."</em>
                  </p>
                  <p>
                    <strong className="text-foreground">
                      That system is Breeh AI.
                    </strong>
                  </p>

                  <motion.blockquote
                    {...fadeInUp}
                    className="border-l-4 border-primary pl-8 py-6 my-10 bg-primary/5 rounded-r-2xl"
                  >
                    <p className="font-display font-bold text-xl md:text-2xl text-foreground leading-snug">
                      "Other tools help manage calls. Breeh AI makes sure no
                      patient — and no revenue — is ever lost."
                    </p>
                  </motion.blockquote>
                </motion.div>
              </div>

              {/* ── Final CTA ── */}
              <motion.div
                {...fadeInUp}
                className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-10 md:p-14 text-center"
              >
                <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary-foreground mb-4">
                  Ready to Stop Losing Patients?
                </h2>
                <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                  Join the practices that have already recovered thousands in
                  lost revenue with Breeh AI. Your 15-minute demo could be the
                  most profitable quarter-hour of your year.
                </p>
                <button
                  onClick={openCalendly}
                  className="bg-primary-foreground text-foreground font-bold px-10 py-4 rounded-full hover:bg-primary-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-2 text-lg"
                >
                  Schedule Your Demo <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </article>
          </div>
        </div>
      </section>

      <Footer
        onOpenPlaybook={() => setPlaybookOpen(true)}
        onBookDemo={openCalendly}
      />
      <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
    </div>
  );
};

export default Blog;
