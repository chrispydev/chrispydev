import React from "react";

interface Props {
  text: string;
  underline?: boolean;
}

const Heading: React.FC<Props> = ({ text, underline }) => {
  return (
    <div className="relative w-[contain] underline md:w-max overflow-auto break-all">
      <h1 className="font-bold text-xl text-gray-900 break-all">{text}</h1>
      {underline && (
        <span className="md:absolute hidden left-0 top-3/4 w-full h-1 bg-gray-900" />
      )}
    </div>
  );
};

export default Heading;
