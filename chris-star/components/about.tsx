import Image from "next/image";
import React from "react";
import { AiFillTwitterCircle, AiOutlineGithub } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

import AboutImage from "../public/about.jpg";

import Heading from "./heading";
import SocialLink from "./social-link";
import Link from "next/link";
import Wrapper from "./wrapper";

const About: React.FC = () => {
  return (
    <Wrapper>
      <article className="px-6">
        <div className="rounded-xl text-xs md:text-sm bg-primary backdrop-blur-sm py-2 px-4 m-2">
          <p>Hello, I am a Full Stack Developer based in Ghana!</p>
        </div>
        <article className="flex flex-col md:flex-row justify-between items-center mt-4">
          <div className="flex flex-col justify-start items-start mr-10">
            <h1 className="text-4xl font-bold">Christian Yaw Owusu</h1>
            <h4 className="text-xs lg:text-sm tracking-tighter text-gray-800">
              Blending Faith and Technology         </h4>
            <p className=" text-xs lg:text-sm tracking-tighter text-gray-800 font-bold">
              A Christian✝️, Web & Mobile Developer
            </p>
          </div>
          <div className="flex justify-center items-center rounded-full border-white border-2 md:mt-0 mt-6">
            <Image
              src={AboutImage}
              alt="About Image"
              width={100}
              height={100}
              className="rounded-full bg-sColor w-[120px] h-[120px]"
            />
          </div>
        </article>
        <article className="mt-7">
          <Heading underline text="Work" />
          <div className="text-sm font-light text-gray-800">
            <p>
              <b>Christian Owusu</b> is a passionate Christian software developer with a deep interest in ministry, technology, and creative digital solutions. With over five years of coding experience, he has worked as both a software developer and a freelancer, building impactful web and mobile applications.

              Driven by a love for problem-solving, he has successfully transformed innovative ideas into functional and profitable solutions, much like popular social platforms. His technical expertise spans a wide range of tools and frameworks, including Python, HTML, CSS, SASS, Django, Django REST Framework, React, React Native, SvelteKit, Dart, and Flutter.          </p>
          </div>
          <Link href="/works">
            <button className="p-2 mt-4 mx-auto text-white bg-secondary hover:cursor-pointer hover:bg-secondary/90 flex justify-center items-center rounded">
              My portfolio
              <FaAngleRight />
            </button>
          </Link>
        </article>
        <article className="mt-7">
          <Heading underline text="Bio" />
          <div className="flex justify-between items-start space-x-5 text-sm text-gray-800 mt-2">
            <div className="font-bold space-y-3">
              <h5>2018</h5>
              <h5>2019</h5>
              <h5>2021 </h5>
              <h5>2024 </h5>
            </div>
            <div className="font-light space-y-3">
              <p> Graduted from West Africa Senior High School</p>
              <p>Began learning programming and developing small projects independently</p>
              <p>
                Admitted to the University of Cape Coast (UCC) to pursue a B.Ed. in Computer Science
              </p>
              <p>
                <span className="font-bold">Completed university education at UCC, specializing in Computer Science</span>
              </p>
            </div>
          </div>
        </article>
        <article className="mt-7">
          <Heading underline text="Social Media" />
          <div className="flex flex-col justify-start items-start mt-2 space-y-4">
            <SocialLink
              link="https://www.github.com/chrispydev"
              lName="@chrispydev"
              icon={<AiOutlineGithub />}
            />{" "}
            <SocialLink
              link="https://twitter.com/chrispydev1"
              lName="@chrispydev1"
              icon={<AiFillTwitterCircle />}
            />{" "}
            <SocialLink
              link="https://instagram.com/chrispydev"
              lName="@chrispydev"
              icon={<BsInstagram />}
            />
          </div>
        </article>
      </article>
    </Wrapper>
  );
};
export default About;

