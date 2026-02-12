import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  onBookDemo?: () => void;
  onOpenPlaybook?: () => void;
}

const Navbar = ({ onBookDemo, onOpenPlaybook }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const resourceItems = [
    {
      label: "Playbook",
      desc: "The $1M/yr dental practice playbook",
      onClick: () => { onOpenPlaybook?.(); setMobileOpen(false); },
    },
    {
      label: "ROI Calculator",
      desc: "Estimate your savings with Breeh AI",
      onClick: () => { navigate("/roi-calculator"); setMobileOpen(false); },
    },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-2 px-4 lg:px-8" : "py-4 px-4 lg:px-8"}`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 rounded-2xl px-6 lg:px-8 border border-primary/20 ${scrolled
          ? "bg-primary shadow-xl shadow-primary/20"
          : "bg-primary/60 backdrop-blur-md"
          }`}
      >
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <span className="font-display font-bold text-xl text-primary-foreground tracking-tight">Breeh AI</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Resources dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("Resources")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
                Resources
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {activeDropdown === "Resources" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="bg-background rounded-xl p-3 min-w-[240px] border border-border shadow-xl">
                      {resourceItems.map((child) => (
                        <button
                          key={child.label}
                          onClick={child.onClick}
                          className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-muted"
                        >
                          <div className="font-medium text-sm text-foreground">{child.label}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{child.desc}</div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => navigate("/product")}
              className="px-4 py-2 text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
            >
              Product
            </button>
            <button
              onClick={() => navigate("/solutions")}
              className="px-4 py-2 text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
            >
              Solutions
            </button>
            <button
              onClick={() => navigate("/resources")}
              className="px-4 py-2 text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
            >
              Resources
            </button>
          </div>

          {/* Right side: FAQ + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => scrollToSection("faq")}
              className="rounded-full px-5 py-2 text-sm font-semibold text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
            >
              FAQ
            </button>
            <button
              onClick={onBookDemo}
              className="rounded-full px-6 py-2.5 text-sm font-semibold bg-primary-foreground text-foreground hover:bg-primary-foreground/90 shadow-sm transition-all duration-300"
            >
              BOOK DEMO
            </button>
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
              {resourceItems.map((item) => (
                <button key={item.label} onClick={item.onClick} className="block text-foreground font-medium py-2 w-full text-left">
                  {item.label}
                </button>
              ))}
              <button onClick={() => { navigate("/product"); setMobileOpen(false); }} className="block text-foreground font-medium py-2 w-full text-left">
                Product
              </button>
              <button onClick={() => { navigate("/solutions"); setMobileOpen(false); }} className="block text-foreground font-medium py-2 w-full text-left">
                Solutions
              </button>
              <button onClick={() => { navigate("/resources"); setMobileOpen(false); }} className="block text-foreground font-medium py-2 w-full text-left">
                Resources
              </button>
              <div className="pt-4 space-y-3">
                <button onClick={() => scrollToSection("faq")} className="block text-center text-sm text-foreground/70 w-full">
                  FAQ
                </button>
                <button
                  onClick={() => { onBookDemo?.(); setMobileOpen(false); }}
                  className="block w-full text-center bg-accent text-accent-foreground font-semibold rounded-full px-6 py-2.5 text-sm"
                >
                  BOOK DEMO
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
