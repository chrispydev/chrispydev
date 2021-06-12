import { Container, Button } from 'react-bootstrap';
import Image from 'next/image';
import styled from 'styled-components';

import H from './Heading';
import { colors } from '../lib/colors';
import { server } from '../config';

function Portfolio({ portfolios }) {
  return (
    <PortfolioWrap>
      <H as="h4" transform="upper" italic>
        My Portfolio
      </H>
      <p>
        This is some of the projects I have built when I started coding and when
        I started working{' '}
      </p>
      {portfolios?.map(({ info, detail, pic, visit, source }, index) => (
        <PortfolioContent key={index}>
          <div>
            <Image
              priority
              src={`${server}/images/${pic}`}
              width="480px"
              height="250px"
              alt={info}
              quality={100}
              objectFit="fill"
            />
          </div>
          <div className="portfolio__text">
            <h3>{info}</h3>
            <p className="port__detail">{detail}</p>
            <div>
              {visit && (
                <PortfolioButton
                  variant="outline-info"
                  target="_blank"
                  href={visit}
                  className="mx-1"
                  size="sm"
                >
                  Visit
                </PortfolioButton>
              )}
              {source && (
                <PortfolioButton
                  variant="info"
                  target="_blank"
                  href={source}
                  size="sm"
                >
                  Source Code
                </PortfolioButton>
              )}
            </div>
          </div>
        </PortfolioContent>
      ))}
    </PortfolioWrap>
  );
}

const PortfolioWrap = styled(Container)`
  text-align: center;
  padding-top: 2rem;
  max-width: 80%;

  & > h3 {
    font-weight: 700;
  }
`;

const PortfolioContent = styled.div`
  display: grid;
  grid-gap: 1.7rem;
  grid-template-columns: repeat(1, 1fr 2fr);
  margin-top: 2.8rem;
  padding: 0.4rem;
  border: 0.2rem solid ${colors.cyran};

  /* & img {
    width: 450px;
    object-fit: contain;
  } */

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-row: repeat(2, 1fr);
  }

  & .portfolio__text {
    & h3 {
      transform: translateY(-1.5rem);
      padding: 0.2rem 0.3rem;
      background-color: ${colors.dark};
      color: ${colors.white};
      font-size: 1.46em;
      font-style: italic;
      text-transform: uppercase;
      font-weight: 800;

      @media (max-width: 425px) {
        font-size: 1.1em;
      }
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
  }
`;

const PortfolioButton = styled(Button)`
  font-weight: 700 !important;
  border-radius: 0.6rem !important;
`;

export default Portfolio;
