import styled from 'styled-components';
import { colors } from '../lib/colors';

function Footer() {
  return (
    <FooterWrap>
      <p>I am available, need a project?</p>
      <p>
        email me <span>CO </span>
      </p>
      <a href="mailto:chrispydev.owusu@gmail.com">chrispydev.owusu@gmail.com</a>
      <br />
      <br />
      <p>&copy; {new Date().getFullYear()}-2018</p>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  padding-top: 4rem;
  margin-top: 4rem;
  margin-bottom: -3rem;
  text-align: center;
  font-size: 1.2rem;
  background: #333;
  color: ${colors.white};

  & > * {
    padding-bottom: 0.5rem;
  }

  & a {
    color: ${colors.cyran};

    &:hover {
      color: ${colors.dark};
    }
  }

  p span {
    background: ${colors.dark};
    color: ${colors.cyran};
    padding: 0.4rem;
    border-radius: 50%;
  }

  a {
    font-style: italic;
  }
`;

export default Footer;
