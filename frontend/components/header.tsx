'use client'
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";


const Header = () => {

  return (
    <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-40 flex flex-col items-center text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          Transforming Ideas <br className="hidden md:block" />
          Into <span className="text-yellow-300">Digital Success</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mb-10"
        >
          We design, build, and scale high-impact digital solutions that drive measurable results.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/contact"
            className="px-8 py-4 bg-yellow-400 text-indigo-900 font-semibold rounded-2xl shadow-lg hover:bg-yellow-300 transition"
          >
            Book a Free Call
          </Link>
          <Link
            href="/work"
            className="px-8 py-4 border border-white/60 rounded-2xl font-semibold hover:bg-white hover:text-indigo-800 transition"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Social Proof / Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-100"
        >
          <div>
            <p className="text-3xl font-bold text-yellow-300">50+</p>
            <p className="text-sm">Projects Delivered</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-yellow-300">95%</p>
            <p className="text-sm">Client Satisfaction</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-yellow-300">10yrs+</p>
            <p className="text-sm">Combined Experience</p>
          </div>
        </motion.div>
      </div>
    </section>)
};
export default Header;
