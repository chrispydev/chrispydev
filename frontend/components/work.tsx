import React, { useState } from 'react';
// import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { WorkProps } from '../types/types';

interface Props {
  work: WorkProps[];
}

const Work: React.FC<Props> = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item: any) => {};

  return (
    <>
      <h2 className='head-text'>
        My Creative <span>Portfolio</span>
      </h2>
      <div className='app__work-fliter'>
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(index)}
              className={`app__work-filter-item app__flex ${
                activeFilter === item ? 'item-active' : ''
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      ></motion.div>
    </>
  );
};

export default Work;
