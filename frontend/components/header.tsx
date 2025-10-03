'use client'
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";


const Header = () => {

  return (
    <section className="relative overflow-hidden" style={{ backgroundImage: "url('/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto px-6 lg:px-8 bg-secondary/10 bur backdrop-blur-md py-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-secondary">We build web & mobile products that scale.</h1>
          <p className="mt-4 text-base md:text-lg text-white">
            <Typewriter
              words={[
                "Custom software engineering.",
                "Product design.",
                "Cloud architecture for startups and enterprises.",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-lg bg-secondary md:px-5 md:py-3 px-5 py-3 text-base text-white shadow hover:shadow-lg transition-transform transform hover:-translate-y-0.5">Book a Call</Link>
            <Link href="/work" className="inline-flex items-center rounded-lg border hover:border-0 hover:text-white text-white hover:bg-secondary transition border-slate-200 md:px-5 md:py-3 px-5 py-3 text-base">See our work</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
};
export default Header;
