export interface Article {
  slug: string;
  type: "case-study" | "blog";
  category: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: { name: string; role: string };
  date: string;
  readTime: string;
  content: string[];
}

export const categories = [
  "All",
  "AI Technology",
  "Practice Management",
  "Patient Experience",
  "Case Studies",
  "Product Updates",
];

export const featuredArticle: Article = {
  slug: "zen-dentistry-17x-roi",
  type: "case-study",
  category: "Case Studies",
  title: "Zen Dentistry: 17× ROI After Failed AI Vendors — DSO Case Study",
  excerpt:
    "Zen Dentistry tried 2 AI vendors that failed. Breeh AI delivered 16-23 new patients monthly per location, 17× ROI across 24 locations.",
  coverImage:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=675&fit=crop&q=80",
  author: { name: "Breeh AI Team", role: "Product" },
  date: "Jan 10, 2025",
  readTime: "11 min read",
  content: [
    "Zen Dentistry is a fast-growing DSO with 24 locations across the Midwest. Like many dental groups scaling quickly, they faced a persistent problem: missed calls were silently draining revenue. With front desks overwhelmed during peak hours and no coverage after 5 PM, an estimated 20-30% of inbound calls went unanswered every week.",
    "Before Breeh AI, Zen Dentistry tried two other AI-powered call solutions. The first was a generic virtual assistant that couldn't handle dental-specific questions — patients would ask about insurance coverage or emergency procedures and get confused, irrelevant answers. The second tool was slightly better but required extensive manual configuration and broke frequently after software updates.",
    '"We wasted nearly 8 months and significant budget on tools that just didn\'t understand dentistry," said Dr. Arshjot A., DDS, FCAD, founder of Zen Dentistry. "Our staff ended up doing more work, not less."',
    "When Zen Dentistry deployed Breeh AI in Q3 2024, the difference was immediate. Breeh's dental-first architecture meant it understood appointment types, insurance questions, urgency levels, and practice-specific workflows from day one. There was no lengthy training period — the AI was productive within 48 hours of setup.",
    "Within the first 30 days, each location saw an average of 16-23 new patients recovered from previously missed calls. These weren't just inquiries — they were confirmed, booked appointments that directly impacted the bottom line. Across all 24 locations, Zen Dentistry calculated a 17× return on their Breeh AI investment.",
    "The impact went beyond revenue. Front desk staff reported feeling less overwhelmed, with Breeh handling the overflow during Monday morning rushes and lunch hours. After-hours calls — which previously went to voicemail and were often never returned — were now being answered instantly by the AI, with patients receiving appointment confirmations before the office even opened the next morning.",
    '"Breeh AI didn\'t just recover missed calls — it transformed how we think about patient access," Dr. Arshjot added. "We now have 24/7 coverage across every location without hiring a single additional receptionist. I 110% recommend it to any DSO serious about growth."',
    "Key results: 17× ROI within 90 days. 16-23 new patients per location per month. 78% reduction in missed calls. Zero additional staff required. Sub-2 second AI response time. Full HIPAA compliance across all locations.",
  ],
};

