import About from '../components/about';
import Header from '../components/header';

export default function Home() {
  return (
    <section className='bg-pColor font-sono'>
      <Header intro='Freelancer' />
      <About />
    </section>
  );
}
