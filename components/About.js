import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../lib/colors';

import H from './Heading';

function About() {
  return (
    <AboutWrap>
      <Row>
        <Col sm={12} md={6} lg={6}>
          <AboutImage src="/images/about.png" loading="lazy" />
        </Col>
        <Col sm={12} md={6} lg={6}>
          <H as="h5" pt="p1">
            I am an Amazing developer
          </H>

          <AboutIntro>
            My Name is Christian Owusu Yaw and am a full stack python, react
            developer. I have three years of professional coding experience.
            Currently, I work in easternrailfarms, beltsville and a student of
            University of Cape Coast. Am studding B.ed Computer Science. I have
            knowledge in html, css, javascript and python. And when it comes to
            frameworks and libraries. I know jQuery, bootstrap, materialize css,
            material-ui, Semantic UI, django, django-rest-frame, beautiful-soup,
            selenium, react.js, react-native and next.js. I use these
            technologies to create websites, mobile apps and web automation and
            web scraping.
          </AboutIntro>
          <Row className="mt-4">
            <Col>
              <AboutDetails>Name</AboutDetails>
              <AboutDetails>Age</AboutDetails>
              <AboutDetails>Address</AboutDetails>
              <AboutDetails>Phone Number</AboutDetails>
              <AboutDetails>Email Address</AboutDetails>
            </Col>
            <Col>
              <Aboutinfo>: Christian Owusu Yaw</Aboutinfo>
              <Aboutinfo>: 22years</Aboutinfo>
              <Aboutinfo>: Adenta, Accra</Aboutinfo>
              <Aboutinfo>:(+233) 553 782 097</Aboutinfo>
              <Aboutinfo>: christianowusu44@gmail.com</Aboutinfo>
            </Col>
          </Row>
        </Col>
      </Row>
    </AboutWrap>
  );
}

const AboutWrap = styled.section`
  width: 90%;
  margin: 2rem auto;
`;

const AboutImage = styled.img`
  max-width: 350px;
  width: 100%;
  height: 400px;
  object-fit: contain;
  background-color: ${colors.dark};
  box-shadow: 8px 3px ${colors.cyran};
`;

const AboutHeader = styled.h1`
  font-size: 1.9rem;
  text-transform: capitalize;
  font-weight: 700;
  margin-bottom: 1.2rem;
  padding-top: 2rem;
`;

const AboutIntro = styled.small`
  font-weight: 400;
  font-size: 0.83rem;
`;

const AboutDetails = styled.h5`
  font-size: 1.1rem;
  font-weight: 600;
  padding-bottom: 0.74rem;

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`;

const Aboutinfo = styled.p`
  font-weight: 300;

  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`;

export default About;
