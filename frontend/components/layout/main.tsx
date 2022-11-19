import Head from 'next/head';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }) => {
  return (
    <main>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content="Christian's homepage" />
        <meta name='author' content='Christian Owusu' />
        <meta name='author' content='chrispydev' />
        <link rel='apple-touch-icon' href='apple-touch-icon.png' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Sono:wght@200;300;400;500;600;700;800&display=swap'
        />
        <title>Chrispydev - Homepage</title>
      </Head>
      {children}
    </main>
  );
};

export default Main;
