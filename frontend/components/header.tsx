/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import React from 'react';
import ComponentWrapper from '../Wrapper/componentWrapper';

const Header: React.FC = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  const headerImages: string[] = ['/flutter.png', '/redux.png', '/sass.png'];

  return (
    <ComponentWrapper idName='home'>
      <div className='app__header app__flex'>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='app__header-info'
        >
          <div className='app__header-badge'>
            <div className='badge-cmp app__flex'>
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className='p-text'>Hello, I am</p>
                <h1 className='head-text'>Micheal</h1>
              </div>
            </div>
            <div className='tag-cmp app__flex'>
              <p className='p-text'>Wev Developer</p>

              <p className='p-text'>Freelancer</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ x: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='app__header-img'
        >
          <img src='/profile.png' alt='header image' />
          <motion.img
            whileInView={{ x: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            src='/circle.svg'
            className='overlay_circle'
          ></motion.img>
        </motion.div>
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className='app__header-circles'
        >
          {headerImages.map((cirle, index) => (
            <div className='circle-cmp app__flex' key={index}>
              <img src={cirle} alt='circle' />
            </div>
          ))}
        </motion.div>
      </div>
    </ComponentWrapper>
  );
};
export default Header;
