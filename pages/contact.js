import H from '../components/Heading';
import styled from 'styled-components';
import Footer from '../components/Footer';

function contact() {
  return (
    <>
      <ContactWrap>
        <H as="h4" transform="captial" mt="p1" pb="p2" italic>
          Contact
        </H>

        <p>
          Hey! I get lots of email, so please scan this page before firing one
          off. Don't be afraid to email me, it just might take a few hours (or
          days) for me to get back to you 😃.
        </p>
        <p>If you want me to work for you, I am currently available.</p>
        <p>
          The portfolio section contains some of my previous work and a little
          detail about me.
        </p>
        <p>
          You did it! Thank you for scanning email me{' '}
          <a href="mailto:chrispydev.owusu@gmail.com">
            chrispydev.owusu@gmail.com
          </a>
        </p>
        <p>Here are a few tips on writing me:</p>
        <ul>
          <li>Use paragraphs, avoid large walls of text.</li>
          <li>Number your asks if there are multiple</li>
          <li>Keep it as short as you can</li>
          <li>
            Post code on a git repo, Codepen or smaller stuff or errors in a
            Gist. Screenshots are helpful too!
          </li>
        </ul>
        <p>Thanks, have a great day!</p>
      </ContactWrap>
      <Footer />
    </>
  );
}

const ContactWrap = styled.section`
  width: 80%;
  margin: auto;
  line-height: 1.9em;

  & p {
    font-weight: 400;
    font-size: 1.15rem;
  }

  & a {
    text-transform: lowercase;
    font-style: italic;
  }

  & ul {
    list-style-type: square;
    font-size: 1.04rem;
    font-weight: 400;
  }
`;

export default contact;
