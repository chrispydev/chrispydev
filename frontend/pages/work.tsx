import React from 'react';
import Image from 'next/image';
import { GetServerSideProps, NextPage } from 'next';

import Header from '../components/header';
import Heading from '../components/heading';
import SectionComponent from '../components/sectionComponent';

import FooterText from '../components/footerText';
import { Works } from '../types/types';
import { urlFor } from '../sanity';

interface Props {
  works: Works[];
}

const Work: NextPage<Props> = ({ works }) => {
  return (
    <>
      <Header intro='Here is my work 👇' />
      <SectionComponent>
        <div className='mt-4'>
          <Heading text='Work' />
        </div>
        <article className='grid md:grid-cols-2 gap-7 mt-4 mb-8'>
          {works.map((work, index) => (
            <a href={`work/${work.link}`} key={index}>
              <Image
                src={`${urlFor(work.imgUrl)}`}
                alt='instagram project'
                className='rounded-lg shadow-md object-cover'
                width={400}
                height={320}
              />
              <h4 className='text-xl font-bold text-gray-800'>{work.title} </h4>
              <p className='text-sm font-light'>{work.description}</p>
            </a>
          ))}
        </article>
        <FooterText />
      </SectionComponent>
    </>
  );
};

export default Work;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getWork`);
  const data = await res.json();

  const { works } = data;

  return {
    props: { works },
  };
};
