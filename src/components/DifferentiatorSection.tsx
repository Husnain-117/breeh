import { motion } from "framer-motion";
import { Sparkles, Clock, Brain, HeartHandshake, ShieldCheck, Zap } from "lucide-react";

const differentiators = [
    {
        icon: Brain,
        title: "Dental-Specific AI",
        description:
            "Unlike generic AI assistants, Breeh is trained exclusively on dental workflows — scheduling, insurance verification, and patient triage.",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=200&fit=crop&q=80",
    },
    {
        icon: Clock,
        title: "Live in 5 Days, Not 5 Months",
        description:
            "Simple call-forwarding setup with zero IT overhead. No hardware, no complex migrations — just results.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=200&fit=crop&q=80",
    },
    {
        icon: HeartHandshake,
        title: "Empathy-First Conversations",
        description:
            "Our AI mirrors the warmth and professionalism of your best front-desk staff, making patients feel cared for instantly.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=200&fit=crop&q=80",
    },
    {
        icon: ShieldCheck,
        title: "HIPAA & SOC 2 Compliant",
        description:
            "Built with enterprise-grade security from day one. End-to-end encryption, audit logs, and North American data residency.",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop&q=80",
    },
    {
        icon: Sparkles,
        title: "Context-Aware Intelligence",
        description:
            "Breeh reads your calendar in real-time, understands patient history, and adapts its responses to each unique situation.",
        image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=400&h=200&fit=crop&q=80",
    },
    {
        icon: Zap,
        title: "Measurable ROI from Day One",
        description:
            "Practices recover an average of $28K in previously lost revenue within the first three months of deployment.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop&q=80",
    },
];

const DifferentiatorSection = () => {
    return (
        <section className="py-24 lg:py-32 section-lavender" id="differentiators">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-semibold text-accent tracking-wide mb-3">
                        Why We Are Different
                    </p>
                    <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                        Built for Dentistry.
                        <br />
                        <span className="text-primary">Nothing Else.</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
                        General-purpose AI can't handle the complexity of dental practice
                        management. Breeh AI is purpose-built to solve the unique challenges
                        your team faces every day.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {differentiators.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Card image */}
                            <div className="relative h-36 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                                <div className="absolute bottom-3 left-5 w-10 h-10 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                    <item.icon className="w-5 h-5 text-white" />
                                </div>
                            </div>
                            <div className="p-6 pt-4">
                                <h3 className="font-display font-bold text-base text-foreground mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DifferentiatorSection;
