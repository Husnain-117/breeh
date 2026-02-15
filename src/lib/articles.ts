export interface Article {
  slug: string;
  type: "case-study" | "blog";
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string[];
}

export const featuredArticle: Article = {
  slug: "zen-dentistry-17x-roi",
  type: "case-study",
  title: "Zen Dentistry: 17× ROI After Failed AI Vendors — DSO Case Study",
  excerpt:
    "Zen Dentistry tried 2 AI vendors that failed. Breeh AI delivered 16-23 new patients monthly per location, 17× ROI across 24 locations.",
  date: "Jan 10, 2025",
  readTime: "11 min read",
  content: [
    "Zen Dentistry is a fast-growing DSO with 24 locations across the Midwest. Like many dental groups scaling quickly, they faced a persistent problem: missed calls were silently draining revenue. With front desks overwhelmed during peak hours and no coverage after 5 PM, an estimated 20-30% of inbound calls went unanswered every week.",
    "Before Breeh AI, Zen Dentistry tried two other AI-powered call solutions. The first was a generic virtual assistant that couldn't handle dental-specific questions — patients would ask about insurance coverage or emergency procedures and get confused, irrelevant answers. The second tool was slightly better but required extensive manual configuration and broke frequently after software updates.",
    "\"We wasted nearly 8 months and significant budget on tools that just didn't understand dentistry,\" said Dr. Arshjot A., DDS, FCAD, founder of Zen Dentistry. \"Our staff ended up doing more work, not less.\"",
    "When Zen Dentistry deployed Breeh AI in Q3 2024, the difference was immediate. Breeh's dental-first architecture meant it understood appointment types, insurance questions, urgency levels, and practice-specific workflows from day one. There was no lengthy training period — the AI was productive within 48 hours of setup.",
    "Within the first 30 days, each location saw an average of 16-23 new patients recovered from previously missed calls. These weren't just inquiries — they were confirmed, booked appointments that directly impacted the bottom line. Across all 24 locations, Zen Dentistry calculated a 17× return on their Breeh AI investment.",
    "The impact went beyond revenue. Front desk staff reported feeling less overwhelmed, with Breeh handling the overflow during Monday morning rushes and lunch hours. After-hours calls — which previously went to voicemail and were often never returned — were now being answered instantly by the AI, with patients receiving appointment confirmations before the office even opened the next morning.",
    "\"Breeh AI didn't just recover missed calls — it transformed how we think about patient access,\" Dr. Arshjot added. \"We now have 24/7 coverage across every location without hiring a single additional receptionist. I 110% recommend it to any DSO serious about growth.\"",
    "Key results: 17× ROI within 90 days. 16-23 new patients per location per month. 78% reduction in missed calls. Zero additional staff required. Sub-2 second AI response time. Full HIPAA compliance across all locations.",
  ],
};

