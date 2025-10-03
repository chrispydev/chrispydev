'use client'
import React, { useState } from "react";
import NextLink from "./next-link";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaBars, FaStar } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);


  return (
    <div className="sticky top-0 right-0 z-50 w-full bg-primary-light/45 backdrop-blur-sm">
      <nav className="py-2 md:px-7 px-2 flex justify-between md:justify-left lg:justify-center items-center shadow-md md:space-x-24">
        <Link href="/" className="flex justify-start items-center">
          <div className="flex flex-col items-center space-y-1">
            {/* Top star */}
            <FaStar className="text-secondary text-xs" />

            <div className="flex items-center space-x-4">
              {/* Left star */}
              <FaStar className="text-secondary text-xs" />

              {/* Cross */}
              <div className="relative flex flex-col items-center">
                <div className="w-1 h-8 bg-secondary"></div>
                <div className="absolute top-2 w-8 h-1 bg-secondary"></div>
              </div>

              {/* Right star */}
              <FaStar className="text-secondary text-xs" />
            </div>

          </div>
          <h3 className="text-xl lg:text-2xl tracking-tighter font-bold text-gray-700">
            ChrisStar
          </h3>
        </Link>

        <ul className="md:flex justify-between items-center hidden space-x-6 font-medium text-gray-700">
          <NextLink lName="Work" />
          <NextLink lName="Services" />
          <NextLink lName="About" />
          <NextLink lName="Blog" />
          <NextLink lName="Contact" />
          <NextLink
            lName="Source"
            icon={<BsGithub className="mr-1" />}
            lTag="https://github.com/chrispydev/chrispydev-portfolio"
          />
        </ul>
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => setToggle(!toggle)}
            className="bg-secondary p-2 rounded-md cursor-pointer block md:hidden"
          >
            <FaBars className="text-white" />
          </button>
        </div>
      </nav>
      {toggle && (
        <motion.ul
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:hidden z-30 absolute block right-0 bg-white py-2 px-5 mr-0 shadow-sm space-y-3"
        >
          <NextLink lName="Work" />
          <NextLink lName="Services" />
          <NextLink lName="About" />
          <NextLink lName="Blog" />
          <NextLink lName="Contact" />

          <button onClick={() => setToggle(false)}>
            <NextLink lName="Work" />
          </button>
          <NextLink
            lName="Source"
            icon={<BsGithub className="mr-1" />}
            lTag="https://github.com/chrispydev/chrispydev-portfolio"
          />
        </motion.ul>
      )}
    </div>
  );
};
export default Navbar;
