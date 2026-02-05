import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Platform",
    children: [
      { label: "AI Agent Builder", desc: "Build intelligent agents in minutes" },
      { label: "Knowledge Base", desc: "Connect your enterprise data" },
      { label: "Copilot", desc: "AI-powered agent assist" },
      { label: "Analytics", desc: "Measure & optimize performance" },
    ],
  },
  {
    label: "Solutions",
    children: [
      { label: "Customer Service", desc: "Automate support at scale" },
      { label: "Employee Experience", desc: "Streamline internal operations" },
      { label: "Sales & Marketing", desc: "Boost conversion with AI" },
      { label: "Commerce", desc: "Transform shopping experience" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Blog", desc: "Insights & thought leadership" },
      { label: "Case Studies", desc: "Customer success stories" },
      { label: "Documentation", desc: "API & developer guides" },
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
          ? "bg-hero/95 backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg gradient-bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-lg transition-transform group-hover:scale-110">
              B
            </div>
            <span className="font-display font-bold text-xl text-hero-foreground">
              Breeh<span className="gradient-text">AI</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="nav-link flex items-center gap-1 px-4 py-2 text-hero-foreground/80 hover:text-hero-foreground">
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5 transition-transform" />}
                </button>

                {/* Mega Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="glass-card rounded-2xl p-4 min-w-[280px]">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href="#"
                            className="block px-4 py-3 rounded-xl transition-colors hover:bg-white/10"
                          >
                            <div className="font-medium text-sm text-hero-foreground">
                              {child.label}
                            </div>
                            <div className="text-xs text-hero-foreground/50 mt-0.5">
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

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-hero-foreground/80 hover:text-hero-foreground transition-colors">
              Login
            </a>
            <a href="#" className="btn-primary-gradient text-sm">
              Book a Demo
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-hero-foreground"
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
            className="lg:hidden bg-hero/98 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a href="#" className="block text-hero-foreground/80 font-medium py-2">
                    {item.label}
                  </a>
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <a href="#" className="block text-center text-sm text-hero-foreground/80">
                  Login
                </a>
                <a href="#" className="block text-center btn-primary-gradient text-sm">
                  Book a Demo
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
