import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/config";
import PlaybookModal from "@/components/PlaybookModal";
import {
    ChevronRight, Play, MessageSquare, PhoneCall, Zap, Share2,
    MousePointer2, Quote, ArrowRight, ShieldCheck,
    Monitor
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

            {/* 1. Hero Section - Text Only */}
            <section className="pt-32 pb-20 px-6 lg:px-8 section-lavender">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.p
                        {...fadeInUp}
                        className="text-primary font-semibold tracking-wide mb-4 text-sm uppercase"
                    >
                        AI That Augments Your Team
                    </motion.p>
                    <motion.h1
                        {...fadeInUp}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="font-display font-bold text-5xl md:text-7xl text-foreground mb-8 leading-tight"
                    >
                        Your AI Dental Receptionist <br />
                        <span className="text-primary">Never Misses a Call</span>
                    </motion.h1>
                    <motion.p
                        {...fadeInUp}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Advanced virtual dental receptionist technology built specifically for modern practices, dental groups, and DSOs.
                    </motion.p>
                    <motion.div
                        {...fadeInUp}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex items-center justify-center gap-4"
                    >
                        <button
                            onClick={openCalendly}
                            className="btn-primary flex items-center gap-2 px-8 py-4 text-lg"
                        >
                            See Product Demo <ChevronRight className="w-5 h-5" />
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-20 relative max-w-3xl mx-auto"
                    >
                        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl relative overflow-hidden">
                            {/* Decorative gradients */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-2xl flex items-center gap-4 border border-border shadow-sm">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <MessageSquare className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">New Inquiry</p>
                                        <p className="text-base font-medium text-foreground">"Can I schedule an appointment for tomorrow?"</p>
                                    </div>
                                </div>
                                <div className="bg-primary/5 p-6 rounded-2xl flex items-center gap-4 border border-primary/10 shadow-sm">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">AI Response</p>
                                        <p className="text-base font-medium text-foreground">"I found a slot at 2 PM. Booked firmly!"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
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

            {/* 6. Website Chatbot Section — Redesigned */}
            <section className="py-24 section-alt px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.span
                            {...fadeInUp}
                            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                        >
                            AI Website Chat
                        </motion.span>
                        <motion.h2
                            {...fadeInUp}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="font-display font-bold text-3xl md:text-5xl mb-6 text-foreground leading-tight"
                        >
                            Capture Website Visitors <br className="hidden md:block" />
                            with Your AI Receptionist
                        </motion.h2>
                        <motion.p
                            {...fadeInUp}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
                        >
                            A virtual dental receptionist chatbot that lives on your website — engaging visitors, answering questions, and booking appointments around the clock.
                        </motion.p>
                        <motion.button
                            {...fadeInUp}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            onClick={openCalendly}
                            className="btn-primary px-8 py-4 mx-auto"
                        >
                            Try Website Chat Demo
                        </motion.button>
                    </div>

                    {/* Chat mockup + stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-card rounded-3xl border border-border shadow-xl p-8 md:p-12"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                            {/* Left — Stats */}
                            <div className="space-y-6">
                                {[
                                    { label: "Response rate increase", value: "94%", sub: "AI answers within 2 seconds, 24/7" },
                                    { label: "Website conversion lift", value: "3.2×", sub: "More visitors become booked patients" },
                                    { label: "Patient satisfaction", value: "98%", sub: "Patients prefer instant, helpful responses" },
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + i * 0.15 }}
                                        className="flex items-center gap-5 p-5 rounded-2xl bg-secondary/50 border border-border"
                                    >
                                        <div className="text-3xl font-bold text-primary font-display shrink-0 w-20 text-right">
                                            {stat.value}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">{stat.label}</p>
                                            <p className="text-xs text-muted-foreground">{stat.sub}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Right — Chat UI mockup */}
                            <div className="bg-foreground rounded-2xl p-6 shadow-lg">
                                <div className="flex items-center gap-2 mb-5 pb-3 border-b border-muted-foreground/10">
                                    <div className="w-3 h-3 rounded-full bg-red-400/60" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                                    <div className="w-3 h-3 rounded-full bg-green-400/60" />
                                    <div className="ml-3 h-3.5 w-32 bg-muted-foreground/10 rounded" />
                                </div>
                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/20 shrink-0" />
                                        <div className="bg-muted-foreground/10 p-3.5 rounded-2xl rounded-tl-sm max-w-[80%]">
                                            <p className="text-xs text-primary-foreground/80">Welcome to our practice! How can I help you today?</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row-reverse gap-3">
                                        <div className="w-8 h-8 rounded-full bg-muted-foreground/10 shrink-0" />
                                        <div className="bg-primary p-3.5 rounded-2xl rounded-tr-sm max-w-[80%]">
                                            <p className="text-xs text-primary-foreground">I'm interested in booking a checkup soon.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/20 shrink-0" />
                                        <div className="bg-muted-foreground/10 p-3.5 rounded-2xl rounded-tl-sm max-w-[80%]">
                                            <p className="text-xs text-primary-foreground/80">I'd love to help! We have openings tomorrow at 10 AM and 2 PM. Which works best?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        {[
                            { icon: Monitor, title: "Always available", desc: "Embed on any digital touchpoint to capture leads 24/7, even after hours." },
                            { icon: MessageSquare, title: "Context-aware", desc: "Maintains your practice's warm tone while handling complex dental inquiries." },
                            { icon: MousePointer2, title: "Lead conversion", desc: "Turns casual visitors into booked patients — every chat synced to your dashboard." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-foreground mb-1">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
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

            {/* 8. Final CTA Form Section — Color-consistent */}
            <section className="py-24 px-6 lg:px-8 section-alt">
                <div className="max-w-6xl mx-auto overflow-hidden rounded-[2.5rem] shadow-2xl"
                    style={{ background: "linear-gradient(135deg, hsl(244 50% 22%) 0%, hsl(244 58% 40%) 50%, hsl(244 58% 55%) 100%)" }}
                >
                    <div className="flex flex-col lg:flex-row items-center gap-12 p-8 md:p-16 relative">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
                        <div className="flex-1 relative z-10 text-left">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-xs font-bold uppercase tracking-wider mb-6 border border-primary-foreground/20"
                            >
                                Ready to Get Started
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-6 leading-tight"
                            >
                                Experience <br /> Breeh AI in <br /> Action
                            </motion.h2>
                            <p className="text-primary-foreground/60 text-lg max-w-md">
                                See how our AI can work for your specific practice needs.
                            </p>
                        </div>

                        <div className="w-full lg:w-[480px] relative z-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-secondary rounded-3xl p-8 md:p-10"
                            >
                                <h3 className="font-display font-bold text-xl text-foreground mb-2">Discover Your Missed Revenue</h3>
                                <p className="text-xs text-muted-foreground mb-6">
                                    Most practices miss 17–25% of calls. See how Breeh AI captures these lost opportunities.
                                </p>
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-muted-foreground ml-2">Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-card border border-border rounded-xl p-3.5 text-sm focus:ring-2 focus:ring-primary/20 outline-none text-foreground" />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-muted-foreground ml-2">Work Email Address</label>
                                            <input type="email" placeholder="example@practice.com" className="w-full bg-card border border-border rounded-xl p-3.5 text-sm focus:ring-2 focus:ring-primary/20 outline-none text-foreground" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-muted-foreground ml-2">Number of Locations</label>
                                            <select className="w-full bg-card border border-border rounded-xl p-3.5 text-sm focus:ring-2 focus:ring-primary/20 outline-none text-foreground">
                                                <option>1 Location</option>
                                                <option>2-5 Locations</option>
                                                <option>6-10 Locations</option>
                                                <option>10+ Locations</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button
                                        onClick={openCalendly}
                                        type="button"
                                        className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl shadow-lg hover:bg-primary/90 transition-all mt-2 text-sm"
                                    >
                                        Schedule a Demo
                                    </button>
                                </form>
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
