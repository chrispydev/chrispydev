import type { NextPage, GetServerSideProps } from 'next';
// import { sanityClient } from '../sanity';

import Header from '../components/header';
import Navbar from '../components/navbar';
import About from '../components/about';
import {
  AboutProps,
  ExperienceProps,
  SkillsProps,
  WorkProps,
} from '../types/types';
import Work from '../components/work';
import Skills from '../components/skills';

interface aboutsProps {
  abouts: AboutProps[];
}

interface workProps {
  work: WorkProps[];
}

interface skillsProps {
  skills: SkillsProps[];
}

interface experienceProps {
  experience: ExperienceProps[];
}

interface Props {
  abouts: aboutsProps;
  work: workProps;
  skills: skillsProps;
  experience: experienceProps;
}

const Home: NextPage<Props> = ({
  abouts: { abouts },
  work: { work },
  skills: { skills },
  experience: { experience },
}) => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About abouts={abouts} />
      // <Work works={work} />
      // <Skills skills={skills} experiences={experience} />
    </div>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const reqAbout = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getAbout`);
//   const reqWork = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getWork`);
//   const reqSkills = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getSkills`);
//   const reqExperience = await fetch(
//     `${process.env.NEXT_PUBLIC_URL}/api/getExperience`
//   );
//
//   const abouts = await reqAbout.json();
//   const work = await reqWork.json();
//   const skills = await reqSkills.json();
//   const experience = await reqExperience.json();
//
//   return {
//     props: { abouts, work, skills, experience },
//   };
// };
