import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Platform",
    children: [
      { label: "AI Receptionist", desc: "24/7 intelligent call handling" },
      { label: "Appointment Scheduling", desc: "Seamless booking automation" },
      { label: "Patient Communication", desc: "Multi-channel engagement" },
      { label: "Analytics Dashboard", desc: "Practice performance insights" },
    ],
  },
  {
    label: "Solutions",
    children: [
      { label: "Dental Clinics", desc: "Single & multi-location practices" },
      { label: "Orthodontics", desc: "Specialized scheduling workflows" },
      { label: "Oral Surgery", desc: "Complex appointment management" },
      { label: "DSO / Groups", desc: "Enterprise dental group solutions" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Blog", desc: "Insights & dental AI trends" },
      { label: "Case Studies", desc: "Practice success stories" },
      { label: "Documentation", desc: "Setup & integration guides" },
      { label: "ROI Calculator", desc: "Estimate your savings" },
    ],
  },
  { label: "Pricing" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg shadow-foreground/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-lg transition-transform group-hover:scale-110">
              B
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Breeh<span className="text-primary">AI</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 bg-surface/80 backdrop-blur-sm rounded-full px-2 py-1.5 border border-border/50">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="nav-link flex items-center gap-1 px-4 py-2 text-foreground/70 hover:text-foreground rounded-full hover:bg-muted transition-colors">
                    {item.label}
                    {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="bg-background rounded-2xl p-3 min-w-[280px] shadow-xl shadow-foreground/5 border border-border">
                          {item.children.map((child) => (
                            <a
                              key={child.label}
                              href="#"
                              className="block px-4 py-3 rounded-xl transition-colors hover:bg-muted"
                            >
                              <div className="font-medium text-sm text-foreground">
                                {child.label}
                              </div>
                              <div className="text-xs text-muted-foreground mt-0.5">
                                {child.desc}
                              </div>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#" className="btn-outline-primary text-sm !px-6 !py-2.5">
              Try for free
            </a>
            <a href="#" className="btn-primary text-sm !px-6 !py-2.5">
              Book a demo
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a href="#" className="block text-foreground/80 font-medium py-2">
                    {item.label}
                  </a>
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <a href="#" className="block text-center btn-outline-primary text-sm">
                  Try for free
                </a>
                <a href="#" className="block text-center btn-primary text-sm">
                  Book a demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
