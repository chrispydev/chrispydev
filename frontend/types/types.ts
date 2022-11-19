export interface AboutProps {
  title: string;
  description: string;
  imgUrl: string;
}

export interface WorkProps {
  title: string;
  name: string;
  description: string;
  codeLink: string;
  imgUrl: string;
  tags: string[];
  projectLink: string;
}

export interface SkillsProps {
  name: string;
  bgColor: string;
  icon: string;
}

interface work {
  name: string;
  company: string
  desc: string
}

export interface ExperienceProps {
  name: string;
  company: string;
  desc: string;
  year: string;
  works: work[];
}
