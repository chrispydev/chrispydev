import type { NextPage, GetServerSideProps } from 'next';
import { sanityClient } from '../sanity';

import Header from '../components/header';
import Navbar from '../components/navbar';
import About from '../components/about';
import { AboutProps } from '../types/types';

interface HomeProps {
  abouts: AboutProps[];
}

const Home: NextPage<HomeProps> = ({ abouts }) => {
  console.log(abouts);
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
  const query = '*[_type == "abouts"]';
  const abouts = await sanityClient.fetch(query);

  return {
    props: { abouts },
  };
};
