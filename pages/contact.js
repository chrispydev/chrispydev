import NavigationBar from '../components/NavigationBar';

import H from '../components/Heading';
import styled from 'styled-components';
import Footer from '../components/Footer';

function contact() {
  return (
    <>
      <NavigationBar />
      <ContactWrap>
        <H as="h4" transform="captial" mt="p1" italic>
          Contact
        </H>

        <p>
          <span>I'm still working on this page,</span> but if you'd like to have
          me work for you, please get in touch with me at{' '}
          <a href="mailto:chrispydev.owusu@gmail.com">
            chrispydev.owusu@gmail.com
          </a>
        </p>
        <p>
          <span>I usually like to speak about JavaScript,</span> CSS, Hot Tips,
          React.js, Next.js, Python, Django, Django-Rest-Framework and related
          topics.
        </p>
        <p>
          <span>Soon this page will have all the services I provide</span>
        </p>
        <ul>
          <p>Here are a few tips on writing me:</p>
          <li>Use paragraphs, avoid large walls of text.</li>
          <li>Number your asks if there are multiple</li>
          <li>Keep it as short as you can</li>
          <li>
            Post code on a git repo, <a href="https://codepen.io">Codepen</a> or
            smaller stuff or errors in a{' '}
            <a href="https://gist.github.com/">Gist</a>. Screenshots are helpful
            too!
          </li>
        </ul>
        <p>Thanks, have a great day!</p>
      </ContactWrap>
      <Footer />
    </>
  );
}

const ContactWrap = styled.section`
  width: 70%;
  margin: auto;

  & > p {
    margin-top: 2rem;
  }

  & p {
    font-size: 1.1rem;
    font-weight: 300;
    line-height: 1.8;

    & a {
      text-transform: lowercase;
      font-style: italic;
    }
  }

  & p span {
    font-weight: 600;
  }

  & ul {
    list-style-type: square;
    font-weight: 300;
  }

  & ul,
  ol {
    line-height: 1.77778;
    font-weight: 400;
  }
`;

export default contact;
