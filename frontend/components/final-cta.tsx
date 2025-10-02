"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Ready to Build Your Next Project?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg mb-8 text-gray-100"
      >
        Let’s turn your idea into reality with our expert team.
      </motion.p>
      <Link
        href="/contact"
        className="px-8 py-4 bg-yellow-400 text-indigo-900 font-semibold rounded-xl shadow-lg hover:bg-yellow-300 transition"
      >
        Book a Free Call
      </Link>
    </section>
  );
}

