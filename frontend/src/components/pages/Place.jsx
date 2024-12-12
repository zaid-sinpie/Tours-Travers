import { useLoaderData, Form, useParams } from "react-router-dom";
import { useRef } from "react";
import { redirect } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "../ui/Input";
import { ButtonPlaneBlack } from "../ui/Buttons";

const Place = () => {
  const form = useRef();

  const { name } = useParams();
  const data = useLoaderData();
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
      <div className="w-full bg-secondaryBg flex max-xl:flex-col justify-between items-center px-4 py-2 max-sm:mt-20">
        <img src={value.image} alt="" />
        <div className="flex flex-col justify-start items-center w-[-webkit-fill-available]">
          <div className="">
            <h1 className="text-3xl font-bold">{value.name}</h1>
          </div>
          <Form
            method="post"
            action={`/place/${value.name}`}
            ref={form}
            className="text-start flex flex-col gap-2 justify-around items-start w-[50%] max-xl:w-full"
          >
            <Input id={"fullName"} title={"Full Name"} />
            <Input id={"email"} type="email" title={"Email"} />
            <Input id={"address"} title={"Pickup Address"} />
            <Input id={"peoples"} type="number" title={"Number of People"} />
            <Input id={"phone"} type="number" min="10" title={"Phone Number"} />
            <Input type="hidden" id={"place"} value={value.name} />
            <Input type="hidden" id={"to"} value={value.to} />
            <Input type="hidden" id={"from"} value={value.from} />
            <Input type="hidden" id={"price"} value={value.price} />
            <ButtonPlaneBlack type="submit">Book</ButtonPlaneBlack>
          </Form>
        </div>
      </div>
      <ToastContainer />
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

export const action = async ({ request, params }) => {
  const fd = await request.formData();
  const data = Object.fromEntries(fd.entries());
  const response = await fetch("http://localhost:3000/place", {
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

  // toast.success("Booking successfull Redirecting to home");
  alert("Booking don successfully");

  return redirect("/home");
};
