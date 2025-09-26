import React, { useState } from "react";

import NextLink from "./NextLink";
import { BsGithub } from "react-icons/bs";
// import { BsFillSunFill, BsGithub, BsMoonFill } from 'react-icons/bs';
import { motion } from "framer-motion";
import { GoThreeBars } from "react-icons/go";
import Link from "next/link";
import { FaCross } from "react-icons/fa";

const Navbar: React.FC = () => {
  // const [s, setS] = useState(false);
  const [toggle, setToggle] = useState(false);

  // function dropDown() {
  //   console.log("Hello World");
  //   // setTimeout(() => {
  //   //   setToggle(false);
  //   // }, 500);
  // }

  return (
    <div className="sticky top-0 right-0 z-50 w-full bg-plColor/40 backdrop-blur-sm">
      <nav className="py-2 md:px-7 px-2 flex justify-between md:justify-left lg:justify-center items-center shadow-md md:space-x-24">
        <Link href="/" legacyBehavior>
          <a className="flex justify-start items-center">
            <FaCross className="text-sColor text-xl" />
            <h3 className="text-xl lg:text-2xl tracking-tighter font-bold text-gray-700">
              ChrisStar
            </h3>
          </a>
        </Link>

        <ul className="md:flex justify-between items-center hidden space-x-6 font-medium text-gray-700">
          <NextLink lName="Work" />
          <NextLink lName="Service" />
          <NextLink lName="Portfolio" />
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
          {/*
          {s ? (
            <motion.button
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className='bg-sColor p-2 rounded-md cursor-pointer'
              onClick={() => setS(!s)}
            >
              <BsFillSunFill className='text-white' />
            </motion.button>
          ) : (
            <motion.button
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.7 }}
              className='bg-dColor p-2 rounded-md cursor-pointer'
              onClick={() => setS(!s)}
            >
              <BsMoonFill className='text-white' />
            </motion.button>
          )}
*/}
          <button
            onClick={() => setToggle(!toggle)}
            className="bg-sColor p-2 rounded-md cursor-pointer block md:hidden"
          >
            <GoThreeBars />
          </button>
        </div>
      </nav>
      {toggle && (
        <motion.ul
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:hidden z-30 absolute block right-0 bg-white py-2 px-2 mr-2 shadow-sm space-y-3"
        >
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
