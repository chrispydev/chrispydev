import React, { useState } from 'react';

import NextLink from './NextLink';
import { BsFillSunFill, BsGithub, BsMoonFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { GoThreeBars } from 'react-icons/go';
import Link from 'next/link';
import { FaCross } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [s, setS] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <div className='relative'>
      <nav className='static top-0 left-0 z-50 w-full bg-plColor py-2 px-7 flex justify-between md:justify-left lg:justify-center items-center shadow-md space-x-24'>
        <Link href='/'>
          <a className='flex justify-start items-center'>
            <FaCross className='text-sColor text-xl' />
            <h3 className='text-xl lg:text-2xl tracking-tighter font-bold text-gray-700'>
              Chrispydev
            </h3>
          </a>
        </Link>

        <ul className='md:flex justify-between items-center hidden space-x-6 font-medium text-gray-700'>
          <NextLink lName='Work' />
          <NextLink lName='Source' icon={<BsGithub className='mr-1' />} />
          <NextLink lName='Blog' />
        </ul>

        <div className='flex justify-center items-center space-x-2'>
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
          <button
            onClick={() => setToggle(!toggle)}
            className='bg-sColor p-2 rounded-md cursor-pointer block md:hidden'
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
          className='md:hidden z-30 absolute block right-0 bg-white py-2 px-2 mr-2 shadow-sm space-y-3'
        >
          <NextLink lName='Work' />
          <NextLink lName='Blog' />
          <NextLink lName='Source' icon={<BsGithub className='mr-1' />} />
        </motion.ul>
      )}
    </div>
  );
};
export default Navbar;
