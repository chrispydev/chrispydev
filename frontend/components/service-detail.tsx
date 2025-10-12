"use client";

import { LucideIcon, Code, Smartphone, Palette, Cloud } from "lucide-react";
import { Service } from "@/data/services";
import AnimatedSection from "./animated-section";
import Link from "next/link";

const icons: Record<string, LucideIcon> = { Code, Smartphone, Palette, Cloud };

export default function ServiceDetail({ service }: { service: Service }) {
  const Icon = icons[service.icon] || Code;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <AnimatedSection>
        <div className="flex items-center gap-4 mb-8">
          <Icon className="w-10 h-10 text-indigo-600" />
          <h1 className="text-4xl font-bold">{service.title}</h1>
        </div>
        <p className="text-lg text-gray-700 mb-10">{service.details}</p>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-2xl font-semibold mb-4">What You Get</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-10">
          {service.benefits.map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection>
        <div className=" p-6 rounded-xl text-center shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Ready to start your {service.title} project?
          </h3>
          <p className="text-gray-600 mb-4">
            Let’s discuss your ideas and bring them to life.
          </p>
          <Link
            href="/contact-us"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Book a Free Call
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}

