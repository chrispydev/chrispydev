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
          testimony="During lock down, a friend of mine needed a mobile app for his restaurant.And he told me, so I asked my brother Christian and  my brother made it beautiful and awesome."
          name="Kwame Owusu Asante"
        />
        <Card
          src="/images/testimonial2.jpg"
          testimony="I work currently at Ghana Food and Drugs board(FDA) and we wanted to get all the emails we receive at one place. So I contact Christian and he used selenium and beautiful soup to automate  the emails for us. "
          name="Richard Andam"
        />
        <Card
          src="/images/testimonial3.jpg"
          testimony="I am a Pastor in Christ Embassy and I was doing a project and I needed a small website and Christian made a simple but beautiful and awesome website for my project."
          name="Pastor Bedu"
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
