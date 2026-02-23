import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlaybookModal from "@/components/PlaybookModal";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/config";
import {
    ArrowRight,
    CheckCircle2,
    Plug,
    Zap,
    RefreshCw,
    Shield,
    Clock,
    Settings,
    Database,
    Phone,
    CalendarCheck,
    Users,
    BarChart3,
    Globe,
} from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────────────── */

interface Integration {
    name: string;
    category: string;
    description: string;
    features: string[];
}

const integrationCategories = [
    "All",
    "Practice Management",
    "CRM & Patient Engagement",
    "Phone Systems",
    "Scheduling",
];

const integrations: Integration[] = [
    {
        name: "Dentrix",
        category: "Practice Management",
        description:
            "Seamlessly sync patient records, appointments, and insurance data with Dentrix. Breeh AI reads availability in real-time to book directly into your schedule.",
        features: [
            "Real-time schedule sync",
            "Patient record lookup",
            "Insurance verification",
            "Automated appointment creation",
        ],
    },
    {
        name: "Eaglesoft",
        category: "Practice Management",
        description:
            "Connect Breeh AI to Eaglesoft for instant appointment booking, patient history access, and automated follow-up scheduling.",
        features: [
            "Bi-directional data sync",
            "Operatory-aware booking",
            "Treatment plan awareness",
            "Automated recall scheduling",
        ],
    },
    {
        name: "Open Dental",
        category: "Practice Management",
        description:
            "Full integration with Open Dental's open API. Breeh AI accesses your schedule, patient database, and provider availability without any middleware.",
        features: [
            "Open API integration",
            "Multi-provider scheduling",
            "Patient portal sync",
            "Custom field mapping",
        ],
    },
    {
        name: "Curve Dental",
        category: "Practice Management",
        description:
            "Cloud-native integration with Curve Dental. Breeh AI connects directly to your cloud PMS for zero-latency scheduling and patient data access.",
        features: [
            "Cloud-to-cloud sync",
            "Real-time availability",
            "Patient communication logs",
            "Automated waitlist management",
        ],
    },
    {
        name: "Denticon",
        category: "Practice Management",
        description:
            "Enterprise-grade integration with Denticon for multi-location DSOs. Centralized scheduling across all your locations through a single AI receptionist.",
        features: [
            "Multi-location support",
            "Centralized patient routing",
            "Enterprise analytics",
            "Role-based data access",
        ],
    },
    {
        name: "HubSpot",
        category: "CRM & Patient Engagement",
        description:
            "Automatically log every call, create contacts, and trigger nurture workflows in HubSpot when Breeh AI handles patient interactions.",
        features: [
            "Auto contact creation",
            "Call logging & notes",
            "Workflow triggers",
            "Pipeline management",
        ],
    },
    {
        name: "Salesforce Health Cloud",
        category: "CRM & Patient Engagement",
        description:
            "Enterprise CRM integration for large DSOs. Sync patient interactions, track conversion funnels, and power your marketing with AI-captured data.",
        features: [
            "Health Cloud objects",
            "Custom flow triggers",
            "Conversion tracking",
            "Marketing attribution",
        ],
    },
    {
        name: "Twilio",
        category: "Phone Systems",
        description:
            "Breeh AI plugs into your existing Twilio phone stack. No hardware changes — just configure call forwarding and you're live in minutes.",
        features: [
            "SIP trunk support",
            "Call forwarding setup",
            "Multi-number routing",
            "SMS follow-up capability",
        ],
    },
    {
        name: "RingCentral",
        category: "Phone Systems",
        description:
            "Integrate with RingCentral for seamless call handling. Breeh AI answers overflow and after-hours calls while your team handles the rest.",
        features: [
            "Overflow call routing",
            "After-hours automation",
            "Call transfer to staff",
            "Voicemail transcription",
        ],
    },
    {
        name: "Google Calendar",
        category: "Scheduling",
        description:
            "Sync provider availability from Google Calendar. Breeh AI checks real-time openings before confirming any appointment with a patient.",
        features: [
            "Real-time availability",
            "Multi-calendar support",
            "Conflict detection",
            "Appointment confirmations",
        ],
    },
    {
        name: "Calendly",
        category: "Scheduling",
        description:
            "Use Calendly as your scheduling backbone. Breeh AI books appointments directly into Calendly slots during voice conversations.",
        features: [
            "Slot availability check",
            "Direct booking via voice",
            "Automatic confirmations",
            "Buffer time respect",
        ],
    },
    {
        name: "Custom API",
        category: "Practice Management",
        description:
            "Have a proprietary or niche PMS? Breeh AI's flexible API layer connects to any system with a REST or webhook interface.",
        features: [
            "REST API support",
            "Webhook integrations",
            "Custom data mapping",
            "Dedicated integration support",
        ],
    },
];

