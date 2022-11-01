import { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { config, urlFor } from '../sanity';

type Props = {};

const work = (props: Props) => {
  return (
    <>
      <h2 className='head-text'>
        My Creative <span>Portfolio</span>
      </h2>
      <div className='app__work-fliter'></div>
    </>
  );
};

export default work;
