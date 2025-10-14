import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Main from '../components/layout/main';
import Navbar from '../components/navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Main>
      <Navbar />
      <Component {...pageProps} />
    </Main>
  );
}
