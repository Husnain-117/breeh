import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";


const navItems = [
  {
    label: "Resources",
    children: [
      { label: "Blog", desc: "Insights & dental AI trends" },
      { label: "Documentation", desc: "Setup & integration guides" },
      { label: "ROI Calculator", desc: "Estimate your savings" },
    ],
  },
  { label: "Case Studies" },
  { label: "Blog" },
  { label: "About" },
];

interface NavbarProps {
  onBookDemo?: () => void;
}

const Navbar = ({ onBookDemo }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-2 px-4 lg:px-8" : "py-4 px-4 lg:px-8"
        }`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 rounded-2xl px-6 lg:px-8 border border-white/10 ${scrolled
          ? "bg-accent shadow-xl shadow-accent/20"
          : "bg-[hsla(243.1,69.4%,61.6%,0.42)] backdrop-blur-md"
          }`}
      >
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <span className="font-display font-bold text-xl text-primary-foreground tracking-tight">Breeh AI</span>
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
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
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
                      <div className="bg-background rounded-xl p-3 min-w-[240px] border border-border shadow-xl">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href="#"
                            className="block px-4 py-3 rounded-lg transition-colors hover:bg-muted"
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

          {/* Right side: FAQ + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className="rounded-full px-5 py-2 text-sm font-semibold text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
            >
              FAQ
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); onBookDemo?.(); }}
              className="rounded-full px-6 py-2.5 text-sm font-semibold bg-primary-foreground text-foreground hover:bg-primary-foreground/90 shadow-sm transition-all duration-300"
            >
              BOOK DEMO
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-primary-foreground transition-colors"
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
            className="lg:hidden mx-4 mt-2 bg-background rounded-2xl border border-border shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a href="#" className="block text-foreground font-medium py-2">
                    {item.label}
                  </a>
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <a href="#" className="block text-center text-sm text-foreground/70">
                  FAQ
                </a>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); onBookDemo?.(); setMobileOpen(false); }}
                  className="block text-center bg-accent text-accent-foreground font-semibold rounded-full px-6 py-2.5 text-sm"
                >
                  BOOK DEMO
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