export const articles: Article[] = [
  {
    slug: "how-missed-calls-cost-dental-practices",
    type: "blog",
    category: "Practice Management",
    title:
      "How Missed Calls Are Silently Costing Your Dental Practice Thousands",
    excerpt:
      "Research shows 36% of missed new callers never call back. Learn how AI-powered call recovery can capture this lost revenue.",
    coverImage:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop&q=80",
    author: { name: "Breeh AI Team", role: "Growth" },
    date: "Feb 8, 2025",
    readTime: "7 min read",
    content: [
      "Every dental practice misses calls. It's an unavoidable reality when your front desk team is checking in patients, handling insurance verifications, and managing the dozens of tasks that keep a practice running. But what most practice owners don't realize is just how much revenue walks out the door with each unanswered ring.",
      "According to industry research, the average dental practice misses 20-35% of inbound calls during business hours. That number jumps to 100% after hours, on weekends, and during holidays — times when patients are often most motivated to book because they're free to make the call.",
      "Here's the statistic that should keep every practice owner up at night: 36% of missed new patient callers never call back. They simply move on to the next practice in their search results. For a practice where the average patient lifetime value is $3,000-$5,000, even losing 5 new patients per month to missed calls means $180,000-$300,000 in lost annual revenue.",
      "The problem compounds for multi-location practices and DSOs. Across 10 locations, that same math translates to $1.8-$3 million in potential revenue simply evaporating because no one picked up the phone.",
      "Traditional solutions — hiring more staff, using answering services, or setting up voicemail — all have significant limitations. Additional staff is expensive and still can't handle simultaneous calls. Answering services feel impersonal and can't book appointments. Voicemail? Studies show that fewer than 20% of callers actually leave a message.",
      "This is precisely the gap that AI dental receptionists like Breeh AI are designed to fill. By answering every call instantly — whether it's the first call of the day or the fifteenth simultaneous call during a Monday morning rush — AI ensures that no patient opportunity is lost.",
      "The ROI math is straightforward: if Breeh AI recovers even 10 patients per month at an average lifetime value of $3,500, that's $420,000 in annual revenue from a technology that costs a fraction of a single employee's salary. For most practices, the system pays for itself within the first week.",
      "The bottom line: missed calls aren't just an inconvenience — they're the single largest source of preventable revenue loss in dentistry. And with AI technology purpose-built for dental workflows, there's no longer any reason to accept that loss.",
    ],
  },
  {
    slug: "ai-receptionist-vs-answering-service",
    type: "blog",
    category: "AI Technology",
    title:
      "AI Receptionist vs. Traditional Answering Service: A Complete Comparison",
    excerpt:
      "Why dental practices are switching from legacy answering services to AI-powered receptionists — and seeing 3-5× better results.",
    coverImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop&q=80",
    author: { name: "Breeh AI Team", role: "Research" },
    date: "Feb 3, 2025",
    readTime: "8 min read",
    content: [
      "For decades, dental practices that wanted after-hours call coverage had one option: a traditional answering service. A human operator would pick up calls, take a message, and forward it to the office the next business day. It was better than voicemail, but not by much.",
      "Today, AI dental receptionists represent a fundamental shift in how practices handle patient communication. But how do the two approaches actually compare? Let's break it down across the metrics that matter most to practice owners.",
      "Response Quality: Traditional answering services employ generalist operators who follow scripts. They can't answer questions about your specific services, insurance acceptance, or appointment availability. AI receptionists like Breeh AI are trained specifically on dental workflows. They know the difference between a routine cleaning and an emergency extraction.",
      "Availability & Capacity: Answering services have staffing limitations. During high-volume periods, callers may still be placed on hold. AI receptionists handle unlimited simultaneous calls with zero wait time.",
      "Appointment Booking: This is where the gap becomes a chasm. Traditional answering services cannot book appointments. They take messages. AI receptionists book appointments instantly, directly into your practice management software.",
      "Cost Comparison: A quality answering service typically costs $200-$500 per month and still can't book appointments. An AI receptionist like Breeh AI costs a comparable amount but delivers dramatically more value.",
      "The verdict is clear: AI dental receptionists outperform traditional answering services in every meaningful category. For practices still using legacy answering services, the switch to AI isn't just an upgrade — it's a competitive necessity.",
    ],
  },
  {
    slug: "allied-oms-multi-location-ai",
    type: "case-study",
    category: "Case Studies",
    title: "Allied OMS: How a Multi-Location Practice Scaled With AI",
    excerpt:
      "Allied OMS deployed Breeh AI across 8 locations and saw a 40% increase in new patient bookings within the first quarter.",
    coverImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop&q=80",
    author: { name: "Breeh AI Team", role: "Product" },
    date: "Jan 22, 2025",
    readTime: "8 min read",
    content: [
      "Allied OMS is a multi-location oral and maxillofacial surgery practice with 8 offices spread across three states. As a specialty practice, their patient communication challenges were uniquely complex.",
      '"Our front desks were drowning," explained Brent A., Regional Operations Director. "We had situations where a referring dentist\'s office would call to send us an emergency patient, and they\'d get a busy signal."',
      "When Allied OMS deployed Breeh AI, the focus was on three priorities: never miss a referral call, capture after-hours surgical inquiries, and reduce hold times during peak periods.",
      "The results exceeded expectations. Within the first quarter: new patient bookings increased by 40% across all locations. Referral call capture rate went from 72% to 99%. Average caller wait time dropped from 3.5 minutes to under 2 seconds.",
      "Key results: 40% increase in new patient bookings. 99% referral call capture rate. 12 additional surgical consultations per location monthly. $400K+ annual savings vs. hiring additional staff.",
    ],
  },
  {
    slug: "hipaa-compliance-ai-dental",
    type: "blog",
    category: "AI Technology",
    title:
      "HIPAA Compliance in AI Dental Receptionists: What You Need to Know",
    excerpt:
      "Understanding how AI dental receptionists handle patient data securely and maintain full HIPAA compliance.",
    coverImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&h=500&fit=crop&q=80",
    author: { name: "Breeh AI Team", role: "Engineering" },
    date: "Jan 28, 2025",
    readTime: "6 min read",
    content: [
      'As dental practices increasingly adopt AI-powered communication tools, one question dominates: "Is it HIPAA compliant?" It\'s the right question to ask, and the answer matters enormously.',
      "HIPAA establishes strict requirements for how Protected Health Information (PHI) is collected, stored, transmitted, and accessed. The penalties for non-compliance can reach $1.5 million per violation category per year.",
      "Not all AI tools are created equal when it comes to healthcare compliance. Many general-purpose AI chatbots were never designed for healthcare environments.",
      "Breeh AI was built from the ground up with healthcare-grade compliance as a foundational requirement, not an afterthought. All patient data is encrypted both in transit (TLS 1.3) and at rest (AES-256).",
      "Breeh AI implements role-based access controls (RBAC) and provides a signed BAA to every practice. Practices maintain full control over data retention policies.",
      "For dental practices evaluating AI receptionist solutions, HIPAA compliance should be a non-negotiable requirement. With Breeh AI, practices can confidently adopt AI-powered patient communication knowing that compliance is built into every layer.",
    ],
  },
  {
    slug: "danville-pediatric-weekend-recovery",
    type: "case-study",
    category: "Case Studies",
    title: "Danville Pediatric Dentistry: Weekend Call Recovery Success",
    excerpt:
      "With Breeh AI handling weekend and after-hours calls, Danville recovered 23 new patients in the first month alone.",
    coverImage:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop&q=80",
    author: { name: "Breeh AI Team", role: "Product" },
    date: "Jan 15, 2025",
    readTime: "7 min read",
    content: [
      "Danville Pediatric Dentistry is a beloved community practice serving families in central Virginia. Their challenge wasn't attracting patients — it was capturing them when they called.",
      '"Parents call when it\'s convenient for them, which is usually evenings and weekends," explained Pamela W., Office Manager. "We\'d come in Monday morning to a full voicemail box."',
      "The practice tracked their numbers and discovered they were missing an average of 47 calls per week, with the highest concentration on Saturday mornings and Sunday evenings.",
      "The first month's results were striking: 23 new patients were booked from calls that would have previously gone to voicemail. Saturday morning became their strongest source of new patient bookings.",
      "After three months, Danville Pediatric Dentistry calculated that Breeh AI had generated over $67,000 in new patient revenue — more than 20× the cost of the service.",
      "Key results: 23 new patients recovered in month one. $67,000+ in new revenue within 90 days. 20× ROI on Breeh AI investment. Weekend call capture rate improved from 0% to 98%.",
    ],
  },
  {
    slug: "tmanagement-centralized-ai-12-locations",
    type: "case-study",
    category: "Case Studies",
    title: "TManagement Group: Centralized AI for 12 Locations",
    excerpt:
      "TManagement standardized patient communication across 12 locations, reducing missed calls by 78% and saving 120+ staff hours monthly.",
    coverImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop&q=80",
    author: { name: "Breeh AI Team", role: "Operations" },
    date: "Dec 18, 2024",
    readTime: "10 min read",
    content: [
      "TManagement Group operates 12 dental practices across the southeastern United States. As the group grew through acquisitions, patient communication became increasingly fragmented.",
      "Breeh AI was deployed across all 12 locations in a phased rollout over three weeks. Each location was configured with its specific services, providers, insurance panels, and scheduling rules.",
      "Within 60 days: missed calls dropped by 78% across the organization. Staff efficiency improved dramatically — over 120 staff hours saved per month.",
      "New patient bookings increased by an average of 31% across all locations. TManagement calculated the annual revenue impact at over $2.1 million in recovered and new patient revenue.",
      "Key results: 78% reduction in missed calls. 120+ staff hours saved per month. 31% increase in new patient bookings. $2.1M annual revenue impact. 3-week deployment across all locations.",
    ],
  },
  {
    slug: "5-signs-practice-needs-ai-receptionist",
    type: "blog",
    category: "Practice Management",
    title: "5 Signs Your Dental Practice Needs an AI Receptionist",
    excerpt:
      "Wondering if your practice is ready for AI? Here are the telltale signs that you're losing patients and revenue to missed calls.",
    coverImage:
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&h=500&fit=crop&q=80",
    author: { name: "Breeh AI Team", role: "Growth" },
    date: "Jan 5, 2025",
    readTime: "5 min read",
    content: [
      "Not every dental practice is ready for an AI receptionist — but many that need one don't realize it yet. Here are five clear signals your practice would benefit from AI-powered call handling.",
      "Sign #1: Your voicemail box is full on Monday mornings. If you're finding 15+ voicemails from the weekend, you're almost certainly losing patients.",
      "Sign #2: Your front desk is constantly overwhelmed during peak hours. If your receptionist is simultaneously checking in patients, answering phones, and processing payments, calls are getting missed.",
      "Sign #3: You've noticed competitors opening nearby. In competitive markets, patient acquisition is a zero-sum game.",
      "Sign #4: You're spending on marketing but not seeing proportional growth. The leak might be in your phone system, not your marketing.",
      "Sign #5: Your patient lifetime value exceeds $2,000. The higher your PLV, the more costly each missed call becomes. The ROI math on an AI receptionist is almost always overwhelmingly positive.",
    ],
  },
  {
    slug: "future-of-dental-front-desk",
    type: "blog",
    category: "Patient Experience",
    title:
      "The Future of the Dental Front Desk: AI-Augmented, Not AI-Replaced",
    excerpt:
      "How AI receptionists are transforming front desk operations without replacing the human touch that patients value.",
    coverImage:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=500&fit=crop&q=80",
    author: { name: "Breeh AI Team", role: "Product" },
    date: "Dec 28, 2024",
    readTime: "6 min read",
    content: [
      "There's a common misconception about AI in dental practices: that it's coming to replace the front desk team. The reality is exactly the opposite. The most successful AI implementations don't eliminate human roles — they elevate them.",
      "AI dental receptionists like Breeh AI handle the phone component — the one task that creates the most stress and the most revenue leakage when done poorly.",
      "Practices that deploy AI receptionists consistently report higher staff satisfaction scores. Front desk team members no longer feel the constant pressure of a ringing phone while trying to help the patient standing in front of them.",
      "This is the future of the dental front desk: a partnership between human expertise and AI capability. The practices that embrace this model aren't just improving their call capture rates — they're creating a fundamentally better experience for both patients and staff.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  if (featuredArticle.slug === slug) return featuredArticle;
  return articles.find((a) => a.slug === slug);
}

export function getAllArticles(): Article[] {
  return [featuredArticle, ...articles];
}
