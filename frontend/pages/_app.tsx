import '../styles/index.scss';
import '../styles/globals.css';
import '../componentsStyles/Header.scss';
import '../componentsStyles/Skills.scss';
import '../componentsStyles/Testimonial.scss';
import '../componentsStyles/Work.scss';
import '../componentsStyles/Navbar.scss';
import '../componentsStyles/About.scss';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
