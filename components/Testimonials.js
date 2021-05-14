import styled from 'styled-components';
import Card from './Card';

import H from './Heading';

function Testimonials() {
  return (
    <TestimonyWrap>
      <H as="h4" transform="upper" italic>
        Testimonials from Happy Customers
      </H>
      <TestimonialGrid>
        <Card
          src="/images/testimonial1.jpg"
          testimony="I am the head of the marking team at easternrailfarms and when we need a
        website for our business. So that we can market ourselves, we
        contacted Christian Owusu and he didn't just create the website but
        made it look awesome."
          name="Joshua Jewonu"
        />
        <Card
          src="/images/testimonial2.jpg"
          testimony="I am the head of the marking team at easternrailfarms and when we need a
        website for our business. So that we can market ourselves, we
        contacted Christian Owusu and he didn't just create the website but
        made it look awesome."
          name="Joshua Jewonu"
        />
        <Card
          src="/images/testimonial3.jpg"
          testimony="I am the head of the marking team at easternrailfarms and when we need a
        website for our business. So that we can market ourselves, we
        contacted Christian Owusu and he didn't just create the website but
        made it look awesome."
          name="Joshua Jewonu"
        />
        <Card
          src="/images/testimonial4.jpg"
          testimony="I am the head of the marking team at easternrailfarms and when we need a
        website for our business. So that we can market ourselves, we
        contacted Christian Owusu and he didn't just create the website but
        made it look awesome."
          name="Joshua Jewonu"
        />
      </TestimonialGrid>
    </TestimonyWrap>
  );
}

const TestimonyWrap = styled.section`
  padding-top: 6rem;
  text-align: center;
  width: 80%;
  margin: auto;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

export default Testimonials;
