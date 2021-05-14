import Image from 'next/image';
import styled from 'styled-components';
import { colors } from '../lib/colors';

import H from './Heading';

function Card({ src, testimony, name }) {
  return (
    <TestimonialsContent>
      <div>
        <div className="rounded__image">
          <CustomNextImage priority src={src} width="100px" height="100px" />
        </div>

        <div>
          <p>{testimony}</p>
          <H as="h6" transform="upper">
            {name}
          </H>
        </div>
      </div>
    </TestimonialsContent>
  );
}

const TestimonialsContent = styled.div`
  border: 0.2rem solid ${colors.cyran};
  margin-top: 4rem;
  border-radius: 1rem;
  padding: 0.3rem;
  text-align: center;

  & .rounded__image {
    top: 30%;
    transform: translateY(-30%);
    margin: auto;
    width: 120px;
    height: 120px;
    padding-top: -10rem;
    border-radius: 50%;
  }
`;

const CustomNextImage = styled(Image)`
  border-radius: 50%;
`;

export default Card;
