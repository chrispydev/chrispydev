import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className=''>
      <article className='flex flex-col justify-center items-center max-w-[80%]'>
        <div className='rounded-xl bg-plColor backdrop-blur-sm py-2 px-4 m-2'>
          <p>Hello, I am a Full Stack Developer living in Ghana</p>
        </div>
      </article>
    </section>
  );
};
export default AboutSection;
