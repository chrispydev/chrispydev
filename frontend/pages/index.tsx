import type { NextPage, GetServerSideProps } from 'next';
import { sanityClient, urlFor } from '../sanity';

import Header from '../components/header';
import Navbar from '../components/navbar';
import About from '../components/about';

const Home: NextPage = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const query = '*[_type == "testimonials"]';
  const testimonials = await sanityClient.fetch(query);

  return {
    props: { testimonials },
  };
};
