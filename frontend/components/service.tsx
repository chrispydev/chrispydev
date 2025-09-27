import Heading from "./heading";
import { IoPhonePortrait } from "react-icons/io5";
import { FaProjectDiagram } from "react-icons/fa";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import SectionComponent from "./sectionComponent";
import ServiceCard from "./service-card";

const Service: React.FC = () => {
  return (
    <SectionComponent width="60">
      <div className="mt-5 flex justify-center flex-col items-center text-center">
        <Heading underline text='Services I Offer' />
        <p>We build tailored digital solutions that empower businesses.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mx-6 mx-3">
        <ServiceCard description=" Crafting responsive and dynamic websites using modern technologies like React, Django, and SvelteKit." icon={FaGlobeAfrica} name="Custom Web Development" />
        <ServiceCard description="Building cross-platform mobile applications with Flutter and React Native to reach a wider audience." icon={IoPhonePortrait} name="Mobile App Development" />
        <ServiceCard description="Tailored software to automate and streamline your business." icon={FaLaptop} name="Custom Software Solutions" />
        <ServiceCard description="Designing and implementing robust RESTful APIs using Django REST framework for seamless integration." icon={FaProjectDiagram} name="API Development" />
      </div>
    </SectionComponent>
  );
};

export default Service;
