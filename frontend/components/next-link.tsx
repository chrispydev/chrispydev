import Link from "next/link";
import React from "react";

interface Props {
  lName: string;
  icon?: React.ReactElement;
  lTag?: string;
  currentLink?: string;
}

const NextLink: React.FC<Props> = ({ lName, icon, lTag, currentLink }) => {
  return (
    <div className="relative group">
      {lTag ? (
        <a href={lTag} className="flex justify-between items-center">
          {icon && icon} {lName}
        </a>
      ) : (
        <Link href={`/${lName.toLowerCase()}`}>
          <div className="flex justify-between items-center">
            {icon && icon} {lName}
          </div>
        </Link>
      )}
      {/* <span className="hidden group-hover:block absolute w-2 h-2 bg-secondary rounded-full top-5 left-[50%]" /> */}
      <span className="hidden group-hover:block absolute w-full h-1 bg-secondary  -bottom-1 left-[50%] translate-x-[-50%]" />
      {currentLink === lName.toLowerCase() && (
        <span className="absolute w-full h-1 bg-secondary  -bottom-1 left-[50%] translate-x-[-50%]" />
      )}
    </div>
  );
};
export default NextLink;
