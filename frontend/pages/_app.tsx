import '../styles/index.scss';
import '../styles/globals.css';
import '../componentsStyles/Header.scss';
import '../componentsStyles/Skills.scss';
import '../componentsStyles/Testimonial.scss';
import '../componentsStyles/Work.scss';
import '../componentsStyles/Navbar.scss';
import '../componentsStyles/About.scss';

import NavigationDots from '../components/navigationDots';
import SocialMedia from '../components/socialMedia';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export const MyAppWrapper = (
  classNames: string,
  idName: string,
  Components: any
) =>
  function HOC() {
    return (
      <div className={`app__container ${classNames}`} id={idName}>
        <SocialMedia />
        <div className='app__wrapper app__flex'>
          <Components />
          <div className='copyright'>
            <p className='p-text'>@2022 Proph. Christian</p>
            <p className='p-text'>All right reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default MyApp;
