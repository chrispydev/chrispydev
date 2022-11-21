import Image from 'next/image';
import React from 'react';

import AboutImage from '../public/about/about.png';

const AboutSection: React.FC = () => {
  return (
    <section className='flex flex-col justify-center items-center px-5 lg:px-0 lg:max-w-[80%] mx-auto'>
      <div className='rounded-xl text-xs md:text-base bg-plColor backdrop-blur-sm py-2 px-4 m-2'>
        <p>Hello, I am a Full Stack Developer living in Ghana</p>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center mt-4'>
        <div className='flex flex-col justify-start items-start'>
          <h1 className='text-4xl font-bold'>Christian Owusu</h1>
          <h4 className='text-xs lg:text-sm text-ellipsis overflow-hidden'>
            (Man of God,Mobile dev, Web dev, Web scrapping)
          </h4>
        </div>
        <Image
          src={AboutImage}
          alt='About Image'
          width={100}
          height={100}
          className='rounded-full border-white border-[4px]'
        />
      </div>
    </section>
  );
};
export default AboutSection;
