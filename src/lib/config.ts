// Public/publishable client-side configuration
// These are safe to include in client-side code

export const EMAILJS_CONFIG = {
  serviceId: "service_u1u1pe7",
  demoTemplateId: "template_demo_booking",
  playbookTemplateId: "template_qa3ju6h",
  publicKey: "W04d948uqsesC5WRv",
  adminEmail: "husnainn.akram@gmail.com",
  playbookAdminEmail: "husnainakram336@gmail.com",
};

export const ELEVENLABS_CONFIG = {
  agentId: "agent_8201keky3nz1e3atqe5yxpbtax92",
};

export const SITE_CONFIG = {
  url: "https://www.breehai.com",
  playbookPath: "/Breeh-AI-Playbook.pdf",
  calendlyUrl: "https://calendly.com/husnainn-akram/30min",
  get playbookUrl() {
    return `${this.url}${this.playbookPath}`;
  },
};
