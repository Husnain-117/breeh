import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavbarProps {
  onBookDemo?: () => void;
  onOpenPlaybook?: () => void;
}

const Navbar = ({ onBookDemo, onOpenPlaybook }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll detection: glassmorphism + hide on scroll down / show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 60);

      if (currentY > lastScrollY.current && currentY > 200) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const resourceItems = [
    {
      label: "Blog",
      desc: "Latest insights on dental AI",
      onClick: () => navigate("/blog"),
    },
    {
      label: "Playbook",
      desc: "The $1M/yr dental practice playbook",
      onClick: () => onOpenPlaybook?.(),
    },
    {
      label: "ROI Calculator",
      desc: "Estimate your savings with Breeh AI",
      onClick: () => navigate("/roi-calculator"),
    },
  ];

  const navLinks = [
    { label: "Product", path: "/product" },
    { label: "Solutions", path: "/solutions" },
    { label: "Integrations", path: "/integrations" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Who Is This For", path: "/ai-transparency" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: hidden && !mobileOpen ? -100 : 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-2 px-4 lg:px-8" : "py-4 px-4 lg:px-8"
        }`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 rounded-2xl px-6 lg:px-8 border ${scrolled
            ? "bg-background/80 backdrop-blur-xl border-border/50 shadow-lg shadow-primary/5"
            : "bg-primary/60 backdrop-blur-md border-primary/20"
          }`}
      >
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 group"
          >
            <span
              className={`font-display font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled ? "text-foreground" : "text-primary-foreground"
                }`}
            >
              Breeh AI
            </span>
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Resources dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("Resources")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-300 ${scrolled
                    ? "text-foreground/60 hover:text-primary"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                  }`}
              >
                Resources
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === "Resources" ? "rotate-180" : ""
                    }`}
                />
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
                    <div className="bg-background rounded-xl p-2 min-w-[260px] border border-border shadow-xl shadow-primary/5">
                      {resourceItems.map((child, i) => (
                        <motion.button
                          key={child.label}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: i * 0.05 }}
                          onClick={child.onClick}
                          className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-primary/5 group"
                        >
                          <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                            {child.label}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            {child.desc}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                onClick={() => navigate(link.path)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${scrolled
                    ? isActive(link.path)
                      ? "text-primary"
                      : "text-foreground/60 hover:text-primary"
                    : isActive(link.path)
                      ? "text-primary-foreground"
                      : "text-primary-foreground/70 hover:text-primary-foreground"
                  }`}
              >
                {link.label}
                {/* Active underline */}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="nav-underline"
                    className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${scrolled ? "bg-primary" : "bg-primary-foreground"
                      }`}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right side: CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.3,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              onClick={onBookDemo}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5 ${scrolled
                  ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30"
                  : "bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
                }`}
            >
              BOOK DEMO
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
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
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden mx-4 mt-2 bg-background/95 backdrop-blur-xl rounded-2xl border border-border shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {resourceItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  onClick={() => {
                    item.onClick();
                    setMobileOpen(false);
                  }}
                  className="block text-foreground font-medium py-3 w-full text-left rounded-lg px-3 hover:bg-primary/5 transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}

              <div className="h-px bg-border my-2" />

              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: (resourceItems.length + i) * 0.05,
                  }}
                  onClick={() => {
                    navigate(link.path);
                    setMobileOpen(false);
                  }}
                  className={`block font-medium py-3 w-full text-left rounded-lg px-3 transition-colors ${isActive(link.path)
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:bg-primary/5"
                    }`}
                >
                  {link.label}
                </motion.button>
              ))}

              <div className="pt-4">
                <button
                  onClick={() => {
                    onBookDemo?.();
                    setMobileOpen(false);
                  }}
                  className="block w-full text-center bg-primary text-primary-foreground font-semibold rounded-full px-6 py-3 text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
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
