import { NextPage } from 'next';
// import Image from 'next/image';

const Header: NextPage = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src='/logo.png' />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'Above', 'contact', 'work', 'skills', 'contact'].map(
          (item) => (
            <li key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};
export default Header;
