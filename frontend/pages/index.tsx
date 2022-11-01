import type { NextPage, GetServerSideProps } from 'next';
// import { sanityClient } from '../sanity';

import Header from '../components/header';
import Navbar from '../components/navbar';
import About from '../components/about';
import { AboutProps } from '../types/types';

interface abouts {
  abouts: AboutProps[];
}
interface InnerProps {
  abouts: abouts;
}

const Home: NextPage<InnerProps> = ({ abouts: { abouts } }) => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About abouts={abouts} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getAbout`);
  const abouts = await req.json();

  return {
    props: { abouts },
  };
};
