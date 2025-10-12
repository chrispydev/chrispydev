import FinalCTA from "@/components/final-cta";
import Header from "@/components/header";
import ServicesHome from "@/components/services-home";
import Testimonials from "@/components/testimonials";
import ValueProps from "@/components/value-props";
import WorkHome from "@/components/work-home";
import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";

const TESTIMONIALS_QUERY = `*[_type == "testimonials"] | order(_createdAt desc)[0...6]{
  _id,
  name,
  company,
  feedback
}`;

const options = { next: { revalidate: 30 } };

export default async function Home() {
  // Fetch testimonials from Sanity
  const testimonials = await client.fetch<SanityDocument[]>(
    TESTIMONIALS_QUERY,
    {},
    options
  );


  // Format them for your Testimonials component
  const formattedTestimonials = testimonials.map((t) => ({
    name: t.name || "Anonymous",
    company: t.company || "Client",
    feedback: t.feedback || "No feedback provided.",
  }));

  return (
    <main className="bg-primary-light">
      <Header headerText="We build web & mobile products that scale." typewriter={[
        "Custom software engineering.",
        "Product design.",
        "Cloud architecture for startups and enterprises.",
      ]} showButton />
      <ServicesHome />
      <WorkHome />
      <ValueProps />
      <Testimonials testimonials={formattedTestimonials} />
      <FinalCTA />
    </main>
  );
}

