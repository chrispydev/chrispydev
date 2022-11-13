import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className: string;
}

const MotionWrapper: React.FC<Props> = ({ children, className }) => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={`${className} aapp__flex`}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
