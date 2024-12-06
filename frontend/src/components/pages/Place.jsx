import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";

const Place = () => {
  const { name } = useParams();
  const data = useLoaderData(); // Fetched data from loader
  const { indian, international } = data;
  const indiaFind = indian.find((item) => name === item.name);
  let value;
  if (indiaFind) {
    value = indiaFind;
  } else {
    value = international.find((item) => name === item.name);
  }
  return (
    <section className="w-dvw h-dvh flex justify-center items-center px-20 max-sm:px-2 py-2 max-2xl:pt-20 max-sm:pt-16">
      <p>place {value.id}</p>
      <img src={value.image} alt="" />
    </section>
  );
};

export default Place;

export const loader = async ({ request, params }) => {
  // console.log(params.name);
  const response = await fetch("http://localhost:3000/place");
  if (!response.ok) {
    throw new Error("something went wrong!");
  }
  const data = await response.json();
  // console.log(data);
  return data;
};
