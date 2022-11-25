import '../styles/globals.css';
import '../styles/header.scss';
import '../styles/work-post.css';

import type { AppProps } from 'next/app';
import Main from '../components/layout/main';
import Navbar from '../components/navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Main>
      <Navbar />
      <Component {...pageProps} />
    </Main>
  );
}

export default MyApp;
