import styled from 'styled-components';
import { colors } from '../lib/colors';

export default function A(props) {
  return (
    <AStyles {...props}>
      <span className="grit">{props.children}</span>
    </AStyles>
  );
}

const AStyles = styled.a`
  font-size: 1.3rem;
  /* font-weight: 800; */
  text-decoration: none;
  color: ${colors.white};
  padding-top: 1rem;
  z-index: 1;
  transition: all 0.4s ease-in-out;

  &:hover {
    color: ${colors.dark};
    font-weight: 900;
    font-size: 1.7rem;
  }

  @media (max-width: 425px) {
    font-size: 1.3rem;
  }

  position: relative;

  span.grit {
    background-size: 600px;
    padding: 2rem 2rem 2rem 0;
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
`;
