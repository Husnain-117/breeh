import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/config";
import PlaybookModal from "@/components/PlaybookModal";
import {
    ChevronRight, Play, MessageSquare, PhoneCall, Zap, Share2,
    Quote, ArrowRight, ShieldCheck
} from "lucide-react";


const Product = () => {
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

            {/* 1. Hero Section - With Image */}
            <section className="pt-32 pb-20 px-6 lg:px-8 section-lavender relative overflow-hidden">
                {/* Hero background image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&h=900&fit=crop&q=80"
                        alt=""
                        className="w-full h-full object-cover opacity-[0.06]"
                    />
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left — Text */}
                        <div>
                            <motion.p
                                {...fadeInUp}
                                className="text-primary font-semibold tracking-wide mb-4 text-sm uppercase"
                            >
                                AI That Augments Your Team
                            </motion.p>
                            <motion.h1
                                {...fadeInUp}
                                transition={{ delay: 0.1, duration: 0.6 }}
                                className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-foreground mb-8 leading-tight"
                            >
                                Your AI Dental Receptionist <br />
                                <span className="text-primary">Never Misses a Call</span>
                            </motion.h1>
                            <motion.p
                                {...fadeInUp}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
                            >
                                Advanced virtual dental receptionist technology built specifically for modern practices, dental groups, and DSOs.
                            </motion.p>
                            <motion.div
                                {...fadeInUp}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="flex flex-col sm:flex-row items-start gap-4"
                            >
                                <button
                                    onClick={openCalendly}
                                    className="btn-primary flex items-center gap-2 px-8 py-4 text-lg"
                                >
                                    See Product Demo <ChevronRight className="w-5 h-5" />
                                </button>
                            </motion.div>
                        </div>

                        {/* Right — Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="relative"
                        >
                            <div className="rounded-3xl overflow-hidden shadow-2xl border border-border/30">
                                <img
                                    src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=700&h=500&fit=crop&q=80"
                                    alt="Modern dental office with AI technology"
                                    className="w-full h-80 lg:h-[420px] object-cover"
                                />
                            </div>
                            {/* Floating conversation card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="absolute -bottom-6 -left-6 bg-card/95 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-border max-w-xs"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <MessageSquare className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">New Inquiry</p>
                                        <p className="text-sm font-medium text-foreground">"Can I schedule for tomorrow?"</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-primary font-semibold uppercase tracking-wider">AI Response</p>
                                        <p className="text-sm font-medium text-foreground">"Booked for 2 PM tomorrow!"</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating stats badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="absolute -top-4 -right-4 bg-primary text-white rounded-2xl px-5 py-3 shadow-lg shadow-primary/30"
                            >
                                <p className="font-display font-bold text-2xl">99.7%</p>
                                <p className="text-xs text-white/70">Answer Rate</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. Workforce Section - Text Only */}
            <section className="py-24 section-alt px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6 leading-tight">
                            Your <span className="text-primary italic">Dedicated AI Receptionist</span> <br /> Works 24/7
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                            Built by a team with a track record in enterprise-grade AI and tested across high-volume dental group practices and DSOs. Our platform enhances your team's capabilities while ensuring no patient opportunity slips through the cracks.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-card p-8 rounded-3xl border border-border shadow-sm flex flex-col gap-4 hover:border-primary/50 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                <ChevronRight className="w-6 h-6" />
                            </div>
                            <h3 className="font-display font-bold text-2xl text-foreground">Fills Open Slots Automatically</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Intelligently scans your practice management software to find and fill gaps in your schedule, maximizing chair utilization without manual intervention.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-card p-8 rounded-3xl border border-border shadow-sm flex flex-col gap-4 hover:border-primary/50 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                <PhoneCall className="w-6 h-6" />
                            </div>
                            <h3 className="font-display font-bold text-2xl text-foreground">Handles High Call Volumes</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Never let a busy signal turn away a patient. Our AI manages simultaneous calls with infinite patience and perfect accuracy, day or night.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Call Recovery Section - Text Only */}
            <section className="py-24 section-lavender px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.span
                        {...fadeInUp}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                    >
                        AI Missed Call Recovery
                    </motion.span>
                    <motion.h2
                        {...fadeInUp}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="font-display font-bold text-3xl md:text-5xl mb-6 text-foreground"
                    >
                        Never Miss Another Patient Call
                    </motion.h2>
                    <motion.p
                        {...fadeInUp}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
                    >
                        24/7 virtual dental receptionist response that feels completely human.
                        Capture every opportunity, even when your office is closed.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white/80 backdrop-blur-md border border-white/20 rounded-3xl p-10 md:p-14 shadow-lg mx-auto"
                    >
                        <div className="flex flex-col items-center gap-6">
                            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary animate-pulse-glow">
                                <PhoneCall className="w-10 h-10" />
                            </div>
                            <h3 className="font-display font-bold text-3xl text-foreground">Immediate Connection</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                                "Even when your front desk is busy with patients, Breeh AI steps in within seconds to help the caller, answering questions, booking appointments, and capturing details directly into your PMS."
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-4 btn-outline-primary flex items-center gap-2"
                            >
                                <Play className="w-4 h-4 fill-current" /> Watch Context-Aware Demo
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 4. Process Section - Text Only */}
            <section className="py-24 section-alt px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.span
                            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                        >
                            The Process
                        </motion.span>
                        <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6">How it Works</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                            From missed call to booked appointment, our AI handles the entire workflow seamlessly, ensuring your patient feels heard and valued.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 -z-0"></div>

                        {[
                            { step: "01", title: "Call Detection", desc: "When a call goes to voicemail, our AI instantly detects it and initiates the recovery protocol." },
                            { step: "02", title: "AI Engagement", desc: "Your AI dental receptionist texts the patient with a warm, personal message asking how to help." },
                            { step: "03", title: "Booking & Success", desc: "The AI engages in natural conversation to schedule their visit and syncs it to your calendar." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-card p-8 rounded-3xl border border-border flex flex-col items-center text-center relative z-10 shadow-sm hover:translate-y-[-5px] transition-transform"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm mb-6 shadow-lg shadow-primary/20">
                                    {item.step}
                                </div>
                                <h3 className="font-display font-bold text-xl text-foreground mb-3">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Integration Section - Text Only */}
            <section className="py-24 section-lavender px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.span
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                    >
                        Easy Setup for Your Practice
                    </motion.span>
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6 leading-tight">
                        Seamless Integration <br /> with Your Existing Workflow
                    </h2>
                    <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
                        No need to change your phone system. Our virtual dental receptionist integrates in just 5 minutes through simple call-forwarding and syncs directly with your practice management software.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Share2, title: "Auto-Sync", desc: "Instantly pushes appointment details and patient notes to your PMS." },
                            { icon: Zap, title: "5-Minute Setup", desc: "Get started today with simple call forwarding. No complex hardware." },
                            { icon: ShieldCheck, title: "HIPAA Compliant", desc: "Enterprise-grade security ensuring your patient data is always protected." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-2xl border border-border flex flex-col items-center gap-4 hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* 7. Testimonials Section */}
            <section className="py-24 px-6 lg:px-8 section-lavender overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-16 text-left">
                    <div className="flex-1">
                        <motion.span
                            {...fadeInUp}
                            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                        >
                            Case Studies
                        </motion.span>
                        <motion.h2
                            {...fadeInUp}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="font-display font-bold text-3xl md:text-5xl mb-6 text-foreground"
                        >
                            What Our Happy <br /> Customers Have to Say
                        </motion.h2>

                        <div className="mt-20 relative">
                            <Quote className="absolute -top-10 -left-6 w-16 h-16 text-primary/10 -rotate-12" />
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground italic">
                                    "Monday Morning Game Changer"
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed italic">
                                    "It has made a huge impact on Monday morning. The email our office receives with a summary of the calls we missed over the weekend is a game changer. What used to take a few hours and sometimes missed opportunities is now an effective schedule builder allowing us to prioritize call backs."
                                </p>
                                <a
                                    href="/blog"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-primary font-bold cursor-pointer group"
                                >
                                    Read Case Studies <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </motion.div>
                        </div>
                    </div>

                    <div className="w-full md:w-[400px] flex-shrink-0">
                        <div className="bg-card rounded-3xl p-8 border border-border shadow-sm">
                            <p className="text-sm text-muted-foreground mb-10">
                                Discover the inspiring stories from our satisfied customers who have achieved remarkable success with our AI product.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { name: "Patricia W", role: "Director of Operations, TManagement", icon: "🏢" },
                                    { name: "Pamela W", role: "Dental Office Manager, Danville Pediatric Dentistry", icon: "🦷" },
                                    { name: "Brent A", role: "Regional Operations Director, Allied OMS", icon: "🌐" },
                                    { name: "Dr. Arshjot A", role: "DDS, FCAD, Zen Dentistry", icon: "👨‍⚕️" },
                                ].map((author, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`p-4 rounded-xl flex items-center gap-4 transition-all cursor-pointer ${i === 0 ? 'bg-primary text-primary-foreground shadow-lg' : 'hover:bg-secondary'}`}
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-card/20 flex items-center justify-center text-xl">
                                            {author.icon}
                                        </div>
                                        <div className="text-left">
                                            <p className="text-xs font-bold">{author.name}</p>
                                            <p className={`text-[10px] ${i === 0 ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>{author.role}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <a
                                href="/blog"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full mt-8 py-3 rounded-xl bg-secondary border border-border text-xs font-bold text-foreground hover:bg-primary/10 transition-colors text-center"
                            >
                                Read All Stories
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Final CTA Form Section — Premium Redesign */}
            <section className="py-28 px-6 lg:px-8 section-alt relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
                </div>

                <div className="max-w-6xl mx-auto relative z-10 overflow-hidden rounded-[2.5rem] shadow-2xl"
                    style={{ background: "linear-gradient(135deg, hsl(244 58% 52%) 0%, hsl(244 58% 61%) 40%, hsl(244 55% 67%) 100%)" }}
                >
                    {/* Inner decorative orbs */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/20 via-primary/5 to-transparent rounded-full blur-2xl pointer-events-none -translate-y-1/4 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-2xl pointer-events-none translate-y-1/4 -translate-x-1/4" />

                    <div className="flex flex-col lg:flex-row items-center gap-16 p-10 md:p-20 relative">
                        {/* Left — Text */}
                        <div className="flex-1 relative z-10 text-left">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-widest mb-8 border border-white/10 backdrop-blur-sm"
                            >
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                Ready to Get Started
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.6 }}
                                className="font-display font-bold text-4xl md:text-5xl lg:text-[3.5rem] text-white mb-6 leading-[1.15]"
                            >
                                Experience <br className="hidden sm:block" />
                                Breeh AI <br className="hidden sm:block" />
                                <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">in Action</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="text-white/50 text-lg max-w-md leading-relaxed mb-10"
                            >
                                See how our AI can work for your specific practice needs. Join hundreds of dental practices already growing with Breeh.
                            </motion.p>

                            {/* Trust indicators */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="flex flex-wrap items-center gap-6 text-white/40 text-xs"
                            >
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4" />
                                    <span>HIPAA Compliant</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4" />
                                    <span>5-Min Setup</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4" />
                                    <span>24/7 Support</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right — Form Card */}
                        <div className="w-full lg:w-[460px] relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.7 }}
                                className="rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl backdrop-blur-md"
                                style={{ background: "linear-gradient(165deg, rgba(255,255,255,0.95) 0%, rgba(245,243,255,0.98) 100%)" }}
                            >
                                <div className="mb-7">
                                    <h3 className="font-display font-bold text-xl text-foreground mb-2">Discover Your Missed Revenue</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Most practices miss 17–25% of calls. See how Breeh AI captures these lost opportunities.
                                    </p>
                                </div>
                                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-foreground/70 ml-1">Full Name</label>
                                        <input type="text" placeholder="Dr. John Doe" className="w-full bg-white border border-border/60 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary/40 outline-none text-foreground placeholder:text-muted-foreground/50 transition-all shadow-sm" />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-foreground/70 ml-1">Work Email</label>
                                            <input type="email" placeholder="you@practice.com" className="w-full bg-white border border-border/60 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary/40 outline-none text-foreground placeholder:text-muted-foreground/50 transition-all shadow-sm" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-foreground/70 ml-1">Locations</label>
                                            <select className="w-full bg-white border border-border/60 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary/40 outline-none text-foreground transition-all shadow-sm">
                                                <option>1 Location</option>
                                                <option>2–5 Locations</option>
                                                <option>6–10 Locations</option>
                                                <option>10+ Locations</option>
                                            </select>
                                        </div>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={openCalendly}
                                        type="button"
                                        className="w-full bg-gradient-to-r from-primary to-primary/85 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all mt-1 text-sm flex items-center justify-center gap-2"
                                    >
                                        Schedule a Demo <ArrowRight className="w-4 h-4" />
                                    </motion.button>
                                </form>
                                <p className="text-center text-[11px] text-muted-foreground/60 mt-5">
                                    No credit card required · Free consultation
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer onOpenPlaybook={() => setPlaybookOpen(true)} onBookDemo={openCalendly} />
            <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
        </div>
    );
};

export default Product;
