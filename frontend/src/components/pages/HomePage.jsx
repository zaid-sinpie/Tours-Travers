import { useState, useRef } from "react";
import { Form, useLoaderData } from "react-router-dom";
import { ButtonText } from "../ui/Buttons";
import PlaceCard from "../ui/PlaceCard";
import Input from "../ui/Input";
import { ButtonPlaneBlack } from "../ui/Buttons";

const HomePage = () => {
  const addToursForm = useRef();
  const [activeLocation, setActiveLocation] = useState("indian");
  const data = useLoaderData(); // Fetched data from loader
  const { indian, international } = data;

  const setActiveLocationForBtn = (location) => {
    setActiveLocation(location);
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
          <div className="flex justify-center items-center gap-4 ">
            <ButtonText
              id={"indian"}
              activeLocation={activeLocation}
              onClick={() => setActiveLocationForBtn("indian")}
            >
              Indian Tours
            </ButtonText>
            <ButtonText
              id={"international"}
              activeLocation={activeLocation}
              onClick={() => setActiveLocationForBtn("international")}
            >
              International Tours
            </ButtonText>
            <ButtonText
              id={"addTours"}
              activeLocation={activeLocation}
              onClick={() => setActiveLocationForBtn("addTours")}
            >
              Add Tours
            </ButtonText>
          </div>
          {(activeLocation === "indian" ||
            activeLocation === "international") && (
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
          )}
        </div>
        <div className="h-[70%] w-full bg-secondaryBg rounded-md border border-inactive flex flex-col justify-around items-center gap-5 p-5 overflow-y-auto max-sm:py-10">
          {indian ? (
            activeLocation === "indian" &&
            indian.map((tour, index) => <PlaceCard key={index} tour={tour} />)
          ) : (
            <p>No Data Found</p>
          )}

          {international &&
            activeLocation === "international" &&
            international.map((tour, index) => (
              <PlaceCard key={index} tour={tour} indian={indian} international={international}/>
            ))}

          {activeLocation === "addTours" && (
            <Form
              ref={addToursForm}
              method="post"
              action="/home"
              className="flex flex-col justify-around items-center gap-4 w-[50%] max-xl:w-full"
            >
              <Input title={"Name"} id={"name"} />
              <div className="flex flex-col justify-center items-start w-full gap-2">
                <label htmlFor="description">Description</label>
                <textarea
                  className="w-full px-2 py-1 outline-none border border-inactive rounded-md"
                  type="text"
                  name="description"
                  id="description"
                  required
                />
              </div>
              <Input title={"Price"} id={"price"} type="number" />
              <Input title={"Image"} id={"image"} />
              <Input title={"From"} id={"from"} type="date" />
              <Input title={"To"} id={"to"} type="date" />
              <div className="flex flex-col justify-center items-start w-full gap-2">
                <select
                  name="type"
                  id="type"
                  className="w-full px-2 py-1 outline-none border border-inactive rounded-md"
                >
                  <option value="indian">Indian</option>
                  <option value="international">International</option>
                </select>
              </div>
              <ButtonPlaneBlack type="submit">Save</ButtonPlaneBlack>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomePage;

export async function actionForAddTour({ request, params }) {
  const fd = await request.formData();
  const data = Object.fromEntries(fd.entries());
  const response = await fetch("http://localhost:3000/home", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  } else {
    console.log("data Saved Successfully!!");
  }

  return null;
}

// loaders/homeLoader.js
export async function homeLoader() {
  const response = await fetch("http://localhost:3000/home");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
}
