import React from 'react';

interface Props {
  text: string;
}

const Heading: React.FC<Props> = ({ text }) => {
  return (
    <div className='relative w-max'>
      <h1 className='font-bold text-xl text-gray-900'>{text}</h1>
      <span className='absolute left-0 top-3/4 w-full h-1 bg-gray-900' />
    </div>
  );
};

export default Heading;
