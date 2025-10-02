"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "E-commerce Platform",
    result: "+200% sales in 6 months",
    image: "/images/work1.jpg",
    slug: "ecommerce-platform",
  },
  {
    title: "Mobile Banking App",
    result: "50k+ downloads, 4.8★ rating",
    image: "/images/work2.jpg",
    slug: "mobile-banking-app",
  },
];

export default function WorkHome() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Selected Work
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img src={cs.image} alt={cs.title} className="w-full h-56 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{cs.title}</h3>
                <p className="text-gray-600 mb-4">{cs.result}</p>
                <Link
                  href={`/work/${cs.slug}`}
                  className="text-indigo-600 font-medium hover:underline"
                >
                  View Case Study →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/work"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            View All Work
          </Link>
        </div>
      </div>
    </section>
  );
}

