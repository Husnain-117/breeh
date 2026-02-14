import { Linkedin, Twitter, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const footerLinks = {
    Platform: [
      { label: "AI Dental Receptionist", onClick: () => scrollToSection("why-breeh") },
      { label: "How It Works", onClick: () => scrollToSection("how-it-works") },
      { label: "Live Demos", onClick: () => scrollToSection("demos") },
      { label: "FAQ", onClick: () => scrollToSection("faq") },
    ],
    Company: [
      { label: "About Us", onClick: () => scrollToSection("mission") },
      { label: "Book a Demo", onClick: onBookDemo },
    ],
    Resources: [
      { label: "Playbook", onClick: onOpenPlaybook },
      { label: "ROI Calculator", isNew: true, onClick: () => navigate("/roi-calculator") },
    ],
  };

  return (
    <footer className="bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <span className="font-display font-bold text-2xl text-primary-foreground tracking-tight">Breeh AI</span>
            </a>
            <p className="text-primary-foreground/50 text-sm leading-relaxed mb-6 max-w-xs">
              The AI-powered dental receptionist that never misses a call, books appointments 24/7, and helps practices recover lost revenue.
            </p>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/50 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <a href="mailto:hello@breehai.com" className="flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5" /> hello@breehai.com
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm text-primary-foreground/80 uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={link.onClick}
                      className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300 inline-flex items-center gap-2 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-primary-foreground after:transition-all after:duration-300"
                    >
                      {link.label}
                      {"isNew" in link && link.isNew && (
                        <span className="text-[10px] font-bold bg-primary text-primary-foreground rounded-full px-2 py-0.5">New</span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-6">
            {["Terms of Service", "Privacy Policy", "HIPAA Compliance"].map((link) => (
              <a key={link} href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-primary-foreground/60 after:transition-all after:duration-300">{link}</a>
            ))}
          </div>
          <p className="text-xs text-primary-foreground/40">© {new Date().getFullYear()} Breeh AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
