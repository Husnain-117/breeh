import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, TrendingUp, PhoneCall, Heart } from "lucide-react";

function useCountUp(target: number, duration = 2500, inView = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let startTime: number | null = null;
        const step = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }, [inView, target, duration]);

    return count;
}

const metrics = [
    {
        label: "Practices Transformed",
        value: 200,
        suffix: "+",
        icon: Users,
        trend: "+12% this month"
    },
    {
        label: "Revenue Impact",
        value: 50,
        suffix: "M+",
        prefix: "$",
        icon: TrendingUp,
        trend: "+$4.2M recovered"
    },
    {
        label: "Calls Handled",
        value: 2,
        suffix: "M+",
        icon: PhoneCall,
        trend: "99.9% uptime"
    },
    {
        label: "Patient Satisfaction",
        value: 98,
        suffix: "%",
        icon: Heart,
        trend: "Avg 4.9/5 stars"
    }
];

const AggregateMetrics = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="bg-surface/50 border-y border-border py-20 relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {metrics.map((metric, i) => {
                        const count = useCountUp(metric.value, 2500, isInView);

                        return (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="text-center"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                                    <metric.icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-2 flex items-center justify-center font-display">
                                    {metric.prefix}{count.toLocaleString()}{metric.suffix}
                                </h3>

                                <p className="text-muted-foreground font-medium mb-3">{metric.label}</p>

                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-[10px] font-bold uppercase tracking-wider">
                                    <TrendingUp className="w-3 h-3" />
                                    {metric.trend}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Decorative Orbs */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default AggregateMetrics;
