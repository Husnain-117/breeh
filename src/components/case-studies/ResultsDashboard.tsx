import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, DollarSign, ArrowUpRight } from "lucide-react";

interface ResultMetric {
    label: string;
    value: string;
    change: string;
    trend: "up" | "down";
    icon: any;
}

const metrics: ResultMetric[] = [
    { label: "Answer Rate", value: "99%", change: "+65%", trend: "up", icon: PhoneCall },
    { label: "New Bookings", value: "327", change: "+150%", trend: "up", icon: Users },
    { label: "Response Time", value: "8s", change: "-97%", trend: "down", icon: Clock },
    { label: "Revenue Recovered", value: "$450K", change: "+$120K", trend: "up", icon: DollarSign },
];

import { PhoneCall } from "lucide-react";

const ResultsDashboard = () => {
    return (
        <section className="py-24 px-6 bg-surface/30">
            <div className="container max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                        The Results
                    </motion.span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display text-foreground">Measurable Success</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Hard data from the implementation period showing significant improvements across all key metrics.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((m, i) => (
                        <motion.div
                            key={m.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-card rounded-3xl p-8 border border-border hover:border-primary/30 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <m.icon className="w-6 h-6" />
                                </div>
                                <div className={`flex items-center gap-1 text-xs font-bold ${m.trend === "up" ? "text-green-600" : "text-green-500"}`}>
                                    <ArrowUpRight className={`w-3.5 h-3.5 ${m.trend === "down" ? "rotate-90" : ""}`} />
                                    {m.change}
                                </div>
                            </div>

                            <p className="text-muted-foreground text-sm font-medium mb-1">{m.label}</p>
                            <h3 className="text-4xl font-bold text-foreground font-display">{m.value}</h3>

                            {/* Mini sparkline visualization (placeholder) */}
                            <div className="mt-6 h-1 w-full bg-muted rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1.5, delay: i * 0.2 }}
                                    className="h-full bg-primary"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Chart Callout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 bg-card rounded-3xl p-8 border border-border overflow-hidden relative group"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">6-Month Trend: Answer Capacity</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                Before implementation, staff capacity capped at 300 calls/day. With Breeh AI, the practice handles over 800 calls/day with zero increase in headcount.
                            </p>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                                    <div className="w-3 h-3 rounded bg-muted" /> Manual
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-primary">
                                    <div className="w-3 h-3 rounded bg-primary" /> AI Enhanced
                                </div>
                            </div>
                        </div>

                        {/* Simple Bar Chart Visualization */}
                        <div className="flex items-end gap-3 h-48">
                            {[40, 45, 42, 85, 92, 98].map((h, i) => (
                                <div key={i} className="flex-1 flex flex-col justify-end gap-2 h-full">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                        className={`rounded-t-lg ${i < 3 ? "bg-muted" : "bg-primary shadow-lg shadow-primary/20"}`}
                                    />
                                    <span className="text-[10px] text-muted-foreground text-center font-bold">M{i + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Decorative glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 group-hover:bg-primary/10 transition-colors" />
                </motion.div>
            </div>
        </section>
    );
};

export default ResultsDashboard;
