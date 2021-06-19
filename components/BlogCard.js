import Image from 'next/image';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

import { colors } from '../lib/colors';
import H from './Heading';

function BlogCard({ pic, title, detail, link }) {
  return (
    <>
      <PortfolioContent>
        <div>
          {/* <img
            // priority="true"
            loading="lazy"
            src={`/images/${pic}`}
            width="480px"
            height="260px"
            alt="amazon"
            // quality={100}
            // objectFit="fill"
          /> */}
          <Image
            priority
            src={`/images/${pic}`}
            width="480px"
            height="260px"
            alt="amazon"
            quality={100}
            objectFit="fill"
          />
        </div>
        <div className="portfolio__text">
          {link ? (
            <Link href={link}>
              <a className="grit">{title}</a>
            </Link>
          ) : (
            <H as="h5" underline>
              {title}
            </H>
          )}

          <p className="port__detail pt-4"> {detail}</p>
        </div>
      </PortfolioContent>
    </>
  );
}

const gritty = keyframes`
  from {
    background-position: 0;
  }

  to {
    background-position: -600px;
  }
`;

const PortfolioContent = styled.div`
  display: grid;
  grid-gap: 1.7rem;
  grid-template-columns: repeat(1, 1fr 2fr);
  margin-top: 4rem;
  padding: 0.5rem;
  position: relative;

  .portfolio__text a.grit {
    background: url('/images/blackgrit.png');
    background-size: 600px;
    padding: 2rem 2rem 2rem 0;

    position: relative;
    ${({ as }) => as === 'span' && `margin-right: -2rem;`};
    &:hover {
      animation: ${gritty} 2s steps(10) infinite;
    }
  }
  .portfolio__text a {
    font-weight: 900;
    font-size: 1.6rem;
    text-align: center;
    text-decoration: underline;
    text-decoration-color: ${colors.cyran};
    color: ${colors.dark};
    margin: auto;
    /* padding: 0.1rem 1.5rem 0.1rem 1.5rem; */
    z-index: 1;
    transition: all 0.4s ease-in-out;
    position: relative;

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
      background: ${colors.cyran};
    }
    &:hover:before {
      /* background: ${colors.cyran}; */
      visibility: visible;
    }
    position: relative;
    &:after {
      position: absolute;
      z-index: 2;
      content: '';
      background: url('/images/blackgrit.png');
      background-size: contain;
      background-repeat: repeat;
      background-position: center;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-row: repeat(2, 1fr);
  }

  &::before {
    content: '';
    position: absolute;
    top: -3rem;
    width: 100%;
    height: 0.2rem;
    background: ${colors.cyran};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -3rem;
    width: 100%;
    height: 0.2rem;
    background: ${colors.cyran};
  }

  & p {
    margin-top: 8%;
    font-size: 0.9rem;
    transform: translateY(-2rem);
  }

  & p.port__detail {
    font-weight: 500;
    line-height: 1.8;
  }

  & img {
    width: 450px;
    object-fit: fill;

    @media (max-width: 425px) {
      width: 280px;
      object-fit: contain;
    }
    @media (max-width: 320px) {
      margin: -1rem;
    }
  }
`;

export default BlogCard;
