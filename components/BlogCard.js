import Image from 'next/image';
import styled from 'styled-components';

import { colors } from '../lib/colors';
import H from './Heading';

function BlogCard({ pic, title, detail }) {
  return (
    <>
      <PortfolioContent>
        <div>
          <Image
            priority
            src={`/images/${pic}`}
            width="480px"
            height="250px"
            alt="amazon"
            quality={100}
            objectFit="fill"
          />
        </div>
        <div className="portfolio__text">
          <H as="h5" underline>
            {title}
          </H>
          <p className="port__detail"> {detail}</p>
        </div>
      </PortfolioContent>
    </>
  );
}

const PortfolioContent = styled.div`
  display: grid;
  grid-gap: 1.7rem;
  grid-template-columns: repeat(1, 1fr 2fr);
  margin-top: 4rem;
  padding: 0.5rem;
  position: relative;

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
`;

export default BlogCard;
