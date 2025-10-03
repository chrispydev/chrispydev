"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import Heading from "./heading";
import Wrapper from "./wrapper";

export default function ServicesHome() {
  return (
    <Wrapper>
      <div className="max-w-7xl mx-auto px-6 text-left">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 underline"
        >
          <Heading text="Our Services" underline />
        </motion.h2>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
          {services.slice(0, 4).map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-6 bg-white shadow rounded-2xl hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href={`/services/${service.slug}`}
                className="text-indigo-600 font-medium hover:underline"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/services"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            View All Services
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

