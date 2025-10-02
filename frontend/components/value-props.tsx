"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Users } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Proven Expertise",
    text: "A track record of successful projects across industries.",
  },
  {
    icon: Zap,
    title: "Fast & Agile",
    text: "We deliver efficiently without compromising quality.",
  },
  {
    icon: Users,
    title: "Client-Centered",
    text: "Your business goals drive everything we design and build.",
  },
];

export default function ValueProps() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Why Work With Us
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="p-6 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <v.icon className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
              <p className="text-gray-600">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

