import About from '../components/about';
import FooterText from '../components/footerText';
import FormSection from '../components/formSection';
import Header from '../components/header';
import Heading from '../components/heading';
import SectionComponent from '../components/sectionComponent';
import Testimonials from '../components/testimonial';

export default function Home() {
  return (
    <section className='bg-pColor font-sono'>
      <Header intro='Freelancer' />
      <About />
      <SectionComponent>
        <article className='mt-9 text-center'>
          {/*<Heading text="What our Customer's say" underline />*/}
          <Testimonials />
        </article>
        <article className='mt-7'>
          <Heading underline text='Direct Message Me' />
          <FormSection />
        </article>
        <FooterText />
      </SectionComponent>
    </section>
  );
}
