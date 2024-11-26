import { Form } from "react-router-dom";

import { ButtonPlaneBlack } from "../ui/Buttons";

const Login = () => {
  return (
    <section className="w-dvw h-dvh flex justify-center items-center">
      <Form
        action="/login"
        method="post"
        className="w-fit h-fit flex flex-col justify-center items-center gap-4 text-inactive border border-inactive px-10 py-5 rounded-md animate-slideInFromBottom"
      >
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <h1 className="text-2xl font-semibold uppercase tracking-wider">
              Login
            </h1>
          </div>
          {/* <input type="hidden" value={"login"} name="type" className="hidden"/> */}
          <div className="flex flex-col justify-center items-start w-full gap-2">
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              className="w-full px-2 py-1 outline-none border border-inactive rounded-md"
            />
          </div>
          <div className="w-[100%] flex flex-col justify-center items-start gap-2">
            <label htmlFor="password" className="w-full">
              Password
            </label>
            <input
              required
              type="password"
              id="password"
              name="password"
              className="w-full px-2 py-1 outline-none border border-inactive rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <ButtonPlaneBlack type="submit">Submit</ButtonPlaneBlack>
          </div>
        </div>
      </Form>
    </section>
  );
};

export default Login;

export const action = async ({ request, params }) => {
  const fd = await request.formData();
  const data = Object.fromEntries(fd.entries());
  console.log("inside action login");
  if (!data) {
    throw new Error("No data found");
  }

  if (!data["email"].includes("@")) {
    console.error("Please enter a valide Email");
  }

  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.error("something went wrong");
  }

  return null;
};
