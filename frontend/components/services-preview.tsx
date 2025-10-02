import AnimatedSection from "./animated-section";
import ServiceCard from "./service-card";
import { services } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Core Services
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            We craft digital solutions tailored to your needs. From strategy to
            execution, we’ve got you covered.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service) => (
            <AnimatedSection key={service.id}>
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/services"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}

