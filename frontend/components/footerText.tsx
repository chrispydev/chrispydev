import React from 'react';

const FooterText: React.FC = () => {
  return (
    <article className='mt-4 text-gray-800 font-[400] text-sm'>
      &copy; {new Date().getFullYear()} Christian Owusu - contains code and
      styles from Takuya Matsuyama.
    </article>
  );
};

export default FooterText;
