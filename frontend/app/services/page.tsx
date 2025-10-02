import AnimatedSection from "@/components/animated-section";
import ServiceCard from "@/components/service-card";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-center mb-6">All Services</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Explore the full range of what we offer to help your business grow
            and thrive in the digital age.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <AnimatedSection key={service.id}>
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </main>
  );
}

