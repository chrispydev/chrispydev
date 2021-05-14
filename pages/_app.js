import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';

import Layout from '../components/Layout';

const GlobalStyle = createGlobalStyle`
  :root {
    --dark: '#212529';
    --blue: '#193549';
    --white: '#f1f1f1';
    --cyran: '#1aebff';
  }

  body {
    font-family: 'Open Sans Condensed', sans-serif;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    overflow-x: hidden;
  }

  * {
    font-family: 'Open Sans Condensed', sans-serif;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-transform: uppercase;
    text-decoration: none;
  }

  ul {
    /* list-style: none; */
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  ::-webkit-scrollbar {
  width: 6px;
}


::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgb(25 53 73);
  border-radius: 3rem;
}
  `;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
