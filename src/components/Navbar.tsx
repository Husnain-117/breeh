import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Phone } from "lucide-react";

const navItems = [
  {
    label: "Resources",
    children: [
      { label: "Blog", desc: "Insights & dental AI trends" },
      { label: "Documentation", desc: "Setup & integration guides" },
      { label: "ROI Calculator", desc: "Estimate your savings" },
    ],
  },
  { label: "About" },
  { label: "Case Studies" },
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
          ? "bg-foreground/95 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-base transition-transform group-hover:scale-110">
              B
            </div>
            <span className="font-display font-bold text-xl text-primary-foreground">
              BREEH<span className="text-primary">AI</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors">
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
                      <div className="bg-foreground/95 backdrop-blur-xl rounded-xl p-3 min-w-[240px] border border-primary-foreground/10">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href="#"
                            className="block px-4 py-3 rounded-lg transition-colors hover:bg-primary-foreground/10"
                          >
                            <div className="font-medium text-sm text-primary-foreground">
                              {child.label}
                            </div>
                            <div className="text-xs text-primary-foreground/50 mt-0.5">
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

          {/* Right side: phone + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:+18001234567" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Phone className="w-3.5 h-3.5" />
              1-800-123-4567
            </a>
            <a href="#" className="bg-primary-foreground text-foreground font-semibold rounded-lg px-6 py-2.5 text-sm transition-all duration-300 hover:bg-primary-foreground/90 hover:-translate-y-0.5">
              Book a Demo
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-primary-foreground"
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
            className="lg:hidden bg-foreground/98 backdrop-blur-xl border-t border-primary-foreground/10"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a href="#" className="block text-primary-foreground/80 font-medium py-2">
                    {item.label}
                  </a>
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <a href="tel:+18001234567" className="block text-center text-sm text-primary-foreground/70">
                  1-800-123-4567
                </a>
                <a href="#" className="block text-center bg-primary-foreground text-foreground font-semibold rounded-lg px-6 py-2.5 text-sm">
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
