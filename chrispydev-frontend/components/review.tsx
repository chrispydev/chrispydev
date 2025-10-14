import React from 'react';

interface Props {
  by: string;
  children: React.ReactNode;
}

const Review: React.FC<Props> = ({ children, by }) => {
  return (
    <div className='flex flex-col justify-center text-center px-5 md:px-20'>
      <div className='text-sm leading-8 lg:leading-[1.6rem] tracking-tighter'>
        &ldquo;{children} &rdquo;
      </div>
      <div className='mt-6'>&mdash;{by}</div>
    </div>
  );
};

export default Review;
