import React from 'react';
import Logo from './logo';
import NavLink from './nav-link';

const Navbar: React.FC = () => {
  return (
    <nav className='bg-plColor p-2 flex justify-between items-center'>
      <Logo />
      <NavLink />
      <p>Toggle theme mode</p>
    </nav>
  );
};
export default Navbar;
