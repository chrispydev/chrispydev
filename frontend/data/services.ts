// data/services.ts
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
  details: string;
  benefits: string[];
}

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "Modern, responsive websites built with Next.js, React, and scalable APIs.",
    icon: "Code",
    slug: "web-development",
    details:
      "We specialize in building blazing-fast, SEO-friendly, and scalable websites using the latest web technologies. From landing pages to complex platforms, our web solutions are tailored to business goals.",
    benefits: [
      "Next.js & React powered websites",
      "Custom API & CMS integrations",
      "SEO-first architecture",
      "Responsive and accessible design",
    ],
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    description:
      "Cross-platform iOS and Android apps with beautiful interfaces.",
    icon: "Smartphone",
    slug: "mobile-app-development",
    details:
      "We craft mobile apps that deliver seamless experiences across iOS and Android. Our team focuses on performance, usability, and scalability.",
    benefits: [
      "React Native cross-platform apps",
      "Optimized for performance",
      "User-focused design",
      "App Store & Play Store deployment",
    ],
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description:
      "Delightful interfaces and seamless user experiences designed for impact.",
    icon: "Palette",
    slug: "ui-ux-design",
    details:
      "Our design team creates visually engaging and intuitive interfaces that connect with your users. We prioritize usability, accessibility, and brand alignment.",
    benefits: [
      "User-centered design process",
      "Interactive prototypes",
      "Brand-consistent visuals",
      "Accessibility-first design",
    ],
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    description:
      "Secure, scalable cloud infrastructure and DevOps automation.",
    icon: "Cloud",
    slug: "cloud-solutions",
    details:
      "We design and manage cloud infrastructure that scales with your business. From CI/CD pipelines to security hardening, we’ve got you covered.",
    benefits: [
      "AWS, GCP & Azure expertise",
      "CI/CD automation",
      "Cloud security best practices",
      "Scalable infrastructure setup",
    ],
  },
];

