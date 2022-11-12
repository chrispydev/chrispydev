import type { NextPage, GetServerSideProps } from 'next';
// import { sanityClient } from '../sanity';

import Header from '../components/header';
import Navbar from '../components/navbar';
import About from '../components/about';
import { AboutProps, WorkProps } from '../types/types';
import Work from '../components/work';

interface abouts {
  abouts: AboutProps[];
}

interface work {
  work: WorkProps[];
}

interface InnerProps {
  abouts: abouts;
  work: work;
}

const Home: NextPage<InnerProps> = ({ abouts: { abouts }, work: { work } }) => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About abouts={abouts} />
      <Work work={work} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const reqAbout = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getAbout`);
  const reqWork = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getWork`);
  const abouts = await reqAbout.json();
  const work = await reqWork.json();

  return {
    props: { abouts, work },
  };
};
