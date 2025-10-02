import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import CaseStudyDetail from "@/components/case-study-detail";
import type { Metadata } from "next";

interface Params {
  slug: string;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study) {
    return {
      title: "Case Study Not Found | Your Agency",
      description: "This case study does not exist.",
    };
  }

  return {
    title: `${study.title} | Case Studies | Your Agency`,
    description: study.description,
    openGraph: {
      title: `${study.title} | Your Agency`,
      description: study.description,
      url: `https://youragency.com/work/${study.slug}`,
      siteName: "Your Agency",
      type: "article",
      images: [study.image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | Your Agency`,
      description: study.description,
      images: [study.image],
    },
  };
}

export default function CaseStudyPage({ params }: { params: Params }) {
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study) return notFound();

  return (
    <main className="bg-white">
      <CaseStudyDetail study={study} />
    </main>
  );
}

