import AboutSection from '../components/about';
import Header from '../components/header';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <section className='bg-pColor font-sono'>
      <Navbar />
      <Header />
      <AboutSection />
    </section>
  );
}
