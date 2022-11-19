import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import LogoImage from '../public/android-chrome-512x512.png';

const Logo = () => {
  return (
    <Link href='/'>
      <a className='flex justify-start items-center'>
        <h2 className='text-4xl font-bold text-sColor'>C</h2>
        <h3 className='text-xl lg:text-2xl tracking-tighter font-bold text-gray-700'>
          hristian Owusu
        </h3>
      </a>
    </Link>
  );
};
export default Logo;
