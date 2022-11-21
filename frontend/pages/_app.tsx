import '../styles/globals.css';
import '../styles/header.scss';

import type { AppProps } from 'next/app';
import Main from '../components/layout/main';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  );
}

export default MyApp;
