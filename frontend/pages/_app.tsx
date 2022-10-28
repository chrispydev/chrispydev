import '../styles/index.scss';
import '../styles/globals.css';
import '../componentsStyles/Header.scss';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
