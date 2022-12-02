import Image from 'next/image';
import React from 'react';
import { AiFillTwitterCircle, AiOutlineGithub } from 'react-icons/ai';
import { FaCross } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

import AboutImage from '../public/about/about.png';
import AtomGram from '../public/bio/atomgram.png';

import Heading from './heading';
import SocialLink from './socialLink';
import SectionComponent from './sectionComponent';

const About: React.FC = () => {
  return (
    <SectionComponent>
      <div className='rounded-xl text-xs md:text-sm bg-plColor backdrop-blur-sm py-2 px-4 m-2'>
        <p>Hello, I am a Full Stack Developer based Ghana</p>
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
            className='rounded-full bg-sColor w-[120px] h-[120px]'
          />
        </div>
      </article>
      <article className='mt-7'>
        <Heading underline text='Work' />
        <div className='text-sm font-light text-gray-800'>
          <p className='mt-2 flex'>
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
        <Heading underline text='Bio' />
        <div className='flex justify-between items-start space-x-5 text-sm text-gray-800 mt-2'>
          <div className='font-bold space-y-3'>
            <h5>2017</h5>
            <h5>2018</h5>
            <h5>2020 </h5>
          </div>
          <div className='font-light space-y-3'>
            <p> Graduted from West Africa Senior High School</p>
            <p>Started coding right after high school in 2017</p>
            <p>
              <span className='font-bold'>till now.</span> Got admitted into the
              university and studing B.ed Computer Science
            </p>
          </div>
        </div>
      </article>
      <article className='mt-7'>
        <Heading underline text='Social Media' />
        <div className='flex flex-col justify-start items-start mt-2 space-y-4'>
          <SocialLink
            link='https://www.github.com/chrispydev'
            lName='@chrispydev'
            icon={<AiOutlineGithub />}
          />{' '}
          <SocialLink
            link='https://twitter.com/chrispydev1'
            lName='@chrispydev1'
            icon={<AiFillTwitterCircle />}
          />{' '}
          <SocialLink
            link='https://instagram.com/chrispydev'
            lName='@chrispydev'
            icon={<BsInstagram />}
          />
          <SocialLink
            link='https://atomgram.com/chrispydev'
            lName='@chrispydev'
            icon={
              <Image
                src={AtomGram}
                width={18}
                height={18}
                className='rounded-full'
                alt='atomgram logo'
              />
            }
          />
        </div>
      </article>
    </SectionComponent>
  );
};
export default About;
