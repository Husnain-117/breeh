import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const brands = [
  { name: "Aspen Dental", color: "bg-primary", textColor: "text-primary-foreground" },
  { name: "SmileDirect", color: "bg-accent", textColor: "text-accent-foreground" },
  { name: "Heartland", color: "bg-primary/80", textColor: "text-primary-foreground" },
  { name: "Pacific Dental", color: "bg-accent/80", textColor: "text-accent-foreground" },
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="section-lavender py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-accent tracking-wide mb-3">
            Case Studies and Testimonials
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground">
            The results speak for themselves,
            <br />
            just like our customers
          </h2>
        </motion.div>

        {/* Brand Cards Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {/* Featured Large Card */}
          <div className="col-span-2 lg:col-span-1 bg-background rounded-2xl p-8 flex items-center justify-between shadow-sm border border-border/50">
            <span className="font-display font-bold text-2xl text-foreground">Bright Smile Dental</span>
            <span className="text-sm font-medium text-muted-foreground">DSO</span>
          </div>
          {brands.slice(1).map((brand) => (
            <div
              key={brand.name}
              className={`${brand.color} rounded-2xl p-8 flex items-center justify-center shadow-sm`}
            >
              <span className={`font-display font-bold text-lg ${brand.textColor}`}>
                {brand.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Case Study Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-background rounded-3xl p-8 md:p-12 shadow-sm border border-border/50"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-muted text-xs font-semibold text-foreground mb-6">
                Case study
              </span>
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                "With Breeh AI, we moved from missed calls to delivering real results.
                In just four weeks, we launched a fully functioning AI receptionist
                that now handles more than 80% of patient calls. Our staff is thrilled,
                our bookings are up, and patients get instant responses."
              </p>
              <Link to="/case-studies/breeh-ai-dental-receptionist-roi" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                Read more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              {/* Real image with stats overlay */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop&q=80"
                  alt="Modern dental practice with advanced technology"
                  className="w-full h-64 md:h-80 object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent rounded-2xl" />
              </div>
              {/* Floating stats */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                <div className="flex-1 bg-card/95 backdrop-blur-md border border-border rounded-xl p-4 text-center shadow-lg">
                  <p className="text-xs text-accent font-semibold uppercase">Calls Handled</p>
                  <p className="font-display font-bold text-3xl text-foreground">80%</p>
                  <p className="text-xs text-muted-foreground">Automated in 4 weeks</p>
                </div>
                <div className="flex-1 bg-card/95 backdrop-blur-md border border-border rounded-xl p-4 text-center shadow-lg">
                  <p className="text-xs text-accent font-semibold uppercase">Patient Satisfaction</p>
                  <p className="font-display font-bold text-3xl text-foreground">95%</p>
                  <p className="text-xs text-muted-foreground">CSAT Score</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* View More Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
            View more success stories <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
