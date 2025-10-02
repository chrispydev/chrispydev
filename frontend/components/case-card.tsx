"use client";

import Link from "next/link";
import { CaseStudy } from "@/data/caseStudies";
import AnimatedSection from "./animated-section";

export default function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <AnimatedSection>
      <div className="rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-xl transition hover:-translate-y-1">
        <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
          <p className="text-gray-600 mb-4">{study.description}</p>
          <Link
            href={`/work/${study.slug}`}
            className="text-indigo-600 font-medium hover:underline"
          >
            Read Case Study →
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}

