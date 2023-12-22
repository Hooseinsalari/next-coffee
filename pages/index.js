import About from "@/components/modules/About/About";
import Services from "@/components/templates/Index/Services";
import Slider from "@/components/templates/Index/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <About />
      <Services />
    </>
  );
}
