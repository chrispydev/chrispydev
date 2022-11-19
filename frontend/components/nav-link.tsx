import Link from 'next/link';
import React from 'react';
import { BsGithub } from 'react-icons/bs';

const NavLink = () => {
  return (
    <ul className='flex justify-between items-center space-x-4 font-bold text-gray-700'>
      <div className='relative group'>
        <Link href='/work'>
          <a>Work</a>
        </Link>
        <span className='hidden group-hover:block absolute w-2 h-2 bg-dColor rounded-full top-5 left-[50%]' />
      </div>
      <Link href='/source'>
        <a className='flex justify-center items-center'>
          <BsGithub /> Source
        </a>
      </Link>
      <Link href='/#contact'>
        <a>Contact Me</a>
      </Link>
    </ul>
  );
};
export default NavLink;
