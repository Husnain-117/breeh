import { Linkedin, Twitter, Youtube, Instagram } from "lucide-react";
import breehLogo from "@/assets/breeh-logo.png";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5 mb-6">
              <img
                src={breehLogo}
                alt="Breeh AI"
                className="w-10 h-10 object-contain"
              />
              <span className="font-display font-bold text-xl text-foreground">
                Breeh AI
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-6">
              The #1 AI Dental Receptionist trusted by thousands of dentists
              across North America to handle calls 24/7 and book appointments
              seamlessly.
            </p>
            <a
              href="#"
              className="inline-block bg-primary text-primary-foreground font-semibold rounded-full px-6 py-2.5 text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              Book a Demo
            </a>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display font-semibold text-sm text-primary mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="tel:+12394228747"
                  className="hover:text-foreground transition-colors"
                >
                  +1 239 422 8747
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@breeh.ai"
                  className="hover:text-foreground transition-colors"
                >
                  support@breeh.ai
                </a>
              </li>
              <li>United States & Canada</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-6">
            {["Terms of Service", "Privacy Policy", "HIPAA Compliance", "Security"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              )
            )}
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Breeh AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
