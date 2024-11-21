import { Form } from "react-router-dom";

import { ButtonPlaneBlack } from "../ui/Buttons";

const Signup = () => {
  return (
    <section className="w-dvw h-dvh flex justify-center items-center">
      <Form className="w-fit h-fit flex flex-col justify-center items-center gap-4 text-inactive px-10 py-5 border border-inactive rounded-md animate-slideInFromBottom">
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <h1 className="text-2xl font-semibold uppercase tracking-wider">
              Signup
            </h1>
          </div>
          {/* <input type="hidden" value={"signup"} name="type" className="hidden"/> */}
          <div className="flex flex-col justify-center items-start w-full gap-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-2 py-1 outline-none border border-inactive rounded-md"
            />
          </div>
          <div className="w-[100%] flex flex-col justify-center items-start gap-2">
            <label htmlFor="password" className="w-full">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-2 py-1 outline-none border border-inactive rounded-md"
            />
          </div>
          <div className="w-[100%] flex flex-col justify-center items-start gap-2">
            <label htmlFor="password" className="w-full">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
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

export default Signup;