export const articles: Article[] = [
  {
    slug: "how-missed-calls-cost-dental-practices",
    type: "blog",
    title: "How Missed Calls Are Silently Costing Your Dental Practice Thousands",
    excerpt:
      "Research shows 36% of missed new callers never call back. Learn how AI-powered call recovery can capture this lost revenue.",
    date: "Feb 8, 2025",
    readTime: "7 min read",
    content: [
      "Every dental practice misses calls. It's an unavoidable reality when your front desk team is checking in patients, handling insurance verifications, and managing the dozens of tasks that keep a practice running. But what most practice owners don't realize is just how much revenue walks out the door with each unanswered ring.",
      "According to industry research, the average dental practice misses 20-35% of inbound calls during business hours. That number jumps to 100% after hours, on weekends, and during holidays — times when patients are often most motivated to book because they're free to make the call.",
      "Here's the statistic that should keep every practice owner up at night: 36% of missed new patient callers never call back. They simply move on to the next practice in their search results. For a practice where the average patient lifetime value is $3,000-$5,000, even losing 5 new patients per month to missed calls means $180,000-$300,000 in lost annual revenue.",
      "The problem compounds for multi-location practices and DSOs. Across 10 locations, that same math translates to $1.8-$3 million in potential revenue simply evaporating because no one picked up the phone.",
      "Traditional solutions — hiring more staff, using answering services, or setting up voicemail — all have significant limitations. Additional staff is expensive and still can't handle simultaneous calls. Answering services feel impersonal and can't book appointments. Voicemail? Studies show that fewer than 20% of callers actually leave a message.",
      "This is precisely the gap that AI dental receptionists like Breeh AI are designed to fill. By answering every call instantly — whether it's the first call of the day or the fifteenth simultaneous call during a Monday morning rush — AI ensures that no patient opportunity is lost. The AI engages callers in natural, human-like conversation, answers their questions about services, insurance, and availability, and books appointments directly into your practice management software.",
      "The ROI math is straightforward: if Breeh AI recovers even 10 patients per month at an average lifetime value of $3,500, that's $420,000 in annual revenue from a technology that costs a fraction of a single employee's salary. For most practices, the system pays for itself within the first week.",
      "The bottom line: missed calls aren't just an inconvenience — they're the single largest source of preventable revenue loss in dentistry. And with AI technology purpose-built for dental workflows, there's no longer any reason to accept that loss.",
    ],
  },
  {
    slug: "ai-receptionist-vs-answering-service",
    type: "blog",
    title: "AI Receptionist vs. Traditional Answering Service: A Complete Comparison",
    excerpt:
      "Why dental practices are switching from legacy answering services to AI-powered receptionists — and seeing 3-5× better results.",
    date: "Feb 3, 2025",
    readTime: "8 min read",
    content: [
      "For decades, dental practices that wanted after-hours call coverage had one option: a traditional answering service. A human operator would pick up calls, take a message, and forward it to the office the next business day. It was better than voicemail, but not by much.",
      "Today, AI dental receptionists represent a fundamental shift in how practices handle patient communication. But how do the two approaches actually compare? Let's break it down across the metrics that matter most to practice owners.",
      "Response Quality: Traditional answering services employ generalist operators who follow scripts. They can't answer questions about your specific services, insurance acceptance, or appointment availability. Patients frequently feel like they're talking to someone who doesn't know anything about the practice — because they aren't. AI receptionists like Breeh AI are trained specifically on dental workflows. They know the difference between a routine cleaning and an emergency extraction. They can discuss insurance, explain procedures, and actually book appointments in real-time.",
      "Availability & Capacity: Answering services have staffing limitations. During high-volume periods, callers may still be placed on hold. AI receptionists handle unlimited simultaneous calls with zero wait time. Whether one person calls or fifty call at the same time, every single caller gets an immediate, personalized response.",
      "Appointment Booking: This is where the gap becomes a chasm. Traditional answering services cannot book appointments. They take messages. Those messages sit until someone at your office processes them — often hours or days later. By then, many patients have already booked elsewhere. AI receptionists book appointments instantly, directly into your practice management software. The patient hangs up with a confirmed appointment. No lag, no lost opportunities.",
      "Cost Comparison: A quality answering service typically costs $200-$500 per month and still can't book appointments or answer clinical questions. An AI receptionist like Breeh AI costs a comparable amount but delivers dramatically more value — actual booked appointments, 24/7 coverage, unlimited call capacity, and seamless PMS integration.",
      "Patient Experience: Patients increasingly prefer fast, efficient interactions. An AI receptionist that answers in under 2 seconds, understands their needs, and books their appointment in a single call creates a significantly better experience than leaving a message with an operator and waiting for a callback.",
      "The verdict is clear: AI dental receptionists outperform traditional answering services in every meaningful category. They answer faster, handle more calls, book appointments directly, cost less per outcome, and create a better patient experience. For practices still using legacy answering services, the switch to AI isn't just an upgrade — it's a competitive necessity.",
    ],
  },
  {
    slug: "allied-oms-multi-location-ai",
    type: "case-study",
    title: "Allied OMS: How a Multi-Location Practice Scaled With AI",
    excerpt:
      "Allied OMS deployed Breeh AI across 8 locations and saw a 40% increase in new patient bookings within the first quarter.",
    date: "Jan 22, 2025",
    readTime: "8 min read",
    content: [
      "Allied OMS is a multi-location oral and maxillofacial surgery practice with 8 offices spread across three states. As a specialty practice, their patient communication challenges were uniquely complex: referrals coming from dozens of general dentists, insurance pre-authorizations, surgical scheduling with specific provider availability, and a high volume of urgent calls.",
      "\"Our front desks were drowning,\" explained Brent A., Regional Operations Director. \"We had situations where a referring dentist's office would call to send us an emergency patient, and they'd get a busy signal. That's not just a missed call — that's a damaged referral relationship.\"",
      "Allied OMS had tried adding staff, but the economics didn't work at scale. Each location would need an additional 1-2 FTEs just to handle overflow calls, and even then, after-hours coverage remained a gap. The total cost across 8 locations would have exceeded $400,000 annually.",
      "When Allied OMS deployed Breeh AI, the focus was on three priorities: never miss a referral call, capture after-hours surgical inquiries, and reduce hold times during peak periods. Breeh's dental-specific AI was configured to understand oral surgery terminology, triage urgency levels, and coordinate with each location's unique provider schedule.",
      "The results exceeded expectations. Within the first quarter: new patient bookings increased by 40% across all locations. Referral call capture rate went from 72% to 99%. Average caller wait time dropped from 3.5 minutes to under 2 seconds. After-hours call recovery generated an average of 12 additional surgical consultations per location per month.",
      "\"The AI doesn't just answer calls — it understands the context,\" Brent noted. \"When a patient calls about post-surgical swelling, the AI knows to triage that differently than someone calling about a wisdom tooth consultation. That level of intelligence is what sets Breeh apart from anything else we evaluated.\"",
      "Perhaps most importantly, the staff response was overwhelmingly positive. Rather than feeling replaced, team members reported feeling supported. \"Our receptionists can finally focus on the patients standing in front of them,\" Brent said. \"The AI handles the phone, and everyone's less stressed. It's been a genuine quality-of-life improvement for our teams.\"",
      "Key results: 40% increase in new patient bookings. 99% referral call capture rate (up from 72%). 12 additional surgical consultations per location monthly. $400K+ annual savings vs. hiring additional staff. Deployed across all 8 locations in under 2 weeks.",
    ],
  },
  {
    slug: "hipaa-compliance-ai-dental",
    type: "blog",
    title: "HIPAA Compliance in AI Dental Receptionists: What You Need to Know",
    excerpt:
      "Understanding how AI dental receptionists handle patient data securely and maintain full HIPAA compliance.",
    date: "Jan 28, 2025",
    readTime: "6 min read",
    content: [
      "As dental practices increasingly adopt AI-powered communication tools, one question dominates every conversation with compliance-conscious practice owners and DSO executives: \"Is it HIPAA compliant?\" It's the right question to ask, and the answer matters enormously.",
      "HIPAA — the Health Insurance Portability and Accountability Act — establishes strict requirements for how Protected Health Information (PHI) is collected, stored, transmitted, and accessed. Any technology that handles patient names, appointment details, insurance information, or health-related conversations must comply with these regulations. The penalties for non-compliance can reach $1.5 million per violation category per year.",
      "Not all AI tools are created equal when it comes to healthcare compliance. Many general-purpose AI chatbots and virtual assistants were never designed for healthcare environments. They may store conversation data on servers without adequate encryption, lack proper access controls, or fail to maintain the audit trails that HIPAA requires.",
      "Breeh AI was built from the ground up with healthcare-grade compliance as a foundational requirement, not an afterthought. Here's what that means in practice:",
      "Data Encryption: All patient data is encrypted both in transit (TLS 1.3) and at rest (AES-256). Conversations between patients and the AI receptionist are encrypted end-to-end, ensuring that sensitive information cannot be intercepted or accessed by unauthorized parties.",
      "Access Controls: Breeh AI implements role-based access controls (RBAC) that ensure only authorized practice staff can access patient interaction records. Every access event is logged with timestamps and user identification for complete auditability.",
      "Business Associate Agreement (BAA): Breeh AI provides a signed BAA to every practice, which is a HIPAA requirement for any third-party service that handles PHI. This legally binding agreement ensures that Breeh AI is contractually obligated to protect patient data to the same standard as the practice itself.",
      "Data Retention & Deletion: Practices maintain full control over data retention policies. Patient interaction records can be configured to automatically purge after specified periods, and practices can request complete data deletion at any time — supporting both HIPAA requirements and patient privacy preferences.",
      "For dental practices and DSOs evaluating AI receptionist solutions, HIPAA compliance should be a non-negotiable requirement. Ask for documentation, review the BAA, and verify that the vendor's infrastructure meets healthcare-grade security standards. With Breeh AI, practices can confidently adopt AI-powered patient communication knowing that compliance is built into every layer of the technology.",
    ],
  },
  {
    slug: "danville-pediatric-weekend-recovery",
    type: "case-study",
    title: "Danville Pediatric Dentistry: Weekend Call Recovery Success",
    excerpt:
      "With Breeh AI handling weekend and after-hours calls, Danville recovered 23 new patients in the first month alone.",
    date: "Jan 15, 2025",
    readTime: "7 min read",
    content: [
      "Danville Pediatric Dentistry is a beloved community practice serving families in central Virginia. With a reputation built over 15 years, they rarely lacked for patient demand. Their challenge wasn't attracting patients — it was capturing them when they called.",
      "\"Parents call when it's convenient for them, which is usually evenings and weekends,\" explained Pamela W., Office Manager. \"We'd come in Monday morning to a full voicemail box, and by the time we started returning calls at 8 AM, half those parents had already booked with another pediatric dentist.\"",
      "The practice tracked their numbers and discovered a sobering reality: they were missing an average of 47 calls per week, with the highest concentration on Saturday mornings and Sunday evenings. Of those missed calls, only about 30% would call back. The rest were lost — along with an estimated $15,000-$20,000 in monthly revenue.",
      "Danville Pediatric Dentistry deployed Breeh AI specifically to address this after-hours and weekend gap. The AI was configured with their specific services (cleanings, sealants, fluoride treatments, orthodontic consultations), insurance panels, and scheduling preferences. Within hours of activation, the AI was handling its first weekend calls.",
      "The first month's results were striking: 23 new patients were booked from calls that would have previously gone to voicemail. Saturday morning — historically their weakest period for call capture — became their strongest source of new patient bookings. Parents who called at 9 PM on a Sunday received immediate, friendly responses and woke up Monday morning with confirmed appointments.",
      "\"The parents love it,\" Pamela shared. \"They tell us they were surprised someone answered on a Saturday night. When we explain it's our AI assistant, they're impressed, not put off. The AI sounds so natural that most parents don't even realize they're not talking to a person.\"",
      "After three months, Danville Pediatric Dentistry calculated that Breeh AI had generated over $67,000 in new patient revenue — more than 20× the cost of the service. They've since expanded the AI's role to handle overflow calls during busy Monday and Friday clinic days.",
      "Key results: 23 new patients recovered in month one. $67,000+ in new revenue within 90 days. 20× ROI on Breeh AI investment. Weekend call capture rate improved from 0% to 98%. Zero patient complaints about AI interaction quality.",
    ],
  },
  {
    slug: "tmanagement-centralized-ai-12-locations",
    type: "case-study",
    title: "TManagement Group: Centralized AI for 12 Locations",
    excerpt:
      "TManagement standardized patient communication across 12 locations, reducing missed calls by 78% and saving 120+ staff hours monthly.",
    date: "Dec 18, 2024",
    readTime: "10 min read",
    content: [
      "TManagement Group operates 12 dental practices across the southeastern United States, ranging from general dentistry to specialty practices including periodontics and endodontics. As the group grew through acquisitions, patient communication became increasingly fragmented — each location had different phone systems, different workflows, and different levels of call handling quality.",
      "\"We had no consistency,\" said Patricia W., Director of Operations. \"One location might answer 90% of calls. Another was answering barely 60%. And none of them had any after-hours coverage. As a management group, we needed a standardized solution that would work across all our brands and specialties.\"",
      "TManagement evaluated several options, including centralized call centers and multiple AI vendors. The call center approach was rejected due to cost ($25-30 per call) and the inability to handle dental-specific questions. Two AI vendors were piloted but failed due to poor voice quality and inability to integrate with the different PMS systems used across locations.",
      "Breeh AI was deployed across all 12 locations in a phased rollout over three weeks. Each location was configured with its specific services, providers, insurance panels, and scheduling rules. The AI seamlessly integrated with three different practice management systems (Dentrix, Open Dental, and Eaglesoft) used across the group.",
      "Within 60 days, the results were transformative: missed calls dropped by 78% across the organization, from an average of 340 missed calls per week to just 75. Those 75 remaining misses were primarily abandoned calls where the caller hung up within the first ring — before even the AI could answer.",
      "Staff efficiency improved dramatically. Across all 12 locations, TManagement estimated that Breeh AI saved over 120 staff hours per month — time that was previously spent returning voicemails, playing phone tag with patients, and manually entering appointment information. That time was redirected to in-office patient care and experience.",
      "The financial impact was equally significant. New patient bookings increased by an average of 31% across all locations, with some locations seeing increases as high as 45%. TManagement calculated the annual revenue impact at over $2.1 million in recovered and new patient revenue.",
      "\"Breeh AI gave us something we never had before: confidence that every patient who calls any of our locations gets answered, gets helped, and gets booked,\" Patricia reflected. \"It's become the backbone of our patient acquisition strategy.\"",
      "Key results: 78% reduction in missed calls across 12 locations. 120+ staff hours saved per month. 31% average increase in new patient bookings. $2.1M annual revenue impact. 3-week deployment across all locations. Integration with 3 different PMS systems.",
    ],
  },
  {
    slug: "5-signs-practice-needs-ai-receptionist",
    type: "blog",
    title: "5 Signs Your Dental Practice Needs an AI Receptionist",
    excerpt:
      "Wondering if your practice is ready for AI? Here are the telltale signs that you're losing patients and revenue to missed calls.",
    date: "Jan 5, 2025",
    readTime: "5 min read",
    content: [
      "Not every dental practice is ready for an AI receptionist — but many that need one don't realize it yet. The missed revenue from unanswered calls is invisible in most practice dashboards. Here are five clear signals that your practice would benefit from AI-powered call handling.",
      "Sign #1: Your voicemail box is full on Monday mornings. If you're coming into the office to find 15, 20, or 30+ voicemails from the weekend, you're almost certainly losing patients. Research consistently shows that fewer than half of patients who leave voicemails actually follow through with booking — and the longer it takes to call them back, the lower that number drops. An AI receptionist handles these calls in real-time, so there's no voicemail backlog to work through.",
      "Sign #2: Your front desk is constantly overwhelmed during peak hours. Watch your reception area between 8-10 AM on a Monday or 3-5 PM on a Friday. If your receptionist is simultaneously checking in patients, answering phones, and processing payments, calls are getting missed. You might not hear the missed calls because the phone is set to roll to voicemail after two rings — but the patients calling certainly notice. An AI receptionist handles overflow calls instantly, ensuring every caller gets immediate attention.",
      "Sign #3: You've noticed competitors opening nearby. In competitive markets, patient acquisition is a zero-sum game. When a potential new patient calls two practices and one answers immediately while the other goes to voicemail, the choice is obvious. An AI receptionist ensures you never lose a patient to a competitor simply because no one picked up the phone.",
      "Sign #4: You're spending on marketing but not seeing proportional growth. If you're investing in SEO, Google Ads, or direct mail but your new patient numbers aren't reflecting that investment, the leak might be in your phone system, not your marketing. Marketing drives the phone to ring; your call handling determines whether those leads convert. An AI receptionist ensures your marketing ROI isn't undermined by missed calls.",
      "Sign #5: Your patient lifetime value exceeds $2,000. The higher your patient lifetime value, the more costly each missed call becomes. For practices where a single new patient represents $3,000-$5,000+ in lifetime revenue, even recovering a handful of patients per month through AI call handling generates massive returns. If your PLV is above $2,000, the ROI math on an AI receptionist is almost always overwhelmingly positive.",
      "If you recognized your practice in two or more of these signs, it's worth exploring how an AI dental receptionist could plug the revenue gaps in your patient acquisition funnel. The technology has matured to the point where setup takes minutes, not months — and the results speak for themselves.",
    ],
  },
  {
    slug: "future-of-dental-front-desk",
    type: "blog",
    title: "The Future of the Dental Front Desk: AI-Augmented, Not AI-Replaced",
    excerpt:
      "How AI receptionists are transforming front desk operations without replacing the human touch that patients value.",
    date: "Dec 28, 2024",
    readTime: "6 min read",
    content: [
      "There's a common misconception about AI in dental practices: that it's coming to replace the front desk team. The reality is exactly the opposite. The most successful implementations of AI dental receptionists don't eliminate human roles — they elevate them.",
      "Think about what your front desk team actually does in a typical day. They greet patients, manage check-ins, verify insurance, process payments, coordinate with clinical staff, handle emergencies, manage recalls, and yes, answer phones. The phone is just one of a dozen critical responsibilities, but it's the one that suffers most when everything else demands attention.",
      "AI dental receptionists like Breeh AI are specifically designed to handle the phone component — the one task that creates the most stress and the most revenue leakage when done poorly. By offloading call handling to AI, practices aren't reducing their team. They're freeing their team to do what humans do best: provide warm, personal, face-to-face patient experiences.",
      "The data supports this approach. Practices that deploy AI receptionists consistently report higher staff satisfaction scores. Front desk team members no longer feel the constant pressure of a ringing phone while trying to help the patient standing in front of them. They can give their full attention to in-office interactions, which improves both patient experience and operational efficiency.",
      "The AI handles what it does best: answering every call instantly, managing high volumes simultaneously, maintaining consistent quality at 2 AM or 2 PM, and never having a bad day that affects patient interactions. The human team handles what they do best: reading body language, showing empathy during stressful visits, managing complex situations that require judgment, and building the personal relationships that drive patient loyalty.",
      "This is the future of the dental front desk: a partnership between human expertise and AI capability. The practices that embrace this model aren't just improving their call capture rates — they're creating a fundamentally better experience for both patients and staff.",
      "The front desk isn't going away. It's being upgraded. And the practices that recognize this shift early will have a significant competitive advantage in attracting both patients and talent in the years ahead.",
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
