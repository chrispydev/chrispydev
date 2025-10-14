import React from 'react';

interface Props {
  link: string;
  icon: React.ReactElement;
  lName: string;
}

const SocialLink: React.FC<Props> = ({ link, icon, lName }) => {
  return (
    <div className='text-success font-light flex justify-center items-center space-x-2'>
      {icon}
      <a href={link}>{lName}</a>
    </div>
  );
};

export default SocialLink;

