import React from 'react';
import Image from 'next/image';

import Header from '../components/header';
import Heading from '../components/heading';
import SectionComponent from '../components/sectionComponent';

import InstagramImg from '../public/portfolio/Instagramgiveaway.png';
import DjangoBlogApp from '../public/portfolio/djangoblogapp.png';
import FooterText from '../components/footerText';

export default function () {
  return (
    <>
      <Header intro='He is my work 👇' />
      <SectionComponent>
        <div className='mt-4'>
          <Heading text='Work' />
        </div>
        <article className='grid md:grid-cols-2 gap-7 mt-4 mb-8'>
          <a href='www.google.com'>
            <Image
              src={InstagramImg}
              alt='instagram project'
              className='rounded-md shadow-md'
            />
            <h4 className='text-xl font-bold text-gray-800'>
              Instagram Giveaway Project
            </h4>
            <p className='text-sm font-light'>
              A giveaway project for scrapping data from
            </p>
          </a>
          <a href='www.google.com'>
            <Image
              src={DjangoBlogApp}
              alt='instagram project'
              className='rounded-md shadow-md'
            />
            <h4 className='text-xl font-bold text-gray-800'>Django Blog App</h4>
            <p className='text-sm font-light'>
              A giveaway project for scrapping data from
            </p>
          </a>
        </article>
        <FooterText />
      </SectionComponent>
    </>
  );
}
