"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import Heading from "./heading";
import Wrapper from "./wrapper";
import Image from "next/image";
import { MoveRight } from 'lucide-react'

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
          <Heading text="Services" underline />
        </motion.h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {services.slice(0, 4).map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="pb-6  shadow rounded-2xl hover:shadow-lg transition"
            >
              <Image
                src={service.image}
                alt="service"
                width={400}
                height={400}
                className="h-[150px] w-auto rounded-t-2xl object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-indigo-600 font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <div className="mt-10 "> */}
        {/*   <Link */}
        {/*     href="/services" */}
        {/*     className="px-6 py-3 flex justify-center items-center underline text-black hover:text-secondary" */}
        {/*   > */}
        {/*     View All Services */}
        {/*     <MoveRight className="ml-1" /> */}
        {/*   </Link> */}
        {/* </div> */}
      </div>
    </Wrapper>
  );
}

