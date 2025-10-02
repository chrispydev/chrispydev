"use client";

import { CaseStudy } from "@/data/case-studies";
import AnimatedSection from "./animated-section";
import Link from "next/link";

export default function CaseStudyDetail({ study }: { study: CaseStudy }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <AnimatedSection>
        <img src={study.image} alt={study.title} className="w-full h-64 object-cover rounded-xl mb-8" />
        <h1 className="text-4xl font-bold mb-4">{study.title}</h1>
        <p className="text-lg text-gray-700 mb-8">{study.description}</p>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-2xl font-semibold mb-2">The Challenge</h2>
        <p className="text-gray-600 mb-6">{study.problem}</p>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-2xl font-semibold mb-2">Our Solution</h2>
        <p className="text-gray-600 mb-6">{study.solution}</p>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-2xl font-semibold mb-4">Results</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
          {study.results.map((res, i) => (
            <li key={i}>{res}</li>
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-4 mb-10">
          {study.metrics.map((metric, i) => (
            <div key={i} className="p-4 bg-indigo-50 rounded-lg text-center">
              <p className="text-2xl font-bold text-indigo-600">{metric.value}</p>
              <p className="text-gray-600">{metric.label}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {study.testimonial && (
        <AnimatedSection>
          <blockquote className="p-6 bg-gray-100 rounded-xl shadow mb-10">
            <p className="italic mb-2">“{study.testimonial.quote}”</p>
            <footer className="text-gray-700 font-semibold">
              — {study.testimonial.author}, {study.testimonial.role}
            </footer>
          </blockquote>
        </AnimatedSection>
      )}

      <AnimatedSection>
        <div className="bg-indigo-50 p-6 rounded-xl text-center shadow-md">
          <h3 className="text-xl font-semibold mb-2">Want results like this?</h3>
          <p className="text-gray-600 mb-4">
            Let’s discuss how we can help your business achieve the same success.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Book a Free Call
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}

