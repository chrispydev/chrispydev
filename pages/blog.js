import styled from 'styled-components';
import Footer from '../components/Footer';

import NavigationBar from '../components/NavigationBar';

function blog() {
  return (
    <>
      <NavigationBar />
      <BlogWrap>
        <p>
          I'm still working on this page, but if you'd like to have me work for
          you, please get in touch with me at{' '}
          <a href="mailto:chrispydev.owusu@gmail.com">
            chrispydev.owusu@gmail.com
          </a>
        </p>
        <p>
          I usually like to speak about JavaScript, CSS, Hot Tips, React.js,
          Next.js, Python, Django, Django-Rest-Framework and related topics.
        </p>
        <p>Soon this page will have all the services I provide</p>
      </BlogWrap>
      <Footer />
    </>
  );
}

const BlogWrap = styled.section`
  width: 70%;
  margin: auto;

  & > p {
    margin-top: 2rem;
  }

  & p {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.8;

    & a {
      text-transform: lowercase;
      font-style: italic;
    }
  }
`;

export default blog;
