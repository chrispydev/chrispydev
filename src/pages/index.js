import Banner from '../components/Banner';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

import { server } from '../config';

export default function Home({ portfolios }) {
  return (
    <>
      <Banner />
      <About />
      <Portfolio portfolios={portfolios} />
      {/* <Portfolio /> */}
      <Testimonials />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${server}/api`);
  const portfolios = await res.json();

  return {
    props: { portfolios },
  };
}
