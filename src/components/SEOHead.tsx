import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  image?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const BASE_URL = "https://www.breehai.com";
const DEFAULT_IMAGE = `${BASE_URL}/Breeh%20Ai%20Logo.jpg.jpeg`;

const SEOHead = ({
  title,
  description,
  canonical,
  type = "website",
  image = DEFAULT_IMAGE,
  article,
  noIndex = false,
  jsonLd,
}: SEOHeadProps) => {
  const fullTitle = title.includes("Breeh") ? title : `${title} | Breeh AI`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Breeh AI" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Article meta */}
      {article?.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
      {article?.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
      {article?.author && <meta property="article:author" content={article.author} />}
      {article?.section && <meta property="article:section" content={article.section} />}
      {article?.tags?.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;

/* ── Pre-built JSON-LD generators ── */

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Breeh AI",
  url: "https://www.breehai.com",
  logo: `${BASE_URL}/Breeh%20Ai%20Logo.jpg.jpeg`,
  description: "AI-powered receptionist for dental practices. Answers calls, schedules appointments, and manages patient follow-ups 24/7.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://calendly.com/husnainn-akram/30min",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Breeh AI",
  url: "https://www.breehai.com",
  description: "AI dental receptionist that answers calls, books appointments, and follows up with patients 24/7.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.breehai.com/resources?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Breeh AI",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "AI receptionist for dental practices — answers every call, schedules appointments, and manages patient follow-ups automatically, 24/7.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free trial available",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
  },
};

export function articleJsonLd(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${BASE_URL}/resources/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Organization",
      name: article.author || "Breeh AI",
    },
    publisher: {
      "@type": "Organization",
      name: "Breeh AI",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/Breeh%20Ai%20Logo.jpg.jpeg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/resources/${article.slug}` },
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}
