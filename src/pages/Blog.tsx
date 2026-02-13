import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
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
} from "lucide-react";

const Blog = () => {
    const [playbookOpen, setPlaybookOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const openCalendly = () => {
        window.open(SITE_CONFIG.calendlyUrl, "_blank");
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
    };

    const tableOfContents = [
        { id: "introduction", label: "Introduction" },
        { id: "breeh-ai", label: "Breeh AI" },
        { id: "key-features", label: "Key Features to Consider" },
        { id: "how-breeh-stands-out", label: "How Breeh AI Stands Out" },
        { id: "faq", label: "Frequently Asked Questions" },
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

    return (
        <div className="min-h-screen bg-background overflow-x-hidden font-body">
            <Navbar
                onBookDemo={openCalendly}
                onOpenPlaybook={() => setPlaybookOpen(true)}
            />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 lg:px-8 section-lavender">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        {...fadeInUp}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
                    >
                        <Calendar className="w-4 h-4" />
                        <span>Feb 13, 2026</span>
                        <span className="text-primary/40">•</span>
                        <Clock className="w-4 h-4" />
                        <span>9 min read</span>
                    </motion.div>

                    <motion.h1
                        {...fadeInUp}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6 leading-tight"
                    >
                        AI in Dental Care: Linking Patients and Providers
                    </motion.h1>

                    <motion.p
                        {...fadeInUp}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-xl text-muted-foreground leading-relaxed mb-8"
                    >
                        Dentists and DSOs are turning to advanced AI tools to improve
                        patient communication, streamline operations, and enhance diagnostic
                        accuracy. This article explores how leading platforms compare and
                        why Breeh AI stands out as the top choice for modern practices.
                    </motion.p>

                    <motion.div
                        {...fadeInUp}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex items-center gap-4"
                    >
                        <button
                            onClick={openCalendly}
                            className="btn-primary flex items-center gap-2"
                        >
                            Book a Demo <ChevronRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Main Content with Sticky TOC */}
            <section className="py-16 px-6 lg:px-8 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Table of Contents - Sticky on Desktop */}
                        <aside className="lg:col-span-3">
                            <div className="lg:sticky lg:top-32">
                                <h3 className="font-display font-bold text-lg mb-4 text-foreground">
                                    Table of Contents
                                </h3>
                                <nav className="space-y-2">
                                    {tableOfContents.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${activeSection === item.id
                                                    ? "bg-primary/10 text-primary font-semibold"
                                                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                                }`}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Main Article Content */}
                        <article className="lg:col-span-9 prose prose-lg max-w-none">
                            {/* Introduction */}
                            <div id="introduction" className="mb-16 scroll-mt-32">
                                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                                    Introduction
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Dentists and DSOs are turning to advanced AI tools to improve
                                    patient communication, streamline operations, and enhance
                                    diagnostic accuracy. As technology continues to evolve,
                                    choosing the right platform becomes a key decision that
                                    affects both efficiency and patient satisfaction.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    This article helps dental professionals identify the best AI
                                    solutions and explains why Breeh AI stands out as the top
                                    choice for modern practices. It explores how leading platforms
                                    compare in their ability to capture missed opportunities,
                                    automate workflows, and support multi-location organizations.
                                </p>
                            </div>

                            {/* Breeh AI Section */}
                            <div id="breeh-ai" className="mb-16 scroll-mt-32">
                                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                                    Breeh AI: Your Virtual Dental Receptionist
                                </h2>
                                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <PhoneCall className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-display font-bold text-xl text-foreground mb-2">
                                                Never Miss Another Patient Call
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Breeh AI helps dental practices manage patient
                                                communication and scheduling more efficiently. It uses
                                                automation to handle missed calls and appointment
                                                requests, reducing the workload on front desk teams.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-card border border-border rounded-xl p-6">
                                        <MessageSquare className="w-8 h-8 text-primary mb-3" />
                                        <h4 className="font-bold text-foreground mb-2">
                                            24/7 Patient Engagement
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Instantly responds to patient inquiries and books
                                            appointments around the clock, ensuring consistent
                                            engagement.
                                        </p>
                                    </div>
                                    <div className="bg-card border border-border rounded-xl p-6">
                                        <Zap className="w-8 h-8 text-primary mb-3" />
                                        <h4 className="font-bold text-foreground mb-2">
                                            Seamless Integration
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Integrates with existing dental practice software,
                                            improving workflow without requiring major system changes.
                                        </p>
                                    </div>
                                </div>

                                <p className="text-muted-foreground leading-relaxed">
                                    The platform is designed specifically for dentists and Dental
                                    Support Organizations, not general businesses. It captures
                                    missed opportunities by instantly responding to patient
                                    inquiries and booking appointments around the clock. This
                                    aligns with the growing need for reliable communication tools
                                    in busy dental environments.
                                </p>
                            </div>

                            {/* Key Features Section */}
                            <div id="key-features" className="mb-16 scroll-mt-32">
                                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                                    Key Features to Consider in Dental AI Solutions
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-8">
                                    Dental organizations rely on AI tools to enhance diagnostic
                                    precision, streamline workflows, and maintain compliance. The
                                    most effective systems deliver consistent clinical accuracy,
                                    integrate seamlessly with existing practice software, and
                                    protect patient data through strong privacy safeguards.
                                </p>

                                <div className="space-y-8">
                                    <div className="border-l-4 border-primary pl-6">
                                        <h3 className="font-display font-bold text-xl text-foreground mb-3 flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                            Clinical Accuracy and Compliance
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            Dentists need AI tools that deliver consistent,
                                            evidence-based results. Accuracy in detecting issues and
                                            managing patient communication directly affects patient
                                            outcomes and trust.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                <span>
                                                    Sensitivity and specificity in patient interaction
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                <span>
                                                    Frequency of software updates and retraining on new
                                                    datasets
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                <span>Compliance with HIPAA regulations</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="border-l-4 border-primary pl-6">
                                        <h3 className="font-display font-bold text-xl text-foreground mb-3 flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                            Integration With Practice Management Systems
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            Smooth integration with existing tools saves time and
                                            prevents data errors. AI solutions should connect with
                                            popular systems for scheduling, billing, and patient
                                            records.
                                        </p>
                                        <div className="bg-muted/50 rounded-lg p-4">
                                            <p className="text-sm font-semibold text-foreground mb-2">
                                                Integration checklist:
                                            </p>
                                            <ul className="space-y-1 text-sm text-muted-foreground">
                                                <li>✓ Compatibility with imaging and PMS software</li>
                                                <li>✓ Automated data entry and chart updates</li>
                                                <li>✓ Real-time synchronization across operatories</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border-l-4 border-primary pl-6">
                                        <h3 className="font-display font-bold text-xl text-foreground mb-3 flex items-center gap-2">
                                            <Shield className="w-5 h-5 text-primary" />
                                            Data Security and Patient Privacy
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            Dental AI solutions handle sensitive patient data that
                                            must remain secure. Encryption, access control, and
                                            anonymization are essential to prevent unauthorized use.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="bg-card border border-border rounded-lg p-4 text-center">
                                                <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                                                <p className="text-xs font-semibold text-foreground">
                                                    HIPAA Compliant
                                                </p>
                                            </div>
                                            <div className="bg-card border border-border rounded-lg p-4 text-center">
                                                <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                                                <p className="text-xs font-semibold text-foreground">
                                                    Encrypted Data
                                                </p>
                                            </div>
                                            <div className="bg-card border border-border rounded-lg p-4 text-center">
                                                <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                                                <p className="text-xs font-semibold text-foreground">
                                                    Role-Based Access
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* How Breeh AI Stands Out */}
                            <div id="how-breeh-stands-out" className="mb-16 scroll-mt-32">
                                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                                    How Breeh AI Stands Out
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-8">
                                    Breeh AI helps dental practices capture missed calls, improve
                                    patient communication, and streamline daily operations. It
                                    focuses on practical automation that supports front-desk staff
                                    and increases patient satisfaction through reliable, real-time
                                    engagement tools.
                                </p>

                                <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 mb-8">
                                    <h3 className="font-display font-bold text-2xl text-foreground mb-6 flex items-center gap-2">
                                        <Zap className="w-6 h-6 text-primary" />
                                        Unique Technology Advantages
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-1">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-foreground mb-1">
                                                    Enterprise-Grade Conversational Platform
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Automatically responds to missed calls, texts
                                                    patients, and helps them schedule appointments without
                                                    human delay. Keeps clinics connected 24/7.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-1">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-foreground mb-1">
                                                    Seamless PMS Integration
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Integrates with most dental practice management
                                                    systems, ensuring accurate data flow between patient
                                                    communication and scheduling.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-1">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-foreground mb-1">
                                                    HIPAA-Compliant Communication
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Protects patient privacy and builds trust with
                                                    enterprise-grade security standards.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-card border border-border rounded-2xl p-8">
                                    <h3 className="font-display font-bold text-2xl text-foreground mb-6 flex items-center gap-2">
                                        <Users className="w-6 h-6 text-primary" />
                                        Support and Training for Dental Teams
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        Breeh AI provides hands-on onboarding and continuous
                                        training so dental teams can use the system effectively from
                                        day one. The support team offers step-by-step setup
                                        guidance, ensuring smooth adoption with minimal disruption
                                        to daily operations.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex items-start gap-3">
                                            <BarChart3 className="w-5 h-5 text-primary shrink-0 mt-1" />
                                            <div>
                                                <p className="font-semibold text-foreground text-sm">
                                                    Performance Reviews
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    Regular check-ins to optimize results
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <MessageSquare className="w-5 h-5 text-primary shrink-0 mt-1" />
                                            <div>
                                                <p className="font-semibold text-foreground text-sm">
                                                    Live Support
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    Chat and email assistance available
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ Section */}
                            <div id="faq" className="mb-16 scroll-mt-32">
                                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-8">
                                    Frequently Asked Questions
                                </h2>

                                <div className="space-y-6">
                                    <div className="bg-card border border-border rounded-xl p-6">
                                        <h3 className="font-bold text-lg text-foreground mb-3">
                                            What makes Breeh AI different from other dental AI
                                            solutions?
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Breeh AI focuses specifically on patient communication and
                                            missed call recovery, using an enterprise-grade platform
                                            built for dental practices. Unlike diagnostic AI tools,
                                            Breeh AI enhances both administrative efficiency and
                                            patient engagement across multiple practice locations.
                                        </p>
                                    </div>

                                    <div className="bg-card border border-border rounded-xl p-6">
                                        <h3 className="font-bold text-lg text-foreground mb-3">
                                            How does Breeh AI improve patient satisfaction?
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            By responding to patient inquiries instantly—24/7—Breeh AI
                                            ensures no patient feels ignored. The AI maintains your
                                            practice's warm, professional tone while handling complex
                                            inquiries, leading to higher booking rates and improved
                                            patient retention.
                                        </p>
                                    </div>

                                    <div className="bg-card border border-border rounded-xl p-6">
                                        <h3 className="font-bold text-lg text-foreground mb-3">
                                            Is Breeh AI HIPAA compliant?
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Yes, Breeh AI is fully HIPAA compliant. The platform uses
                                            enterprise-grade security with encrypted data transmission,
                                            role-based access controls, and secure storage to protect
                                            all patient information.
                                        </p>
                                    </div>

                                    <div className="bg-card border border-border rounded-xl p-6">
                                        <h3 className="font-bold text-lg text-foreground mb-3">
                                            How long does it take to set up Breeh AI?
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Setup takes approximately 5 minutes through simple call
                                            forwarding. Our team provides hands-on onboarding to ensure
                                            smooth integration with your existing practice management
                                            software, with minimal disruption to your daily operations.
                                        </p>
                                    </div>

                                    <div className="bg-card border border-border rounded-xl p-6">
                                        <h3 className="font-bold text-lg text-foreground mb-3">
                                            Can Breeh AI handle multiple practice locations?
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Absolutely. Breeh AI is designed to scale with DSOs and
                                            multi-location practices, offering centralized management
                                            and consistent performance across all your offices.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Section */}
                            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-10 text-center">
                                <h2 className="font-display font-bold text-3xl text-primary-foreground mb-4">
                                    Ready to Transform Your Practice?
                                </h2>
                                <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                                    See how Breeh AI can help you capture every patient
                                    opportunity and streamline your operations.
                                </p>
                                <button
                                    onClick={openCalendly}
                                    className="bg-primary-foreground text-foreground font-bold px-8 py-4 rounded-full hover:bg-primary-foreground/90 transition-all shadow-lg inline-flex items-center gap-2"
                                >
                                    Schedule Your Demo <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
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
