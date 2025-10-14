import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";
import Wrapper from "./wrapper";
import Heading from "./heading";

interface Props {
  name: string;
  company: string;
  feedback: string;
}

interface TestimonialsProps {
  testimonials: Props[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <Wrapper>
      <article className="px-6">
        <Heading text="Voices of Our Clients" underline={true} />
        <div className="my-8">
          <Carousel className="bg-pColor text-dColor py-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem index={index} key={index}>
                <Review by={`${testimonial.name}(${testimonial.company})`}>
                  {testimonial.feedback}
                </Review>
              </CarouselItem>
            ))}
          </Carousel>
        </div>

      </article>
    </Wrapper>
  );
};

export default Testimonials;
