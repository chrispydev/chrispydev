import React from 'react';
import Carousel from './carousel';
import CarouselItem from './carousel-item';
import Review from './review';

const Testimonials: React.FC = () => {
  return (
    <Carousel className='bg-pColor text-dColor py-4'>
      <CarouselItem index={0}>
        <Review by='Axel (Showtime)'>
          Margel and Showtime both share the love for high quality software and
          the passion fo building something people want
        </Review>
      </CarouselItem>{' '}
      <CarouselItem index={1}>
        <Review by='Axel (Showtime)'>
          Margel and Showtime both share the love for high quality software and
          the passion fo building something people want
        </Review>
      </CarouselItem>
      <CarouselItem index={2}>
        <Review by='Axel (Showtime)'>
          Margel and Showtime both share the love for high quality software and
          the passion fo building something people want
        </Review>
      </CarouselItem>
    </Carousel>
  );
};

export default Testimonials;
