import Image from "next/image";
import React from "react";
import { AiFillTwitterCircle, AiOutlineGithub } from "react-icons/ai";
import { FaArrowRight, FaCross } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

import AboutImage from "../public/about.jpg";
import AtomGram from "../public/bio/atomgram.png";

import Heading from "./heading";
import SocialLink from "./socialLink";
import SectionComponent from "./sectionComponent";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <SectionComponent>
      <div className="rounded-xl text-xs md:text-sm bg-plColor backdrop-blur-sm py-2 px-4 m-2">
        <p>Hello, I am a Full Stack Developer based Ghana</p>
      </div>
      <article className="flex flex-col md:flex-row justify-between items-center mt-4">
        <div className="flex flex-col justify-start items-start mr-10">
          <h1 className="text-4xl font-bold">Christian Owusu</h1>
          <h4 className="text-xs lg:text-sm tracking-tighter text-gray-800">
            Techno-Spiritual professional
          </h4>
          <p className=" text-xs lg:text-sm tracking-tighter text-gray-800 font-bold">
            A Christian✝️,/Web developer/Mobile Developer
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
          <p className="mt-2 flex">
            <span className="ml-5" /> Chrispydev is a Christian with a passion
            for ministry <FaCross className="text-sColor" />,
          </p>
          <p>
            software development, and website creation. With over five years of
            coding experience, he has been working as a software developer and
            freelancer since he started coding. He enjoys problem-solving and
            has successfully turned his solutions into profitable ventures,
            similar to Facebook or other popular social media applications. His
            skillset includes Python, HTML, CSS, SASS, Django, Django REST
            framework, React, React Native, SvelteKit, Dart, and Flutter.{" "}
          </p>
        </div>
        <Link href="/work">
          <button className="p-2 mt-4 mx-auto text-white bg-sColor flex justify-center items-center rounded">
            portfolio
            <FaArrowRight />
          </button>
        </Link>
      </article>
      <article className="mt-7">
        <Heading underline text="Bio" />
        <div className="flex justify-between items-start space-x-5 text-sm text-gray-800 mt-2">
          <div className="font-bold space-y-3">
            <h5>2017</h5>
            <h5>2018</h5>
            <h5>2020 </h5>
            <h5>2024 </h5>
          </div>
          <div className="font-light space-y-3">
            <p> Graduted from West Africa Senior High School</p>
            <p>Started coding right after high school in 2017</p>
            <p>
              Got admitted into the university and studing B.ed Computer Science
            </p>
            <p>
              <span className="font-bold">completed university(UCC)</span>
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
          <SocialLink
            link="https://atomgram.com/chrispydev"
            lName="@chrispydev"
            icon={
              <Image
                src={AtomGram}
                width={18}
                height={18}
                className="rounded-full"
                alt="atomgram logo"
              />
            }
          />
        </div>
      </article>
    </SectionComponent>
  );
};
export default About;
