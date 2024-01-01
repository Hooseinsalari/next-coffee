import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Pricing from "@/components/templates/Menu/Pricing";

function Menu({ menuData }) {
  return (
    <>
      <PageHeader title="Menu" />
      <Pricing menuData={menuData} />
    </>
  );
}

export default Menu;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/menu");
  const menuData = await response.json();

  return {
    props: {
      menuData,
    },
    revalidate: 12 * 60 * 60,
  };
}
