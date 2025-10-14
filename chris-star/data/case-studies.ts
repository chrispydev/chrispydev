// data/caseStudies.ts
export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  slug: string;
  description: string;
  image: string;
  problem: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
  testimonial?: { quote: string; author: string; role: string };
}

export const caseStudies: CaseStudy[] = [
  {
    id: "ecommerce",
    title: "E-commerce Platform Redesign",
    client: "RetailCo",
    slug: "ecommerce-platform-redesign",
    description:
      "A complete redesign and rebuild of RetailCo’s e-commerce platform, boosting sales and user satisfaction.",
    image: "/images/casestudies/ecommerce.jpg",
    problem: "RetailCo’s old site was slow, not mobile-friendly, and conversions were dropping.",
    solution:
      "We rebuilt the platform with Next.js, integrated Shopify APIs, and optimized the checkout process.",
    results: [
      "Faster load times and seamless mobile UX",
      "Custom product filtering and recommendation engine",
      "Integrated analytics dashboards for business insights",
    ],
    metrics: [
      { label: "Conversion Rate", value: "+42%" },
      { label: "Page Load Speed", value: "1.2s avg" },
      { label: "Revenue Growth", value: "+28%" },
    ],
    testimonial: {
      quote:
        "The redesign transformed our business — sales are up and customers love the new experience!",
      author: "Sarah Johnson",
      role: "CMO, RetailCo",
    },
  },
  {
    id: "fintech",
    title: "FinTech Mobile App",
    client: "PaySmart",
    slug: "fintech-mobile-app",
    description:
      "We developed a secure, user-friendly fintech app for PaySmart with real-time transaction monitoring.",
    image: "/images/casestudies/fintech.jpg",
    problem: "Users lacked trust due to poor UX and confusing financial dashboards.",
    solution:
      "We designed a mobile-first app with intuitive flows, biometric login, and clear financial insights.",
    results: [
      "Secure, PCI-compliant infrastructure",
      "User base grew by 60% in 6 months",
      "App Store rating increased from 3.1 to 4.7",
    ],
    metrics: [
      { label: "User Growth", value: "+60%" },
      { label: "App Rating", value: "4.7★" },
      { label: "Support Tickets", value: "-35%" },
    ],
  },
];