const benefits = [
    {
        icon: Zap,
        title: "Setup in Under 72 Hours",
        desc: "Most integrations go live within 1-3 business days. No engineering team needed on your side.",
    },
    {
        icon: RefreshCw,
        title: "Real-Time Data Sync",
        desc: "Patient records, schedules, and availability are synced in real-time — no stale data, no double bookings.",
    },
    {
        icon: Shield,
        title: "HIPAA Compliant",
        desc: "All data transfers are encrypted end-to-end. We sign BAAs and comply with SOC 2 Type II standards.",
    },
    {
        icon: Settings,
        title: "Zero Infrastructure Changes",
        desc: "Breeh AI plugs into your existing stack. No hardware, no software installs, no IT overhead.",
    },
];

const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55 },
};

/* ─── Component ────────────────────────────────────────────────────── */

const Integrations = () => {
    const [playbookOpen, setPlaybookOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState("All");

    const openCalendly = () => window.open(SITE_CONFIG.calendlyUrl, "_blank");

    const filtered =
        activeCategory === "All"
            ? integrations
            : integrations.filter((i) => i.category === activeCategory);

    return (
        <div className="min-h-screen bg-background overflow-x-hidden font-body">
            <Navbar
                onBookDemo={openCalendly}
                onOpenPlaybook={() => setPlaybookOpen(true)}
            />

            {/* ── Hero ── */}
            <section className="pt-32 pb-20 px-6 lg:px-8 section-lavender">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div {...fadeIn}>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                            <Plug className="w-3.5 h-3.5" /> Integrations
                        </span>
                    </motion.div>
                    <motion.h1
                        {...fadeIn}
                        transition={{ delay: 0.05, duration: 0.55 }}
                        className="font-display font-bold text-5xl md:text-7xl text-foreground mb-6 leading-tight"
                    >
                        Directly Integrated <br /> With Your PMS
                    </motion.h1>
                    <motion.p
                        {...fadeIn}
                        transition={{ delay: 0.1, duration: 0.55 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
                    >
                        Breeh AI connects directly to your practice management system,
                        CRM, and phone stack — so your AI receptionist books, syncs, and
                        updates in real-time. No middleware. No manual entry.
                    </motion.p>
                    <motion.div
                        {...fadeIn}
                        transition={{ delay: 0.15, duration: 0.55 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <button onClick={openCalendly} className="btn-primary">
                            Book a Demo
                        </button>
                        <button
                            onClick={() => {
                                const el = document.getElementById("integrations-grid");
                                el?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="btn-outline-primary"
                        >
                            View All Integrations
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* ── How It Works ── */}
            <section className="py-20 px-6 lg:px-8 section-alt">
                <div className="max-w-6xl mx-auto">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                            How Integration Works
                        </h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            Three simple steps to connect Breeh AI to your existing systems.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                icon: Phone,
                                title: "Connect Your Phone",
                                desc: "Forward calls to Breeh AI via simple call forwarding. Works with any phone system — no hardware needed.",
                            },
                            {
                                step: "02",
                                icon: Database,
                                title: "Sync Your PMS",
                                desc: "We connect to your practice management system to read schedules, patient data, and availability in real-time.",
                            },
                            {
                                step: "03",
                                icon: CalendarCheck,
                                title: "Go Live",
                                desc: "Breeh AI starts answering calls, booking appointments directly into your calendar, and syncing everything back.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="feature-card text-center"
                            >
                                <span className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-4 block">
                                    Step {item.step}
                                </span>
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                                    <item.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Benefits Grid ── */}
            <section className="py-20 px-6 lg:px-8 section-lavender">
                <div className="max-w-6xl mx-auto">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                            Why Our Integrations Are Different
                        </h2>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((b, i) => (
                            <motion.div
                                key={b.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:border-primary/30 hover:-translate-y-1 transition-all"
                            >
                                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                    <b.icon className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="font-display font-bold text-base text-foreground mb-2">
                                    {b.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {b.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Integrations Grid ── */}
            <section id="integrations-grid" className="py-20 px-6 lg:px-8 section-alt">
                <div className="max-w-6xl mx-auto">
                    <motion.div {...fadeIn} className="mb-12">
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                            Supported Integrations
                        </h2>
                        <p className="text-muted-foreground max-w-xl">
                            Browse our growing list of direct integrations. Don't see yours?
                            We likely support it through our custom API layer.
                        </p>
                    </motion.div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-2 mb-10">
                        {integrationCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${activeCategory === cat
                                    ? "bg-primary text-primary-foreground border-primary"
                                    : "bg-card text-foreground border-border hover:border-primary/40"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((integ, i) => (
                            <motion.div
                                key={integ.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
                                className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:-translate-y-1 transition-all shadow-sm"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <Plug className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                                            {integ.name}
                                        </h3>
                                        <span className="text-xs text-muted-foreground">
                                            {integ.category}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                    {integ.description}
                                </p>
                                <ul className="space-y-2">
                                    {integ.features.map((f) => (
                                        <li
                                            key={f}
                                            className="flex items-center gap-2 text-sm text-foreground"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Don't See Yours? ── */}
            <section className="py-20 px-6 lg:px-8 section-lavender">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        {...fadeIn}
                        className="bg-card rounded-3xl border border-border p-10 md:p-16 text-center shadow-sm"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                            <Globe className="w-7 h-7 text-primary" />
                        </div>
                        <h2 className="font-display font-bold text-3xl text-foreground mb-3">
                            Don't See Your System?
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                            We're adding new integrations every month. If your PMS, CRM, or
                            phone system isn't listed, our team can build a custom connection
                            — usually within a week.
                        </p>
                        <button
                            onClick={openCalendly}
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            Request an Integration <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* ── CTA Section ── */}
            <section className="py-20 px-6 lg:px-8 section-alt">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        {...fadeIn}
                        className="rounded-3xl p-10 md:p-16 overflow-hidden relative shadow-2xl"
                        style={{
                            background:
                                "linear-gradient(135deg, hsl(244 58% 52%) 0%, hsl(244 58% 61%) 50%, hsl(244 55% 67%) 100%)",
                        }}
                    >
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
                        <div className="relative z-10 text-center max-w-2xl mx-auto">
                            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4 leading-tight">
                                Ready to Connect Breeh AI to Your Practice?
                            </h2>
                            <p className="text-primary-foreground/60 mb-8">
                                Book a demo and we'll walk you through the integration process
                                for your specific PMS.
                            </p>
                            <button
                                onClick={openCalendly}
                                className="inline-block bg-primary-foreground text-foreground font-semibold rounded-full px-10 py-4 text-base transition-all duration-300 hover:bg-primary-foreground/90 hover:-translate-y-0.5 hover:shadow-lg"
                            >
                                Book a Demo
                            </button>
                        </div>
                    </motion.div>
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

export default Integrations;
