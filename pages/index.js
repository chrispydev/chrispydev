import styled from 'styled-components';

import NavigationBar from '../components/NavigationBar';
import Banner from '../components/Banner';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

// import { server } from '../config';

export default function Home({ portfolios }) {
  return (
    <>
      <NavigationBar />
      <Banner />
      <About />
      <Portfolio />
      <Testimonials />
      <Footer />
      {/* <Portfolio portfolios={portfolios} /> */}
    </>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(`${server}/api`);
//   const portfolios = await res.json();

//   return {
//     props: { portfolios },
//   };
// }
