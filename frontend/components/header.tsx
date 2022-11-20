import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import HImage from '../public/header/profile.png';
import Circle from '../public/header/circle.svg';

const Header = () => {
  return (
    <header className='flex-1 w-full h-full flex flex-row pt-24 pr-8 pb-0 pl-0'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='flex-[0.65] flex flex-col justify-start items-start h-full my-0 mx-8'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Micael</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web Developer</p>
            <p className='p-text'>Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <Image src={HImage} alt='profile_bg' width={'60%'} height={'60%'} />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={Circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>
    </header>
  );
};
export default Header;
