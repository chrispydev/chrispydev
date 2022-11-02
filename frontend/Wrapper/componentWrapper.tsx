import React from 'react';
import NavigationDots from '../components/navigationDots';
import SocialMedia from '../components/socialMedia';

interface WrapperProps {
  classNames?: string;
  idName: string;
  children: React.ReactNode;
}

const ComponentWrapper: React.FC<WrapperProps> = ({
  classNames,
  idName,
  children,
}) => {
  return (
    <div className={`app__container ${classNames}`} id={idName}>
      <SocialMedia />
      <div className='app__wrapper app__flex'>
        {children}
        <div className='copyright'>
          <p className='p-text'>@2022 Proph. Christian</p>
          <p className='p-text'>All right reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default ComponentWrapper;
