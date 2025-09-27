import React from 'react';

interface Props {
  children: React.ReactNode;
  width?: string;
}

const SectionComponent: React.FC<Props> = ({ children, width }) => {
  return (
    <section className={`px-5 lg:px-0 md:max-w-[70%] lg:max-w-[${width ? width : '40'}%] mx-auto`}>
      {children}
    </section>
  );
};

export default SectionComponent;
