import { Linkedin, Twitter, Youtube, Instagram } from "lucide-react";


const footerLinks = {
  Platform: [
    { label: "AI Receptionist", isNew: false },
    { label: "Appointment Scheduling", isNew: false },
    { label: "Patient Communication", isNew: false },
    { label: "Call Analytics", isNew: false },
    { label: "Integrations", isNew: false },
  ],
  Solutions: [
    { label: "Dental Clinics", isNew: false },
    { label: "Orthodontics", isNew: false },
    { label: "Oral Surgery", isNew: false },
    { label: "DSO / Groups", isNew: false },
    { label: "Multi-Location", isNew: false },
  ],
  Company: [
    { label: "About Us", isNew: false },
    { label: "Careers", isNew: false },
    { label: "Press", isNew: false },
    { label: "Partners", isNew: false },
    { label: "Pricing", isNew: false },
  ],
  Resources: [
    { label: "Blog", isNew: false },
    { label: "ROI Calculator", isNew: true },
    { label: "Case Studies", isNew: false },
    { label: "Documentation", isNew: false },
    { label: "Webinars", isNew: false },
  ],
};

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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <span className="font-display font-bold text-2xl text-foreground tracking-tight">Breeh AI</span>
            </a>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm text-accent mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-2"
                    >
                      {link.label}
                      {link.isNew && (
                        <span className="text-[10px] font-bold bg-accent text-accent-foreground rounded-full px-2 py-0.5">
                          New
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
