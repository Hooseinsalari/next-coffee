import About from "@/components/modules/About/About";
import Menu from "@/components/templates/Index/Menu";
import Offer from "@/components/templates/Index/Offer";
import Reservation from "@/components/templates/Index/Reservation";
import Services from "@/components/templates/Index/Services";
import Slider from "@/components/templates/Index/Slider";

export default function Home({ menuData }) {
  return (
    <>
      <Slider />
      <About />
      <Services />
      <Offer />
      <Menu menuData={menuData} />
      <Reservation />
    </>
  );
}

export async function getStaticProps() {
  const menuResponse = await fetch("http://localhost:4000/menu");
  const menuData = await menuResponse.json();

  return {
    props: {
      menuData,
    },
    revalidate: 60 * 60 * 12,
  };
}
