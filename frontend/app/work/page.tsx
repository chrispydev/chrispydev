import { caseStudies } from "@/data/case-studies";
import CaseCard from "@/components/case-card";
import AnimatedSection from "@/components/animated-section";

export default function WorkPage() {
  return (
    <main className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-center mb-6">Case Studies</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Each project showcases our expertise and the measurable outcomes we’ve delivered.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {caseStudies.map((study) => (
            <CaseCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </main>
  );
}

