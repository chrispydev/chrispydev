import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";


const Header = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "We Create Web & Mobile Apps That Deliver.",
        "We Turn Your Ideas Into Powerful Digital Products."
      ],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <header className="h-[400px] w-full" style={{ backgroundImage: "url('/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="p-4 flex flex-col justify-center items-center h-full bg-pColor bg-opacity-50">
        <h1 className="text-3xl font-bold text-black">We Build Scalable & Modern Software Solutions for Your Business</h1>
        <p className="flex justify-center items-center">
          <span ref={el}></span>
        </p>
        <button className="mt-6 px-3 py-2 bg-sColor  text-white rounded-lg text-lg font-semibold">
          Get a Free Quote
        </button>
      </div>

    </header>
  );
};
export default Header;
