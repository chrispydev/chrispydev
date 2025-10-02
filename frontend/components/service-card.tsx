"use client";

import { LucideIcon, Code, Smartphone, Palette, Cloud } from "lucide-react";
import Link from "next/link";
import { Service } from "@/data/services";

const icons: Record<string, LucideIcon> = { Code, Smartphone, Palette, Cloud };

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon] || Code;

  return (
    <div className="rounded-2xl shadow-lg p-6 bg-white hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-8 h-8 text-indigo-600" />
        <h3 className="text-xl font-semibold">{service.title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <Link
        href={`/services/${service.slug}`}
        className="text-indigo-600 font-medium hover:underline"
      >
        Learn more →
      </Link>
    </div>
  );
}

