import { GetServerSideProps, NextPage } from 'next';

import About from '../components/about';
import FooterText from '../components/footerText';
import FormSection from '../components/formSection';
import Header from '../components/header';
import Heading from '../components/heading';
import SectionComponent from '../components/sectionComponent';
import Testimonials from '../components/testimonial';
import { testimonials } from '../types/types';

interface Props {
  testimonials: testimonials[];
}

const Home: NextPage<Props> = ({ testimonials }) => {
  return (
    <section className='bg-pColor font-sono'>
      <Header intro='Freelancer' />
      <About />
      <SectionComponent>
        <article className='mt-9 text-center'>
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
