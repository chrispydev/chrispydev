import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import Typing from './TypingText';
import { colors } from '../lib/colors';

function Banner() {
  return (
    <BannerWrap>
      <BannerContent>
        <p className="greeting big">Hello</p>
        <p className="typing__text">
          I am <Typing />
        </p>
        <p className="intro">
          I'm an open minded person who love to love solve problems,
          <br /> teach people programming, loves to learn. And most importantly,
          <br /> I love preaching the gospel of the Jesus Christ✝️.
          <br />
          <small className="greeting small">#chrispydev</small>
        </p>
        <div>
          <Button variant="outline-info" className="mx-2" size="md">
            My Project
          </Button>
          <Button variant="info" size="md">
            Contact Me
          </Button>
        </div>
      </BannerContent>
    </BannerWrap>
  );
}

export default Banner;

const BannerWrap = styled.div`
  position: relative;
  max-height: 600px;
  min-height: 600px;
  background: ${colors.dark} url('/images/banner.jpg') no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-content: flex-end;
`;

const BannerContent = styled.div`
  margin-left: 2vw;
  position: absolute;
  top: 60%;
  transform: translateY(-60%);
  color: ${colors.white};

  & .greeting {
    font-weight: 600;
    color: ${colors.cyran};
  }

  & .greeting.big {
    font-size: 2.5rem;

    @media (max-width: 320px) {
      font-size: 1.9rem;
    }
  }

  & .greeting.small {
    font-size: 1.2rem;
  }

  & .typing__text {
    font-size: 1.8rem;
    font-weight: 700;

    @media (max-width: 320px) {
      font-size: 1.5rem;
    }

    & span {
      color: ${colors.cyran};
      font-size: 2rem;

      @media (max-width: 320px) {
        font-size: 1.6rem;
      }
    }
  }

  & .intro {
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 1.4;
  }

  & button {
    border-radius: 4rem;
  }
`;
