import React from "react";
import { testimonials } from "../types/types";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

interface Props {
  testimonials: testimonials[];
}

const Testimonials: React.FC<Props> = ({ testimonials }) => {
  return (
    <Carousel className="bg-pColor text-dColor py-4">
      {testimonials.map((testimonial, index) => (
        <CarouselItem index={index} key={index}>
          <Review by={`${testimonial.name}(${testimonial.company})`}>
            {testimonial.feedback}
          </Review>
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default Testimonials;
