import React, { NextPage } from 'next';
import { GetStaticPaths } from 'next';

// import { PortableText } from '@portabletext/react';

import PortableText from '@sanity/block-content-to-react';

import Header from '../../components/header';
import { Works } from '../../types/types';
import Heading from '../../components/heading';
import { config, sanityClient } from '../../sanity';
import SectionComponent from '../../components/sectionComponent';

interface Props {
  filtedWork: Works[];
}

const WorkDetail: NextPage<Props> = ({ filtedWork }) => {
  return (
    <section>
      <Header intro='My work' />
      {filtedWork.map((wBody: Works, index) => (
        <article className='my-4' key={index}>
          <SectionComponent>
            <Heading text={`${wBody.title}`} underline />
            <PortableText
              blocks={wBody.body}
              projectId={config.projectId}
              dataset={config.dataset}
            />
          </SectionComponent>
        </article>
      ))}
    </section>
  );
};

export default WorkDetail;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getWork`);
//   const workName = await res.json();
//
//   const { works } = workName;
//
//   const paths = works.map((work: Works) => ({
//     params: { link: `${work.link}` },
//   }));
//
//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getStaticPaths: GetStaticPaths = async () => {
  const query = '*[_type == "works"]';
  const works = await sanityClient.fetch(query);

  const paths = works.map((work: Works) => ({
    params: { link: `${work.link}` },
  }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params: { link } }) {
  const query = '*[_type == "works"]';
  const works = await sanityClient.fetch(query);

  const filtedWork = works.filter((work: Works) => work.link == link);

  return {
    props: { filtedWork },
  };
}

// export async function getStaticProps({ params: { link } }) {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getWork`);
//
//   const workName = await res.json();
//
//   const { works } = workName;
//   const filtedWork = works.filter((work: Works) => work.link == link);
//
//   return {
//     props: { filtedWork },
//   };
// }
