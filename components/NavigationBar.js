import styled from 'styled-components';
import A from '../components/Links';
import { colors } from '../lib/colors';

function Navigation() {
  return (
    <Navbar>
      <Nav>
        <ul>
          <A href="/">Home</A>
          <A href="/blog">Blog</A>
          <A href="/service">Service</A>
          <A href="/contact">Contact</A>
        </ul>
      </Nav>
    </Navbar>
  );
}

const Navbar = styled.header`
  background-color: ${colors.dark};
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
  }
`;

export default Navigation;
