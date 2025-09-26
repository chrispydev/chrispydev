import React from "react";



const Header = () => {
  return (
    <header className="h-[300px] w-full" style={{ backgroundImage: "url('../public/hero-section.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="p-4 flex flex-col justify-center items-center h-full bg-pColor bg-opacity-50">
        <h1 className="text-3xl font-bold text-white">We Build Scalable & Modern Software Solutions for Your Business</h1>
        <p className="text-white mt-2">From web apps to mobile solutions, we help startups and enterprises turn ideas into powerful digital products</p>
      </div>

    </header>
  );
};
export default Header;
