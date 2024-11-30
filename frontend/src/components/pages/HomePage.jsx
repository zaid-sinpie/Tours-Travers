import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ButtonText } from "../ui/Buttons";
import PlaceCard from "../ui/PlaceCard";

const HomePage = () => {
  const [activeLocation, setActiveLocation] = useState("indian");
  const data = useLoaderData(); // Fetched data from loader

  const buttonIndianTours = () => {
    setActiveLocation("indian");
  };

  const buttonInternationalTours = () => {
    setActiveLocation("international");
  };

  return (
    <section className="w-dvw h-dvh flex justify-center items-center px-20 max-sm:px-2 py-2 max-2xl:pt-20 max-sm:pt-16">
      <div className="w-full h-full flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col justify-start items-start w-full text-inactive">
          <h1 className="text-3xl font-bold text-black">
            Adventure Waiting Ahead!
          </h1>
          <p>Upcoming Tours Listed Below!!</p>
        </div>
        <div className="w-full flex justify-between items-center gap-4 max-sm:flex-wrap">
          <div className="flex justify-center items-center gap-4">
            <ButtonText
              id={"international"}
              activeLocation={activeLocation}
              onClick={buttonInternationalTours}
            >
              International Tours
            </ButtonText>
            <ButtonText
              id={"indian"}
              activeLocation={activeLocation}
              onClick={buttonIndianTours}
            >
              Indian Tours
            </ButtonText>
          </div>
          <div className="relative w-[30%] max-sm:w-full">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Places"
              className="outline-none border border-inactive rounded-md px-2 py-1 focus:border-black pr-10 w-full"
            />
            <button className="absolute right-0 top-0 px-4 h-[-webkit-fill-available] text-white hover:text-black active:text-white bg-black hover:bg-white border border-black rounded-r-md active:bg-black">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div className="h-[70%] w-full bg-secondaryBg rounded-md border border-inactive flex flex-col justify-around items-center gap-5 p-5 overflow-y-auto max-sm:py-10">
          {activeLocation === "indian" &&
            data.toursDataIndian.map((tour, index) => (
              <PlaceCard key={index} tour={tour} />
            ))}
          {activeLocation === "international" &&
            data.toursDataInternational.map((tour, index) => (
              <PlaceCard key={index} tour={tour} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;

// loaders/homeLoader.js
export async function homeLoader() {
  const response = await fetch("http://localhost:3000/home");
  if (!response.ok) {
    throw new Error("Failed to fetch home data");
  }
  const data = await response.json();
  return data;
}
