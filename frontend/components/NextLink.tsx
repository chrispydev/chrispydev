import Link from 'next/link';
import React from 'react';

interface Props {
  lName: string;
  icon?: React.ReactElement;
  lTag?: string;
}

const NextLink: React.FC<Props> = ({ lName, icon, lTag }) => {
  return (
    <div className='relative group'>
      {lTag ? (
        <a href={lTag} className='flex justify-between items-center'>
          {icon && icon} {lName}
        </a>
      ) : (
        <Link href={`/${lName.toLowerCase()}`}>
          <a className='flex justify-between items-center'>
            {icon && icon} {lName}
          </a>
        </Link>
      )}
      <span className='hidden group-hover:block absolute w-2 h-2 bg-dColor rounded-full top-5 left-[50%]' />
    </div>
  );
};
export default NextLink;
