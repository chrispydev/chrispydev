import React from 'react';


interface Props {
  name: string;
  description: string;
  icon: any
}

const ServiceCard: React.FC<Props> = ({ name, description, icon }) => {
  return (
    <div className="bg-plColor backdrop-blur-sm p-4 rounded-lg shadow-md flex flex-col justify-center items-center">
      {React.createElement(icon, { size: 40, className: 'text-sColor' })}
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="font-light text-sm">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
