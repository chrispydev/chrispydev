import React from 'react';

interface Props {
  children: React.ReactNode;
}

const SectionComponent: React.FC<Props> = ({ children }) => {
  return (
    <section className='px-5 lg:px-0 md:max-w-[70%] lg:max-w-[40%] mx-auto'>
      {children}
    </section>
  );
};

export default SectionComponent;
