import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import HImage from "../public/header/profile.png";
import Circle from "../public/header/circle.svg";
import HCircle1 from "../public/header/flutter.png";
import HCircle2 from "../public/header/python.png";
import HCircle3 from "../public/header/react.png";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

interface Props {
  intro: string;
}

const Header: React.FC<Props> = ({ intro }) => {
  return (
    <header className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header__info"
      >
        <div className="app__header__badge">
          <div className="badge-cmp app__flex sm:-mt-2 -mb-5 md:-mb-0 md:mt-4">
            <span>👋</span>
            <div className="ml-1 md:ml-4">
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Christian</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">A Full Stack Developer</p>
            <p className="p-text">{intro}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <Image
          src={HImage}
          alt="profile_bg"
          className="z-10 object-contain w-full h-36 -mb-4 md:-mb-0 md:h-min"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={Circle.src}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[HCircle1, HCircle2, HCircle3].map((circle, index) => (
          <div className="circle-cmp app__flex" key={index}>
            <Image
              src={circle}
              alt="profile_bg"
              className="w-full object-contain z-10"
            />
          </div>
        ))}
      </motion.div>
    </header>
  );
};
export default Header;
