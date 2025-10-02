import FinalCTA from "@/components/final-cta";
import Header from "@/components/header";
import ServicesHome from "@/components/services-home";
import Testimonials from "@/components/testimonials";
import ValueProps from "@/components/value-props";
import WorkHome from "@/components/work-home";

export default function Home() {
  return (
    <main >
      <Header />
      <ServicesHome />
      <WorkHome />
      <ValueProps />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
