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
          <h4 className='text-xs lg:text-sm tracking-tighter text-gray-800'>
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
        <Heading text='Work' />
        <div className='text-sm font-[400] text-gray-800'>
          <p className='mt-4 flex'>
            <span className='ml-5' /> Chrispydev is a Christian who loves{' '}
            ministry
            <FaCross className='text-sColor' />,
          </p>
          <p>
            developing softwares, creating websites. He has over five year of
            coding experience.Right from the day he started coding and working
            as a software developer and a freelancer. He loves solving problems
            and turns solutions into income like facebook or any of the social
            media application. He has knowledge in python, html, css, sass,
            django, django-rest-framework, react, reactNative, sveltkit, dart,
            flutter.
          </p>
        </div>
      </article>
      <article className='mt-7'>
        <Heading text='Bio' />
        <div className='flex justify-between items-start space-x-5 text-sm text-gray-800'>
          <div className='font-bold space-y-3'>
            <h5>2017</h5>
            <h5>2018</h5>
            <h5>2020 </h5>
          </div>
          <div className='font-[400] space-y-3'>
            <p> Graduted from West Africa Senior High School</p>
            <p>Started coding right after high school in 2017</p>
            <p>
              <span className='font-bold'>till now.</span> Got admitted into the
              university and studing B.ed Computer Science
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
export default AboutSection;
