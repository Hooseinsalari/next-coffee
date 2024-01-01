import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Reviews from "@/components/templates/Testimonial/Reviews";

function Testimonial({ comments }) {
  return (
    <>
      <PageHeader title="Testimonial" />
      <Reviews comments={comments} />
    </>
  );
}

export default Testimonial;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/comments");
  const comments = await response.json();

  return {
    props: {
      comments,
    },
    revalidate: 12 * 60 * 60,
  };
}
