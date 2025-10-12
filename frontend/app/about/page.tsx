import Header from "@/components/header";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | ChrisStar Software Agency",
  description: "Learn more about our mission, vision, team, and process at ChrisStar Software Agency.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Header */}
      <Header headerText="Driven by Passion. Built with Purpose." typewriter={['Learn more about the team turning ideas into powerful products.']} />

      {/* Mission & Vision */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Mission & Vision
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To deliver innovative, scalable, and reliable software solutions
              that help businesses streamline operations, enhance customer
              experiences, and achieve measurable growth.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To be the leading software agency in Africa and beyond, recognized
              for excellence in design, development, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Meet Our Founder
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <Image
              width={100}
              height={100}
              src="/images/founder.jpg"
              alt="Founder - Christian"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-6 shadow-lg"
            />
            <h3 className="text-xl font-semibold">Christian</h3>
            <p className="text-sm text-gray-500 mb-4">Founder & CEO</p>
            <p className="text-gray-700 leading-relaxed">
              Christian started ChrisStar Software Agency with the vision of
              empowering businesses through technology. With a background in web
              and mobile development, he has led numerous successful projects
              that helped clients achieve their digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            { name: "Jane Doe", role: "UI/UX Designer", img: "/images/team1.jpg" },
            { name: "John Smith", role: "Lead Developer", img: "/images/team2.jpg" },
            { name: "Emily Davis", role: "Project Manager", img: "/images/team3.jpg" },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-10">
          We also collaborate with an extended network of skilled developers,
          designers, and strategists worldwide.
        </p>
      </section>

      {/* Values & Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Values & Process
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Core Values</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✅ Excellence in every project we deliver</li>
                <li>✅ Transparent communication with clients</li>
                <li>✅ Innovation-driven development</li>
                <li>✅ Long-term client partnerships</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Process</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Discovery & Strategy</li>
                <li>Design & Prototyping</li>
                <li>Development & Testing</li>
                <li>Launch & Support</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

