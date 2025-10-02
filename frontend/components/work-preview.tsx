import { caseStudies } from "@/data/case-studies";
import CaseCard from "./case-card";
import AnimatedSection from "./animated-section";

export default function WorkPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-4">Our Work</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            See how we’ve helped businesses transform with digital solutions.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.slice(0, 3).map((study) => (
            <CaseCard key={study.id} study={study} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/work"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition"
          >
            View All Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}

