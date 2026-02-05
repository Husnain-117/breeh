import { Linkedin, Twitter, Youtube, Mail } from "lucide-react";

const footerLinks = {
  Platform: ["AI Agent Builder", "Knowledge AI", "VoiceX Engine", "Copilot", "Analytics", "Integrations"],
  Solutions: ["Customer Service", "Employee Experience", "Sales & Marketing", "Commerce", "BFSI", "Healthcare"],
  Resources: ["Blog", "Case Studies", "Documentation", "API Reference", "ROI Calculator", "Webinars"],
  Company: ["About Us", "Careers", "Press", "Partners", "Contact", "Trust Center"],
};

const Footer = () => {
  return (
    <footer className="section-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-lg gradient-bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-lg">
                B
              </div>
              <span className="font-display font-bold text-xl text-section-dark-foreground">
                Breeh<span className="gradient-text">AI</span>
              </span>
            </a>
            <p className="text-sm text-section-dark-foreground/40 mb-6 max-w-xs leading-relaxed">
              The world's leading agentic AI platform for autonomous customer 
              and employee experiences.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Youtube, label: "YouTube" },
                { icon: Mail, label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-section-dark-foreground/40 hover:text-primary hover:bg-white/5 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm text-section-dark-foreground mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-section-dark-foreground/40 hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-section-dark-foreground/30">
            © {new Date().getFullYear()} Breeh AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-section-dark-foreground/30 hover:text-section-dark-foreground/60 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
