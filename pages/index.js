import About from "@/components/modules/About/About";
import Menu from "@/components/templates/Index/Menu";
import Offer from "@/components/templates/Index/Offer";
import Reservation from "@/components/templates/Index/Reservation";
import Services from "@/components/templates/Index/Services";
import Slider from "@/components/templates/Index/Slider";
import Testimonial from "@/components/templates/Index/Testimonial";

export default function Home({ menuData, testimonialData }) {
  return (
    <>
      <Slider />
      <About />
      <Services />
      <Offer />
      <Menu menuData={menuData} />
      <Reservation />
      <Testimonial testimonialData={testimonialData} />
    </>
  );
}

export async function getStaticProps() {
  const menuResponse = await fetch("http://localhost:4000/menu");
  const menuData = await menuResponse.json();
  // --
  const testimonialResponse = await fetch("http://localhost:4000/comments");
  const testimonialData = await testimonialResponse.json();

  return {
    props: {
      menuData,
      testimonialData,
    },
    revalidate: 60 * 60 * 12,
  };
}
