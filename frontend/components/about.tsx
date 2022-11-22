import Image from 'next/image';
import React from 'react';
import { FaCross } from 'react-icons/fa';

import AboutImage from '../public/about/about.png';

import Heading from './heading';

const AboutSection: React.FC = () => {
  return (
    <section className=' px-5 lg:px-0 lg:max-w-[40%] mx-auto'>
      <div className='rounded-xl text-xs md:text-sm bg-plColor backdrop-blur-sm py-2 px-4 m-2'>
        <p>Hello, I am a Full Stack Developer living in Ghana</p>
      </div>
      <article className='flex flex-col md:flex-row justify-between items-center mt-4'>
        <div className='flex flex-col justify-start items-start mr-10'>
          <h1 className='text-4xl font-bold'>Christian Owusu</h1>
          <h4 className='text-xs lg:text-sm tracking-tighter'>
            (Man of God,Mobile dev, Web dev, Web scrapping)
          </h4>
        </div>
        <div className='flex justify-center items-center rounded-full border-white border-2 md:mt-0 mt-6'>
          <Image
            src={AboutImage}
            alt='About Image'
            width={100}
            height={100}
            className='rounded-full bg-sColor'
          />
        </div>
      </article>
      <article className='mt-7'>
        <div className=''>
          <Heading text='Work' />
          <div className='text-sm '>
            <p className='mt-4 flex'>
              <span className='ml-5' /> Chrispydev is a Christian who loves{' '}
              ministry
              <FaCross className='text-sColor' />,
            </p>
            <p>
              developing softwares, creating websites. He has over five year of
              coding experience.This include learning and working as a
              freelancer and as software developer
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
export default AboutSection;
