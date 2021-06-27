import Banner from '../components/Banner';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

import { server } from '../config';
import { useEffect, useState } from 'react';

export default function Home({ portfolios }) {
  const [portfolio, setPortfolio] = useState();

  useEffect(async () => {
    const res = await fetch(`${server}/api/blog`, {
      method: 'GET',
      headers: {
        // update with your user-agent
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
        Accept: 'application/json; charset=UTF-8',
      },
    });
    const portfolio = await res.json();
    setPortfolio(portfolio);
  }, []);
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
