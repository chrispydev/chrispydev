import type { NextPage, GetServerSideProps } from 'next';
import { sanityClient, urlFor } from '../sanity';

const Home: NextPage = ({ testimonials }) => {
  console.log(testimonials);
  return (
    <div>
      <p className='text-blue-300'>Hello world test</p>
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
