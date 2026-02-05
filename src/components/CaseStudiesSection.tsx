import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const brands = [
  { name: "Aspen Dental", color: "bg-primary", textColor: "text-primary-foreground" },
  { name: "SmileDirect", color: "bg-accent", textColor: "text-accent-foreground" },
  { name: "Heartland", color: "bg-emerald-600", textColor: "text-white" },
  { name: "Pacific Dental", color: "bg-red-500", textColor: "text-white" },
];

const CaseStudiesSection = () => {
  return (
    <section className="section-lavender py-24 lg:py-32 relative overflow-hidden">
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
              <a href="#" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                Read more <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="relative">
              <div className="bg-muted rounded-2xl p-6 aspect-video flex items-end justify-center">
                <div className="bg-background rounded-xl p-4 shadow-lg flex gap-6">
                  <div className="text-center">
                    <p className="text-xs text-accent font-semibold uppercase">Calls Handled</p>
                    <p className="font-display font-bold text-3xl text-foreground">80%</p>
                    <p className="text-xs text-muted-foreground">Automated in 4 weeks</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-accent font-semibold uppercase">Patient Satisfaction</p>
                    <p className="font-display font-bold text-3xl text-foreground">95%</p>
                    <p className="text-xs text-muted-foreground">CSAT Score</p>
                  </div>
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
          <a href="#" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
            View more success stories <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
