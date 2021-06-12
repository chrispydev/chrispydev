import Link from 'next/link';
import styled from 'styled-components';
import A from '../components/Links';
import { colors } from '../lib/colors';

function Navigation() {
  return (
    <Navbar>
      <Nav>
        <ul>
          {/* <A>Home</A> */}
          <Link href="/">
            <a className="grit">Home</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/service">
            <a>Service</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </ul>
      </Nav>
    </Navbar>
  );
}

const Navbar = styled.header`
  background-color: ${colors.blue};
`;

const Nav = styled.nav`
  display: flex;
  align-content: center;
  justify-content: center;

  & > ul {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    font-weight: 900;

    & a {
      font-size: 1.3rem;
      text-decoration: none;
      color: ${colors.white};
      margin: auto;
      padding: 0.1rem 1.5rem 0.1rem 1.5rem;
      z-index: 1;
      transition: all 0.4s ease-in-out;
      position: relative;

      &:hover {
        color: ${colors.dark};
        font-weight: 900;
        font-size: 1.7rem;
      }

      @media (max-width: 425px) {
        font-size: 1.3rem;
      }

      &:before {
        /* cyran square is using ems so it scales up/down with the font size */
        width: 0.75em;
        height: 0.75em;
        content: '';
        pointer-events: none;
        position: absolute;
        z-index: -1;
        --translate: -0.06rem;
        --rotate: 0deg;
        transform: translateX(var(--translate)) translateY(var(--translate))
          rotate(var(--rotate));
      }
      &:hover:before {
        background: ${colors.cyran};
      }
    }
  }
`;

export default Navigation;
