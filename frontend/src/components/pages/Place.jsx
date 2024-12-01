import { useParams } from "react-router-dom";

const Place = () => {
  const { id } = useParams();
  console.log(data);
  return (
    <section className="w-dvw h-dvh flex justify-center items-center px-20 max-sm:px-2 py-2 max-2xl:pt-20 max-sm:pt-16">
      place {id}
    </section>
  );
};

export default Place;
