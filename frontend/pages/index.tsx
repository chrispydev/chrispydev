import { useEffect, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import About from '../components/about';
import FooterText from '../components/footerText';
import FormSection from '../components/formSection';

import Header from '../components/header';
import Heading from '../components/heading';
import SectionComponent from '../components/sectionComponent';
import Testimonials from '../components/testimonial';

import { testimonials } from '../types/types';
import axios from 'axios';
import getLocation from '../utils/get-location';

interface Props {
  testimonials: testimonials[];
}

const Home: NextPage<Props> = ({ testimonials }) => {
  const [location, setLocation] = useState<any>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const location = await getLocation();
        setLocation(location);
      } catch (error) {
        console.error('Error getting location:', error);
      }
    };

    fetchLocation();

    async function g() {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/sendSms`,
        { location: location }
      );
    }
    g();
  }, []);

  return (
    <section className='bg-pColor'>
      <Header intro='Freelancer' />
      <About />
      <SectionComponent>
        <article className='mt-9 text-center'>
          <Heading underline text='Testimonials' />
          <Testimonials testimonials={testimonials} />
        </article>
        <article className='mt-7'>
          <Heading underline text='Direct Message Me' />
          <FormSection />
        </article>
        <FooterText />
      </SectionComponent>
    </section>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getTestimonials`);
  const data = await res.json();

  const { testimonials } = data;

  return {
    props: { testimonials },
  };
};
