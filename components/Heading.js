import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../lib/colors';

const gritty = keyframes`
  from {
    background-position: 0;
  }

  to {
    background-position: -600px;
  }
`;

const headingSizes = {
  h1: 5,
  h2: 4,
  h3: 3,
  h4: 2.5,
  h5: 2,
  h6: 1.4,
  span: 3.2,
};

const headingPadding = {
  p1: 2,
  p2: 4,
  p3: 6,
};

const textTransform = {
  upper: 'uppercase',
  lower: 'lowercase',
  capital: 'capitalize',
};

const HStyles = styled.h1`
  /* Default h1 */
  font-size: ${headingSizes.h1}rem;
  margin-top: ${({ mt }) => mt && `${headingPadding[mt]}rem`};
  padding-top: ${({ pt }) => pt && `${headingPadding[pt]}rem`};
  padding-bottom: ${({ pb }) => pb && `${headingPadding[pb]}rem`};
  /* Default allow to change */
  font-size: ${({ as }) => as && `${headingSizes[as]}rem`};
  /* Visually override if need different font size vs the semantic element */
  font-size: ${({ looksLike }) => looksLike && `${headingSizes[looksLike]}rem`};
  font-weight: 800;
  text-transform: ${({ transform }) =>
    transform && `${textTransform[transform]}`};
  text-align: ${({ center }) => (center ? 'center' : '')};
  font-style: ${({ italic }) => (italic ? 'italic' : '')};

  @media (max-width: 425px) {
    font-size: 140%;
  }
  position: relative;
  &:after {
    position: absolute;
    z-index: 2;
    content: '';
    background: url('/images/blackgrit.png');
    background-size: 700px;
    background-repeat: repeat;
    background-position: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
  }
  span.grit {
    background: url('/images/blackgrit.png');
    background-size: 600px;
    padding: 2rem 2rem 2rem 0;
    position: relative;
    ${({ as }) => as === 'span' && `margin-right: -2rem;`};
    &:hover {
      animation: ${gritty} 2s steps(10) infinite;
    }
  }

  &:before {
    /* Yellow square is using ems so it scales up/down with the font size */
    width: 0.75em;
    height: 0.75em;
    content: '';
    pointer-events: none;
    /* background: ${colors.cyran}; */
    position: absolute;
    z-index: 0;
    --translate: -0.5rem;
    --rotate: 0deg;
    transform: translateX(var(--translate)) translateY(var(--translate))
      rotate(var(--rotate));
    ${({ as }) => as === 'span' && `visibility: hidden;`};
  }
  &:hover:before {
    background: ${colors.cyran};
    visibility: visible;
  }
`;

export default function H(props) {
  return (
    <HStyles {...props}>
      <span className="grit">{props.children}</span>
    </HStyles>
  );
}

export { gritty };
