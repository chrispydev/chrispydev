import { NextComponentType } from 'next';
import { motion } from 'framer-motion';
import { AboutProps } from '../types/types';
import { urlFor } from '../sanity';

interface AboutPageProps {
  abouts: AboutProps[];
}

const About = ({ abouts }: AboutPageProps) => {
  return (
    <>
      <h2 className='head-text'>
        I know That <span>Good Design</span>
        <br />
        means
        <span>Good Business</span>
      </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
          >
            <img src={urlFor(about?.imgUrl).url()} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about?.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about?.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
