const footerLinks = {
  Platform: ["AI Receptionist", "Appointment Scheduling", "Patient Communication", "Call Analytics", "Integrations"],
  Solutions: ["Dental Clinics", "Orthodontics", "Oral Surgery", "DSO / Groups", "Multi-Location"],
  Company: ["About Us", "Careers", "Press", "Partners", "Contact"],
  Resources: ["Blog", "Case Studies", "Documentation", "ROI Calculator", "Webinars"],
};

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-base">
                B
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                Breeh<span className="text-primary">AI</span>
              </span>
            </a>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm text-accent mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
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
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Breeh AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "HIPAA Compliance", "Security"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
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
