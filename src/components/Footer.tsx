import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Mail,
  ArrowRight,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { SITE_CONFIG } from "@/lib/config";

interface FooterProps {
  onOpenPlaybook?: () => void;
  onBookDemo?: () => void;
}

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = ({ onOpenPlaybook, onBookDemo }: FooterProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const footerLinks = {
    Product: [
      {
        label: "AI Dental Receptionist",
        onClick: () => scrollToSection("why-breeh"),
      },
      {
        label: "How It Works",
        onClick: () => scrollToSection("how-it-works"),
      },
      { label: "Live Demos", onClick: () => scrollToSection("demos") },
      { label: "Product", onClick: () => navigate("/product") },
    ],
    Company: [
      { label: "About Us", onClick: () => scrollToSection("mission") },
      { label: "Case Studies", onClick: () => navigate("/case-studies") },
      { label: "Book a Demo", onClick: onBookDemo },
    ],
    Resources: [
      { label: "Blog", onClick: () => navigate("/blog") },
      { label: "Playbook", onClick: onOpenPlaybook },
      {
        label: "ROI Calculator",
        isNew: true,
        onClick: () => navigate("/roi-calculator"),
      },
      { label: "FAQ", onClick: () => scrollToSection("faq") },
    ],
    Legal: [
      { label: "Terms of Service", onClick: () => navigate("/terms") },
      { label: "Privacy Policy", onClick: () => navigate("/privacy") },
      { label: "HIPAA Compliance", onClick: () => navigate("/hipaa") },
    ],
  };

  return (
    <footer className="relative bg-[hsl(244_50%_18%)] text-white">
      {/* Top gradient border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsla(244, 58%, 61%, 0.4), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 lg:pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Column — spans 2 on lg */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <a href="/" className="flex items-center gap-2 mb-4">
              <span className="font-display font-bold text-2xl text-white tracking-tight">
                Breeh AI
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              The AI-powered dental receptionist that never misses a call, books
              appointments 24/7, and helps practices recover lost revenue.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">
                Stay Updated
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-white/30
                    focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
                <button className="bg-primary hover:bg-primary/90 text-white rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 flex-shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40
                    hover:text-primary hover:bg-white/10 hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links], colIdx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + colIdx * 0.08 }}
            >
              <h4 className="font-display font-semibold text-xs text-white/40 uppercase tracking-[0.15em] mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={link.onClick}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-300 inline-flex items-center gap-2
                        relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-white/40 after:transition-all after:duration-300"
                    >
                      {link.label}
                      {"isNew" in link && link.isNew && (
                        <span className="text-[9px] font-bold bg-primary text-white rounded-full px-2 py-0.5">
                          New
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex flex-wrap gap-6">
            {[
              { label: "Privacy", to: "/privacy" },
              { label: "Terms", to: "/terms" },
              { label: "HIPAA", to: "/hipaa" },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Breeh AI. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
